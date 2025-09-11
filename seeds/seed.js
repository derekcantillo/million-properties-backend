use("MillionPropertiesDB");

db.Properties.insertMany([
  {
    "name": "Propiedad en Weston #1",
    "addressProperty": "101 Main St, Weston, FL",
    "priceProperty": 1660328,
    "codeInternal": "PROP-001",
    "year": 2011,
    "images": [
      {
        "file": "https://picsum.photos/id/101/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/102/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/103/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/104/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 1",
      "address": "Weston, FL",
      "photo": "https://picsum.photos/id/1001/200/200",
      "birthday": "1983-10-22"
    },
    "traces": [
      {
        "dateSale": "2010-06-18",
        "name": "Venta #1",
        "value": 371080,
        "tax": 10251
      },
      {
        "dateSale": "2016-07-28",
        "name": "Venta #2",
        "value": 263029,
        "tax": 41586
      }
    ]
  },
  {
    "name": "Propiedad en Aventura #2",
    "addressProperty": "102 Main St, Aventura, FL",
    "priceProperty": 1993413,
    "codeInternal": "PROP-002",
    "year": 2015,
    "images": [
      {
        "file": "https://picsum.photos/id/102/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/103/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/104/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 2",
      "address": "Aventura, FL",
      "photo": "https://picsum.photos/id/1002/200/200",
      "birthday": "1977-08-27"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Edgewater #3",
    "addressProperty": "103 Main St, Edgewater, FL",
    "priceProperty": 2194525,
    "codeInternal": "PROP-003",
    "year": 1996,
    "images": [
      {
        "file": "https://picsum.photos/id/103/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/104/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/105/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/106/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 3",
      "address": "Edgewater, FL",
      "photo": "https://picsum.photos/id/1003/200/200",
      "birthday": "1986-01-10"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Kendall #4",
    "addressProperty": "104 Main St, Kendall, FL",
    "priceProperty": 291126,
    "codeInternal": "PROP-004",
    "year": 2021,
    "images": [
      {
        "file": "https://picsum.photos/id/104/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/105/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/106/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/107/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 4",
      "address": "Kendall, FL",
      "photo": "https://picsum.photos/id/1004/200/200",
      "birthday": "1987-12-08"
    },
    "traces": [
      {
        "dateSale": "2010-04-10",
        "name": "Venta #1",
        "value": 207627,
        "tax": 15039
      }
    ]
  },
  {
    "name": "Propiedad en Coconut Grove #5",
    "addressProperty": "105 Main St, Coconut Grove, FL",
    "priceProperty": 4299923,
    "codeInternal": "PROP-005",
    "year": 2001,
    "images": [
      {
        "file": "https://picsum.photos/id/105/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/106/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 5",
      "address": "Coconut Grove, FL",
      "photo": "https://picsum.photos/id/1005/200/200",
      "birthday": "1976-12-21"
    },
    "traces": [
      {
        "dateSale": "2013-01-14",
        "name": "Venta #1",
        "value": 3215925,
        "tax": 33085
      }
    ]
  },
  {
    "name": "Propiedad en Brickell #6",
    "addressProperty": "106 Main St, Brickell, FL",
    "priceProperty": 4403533,
    "codeInternal": "PROP-006",
    "year": 2003,
    "images": [
      {
        "file": "https://picsum.photos/id/106/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/107/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/108/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 6",
      "address": "Brickell, FL",
      "photo": "https://picsum.photos/id/1006/200/200",
      "birthday": "1974-09-24"
    },
    "traces": [
      {
        "dateSale": "2018-02-16",
        "name": "Venta #1",
        "value": 3063381,
        "tax": 36486
      }
    ]
  },
  {
    "name": "Propiedad en Surfside #7",
    "addressProperty": "107 Main St, Surfside, FL",
    "priceProperty": 3837594,
    "codeInternal": "PROP-007",
    "year": 1997,
    "images": [
      {
        "file": "https://picsum.photos/id/107/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/108/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/109/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 7",
      "address": "Surfside, FL",
      "photo": "https://picsum.photos/id/1007/200/200",
      "birthday": "1984-01-07"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Miami Lakes #8",
    "addressProperty": "108 Main St, Miami Lakes, FL",
    "priceProperty": 1700100,
    "codeInternal": "PROP-008",
    "year": 2000,
    "images": [
      {
        "file": "https://picsum.photos/id/108/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/109/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/110/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/111/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 8",
      "address": "Miami Lakes, FL",
      "photo": "https://picsum.photos/id/1008/200/200",
      "birthday": "1964-09-04"
    },
    "traces": [
      {
        "dateSale": "2017-10-01",
        "name": "Venta #1",
        "value": 1156027,
        "tax": 29213
      },
      {
        "dateSale": "2017-04-06",
        "name": "Venta #2",
        "value": 366883,
        "tax": 38724
      }
    ]
  },
  {
    "name": "Propiedad en Edgewater #9",
    "addressProperty": "109 Main St, Edgewater, FL",
    "priceProperty": 4550498,
    "codeInternal": "PROP-009",
    "year": 2021,
    "images": [
      {
        "file": "https://picsum.photos/id/109/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/110/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/111/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 9",
      "address": "Edgewater, FL",
      "photo": "https://picsum.photos/id/1009/200/200",
      "birthday": "1975-10-13"
    },
    "traces": [
      {
        "dateSale": "2020-10-12",
        "name": "Venta #1",
        "value": 2831529,
        "tax": 49602
      }
    ]
  },
  {
    "name": "Propiedad en Surfside #10",
    "addressProperty": "110 Main St, Surfside, FL",
    "priceProperty": 1510260,
    "codeInternal": "PROP-010",
    "year": 1995,
    "images": [
      {
        "file": "https://picsum.photos/id/110/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/111/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 10",
      "address": "Surfside, FL",
      "photo": "https://picsum.photos/id/1010/200/200",
      "birthday": "1983-04-08"
    },
    "traces": [
      {
        "dateSale": "2014-10-28",
        "name": "Venta #1",
        "value": 980440,
        "tax": 14302
      },
      {
        "dateSale": "2012-02-12",
        "name": "Venta #2",
        "value": 1417743,
        "tax": 19004
      }
    ]
  },
  {
    "name": "Propiedad en Kendall #11",
    "addressProperty": "111 Main St, Kendall, FL",
    "priceProperty": 971661,
    "codeInternal": "PROP-011",
    "year": 2023,
    "images": [
      {
        "file": "https://picsum.photos/id/111/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/112/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/113/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 11",
      "address": "Kendall, FL",
      "photo": "https://picsum.photos/id/1011/200/200",
      "birthday": "1977-10-20"
    },
    "traces": [
      {
        "dateSale": "2020-02-28",
        "name": "Venta #1",
        "value": 419301,
        "tax": 33464
      }
    ]
  },
  {
    "name": "Propiedad en Sunny Isles #12",
    "addressProperty": "112 Main St, Sunny Isles, FL",
    "priceProperty": 4054743,
    "codeInternal": "PROP-012",
    "year": 2008,
    "images": [
      {
        "file": "https://picsum.photos/id/112/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/113/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/114/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/115/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 12",
      "address": "Sunny Isles, FL",
      "photo": "https://picsum.photos/id/1012/200/200",
      "birthday": "1978-07-05"
    },
    "traces": [
      {
        "dateSale": "2022-09-22",
        "name": "Venta #1",
        "value": 580858,
        "tax": 41970
      },
      {
        "dateSale": "2014-03-09",
        "name": "Venta #2",
        "value": 1953205,
        "tax": 38423
      }
    ]
  },
  {
    "name": "Propiedad en Hallandale Beach #13",
    "addressProperty": "113 Main St, Hallandale Beach, FL",
    "priceProperty": 1685693,
    "codeInternal": "PROP-013",
    "year": 2007,
    "images": [
      {
        "file": "https://picsum.photos/id/113/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/114/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/115/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/116/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 13",
      "address": "Hallandale Beach, FL",
      "photo": "https://picsum.photos/id/1013/200/200",
      "birthday": "1975-01-01"
    },
    "traces": [
      {
        "dateSale": "2017-09-18",
        "name": "Venta #1",
        "value": 530181,
        "tax": 11120
      },
      {
        "dateSale": "2021-08-03",
        "name": "Venta #2",
        "value": 322615,
        "tax": 30049
      }
    ]
  },
  {
    "name": "Propiedad en Golden Beach #14",
    "addressProperty": "114 Main St, Golden Beach, FL",
    "priceProperty": 3175993,
    "codeInternal": "PROP-014",
    "year": 2009,
    "images": [
      {
        "file": "https://picsum.photos/id/114/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/115/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/116/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/117/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 14",
      "address": "Golden Beach, FL",
      "photo": "https://picsum.photos/id/1014/200/200",
      "birthday": "1986-08-28"
    },
    "traces": [
      {
        "dateSale": "2021-05-05",
        "name": "Venta #1",
        "value": 1953520,
        "tax": 21989
      }
    ]
  },
  {
    "name": "Propiedad en Coconut Grove #15",
    "addressProperty": "115 Main St, Coconut Grove, FL",
    "priceProperty": 3911557,
    "codeInternal": "PROP-015",
    "year": 1996,
    "images": [
      {
        "file": "https://picsum.photos/id/115/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/116/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/117/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 15",
      "address": "Coconut Grove, FL",
      "photo": "https://picsum.photos/id/1015/200/200",
      "birthday": "1980-05-11"
    },
    "traces": [
      {
        "dateSale": "2016-09-21",
        "name": "Venta #1",
        "value": 298866,
        "tax": 33301
      },
      {
        "dateSale": "2022-02-11",
        "name": "Venta #2",
        "value": 291743,
        "tax": 14474
      }
    ]
  },
  {
    "name": "Propiedad en Miami #16",
    "addressProperty": "116 Main St, Miami, FL",
    "priceProperty": 569513,
    "codeInternal": "PROP-016",
    "year": 1994,
    "images": [
      {
        "file": "https://picsum.photos/id/116/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/117/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 16",
      "address": "Miami, FL",
      "photo": "https://picsum.photos/id/1016/200/200",
      "birthday": "1966-10-15"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Kendall #17",
    "addressProperty": "117 Main St, Kendall, FL",
    "priceProperty": 3610728,
    "codeInternal": "PROP-017",
    "year": 1997,
    "images": [
      {
        "file": "https://picsum.photos/id/117/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/118/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 17",
      "address": "Kendall, FL",
      "photo": "https://picsum.photos/id/1017/200/200",
      "birthday": "1967-03-06"
    },
    "traces": [
      {
        "dateSale": "2015-08-21",
        "name": "Venta #1",
        "value": 3335252,
        "tax": 31160
      }
    ]
  },
  {
    "name": "Propiedad en Design District #18",
    "addressProperty": "118 Main St, Design District, FL",
    "priceProperty": 4140520,
    "codeInternal": "PROP-018",
    "year": 2023,
    "images": [
      {
        "file": "https://picsum.photos/id/118/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/119/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/120/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 18",
      "address": "Design District, FL",
      "photo": "https://picsum.photos/id/1018/200/200",
      "birthday": "1984-12-01"
    },
    "traces": [
      {
        "dateSale": "2012-12-28",
        "name": "Venta #1",
        "value": 2385032,
        "tax": 5915
      },
      {
        "dateSale": "2017-03-15",
        "name": "Venta #2",
        "value": 606161,
        "tax": 36189
      }
    ]
  },
  {
    "name": "Propiedad en Little Havana #19",
    "addressProperty": "119 Main St, Little Havana, FL",
    "priceProperty": 3288239,
    "codeInternal": "PROP-019",
    "year": 1990,
    "images": [
      {
        "file": "https://picsum.photos/id/119/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/120/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/121/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/122/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 19",
      "address": "Little Havana, FL",
      "photo": "https://picsum.photos/id/1019/200/200",
      "birthday": "1970-12-27"
    },
    "traces": [
      {
        "dateSale": "2016-10-02",
        "name": "Venta #1",
        "value": 729743,
        "tax": 6441
      },
      {
        "dateSale": "2020-03-26",
        "name": "Venta #2",
        "value": 1594052,
        "tax": 26724
      }
    ]
  },
  {
    "name": "Propiedad en Edgewater #20",
    "addressProperty": "120 Main St, Edgewater, FL",
    "priceProperty": 731230,
    "codeInternal": "PROP-020",
    "year": 2017,
    "images": [
      {
        "file": "https://picsum.photos/id/120/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/121/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/122/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/123/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 20",
      "address": "Edgewater, FL",
      "photo": "https://picsum.photos/id/1020/200/200",
      "birthday": "1975-11-04"
    },
    "traces": [
      {
        "dateSale": "2015-06-13",
        "name": "Venta #1",
        "value": 632811,
        "tax": 43481
      }
    ]
  },
  {
    "name": "Propiedad en Aventura #21",
    "addressProperty": "121 Main St, Aventura, FL",
    "priceProperty": 3166873,
    "codeInternal": "PROP-021",
    "year": 2010,
    "images": [
      {
        "file": "https://picsum.photos/id/121/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/122/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/123/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/124/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 21",
      "address": "Aventura, FL",
      "photo": "https://picsum.photos/id/1021/200/200",
      "birthday": "1975-05-14"
    },
    "traces": [
      {
        "dateSale": "2017-09-11",
        "name": "Venta #1",
        "value": 242605,
        "tax": 43728
      }
    ]
  },
  {
    "name": "Propiedad en Hallandale Beach #22",
    "addressProperty": "122 Main St, Hallandale Beach, FL",
    "priceProperty": 2498103,
    "codeInternal": "PROP-022",
    "year": 1994,
    "images": [
      {
        "file": "https://picsum.photos/id/122/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/123/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/124/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/125/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 22",
      "address": "Hallandale Beach, FL",
      "photo": "https://picsum.photos/id/1022/200/200",
      "birthday": "1964-02-13"
    },
    "traces": [
      {
        "dateSale": "2022-05-04",
        "name": "Venta #1",
        "value": 1188370,
        "tax": 45678
      },
      {
        "dateSale": "2021-07-17",
        "name": "Venta #2",
        "value": 1875752,
        "tax": 16474
      }
    ]
  },
  {
    "name": "Propiedad en Design District #23",
    "addressProperty": "123 Main St, Design District, FL",
    "priceProperty": 4999904,
    "codeInternal": "PROP-023",
    "year": 1993,
    "images": [
      {
        "file": "https://picsum.photos/id/123/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/124/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/125/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 23",
      "address": "Design District, FL",
      "photo": "https://picsum.photos/id/1023/200/200",
      "birthday": "1961-07-22"
    },
    "traces": [
      {
        "dateSale": "2015-10-10",
        "name": "Venta #1",
        "value": 3406540,
        "tax": 12572
      },
      {
        "dateSale": "2018-04-06",
        "name": "Venta #2",
        "value": 989427,
        "tax": 5627
      }
    ]
  },
  {
    "name": "Propiedad en Homestead #24",
    "addressProperty": "124 Main St, Homestead, FL",
    "priceProperty": 539633,
    "codeInternal": "PROP-024",
    "year": 2007,
    "images": [
      {
        "file": "https://picsum.photos/id/124/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/125/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 24",
      "address": "Homestead, FL",
      "photo": "https://picsum.photos/id/1024/200/200",
      "birthday": "1990-06-02"
    },
    "traces": [
      {
        "dateSale": "2010-02-26",
        "name": "Venta #1",
        "value": 322525,
        "tax": 35706
      }
    ]
  },
  {
    "name": "Propiedad en Coral Gables #25",
    "addressProperty": "125 Main St, Coral Gables, FL",
    "priceProperty": 3546477,
    "codeInternal": "PROP-025",
    "year": 2000,
    "images": [
      {
        "file": "https://picsum.photos/id/125/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/126/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 25",
      "address": "Coral Gables, FL",
      "photo": "https://picsum.photos/id/1025/200/200",
      "birthday": "1965-07-19"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Design District #26",
    "addressProperty": "126 Main St, Design District, FL",
    "priceProperty": 4453998,
    "codeInternal": "PROP-026",
    "year": 2007,
    "images": [
      {
        "file": "https://picsum.photos/id/126/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/127/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/128/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 26",
      "address": "Design District, FL",
      "photo": "https://picsum.photos/id/1026/200/200",
      "birthday": "1980-08-14"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Bal Harbour #27",
    "addressProperty": "127 Main St, Bal Harbour, FL",
    "priceProperty": 4810389,
    "codeInternal": "PROP-027",
    "year": 2012,
    "images": [
      {
        "file": "https://picsum.photos/id/127/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/128/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/129/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/130/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 27",
      "address": "Bal Harbour, FL",
      "photo": "https://picsum.photos/id/1027/200/200",
      "birthday": "1987-04-19"
    },
    "traces": [
      {
        "dateSale": "2017-01-14",
        "name": "Venta #1",
        "value": 583704,
        "tax": 47646
      }
    ]
  },
  {
    "name": "Propiedad en Doral #28",
    "addressProperty": "128 Main St, Doral, FL",
    "priceProperty": 782630,
    "codeInternal": "PROP-028",
    "year": 2007,
    "images": [
      {
        "file": "https://picsum.photos/id/128/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/129/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/130/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/131/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 28",
      "address": "Doral, FL",
      "photo": "https://picsum.photos/id/1028/200/200",
      "birthday": "1961-09-20"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Sunny Isles #29",
    "addressProperty": "129 Main St, Sunny Isles, FL",
    "priceProperty": 1061222,
    "codeInternal": "PROP-029",
    "year": 2023,
    "images": [
      {
        "file": "https://picsum.photos/id/129/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/130/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/131/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 29",
      "address": "Sunny Isles, FL",
      "photo": "https://picsum.photos/id/1029/200/200",
      "birthday": "1988-12-14"
    },
    "traces": [
      {
        "dateSale": "2020-12-03",
        "name": "Venta #1",
        "value": 439347,
        "tax": 30427
      }
    ]
  },
  {
    "name": "Propiedad en Bal Harbour #30",
    "addressProperty": "130 Main St, Bal Harbour, FL",
    "priceProperty": 912603,
    "codeInternal": "PROP-030",
    "year": 2014,
    "images": [
      {
        "file": "https://picsum.photos/id/130/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/131/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/132/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/133/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 30",
      "address": "Bal Harbour, FL",
      "photo": "https://picsum.photos/id/1030/200/200",
      "birthday": "1993-02-17"
    },
    "traces": [
      {
        "dateSale": "2010-10-20",
        "name": "Venta #1",
        "value": 552174,
        "tax": 11389
      }
    ]
  },
  {
    "name": "Propiedad en Doral #31",
    "addressProperty": "131 Main St, Doral, FL",
    "priceProperty": 1139943,
    "codeInternal": "PROP-031",
    "year": 2003,
    "images": [
      {
        "file": "https://picsum.photos/id/131/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/132/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/133/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 31",
      "address": "Doral, FL",
      "photo": "https://picsum.photos/id/1031/200/200",
      "birthday": "1972-02-20"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Bal Harbour #32",
    "addressProperty": "132 Main St, Bal Harbour, FL",
    "priceProperty": 1713943,
    "codeInternal": "PROP-032",
    "year": 2000,
    "images": [
      {
        "file": "https://picsum.photos/id/132/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/133/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 32",
      "address": "Bal Harbour, FL",
      "photo": "https://picsum.photos/id/1032/200/200",
      "birthday": "1973-06-22"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Hollywood #33",
    "addressProperty": "133 Main St, Hollywood, FL",
    "priceProperty": 3356088,
    "codeInternal": "PROP-033",
    "year": 2001,
    "images": [
      {
        "file": "https://picsum.photos/id/133/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/134/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/135/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 33",
      "address": "Hollywood, FL",
      "photo": "https://picsum.photos/id/1033/200/200",
      "birthday": "1969-11-10"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Little Havana #34",
    "addressProperty": "134 Main St, Little Havana, FL",
    "priceProperty": 1925143,
    "codeInternal": "PROP-034",
    "year": 1996,
    "images": [
      {
        "file": "https://picsum.photos/id/134/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/135/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/136/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/137/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 34",
      "address": "Little Havana, FL",
      "photo": "https://picsum.photos/id/1034/200/200",
      "birthday": "1990-09-06"
    },
    "traces": [
      {
        "dateSale": "2012-04-26",
        "name": "Venta #1",
        "value": 1318499,
        "tax": 49581
      }
    ]
  },
  {
    "name": "Propiedad en Little Havana #35",
    "addressProperty": "135 Main St, Little Havana, FL",
    "priceProperty": 1773388,
    "codeInternal": "PROP-035",
    "year": 1997,
    "images": [
      {
        "file": "https://picsum.photos/id/135/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/136/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 35",
      "address": "Little Havana, FL",
      "photo": "https://picsum.photos/id/1035/200/200",
      "birthday": "1960-10-21"
    },
    "traces": [
      {
        "dateSale": "2012-01-07",
        "name": "Venta #1",
        "value": 471215,
        "tax": 39622
      }
    ]
  },
  {
    "name": "Propiedad en Cutler Bay #36",
    "addressProperty": "136 Main St, Cutler Bay, FL",
    "priceProperty": 2876041,
    "codeInternal": "PROP-036",
    "year": 2000,
    "images": [
      {
        "file": "https://picsum.photos/id/136/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/137/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/138/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/139/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 36",
      "address": "Cutler Bay, FL",
      "photo": "https://picsum.photos/id/1036/200/200",
      "birthday": "1961-06-23"
    },
    "traces": [
      {
        "dateSale": "2020-08-08",
        "name": "Venta #1",
        "value": 758737,
        "tax": 31888
      }
    ]
  },
  {
    "name": "Propiedad en Pembroke Pines #37",
    "addressProperty": "137 Main St, Pembroke Pines, FL",
    "priceProperty": 4885896,
    "codeInternal": "PROP-037",
    "year": 1998,
    "images": [
      {
        "file": "https://picsum.photos/id/137/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/138/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/139/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/140/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 37",
      "address": "Pembroke Pines, FL",
      "photo": "https://picsum.photos/id/1037/200/200",
      "birthday": "1980-06-27"
    },
    "traces": [
      {
        "dateSale": "2022-10-17",
        "name": "Venta #1",
        "value": 2159243,
        "tax": 44744
      },
      {
        "dateSale": "2016-03-26",
        "name": "Venta #2",
        "value": 2060458,
        "tax": 18523
      }
    ]
  },
  {
    "name": "Propiedad en Palmetto Bay #38",
    "addressProperty": "138 Main St, Palmetto Bay, FL",
    "priceProperty": 3847185,
    "codeInternal": "PROP-038",
    "year": 2009,
    "images": [
      {
        "file": "https://picsum.photos/id/138/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/139/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 38",
      "address": "Palmetto Bay, FL",
      "photo": "https://picsum.photos/id/1038/200/200",
      "birthday": "1969-02-02"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Kendall #39",
    "addressProperty": "139 Main St, Kendall, FL",
    "priceProperty": 2008418,
    "codeInternal": "PROP-039",
    "year": 1995,
    "images": [
      {
        "file": "https://picsum.photos/id/139/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/140/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 39",
      "address": "Kendall, FL",
      "photo": "https://picsum.photos/id/1039/200/200",
      "birthday": "1981-01-15"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Sunny Isles #40",
    "addressProperty": "140 Main St, Sunny Isles, FL",
    "priceProperty": 4311125,
    "codeInternal": "PROP-040",
    "year": 2008,
    "images": [
      {
        "file": "https://picsum.photos/id/140/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/141/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/142/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/143/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 40",
      "address": "Sunny Isles, FL",
      "photo": "https://picsum.photos/id/1040/200/200",
      "birthday": "1995-05-07"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Edgewater #41",
    "addressProperty": "141 Main St, Edgewater, FL",
    "priceProperty": 3955156,
    "codeInternal": "PROP-041",
    "year": 2008,
    "images": [
      {
        "file": "https://picsum.photos/id/141/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/142/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/143/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 41",
      "address": "Edgewater, FL",
      "photo": "https://picsum.photos/id/1041/200/200",
      "birthday": "1990-09-08"
    },
    "traces": [
      {
        "dateSale": "2022-09-28",
        "name": "Venta #1",
        "value": 3945540,
        "tax": 43285
      }
    ]
  },
  {
    "name": "Propiedad en Bal Harbour #42",
    "addressProperty": "142 Main St, Bal Harbour, FL",
    "priceProperty": 2926719,
    "codeInternal": "PROP-042",
    "year": 1997,
    "images": [
      {
        "file": "https://picsum.photos/id/142/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/143/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/144/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 42",
      "address": "Bal Harbour, FL",
      "photo": "https://picsum.photos/id/1042/200/200",
      "birthday": "1971-02-25"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Hollywood #43",
    "addressProperty": "143 Main St, Hollywood, FL",
    "priceProperty": 2137950,
    "codeInternal": "PROP-043",
    "year": 1996,
    "images": [
      {
        "file": "https://picsum.photos/id/143/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/144/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 43",
      "address": "Hollywood, FL",
      "photo": "https://picsum.photos/id/1043/200/200",
      "birthday": "1974-10-13"
    },
    "traces": [
      {
        "dateSale": "2012-04-24",
        "name": "Venta #1",
        "value": 1958365,
        "tax": 37111
      },
      {
        "dateSale": "2018-04-09",
        "name": "Venta #2",
        "value": 1081686,
        "tax": 33648
      }
    ]
  },
  {
    "name": "Propiedad en Little Havana #44",
    "addressProperty": "144 Main St, Little Havana, FL",
    "priceProperty": 2889999,
    "codeInternal": "PROP-044",
    "year": 2021,
    "images": [
      {
        "file": "https://picsum.photos/id/144/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/145/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/146/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/147/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 44",
      "address": "Little Havana, FL",
      "photo": "https://picsum.photos/id/1044/200/200",
      "birthday": "1994-06-26"
    },
    "traces": []
  },
  {
    "name": "Propiedad en Coral Springs #45",
    "addressProperty": "145 Main St, Coral Springs, FL",
    "priceProperty": 3479643,
    "codeInternal": "PROP-045",
    "year": 2018,
    "images": [
      {
        "file": "https://picsum.photos/id/145/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/146/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/147/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 45",
      "address": "Coral Springs, FL",
      "photo": "https://picsum.photos/id/1045/200/200",
      "birthday": "1970-12-18"
    },
    "traces": [
      {
        "dateSale": "2014-03-12",
        "name": "Venta #1",
        "value": 1689503,
        "tax": 45138
      }
    ]
  },
  {
    "name": "Propiedad en Coconut Grove #46",
    "addressProperty": "146 Main St, Coconut Grove, FL",
    "priceProperty": 648840,
    "codeInternal": "PROP-046",
    "year": 2005,
    "images": [
      {
        "file": "https://picsum.photos/id/146/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/147/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/148/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 46",
      "address": "Coconut Grove, FL",
      "photo": "https://picsum.photos/id/1046/200/200",
      "birthday": "1987-05-15"
    },
    "traces": [
      {
        "dateSale": "2019-06-03",
        "name": "Venta #1",
        "value": 569705,
        "tax": 18167
      },
      {
        "dateSale": "2022-01-11",
        "name": "Venta #2",
        "value": 222633,
        "tax": 43580
      }
    ]
  },
  {
    "name": "Propiedad en Coconut Grove #47",
    "addressProperty": "147 Main St, Coconut Grove, FL",
    "priceProperty": 2481133,
    "codeInternal": "PROP-047",
    "year": 1999,
    "images": [
      {
        "file": "https://picsum.photos/id/147/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/148/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/149/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 47",
      "address": "Coconut Grove, FL",
      "photo": "https://picsum.photos/id/1047/200/200",
      "birthday": "1986-01-03"
    },
    "traces": [
      {
        "dateSale": "2022-04-12",
        "name": "Venta #1",
        "value": 731905,
        "tax": 15256
      }
    ]
  },
  {
    "name": "Propiedad en Miami Lakes #48",
    "addressProperty": "148 Main St, Miami Lakes, FL",
    "priceProperty": 1458232,
    "codeInternal": "PROP-048",
    "year": 1994,
    "images": [
      {
        "file": "https://picsum.photos/id/148/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/149/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 48",
      "address": "Miami Lakes, FL",
      "photo": "https://picsum.photos/id/1048/200/200",
      "birthday": "1981-10-26"
    },
    "traces": [
      {
        "dateSale": "2010-05-28",
        "name": "Venta #1",
        "value": 979760,
        "tax": 20621
      }
    ]
  },
  {
    "name": "Propiedad en Homestead #49",
    "addressProperty": "149 Main St, Homestead, FL",
    "priceProperty": 501604,
    "codeInternal": "PROP-049",
    "year": 2004,
    "images": [
      {
        "file": "https://picsum.photos/id/149/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/150/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/151/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/152/800/600",
        "enabled": true
      }
    ],
    "owner": {
      "name": "Owner 49",
      "address": "Homestead, FL",
      "photo": "https://picsum.photos/id/1049/200/200",
      "birthday": "1994-07-16"
    },
    "traces": [
      {
        "dateSale": "2019-11-18",
        "name": "Venta #1",
        "value": 482283,
        "tax": 36949
      }
    ]
  },
  {
    "name": "Propiedad en Pembroke Pines #50",
    "addressProperty": "150 Main St, Pembroke Pines, FL",
    "priceProperty": 3670532,
    "codeInternal": "PROP-050",
    "year": 2008,
    "images": [
      {
        "file": "https://picsum.photos/id/150/800/600",
        "enabled": true
      },
      {
        "file": "https://picsum.photos/id/151/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/152/800/600",
        "enabled": false
      },
      {
        "file": "https://picsum.photos/id/153/800/600",
        "enabled": false
      }
    ],
    "owner": {
      "name": "Owner 50",
      "address": "Pembroke Pines, FL",
      "photo": "https://picsum.photos/id/1050/200/200",
      "birthday": "1963-10-09"
    },
    "traces": []
  }
]);
