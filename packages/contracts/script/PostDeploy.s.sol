// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { Script } from "forge-std/Script.sol";
import { console } from "forge-std/console.sol";
import { IWorld } from "../src/codegen/world/IWorld.sol";
import { EncounterTrigger, MapConfig, Obstruction, Position } from "../src/codegen/Tables.sol";
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
    ];

    uint32 height = uint32(map.length);
    uint32 width = uint32(map[0].length);
    bytes memory terrain = new bytes(width * height);

    for (uint32 y = 0; y < height; y++) {
      for (uint32 x = 0; x < width; x++) {
        TerrainType terrainType = map[y][x];
        if (terrainType == TerrainType.None) continue;

        terrain[(y * width) + x] = bytes1(uint8(terrainType));

        bytes32 entity = positionToEntityKey(x, y);
        if (terrainType == TerrainType.Boulder) {
          Position.set(world, entity, x, y);
          Obstruction.set(world, entity, true);
        } else if (terrainType == TerrainType.TallGrass) {
          Position.set(world, entity, x, y);
          EncounterTrigger.set(world, entity, true);
        }
      }
    }

    MapConfig.set(world, width, height, terrain);

    vm.stopBroadcast();
  }
}
