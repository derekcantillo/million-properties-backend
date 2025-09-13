use("MillionPropertiesDB");

db.Properties.drop();
db.Owners.drop();
db.PropertyImages.drop();
db.PropertyTraces.drop();

const owners = [
  {
    _id: ObjectId(),
    name: "Owner 1",
    address: "Weston, FL",
    photo: "https://picsum.photos/id/1001/200/200",
    birthday: new Date("1983-10-22")
  },
  {
    _id: ObjectId(),
    name: "Owner 2", 
    address: "Aventura, FL",
    photo: "https://picsum.photos/id/1002/200/200",
    birthday: new Date("1977-08-27")
  },
  {
    _id: ObjectId(),
    name: "Owner 3",
    address: "Edgewater, FL", 
    photo: "https://picsum.photos/id/1003/200/200",
    birthday: new Date("1986-01-10")
  },
  {
    _id: ObjectId(),
    name: "Owner 4",
    address: "Kendall, FL",
    photo: "https://picsum.photos/id/1004/200/200", 
    birthday: new Date("1987-12-08")
  },
  {
    _id: ObjectId(),
    name: "Owner 5",
    address: "Coconut Grove, FL",
    photo: "https://picsum.photos/id/1005/200/200",
    birthday: new Date("1976-12-21")
  },
  {
    _id: ObjectId(),
    name: "Owner 6",
    address: "Brickell, FL",
    photo: "https://picsum.photos/id/1006/200/200",
    birthday: new Date("1974-09-24")
  },
  {
    _id: ObjectId(),
    name: "Owner 7",
    address: "Surfside, FL",
    photo: "https://picsum.photos/id/1007/200/200",
    birthday: new Date("1984-01-07")
  },
  {
    _id: ObjectId(),
    name: "Owner 8",
    address: "Miami Lakes, FL",
    photo: "https://picsum.photos/id/1008/200/200",
    birthday: new Date("1964-09-04")
  },
  {
    _id: ObjectId(),
    name: "Owner 9",
    address: "Edgewater, FL",
    photo: "https://picsum.photos/id/1009/200/200",
    birthday: new Date("1975-10-13")
  },
  {
    _id: ObjectId(),
    name: "Owner 10",
    address: "Surfside, FL",
    photo: "https://picsum.photos/id/1010/200/200",
    birthday: new Date("1983-04-08")
  },
  {
    _id: ObjectId(),
    name: "Owner 11",
    address: "Kendall, FL",
    photo: "https://picsum.photos/id/1011/200/200",
    birthday: new Date("1977-10-20")
  },
  {
    _id: ObjectId(),
    name: "Owner 12",
    address: "Sunny Isles, FL",
    photo: "https://picsum.photos/id/1012/200/200",
    birthday: new Date("1978-07-05")
  },
  {
    _id: ObjectId(),
    name: "Owner 13",
    address: "Hallandale Beach, FL",
    photo: "https://picsum.photos/id/1013/200/200",
    birthday: new Date("1975-01-01")
  },
  {
    _id: ObjectId(),
    name: "Owner 14",
    address: "Golden Beach, FL",
    photo: "https://picsum.photos/id/1014/200/200",
    birthday: new Date("1986-08-28")
  },
  {
    _id: ObjectId(),
    name: "Owner 15",
    address: "Coconut Grove, FL",
    photo: "https://picsum.photos/id/1015/200/200",
    birthday: new Date("1980-05-11")
  },
  {
    _id: ObjectId(),
    name: "Owner 16",
    address: "Miami, FL",
    photo: "https://picsum.photos/id/1016/200/200",
    birthday: new Date("1966-10-15")
  },
  {
    _id: ObjectId(),
    name: "Owner 17",
    address: "Kendall, FL",
    photo: "https://picsum.photos/id/1017/200/200",
    birthday: new Date("1967-03-06")
  },
  {
    _id: ObjectId(),
    name: "Owner 18",
    address: "Design District, FL",
    photo: "https://picsum.photos/id/1018/200/200",
    birthday: new Date("1984-12-01")
  },
  {
    _id: ObjectId(),
    name: "Owner 19",
    address: "Little Havana, FL",
    photo: "https://picsum.photos/id/1019/200/200",
    birthday: new Date("1970-12-27")
  },
  {
    _id: ObjectId(),
    name: "Owner 20",
    address: "Edgewater, FL",
    photo: "https://picsum.photos/id/1020/200/200",
    birthday: new Date("1975-11-04")
  },
  {
    _id: ObjectId(),
    name: "Owner 21",
    address: "Aventura, FL",
    photo: "https://picsum.photos/id/1021/200/200",
    birthday: new Date("1975-05-14")
  },
  {
    _id: ObjectId(),
    name: "Owner 22",
    address: "Hallandale Beach, FL",
    photo: "https://picsum.photos/id/1022/200/200",
    birthday: new Date("1964-02-13")
  },
  {
    _id: ObjectId(),
    name: "Owner 23",
    address: "Design District, FL",
    photo: "https://picsum.photos/id/1023/200/200",
    birthday: new Date("1961-07-22")
  },
  {
    _id: ObjectId(),
    name: "Owner 24",
    address: "Homestead, FL",
    photo: "https://picsum.photos/id/1024/200/200",
    birthday: new Date("1990-06-02")
  },
  {
    _id: ObjectId(),
    name: "Owner 25",
    address: "Coral Gables, FL",
    photo: "https://picsum.photos/id/1025/200/200",
    birthday: new Date("1965-07-19")
  },
  {
    _id: ObjectId(),
    name: "Owner 26",
    address: "Design District, FL",
    photo: "https://picsum.photos/id/1026/200/200",
    birthday: new Date("1980-08-14")
  },
  {
    _id: ObjectId(),
    name: "Owner 27",
    address: "Bal Harbour, FL",
    photo: "https://picsum.photos/id/1027/200/200",
    birthday: new Date("1987-04-19")
  },
  {
    _id: ObjectId(),
    name: "Owner 28",
    address: "Doral, FL",
    photo: "https://picsum.photos/id/1028/200/200",
    birthday: new Date("1961-09-20")
  },
  {
    _id: ObjectId(),
    name: "Owner 29",
    address: "Sunny Isles, FL",
    photo: "https://picsum.photos/id/1029/200/200",
    birthday: new Date("1988-12-14")
  },
  {
    _id: ObjectId(),
    name: "Owner 30",
    address: "Bal Harbour, FL",
    photo: "https://picsum.photos/id/1030/200/200",
    birthday: new Date("1993-02-17")
  },
  {
    _id: ObjectId(),
    name: "Owner 31",
    address: "Doral, FL",
    photo: "https://picsum.photos/id/1031/200/200",
    birthday: new Date("1972-02-20")
  },
  {
    _id: ObjectId(),
    name: "Owner 32",
    address: "Bal Harbour, FL",
    photo: "https://picsum.photos/id/1032/200/200",
    birthday: new Date("1973-06-22")
  },
  {
    _id: ObjectId(),
    name: "Owner 33",
    address: "Hollywood, FL",
    photo: "https://picsum.photos/id/1033/200/200",
    birthday: new Date("1969-11-10")
  },
  {
    _id: ObjectId(),
    name: "Owner 34",
    address: "Little Havana, FL",
    photo: "https://picsum.photos/id/1034/200/200",
    birthday: new Date("1990-09-06")
  },
  {
    _id: ObjectId(),
    name: "Owner 35",
    address: "Little Havana, FL",
    photo: "https://picsum.photos/id/1035/200/200",
    birthday: new Date("1960-10-21")
  },
  {
    _id: ObjectId(),
    name: "Owner 36",
    address: "Cutler Bay, FL",
    photo: "https://picsum.photos/id/1036/200/200",
    birthday: new Date("1961-06-23")
  },
  {
    _id: ObjectId(),
    name: "Owner 37",
    address: "Pembroke Pines, FL",
    photo: "https://picsum.photos/id/1037/200/200",
    birthday: new Date("1980-06-27")
  },
  {
    _id: ObjectId(),
    name: "Owner 38",
    address: "Palmetto Bay, FL",
    photo: "https://picsum.photos/id/1038/200/200",
    birthday: new Date("1969-02-02")
  },
  {
    _id: ObjectId(),
    name: "Owner 39",
    address: "Kendall, FL",
    photo: "https://picsum.photos/id/1039/200/200",
    birthday: new Date("1981-01-15")
  },
  {
    _id: ObjectId(),
    name: "Owner 40",
    address: "Sunny Isles, FL",
    photo: "https://picsum.photos/id/1040/200/200",
    birthday: new Date("1995-05-07")
  },
  {
    _id: ObjectId(),
    name: "Owner 41",
    address: "Edgewater, FL",
    photo: "https://picsum.photos/id/1041/200/200",
    birthday: new Date("1990-09-08")
  },
  {
    _id: ObjectId(),
    name: "Owner 42",
    address: "Bal Harbour, FL",
    photo: "https://picsum.photos/id/1042/200/200",
    birthday: new Date("1971-02-25")
  },
  {
    _id: ObjectId(),
    name: "Owner 43",
    address: "Hollywood, FL",
    photo: "https://picsum.photos/id/1043/200/200",
    birthday: new Date("1974-10-13")
  },
  {
    _id: ObjectId(),
    name: "Owner 44",
    address: "Little Havana, FL",
    photo: "https://picsum.photos/id/1044/200/200",
    birthday: new Date("1994-06-26")
  },
  {
    _id: ObjectId(),
    name: "Owner 45",
    address: "Coral Springs, FL",
    photo: "https://picsum.photos/id/1045/200/200",
    birthday: new Date("1970-12-18")
  },
  {
    _id: ObjectId(),
    name: "Owner 46",
    address: "Coconut Grove, FL",
    photo: "https://picsum.photos/id/1046/200/200",
    birthday: new Date("1987-05-15")
  },
  {
    _id: ObjectId(),
    name: "Owner 47",
    address: "Coconut Grove, FL",
    photo: "https://picsum.photos/id/1047/200/200",
    birthday: new Date("1986-01-03")
  },
  {
    _id: ObjectId(),
    name: "Owner 48",
    address: "Miami Lakes, FL",
    photo: "https://picsum.photos/id/1048/200/200",
    birthday: new Date("1981-10-26")
  },
  {
    _id: ObjectId(),
    name: "Owner 49",
    address: "Homestead, FL",
    photo: "https://picsum.photos/id/1049/200/200",
    birthday: new Date("1994-07-16")
  },
  {
    _id: ObjectId(),
    name: "Owner 50",
    address: "Pembroke Pines, FL",
    photo: "https://picsum.photos/id/1050/200/200",
    birthday: new Date("1963-10-09")
  }
];

