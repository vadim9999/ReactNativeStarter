const capsulesData = [
  {
    "capsule_serial": "C101",
    "capsule_id": "dragon1",
    "status": "retired",
    "original_launch": "2010-12-08T15:43:00.000Z",
    "original_launch_unix": 1291822980,
    "missions": [
      {
        "name": "COTS 1",
        "flight": 7
      }
    ],
    "landings": 0,
    "type": "Dragon 1.0",
    "details": "Reentered after three weeks in orbit",
    "reuse_count": 0
  },
  {
    "capsule_serial": "C102",
    "capsule_id": "dragon1",
    "status": "retired",
    "original_launch": "2012-05-22T07:44:00.000Z",
    "original_launch_unix": 1335944640,
    "missions": [
      {
        "name": "COTS 2",
        "flight": 8
      }
    ],
    "landings": 1,
    "type": "Dragon 1.0",
    "details": "First Dragon spacecraft",
    "reuse_count": 0
  },
  {
    "capsule_serial": "C103",
    "capsule_id": "dragon1",
    "status": "unknown",
    "original_launch": "2012-10-08T00:35:00.000Z",
    "original_launch_unix": 1349656500,
    "missions": [
      {
        "name": "CRS-1",
        "flight": 9
      }
    ],
    "landings": 1,
    "type": "Dragon 1.0",
    "details": "First of twenty missions flown under the CRS1 contract",
    "reuse_count": 0
  },
  {
    "capsule_serial": "C104",
    "capsule_id": "dragon1",
    "status": "unknown",
    "original_launch": "2013-03-01T19:10:00.000Z",
    "original_launch_unix": 1362165000,
    "missions": [
      {
        "name": "CRS-2",
        "flight": 10
      }
    ],
    "landings": 1,
    "type": "Dragon 1.0",
    "details": null,
    "reuse_count": 0
  },
  {
    "capsule_serial": "C105",
    "capsule_id": "dragon1",
    "status": "unknown",
    "original_launch": "2014-04-18T19:25:00.000Z",
    "original_launch_unix": 1397849100,
    "missions": [
      {
        "name": "CRS-3",
        "flight": 14
      }
    ],
    "landings": 1,
    "type": "Dragon 1.1",
    "details": "First Dragon v1.1 capsule",
    "reuse_count": 0
  },
  {
    "capsule_serial": "C106",
    "capsule_id": "dragon1",
    "status": "active",
    "original_launch": "2014-09-21T05:52:00.000Z",
    "original_launch_unix": 1411278720,
    "missions": [
      {
        "name": "CRS-4",
        "flight": 18
      },
      {
        "name": "CRS-11",
        "flight": 41
      },
      {
        "name": "CRS-19",
        "flight": 85
      }
    ],
    "landings": 3,
    "type": "Dragon 1.1",
    "details": "First Dragon capsule to be reused",
    "reuse_count": 2
  },
  {
    "capsule_serial": "C107",
    "capsule_id": "dragon1",
    "status": "unknown",
    "original_launch": "2015-01-10T09:47:00.000Z",
    "original_launch_unix": 1420883220,
    "missions": [
      {
        "name": "CRS-5",
        "flight": 19
      }
    ],
    "landings": 1,
    "type": "Dragon 1.1",
    "details": null,
    "reuse_count": 0
  },
  {
    "capsule_serial": "C108",
    "capsule_id": "dragon1",
    "status": "active",
    "original_launch": "2015-04-14T20:10:00.000Z",
    "original_launch_unix": 1429042200,
    "missions": [
      {
        "name": "CRS-6",
        "flight": 22
      },
      {
        "name": "CRS-13",
        "flight": 51
      },
      {
        "name": "CRS-18",
        "flight": 82
      }
    ],
    "landings": 3,
    "type": "Dragon 1.1",
    "details": "Second Dragon capsule to be reused",
    "reuse_count": 2
  },
  {
    "capsule_serial": "C109",
    "capsule_id": "dragon1",
    "status": "destroyed",
    "original_launch": "2015-06-28T14:21:00.000Z",
    "original_launch_unix": 1435501260,
    "missions": [
      {
        "name": "CRS-7",
        "flight": 24
      }
    ],
    "landings": 0,
    "type": "Dragon 1.1",
    "details": "Destroyed on impact after F9 launch failure",
    "reuse_count": 0
  },
  {
    "capsule_serial": "C110",
    "capsule_id": "dragon1",
    "status": "active",
    "original_launch": "2016-04-08T20:43:00.000Z",
    "original_launch_unix": 1460148180,
    "missions": [
      {
        "name": "CRS-8",
        "flight": 28
      },
      {
        "name": "CRS-14",
        "flight": 59
      }
    ],
    "landings": 2,
    "type": "Dragon 1.1",
    "details": null,
    "reuse_count": 1
  },
  {
    "capsule_serial": "C111",
    "capsule_id": "dragon1",
    "status": "active",
    "original_launch": "2016-07-18T04:45:00.000Z",
    "original_launch_unix": 1468817100,
    "missions": [
      {
        "name": "CRS-9",
        "flight": 32
      },
      {
        "name": "CRS-15",
        "flight": 64
      }
    ],
    "landings": 2,
    "type": "Dragon 1.1",
    "details": null,
    "reuse_count": 1
  },
  {
    "capsule_serial": "C112",
    "capsule_id": "dragon1",
    "status": "active",
    "original_launch": "2017-02-19T14:39:00.000Z",
    "original_launch_unix": 1487515140,
    "missions": [
      {
        "name": "CRS-10",
        "flight": 36
      },
      {
        "name": "CRS-16",
        "flight": 72
      },
      {
        "name": "CRS-20",
        "flight": 91
      }
    ],
    "landings": 3,
    "type": "Dragon 1.1",
    "details": null,
    "reuse_count": 2
  },
  {
    "capsule_serial": "C113",
    "capsule_id": "dragon1",
    "status": "active",
    "original_launch": "2017-08-14T16:31:00.000Z",
    "original_launch_unix": 1502728260,
    "missions": [
      {
        "name": "CRS-12",
        "flight": 45
      },
      {
        "name": "CRS-17",
        "flight": 78
      }
    ],
    "landings": 2,
    "type": "Dragon 1.1",
    "details": "The last newly manufactured Dragon 1",
    "reuse_count": 1
  },
  {
    "capsule_serial": "C201",
    "capsule_id": "dragon2",
    "status": "active",
    "original_launch": "2019-03-02T07:45:00.000Z",
    "original_launch_unix": 1551512700,
    "missions": [
      {
        "name": "CCtCap Demo Mission 1",
        "flight": 76
      }
    ],
    "landings": 1,
    "type": "Dragon 2.0",
    "details": "Destroyed in a test anomaly at LZ-1 on April 20, 2019",
    "reuse_count": 0
  },
  {
    "capsule_serial": "C205",
    "capsule_id": "dragon2",
    "status": "active",
    "original_launch": "2020-01-19T14:00:00.000Z",
    "original_launch_unix": 1579442400,
    "missions": [
      {
        "name": "Crew Dragon In Flight Abort Test",
        "flight": 88
      }
    ],
    "landings": 1,
    "type": "Dragon 2.0",
    "details": "In construction for use in first mission in contract under the CCtCap contract",
    "reuse_count": 0
  },
  {
    "capsule_serial": "C202",
    "capsule_id": "dragon2",
    "status": "active",
    "original_launch": null,
    "original_launch_unix": null,
    "missions": [],
    "landings": 0,
    "type": "Dragon 2.0",
    "details": "Capsule used to qualify Dragon 2's environmental control and life support systems.",
    "reuse_count": 0
  },
  {
    "capsule_serial": "C203",
    "capsule_id": "dragon2",
    "status": "active",
    "original_launch": null,
    "original_launch_unix": null,
    "missions": [],
    "landings": 0,
    "type": "Dragon 2.0",
    "details": "Rumored to be used for Inflight Abort Test after DM-1",
    "reuse_count": 0
  },
  {
    "capsule_serial": "C204",
    "capsule_id": "dragon2",
    "status": "active",
    "original_launch": null,
    "original_launch_unix": null,
    "missions": [],
    "landings": 0,
    "type": "Dragon 2.0",
    "details": "Currently in construction for use in DM-2",
    "reuse_count": 0
  },
  {
    "capsule_serial": "C206",
    "capsule_id": "dragon2",
    "status": "active",
    "original_launch": null,
    "original_launch_unix": null,
    "missions": [],
    "landings": 0,
    "type": "Dragon 2.0",
    "details": "In Hawthorne, CA as of October 11, 2019. Seen in background during Musk/Bridenstine press conference.",
    "reuse_count": 0
  }
]

export { capsulesData }