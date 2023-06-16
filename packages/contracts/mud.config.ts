import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  enums: {
    MonsterCatchResult: ["Missed", "Caught", "Fled"],
    MonsterType: ["None", "Eagle", "Rat", "Caterpillar",
      "Skeleton", "Rogue", "Vampire"
    ],
    TerrainType: ["None", "TallGrass", "Boulder", "Path"],
  },
  tables: {
    Encounter: {
      keySchema: {
        player: "bytes32",
      },
      schema: {
        exists: "bool",
        monster: "bytes32",
        catchAttempts: "uint256",
      },
    },
    EncounterTrigger: "bool",
    Encounterable: "bool",
    MapConfig: {
      keySchema: {},
      dataStruct: false,
      schema: {
        width: "uint32",
        height: "uint32",
        terrain: "bytes",
        pathx: "uint8[72]",
        pathy: "uint8[72]"
      },
    },
    MonsterCatchAttempt: {
      ephemeral: true,
      dataStruct: false,
      keySchema: {
        encounter: "bytes32",
      },
      schema: {
        result: "MonsterCatchResult",
      },
    },


    Pause: "bool",
    LastPause: {
      dataStruct: false,
      schema: {
        timestamp: "uint256",
        pathIndex: "uint8"
      },
    },
    AutoFight: "bool",
    BlockPerMove: "uint32",
    GameStart: "bool",
    GameStartTime: "uint256",
    Home: {
      dataStruct: false,
      schema: {
        index: "uint8",
        x: "uint8",
        y: "uint8",
      }
    },


    Monster: "MonsterType",
    Movable: "bool",
    Obstruction: "bool",
    OwnedBy: "bytes32",
    Player: "bool",
    Position: {
      dataStruct: false,
      schema: {
        x: "uint32",
        y: "uint32",
      },
    },
  },
});