db.Owners.insertMany(owners);

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

const properties = [
  {
    _id: ObjectId(),
    idOwner: owners[0]._id,
    name: "Propiedad en Weston #1",
    addressProperty: "101 Main St, Weston, FL",
    priceProperty: 1660328,
    codeInternal: "PROP-001",
    year: 2011,
    slug: slugify("Propiedad en Weston #1")
  },
  {
    _id: ObjectId(),
    idOwner: owners[1]._id,
    name: "Propiedad en Aventura #2",
    addressProperty: "102 Main St, Aventura, FL",
    priceProperty: 1993413,
    codeInternal: "PROP-002",
    year: 2015,
    slug: slugify("Propiedad en Aventura #2")
  },
  {
    _id: ObjectId(),
    idOwner: owners[2]._id,
    name: "Propiedad en Edgewater #3",
    addressProperty: "103 Main St, Edgewater, FL",
    priceProperty: 2194525,
    codeInternal: "PROP-003",
    year: 1996,
    slug: slugify("Propiedad en Edgewater #3")
  },
  {
    _id: ObjectId(),
    idOwner: owners[3]._id,
    name: "Propiedad en Kendall #4",
    addressProperty: "104 Main St, Kendall, FL",
    priceProperty: 291126,
    codeInternal: "PROP-004",
    year: 2021,
    slug: slugify("Propiedad en Kendall #4")
  },
  {
    _id: ObjectId(),
    idOwner: owners[4]._id,
    name: "Propiedad en Coconut Grove #5",
    addressProperty: "105 Main St, Coconut Grove, FL",
    priceProperty: 4299923,
    codeInternal: "PROP-005",
    year: 2001,
    slug: slugify("Propiedad en Coconut Grove #5")
  },
  {
    _id: ObjectId(),
    idOwner: owners[5]._id,
    name: "Propiedad en Brickell #6",
    addressProperty: "106 Main St, Brickell, FL",
    priceProperty: 4403533,
    codeInternal: "PROP-006",
    year: 2003,
    slug: slugify("Propiedad en Brickell #6")
  },
  {
    _id: ObjectId(),
    idOwner: owners[6]._id,
    name: "Propiedad en Surfside #7",
    addressProperty: "107 Main St, Surfside, FL",
    priceProperty: 3837594,
    codeInternal: "PROP-007",
    year: 1997,
    slug: slugify("Propiedad en Surfside #7")
  },
  {
    _id: ObjectId(),
    idOwner: owners[7]._id,
    name: "Propiedad en Miami Lakes #8",
    addressProperty: "108 Main St, Miami Lakes, FL",
    priceProperty: 1700100,
    codeInternal: "PROP-008",
    year: 2000,
    slug: slugify("Propiedad en Miami Lakes #8")
  },
  {
    _id: ObjectId(),
    idOwner: owners[8]._id,
    name: "Propiedad en Edgewater #9",
    addressProperty: "109 Main St, Edgewater, FL",
    priceProperty: 4550498,
    codeInternal: "PROP-009",
    year: 2021,
    slug: slugify("Propiedad en Edgewater #9")
  },
  {
    _id: ObjectId(),
    idOwner: owners[9]._id,
    name: "Propiedad en Surfside #10",
    addressProperty: "110 Main St, Surfside, FL",
    priceProperty: 1510260,
    codeInternal: "PROP-010",
    year: 1995,
    slug: slugify("Propiedad en Surfside #10")
  },
  {
    _id: ObjectId(),
    idOwner: owners[10]._id,
    name: "Propiedad en Kendall #11",
    addressProperty: "111 Main St, Kendall, FL",
    priceProperty: 971661,
    codeInternal: "PROP-011",
    year: 2023,
    slug: slugify("Propiedad en Kendall #11")
  },
  {
    _id: ObjectId(),
    idOwner: owners[11]._id,
    name: "Propiedad en Sunny Isles #12",
    addressProperty: "112 Main St, Sunny Isles, FL",
    priceProperty: 4054743,
    codeInternal: "PROP-012",
    year: 2008,
    slug: slugify("Propiedad en Sunny Isles #12")
  },
  {
    _id: ObjectId(),
    idOwner: owners[12]._id,
    name: "Propiedad en Hallandale Beach #13",
    addressProperty: "113 Main St, Hallandale Beach, FL",
    priceProperty: 1685693,
    codeInternal: "PROP-013",
    year: 2007,
    slug: slugify("Propiedad en Hallandale Beach #13")
  },
  {
    _id: ObjectId(),
    idOwner: owners[13]._id,
    name: "Propiedad en Golden Beach #14",
    addressProperty: "114 Main St, Golden Beach, FL",
    priceProperty: 3175993,
    codeInternal: "PROP-014",
    year: 2009,
    slug: slugify("Propiedad en Golden Beach #14")
  },
  {
    _id: ObjectId(),
    idOwner: owners[14]._id,
    name: "Propiedad en Coconut Grove #15",
    addressProperty: "115 Main St, Coconut Grove, FL",
    priceProperty: 3911557,
    codeInternal: "PROP-015",
    year: 1996,
    slug: slugify("Propiedad en Coconut Grove #15")
  },
  {
    _id: ObjectId(),
    idOwner: owners[15]._id,
    name: "Propiedad en Miami #16",
    addressProperty: "116 Main St, Miami, FL",
    priceProperty: 569513,
    codeInternal: "PROP-016",
    year: 1994,
    slug: slugify("Propiedad en Miami #16")
  },
  {
    _id: ObjectId(),
    idOwner: owners[16]._id,
    name: "Propiedad en Kendall #17",
    addressProperty: "117 Main St, Kendall, FL",
    priceProperty: 3610728,
    codeInternal: "PROP-017",
    year: 1997,
    slug: slugify("Propiedad en Kendall #17")
  },
  {
    _id: ObjectId(),
    idOwner: owners[17]._id,
    name: "Propiedad en Design District #18",
    addressProperty: "118 Main St, Design District, FL",
    priceProperty: 4140520,
    codeInternal: "PROP-018",
    year: 2023,
    slug: slugify("Propiedad en Design District #18")
  },
  {
    _id: ObjectId(),
    idOwner: owners[18]._id,
    name: "Propiedad en Little Havana #19",
    addressProperty: "119 Main St, Little Havana, FL",
    priceProperty: 3288239,
    codeInternal: "PROP-019",
    year: 1990,
    slug: slugify("Propiedad en Little Havana #19")
  },
  {
    _id: ObjectId(),
    idOwner: owners[19]._id,
    name: "Propiedad en Edgewater #20",
    addressProperty: "120 Main St, Edgewater, FL",
    priceProperty: 731230,
    codeInternal: "PROP-020",
    year: 2017,
    slug: slugify("Propiedad en Edgewater #20")
  },
  {
    _id: ObjectId(),
    idOwner: owners[20]._id,
    name: "Propiedad en Aventura #21",
    addressProperty: "121 Main St, Aventura, FL",
    priceProperty: 3166873,
    codeInternal: "PROP-021",
    year: 2010,
    slug: slugify("Propiedad en Aventura #21")
  },
  {
    _id: ObjectId(),
    idOwner: owners[21]._id,
    name: "Propiedad en Hallandale Beach #22",
    addressProperty: "122 Main St, Hallandale Beach, FL",
    priceProperty: 2498103,
    codeInternal: "PROP-022",
    year: 1994,
    slug: slugify("Propiedad en Hallandale Beach #22")
  },
  {
    _id: ObjectId(),
    idOwner: owners[22]._id,
    name: "Propiedad en Design District #23",
    addressProperty: "123 Main St, Design District, FL",
    priceProperty: 4999904,
    codeInternal: "PROP-023",
    year: 1993,
    slug: slugify("Propiedad en Design District #23")
  },
  {
    _id: ObjectId(),
    idOwner: owners[23]._id,
    name: "Propiedad en Homestead #24",
    addressProperty: "124 Main St, Homestead, FL",
    priceProperty: 539633,
    codeInternal: "PROP-024",
    year: 2007,
    slug: slugify("Propiedad en Homestead #24")
  },
  {
    _id: ObjectId(),
    idOwner: owners[24]._id,
    name: "Propiedad en Coral Gables #25",
    addressProperty: "125 Main St, Coral Gables, FL",
    priceProperty: 3546477,
    codeInternal: "PROP-025",
    year: 2000,
    slug: slugify("Propiedad en Coral Gables #25")
  },
  {
    _id: ObjectId(),
    idOwner: owners[25]._id,
    name: "Propiedad en Design District #26",
    addressProperty: "126 Main St, Design District, FL",
    priceProperty: 4453998,
    codeInternal: "PROP-026",
    year: 2007,
    slug: slugify("Propiedad en Design District #26")
  },
  {
    _id: ObjectId(),
    idOwner: owners[26]._id,
    name: "Propiedad en Bal Harbour #27",
    addressProperty: "127 Main St, Bal Harbour, FL",
    priceProperty: 4810389,
    codeInternal: "PROP-027",
    year: 2012,
    slug: slugify("Propiedad en Bal Harbour #27")
  },
  {
    _id: ObjectId(),
    idOwner: owners[27]._id,
    name: "Propiedad en Doral #28",
    addressProperty: "128 Main St, Doral, FL",
    priceProperty: 782630,
    codeInternal: "PROP-028",
    year: 2007,
    slug: slugify("Propiedad en Doral #28")
  },
  {
    _id: ObjectId(),
    idOwner: owners[28]._id,
    name: "Propiedad en Sunny Isles #29",
    addressProperty: "129 Main St, Sunny Isles, FL",
    priceProperty: 1061222,
    codeInternal: "PROP-029",
    year: 2023,
    slug: slugify("Propiedad en Sunny Isles #29")
  },
  {
    _id: ObjectId(),
    idOwner: owners[29]._id,
    name: "Propiedad en Bal Harbour #30",
    addressProperty: "130 Main St, Bal Harbour, FL",
    priceProperty: 912603,
    codeInternal: "PROP-030",
    year: 2014,
    slug: slugify("Propiedad en Bal Harbour #30")
  },
  {
    _id: ObjectId(),
    idOwner: owners[30]._id,
    name: "Propiedad en Doral #31",
    addressProperty: "131 Main St, Doral, FL",
    priceProperty: 1139943,
    codeInternal: "PROP-031",
    year: 2003,
    slug: slugify("Propiedad en Doral #31")
  },
  {
    _id: ObjectId(),
    idOwner: owners[31]._id,
    name: "Propiedad en Bal Harbour #32",
    addressProperty: "132 Main St, Bal Harbour, FL",
    priceProperty: 1713943,
    codeInternal: "PROP-032",
    year: 2000,
    slug: slugify("Propiedad en Bal Harbour #32")
  },
  {
    _id: ObjectId(),
    idOwner: owners[32]._id,
    name: "Propiedad en Hollywood #33",
    addressProperty: "133 Main St, Hollywood, FL",
    priceProperty: 3356088,
    codeInternal: "PROP-033",
    year: 2001,
    slug: slugify("Propiedad en Hollywood #33")
  },
  {
    _id: ObjectId(),
    idOwner: owners[33]._id,
    name: "Propiedad en Little Havana #34",
    addressProperty: "134 Main St, Little Havana, FL",
    priceProperty: 1925143,
    codeInternal: "PROP-034",
    year: 1996,
    slug: slugify("Propiedad en Little Havana #34")
  },
  {
    _id: ObjectId(),
    idOwner: owners[34]._id,
    name: "Propiedad en Little Havana #35",
    addressProperty: "135 Main St, Little Havana, FL",
    priceProperty: 1773388,
    codeInternal: "PROP-035",
    year: 1997,
    slug: slugify("Propiedad en Little Havana #35")
  },
  {
    _id: ObjectId(),
    idOwner: owners[35]._id,
    name: "Propiedad en Cutler Bay #36",
    addressProperty: "136 Main St, Cutler Bay, FL",
    priceProperty: 2876041,
    codeInternal: "PROP-036",
    year: 2000,
    slug: slugify("Propiedad en Cutler Bay #36")
  },
  {
    _id: ObjectId(),
    idOwner: owners[36]._id,
    name: "Propiedad en Pembroke Pines #37",
    addressProperty: "137 Main St, Pembroke Pines, FL",
    priceProperty: 4885896,
    codeInternal: "PROP-037",
    year: 1998,
    slug: slugify("Propiedad en Pembroke Pines #37")
  },
  {
    _id: ObjectId(),
    idOwner: owners[37]._id,
    name: "Propiedad en Palmetto Bay #38",
    addressProperty: "138 Main St, Palmetto Bay, FL",
    priceProperty: 3847185,
    codeInternal: "PROP-038",
    year: 2009,
    slug: slugify("Propiedad en Palmetto Bay #38")
  },
  {
    _id: ObjectId(),
    idOwner: owners[38]._id,
    name: "Propiedad en Kendall #39",
    addressProperty: "139 Main St, Kendall, FL",
    priceProperty: 2008418,
    codeInternal: "PROP-039",
    year: 1995,
    slug: slugify("Propiedad en Kendall #39")
  },
  {
    _id: ObjectId(),
    idOwner: owners[39]._id,
    name: "Propiedad en Sunny Isles #40",
    addressProperty: "140 Main St, Sunny Isles, FL",
    priceProperty: 4311125,
    codeInternal: "PROP-040",
    year: 2008,
    slug: slugify("Propiedad en Sunny Isles #40")
  },
  {
    _id: ObjectId(),
    idOwner: owners[40]._id,
    name: "Propiedad en Edgewater #41",
    addressProperty: "141 Main St, Edgewater, FL",
    priceProperty: 3955156,
    codeInternal: "PROP-041",
    year: 2008,
    slug: slugify("Propiedad en Edgewater #41")
  },
  {
    _id: ObjectId(),
    idOwner: owners[41]._id,
    name: "Propiedad en Bal Harbour #42",
    addressProperty: "142 Main St, Bal Harbour, FL",
    priceProperty: 2926719,
    codeInternal: "PROP-042",
    year: 1997,
    slug: slugify("Propiedad en Bal Harbour #42")
  },
  {
    _id: ObjectId(),
    idOwner: owners[42]._id,
    name: "Propiedad en Hollywood #43",
    addressProperty: "143 Main St, Hollywood, FL",
    priceProperty: 2137950,
    codeInternal: "PROP-043",
    year: 1996,
    slug: slugify("Propiedad en Hollywood #43")
  },
  {
    _id: ObjectId(),
    idOwner: owners[43]._id,
    name: "Propiedad en Little Havana #44",
    addressProperty: "144 Main St, Little Havana, FL",
    priceProperty: 2889999,
    codeInternal: "PROP-044",
    year: 2021,
    slug: slugify("Propiedad en Little Havana #44")
  },
  {
    _id: ObjectId(),
    idOwner: owners[44]._id,
    name: "Propiedad en Coral Springs #45",
    addressProperty: "145 Main St, Coral Springs, FL",
    priceProperty: 3479643,
    codeInternal: "PROP-045",
    year: 2018,
    slug: slugify("Propiedad en Coral Springs #45")
  },
  {
    _id: ObjectId(),
    idOwner: owners[45]._id,
    name: "Propiedad en Coconut Grove #46",
    addressProperty: "146 Main St, Coconut Grove, FL",
    priceProperty: 648840,
    codeInternal: "PROP-046",
    year: 2005,
    slug: slugify("Propiedad en Coconut Grove #46")
  },
  {
    _id: ObjectId(),
    idOwner: owners[46]._id,
    name: "Propiedad en Coconut Grove #47",
    addressProperty: "147 Main St, Coconut Grove, FL",
    priceProperty: 2481133,
    codeInternal: "PROP-047",
    year: 1999,
    slug: slugify("Propiedad en Coconut Grove #47")
  },
  {
    _id: ObjectId(),
    idOwner: owners[47]._id,
    name: "Propiedad en Miami Lakes #48",
    addressProperty: "148 Main St, Miami Lakes, FL",
    priceProperty: 1458232,
    codeInternal: "PROP-048",
    year: 1994,
    slug: slugify("Propiedad en Miami Lakes #48")
  },
  {
    _id: ObjectId(),
    idOwner: owners[48]._id,
    name: "Propiedad en Homestead #49",
    addressProperty: "149 Main St, Homestead, FL",
    priceProperty: 501604,
    codeInternal: "PROP-049",
    year: 2004,
    slug: slugify("Propiedad en Homestead #49")
  },
  {
    _id: ObjectId(),
    idOwner: owners[49]._id,
    name: "Propiedad en Pembroke Pines #50",
    addressProperty: "150 Main St, Pembroke Pines, FL",
    priceProperty: 3670532,
    codeInternal: "PROP-050",
    year: 2008,
    slug: slugify("Propiedad en Pembroke Pines #50")
  }
];

