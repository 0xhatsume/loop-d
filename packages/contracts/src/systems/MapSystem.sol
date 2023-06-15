// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;
import { System } from "@latticexyz/world/src/System.sol";
import { Encounter, EncounterData, Encounterable, EncounterTrigger, 
    Home, BlockPerMove, GameStart, LastPause, Pause, AutoFight,
    MapConfig, Monster, Movable, Obstruction, Player, Position } from "../codegen/Tables.sol";
import { MonsterType } from "../codegen/Types.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";
import { positionToEntityKey } from "../positionToEntityKey.sol";

contract MapSystem is System {
  function spawn(uint32 x, uint32 y) public {
    bytes32 player = addressToEntityKey(address(_msgSender()));
    require(!Player.get(player), "already spawned");

    // Constrain position to map size, wrapping around if necessary
    (uint32 width, uint32 height,, ,) = MapConfig.get();
    x = (x + width) % width;
    y = (y + height) % height;

    bytes32 position = positionToEntityKey(x, y);
    require(!Obstruction.get(position), "this space is obstructed");

    Player.set(player, true);
    Position.set(player, x, y);
    Movable.set(player, true);
    Encounterable.set(player, true);
  }

  function move(uint32 x, uint32 y) public {
    bytes32 player = addressToEntityKey(_msgSender());
    require(Movable.get(player), "cannot move");

    require(!Encounter.getExists(player), "cannot move during an encounter");

    (uint32 fromX, uint32 fromY) = Position.get(player);
    require(distance(fromX, fromY, x, y) == 1, "can only move to adjacent spaces");

    // Constrain position to map size, wrapping around if necessary
    (uint32 width, uint32 height,,,) = MapConfig.get();
    x = (x + width) % width;
    y = (y + height) % height;

    bytes32 position = positionToEntityKey(x, y);
    require(!Obstruction.get(position), "this space is obstructed");

    Position.set(player, x, y);

    if (Encounterable.get(player) && EncounterTrigger.get(position)) {
      uint256 rand = uint256(keccak256(abi.encode(player, position, blockhash(block.number - 1), block.difficulty)));
      if (rand % 5 == 0) {
        startEncounter(player);
      }
    }
  }

  function distance(uint32 fromX, uint32 fromY, uint32 toX, uint32 toY) internal pure returns (uint32) {
    uint32 deltaX = fromX > toX ? fromX - toX : toX - fromX;
    uint32 deltaY = fromY > toY ? fromY - toY : toY - fromY;
    return deltaX + deltaY;
  }

  function startEncounter(bytes32 player) internal {
    bytes32 monster = keccak256(abi.encode(player, blockhash(block.number - 1), block.difficulty));
    MonsterType monsterType = MonsterType((uint256(monster) % uint256(type(MonsterType).max)) + 1);
    Monster.set(monster, monsterType);
    Encounter.set(player, EncounterData({exists: true, monster: monster, catchAttempts: 0}));
  }

  // Setters
  function setHome(address world, uint8 index, uint8 x, uint8 y) public {
    bytes32 _world = addressToEntityKey(world);
    Home.set(_world, index, x, y);
  }

  function startGame() public {
    bytes32 player = addressToEntityKey(address(_msgSender()));
    require(!GameStart.get(player), "game already started");


    // set default blocks per move
    BlockPerMove.set(player, 5);
    // set last pause to current block number
    LastPause.set(player, block.number, 0);
    Pause.set(player, false);
    AutoFight.set(player, true);

    GameStart.set(player, true);
  }

  function setBlocksPerMove(uint32 blocksPerMove) public {
    bytes32 player = addressToEntityKey(address(_msgSender()));
    BlockPerMove.set(player, blocksPerMove);
  }

  // View functions
  function playerPosition(address player) view public {
    bytes32 _player = addressToEntityKey(address(player));
    Position.get(_player);

    // if not paused, plain player position is based on 
    //  ((current block number - LastPause) / BlocksPerMove) + LastPosition
  }

}
