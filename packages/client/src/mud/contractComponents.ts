/* Autogenerated file. Do not edit manually. */

import { TableId } from "@latticexyz/utils";
import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
    Encounter: (() => {
      const tableId = new TableId("", "Encounter");
      return defineComponent(
        world,
        {
          exists: RecsType.Boolean,
          monster: RecsType.String,
          catchAttempts: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    EncounterTrigger: (() => {
      const tableId = new TableId("", "EncounterTrigger");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Encounterable: (() => {
      const tableId = new TableId("", "Encounterable");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MapConfig: (() => {
      const tableId = new TableId("", "MapConfig");
      return defineComponent(
        world,
        {
          width: RecsType.Number,
          height: RecsType.Number,
          terrain: RecsType.String,
          pathx: RecsType.NumberArray,
          pathy: RecsType.NumberArray,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MonsterCatchAttempt: (() => {
      const tableId = new TableId("", "MonsterCatchAtte");
      return defineComponent(
        world,
        {
          result: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Pause: (() => {
      const tableId = new TableId("", "Pause");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    LastPause: (() => {
      const tableId = new TableId("", "LastPause");
      return defineComponent(
        world,
        {
          timestamp: RecsType.BigInt,
          pathIndex: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    AutoFight: (() => {
      const tableId = new TableId("", "AutoFight");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    BlockPerMove: (() => {
      const tableId = new TableId("", "BlockPerMove");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    GameStart: (() => {
      const tableId = new TableId("", "GameStart");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    GameStartTime: (() => {
      const tableId = new TableId("", "GameStartTime");
      return defineComponent(
        world,
        {
          value: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Home: (() => {
      const tableId = new TableId("", "Home");
      return defineComponent(
        world,
        {
          index: RecsType.Number,
          x: RecsType.Number,
          y: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Monster: (() => {
      const tableId = new TableId("", "Monster");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Movable: (() => {
      const tableId = new TableId("", "Movable");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Obstruction: (() => {
      const tableId = new TableId("", "Obstruction");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    OwnedBy: (() => {
      const tableId = new TableId("", "OwnedBy");
      return defineComponent(
        world,
        {
          value: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Player: (() => {
      const tableId = new TableId("", "Player");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Position: (() => {
      const tableId = new TableId("", "Position");
      return defineComponent(
        world,
        {
          x: RecsType.Number,
          y: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
  };
}