db.Properties.insertMany(properties);

const propertyImages = [];

properties.forEach((property, index) => {
  const numImages = Math.floor(Math.random() * 3) + 2;
  
  for (let i = 0; i < numImages; i++) {
    propertyImages.push({
      _id: ObjectId(),
      idProperty: property._id,
      file: `https://picsum.photos/id/${101 + (index * 4) + i}/800/600`,
      enabled: Math.random() > 0.3
    });
  }
});

db.PropertyImages.insertMany(propertyImages);

const propertyTraces = [];

const propertiesWithTraces = properties.filter((_, index) => index % 3 === 0);

propertiesWithTraces.forEach((property, index) => {
  const numTraces = Math.floor(Math.random() * 3) + 1;
  
  for (let i = 0; i < numTraces; i++) {
    const baseYear = property.year + Math.floor(Math.random() * 10) + 1;
    const saleDate = new Date(baseYear, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    
    propertyTraces.push({
      _id: ObjectId(),
      idProperty: property._id,
      dateSale: saleDate,
      name: `Venta #${i + 1}`,
      value: Math.floor(Math.random() * property.priceProperty * 0.8) + (property.priceProperty * 0.2),
      tax: Math.floor(Math.random() * 50000) + 10000
    });
  }
});

db.PropertyTraces.insertMany(propertyTraces);

db.Properties.createIndex({ "name": "text", "addressProperty": "text" });
db.Properties.createIndex({ "priceProperty": 1 });
db.Properties.createIndex({ "idOwner": 1 });
db.Properties.createIndex({ "year": 1 });
db.Properties.createIndex({ "slug": 1 }, { unique: true });

db.PropertyImages.createIndex({ "idProperty": 1 });
db.PropertyImages.createIndex({ "enabled": 1 });

db.PropertyTraces.createIndex({ "idProperty": 1 });
db.PropertyTraces.createIndex({ "dateSale": 1 });

db.Owners.createIndex({ "name": 1 });