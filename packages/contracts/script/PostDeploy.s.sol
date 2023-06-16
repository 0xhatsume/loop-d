// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { Script } from "forge-std/Script.sol";
import { console } from "forge-std/console.sol";
import { IWorld } from "../src/codegen/world/IWorld.sol";
import { EncounterTrigger, MapConfig, Obstruction, Position,
  Home } from "../src/codegen/Tables.sol";
import {MapSystem} from "../src/systems/MapSystem.sol";
import { addressToEntityKey } from "../src/addressToEntityKey.sol";
import { TerrainType } from "../src/codegen/Types.sol";
import { positionToEntityKey } from "../src/positionToEntityKey.sol";

contract PostDeploy is Script {
  function run(address worldAddress) external {
    console.log("Deployed world: ", worldAddress);
    IWorld world = IWorld(worldAddress);

    uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
    vm.startBroadcast(deployerPrivateKey);

    TerrainType O = TerrainType.None;
    TerrainType T = TerrainType.TallGrass;
    TerrainType B = TerrainType.Boulder;

    TerrainType[18][18] memory map = [
      //, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7
      [O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O], //0
      [O, O, T, T, T, O, O, O, O, O, O, O, O, O, O, O, O, O], //1
      [O, T, T, O, T, O, O, O, O, O, O, O, O, O, O, O, O, O], //2
      [O, T, O, O, T, O, O, O, O, T, T, T, O, O, O, O, O, O], //3
      [O, T, O, O, T, T, T, T, T, T, O, T, T, T, T, T, T, O], //4
      [O, T, O, O, O, O, O, O, O, O, O, O, O, O, O, O, T, O], //5
      [O, T, T, T, O, O, O, O, O, O, O, O, O, O, O, T, T, O], //6
      [O, O, O, T, O, O, O, O, O, O, O, O, O, O, O, T, O, O], //7
      [O, T, T, T, O, O, O, O, O, O, O, O, O, O, O, T, O, O], //8
      [O, T, O, O, O, O, O, O, O, O, O, O, O, O, O, T, T, O], //9
      [O, T, O, O, O, O, O, O, O, O, O, O, O, O, O, O, T, O], //10
      [O, T, O, O, O, O, O, O, O, O, O, O, O, O, O, O, T, O], //11
      [O, T, O, O, O, O, O, O, O, O, O, O, O, O, O, O, T, O], //12
      [O, T, T, O, O, O, T, T, T, T, O, O, O, O, O, O, T, O], //13
      [O, O, T, O, O, O, T, O, O, T, O, O, O, T, T, T, T, O], //14
      [O, O, T, O, O, O, T, O, O, T, T, T, T, T, O, O, O, O], //15
      [O, O, T, T, T, T, T, O, O, O, O, O, O, O, O, O, O, O], //16
      [O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O] //17
      //, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7
    ];

    // uint8[2][72] memory path = [
    //   [2,16],[3,16],[4,16],[5,16],[6,16],[6,15],[6,14],[6,13],[7,13],[8,13],
    //   [9,13],[9,14],[9,15],[10,15],[11,15],[12,15],[13,15],[13,14],[14,14],[15,14],
    //   [16,14],[16,13],[16,12],[16,11],[16,10],[16,9],[15,9],[15,8],[15,7],[15,6],
    //   [16,6],[16,5],[16,4],[15,4],[14,4],[13,4],[12,4],[11,4],[11,3],[10,3],
    //   [9,3],[9,4],[8,4],[7,4],[6,4],[5,4],[4,4],[4,3],[4,2],[4,1],
    //   [3,1],[2,1],[2,2],[1,2],[1,3],[1,4],[1,5],[1,6],[2,6],[3,6],
    //   [3,7],[3,8],[2,8],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[2,13],
    //   [2,14],[2,15]
    // ];

    uint8[72] memory pathX = [
      2,3,4,5,6, 6,6,6, 7,8,9, 9,9, 10,11,12,13, 13,14,15,
      16, 16,16,16,16,16,15,15,15,15, 16,16,16,15,14,13,12,11,11,10,9,
      9, 8, 7, 6, 5, 4, 4, 4, 4, 3, 2, 2, 1, 1, 1, 1, 1,2, 3, 3, 
      3, 2, 1, 1,1,1,1,1,2,2,2
    ];
    uint8[72] memory pathY = [
      16,16,16,16,16,15,14,13,13,13,13,14,15,15,15,15,15,14,14,14,
      14,13,12,11,10,9,9,8,7,6,6,5,4,4,4,4,4,4,3,3,3,
      4,4,4,4,4,4,3,2,1,1,1,2,2,3,4,5,6,6,6,7,8,8,8,9,10,11,12,13,13,14,15
    ];

    uint256 rand = uint256(keccak256(abi.encode(
      world, blockhash(block.number - 1), block.difficulty))
      );
    
    uint8 homePosition = uint8(rand % 72);
    console.log("Home Position of ", homePosition, pathX[homePosition], pathY[homePosition]);
    // set home position
    // bytes32 _world = addressToEntityKey(worldAddress);
    // Home.set(_world, homePosition, pathX[homePosition], pathY[homePosition]);
    //MapSystem.setHome(world, homePosition, pathX[homePosition], pathY[homePosition]);

    uint32 height = uint32(map.length);
    uint32 width = uint32(map[0].length);
    bytes memory terrain = new bytes(width * height);

    for (uint32 y = 0; y < height; y++) {
      for (uint32 x = 0; x < width; x++) {

        TerrainType terrainType = map[y][x];
        // if (terrainType == TerrainType.None) continue;

        // just to create terrain
        terrain[(y * width) + x] = bytes1(uint8(terrainType));

        //bytes32 entity = positionToEntityKey(x, y);
        
        // remove bolders and encounters
        // if (terrainType == TerrainType.Boulder) {
        //   Position.set(world, entity, x, y);
        //   Obstruction.set(world, entity, true);
        // } else if (terrainType == TerrainType.TallGrass) {
        //   Position.set(world, entity, x, y);
        //   EncounterTrigger.set(world, entity, true);
        // }

      }
    }

    MapConfig.set(world, width, height, terrain, pathX,pathY);

    vm.stopBroadcast();
  }
}
