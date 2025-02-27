"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("districts", [
      {
        id: "110101",
        city_id: "1101",
        name: "Bakongan",
      },
      {
        id: "110102",
        city_id: "1101",
        name: "Kluet Utara",
      },
      {
        id: "110103",
        city_id: "1101",
        name: "Kluet Selatan",
      },
      {
        id: "110104",
        city_id: "1101",
        name: "Labuhan Haji",
      },
      {
        id: "110105",
        city_id: "1101",
        name: "Meukek",
      },
      {
        id: "110106",
        city_id: "1101",
        name: "Samadua",
      },
      {
        id: "110107",
        city_id: "1101",
        name: "Sawang",
      },
      {
        id: "110108",
        city_id: "1101",
        name: "Tapaktuan",
      },
      {
        id: "110109",
        city_id: "1101",
        name: "Trumon",
      },
      {
        id: "110110",
        city_id: "1101",
        name: "Pasi Raja",
      },
      {
        id: "110111",
        city_id: "1101",
        name: "Labuhan Haji Timur",
      },
      {
        id: "110112",
        city_id: "1101",
        name: "Labuhan Haji Barat",
      },
      {
        id: "110113",
        city_id: "1101",
        name: "Kluet Tengah",
      },
      {
        id: "110114",
        city_id: "1101",
        name: "Kluet Timur",
      },
      {
        id: "110115",
        city_id: "1101",
        name: "Bakongan Timur",
      },
      {
        id: "110116",
        city_id: "1101",
        name: "Trumon Timur",
      },
      {
        id: "110117",
        city_id: "1101",
        name: "Kota Bahagia",
      },
      {
        id: "110118",
        city_id: "1101",
        name: "Trumon Tengah",
      },
      {
        id: "110201",
        city_id: "1102",
        name: "Lawe Alas",
      },
      {
        id: "110202",
        city_id: "1102",
        name: "Lawe Sigala-Gala",
      },
      {
        id: "110203",
        city_id: "1102",
        name: "Bambel",
      },
      {
        id: "110204",
        city_id: "1102",
        name: "Babussalam",
      },
      {
        id: "110205",
        city_id: "1102",
        name: "Badar",
      },
      {
        id: "110206",
        city_id: "1102",
        name: "Babul Makmur",
      },
      {
        id: "110207",
        city_id: "1102",
        name: "Darul Hasanah",
      },
      {
        id: "110208",
        city_id: "1102",
        name: "Lawe Bulan",
      },
      {
        id: "110209",
        city_id: "1102",
        name: "Bukit Tusam",
      },
      {
        id: "110210",
        city_id: "1102",
        name: "Semadam",
      },
      {
        id: "110211",
        city_id: "1102",
        name: "Babul Rahmah",
      },
      {
        id: "110212",
        city_id: "1102",
        name: "Ketambe",
      },
      {
        id: "110213",
        city_id: "1102",
        name: "Deleng Pokhkisen",
      },
      {
        id: "110214",
        city_id: "1102",
        name: "Lawe Sumur",
      },
      {
        id: "110215",
        city_id: "1102",
        name: "Tanoh Alas",
      },
      {
        id: "110216",
        city_id: "1102",
        name: "Leuser",
      },
      {
        id: "110301",
        city_id: "1103",
        name: "Darul Aman",
      },
      {
        id: "110302",
        city_id: "1103",
        name: "Julok",
      },
      {
        id: "110303",
        city_id: "1103",
        name: "Idi Rayeuk",
      },
      {
        id: "110304",
        city_id: "1103",
        name: "Birem Bayeun",
      },
      {
        id: "110305",
        city_id: "1103",
        name: "Serbajadi",
      },
      {
        id: "110306",
        city_id: "1103",
        name: "Nurussalam",
      },
      {
        id: "110307",
        city_id: "1103",
        name: "Peureulak",
      },
      {
        id: "110308",
        city_id: "1103",
        name: "Rantau Selamat",
      },
      {
        id: "110309",
        city_id: "1103",
        name: "Simpang Ulim",
      },
      {
        id: "110310",
        city_id: "1103",
        name: "Rantau Peureulak",
      },
      {
        id: "110311",
        city_id: "1103",
        name: "Pante Bidari",
      },
      {
        id: "110312",
        city_id: "1103",
        name: "Madat",
      },
      {
        id: "110313",
        city_id: "1103",
        name: "Indra Makmu",
      },
      {
        id: "110314",
        city_id: "1103",
        name: "Idi Tunong",
      },
      {
        id: "110315",
        city_id: "1103",
        name: "Banda Alam",
      },
      {
        id: "110316",
        city_id: "1103",
        name: "Peudawa",
      },
      {
        id: "110317",
        city_id: "1103",
        name: "Peureulak Timur",
      },
      {
        id: "110318",
        city_id: "1103",
        name: "Peureulak Barat",
      },
      {
        id: "110319",
        city_id: "1103",
        name: "Sungai Raya",
      },
      {
        id: "110320",
        city_id: "1103",
        name: "Simpang Jernih",
      },
      {
        id: "110321",
        city_id: "1103",
        name: "Darul Ihsan",
      },
      {
        id: "110322",
        city_id: "1103",
        name: "Darul Falah",
      },
      {
        id: "110323",
        city_id: "1103",
        name: "Idi Timur",
      },
      {
        id: "110324",
        city_id: "1103",
        name: "Peunaron",
      },
      {
        id: "110401",
        city_id: "1104",
        name: "Linge",
      },
      {
        id: "110402",
        city_id: "1104",
        name: "Silih Nara",
      },
      {
        id: "110403",
        city_id: "1104",
        name: "Bebesen",
      },
      {
        id: "110407",
        city_id: "1104",
        name: "Pegasing",
      },
      {
        id: "110408",
        city_id: "1104",
        name: "Bintang",
      },
      {
        id: "110410",
        city_id: "1104",
        name: "Ketol",
      },
      {
        id: "110411",
        city_id: "1104",
        name: "Kebayakan",
      },
      {
        id: "110412",
        city_id: "1104",
        name: "Kute Panang",
      },
      {
        id: "110413",
        city_id: "1104",
        name: "Celala",
      },
      {
        id: "110417",
        city_id: "1104",
        name: "Laut Tawar",
      },
      {
        id: "110418",
        city_id: "1104",
        name: "Atu Lintang",
      },
      {
        id: "110419",
        city_id: "1104",
        name: "Jagong Jeget",
      },
      {
        id: "110420",
        city_id: "1104",
        name: "Bies",
      },
      {
        id: "110421",
        city_id: "1104",
        name: "Rusip Antara",
      },
      {
        id: "110501",
        city_id: "1105",
        name: "Johan Pahwalan",
      },
      {
        id: "110502",
        city_id: "1105",
        name: "Kaway XVI",
      },
      {
        id: "110503",
        city_id: "1105",
        name: "Sungai Mas",
      },
      {
        id: "110504",
        city_id: "1105",
        name: "Woyla",
      },
      {
        id: "110505",
        city_id: "1105",
        name: "Samatiga",
      },
      {
        id: "110506",
        city_id: "1105",
        name: "Bubon",
      },
      {
        id: "110507",
        city_id: "1105",
        name: "Arongan Lambalek",
      },
      {
        id: "110508",
        city_id: "1105",
        name: "Pante Ceureumen",
      },
      {
        id: "110509",
        city_id: "1105",
        name: "Meureubo",
      },
      {
        id: "110510",
        city_id: "1105",
        name: "Woyla Barat",
      },
      {
        id: "110511",
        city_id: "1105",
        name: "Woyla Timur",
      },
      {
        id: "110512",
        city_id: "1105",
        name: "Panton Reu",
      },
      {
        id: "110601",
        city_id: "1106",
        name: "Lhoong",
      },
      {
        id: "110602",
        city_id: "1106",
        name: "Lhoknga",
      },
      {
        id: "110603",
        city_id: "1106",
        name: "Indrapuri",
      },
      {
        id: "110604",
        city_id: "1106",
        name: "Seulimeum",
      },
      {
        id: "110605",
        city_id: "1106",
        name: "Montasik",
      },
      {
        id: "110606",
        city_id: "1106",
        name: "Sukamakmur",
      },
      {
        id: "110607",
        city_id: "1106",
        name: "Darul Imarah",
      },
      {
        id: "110608",
        city_id: "1106",
        name: "Peukan Bada",
      },
      {
        id: "110609",
        city_id: "1106",
        name: "Mesjid Raya",
      },
      {
        id: "110610",
        city_id: "1106",
        name: "Ingin Jaya",
      },
      {
        id: "110611",
        city_id: "1106",
        name: "Kuta Baro",
      },
      {
        id: "110612",
        city_id: "1106",
        name: "Darussalam",
      },
      {
        id: "110613",
        city_id: "1106",
        name: "Pulo Aceh",
      },
      {
        id: "110614",
        city_id: "1106",
        name: "Lembah Seulawah",
      },
      {
        id: "110615",
        city_id: "1106",
        name: "Kota Jantho",
      },
      {
        id: "110616",
        city_id: "1106",
        name: "Kota Cot Glie",
      },
      {
        id: "110617",
        city_id: "1106",
        name: "Kuta Malaka",
      },
      {
        id: "110618",
        city_id: "1106",
        name: "Simpang Tiga",
      },
      {
        id: "110619",
        city_id: "1106",
        name: "Darul Kamal",
      },
      {
        id: "110620",
        city_id: "1106",
        name: "Baitussalam",
      },
      {
        id: "110621",
        city_id: "1106",
        name: "Krueng Barona Jaya",
      },
      {
        id: "110622",
        city_id: "1106",
        name: "Leupung",
      },
      {
        id: "110623",
        city_id: "1106",
        name: "Blang Bintang",
      },
      {
        id: "110703",
        city_id: "1107",
        name: "Batee",
      },
      {
        id: "110704",
        city_id: "1107",
        name: "Delima",
      },
      {
        id: "110705",
        city_id: "1107",
        name: "Geumpang",
      },
      {
        id: "110706",
        city_id: "1107",
        name: "Geulumpang Tiga",
      },
      {
        id: "110707",
        city_id: "1107",
        name: "Indra Jaya",
      },
      {
        id: "110708",
        city_id: "1107",
        name: "Kembang Tanjong",
      },
      {
        id: "110709",
        city_id: "1107",
        name: "Kota Sigli",
      },
      {
        id: "110711",
        city_id: "1107",
        name: "Mila",
      },
      {
        id: "110712",
        city_id: "1107",
        name: "Muara Tiga",
      },
      {
        id: "110713",
        city_id: "1107",
        name: "Mutiara",
      },
      {
        id: "110714",
        city_id: "1107",
        name: "Padang Tiji",
      },
      {
        id: "110715",
        city_id: "1107",
        name: "Peukan Baro",
      },
      {
        id: "110716",
        city_id: "1107",
        name: "Pidie",
      },
      {
        id: "110717",
        city_id: "1107",
        name: "Sakti",
      },
      {
        id: "110718",
        city_id: "1107",
        name: "Simpang Tiga",
      },
      {
        id: "110719",
        city_id: "1107",
        name: "Tangse",
      },
      {
        id: "110721",
        city_id: "1107",
        name: "Tiro/Truseb",
      },
      {
        id: "110722",
        city_id: "1107",
        name: "Keumala",
      },
      {
        id: "110724",
        city_id: "1107",
        name: "Mutiara Timur",
      },
      {
        id: "110725",
        city_id: "1107",
        name: "Grong-grong",
      },
      {
        id: "110727",
        city_id: "1107",
        name: "Mane",
      },
      {
        id: "110729",
        city_id: "1107",
        name: "Glumpang Baro",
      },
      {
        id: "110731",
        city_id: "1107",
        name: "Titeue",
      },
      {
        id: "110801",
        city_id: "1108",
        name: "Baktiya",
      },
      {
        id: "110802",
        city_id: "1108",
        name: "Dewantara",
      },
      {
        id: "110803",
        city_id: "1108",
        name: "Kuta Makmur",
      },
      {
        id: "110804",
        city_id: "1108",
        name: "Lhoksukon",
      },
      {
        id: "110805",
        city_id: "1108",
        name: "Matangkuli",
      },
      {
        id: "110806",
        city_id: "1108",
        name: "Muara Batu",
      },
      {
        id: "110807",
        city_id: "1108",
        name: "Meurah Mulia",
      },
      {
        id: "110808",
        city_id: "1108",
        name: "Samudera",
      },
      {
        id: "110809",
        city_id: "1108",
        name: "Seunuddon",
      },
      {
        id: "110810",
        city_id: "1108",
        name: "Syamtalira Aron",
      },
      {
        id: "110811",
        city_id: "1108",
        name: "Syamtalira Bayu",
      },
      {
        id: "110812",
        city_id: "1108",
        name: "Tanah Luas",
      },
      {
        id: "110813",
        city_id: "1108",
        name: "Tanah Pasir",
      },
      {
        id: "110814",
        city_id: "1108",
        name: "T. Jambo Aye",
      },
      {
        id: "110815",
        city_id: "1108",
        name: "Sawang",
      },
      {
        id: "110816",
        city_id: "1108",
        name: "Nisam",
      },
      {
        id: "110817",
        city_id: "1108",
        name: "Cot Girek",
      },
      {
        id: "110818",
        city_id: "1108",
        name: "Langkahan",
      },
      {
        id: "110819",
        city_id: "1108",
        name: "Baktiya Barat",
      },
      {
        id: "110820",
        city_id: "1108",
        name: "Paya Bakong",
      },
      {
        id: "110821",
        city_id: "1108",
        name: "Nibong",
      },
      {
        id: "110822",
        city_id: "1108",
        name: "Simpang Kramat",
      },
      {
        id: "110823",
        city_id: "1108",
        name: "Lapang",
      },
      {
        id: "110824",
        city_id: "1108",
        name: "Pirak Timur",
      },
      {
        id: "110825",
        city_id: "1108",
        name: "Geuredong Pase",
      },
      {
        id: "110826",
        city_id: "1108",
        name: "Banda Baro",
      },
      {
        id: "110827",
        city_id: "1108",
        name: "Nisam Antara",
      },
      {
        id: "110901",
        city_id: "1109",
        name: "Simeulue Tengah",
      },
      {
        id: "110902",
        city_id: "1109",
        name: "Salang",
      },
      {
        id: "110903",
        city_id: "1109",
        name: "Teupah Barat",
      },
      {
        id: "110904",
        city_id: "1109",
        name: "Simeulue Timur",
      },
      {
        id: "110905",
        city_id: "1109",
        name: "Teluk Dalam",
      },
      {
        id: "110906",
        city_id: "1109",
        name: "Simeulue Barat",
      },
      {
        id: "110907",
        city_id: "1109",
        name: "Teupah Selatan",
      },
      {
        id: "110908",
        city_id: "1109",
        name: "Alapan",
      },
      {
        id: "110909",
        city_id: "1109",
        name: "Teupah Tengah",
      },
      {
        id: "110910",
        city_id: "1109",
        name: "Simeulue Cut",
      },
      {
        id: "111001",
        city_id: "1110",
        name: "Pulau Banyak",
      },
      {
        id: "111002",
        city_id: "1110",
        name: "Simpang Kanan",
      },
      {
        id: "111004",
        city_id: "1110",
        name: "Singkil",
      },
      {
        id: "111006",
        city_id: "1110",
        name: "Gunung Meriah",
      },
      {
        id: "111009",
        city_id: "1110",
        name: "Kota Baharu",
      },
      {
        id: "111010",
        city_id: "1110",
        name: "Singkil Utara",
      },
      {
        id: "111011",
        city_id: "1110",
        name: "Danau Paris",
      },
      {
        id: "111012",
        city_id: "1110",
        name: "Suro Makmur",
      },
      {
        id: "111013",
        city_id: "1110",
        name: "Singkohor",
      },
      {
        id: "111014",
        city_id: "1110",
        name: "Kuala Baru",
      },
      {
        id: "111016",
        city_id: "1110",
        name: "Pulau Banyak Barat",
      },
      {
        id: "111101",
        city_id: "1111",
        name: "Samalanga",
      },
      {
        id: "111102",
        city_id: "1111",
        name: "Jeunieb",
      },
      {
        id: "111103",
        city_id: "1111",
        name: "Peudada",
      },
      {
        id: "111104",
        city_id: "1111",
        name: "Jeumpa",
      },
      {
        id: "111105",
        city_id: "1111",
        name: "Peusangan",
      },
      {
        id: "111106",
        city_id: "1111",
        name: "Makmur",
      },
      {
        id: "111107",
        city_id: "1111",
        name: "Gandapura",
      },
      {
        id: "111108",
        city_id: "1111",
        name: "Pandrah",
      },
      {
        id: "111109",
        city_id: "1111",
        name: "Juli",
      },
      {
        id: "111110",
        city_id: "1111",
        name: "Jangka",
      },
      {
        id: "111111",
        city_id: "1111",
        name: "Simpang Mamplam",
      },
      {
        id: "111112",
        city_id: "1111",
        name: "Peulimbang",
      },
      {
        id: "111113",
        city_id: "1111",
        name: "Kota Juang",
      },
      {
        id: "111114",
        city_id: "1111",
        name: "Kuala",
      },
      {
        id: "111115",
        city_id: "1111",
        name: "Peusangan Siblah Krueng",
      },
      {
        id: "111116",
        city_id: "1111",
        name: "Peusangan Selatan",
      },
      {
        id: "111117",
        city_id: "1111",
        name: "Kuta Blang",
      },
      {
        id: "111201",
        city_id: "1112",
        name: "Blang Pidie",
      },
      {
        id: "111202",
        city_id: "1112",
        name: "Tangan-Tangan",
      },
      {
        id: "111203",
        city_id: "1112",
        name: "Manggeng",
      },
      {
        id: "111204",
        city_id: "1112",
        name: "Susoh",
      },
      {
        id: "111205",
        city_id: "1112",
        name: "Kuala Batee",
      },
      {
        id: "111206",
        city_id: "1112",
        name: "Babah Rot",
      },
      {
        id: "111207",
        city_id: "1112",
        name: "Setia",
      },
      {
        id: "111208",
        city_id: "1112",
        name: "Jeumpa",
      },
      {
        id: "111209",
        city_id: "1112",
        name: "Lembah Sabil",
      },
      {
        id: "111301",
        city_id: "1113",
        name: "Blangkejeren",
      },
      {
        id: "111302",
        city_id: "1113",
        name: "Kutapanjang",
      },
      {
        id: "111303",
        city_id: "1113",
        name: "Rikit Gaib",
      },
      {
        id: "111304",
        city_id: "1113",
        name: "Terangun",
      },
      {
        id: "111305",
        city_id: "1113",
        name: "Pining",
      },
      {
        id: "111306",
        city_id: "1113",
        name: "Blangpegayon",
      },
      {
        id: "111307",
        city_id: "1113",
        name: "Puteri Betung",
      },
      {
        id: "111308",
        city_id: "1113",
        name: "Dabun Gelang",
      },
      {
        id: "111309",
        city_id: "1113",
        name: "Blangjerango",
      },
      {
        id: "111310",
        city_id: "1113",
        name: "Teripe Jaya",
      },
      {
        id: "111311",
        city_id: "1113",
        name: "Pantan Cuaca",
      },
      {
        id: "111401",
        city_id: "1114",
        name: "Teunom",
      },
      {
        id: "111402",
        city_id: "1114",
        name: "Krueng Sabee",
      },
      {
        id: "111403",
        city_id: "1114",
        name: "Setia Bhakti",
      },
      {
        id: "111404",
        city_id: "1114",
        name: "Sampoiniet",
      },
      {
        id: "111405",
        city_id: "1114",
        name: "Jaya",
      },
      {
        id: "111406",
        city_id: "1114",
        name: "Panga",
      },
      {
        id: "111407",
        city_id: "1114",
        name: "Indra Jaya",
      },
      {
        id: "111408",
        city_id: "1114",
        name: "Darul Hikmah",
      },
      {
        id: "111409",
        city_id: "1114",
        name: "Pasie Raya",
      },
      {
        id: "111501",
        city_id: "1115",
        name: "Kuala",
      },
      {
        id: "111502",
        city_id: "1115",
        name: "Seunagan",
      },
      {
        id: "111503",
        city_id: "1115",
        name: "Seunagan Timur",
      },
      {
        id: "111504",
        city_id: "1115",
        name: "Beutong",
      },
      {
        id: "111505",
        city_id: "1115",
        name: "Darul Makmur",
      },
      {
        id: "111506",
        city_id: "1115",
        name: "Suka Makmue",
      },
      {
        id: "111507",
        city_id: "1115",
        name: "Kuala Pesisir",
      },
      {
        id: "111508",
        city_id: "1115",
        name: "Tadu Raya",
      },
      {
        id: "111509",
        city_id: "1115",
        name: "Tripa Makmur",
      },
      {
        id: "111510",
        city_id: "1115",
        name: "Beutong Ateuh Banggalang",
      },
      {
        id: "111601",
        city_id: "1116",
        name: "Manyak Payed",
      },
      {
        id: "111602",
        city_id: "1116",
        name: "Bendahara",
      },
      {
        id: "111603",
        city_id: "1116",
        name: "Karang Baru",
      },
      {
        id: "111604",
        city_id: "1116",
        name: "Seruway",
      },
      {
        id: "111605",
        city_id: "1116",
        name: "Kota Kualasinpang",
      },
      {
        id: "111606",
        city_id: "1116",
        name: "Kejuruan Muda",
      },
      {
        id: "111607",
        city_id: "1116",
        name: "Tamiang Hulu",
      },
      {
        id: "111608",
        city_id: "1116",
        name: "Rantau",
      },
      {
        id: "111609",
        city_id: "1116",
        name: "Banda Mulia",
      },
      {
        id: "111610",
        city_id: "1116",
        name: "Bandar Pusaka",
      },
      {
        id: "111611",
        city_id: "1116",
        name: "Tenggulun",
      },
      {
        id: "111612",
        city_id: "1116",
        name: "Sekerak",
      },
      {
        id: "111701",
        city_id: "1117",
        name: "Pintu Rime Gayo",
      },
      {
        id: "111702",
        city_id: "1117",
        name: "Permata",
      },
      {
        id: "111703",
        city_id: "1117",
        name: "Syiah Utama",
      },
      {
        id: "111704",
        city_id: "1117",
        name: "Bandar",
      },
      {
        id: "111705",
        city_id: "1117",
        name: "Bukit",
      },
      {
        id: "111706",
        city_id: "1117",
        name: "Wih Pesam",
      },
      {
        id: "111707",
        city_id: "1117",
        name: "Timang gajah",
      },
      {
        id: "111708",
        city_id: "1117",
        name: "Bener Kelipah",
      },
      {
        id: "111709",
        city_id: "1117",
        name: "Mesidah",
      },
      {
        id: "111710",
        city_id: "1117",
        name: "Gajah Putih",
      },
      {
        id: "111801",
        city_id: "1118",
        name: "Meureudu",
      },
      {
        id: "111802",
        city_id: "1118",
        name: "Ulim",
      },
      {
        id: "111803",
        city_id: "1118",
        name: "Jangka Buaya",
      },
      {
        id: "111804",
        city_id: "1118",
        name: "Bandar Dua",
      },
      {
        id: "111805",
        city_id: "1118",
        name: "Meurah Dua",
      },
      {
        id: "111806",
        city_id: "1118",
        name: "Bandar Baru",
      },
      {
        id: "111807",
        city_id: "1118",
        name: "Panteraja",
      },
      {
        id: "111808",
        city_id: "1118",
        name: "Trienggadeng",
      },
      {
        id: "117101",
        city_id: "1171",
        name: "Baiturrahman",
      },
      {
        id: "117102",
        city_id: "1171",
        name: "Kuta Alam",
      },
      {
        id: "117103",
        city_id: "1171",
        name: "Meuraxa",
      },
      {
        id: "117104",
        city_id: "1171",
        name: "Syiah Kuala",
      },
      {
        id: "117105",
        city_id: "1171",
        name: "Lueng Bata",
      },
      {
        id: "117106",
        city_id: "1171",
        name: "Kuta Raja",
      },
      {
        id: "117107",
        city_id: "1171",
        name: "Banda Raya",
      },
      {
        id: "117108",
        city_id: "1171",
        name: "Jaya Baru",
      },
      {
        id: "117109",
        city_id: "1171",
        name: "Ulee Kareng",
      },
      {
        id: "117201",
        city_id: "1172",
        name: "Sukakarya",
      },
      {
        id: "117202",
        city_id: "1172",
        name: "Sukajaya",
      },
      {
        id: "117301",
        city_id: "1173",
        name: "Muara Dua",
      },
      {
        id: "117302",
        city_id: "1173",
        name: "Banda Sakti",
      },
      {
        id: "117303",
        city_id: "1173",
        name: "Blang Mangat",
      },
      {
        id: "117304",
        city_id: "1173",
        name: "Muara Satu",
      },
      {
        id: "117401",
        city_id: "1174",
        name: "Langsa Timur",
      },
      {
        id: "117402",
        city_id: "1174",
        name: "Langsa Barat",
      },
      {
        id: "117403",
        city_id: "1174",
        name: "Langsa Kota",
      },
      {
        id: "117404",
        city_id: "1174",
        name: "Langsa Lama",
      },
      {
        id: "117405",
        city_id: "1174",
        name: "Langsa Baro",
      },
      {
        id: "117501",
        city_id: "1175",
        name: "Simpang Kiri",
      },
      {
        id: "117502",
        city_id: "1175",
        name: "Penanggalan",
      },
      {
        id: "117503",
        city_id: "1175",
        name: "Rundeng",
      },
      {
        id: "117504",
        city_id: "1175",
        name: "Sultan Daulat",
      },
      {
        id: "117505",
        city_id: "1175",
        name: "Longkib",
      },
      {
        id: "120101",
        city_id: "1201",
        name: "Barus",
      },
      {
        id: "120102",
        city_id: "1201",
        name: "Sorkam",
      },
      {
        id: "120103",
        city_id: "1201",
        name: "Pandan",
      },
      {
        id: "120104",
        city_id: "1201",
        name: "Pinangsori",
      },
      {
        id: "120105",
        city_id: "1201",
        name: "Manduamas",
      },
      {
        id: "120106",
        city_id: "1201",
        name: "Kolang",
      },
      {
        id: "120107",
        city_id: "1201",
        name: "Tapian Nauli",
      },
      {
        id: "120108",
        city_id: "1201",
        name: "Sibabangun",
      },
      {
        id: "120109",
        city_id: "1201",
        name: "Sosorgadong",
      },
      {
        id: "120110",
        city_id: "1201",
        name: "Sorkam Barat",
      },
      {
        id: "120111",
        city_id: "1201",
        name: "Sirandorung",
      },
      {
        id: "120112",
        city_id: "1201",
        name: "Andam Dewi",
      },
      {
        id: "120113",
        city_id: "1201",
        name: "Sitahuis",
      },
      {
        id: "120114",
        city_id: "1201",
        name: "Tukka",
      },
      {
        id: "120115",
        city_id: "1201",
        name: "Badiri",
      },
      {
        id: "120116",
        city_id: "1201",
        name: "Pasaribu Tobing",
      },
      {
        id: "120117",
        city_id: "1201",
        name: "Barus Utara",
      },
      {
        id: "120118",
        city_id: "1201",
        name: "Suka Bangun",
      },
      {
        id: "120119",
        city_id: "1201",
        name: "Lumut",
      },
      {
        id: "120120",
        city_id: "1201",
        name: "Sarudik",
      },
      {
        id: "120201",
        city_id: "1202",
        name: "Tarutung",
      },
      {
        id: "120202",
        city_id: "1202",
        name: "Siatas Barita",
      },
      {
        id: "120203",
        city_id: "1202",
        name: "Adian Koting",
      },
      {
        id: "120204",
        city_id: "1202",
        name: "Sipoholon",
      },
      {
        id: "120205",
        city_id: "1202",
        name: "Pahae Julu",
      },
      {
        id: "120206",
        city_id: "1202",
        name: "Pahae Jae",
      },
      {
        id: "120207",
        city_id: "1202",
        name: "Simangumban",
      },
      {
        id: "120208",
        city_id: "1202",
        name: "Purba Tua",
      },
      {
        id: "120209",
        city_id: "1202",
        name: "Siborong-Borong",
      },
      {
        id: "120210",
        city_id: "1202",
        name: "Pagaran",
      },
      {
        id: "120211",
        city_id: "1202",
        name: "Parmonangan",
      },
      {
        id: "120212",
        city_id: "1202",
        name: "Sipahutar",
      },
      {
        id: "120213",
        city_id: "1202",
        name: "Pangaribuan",
      },
      {
        id: "120214",
        city_id: "1202",
        name: "Garoga",
      },
      {
        id: "120215",
        city_id: "1202",
        name: "Muara",
      },
      {
        id: "120301",
        city_id: "1203",
        name: "Angkola Barat",
      },
      {
        id: "120302",
        city_id: "1203",
        name: "Batang Toru",
      },
      {
        id: "120303",
        city_id: "1203",
        name: "Angkola Timur",
      },
      {
        id: "120304",
        city_id: "1203",
        name: "Sipirok",
      },
      {
        id: "120305",
        city_id: "1203",
        name: "Saipar Dolok Hole",
      },
      {
        id: "120306",
        city_id: "1203",
        name: "Angkola Selatan",
      },
      {
        id: "120307",
        city_id: "1203",
        name: "Batang Angkola",
      },
      {
        id: "120314",
        city_id: "1203",
        name: "Arse",
      },
      {
        id: "120320",
        city_id: "1203",
        name: "Marancar",
      },
      {
        id: "120321",
        city_id: "1203",
        name: "Sayur Matinggi",
      },
      {
        id: "120322",
        city_id: "1203",
        name: "Aek Bilah",
      },
      {
        id: "120329",
        city_id: "1203",
        name: "Muara Batang Toru",
      },
      {
        id: "120330",
        city_id: "1203",
        name: "Tano Tombangan Angkola",
      },
      {
        id: "120331",
        city_id: "1203",
        name: "Angkola Sangkunur",
      },
      {
        id: "120332",
        city_id: "1203",
        name: "Angkola Muara Tais",
      },
      {
        id: "120405",
        city_id: "1204",
        name: "Hiliduho",
      },
      {
        id: "120406",
        city_id: "1204",
        name: "Gido",
      },
      {
        id: "120410",
        city_id: "1204",
        name: "Idanogawo",
      },
      {
        id: "120411",
        city_id: "1204",
        name: "Bawolato",
      },
      {
        id: "120420",
        city_id: "1204",
        name: "Hiliserangkai",
      },
      {
        id: "120421",
        city_id: "1204",
        name: "Botomuzoi",
      },
      {
        id: "120427",
        city_id: "1204",
        name: "Ulugawo",
      },
      {
        id: "120428",
        city_id: "1204",
        name: "Ma'u",
      },
      {
        id: "120429",
        city_id: "1204",
        name: "Somolo-molo",
      },
      {
        id: "120435",
        city_id: "1204",
        name: "Sogae'adu",
      },
      {
        id: "120501",
        city_id: "1205",
        name: "Bahorok",
      },
      {
        id: "120502",
        city_id: "1205",
        name: "Salapian",
      },
      {
        id: "120503",
        city_id: "1205",
        name: "Kuala",
      },
      {
        id: "120504",
        city_id: "1205",
        name: "Sei Bingai",
      },
      {
        id: "120505",
        city_id: "1205",
        name: "Binjai",
      },
      {
        id: "120506",
        city_id: "1205",
        name: "Selesai",
      },
      {
        id: "120507",
        city_id: "1205",
        name: "Stabat",
      },
      {
        id: "120508",
        city_id: "1205",
        name: "Wampu",
      },
      {
        id: "120509",
        city_id: "1205",
        name: "Secanggang",
      },
      {
        id: "120510",
        city_id: "1205",
        name: "Hinai",
      },
      {
        id: "120511",
        city_id: "1205",
        name: "Tanjung Pura",
      },
      {
        id: "120512",
        city_id: "1205",
        name: "Padang Tualang",
      },
      {
        id: "120513",
        city_id: "1205",
        name: "Gebang",
      },
      {
        id: "120514",
        city_id: "1205",
        name: "Babalan",
      },
      {
        id: "120515",
        city_id: "1205",
        name: "Pangkalan Susu",
      },
      {
        id: "120516",
        city_id: "1205",
        name: "Besitang",
      },
      {
        id: "120517",
        city_id: "1205",
        name: "Sei Lepan",
      },
      {
        id: "120518",
        city_id: "1205",
        name: "Berandan Barat",
      },
      {
        id: "120519",
        city_id: "1205",
        name: "Batang Serangan",
      },
      {
        id: "120520",
        city_id: "1205",
        name: "Sawit Seberang",
      },
      {
        id: "120521",
        city_id: "1205",
        name: "Sirapit",
      },
      {
        id: "120522",
        city_id: "1205",
        name: "Kutambaru",
      },
      {
        id: "120523",
        city_id: "1205",
        name: "Pematang Jaya",
      },
      {
        id: "120601",
        city_id: "1206",
        name: "Kabanjahe",
      },
      {
        id: "120602",
        city_id: "1206",
        name: "Berastagi",
      },
      {
        id: "120603",
        city_id: "1206",
        name: "Barusjahe",
      },
      {
        id: "120604",
        city_id: "1206",
        name: "Tigapanah",
      },
      {
        id: "120605",
        city_id: "1206",
        name: "Merek",
      },
      {
        id: "120606",
        city_id: "1206",
        name: "Munte",
      },
      {
        id: "120607",
        city_id: "1206",
        name: "Juhar",
      },
      {
        id: "120608",
        city_id: "1206",
        name: "Tigabinanga",
      },
      {
        id: "120609",
        city_id: "1206",
        name: "Laubaleng",
      },
      {
        id: "120610",
        city_id: "1206",
        name: "Mardingding",
      },
      {
        id: "120611",
        city_id: "1206",
        name: "Payung",
      },
      {
        id: "120612",
        city_id: "1206",
        name: "Simpang Empat",
      },
      {
        id: "120613",
        city_id: "1206",
        name: "Kutabuluh",
      },
      {
        id: "120614",
        city_id: "1206",
        name: "Dolat Rayat",
      },
      {
        id: "120615",
        city_id: "1206",
        name: "Merdeka",
      },
      {
        id: "120616",
        city_id: "1206",
        name: "Naman Teran",
      },
      {
        id: "120617",
        city_id: "1206",
        name: "Tiganderket",
      },
      {
        id: "120701",
        city_id: "1207",
        name: "Gunung Meriah",
      },
      {
        id: "120702",
        city_id: "1207",
        name: "Tanjung Morawa",
      },
      {
        id: "120703",
        city_id: "1207",
        name: "Sibolangit",
      },
      {
        id: "120704",
        city_id: "1207",
        name: "Kutalimbaru",
      },
      {
        id: "120705",
        city_id: "1207",
        name: "Pancur Batu",
      },
      {
        id: "120706",
        city_id: "1207",
        name: "Namorambe",
      },
      {
        id: "120707",
        city_id: "1207",
        name: "Sibiru-biru",
      },
      {
        id: "120708",
        city_id: "1207",
        name: "STM Hilir",
      },
      {
        id: "120709",
        city_id: "1207",
        name: "Bangun Purba",
      },
      {
        id: "120719",
        city_id: "1207",
        name: "Galang",
      },
      {
        id: "120720",
        city_id: "1207",
        name: "STM Hulu",
      },
      {
        id: "120721",
        city_id: "1207",
        name: "Patumbak",
      },
      {
        id: "120722",
        city_id: "1207",
        name: "Deli Tua",
      },
      {
        id: "120723",
        city_id: "1207",
        name: "Sunggal",
      },
      {
        id: "120724",
        city_id: "1207",
        name: "Hamparan Perak",
      },
      {
        id: "120725",
        city_id: "1207",
        name: "Labuhan Deli",
      },
      {
        id: "120726",
        city_id: "1207",
        name: "Percut Sei Tuan",
      },
      {
        id: "120727",
        city_id: "1207",
        name: "Batang Kuis",
      },
      {
        id: "120728",
        city_id: "1207",
        name: "Lubuk Pakam",
      },
      {
        id: "120731",
        city_id: "1207",
        name: "Pagar Merbau",
      },
      {
        id: "120732",
        city_id: "1207",
        name: "Pantai Labu",
      },
      {
        id: "120733",
        city_id: "1207",
        name: "Beringin",
      },
      {
        id: "120801",
        city_id: "1208",
        name: "Siantar",
      },
      {
        id: "120802",
        city_id: "1208",
        name: "Gunung Malela",
      },
      {
        id: "120803",
        city_id: "1208",
        name: "Gunung Maligas",
      },
      {
        id: "120804",
        city_id: "1208",
        name: "Panei",
      },
      {
        id: "120805",
        city_id: "1208",
        name: "Panombeian Pane",
      },
      {
        id: "120806",
        city_id: "1208",
        name: "Jorlang Hataran",
      },
      {
        id: "120807",
        city_id: "1208",
        name: "Raya Kahean",
      },
      {
        id: "120808",
        city_id: "1208",
        name: "Bosar Maligas",
      },
      {
        id: "120809",
        city_id: "1208",
        name: "Sidamanik",
      },
      {
        id: "120810",
        city_id: "1208",
        name: "Pematang Sidamanik",
      },
      {
        id: "120811",
        city_id: "1208",
        name: "Tanah Jawa",
      },
      {
        id: "120812",
        city_id: "1208",
        name: "Hatonduhan",
      },
      {
        id: "120813",
        city_id: "1208",
        name: "Dolok Panribuan",
      },
      {
        id: "120814",
        city_id: "1208",
        name: "Purba",
      },
      {
        id: "120815",
        city_id: "1208",
        name: "Haranggaol Horison",
      },
      {
        id: "120816",
        city_id: "1208",
        name: "Girsang Sipangan Bolon",
      },
      {
        id: "120817",
        city_id: "1208",
        name: "Dolok Batu Nanggar",
      },
      {
        id: "120818",
        city_id: "1208",
        name: "Huta Bayu Raja",
      },
      {
        id: "120819",
        city_id: "1208",
        name: "Jawa Maraja Bah Jambi",
      },
      {
        id: "120820",
        city_id: "1208",
        name: "Dolok Pardamean",
      },
      {
        id: "120821",
        city_id: "1208",
        name: "Pematang Bandar",
      },
      {
        id: "120822",
        city_id: "1208",
        name: "Bandar Huluan",
      },
      {
        id: "120823",
        city_id: "1208",
        name: "Bandar",
      },
      {
        id: "120824",
        city_id: "1208",
        name: "Bandar Masilam",
      },
      {
        id: "120825",
        city_id: "1208",
        name: "Silimakuta",
      },
      {
        id: "120826",
        city_id: "1208",
        name: "Dolok Silau",
      },
      {
        id: "120827",
        city_id: "1208",
        name: "Silou Kahean",
      },
      {
        id: "120828",
        city_id: "1208",
        name: "Tapian Dolok",
      },
      {
        id: "120829",
        city_id: "1208",
        name: "Raya",
      },
      {
        id: "120830",
        city_id: "1208",
        name: "Ujung Padang",
      },
      {
        id: "120831",
        city_id: "1208",
        name: "Pamatang Silima Huta",
      },
      {
        id: "120832",
        city_id: "1208",
        name: "Dolog Masagal",
      },
      {
        id: "120908",
        city_id: "1209",
        name: "Meranti",
      },
      {
        id: "120909",
        city_id: "1209",
        name: "Air Joman",
      },
      {
        id: "120910",
        city_id: "1209",
        name: "Tanjung Balai",
      },
      {
        id: "120911",
        city_id: "1209",
        name: "Sei Kepayang",
      },
      {
        id: "120912",
        city_id: "1209",
        name: "Simpang Empat",
      },
      {
        id: "120913",
        city_id: "1209",
        name: "Air Batu",
      },
      {
        id: "120914",
        city_id: "1209",
        name: "Pulau Rakyat",
      },
      {
        id: "120915",
        city_id: "1209",
        name: "Bandar Pulau",
      },
      {
        id: "120916",
        city_id: "1209",
        name: "Buntu Pane",
      },
      {
        id: "120917",
        city_id: "1209",
        name: "Bandar Pasir Mandoge",
      },
      {
        id: "120918",
        city_id: "1209",
        name: "Aek Kuasan",
      },
      {
        id: "120919",
        city_id: "1209",
        name: "Kota Kisaran Barat",
      },
      {
        id: "120920",
        city_id: "1209",
        name: "Kota Kisaran Timur",
      },
      {
        id: "120921",
        city_id: "1209",
        name: "Aek Songsongan",
      },
      {
        id: "120922",
        city_id: "1209",
        name: "Rahunig",
      },
      {
        id: "120923",
        city_id: "1209",
        name: "Sei Dadap",
      },
      {
        id: "120924",
        city_id: "1209",
        name: "Sei Kepayang Barat",
      },
      {
        id: "120925",
        city_id: "1209",
        name: "Sei Kepayang Timur",
      },
      {
        id: "120926",
        city_id: "1209",
        name: "Tinggi Raja",
      },
      {
        id: "120927",
        city_id: "1209",
        name: "Setia Janji",
      },
      {
        id: "120928",
        city_id: "1209",
        name: "Silau Laut",
      },
      {
        id: "120929",
        city_id: "1209",
        name: "Rawang Panca Arga",
      },
      {
        id: "120930",
        city_id: "1209",
        name: "Pulo Bandring",
      },
      {
        id: "120931",
        city_id: "1209",
        name: "Teluk Dalam",
      },
      {
        id: "120932",
        city_id: "1209",
        name: "Aek Ledong",
      },
      {
        id: "121001",
        city_id: "1210",
        name: "Rantau Utara",
      },
      {
        id: "121002",
        city_id: "1210",
        name: "Rantau Selatan",
      },
      {
        id: "121007",
        city_id: "1210",
        name: "Bilah Barat",
      },
      {
        id: "121008",
        city_id: "1210",
        name: "Bilah Hilir",
      },
      {
        id: "121009",
        city_id: "1210",
        name: "Bilah Hulu",
      },
      {
        id: "121014",
        city_id: "1210",
        name: "Pangkatan",
      },
      {
        id: "121018",
        city_id: "1210",
        name: "Panai Tengah",
      },
      {
        id: "121019",
        city_id: "1210",
        name: "Panai Hilir",
      },
      {
        id: "121020",
        city_id: "1210",
        name: "Panai Hulu",
      },
      {
        id: "121101",
        city_id: "1211",
        name: "Sidikalang",
      },
      {
        id: "121102",
        city_id: "1211",
        name: "Sumbul",
      },
      {
        id: "121103",
        city_id: "1211",
        name: "Tigalingga",
      },
      {
        id: "121104",
        city_id: "1211",
        name: "Siempat Nempu",
      },
      {
        id: "121105",
        city_id: "1211",
        name: "Silima Pungga Pungga",
      },
      {
        id: "121106",
        city_id: "1211",
        name: "Tanah Pinem",
      },
      {
        id: "121107",
        city_id: "1211",
        name: "Siempat Nempu Hulu",
      },
      {
        id: "121108",
        city_id: "1211",
        name: "Siempat Nempu Hilir",
      },
      {
        id: "121109",
        city_id: "1211",
        name: "Pegagan Hilir",
      },
      {
        id: "121110",
        city_id: "1211",
        name: "Parbuluan",
      },
      {
        id: "121111",
        city_id: "1211",
        name: "Lae Parira",
      },
      {
        id: "121112",
        city_id: "1211",
        name: "Gunung Sitember",
      },
      {
        id: "121113",
        city_id: "1211",
        name: "Berampu",
      },
      {
        id: "121114",
        city_id: "1211",
        name: "Silahisabungan",
      },
      {
        id: "121115",
        city_id: "1211",
        name: "Sitinjo",
      },
      {
        id: "121201",
        city_id: "1212",
        name: "Balige",
      },
      {
        id: "121202",
        city_id: "1212",
        name: "Laguboti",
      },
      {
        id: "121203",
        city_id: "1212",
        name: "Silaen",
      },
      {
        id: "121204",
        city_id: "1212",
        name: "Habinsaran",
      },
      {
        id: "121205",
        city_id: "1212",
        name: "Pintu Pohan Meranti",
      },
      {
        id: "121206",
        city_id: "1212",
        name: "Borbor",
      },
      {
        id: "121207",
        city_id: "1212",
        name: "Porsea",
      },
      {
        id: "121208",
        city_id: "1212",
        name: "Ajibata",
      },
      {
        id: "121209",
        city_id: "1212",
        name: "Lumban Julu",
      },
      {
        id: "121210",
        city_id: "1212",
        name: "Uluan",
      },
      {
        id: "121219",
        city_id: "1212",
        name: "Sigumpar",
      },
      {
        id: "121220",
        city_id: "1212",
        name: "Siantar Narumonda",
      },
      {
        id: "121221",
        city_id: "1212",
        name: "Nassau",
      },
      {
        id: "121222",
        city_id: "1212",
        name: "Tampahan",
      },
      {
        id: "121223",
        city_id: "1212",
        name: "Bonatua Lunasi",
      },
      {
        id: "121224",
        city_id: "1212",
        name: "Parmaksian",
      },
      {
        id: "121301",
        city_id: "1213",
        name: "Panyabungan",
      },
      {
        id: "121302",
        city_id: "1213",
        name: "Panyabungan Utara",
      },
      {
        id: "121303",
        city_id: "1213",
        name: "Panyabungan Timur",
      },
      {
        id: "121304",
        city_id: "1213",
        name: "Panyabungan Selatan",
      },
      {
        id: "121305",
        city_id: "1213",
        name: "Panyabungan Barat",
      },
      {
        id: "121306",
        city_id: "1213",
        name: "Siabu",
      },
      {
        id: "121307",
        city_id: "1213",
        name: "Bukit Malintang",
      },
      {
        id: "121308",
        city_id: "1213",
        name: "Kotanopan",
      },
      {
        id: "121309",
        city_id: "1213",
        name: "Lembah Sorik Marapi",
      },
      {
        id: "121310",
        city_id: "1213",
        name: "Tambangan",
      },
      {
        id: "121311",
        city_id: "1213",
        name: "Ulu Pungkut",
      },
      {
        id: "121312",
        city_id: "1213",
        name: "Muara Sipongi",
      },
      {
        id: "121313",
        city_id: "1213",
        name: "Batang Natal",
      },
      {
        id: "121314",
        city_id: "1213",
        name: "Lingga Bayu",
      },
      {
        id: "121315",
        city_id: "1213",
        name: "Batahan",
      },
      {
        id: "121316",
        city_id: "1213",
        name: "Natal",
      },
      {
        id: "121317",
        city_id: "1213",
        name: "Muara Batang Gadis",
      },
      {
        id: "121318",
        city_id: "1213",
        name: "Ranto Baek",
      },
      {
        id: "121319",
        city_id: "1213",
        name: "Huta Bargot",
      },
      {
        id: "121320",
        city_id: "1213",
        name: "Puncak Sorik Marapi",
      },
      {
        id: "121321",
        city_id: "1213",
        name: "Pakantan",
      },
      {
        id: "121322",
        city_id: "1213",
        name: "Sinunukan",
      },
      {
        id: "121323",
        city_id: "1213",
        name: "Naga Juang",
      },
      {
        id: "121401",
        city_id: "1214",
        name: "Lolomatua",
      },
      {
        id: "121402",
        city_id: "1214",
        name: "Gomo",
      },
      {
        id: "121403",
        city_id: "1214",
        name: "Lahusa",
      },
      {
        id: "121404",
        city_id: "1214",
        name: "Hibala",
      },
      {
        id: "121405",
        city_id: "1214",
        name: "Pulau-Pulau Batu",
      },
      {
        id: "121406",
        city_id: "1214",
        name: "Teluk Dalam",
      },
      {
        id: "121407",
        city_id: "1214",
        name: "Amandraya",
      },
      {
        id: "121408",
        city_id: "1214",
        name: "Lolowau",
      },
      {
        id: "121409",
        city_id: "1214",
        name: "Susua",
      },
      {
        id: "121410",
        city_id: "1214",
        name: "Maniamolo",
      },
      {
        id: "121411",
        city_id: "1214",
        name: "Hilimegai",
      },
      {
        id: "121412",
        city_id: "1214",
        name: "Toma",
      },
      {
        id: "121413",
        city_id: "1214",
        name: "Mazino",
      },
      {
        id: "121414",
        city_id: "1214",
        name: "Umbunasi",
      },
      {
        id: "121415",
        city_id: "1214",
        name: "Aramo",
      },
      {
        id: "121416",
        city_id: "1214",
        name: "Pulau-Pulau Batu Timur",
      },
      {
        id: "121417",
        city_id: "1214",
        name: "Mazo",
      },
      {
        id: "121418",
        city_id: "1214",
        name: "Fanayama",
      },
      {
        id: "121419",
        city_id: "1214",
        name: "Ulunoyo",
      },
      {
        id: "121420",
        city_id: "1214",
        name: "Huruna",
      },
      {
        id: "121421",
        city_id: "1214",
        name: "O'o'u",
      },
      {
        id: "121422",
        city_id: "1214",
        name: "Onohazumba",
      },
      {
        id: "121423",
        city_id: "1214",
        name: "Hilisalawa'ahe",
      },
      {
        id: "121424",
        city_id: "1214",
        name: "Ulususua",
      },
      {
        id: "121425",
        city_id: "1214",
        name: "Sidua'ori",
      },
      {
        id: "121426",
        city_id: "1214",
        name: "Somambawa",
      },
      {
        id: "121427",
        city_id: "1214",
        name: "Boronadu",
      },
      {
        id: "121428",
        city_id: "1214",
        name: "Simuk",
      },
      {
        id: "121429",
        city_id: "1214",
        name: "Pulau-Pulau Batu Barat",
      },
      {
        id: "121430",
        city_id: "1214",
        name: "Pulau-Pulau Batu Utara",
      },
      {
        id: "121431",
        city_id: "1214",
        name: "Tanah Masa",
      },
      {
        id: "121432",
        city_id: "1214",
        name: "Luahagundre Maniamolo",
      },
      {
        id: "121433",
        city_id: "1214",
        name: "Onolalu",
      },
      {
        id: "121434",
        city_id: "1214",
        name: "Ulu Idanotae",
      },
      {
        id: "121435",
        city_id: "1214",
        name: "Idanotae",
      },
      {
        id: "121501",
        city_id: "1215",
        name: "Sitelu Tali Urang Jehe",
      },
      {
        id: "121502",
        city_id: "1215",
        name: "Kerajaan",
      },
      {
        id: "121503",
        city_id: "1215",
        name: "Salak",
      },
      {
        id: "121504",
        city_id: "1215",
        name: "Sitelu Tali Urang Julu",
      },
      {
        id: "121505",
        city_id: "1215",
        name: "Pergetteng Getteng Sengkut",
      },
      {
        id: "121506",
        city_id: "1215",
        name: "Pagindar",
      },
      {
        id: "121507",
        city_id: "1215",
        name: "Tinada",
      },
      {
        id: "121508",
        city_id: "1215",
        name: "Siempat Rube",
      },
      {
        id: "121601",
        city_id: "1216",
        name: "Parlilitan",
      },
      {
        id: "121602",
        city_id: "1216",
        name: "Pollung",
      },
      {
        id: "121603",
        city_id: "1216",
        name: "Baktiraja",
      },
      {
        id: "121604",
        city_id: "1216",
        name: "Paranginan",
      },
      {
        id: "121605",
        city_id: "1216",
        name: "Lintong Nihuta",
      },
      {
        id: "121606",
        city_id: "1216",
        name: "Dolok Sanggul",
      },
      {
        id: "121607",
        city_id: "1216",
        name: "Sijamapolang",
      },
      {
        id: "121608",
        city_id: "1216",
        name: "Onan Ganjang",
      },
      {
        id: "121609",
        city_id: "1216",
        name: "Pakkat",
      },
      {
        id: "121610",
        city_id: "1216",
        name: "Tarabintang",
      },
      {
        id: "121701",
        city_id: "1217",
        name: "Simanindo",
      },
      {
        id: "121702",
        city_id: "1217",
        name: "Onan Runggu",
      },
      {
        id: "121703",
        city_id: "1217",
        name: "Nainggolan",
      },
      {
        id: "121704",
        city_id: "1217",
        name: "Palipi",
      },
      {
        id: "121705",
        city_id: "1217",
        name: "Harian",
      },
      {
        id: "121706",
        city_id: "1217",
        name: "Sianjar Mula Mula",
      },
      {
        id: "121707",
        city_id: "1217",
        name: "Ronggur Nihuta",
      },
      {
        id: "121708",
        city_id: "1217",
        name: "Pangururan",
      },
      {
        id: "121709",
        city_id: "1217",
        name: "Sitio-tio",
      },
      {
        id: "121801",
        city_id: "1218",
        name: "Pantai Cermin",
      },
      {
        id: "121802",
        city_id: "1218",
        name: "Perbaungan",
      },
      {
        id: "121803",
        city_id: "1218",
        name: "Teluk Mengkudu",
      },
      {
        id: "121804",
        city_id: "1218",
        name: "Sei Rampah",
      },
      {
        id: "121805",
        city_id: "1218",
        name: "Tanjung Beringin",
      },
      {
        id: "121806",
        city_id: "1218",
        name: "Bandar Khalipah",
      },
      {
        id: "121807",
        city_id: "1218",
        name: "Dolok Merawan",
      },
      {
        id: "121808",
        city_id: "1218",
        name: "Sipispis",
      },
      {
        id: "121809",
        city_id: "1218",
        name: "Dolok Masihul",
      },
      {
        id: "121810",
        city_id: "1218",
        name: "Kotarih",
      },
      {
        id: "121811",
        city_id: "1218",
        name: "Silinda",
      },
      {
        id: "121812",
        city_id: "1218",
        name: "Serba Jadi",
      },
      {
        id: "121813",
        city_id: "1218",
        name: "Tebing Tinggi",
      },
      {
        id: "121814",
        city_id: "1218",
        name: "Pegajahan",
      },
      {
        id: "121815",
        city_id: "1218",
        name: "Sei Bamban",
      },
      {
        id: "121816",
        city_id: "1218",
        name: "Tebing Syahbandar",
      },
      {
        id: "121817",
        city_id: "1218",
        name: "Bintang Bayu",
      },
      {
        id: "121901",
        city_id: "1219",
        name: "Medang Deras",
      },
      {
        id: "121902",
        city_id: "1219",
        name: "Sei Suka",
      },
      {
        id: "121903",
        city_id: "1219",
        name: "Air Putih",
      },
      {
        id: "121904",
        city_id: "1219",
        name: "Lima Puluh",
      },
      {
        id: "121905",
        city_id: "1219",
        name: "Talawi",
      },
      {
        id: "121906",
        city_id: "1219",
        name: "Tanjung Tiram",
      },
      {
        id: "121907",
        city_id: "1219",
        name: "Sei Balai",
      },
      {
        id: "121908",
        city_id: "1219",
        name: "Laut Tador",
      },
      {
        id: "121909",
        city_id: "1219",
        name: "Lima Puluh Pesisir",
      },
      {
        id: "121910",
        city_id: "1219",
        name: "Datuk Lima Puluh",
      },
      {
        id: "121911",
        city_id: "1219",
        name: "Datuk Tanah Datar",
      },
      {
        id: "121912",
        city_id: "1219",
        name: "Nibung Hangus",
      },
      {
        id: "122001",
        city_id: "1220",
        name: "Dolok Sigompulon",
      },
      {
        id: "122002",
        city_id: "1220",
        name: "Dolok",
      },
      {
        id: "122003",
        city_id: "1220",
        name: "Halongonan",
      },
      {
        id: "122004",
        city_id: "1220",
        name: "Padang Bolak",
      },
      {
        id: "122005",
        city_id: "1220",
        name: "Padang Bolak Julu",
      },
      {
        id: "122006",
        city_id: "1220",
        name: "Portibi",
      },
      {
        id: "122007",
        city_id: "1220",
        name: "Batang Onang",
      },
      {
        id: "122008",
        city_id: "1220",
        name: "Simangambat",
      },
      {
        id: "122009",
        city_id: "1220",
        name: "Hulu Sihapas",
      },
      {
        id: "122010",
        city_id: "1220",
        name: "Padang Bolak Tenggara",
      },
      {
        id: "122011",
        city_id: "1220",
        name: "Halongonan Timur",
      },
      {
        id: "122012",
        city_id: "1220",
        name: "Ujung Batu",
      },
      {
        id: "122101",
        city_id: "1221",
        name: "Sosopan",
      },
      {
        id: "122102",
        city_id: "1221",
        name: "Barumun Tengah",
      },
      {
        id: "122103",
        city_id: "1221",
        name: "Huristak",
      },
      {
        id: "122104",
        city_id: "1221",
        name: "Lubuk Barumun",
      },
      {
        id: "122105",
        city_id: "1221",
        name: "Huta Raja Tinggi",
      },
      {
        id: "122106",
        city_id: "1221",
        name: "Ulu Barumun",
      },
      {
        id: "122107",
        city_id: "1221",
        name: "Barumun",
      },
      {
        id: "122108",
        city_id: "1221",
        name: "Sosa",
      },
      {
        id: "122109",
        city_id: "1221",
        name: "Batang Lubu Sutam",
      },
      {
        id: "122110",
        city_id: "1221",
        name: "Barumun Selatan",
      },
      {
        id: "122111",
        city_id: "1221",
        name: "Aek Nabara Barumun",
      },
      {
        id: "122112",
        city_id: "1221",
        name: "Sihapas Barumun",
      },
      {
        id: "122201",
        city_id: "1222",
        name: "Kotapinang",
      },
      {
        id: "122202",
        city_id: "1222",
        name: "Kampung Rakyat",
      },
      {
        id: "122203",
        city_id: "1222",
        name: "Torgamba",
      },
      {
        id: "122204",
        city_id: "1222",
        name: "Sungai Kanan",
      },
      {
        id: "122205",
        city_id: "1222",
        name: "Silangkitang",
      },
      {
        id: "122301",
        city_id: "1223",
        name: "Kualuh Hulu",
      },
      {
        id: "122302",
        city_id: "1223",
        name: "Kualuh Leidong",
      },
      {
        id: "122303",
        city_id: "1223",
        name: "Kualuh Hilir",
      },
      {
        id: "122304",
        city_id: "1223",
        name: "Aek Kuo",
      },
      {
        id: "122305",
        city_id: "1223",
        name: "Marbau",
      },
      {
        id: "122306",
        city_id: "1223",
        name: "Na IX - X",
      },
      {
        id: "122307",
        city_id: "1223",
        name: "Aek Natas",
      },
      {
        id: "122308",
        city_id: "1223",
        name: "Kualuh Selatan",
      },
      {
        id: "122401",
        city_id: "1224",
        name: "Lotu",
      },
      {
        id: "122402",
        city_id: "1224",
        name: "Sawo",
      },
      {
        id: "122403",
        city_id: "1224",
        name: "Tuhemberua",
      },
      {
        id: "122404",
        city_id: "1224",
        name: "Sitolu Ori",
      },
      {
        id: "122405",
        city_id: "1224",
        name: "Namohalu Esiwa",
      },
      {
        id: "122406",
        city_id: "1224",
        name: "Alasa Talumuzoi",
      },
      {
        id: "122407",
        city_id: "1224",
        name: "Alasa",
      },
      {
        id: "122408",
        city_id: "1224",
        name: "Tugala Oyo",
      },
      {
        id: "122409",
        city_id: "1224",
        name: "Afulu",
      },
      {
        id: "122410",
        city_id: "1224",
        name: "Lahewa",
      },
      {
        id: "122411",
        city_id: "1224",
        name: "Lahewa Timur",
      },
      {
        id: "122501",
        city_id: "1225",
        name: "Lahomi",
      },
      {
        id: "122502",
        city_id: "1225",
        name: "Sirombu",
      },
      {
        id: "122503",
        city_id: "1225",
        name: "Mandrehe Barat",
      },
      {
        id: "122504",
        city_id: "1225",
        name: "Moro'o",
      },
      {
        id: "122505",
        city_id: "1225",
        name: "Mandrehe",
      },
      {
        id: "122506",
        city_id: "1225",
        name: "Mandrehe Utara",
      },
      {
        id: "122507",
        city_id: "1225",
        name: "Lolofitu Moi",
      },
      {
        id: "122508",
        city_id: "1225",
        name: "Ulu Moro'o",
      },
      {
        id: "127101",
        city_id: "1271",
        name: "Medan Kota",
      },
      {
        id: "127102",
        city_id: "1271",
        name: "Medan Sunggal",
      },
      {
        id: "127103",
        city_id: "1271",
        name: "Medan Helvetia",
      },
      {
        id: "127104",
        city_id: "1271",
        name: "Medan Denai",
      },
      {
        id: "127105",
        city_id: "1271",
        name: "Medan Barat",
      },
      {
        id: "127106",
        city_id: "1271",
        name: "Medan Deli",
      },
      {
        id: "127107",
        city_id: "1271",
        name: "Medan Tuntungan",
      },
      {
        id: "127108",
        city_id: "1271",
        name: "Medan Belawan",
      },
      {
        id: "127109",
        city_id: "1271",
        name: "Medan Amplas",
      },
      {
        id: "127110",
        city_id: "1271",
        name: "Medan Area",
      },
      {
        id: "127111",
        city_id: "1271",
        name: "Medan Johor",
      },
      {
        id: "127112",
        city_id: "1271",
        name: "Medan Marelan",
      },
      {
        id: "127113",
        city_id: "1271",
        name: "Medan Labuhan",
      },
      {
        id: "127114",
        city_id: "1271",
        name: "Medan Tembung",
      },
      {
        id: "127115",
        city_id: "1271",
        name: "Medan Maimun",
      },
      {
        id: "127116",
        city_id: "1271",
        name: "Medan Polonia",
      },
      {
        id: "127117",
        city_id: "1271",
        name: "Medan Baru",
      },
      {
        id: "127118",
        city_id: "1271",
        name: "Medan Perjuangan",
      },
      {
        id: "127119",
        city_id: "1271",
        name: "Medan Petisah",
      },
      {
        id: "127120",
        city_id: "1271",
        name: "Medan Timur",
      },
      {
        id: "127121",
        city_id: "1271",
        name: "Medan Selayang",
      },
      {
        id: "127201",
        city_id: "1272",
        name: "Siantar Timur",
      },
      {
        id: "127202",
        city_id: "1272",
        name: "Siantar Barat",
      },
      {
        id: "127203",
        city_id: "1272",
        name: "Siantar Utara",
      },
      {
        id: "127204",
        city_id: "1272",
        name: "Siantar Selatan",
      },
      {
        id: "127205",
        city_id: "1272",
        name: "Siantar Marihat",
      },
      {
        id: "127206",
        city_id: "1272",
        name: "Siantar Martoba",
      },
      {
        id: "127207",
        city_id: "1272",
        name: "Siantar Sitalasari",
      },
      {
        id: "127208",
        city_id: "1272",
        name: "Siantar Marimbun",
      },
      {
        id: "127301",
        city_id: "1273",
        name: "Sibolga Utara",
      },
      {
        id: "127302",
        city_id: "1273",
        name: "Sibolga Kota",
      },
      {
        id: "127303",
        city_id: "1273",
        name: "Sibolga Selatan",
      },
      {
        id: "127304",
        city_id: "1273",
        name: "Sibolga Sambas",
      },
      {
        id: "127401",
        city_id: "1274",
        name: "Tanjung Balai Selatan",
      },
      {
        id: "127402",
        city_id: "1274",
        name: "Tanjung Balai Utara",
      },
      {
        id: "127403",
        city_id: "1274",
        name: "Sei Tualang Raso",
      },
      {
        id: "127404",
        city_id: "1274",
        name: "Teluk Nibung",
      },
      {
        id: "127405",
        city_id: "1274",
        name: "Datuk Bandar",
      },
      {
        id: "127406",
        city_id: "1274",
        name: "Datuk Bandar Timur",
      },
      {
        id: "127501",
        city_id: "1275",
        name: "Binjai Utara",
      },
      {
        id: "127502",
        city_id: "1275",
        name: "Binjai Kota",
      },
      {
        id: "127503",
        city_id: "1275",
        name: "Binjai Barat",
      },
      {
        id: "127504",
        city_id: "1275",
        name: "Binjai Timur",
      },
      {
        id: "127505",
        city_id: "1275",
        name: "Binjai Selatan",
      },
      {
        id: "127601",
        city_id: "1276",
        name: "Padang Hulu",
      },
      {
        id: "127602",
        city_id: "1276",
        name: "Rambutan",
      },
      {
        id: "127603",
        city_id: "1276",
        name: "Padang Hilir",
      },
      {
        id: "127604",
        city_id: "1276",
        name: "Bajenis",
      },
      {
        id: "127605",
        city_id: "1276",
        name: "Tebing Tinggi Kota",
      },
      {
        id: "127701",
        city_id: "1277",
        name: "Padangsidimpuan Utara",
      },
      {
        id: "127702",
        city_id: "1277",
        name: "Padangsidimpuan Selatan",
      },
      {
        id: "127703",
        city_id: "1277",
        name: "Padangsidimpuan Batunadu",
      },
      {
        id: "127704",
        city_id: "1277",
        name: "Padangsidimpuan Hutaimbar",
      },
      {
        id: "127705",
        city_id: "1277",
        name: "Padangsidimpuan Tenggara",
      },
      {
        id: "127706",
        city_id: "1277",
        name: "Padangsidimpuan Angkola Julu",
      },
      {
        id: "127801",
        city_id: "1278",
        name: "Gunungsitoli",
      },
      {
        id: "127802",
        city_id: "1278",
        name: "Gunungsitoli Selatan",
      },
      {
        id: "127803",
        city_id: "1278",
        name: "Gunungsitoli Utara",
      },
      {
        id: "127804",
        city_id: "1278",
        name: "Gunungsitoli Idanoi",
      },
      {
        id: "127805",
        city_id: "1278",
        name: "Gunungsitoli Alo'oa",
      },
      {
        id: "127806",
        city_id: "1278",
        name: "Gunungsitoli Barat",
      },
      {
        id: "130101",
        city_id: "1301",
        name: "Pancung Soal",
      },
      {
        id: "130102",
        city_id: "1301",
        name: "Ranah Pesisir",
      },
      {
        id: "130103",
        city_id: "1301",
        name: "Lengayang",
      },
      {
        id: "130104",
        city_id: "1301",
        name: "Batang Kapas",
      },
      {
        id: "130105",
        city_id: "1301",
        name: "IV Jurai",
      },
      {
        id: "130106",
        city_id: "1301",
        name: "Bayang",
      },
      {
        id: "130107",
        city_id: "1301",
        name: "Koto XI Tarusan",
      },
      {
        id: "130108",
        city_id: "1301",
        name: "Sutera",
      },
      {
        id: "130109",
        city_id: "1301",
        name: "Linggo Sari Baganti",
      },
      {
        id: "130110",
        city_id: "1301",
        name: "Lunang",
      },
      {
        id: "130111",
        city_id: "1301",
        name: "Basa Ampek Balai Tapan",
      },
      {
        id: "130112",
        city_id: "1301",
        name: "IV Nagari Bayang Utara",
      },
      {
        id: "130113",
        city_id: "1301",
        name: "Airpura",
      },
      {
        id: "130114",
        city_id: "1301",
        name: "Ranah Ampek Hulu Tapan",
      },
      {
        id: "130115",
        city_id: "1301",
        name: "Silaut",
      },
      {
        id: "130203",
        city_id: "1302",
        name: "Pantai Cermin",
      },
      {
        id: "130204",
        city_id: "1302",
        name: "Lembah Gumanti",
      },
      {
        id: "130205",
        city_id: "1302",
        name: "Payung Sekaki",
      },
      {
        id: "130206",
        city_id: "1302",
        name: "Lembang Jaya",
      },
      {
        id: "130207",
        city_id: "1302",
        name: "Gunung Talang",
      },
      {
        id: "130208",
        city_id: "1302",
        name: "Bukit Sundi",
      },
      {
        id: "130209",
        city_id: "1302",
        name: "IX Koto Sungai Lasi",
      },
      {
        id: "130210",
        city_id: "1302",
        name: "Kubung",
      },
      {
        id: "130211",
        city_id: "1302",
        name: "X Koto Singkarak",
      },
      {
        id: "130212",
        city_id: "1302",
        name: "X Koto Diatas",
      },
      {
        id: "130213",
        city_id: "1302",
        name: "Junjung Sirih",
      },
      {
        id: "130217",
        city_id: "1302",
        name: "Hiliran Gumanti",
      },
      {
        id: "130218",
        city_id: "1302",
        name: "Tigo Lurah",
      },
      {
        id: "130219",
        city_id: "1302",
        name: "Danau Kembar",
      },
      {
        id: "130303",
        city_id: "1303",
        name: "Tanjung Gadang",
      },
      {
        id: "130304",
        city_id: "1303",
        name: "Sijunjung",
      },
      {
        id: "130305",
        city_id: "1303",
        name: "IV Nagari",
      },
      {
        id: "130306",
        city_id: "1303",
        name: "Kamang Baru",
      },
      {
        id: "130307",
        city_id: "1303",
        name: "Lubuak Tarok",
      },
      {
        id: "130308",
        city_id: "1303",
        name: "Koto VII",
      },
      {
        id: "130309",
        city_id: "1303",
        name: "Sumpur Kudus",
      },
      {
        id: "130310",
        city_id: "1303",
        name: "Kupitan",
      },
      {
        id: "130401",
        city_id: "1304",
        name: "X Koto",
      },
      {
        id: "130402",
        city_id: "1304",
        name: "Batipuh",
      },
      {
        id: "130403",
        city_id: "1304",
        name: "Rambatan",
      },
      {
        id: "130404",
        city_id: "1304",
        name: "Lima Kaum",
      },
      {
        id: "130405",
        city_id: "1304",
        name: "Tanjung Emas",
      },
      {
        id: "130406",
        city_id: "1304",
        name: "Lintau Buo",
      },
      {
        id: "130407",
        city_id: "1304",
        name: "Sungayang",
      },
      {
        id: "130408",
        city_id: "1304",
        name: "Sungai Tarab",
      },
      {
        id: "130409",
        city_id: "1304",
        name: "Pariangan",
      },
      {
        id: "130410",
        city_id: "1304",
        name: "Salimpaung",
      },
      {
        id: "130411",
        city_id: "1304",
        name: "Padang Ganting",
      },
      {
        id: "130412",
        city_id: "1304",
        name: "Tanjuang Baru",
      },
      {
        id: "130413",
        city_id: "1304",
        name: "Lintau Buo Utara",
      },
      {
        id: "130414",
        city_id: "1304",
        name: "Batipuah Selatan",
      },
      {
        id: "130501",
        city_id: "1305",
        name: "Lubuk Alung",
      },
      {
        id: "130502",
        city_id: "1305",
        name: "Batang Anai",
      },
      {
        id: "130503",
        city_id: "1305",
        name: "Nan Sabaris",
      },
      {
        id: "130504",
        city_id: "1305",
        name: "2 x 11 Enam Lingkuang",
      },
      {
        id: "130505",
        city_id: "1305",
        name: "VII Koto Sungai Sarik",
      },
      {
        id: "130506",
        city_id: "1305",
        name: "V Koto Kampung Dalam",
      },
      {
        id: "130507",
        city_id: "1305",
        name: "Sungai Garingging",
      },
      {
        id: "130508",
        city_id: "1305",
        name: "Sungai Limau",
      },
      {
        id: "130509",
        city_id: "1305",
        name: "IV Koto Aur Malintang",
      },
      {
        id: "130510",
        city_id: "1305",
        name: "Ulakan Tapakih",
      },
      {
        id: "130511",
        city_id: "1305",
        name: "Sintuak Toboh Gadang",
      },
      {
        id: "130512",
        city_id: "1305",
        name: "Padang Sago",
      },
      {
        id: "130513",
        city_id: "1305",
        name: "Batang Gasan",
      },
      {
        id: "130514",
        city_id: "1305",
        name: "V Koto Timur",
      },
      {
        id: "130515",
        city_id: "1305",
        name: "2 x 11 Kayu Tanam",
      },
      {
        id: "130516",
        city_id: "1305",
        name: "Patamuan",
      },
      {
        id: "130517",
        city_id: "1305",
        name: "Enam Lingkung",
      },
      {
        id: "130601",
        city_id: "1306",
        name: "Tanjung Mutiara",
      },
      {
        id: "130602",
        city_id: "1306",
        name: "Lubuk Basung",
      },
      {
        id: "130603",
        city_id: "1306",
        name: "Tanjung Raya",
      },
      {
        id: "130604",
        city_id: "1306",
        name: "Matur",
      },
      {
        id: "130605",
        city_id: "1306",
        name: "IV Koto",
      },
      {
        id: "130606",
        city_id: "1306",
        name: "Banuhampu",
      },
      {
        id: "130607",
        city_id: "1306",
        name: "Ampek Angkek",
      },
      {
        id: "130608",
        city_id: "1306",
        name: "Baso",
      },
      {
        id: "130609",
        city_id: "1306",
        name: "Tilatang Kamang",
      },
      {
        id: "130610",
        city_id: "1306",
        name: "Palupuh",
      },
      {
        id: "130611",
        city_id: "1306",
        name: "Pelembayan",
      },
      {
        id: "130612",
        city_id: "1306",
        name: "Sungai Pua",
      },
      {
        id: "130613",
        city_id: "1306",
        name: "Ampek Nagari",
      },
      {
        id: "130614",
        city_id: "1306",
        name: "Candung",
      },
      {
        id: "130615",
        city_id: "1306",
        name: "Kamang Magek",
      },
      {
        id: "130616",
        city_id: "1306",
        name: "Malalak",
      },
      {
        id: "130701",
        city_id: "1307",
        name: "Suliki",
      },
      {
        id: "130702",
        city_id: "1307",
        name: "Guguak",
      },
      {
        id: "130703",
        city_id: "1307",
        name: "Payakumbuh",
      },
      {
        id: "130704",
        city_id: "1307",
        name: "Luak",
      },
      {
        id: "130705",
        city_id: "1307",
        name: "Harau",
      },
      {
        id: "130706",
        city_id: "1307",
        name: "Pangkalan Koto Baru",
      },
      {
        id: "130707",
        city_id: "1307",
        name: "Kapur IX",
      },
      {
        id: "130708",
        city_id: "1307",
        name: "Gunuang Omeh",
      },
      {
        id: "130709",
        city_id: "1307",
        name: "Lareh Sago Halaban",
      },
      {
        id: "130710",
        city_id: "1307",
        name: "Situjuah Limo Nagari",
      },
      {
        id: "130711",
        city_id: "1307",
        name: "Mungka",
      },
      {
        id: "130712",
        city_id: "1307",
        name: "Bukik Barisan",
      },
      {
        id: "130713",
        city_id: "1307",
        name: "Akabiluru",
      },
      {
        id: "130804",
        city_id: "1308",
        name: "Bonjol",
      },
      {
        id: "130805",
        city_id: "1308",
        name: "Lubuk Sikaping",
      },
      {
        id: "130807",
        city_id: "1308",
        name: "Panti",
      },
      {
        id: "130808",
        city_id: "1308",
        name: "Mapat Tunggul",
      },
      {
        id: "130812",
        city_id: "1308",
        name: "Duo Koto",
      },
      {
        id: "130813",
        city_id: "1308",
        name: "Tigo Nagari",
      },
      {
        id: "130814",
        city_id: "1308",
        name: "Rao",
      },
      {
        id: "130815",
        city_id: "1308",
        name: "Mapat Tunggul Selatan",
      },
      {
        id: "130816",
        city_id: "1308",
        name: "Simpang Alahan Mati",
      },
      {
        id: "130817",
        city_id: "1308",
        name: "Padang Gelugur",
      },
      {
        id: "130818",
        city_id: "1308",
        name: "Rao Utara",
      },
      {
        id: "130819",
        city_id: "1308",
        name: "Rao Selatan",
      },
      {
        id: "130901",
        city_id: "1309",
        name: "Pagai Utara",
      },
      {
        id: "130902",
        city_id: "1309",
        name: "Sipora Selatan",
      },
      {
        id: "130903",
        city_id: "1309",
        name: "Siberut Selatan",
      },
      {
        id: "130904",
        city_id: "1309",
        name: "Siberut Utara",
      },
      {
        id: "130905",
        city_id: "1309",
        name: "Siberut Barat",
      },
      {
        id: "130906",
        city_id: "1309",
        name: "Siberut Barat Daya",
      },
      {
        id: "130907",
        city_id: "1309",
        name: "Siberut Tengah",
      },
      {
        id: "130908",
        city_id: "1309",
        name: "Sipora Utara",
      },
      {
        id: "130909",
        city_id: "1309",
        name: "Sikakap",
      },
      {
        id: "130910",
        city_id: "1309",
        name: "Pagai Selatan",
      },
      {
        id: "131001",
        city_id: "1310",
        name: "Koto Baru",
      },
      {
        id: "131002",
        city_id: "1310",
        name: "Pulau Punjung",
      },
      {
        id: "131003",
        city_id: "1310",
        name: "Sungai Rumbai",
      },
      {
        id: "131004",
        city_id: "1310",
        name: "Sitiung",
      },
      {
        id: "131005",
        city_id: "1310",
        name: "Sembilan Koto",
      },
      {
        id: "131006",
        city_id: "1310",
        name: "Timpeh",
      },
      {
        id: "131007",
        city_id: "1310",
        name: "Koto Salak",
      },
      {
        id: "131008",
        city_id: "1310",
        name: "Tiumang",
      },
      {
        id: "131009",
        city_id: "1310",
        name: "Padang Laweh",
      },
      {
        id: "131010",
        city_id: "1310",
        name: "Asam Jujuhan",
      },
      {
        id: "131011",
        city_id: "1310",
        name: "Koto Besar",
      },
      {
        id: "131101",
        city_id: "1311",
        name: "Sangir",
      },
      {
        id: "131102",
        city_id: "1311",
        name: "Sungai Pagu",
      },
      {
        id: "131103",
        city_id: "1311",
        name: "Koto Parik Gadang Diateh",
      },
      {
        id: "131104",
        city_id: "1311",
        name: "Sangir Jujuan",
      },
      {
        id: "131105",
        city_id: "1311",
        name: "Sangir Batang Hari",
      },
      {
        id: "131106",
        city_id: "1311",
        name: "Pauh Duo",
      },
      {
        id: "131107",
        city_id: "1311",
        name: "Sangir Balai Janggo",
      },
      {
        id: "131201",
        city_id: "1312",
        name: "Sungaiberemas",
      },
      {
        id: "131202",
        city_id: "1312",
        name: "Lembah Melintang",
      },
      {
        id: "131203",
        city_id: "1312",
        name: "Pasaman",
      },
      {
        id: "131204",
        city_id: "1312",
        name: "Talamau",
      },
      {
        id: "131205",
        city_id: "1312",
        name: "Kinali",
      },
      {
        id: "131206",
        city_id: "1312",
        name: "Gunungtuleh",
      },
      {
        id: "131207",
        city_id: "1312",
        name: "Ranah Batahan",
      },
      {
        id: "131208",
        city_id: "1312",
        name: "Koto Balingka",
      },
      {
        id: "131209",
        city_id: "1312",
        name: "Sungaiaur",
      },
      {
        id: "131210",
        city_id: "1312",
        name: "Luhak Nan Duo",
      },
      {
        id: "131211",
        city_id: "1312",
        name: "Sasak Ranah Pesisir",
      },
      {
        id: "137101",
        city_id: "1371",
        name: "Padang Selatan",
      },
      {
        id: "137102",
        city_id: "1371",
        name: "Padang Timur",
      },
      {
        id: "137103",
        city_id: "1371",
        name: "Padang Barat",
      },
      {
        id: "137104",
        city_id: "1371",
        name: "Padang Utara",
      },
      {
        id: "137105",
        city_id: "1371",
        name: "Bungus Teluk Kabung",
      },
      {
        id: "137106",
        city_id: "1371",
        name: "Lubuk Begalung",
      },
      {
        id: "137107",
        city_id: "1371",
        name: "Lubuk Kilangan",
      },
      {
        id: "137108",
        city_id: "1371",
        name: "Pauh",
      },
      {
        id: "137109",
        city_id: "1371",
        name: "Kuranji",
      },
      {
        id: "137110",
        city_id: "1371",
        name: "Nanggalo",
      },
      {
        id: "137111",
        city_id: "1371",
        name: "Koto Tangah",
      },
      {
        id: "137201",
        city_id: "1372",
        name: "Lubuk Sikarah",
      },
      {
        id: "137202",
        city_id: "1372",
        name: "Tanjung Harapan",
      },
      {
        id: "137301",
        city_id: "1373",
        name: "Lembah Segar",
      },
      {
        id: "137302",
        city_id: "1373",
        name: "Barangin",
      },
      {
        id: "137303",
        city_id: "1373",
        name: "Silungkang",
      },
      {
        id: "137304",
        city_id: "1373",
        name: "Talawi",
      },
      {
        id: "137401",
        city_id: "1374",
        name: "Padang Panjang Timur",
      },
      {
        id: "137402",
        city_id: "1374",
        name: "Padang Panjang Barat",
      },
      {
        id: "137501",
        city_id: "1375",
        name: "Guguak Panjang",
      },
      {
        id: "137502",
        city_id: "1375",
        name: "Mandiangin K. Selayan",
      },
      {
        id: "137503",
        city_id: "1375",
        name: "Aur Birugo Tigo Baleh",
      },
      {
        id: "137601",
        city_id: "1376",
        name: "Payakumbuh Barat",
      },
      {
        id: "137602",
        city_id: "1376",
        name: "Payakumbuh Utara",
      },
      {
        id: "137603",
        city_id: "1376",
        name: "Payakumbuh Timur",
      },
      {
        id: "137604",
        city_id: "1376",
        name: "Lamposi Tigo Nagori",
      },
      {
        id: "137605",
        city_id: "1376",
        name: "Payakumbuh Selatan",
      },
      {
        id: "137701",
        city_id: "1377",
        name: "Pariaman Tengah",
      },
      {
        id: "137702",
        city_id: "1377",
        name: "Pariaman Utara",
      },
      {
        id: "137703",
        city_id: "1377",
        name: "Pariaman Selatan",
      },
      {
        id: "137704",
        city_id: "1377",
        name: "Pariaman Timur",
      },
      {
        id: "140101",
        city_id: "1401",
        name: "Bangkinang Kota",
      },
      {
        id: "140102",
        city_id: "1401",
        name: "Kampar",
      },
      {
        id: "140103",
        city_id: "1401",
        name: "Tambang",
      },
      {
        id: "140104",
        city_id: "1401",
        name: "XIII Koto Kampar",
      },
      {
        id: "140105",
        city_id: "1401",
        name: "Kuok",
      },
      {
        id: "140106",
        city_id: "1401",
        name: "Siak Hulu",
      },
      {
        id: "140107",
        city_id: "1401",
        name: "Kampar Kiri",
      },
      {
        id: "140108",
        city_id: "1401",
        name: "Kampar Kiri Hilir",
      },
      {
        id: "140109",
        city_id: "1401",
        name: "Kampar Kiri Hulu",
      },
      {
        id: "140110",
        city_id: "1401",
        name: "Tapung",
      },
      {
        id: "140111",
        city_id: "1401",
        name: "Tapung Hilir",
      },
      {
        id: "140112",
        city_id: "1401",
        name: "Tapung Hulu",
      },
      {
        id: "140113",
        city_id: "1401",
        name: "Salo",
      },
      {
        id: "140114",
        city_id: "1401",
        name: "Rumbio Jaya",
      },
      {
        id: "140115",
        city_id: "1401",
        name: "Bangkinang",
      },
      {
        id: "140116",
        city_id: "1401",
        name: "Perhentian Raja",
      },
      {
        id: "140117",
        city_id: "1401",
        name: "Kampa",
      },
      {
        id: "140118",
        city_id: "1401",
        name: "Kampar Utara",
      },
      {
        id: "140119",
        city_id: "1401",
        name: "Kampar Kiri Tengah",
      },
      {
        id: "140120",
        city_id: "1401",
        name: "Gunung Sahilan",
      },
      {
        id: "140121",
        city_id: "1401",
        name: "Koto Kampar Hulu",
      },
      {
        id: "140201",
        city_id: "1402",
        name: "Rengat",
      },
      {
        id: "140202",
        city_id: "1402",
        name: "Rengat Barat",
      },
      {
        id: "140203",
        city_id: "1402",
        name: "Kelayang",
      },
      {
        id: "140204",
        city_id: "1402",
        name: "Pasir Penyu",
      },
      {
        id: "140205",
        city_id: "1402",
        name: "Peranap",
      },
      {
        id: "140206",
        city_id: "1402",
        name: "Siberida",
      },
      {
        id: "140207",
        city_id: "1402",
        name: "Batang Cenaku",
      },
      {
        id: "140208",
        city_id: "1402",
        name: "Batang Gangsal",
      },
      {
        id: "140209",
        city_id: "1402",
        name: "Lirik",
      },
      {
        id: "140210",
        city_id: "1402",
        name: "Kuala Cenaku",
      },
      {
        id: "140211",
        city_id: "1402",
        name: "Sungai Lala",
      },
      {
        id: "140212",
        city_id: "1402",
        name: "Lubuk Batu Jaya",
      },
      {
        id: "140213",
        city_id: "1402",
        name: "Rakit Kulim",
      },
      {
        id: "140214",
        city_id: "1402",
        name: "Batang Peranap",
      },
      {
        id: "140301",
        city_id: "1403",
        name: "Bengkalis",
      },
      {
        id: "140302",
        city_id: "1403",
        name: "Bantan",
      },
      {
        id: "140303",
        city_id: "1403",
        name: "Bukit Batu",
      },
      {
        id: "140309",
        city_id: "1403",
        name: "Mandau",
      },
      {
        id: "140310",
        city_id: "1403",
        name: "Rupat",
      },
      {
        id: "140311",
        city_id: "1403",
        name: "Rupat Utara",
      },
      {
        id: "140312",
        city_id: "1403",
        name: "Siak Kecil",
      },
      {
        id: "140313",
        city_id: "1403",
        name: "Pinggir",
      },
      {
        id: "140314",
        city_id: "1403",
        name: "Bandar Laksamana",
      },
      {
        id: "140315",
        city_id: "1403",
        name: "Talang Muandau",
      },
      {
        id: "140316",
        city_id: "1403",
        name: "Bathin Solapan",
      },
      {
        id: "140401",
        city_id: "1404",
        name: "Reteh",
      },
      {
        id: "140402",
        city_id: "1404",
        name: "Enok",
      },
      {
        id: "140403",
        city_id: "1404",
        name: "Kuala Indragiri",
      },
      {
        id: "140404",
        city_id: "1404",
        name: "Tembilahan",
      },
      {
        id: "140405",
        city_id: "1404",
        name: "Tempuling",
      },
      {
        id: "140406",
        city_id: "1404",
        name: "Gaung Anak Serka",
      },
      {
        id: "140407",
        city_id: "1404",
        name: "Mandah",
      },
      {
        id: "140408",
        city_id: "1404",
        name: "Kateman",
      },
      {
        id: "140409",
        city_id: "1404",
        name: "Keritang",
      },
      {
        id: "140410",
        city_id: "1404",
        name: "Tanah Merah",
      },
      {
        id: "140411",
        city_id: "1404",
        name: "Batang Tuaka",
      },
      {
        id: "140412",
        city_id: "1404",
        name: "Gaung",
      },
      {
        id: "140413",
        city_id: "1404",
        name: "Tembilahan Hulu",
      },
      {
        id: "140414",
        city_id: "1404",
        name: "Kemuning",
      },
      {
        id: "140415",
        city_id: "1404",
        name: "Pelangiran",
      },
      {
        id: "140416",
        city_id: "1404",
        name: "Teluk Belengkong",
      },
      {
        id: "140417",
        city_id: "1404",
        name: "Pulau Burung",
      },
      {
        id: "140418",
        city_id: "1404",
        name: "Concong",
      },
      {
        id: "140419",
        city_id: "1404",
        name: "Kempas",
      },
      {
        id: "140420",
        city_id: "1404",
        name: "Sungai Batang",
      },
      {
        id: "140501",
        city_id: "1405",
        name: "Ukui",
      },
      {
        id: "140502",
        city_id: "1405",
        name: "Pangkalan Kerinci",
      },
      {
        id: "140503",
        city_id: "1405",
        name: "Pangkalan Kuras",
      },
      {
        id: "140504",
        city_id: "1405",
        name: "Pangkalan Lesung",
      },
      {
        id: "140505",
        city_id: "1405",
        name: "Langgam",
      },
      {
        id: "140506",
        city_id: "1405",
        name: "Pelalawan",
      },
      {
        id: "140507",
        city_id: "1405",
        name: "Kerumutan",
      },
      {
        id: "140508",
        city_id: "1405",
        name: "Bunut",
      },
      {
        id: "140509",
        city_id: "1405",
        name: "Teluk Meranti",
      },
      {
        id: "140510",
        city_id: "1405",
        name: "Kuala Kampar",
      },
      {
        id: "140511",
        city_id: "1405",
        name: "Bandar Sei Kijang",
      },
      {
        id: "140512",
        city_id: "1405",
        name: "Bandar Petalangan",
      },
      {
        id: "140601",
        city_id: "1406",
        name: "Ujung Batu",
      },
      {
        id: "140602",
        city_id: "1406",
        name: "Rokan IV Koto",
      },
      {
        id: "140603",
        city_id: "1406",
        name: "Rambah",
      },
      {
        id: "140604",
        city_id: "1406",
        name: "Tambusai",
      },
      {
        id: "140605",
        city_id: "1406",
        name: "Kepenuhan",
      },
      {
        id: "140606",
        city_id: "1406",
        name: "Kunto Darussalam",
      },
      {
        id: "140607",
        city_id: "1406",
        name: "Rambah Samo",
      },
      {
        id: "140608",
        city_id: "1406",
        name: "Rambah Hilir",
      },
      {
        id: "140609",
        city_id: "1406",
        name: "Tambusai Utara",
      },
      {
        id: "140610",
        city_id: "1406",
        name: "Bangun Purba",
      },
      {
        id: "140611",
        city_id: "1406",
        name: "Tandun",
      },
      {
        id: "140612",
        city_id: "1406",
        name: "Kabun",
      },
      {
        id: "140613",
        city_id: "1406",
        name: "Bonai Darussalam",
      },
      {
        id: "140614",
        city_id: "1406",
        name: "Pagaran Tapah Darussalam",
      },
      {
        id: "140615",
        city_id: "1406",
        name: "Kepenuhan Hulu",
      },
      {
        id: "140616",
        city_id: "1406",
        name: "Pendalian IV Koto",
      },
      {
        id: "140701",
        city_id: "1407",
        name: "Kubu",
      },
      {
        id: "140702",
        city_id: "1407",
        name: "Bangko",
      },
      {
        id: "140703",
        city_id: "1407",
        name: "Tanah Putih",
      },
      {
        id: "140704",
        city_id: "1407",
        name: "Rimba Melintang",
      },
      {
        id: "140705",
        city_id: "1407",
        name: "Bagansinembah",
      },
      {
        id: "140706",
        city_id: "1407",
        name: "Pasir Limau Kapas",
      },
      {
        id: "140707",
        city_id: "1407",
        name: "Sinaboi",
      },
      {
        id: "140708",
        city_id: "1407",
        name: "Pujud",
      },
      {
        id: "140709",
        city_id: "1407",
        name: "Tanah Putih Tanjung Melawa",
      },
      {
        id: "140710",
        city_id: "1407",
        name: "Bangko Pusako",
      },
      {
        id: "140711",
        city_id: "1407",
        name: "Simpang Kanan",
      },
      {
        id: "140712",
        city_id: "1407",
        name: "Batu Hampar",
      },
      {
        id: "140713",
        city_id: "1407",
        name: "Rantau Kopar",
      },
      {
        id: "140714",
        city_id: "1407",
        name: "Pekaitan",
      },
      {
        id: "140715",
        city_id: "1407",
        name: "Kubu Babussalam",
      },
      {
        id: "140716",
        city_id: "1407",
        name: "Tanjung Medan",
      },
      {
        id: "140717",
        city_id: "1407",
        name: "Bagan Sinembah Raya",
      },
      {
        id: "140718",
        city_id: "1407",
        name: "Balai Jaya",
      },
      {
        id: "140801",
        city_id: "1408",
        name: "Siak",
      },
      {
        id: "140802",
        city_id: "1408",
        name: "Sungai Apit",
      },
      {
        id: "140803",
        city_id: "1408",
        name: "Minas",
      },
      {
        id: "140804",
        city_id: "1408",
        name: "Tualang",
      },
      {
        id: "140805",
        city_id: "1408",
        name: "Sungai Mandau",
      },
      {
        id: "140806",
        city_id: "1408",
        name: "Dayun",
      },
      {
        id: "140807",
        city_id: "1408",
        name: "Kerinci Kanan",
      },
      {
        id: "140808",
        city_id: "1408",
        name: "Bunga Raya",
      },
      {
        id: "140809",
        city_id: "1408",
        name: "Koto Gasib",
      },
      {
        id: "140810",
        city_id: "1408",
        name: "Kandis",
      },
      {
        id: "140811",
        city_id: "1408",
        name: "Lubuk Dalam",
      },
      {
        id: "140812",
        city_id: "1408",
        name: "Sabak Auh",
      },
      {
        id: "140813",
        city_id: "1408",
        name: "Mempura",
      },
      {
        id: "140814",
        city_id: "1408",
        name: "Pusako",
      },
      {
        id: "140901",
        city_id: "1409",
        name: "Kuantan Mudik",
      },
      {
        id: "140902",
        city_id: "1409",
        name: "Kuantan Tengah",
      },
      {
        id: "140903",
        city_id: "1409",
        name: "Singingi",
      },
      {
        id: "140904",
        city_id: "1409",
        name: "Kuantan Hilir",
      },
      {
        id: "140905",
        city_id: "1409",
        name: "Cerenti",
      },
      {
        id: "140906",
        city_id: "1409",
        name: "Benai",
      },
      {
        id: "140907",
        city_id: "1409",
        name: "Gunungtoar",
      },
      {
        id: "140908",
        city_id: "1409",
        name: "Singingi Hilir",
      },
      {
        id: "140909",
        city_id: "1409",
        name: "Pangean",
      },
      {
        id: "140910",
        city_id: "1409",
        name: "Logas Tanah Darat",
      },
      {
        id: "140911",
        city_id: "1409",
        name: "Inuman",
      },
      {
        id: "140912",
        city_id: "1409",
        name: "Hulu Kuantan",
      },
      {
        id: "140913",
        city_id: "1409",
        name: "Kuantan Hilir Seberang",
      },
      {
        id: "140914",
        city_id: "1409",
        name: "Sentajo Raya",
      },
      {
        id: "140915",
        city_id: "1409",
        name: "Pucuk Rantau",
      },
      {
        id: "141001",
        city_id: "1410",
        name: "Tebing Tinggi",
      },
      {
        id: "141002",
        city_id: "1410",
        name: "Rangsang Barat",
      },
      {
        id: "141003",
        city_id: "1410",
        name: "Rangsang",
      },
      {
        id: "141004",
        city_id: "1410",
        name: "Tebing Tinggi Barat",
      },
      {
        id: "141005",
        city_id: "1410",
        name: "Merbau",
      },
      {
        id: "141006",
        city_id: "1410",
        name: "Pulaumerbau",
      },
      {
        id: "141007",
        city_id: "1410",
        name: "Tebing Tinggi Timur",
      },
      {
        id: "141008",
        city_id: "1410",
        name: "Tasik Putri Puyu",
      },
      {
        id: "141009",
        city_id: "1410",
        name: "Rangsang Pesisir",
      },
      {
        id: "147101",
        city_id: "1471",
        name: "Sukajadi",
      },
      {
        id: "147102",
        city_id: "1471",
        name: "Pekanbaru Kota",
      },
      {
        id: "147103",
        city_id: "1471",
        name: "Sail",
      },
      {
        id: "147104",
        city_id: "1471",
        name: "Lima Puluh",
      },
      {
        id: "147105",
        city_id: "1471",
        name: "Senapelan",
      },
      {
        id: "147106",
        city_id: "1471",
        name: "Rumbai",
      },
      {
        id: "147107",
        city_id: "1471",
        name: "Bukit Raya",
      },
      {
        id: "147108",
        city_id: "1471",
        name: "Tampan",
      },
      {
        id: "147109",
        city_id: "1471",
        name: "Marpoyan Damai",
      },
      {
        id: "147110",
        city_id: "1471",
        name: "Tenayan Raya",
      },
      {
        id: "147111",
        city_id: "1471",
        name: "Payung Sekaki",
      },
      {
        id: "147112",
        city_id: "1471",
        name: "Rumbai Pesisir",
      },
      {
        id: "147201",
        city_id: "1472",
        name: "Dumai Barat",
      },
      {
        id: "147202",
        city_id: "1472",
        name: "Dumai Timur",
      },
      {
        id: "147203",
        city_id: "1472",
        name: "Bukit Kapur",
      },
      {
        id: "147204",
        city_id: "1472",
        name: "Sungai Sembilan",
      },
      {
        id: "147205",
        city_id: "1472",
        name: "Medang Kampai",
      },
      {
        id: "147206",
        city_id: "1472",
        name: "Dumai Kota",
      },
      {
        id: "147207",
        city_id: "1472",
        name: "Dumai Selatan",
      },
      {
        id: "150101",
        city_id: "1501",
        name: "Gunung Raya",
      },
      {
        id: "150102",
        city_id: "1501",
        name: "Danau Kerinci",
      },
      {
        id: "150104",
        city_id: "1501",
        name: "Sitinjau Laut",
      },
      {
        id: "150105",
        city_id: "1501",
        name: "Air Hangat",
      },
      {
        id: "150106",
        city_id: "1501",
        name: "Gunung Kerinci",
      },
      {
        id: "150107",
        city_id: "1501",
        name: "Batang Merangin",
      },
      {
        id: "150108",
        city_id: "1501",
        name: "Keliling Danau",
      },
      {
        id: "150109",
        city_id: "1501",
        name: "Kayu Aro",
      },
      {
        id: "150111",
        city_id: "1501",
        name: "Air Hangat Timur",
      },
      {
        id: "150115",
        city_id: "1501",
        name: "Gunung Tujuh",
      },
      {
        id: "150116",
        city_id: "1501",
        name: "Siulak",
      },
      {
        id: "150117",
        city_id: "1501",
        name: "Depati Tujuh",
      },
      {
        id: "150118",
        city_id: "1501",
        name: "Siulak Mukai",
      },
      {
        id: "150119",
        city_id: "1501",
        name: "Kayu Aro Barat",
      },
      {
        id: "150120",
        city_id: "1501",
        name: "Bukitkerman",
      },
      {
        id: "150121",
        city_id: "1501",
        name: "Air Hangat Barat",
      },
      {
        id: "150201",
        city_id: "1502",
        name: "Jangkat",
      },
      {
        id: "150202",
        city_id: "1502",
        name: "Bangko",
      },
      {
        id: "150203",
        city_id: "1502",
        name: "Muara Siau",
      },
      {
        id: "150204",
        city_id: "1502",
        name: "Sungai Manau",
      },
      {
        id: "150205",
        city_id: "1502",
        name: "Tabir",
      },
      {
        id: "150206",
        city_id: "1502",
        name: "Pamenang",
      },
      {
        id: "150207",
        city_id: "1502",
        name: "Tabir Ulu",
      },
      {
        id: "150208",
        city_id: "1502",
        name: "Tabir Selatan",
      },
      {
        id: "150209",
        city_id: "1502",
        name: "Lembah Masurai",
      },
      {
        id: "150210",
        city_id: "1502",
        name: "Bangko Barat",
      },
      {
        id: "150211",
        city_id: "1502",
        name: "Nalo Tatan",
      },
      {
        id: "150212",
        city_id: "1502",
        name: "Batang Masumai",
      },
      {
        id: "150213",
        city_id: "1502",
        name: "Pamenang Barat",
      },
      {
        id: "150214",
        city_id: "1502",
        name: "Tabir Ilir",
      },
      {
        id: "150215",
        city_id: "1502",
        name: "Tabir Timur",
      },
      {
        id: "150216",
        city_id: "1502",
        name: "Renah Pembarap",
      },
      {
        id: "150217",
        city_id: "1502",
        name: "Pangkalan Jambu",
      },
      {
        id: "150218",
        city_id: "1502",
        name: "Jangkat Timur",
      },
      {
        id: "150219",
        city_id: "1502",
        name: "Renah Pamenang",
      },
      {
        id: "150220",
        city_id: "1502",
        name: "Pamenang Selatan",
      },
      {
        id: "150221",
        city_id: "1502",
        name: "Margo Tabir",
      },
      {
        id: "150222",
        city_id: "1502",
        name: "Tabir Lintas",
      },
      {
        id: "150223",
        city_id: "1502",
        name: "Tabir Barat",
      },
      {
        id: "150224",
        city_id: "1502",
        name: "Tiang Pumpung",
      },
      {
        id: "150301",
        city_id: "1503",
        name: "Batang Asai",
      },
      {
        id: "150302",
        city_id: "1503",
        name: "Limun",
      },
      {
        id: "150303",
        city_id: "1503",
        name: "Sarolangun",
      },
      {
        id: "150304",
        city_id: "1503",
        name: "Pauh",
      },
      {
        id: "150305",
        city_id: "1503",
        name: "Pelawan",
      },
      {
        id: "150306",
        city_id: "1503",
        name: "Mandiangin",
      },
      {
        id: "150307",
        city_id: "1503",
        name: "Air Hitam",
      },
      {
        id: "150308",
        city_id: "1503",
        name: "Bathin VIII",
      },
      {
        id: "150309",
        city_id: "1503",
        name: "Singkut",
      },
      {
        id: "150310",
        city_id: "1503",
        name: "Cermin Nan Gedang",
      },
      {
        id: "150401",
        city_id: "1504",
        name: "Mersam",
      },
      {
        id: "150402",
        city_id: "1504",
        name: "Muara Tembesi",
      },
      {
        id: "150403",
        city_id: "1504",
        name: "Muara Bulian",
      },
      {
        id: "150404",
        city_id: "1504",
        name: "Batin XXIV",
      },
      {
        id: "150405",
        city_id: "1504",
        name: "Pemayung",
      },
      {
        id: "150406",
        city_id: "1504",
        name: "Maro Sebo Ulu",
      },
      {
        id: "150407",
        city_id: "1504",
        name: "Bajubang",
      },
      {
        id: "150408",
        city_id: "1504",
        name: "Maro Sebo Ilir",
      },
      {
        id: "150501",
        city_id: "1505",
        name: "Jambi Luar Kota",
      },
      {
        id: "150502",
        city_id: "1505",
        name: "Sekernan",
      },
      {
        id: "150503",
        city_id: "1505",
        name: "Kumpeh",
      },
      {
        id: "150504",
        city_id: "1505",
        name: "Maro Sebo",
      },
      {
        id: "150505",
        city_id: "1505",
        name: "Mestong",
      },
      {
        id: "150506",
        city_id: "1505",
        name: "Kumpeh Ulu",
      },
      {
        id: "150507",
        city_id: "1505",
        name: "Sungai Bahar",
      },
      {
        id: "150508",
        city_id: "1505",
        name: "Sungai Gelam",
      },
      {
        id: "150509",
        city_id: "1505",
        name: "Bahar Utara",
      },
      {
        id: "150510",
        city_id: "1505",
        name: "Bahar Selatan",
      },
      {
        id: "150511",
        city_id: "1505",
        name: "Taman Rajo",
      },
      {
        id: "150601",
        city_id: "1506",
        name: "Tungkal Ulu",
      },
      {
        id: "150602",
        city_id: "1506",
        name: "Tungkal Ilir",
      },
      {
        id: "150603",
        city_id: "1506",
        name: "Pengabuan",
      },
      {
        id: "150604",
        city_id: "1506",
        name: "Betara",
      },
      {
        id: "150605",
        city_id: "1506",
        name: "Merlung",
      },
      {
        id: "150606",
        city_id: "1506",
        name: "Tebing Tinggi",
      },
      {
        id: "150607",
        city_id: "1506",
        name: "Batang Asam",
      },
      {
        id: "150608",
        city_id: "1506",
        name: "Renah Mendaluh",
      },
      {
        id: "150609",
        city_id: "1506",
        name: "Muara Papalik",
      },
      {
        id: "150610",
        city_id: "1506",
        name: "Seberang Kota",
      },
      {
        id: "150611",
        city_id: "1506",
        name: "Bram Itam",
      },
      {
        id: "150612",
        city_id: "1506",
        name: "Kuala Betara",
      },
      {
        id: "150613",
        city_id: "1506",
        name: "Senyerang",
      },
      {
        id: "150701",
        city_id: "1507",
        name: "Muara Sabak Timur",
      },
      {
        id: "150702",
        city_id: "1507",
        name: "Nipah Panjang",
      },
      {
        id: "150703",
        city_id: "1507",
        name: "Mendahara",
      },
      {
        id: "150704",
        city_id: "1507",
        name: "Rantau Rasau",
      },
      {
        id: "150705",
        city_id: "1507",
        name: "Sadu",
      },
      {
        id: "150706",
        city_id: "1507",
        name: "Dendang",
      },
      {
        id: "150707",
        city_id: "1507",
        name: "Muara Sabak Barat",
      },
      {
        id: "150708",
        city_id: "1507",
        name: "Kuala Jambi",
      },
      {
        id: "150709",
        city_id: "1507",
        name: "Mendahara Ulu",
      },
      {
        id: "150710",
        city_id: "1507",
        name: "Geragai",
      },
      {
        id: "150711",
        city_id: "1507",
        name: "Berbak",
      },
      {
        id: "150801",
        city_id: "1508",
        name: "Tanah Tumbuh",
      },
      {
        id: "150802",
        city_id: "1508",
        name: "Rantau Pandan",
      },
      {
        id: "150803",
        city_id: "1508",
        name: "Pasar Muaro Bungo",
      },
      {
        id: "150804",
        city_id: "1508",
        name: "Jujuhan",
      },
      {
        id: "150805",
        city_id: "1508",
        name: "Tanah Sepenggal",
      },
      {
        id: "150806",
        city_id: "1508",
        name: "Pelepat",
      },
      {
        id: "150807",
        city_id: "1508",
        name: "Limbur Lubuk Mengkuang",
      },
      {
        id: "150808",
        city_id: "1508",
        name: "Muko-muko Bathin VII",
      },
      {
        id: "150809",
        city_id: "1508",
        name: "Pelepat Ilir",
      },
      {
        id: "150810",
        city_id: "1508",
        name: "Batin II Babeko",
      },
      {
        id: "150811",
        city_id: "1508",
        name: "Bathin III",
      },
      {
        id: "150812",
        city_id: "1508",
        name: "Bungo Dani",
      },
      {
        id: "150813",
        city_id: "1508",
        name: "Rimbo Tengah",
      },
      {
        id: "150814",
        city_id: "1508",
        name: "Bathin III Ulu",
      },
      {
        id: "150815",
        city_id: "1508",
        name: "Bathin II Pelayang",
      },
      {
        id: "150816",
        city_id: "1508",
        name: "Jujuhan Ilir",
      },
      {
        id: "150817",
        city_id: "1508",
        name: "Tanah Sepenggal Lintas",
      },
      {
        id: "150901",
        city_id: "1509",
        name: "Tebo Tengah",
      },
      {
        id: "150902",
        city_id: "1509",
        name: "Tebo Ilir",
      },
      {
        id: "150903",
        city_id: "1509",
        name: "Tebo Ulu",
      },
      {
        id: "150904",
        city_id: "1509",
        name: "Rimbo Bujang",
      },
      {
        id: "150905",
        city_id: "1509",
        name: "Sumay",
      },
      {
        id: "150906",
        city_id: "1509",
        name: "VII Koto",
      },
      {
        id: "150907",
        city_id: "1509",
        name: "Rimbo Ulu",
      },
      {
        id: "150908",
        city_id: "1509",
        name: "Rimbo Ilir",
      },
      {
        id: "150909",
        city_id: "1509",
        name: "Tengah Ilir",
      },
      {
        id: "150910",
        city_id: "1509",
        name: "Serai Serumpun",
      },
      {
        id: "150911",
        city_id: "1509",
        name: "VII Koto Ilir",
      },
      {
        id: "150912",
        city_id: "1509",
        name: "Muara Tabir",
      },
      {
        id: "157101",
        city_id: "1571",
        name: "Telanaipura",
      },
      {
        id: "157102",
        city_id: "1571",
        name: "Jambi Selatan",
      },
      {
        id: "157103",
        city_id: "1571",
        name: "Jambi Timur",
      },
      {
        id: "157104",
        city_id: "1571",
        name: "Pasar Jambi",
      },
      {
        id: "157105",
        city_id: "1571",
        name: "Pelayangan",
      },
      {
        id: "157106",
        city_id: "1571",
        name: "Danau Teluk",
      },
      {
        id: "157107",
        city_id: "1571",
        name: "Kota Baru",
      },
      {
        id: "157108",
        city_id: "1571",
        name: "Jelutung",
      },
      {
        id: "157109",
        city_id: "1571",
        name: "Alam Barajo",
      },
      {
        id: "157110",
        city_id: "1571",
        name: "Danau Sipin",
      },
      {
        id: "157111",
        city_id: "1571",
        name: "Paal Merah",
      },
      {
        id: "157201",
        city_id: "1572",
        name: "Sungai Penuh",
      },
      {
        id: "157202",
        city_id: "1572",
        name: "Pesisir Bukit",
      },
      {
        id: "157203",
        city_id: "1572",
        name: "Hamparan Rawang",
      },
      {
        id: "157204",
        city_id: "1572",
        name: "Tanah Kampung",
      },
      {
        id: "157205",
        city_id: "1572",
        name: "Kumun Debai",
      },
      {
        id: "157206",
        city_id: "1572",
        name: "Pondok Tinggi",
      },
      {
        id: "157207",
        city_id: "1572",
        name: "Koto Baru",
      },
      {
        id: "157208",
        city_id: "1572",
        name: "Sungai Bungkal",
      },
      {
        id: "160107",
        city_id: "1601",
        name: "Sosoh Buay Rayap",
      },
      {
        id: "160108",
        city_id: "1601",
        name: "Pengandonan",
      },
      {
        id: "160109",
        city_id: "1601",
        name: "Peninjauan",
      },
      {
        id: "160113",
        city_id: "1601",
        name: "Baturaja Barat",
      },
      {
        id: "160114",
        city_id: "1601",
        name: "Baturaja Timur",
      },
      {
        id: "160120",
        city_id: "1601",
        name: "Ulu Ogan",
      },
      {
        id: "160121",
        city_id: "1601",
        name: "Semidang Aji",
      },
      {
        id: "160122",
        city_id: "1601",
        name: "Lubuk Batang",
      },
      {
        id: "160128",
        city_id: "1601",
        name: "Lengkiti",
      },
      {
        id: "160129",
        city_id: "1601",
        name: "Sinar Peninjauan",
      },
      {
        id: "160130",
        city_id: "1601",
        name: "Lubuk Raja",
      },
      {
        id: "160131",
        city_id: "1601",
        name: "Muara Jaya",
      },
      {
        id: "160132",
        city_id: "1601",
        name: "Kedaton Peninjauan Raya",
      },
      {
        id: "160202",
        city_id: "1602",
        name: "Tanjung Lubuk",
      },
      {
        id: "160203",
        city_id: "1602",
        name: "Pedamaran",
      },
      {
        id: "160204",
        city_id: "1602",
        name: "Mesuji",
      },
      {
        id: "160205",
        city_id: "1602",
        name: "Kayu Agung",
      },
      {
        id: "160208",
        city_id: "1602",
        name: "Sirah Pulau Padang",
      },
      {
        id: "160211",
        city_id: "1602",
        name: "Tulung Selapan",
      },
      {
        id: "160212",
        city_id: "1602",
        name: "Pampangan",
      },
      {
        id: "160213",
        city_id: "1602",
        name: "Lempuing",
      },
      {
        id: "160214",
        city_id: "1602",
        name: "Air Sugihan",
      },
      {
        id: "160215",
        city_id: "1602",
        name: "Sungai Menang",
      },
      {
        id: "160217",
        city_id: "1602",
        name: "Jejawi",
      },
      {
        id: "160218",
        city_id: "1602",
        name: "Cengal",
      },
      {
        id: "160219",
        city_id: "1602",
        name: "Pangkalan Lampam",
      },
      {
        id: "160220",
        city_id: "1602",
        name: "Mesuji Makmur",
      },
      {
        id: "160221",
        city_id: "1602",
        name: "Mesuji Raya",
      },
      {
        id: "160222",
        city_id: "1602",
        name: "Lempuing Jaya",
      },
      {
        id: "160223",
        city_id: "1602",
        name: "Teluk Gelam",
      },
      {
        id: "160224",
        city_id: "1602",
        name: "Pedamaran Timur",
      },
      {
        id: "160301",
        city_id: "1603",
        name: "Tanjung Agung",
      },
      {
        id: "160302",
        city_id: "1603",
        name: "Muara Enim",
      },
      {
        id: "160303",
        city_id: "1603",
        name: "Rambang Niru",
      },
      {
        id: "160304",
        city_id: "1603",
        name: "Gunung Megang",
      },
      {
        id: "160306",
        city_id: "1603",
        name: "Gelumbang",
      },
      {
        id: "160307",
        city_id: "1603",
        name: "Lawang Kidul",
      },
      {
        id: "160308",
        city_id: "1603",
        name: "Semende Darat Laut",
      },
      {
        id: "160309",
        city_id: "1603",
        name: "Semende Darat Tengah",
      },
      {
        id: "160310",
        city_id: "1603",
        name: "Semende Darat Ulu",
      },
      {
        id: "160311",
        city_id: "1603",
        name: "Ujan Mas",
      },
      {
        id: "160314",
        city_id: "1603",
        name: "Lubai",
      },
      {
        id: "160315",
        city_id: "1603",
        name: "Rambang",
      },
      {
        id: "160316",
        city_id: "1603",
        name: "Sungai Rotan",
      },
      {
        id: "160317",
        city_id: "1603",
        name: "Lembak",
      },
      {
        id: "160319",
        city_id: "1603",
        name: "Benakat",
      },
      {
        id: "160321",
        city_id: "1603",
        name: "Kelekar",
      },
      {
        id: "160322",
        city_id: "1603",
        name: "Muara Belida",
      },
      {
        id: "160323",
        city_id: "1603",
        name: "Belimbing",
      },
      {
        id: "160324",
        city_id: "1603",
        name: "Belida Darat",
      },
      {
        id: "160325",
        city_id: "1603",
        name: "Lubai Ulu",
      },
      {
        id: "160326",
        city_id: "1603",
        name: "Empat Petulai Dangku",
      },
      {
        id: "160327",
        city_id: "1603",
        name: "Panang Enim",
      },
      {
        id: "160401",
        city_id: "1604",
        name: "Tanjungsakti Pumu",
      },
      {
        id: "160406",
        city_id: "1604",
        name: "Jarai",
      },
      {
        id: "160407",
        city_id: "1604",
        name: "Kota Agung",
      },
      {
        id: "160408",
        city_id: "1604",
        name: "Pulaupinang",
      },
      {
        id: "160409",
        city_id: "1604",
        name: "Merapi Barat",
      },
      {
        id: "160410",
        city_id: "1604",
        name: "Lahat",
      },
      {
        id: "160412",
        city_id: "1604",
        name: "Pajar Bulan",
      },
      {
        id: "160415",
        city_id: "1604",
        name: "Mulak Ulu",
      },
      {
        id: "160416",
        city_id: "1604",
        name: "Kikim Selatan",
      },
      {
        id: "160417",
        city_id: "1604",
        name: "Kikim Timur",
      },
      {
        id: "160418",
        city_id: "1604",
        name: "Kikim Tengah",
      },
      {
        id: "160419",
        city_id: "1604",
        name: "Kikim Barat",
      },
      {
        id: "160420",
        city_id: "1604",
        name: "Pseksu",
      },
      {
        id: "160421",
        city_id: "1604",
        name: "Gumay Talang",
      },
      {
        id: "160422",
        city_id: "1604",
        name: "Pagar Gunung",
      },
      {
        id: "160423",
        city_id: "1604",
        name: "Merapi Timur",
      },
      {
        id: "160424",
        city_id: "1604",
        name: "Tanjung Sakti Pumi",
      },
      {
        id: "160425",
        city_id: "1604",
        name: "Gumay Ulu",
      },
      {
        id: "160426",
        city_id: "1604",
        name: "Merapi Selatan",
      },
      {
        id: "160427",
        city_id: "1604",
        name: "Tanjungtebat",
      },
      {
        id: "160428",
        city_id: "1604",
        name: "Muarapayang",
      },
      {
        id: "160429",
        city_id: "1604",
        name: "Sukamerindu",
      },
      {
        id: "160430",
        city_id: "1604",
        name: "Mulak Sebingkai",
      },
      {
        id: "160431",
        city_id: "1604",
        name: "Lahat Selatan",
      },
      {
        id: "160501",
        city_id: "1605",
        name: "Tugumulyo",
      },
      {
        id: "160502",
        city_id: "1605",
        name: "Muara Lakitan",
      },
      {
        id: "160503",
        city_id: "1605",
        name: "Muara Kelingi",
      },
      {
        id: "160508",
        city_id: "1605",
        name: "Jayaloka",
      },
      {
        id: "160509",
        city_id: "1605",
        name: "Muara Beliti",
      },
      {
        id: "160510",
        city_id: "1605",
        name: "STL Ulu Terawas",
      },
      {
        id: "160511",
        city_id: "1605",
        name: "Selangit",
      },
      {
        id: "160512",
        city_id: "1605",
        name: "Megang Sakti",
      },
      {
        id: "160513",
        city_id: "1605",
        name: "Purwodadi",
      },
      {
        id: "160514",
        city_id: "1605",
        name: "BTS. Ulu",
      },
      {
        id: "160518",
        city_id: "1605",
        name: "Tiang Pumpung Kepungut",
      },
      {
        id: "160519",
        city_id: "1605",
        name: "Sumber Harta",
      },
      {
        id: "160520",
        city_id: "1605",
        name: "Tuah Negeri",
      },
      {
        id: "160521",
        city_id: "1605",
        name: "Suka Karya",
      },
      {
        id: "160601",
        city_id: "1606",
        name: "Sekayu",
      },
      {
        id: "160602",
        city_id: "1606",
        name: "Lais",
      },
      {
        id: "160603",
        city_id: "1606",
        name: "Sungai Keruh",
      },
      {
        id: "160604",
        city_id: "1606",
        name: "Batang Hari Leko",
      },
      {
        id: "160605",
        city_id: "1606",
        name: "Sanga Desa",
      },
      {
        id: "160606",
        city_id: "1606",
        name: "Babat Toman",
      },
      {
        id: "160607",
        city_id: "1606",
        name: "Sungai Lilin",
      },
      {
        id: "160608",
        city_id: "1606",
        name: "Keluang",
      },
      {
        id: "160609",
        city_id: "1606",
        name: "Bayung Lencir",
      },
      {
        id: "160610",
        city_id: "1606",
        name: "Plakat Tinggi",
      },
      {
        id: "160611",
        city_id: "1606",
        name: "Lalan",
      },
      {
        id: "160612",
        city_id: "1606",
        name: "Tungkal Jaya",
      },
      {
        id: "160613",
        city_id: "1606",
        name: "Lawang Wetan",
      },
      {
        id: "160614",
        city_id: "1606",
        name: "Babat Supat",
      },
      {
        id: "160615",
        city_id: "1606",
        name: "Jirak Jaya",
      },
      {
        id: "160701",
        city_id: "1607",
        name: "Banyuasin I",
      },
      {
        id: "160702",
        city_id: "1607",
        name: "Banyuasin II",
      },
      {
        id: "160703",
        city_id: "1607",
        name: "Banyuasin III",
      },
      {
        id: "160704",
        city_id: "1607",
        name: "Pulau Rimau",
      },
      {
        id: "160705",
        city_id: "1607",
        name: "Betung",
      },
      {
        id: "160706",
        city_id: "1607",
        name: "Rambutan",
      },
      {
        id: "160707",
        city_id: "1607",
        name: "Muara Padang",
      },
      {
        id: "160708",
        city_id: "1607",
        name: "Muara Telang",
      },
      {
        id: "160709",
        city_id: "1607",
        name: "Makarti Jaya",
      },
      {
        id: "160710",
        city_id: "1607",
        name: "Talang Kelapa",
      },
      {
        id: "160711",
        city_id: "1607",
        name: "Rantau Bayur",
      },
      {
        id: "160712",
        city_id: "1607",
        name: "Tanjung Lago",
      },
      {
        id: "160713",
        city_id: "1607",
        name: "Muara Sugihan",
      },
      {
        id: "160714",
        city_id: "1607",
        name: "Air Salek",
      },
      {
        id: "160715",
        city_id: "1607",
        name: "Tungkal Ilir",
      },
      {
        id: "160716",
        city_id: "1607",
        name: "Suak Tapeh",
      },
      {
        id: "160717",
        city_id: "1607",
        name: "Sembawa",
      },
      {
        id: "160718",
        city_id: "1607",
        name: "Sumber Marga Telang",
      },
      {
        id: "160719",
        city_id: "1607",
        name: "Air Kumbang",
      },
      {
        id: "160720",
        city_id: "1607",
        name: "Karang Agung Ilir",
      },
      {
        id: "160721",
        city_id: "1607",
        name: "Selat Penuguan",
      },
      {
        id: "160801",
        city_id: "1608",
        name: "Martapura",
      },
      {
        id: "160802",
        city_id: "1608",
        name: "Buay Madang",
      },
      {
        id: "160803",
        city_id: "1608",
        name: "Belitang",
      },
      {
        id: "160804",
        city_id: "1608",
        name: "Cempaka",
      },
      {
        id: "160805",
        city_id: "1608",
        name: "Buay Pemuka Peliung",
      },
      {
        id: "160806",
        city_id: "1608",
        name: "Madang Suku II",
      },
      {
        id: "160807",
        city_id: "1608",
        name: "Madang Suku I",
      },
      {
        id: "160808",
        city_id: "1608",
        name: "Semendawai Suku III",
      },
      {
        id: "160809",
        city_id: "1608",
        name: "Belitang II",
      },
      {
        id: "160810",
        city_id: "1608",
        name: "Belitang III",
      },
      {
        id: "160811",
        city_id: "1608",
        name: "Bunga Mayang",
      },
      {
        id: "160812",
        city_id: "1608",
        name: "Buay Madang Timur",
      },
      {
        id: "160813",
        city_id: "1608",
        name: "Madang Suku III",
      },
      {
        id: "160814",
        city_id: "1608",
        name: "Semendawai Barat",
      },
      {
        id: "160815",
        city_id: "1608",
        name: "Semendawai Timur",
      },
      {
        id: "160816",
        city_id: "1608",
        name: "Jayapura",
      },
      {
        id: "160817",
        city_id: "1608",
        name: "Belitang Jaya",
      },
      {
        id: "160818",
        city_id: "1608",
        name: "Belitang Madang Raya",
      },
      {
        id: "160819",
        city_id: "1608",
        name: "Belitang Mulya",
      },
      {
        id: "160820",
        city_id: "1608",
        name: "Buay Pemuka Bangsa Raja",
      },
      {
        id: "160901",
        city_id: "1609",
        name: "Muara Dua",
      },
      {
        id: "160902",
        city_id: "1609",
        name: "Pulau Beringin",
      },
      {
        id: "160903",
        city_id: "1609",
        name: "Banding Agung",
      },
      {
        id: "160904",
        city_id: "1609",
        name: "Muara Dua Kisam",
      },
      {
        id: "160905",
        city_id: "1609",
        name: "Simpang",
      },
      {
        id: "160906",
        city_id: "1609",
        name: "Buay Sandang Aji",
      },
      {
        id: "160907",
        city_id: "1609",
        name: "Buay Runjung",
      },
      {
        id: "160908",
        city_id: "1609",
        name: "Mekakau Ilir",
      },
      {
        id: "160909",
        city_id: "1609",
        name: "Buay Pemaca",
      },
      {
        id: "160910",
        city_id: "1609",
        name: "Kisam Tinggi",
      },
      {
        id: "160911",
        city_id: "1609",
        name: "Kisam Ilir",
      },
      {
        id: "160912",
        city_id: "1609",
        name: "Buay Pematang Ribu Ranau T",
      },
      {
        id: "160913",
        city_id: "1609",
        name: "Warkuk Ranau Selatan",
      },
      {
        id: "160914",
        city_id: "1609",
        name: "Runjung Agung",
      },
      {
        id: "160915",
        city_id: "1609",
        name: "Sungai Are",
      },
      {
        id: "160916",
        city_id: "1609",
        name: "Sindang Danau",
      },
      {
        id: "160917",
        city_id: "1609",
        name: "Buana Pemaca",
      },
      {
        id: "160918",
        city_id: "1609",
        name: "Tiga Dihaji",
      },
      {
        id: "160919",
        city_id: "1609",
        name: "Buay Rawan",
      },
      {
        id: "161001",
        city_id: "1610",
        name: "Muara Kuang",
      },
      {
        id: "161002",
        city_id: "1610",
        name: "Tanjung Batu",
      },
      {
        id: "161003",
        city_id: "1610",
        name: "Tanjung Raja",
      },
      {
        id: "161004",
        city_id: "1610",
        name: "Indralaya",
      },
      {
        id: "161005",
        city_id: "1610",
        name: "Pemulutan",
      },
      {
        id: "161006",
        city_id: "1610",
        name: "Rantau Alai",
      },
      {
        id: "161007",
        city_id: "1610",
        name: "Indralaya Utara",
      },
      {
        id: "161008",
        city_id: "1610",
        name: "Indralaya Selatan",
      },
      {
        id: "161009",
        city_id: "1610",
        name: "Pemulutan Selatan",
      },
      {
        id: "161010",
        city_id: "1610",
        name: "Pemulutan Barat",
      },
      {
        id: "161011",
        city_id: "1610",
        name: "Rantau Panjang",
      },
      {
        id: "161012",
        city_id: "1610",
        name: "Sungai Pinang",
      },
      {
        id: "161013",
        city_id: "1610",
        name: "Kandis",
      },
      {
        id: "161014",
        city_id: "1610",
        name: "Rambang Kuang",
      },
      {
        id: "161015",
        city_id: "1610",
        name: "Lubuk Keliat",
      },
      {
        id: "161016",
        city_id: "1610",
        name: "Payaraman",
      },
      {
        id: "161101",
        city_id: "1611",
        name: "Muara Pinang",
      },
      {
        id: "161102",
        city_id: "1611",
        name: "Pendopo",
      },
      {
        id: "161103",
        city_id: "1611",
        name: "Ulu Musi",
      },
      {
        id: "161104",
        city_id: "1611",
        name: "Tebing Tinggi",
      },
      {
        id: "161105",
        city_id: "1611",
        name: "Lintang Kanan",
      },
      {
        id: "161106",
        city_id: "1611",
        name: "Talang Padang",
      },
      {
        id: "161107",
        city_id: "1611",
        name: "Pasemah Air Keruh",
      },
      {
        id: "161108",
        city_id: "1611",
        name: "Sikap Dalam",
      },
      {
        id: "161109",
        city_id: "1611",
        name: "Saling",
      },
      {
        id: "161110",
        city_id: "1611",
        name: "Pendopo Barat",
      },
      {
        id: "161201",
        city_id: "1612",
        name: "Talang Ubi",
      },
      {
        id: "161202",
        city_id: "1612",
        name: "Penukal Utara",
      },
      {
        id: "161203",
        city_id: "1612",
        name: "Penukal",
      },
      {
        id: "161204",
        city_id: "1612",
        name: "Abab",
      },
      {
        id: "161205",
        city_id: "1612",
        name: "Tanah Abang",
      },
      {
        id: "161301",
        city_id: "1613",
        name: "Rupit",
      },
      {
        id: "161302",
        city_id: "1613",
        name: "Rawas Ulu",
      },
      {
        id: "161303",
        city_id: "1613",
        name: "Nibung",
      },
      {
        id: "161304",
        city_id: "1613",
        name: "Rawas Ilir",
      },
      {
        id: "161305",
        city_id: "1613",
        name: "Karang Dapo",
      },
      {
        id: "161306",
        city_id: "1613",
        name: "Karang Jaya",
      },
      {
        id: "161307",
        city_id: "1613",
        name: "Ulu Rawas",
      },
      {
        id: "167101",
        city_id: "1671",
        name: "Ilir Barat II",
      },
      {
        id: "167102",
        city_id: "1671",
        name: "Seberang Ulu I",
      },
      {
        id: "167103",
        city_id: "1671",
        name: "Seberang Ulu II",
      },
      {
        id: "167104",
        city_id: "1671",
        name: "Ilir Barat I",
      },
      {
        id: "167105",
        city_id: "1671",
        name: "Ilir Timur I",
      },
      {
        id: "167106",
        city_id: "1671",
        name: "Ilir Timur II",
      },
      {
        id: "167107",
        city_id: "1671",
        name: "Sukarami",
      },
      {
        id: "167108",
        city_id: "1671",
        name: "Sako",
      },
      {
        id: "167109",
        city_id: "1671",
        name: "Kemuning",
      },
      {
        id: "167110",
        city_id: "1671",
        name: "Kalidoni",
      },
      {
        id: "167111",
        city_id: "1671",
        name: "Bukit Kecil",
      },
      {
        id: "167112",
        city_id: "1671",
        name: "Gandus",
      },
      {
        id: "167113",
        city_id: "1671",
        name: "Kertapati",
      },
      {
        id: "167114",
        city_id: "1671",
        name: "Plaju",
      },
      {
        id: "167115",
        city_id: "1671",
        name: "Alang-alang Lebar",
      },
      {
        id: "167116",
        city_id: "1671",
        name: "Sematang Borang",
      },
      {
        id: "167117",
        city_id: "1671",
        name: "Jakabaring",
      },
      {
        id: "167118",
        city_id: "1671",
        name: "Ilir Timur Tiga",
      },
      {
        id: "167201",
        city_id: "1672",
        name: "Pagar Alam Utara",
      },
      {
        id: "167202",
        city_id: "1672",
        name: "Pagar Alam Selatan",
      },
      {
        id: "167203",
        city_id: "1672",
        name: "Dempo Utara",
      },
      {
        id: "167204",
        city_id: "1672",
        name: "Dempo Selatan",
      },
      {
        id: "167205",
        city_id: "1672",
        name: "Dempo Tengah",
      },
      {
        id: "167301",
        city_id: "1673",
        name: "Lubuk Linggau Timur I",
      },
      {
        id: "167302",
        city_id: "1673",
        name: "Lubuk Linggau Barat I",
      },
      {
        id: "167303",
        city_id: "1673",
        name: "Lubuk Linggau Selatan I",
      },
      {
        id: "167304",
        city_id: "1673",
        name: "Lubuk Linggau Utara I",
      },
      {
        id: "167305",
        city_id: "1673",
        name: "Lubuk Linggau Timur II",
      },
      {
        id: "167306",
        city_id: "1673",
        name: "Lubuk Linggau Barat II",
      },
      {
        id: "167307",
        city_id: "1673",
        name: "Lubuk Linggau Selatan II",
      },
      {
        id: "167308",
        city_id: "1673",
        name: "Lubuk Linggau Utara II",
      },
      {
        id: "167401",
        city_id: "1674",
        name: "Prabumulih Barat",
      },
      {
        id: "167402",
        city_id: "1674",
        name: "Prabumulih Timur",
      },
      {
        id: "167403",
        city_id: "1674",
        name: "Cambai",
      },
      {
        id: "167404",
        city_id: "1674",
        name: "Rambang Kpk Tengah",
      },
      {
        id: "167405",
        city_id: "1674",
        name: "Prabumulih Utara",
      },
      {
        id: "167406",
        city_id: "1674",
        name: "Prabumulih Selatan",
      },
      {
        id: "170101",
        city_id: "1701",
        name: "Kedurang",
      },
      {
        id: "170102",
        city_id: "1701",
        name: "Seginim",
      },
      {
        id: "170103",
        city_id: "1701",
        name: "Pino",
      },
      {
        id: "170104",
        city_id: "1701",
        name: "Manna",
      },
      {
        id: "170105",
        city_id: "1701",
        name: "Kota Manna",
      },
      {
        id: "170106",
        city_id: "1701",
        name: "Pino Raya",
      },
      {
        id: "170107",
        city_id: "1701",
        name: "Kedurang Ilir",
      },
      {
        id: "170108",
        city_id: "1701",
        name: "Air Nipis",
      },
      {
        id: "170109",
        city_id: "1701",
        name: "Ulu Manna",
      },
      {
        id: "170110",
        city_id: "1701",
        name: "Bunga Mas",
      },
      {
        id: "170111",
        city_id: "1701",
        name: "Pasar Manna",
      },
      {
        id: "170206",
        city_id: "1702",
        name: "Kota Padang",
      },
      {
        id: "170207",
        city_id: "1702",
        name: "Padang Ulak Tanding",
      },
      {
        id: "170208",
        city_id: "1702",
        name: "Sindang Kelingi",
      },
      {
        id: "170209",
        city_id: "1702",
        name: "Curup",
      },
      {
        id: "170210",
        city_id: "1702",
        name: "Bermani Ulu",
      },
      {
        id: "170211",
        city_id: "1702",
        name: "Selupu Rejang",
      },
      {
        id: "170216",
        city_id: "1702",
        name: "Curup Utara",
      },
      {
        id: "170217",
        city_id: "1702",
        name: "Curup Timur",
      },
      {
        id: "170218",
        city_id: "1702",
        name: "Curup Selatan",
      },
      {
        id: "170219",
        city_id: "1702",
        name: "Curup Tengah",
      },
      {
        id: "170220",
        city_id: "1702",
        name: "Binduriang",
      },
      {
        id: "170221",
        city_id: "1702",
        name: "Sindang Beliti Ulu",
      },
      {
        id: "170222",
        city_id: "1702",
        name: "Sindang Dataran",
      },
      {
        id: "170223",
        city_id: "1702",
        name: "Sindang Beliti Ilir",
      },
      {
        id: "170224",
        city_id: "1702",
        name: "Bermani Ulu Raya",
      },
      {
        id: "170301",
        city_id: "1703",
        name: "Enggano",
      },
      {
        id: "170306",
        city_id: "1703",
        name: "Kerkap",
      },
      {
        id: "170307",
        city_id: "1703",
        name: "Kota Arga Makmur",
      },
      {
        id: "170308",
        city_id: "1703",
        name: "Giri Mulya",
      },
      {
        id: "170309",
        city_id: "1703",
        name: "Padang Jaya",
      },
      {
        id: "170310",
        city_id: "1703",
        name: "Lais",
      },
      {
        id: "170311",
        city_id: "1703",
        name: "Batik Nau",
      },
      {
        id: "170312",
        city_id: "1703",
        name: "Ketahun",
      },
      {
        id: "170313",
        city_id: "1703",
        name: "Napal Putih",
      },
      {
        id: "170314",
        city_id: "1703",
        name: "Putri Hijau",
      },
      {
        id: "170315",
        city_id: "1703",
        name: "Air Besi",
      },
      {
        id: "170316",
        city_id: "1703",
        name: "Air Napal",
      },
      {
        id: "170319",
        city_id: "1703",
        name: "Hulu Palik",
      },
      {
        id: "170320",
        city_id: "1703",
        name: "Air Padang",
      },
      {
        id: "170321",
        city_id: "1703",
        name: "Arma Jaya",
      },
      {
        id: "170322",
        city_id: "1703",
        name: "Tanjung Agung Palik",
      },
      {
        id: "170323",
        city_id: "1703",
        name: "Ulok Kupai",
      },
      {
        id: "170324",
        city_id: "1703",
        name: "Pinang Raya",
      },
      {
        id: "170325",
        city_id: "1703",
        name: "Marga Sakti Sebelat",
      },
      {
        id: "170401",
        city_id: "1704",
        name: "Kinal",
      },
      {
        id: "170402",
        city_id: "1704",
        name: "Tanjung Kemuning",
      },
      {
        id: "170403",
        city_id: "1704",
        name: "Kaur Utara",
      },
      {
        id: "170404",
        city_id: "1704",
        name: "Kaur Tengah",
      },
      {
        id: "170405",
        city_id: "1704",
        name: "Kaur Selatan",
      },
      {
        id: "170406",
        city_id: "1704",
        name: "Maje",
      },
      {
        id: "170407",
        city_id: "1704",
        name: "Nasal",
      },
      {
        id: "170408",
        city_id: "1704",
        name: "Semidang Gumay",
      },
      {
        id: "170409",
        city_id: "1704",
        name: "Kelam Tengah",
      },
      {
        id: "170410",
        city_id: "1704",
        name: "Luas",
      },
      {
        id: "170411",
        city_id: "1704",
        name: "Muara Sahung",
      },
      {
        id: "170412",
        city_id: "1704",
        name: "Tetap",
      },
      {
        id: "170413",
        city_id: "1704",
        name: "Lungkang Kule",
      },
      {
        id: "170414",
        city_id: "1704",
        name: "Padang Guci Hilir",
      },
      {
        id: "170415",
        city_id: "1704",
        name: "Padang Guci Hulu",
      },
      {
        id: "170501",
        city_id: "1705",
        name: "Sukaraja",
      },
      {
        id: "170502",
        city_id: "1705",
        name: "Seluma",
      },
      {
        id: "170503",
        city_id: "1705",
        name: "Talo",
      },
      {
        id: "170504",
        city_id: "1705",
        name: "Semidang Alas",
      },
      {
        id: "170505",
        city_id: "1705",
        name: "Semidang Alas Maras",
      },
      {
        id: "170506",
        city_id: "1705",
        name: "Air Periukan",
      },
      {
        id: "170507",
        city_id: "1705",
        name: "Lubuk Sandi",
      },
      {
        id: "170508",
        city_id: "1705",
        name: "Seluma Barat",
      },
      {
        id: "170509",
        city_id: "1705",
        name: "Seluma Timur",
      },
      {
        id: "170510",
        city_id: "1705",
        name: "Seluma Utara",
      },
      {
        id: "170511",
        city_id: "1705",
        name: "Seluma Selatan",
      },
      {
        id: "170512",
        city_id: "1705",
        name: "Talo Kecil",
      },
      {
        id: "170513",
        city_id: "1705",
        name: "Ulu Talo",
      },
      {
        id: "170514",
        city_id: "1705",
        name: "Ilir Talo",
      },
      {
        id: "170601",
        city_id: "1706",
        name: "Lubuk Pinang",
      },
      {
        id: "170602",
        city_id: "1706",
        name: "Kota Mukomuko",
      },
      {
        id: "170603",
        city_id: "1706",
        name: "Teras Terunjam",
      },
      {
        id: "170604",
        city_id: "1706",
        name: "Pondok Suguh",
      },
      {
        id: "170605",
        city_id: "1706",
        name: "Ipuh",
      },
      {
        id: "170606",
        city_id: "1706",
        name: "Malin Deman",
      },
      {
        id: "170607",
        city_id: "1706",
        name: "Air Rami",
      },
      {
        id: "170608",
        city_id: "1706",
        name: "Teramang Jaya",
      },
      {
        id: "170609",
        city_id: "1706",
        name: "Selagan Raya",
      },
      {
        id: "170610",
        city_id: "1706",
        name: "Penarik",
      },
      {
        id: "170611",
        city_id: "1706",
        name: "XIV Koto",
      },
      {
        id: "170612",
        city_id: "1706",
        name: "V Koto",
      },
      {
        id: "170613",
        city_id: "1706",
        name: "Air Majunto",
      },
      {
        id: "170614",
        city_id: "1706",
        name: "Air Dikit",
      },
      {
        id: "170615",
        city_id: "1706",
        name: "Sungai Rumbai",
      },
      {
        id: "170701",
        city_id: "1707",
        name: "Lebong Utara",
      },
      {
        id: "170702",
        city_id: "1707",
        name: "Lebong Atas",
      },
      {
        id: "170703",
        city_id: "1707",
        name: "Lebong Tengah",
      },
      {
        id: "170704",
        city_id: "1707",
        name: "Lebong Selatan",
      },
      {
        id: "170705",
        city_id: "1707",
        name: "Rimbo Pengadang",
      },
      {
        id: "170706",
        city_id: "1707",
        name: "Topos",
      },
      {
        id: "170707",
        city_id: "1707",
        name: "Bingin Kuning",
      },
      {
        id: "170708",
        city_id: "1707",
        name: "Lebong Sakti",
      },
      {
        id: "170709",
        city_id: "1707",
        name: "Pelabai",
      },
      {
        id: "170710",
        city_id: "1707",
        name: "Amen",
      },
      {
        id: "170711",
        city_id: "1707",
        name: "Uram Jaya",
      },
      {
        id: "170712",
        city_id: "1707",
        name: "Pinang Belapis",
      },
      {
        id: "170801",
        city_id: "1708",
        name: "Bermani Ilir",
      },
      {
        id: "170802",
        city_id: "1708",
        name: "Ujan Mas",
      },
      {
        id: "170803",
        city_id: "1708",
        name: "Tebat Karai",
      },
      {
        id: "170804",
        city_id: "1708",
        name: "Kepahiang",
      },
      {
        id: "170805",
        city_id: "1708",
        name: "Merigi",
      },
      {
        id: "170806",
        city_id: "1708",
        name: "Kebawetan",
      },
      {
        id: "170807",
        city_id: "1708",
        name: "Seberang Musi",
      },
      {
        id: "170808",
        city_id: "1708",
        name: "Muara Kemumu",
      },
      {
        id: "170901",
        city_id: "1709",
        name: "Karang Tinggi",
      },
      {
        id: "170902",
        city_id: "1709",
        name: "Talang Empat",
      },
      {
        id: "170903",
        city_id: "1709",
        name: "Pondok Kelapa",
      },
      {
        id: "170904",
        city_id: "1709",
        name: "Pematang Tiga",
      },
      {
        id: "170905",
        city_id: "1709",
        name: "Pagar Jati",
      },
      {
        id: "170906",
        city_id: "1709",
        name: "Taba Penanjung",
      },
      {
        id: "170907",
        city_id: "1709",
        name: "Merigi Kelindang",
      },
      {
        id: "170908",
        city_id: "1709",
        name: "Merigi Sakti",
      },
      {
        id: "170909",
        city_id: "1709",
        name: "Pondok Kubang",
      },
      {
        id: "170910",
        city_id: "1709",
        name: "Bang Haji",
      },
      {
        id: "170911",
        city_id: "1709",
        name: "Semidang Lagan",
      },
      {
        id: "177101",
        city_id: "1771",
        name: "Selebar",
      },
      {
        id: "177102",
        city_id: "1771",
        name: "Gading Cempaka",
      },
      {
        id: "177103",
        city_id: "1771",
        name: "Teluk Segara",
      },
      {
        id: "177104",
        city_id: "1771",
        name: "Muara Bangka Hulu",
      },
      {
        id: "177105",
        city_id: "1771",
        name: "Kampung Melayu",
      },
      {
        id: "177106",
        city_id: "1771",
        name: "Ratu Agung",
      },
      {
        id: "177107",
        city_id: "1771",
        name: "Ratu Samban",
      },
      {
        id: "177108",
        city_id: "1771",
        name: "Sungai Serut",
      },
      {
        id: "177109",
        city_id: "1771",
        name: "Singaran Pati",
      },
      {
        id: "180104",
        city_id: "1801",
        name: "Natar",
      },
      {
        id: "180105",
        city_id: "1801",
        name: "Tanjung Bintang",
      },
      {
        id: "180106",
        city_id: "1801",
        name: "Kalianda",
      },
      {
        id: "180107",
        city_id: "1801",
        name: "Sidomulyo",
      },
      {
        id: "180108",
        city_id: "1801",
        name: "Katibung",
      },
      {
        id: "180109",
        city_id: "1801",
        name: "Penengahan",
      },
      {
        id: "180110",
        city_id: "1801",
        name: "Palas",
      },
      {
        id: "180113",
        city_id: "1801",
        name: "Jati Agung",
      },
      {
        id: "180114",
        city_id: "1801",
        name: "Ketapang",
      },
      {
        id: "180115",
        city_id: "1801",
        name: "Sragi",
      },
      {
        id: "180116",
        city_id: "1801",
        name: "Raja Basa",
      },
      {
        id: "180117",
        city_id: "1801",
        name: "Candipuro",
      },
      {
        id: "180118",
        city_id: "1801",
        name: "Merbau Mataram",
      },
      {
        id: "180121",
        city_id: "1801",
        name: "Bakauheni",
      },
      {
        id: "180122",
        city_id: "1801",
        name: "Tanjung Sari",
      },
      {
        id: "180123",
        city_id: "1801",
        name: "Way Sulan",
      },
      {
        id: "180124",
        city_id: "1801",
        name: "Way Panji",
      },
      {
        id: "180201",
        city_id: "1802",
        name: "Kalirejo",
      },
      {
        id: "180202",
        city_id: "1802",
        name: "Bangun Rejo",
      },
      {
        id: "180203",
        city_id: "1802",
        name: "Padang Ratu",
      },
      {
        id: "180204",
        city_id: "1802",
        name: "Gunung Sugih",
      },
      {
        id: "180205",
        city_id: "1802",
        name: "Trimurjo",
      },
      {
        id: "180206",
        city_id: "1802",
        name: "Punggur",
      },
      {
        id: "180207",
        city_id: "1802",
        name: "Terbanggi Besar",
      },
      {
        id: "180208",
        city_id: "1802",
        name: "Seputih Raman",
      },
      {
        id: "180209",
        city_id: "1802",
        name: "Rumbia",
      },
      {
        id: "180210",
        city_id: "1802",
        name: "Seputih Banyak",
      },
      {
        id: "180211",
        city_id: "1802",
        name: "Seputih Mataram",
      },
      {
        id: "180212",
        city_id: "1802",
        name: "Seputih Surabaya",
      },
      {
        id: "180213",
        city_id: "1802",
        name: "Terusan Nunyai",
      },
      {
        id: "180214",
        city_id: "1802",
        name: "Bumi Ratu Nuban",
      },
      {
        id: "180215",
        city_id: "1802",
        name: "Bekri",
      },
      {
        id: "180216",
        city_id: "1802",
        name: "Seputih Agung",
      },
      {
        id: "180217",
        city_id: "1802",
        name: "Way Pangubuan",
      },
      {
        id: "180218",
        city_id: "1802",
        name: "Bandar Mataram",
      },
      {
        id: "180219",
        city_id: "1802",
        name: "Pubian",
      },
      {
        id: "180220",
        city_id: "1802",
        name: "Selagai Lingga",
      },
      {
        id: "180221",
        city_id: "1802",
        name: "Anak Tuha",
      },
      {
        id: "180222",
        city_id: "1802",
        name: "Sendang Agung",
      },
      {
        id: "180223",
        city_id: "1802",
        name: "Kota Gajah",
      },
      {
        id: "180224",
        city_id: "1802",
        name: "Bumi Nabung",
      },
      {
        id: "180225",
        city_id: "1802",
        name: "Way Seputih",
      },
      {
        id: "180226",
        city_id: "1802",
        name: "Bandar Surabaya",
      },
      {
        id: "180227",
        city_id: "1802",
        name: "Anak Ratu Aji",
      },
      {
        id: "180228",
        city_id: "1802",
        name: "Putra Rumbia",
      },
      {
        id: "180301",
        city_id: "1803",
        name: "Bukit Kemuning",
      },
      {
        id: "180302",
        city_id: "1803",
        name: "Kotabumi",
      },
      {
        id: "180303",
        city_id: "1803",
        name: "Sungkai Selatan",
      },
      {
        id: "180304",
        city_id: "1803",
        name: "Tanjung Raja",
      },
      {
        id: "180305",
        city_id: "1803",
        name: "Abung Timur",
      },
      {
        id: "180306",
        city_id: "1803",
        name: "Abung Barat",
      },
      {
        id: "180307",
        city_id: "1803",
        name: "Abung Selatan",
      },
      {
        id: "180308",
        city_id: "1803",
        name: "Sungkai Utara",
      },
      {
        id: "180309",
        city_id: "1803",
        name: "Kotabumi Utara",
      },
      {
        id: "180310",
        city_id: "1803",
        name: "Kotabumi Selatan",
      },
      {
        id: "180311",
        city_id: "1803",
        name: "Abung Tengah",
      },
      {
        id: "180312",
        city_id: "1803",
        name: "Abung Tinggi",
      },
      {
        id: "180313",
        city_id: "1803",
        name: "Abung Semuli",
      },
      {
        id: "180314",
        city_id: "1803",
        name: "Abung Surakarta",
      },
      {
        id: "180315",
        city_id: "1803",
        name: "Muara Sungkai",
      },
      {
        id: "180316",
        city_id: "1803",
        name: "Bunga Mayang",
      },
      {
        id: "180317",
        city_id: "1803",
        name: "Hulu Sungkai",
      },
      {
        id: "180318",
        city_id: "1803",
        name: "Sungkai Tengah",
      },
      {
        id: "180319",
        city_id: "1803",
        name: "Abung Pekurun",
      },
      {
        id: "180320",
        city_id: "1803",
        name: "Sungkai Jaya",
      },
      {
        id: "180321",
        city_id: "1803",
        name: "Sungkai Barat",
      },
      {
        id: "180322",
        city_id: "1803",
        name: "Abung Kunang",
      },
      {
        id: "180323",
        city_id: "1803",
        name: "Blambangan Pagar",
      },
      {
        id: "180404",
        city_id: "1804",
        name: "Balik Bukit",
      },
      {
        id: "180405",
        city_id: "1804",
        name: "Sumber Jaya",
      },
      {
        id: "180406",
        city_id: "1804",
        name: "Belalau",
      },
      {
        id: "180407",
        city_id: "1804",
        name: "Way Tenong",
      },
      {
        id: "180408",
        city_id: "1804",
        name: "Sekincau",
      },
      {
        id: "180409",
        city_id: "1804",
        name: "Suoh",
      },
      {
        id: "180410",
        city_id: "1804",
        name: "Batu Brak",
      },
      {
        id: "180411",
        city_id: "1804",
        name: "Sukau",
      },
      {
        id: "180415",
        city_id: "1804",
        name: "Gedung Surian",
      },
      {
        id: "180418",
        city_id: "1804",
        name: "Kebun Tebu",
      },
      {
        id: "180419",
        city_id: "1804",
        name: "Air Hitam",
      },
      {
        id: "180420",
        city_id: "1804",
        name: "Pagar Dewa",
      },
      {
        id: "180421",
        city_id: "1804",
        name: "Batu Ketulis",
      },
      {
        id: "180422",
        city_id: "1804",
        name: "Lumbok Seminung",
      },
      {
        id: "180423",
        city_id: "1804",
        name: "Bandar Negeri Suoh",
      },
      {
        id: "180502",
        city_id: "1805",
        name: "Menggala",
      },
      {
        id: "180506",
        city_id: "1805",
        name: "Gedung Aji",
      },
      {
        id: "180508",
        city_id: "1805",
        name: "Banjar Agung",
      },
      {
        id: "180511",
        city_id: "1805",
        name: "Gedung Meneng",
      },
      {
        id: "180512",
        city_id: "1805",
        name: "Rawa Jitu Selatan",
      },
      {
        id: "180513",
        city_id: "1805",
        name: "Penawar Tama",
      },
      {
        id: "180518",
        city_id: "1805",
        name: "Rawa Jitu Timur",
      },
      {
        id: "180520",
        city_id: "1805",
        name: "Banjar Margo",
      },
      {
        id: "180522",
        city_id: "1805",
        name: "Rawa Pitu",
      },
      {
        id: "180523",
        city_id: "1805",
        name: "Penawar Aji",
      },
      {
        id: "180525",
        city_id: "1805",
        name: "Dente Teladas",
      },
      {
        id: "180526",
        city_id: "1805",
        name: "Meraksa Aji",
      },
      {
        id: "180527",
        city_id: "1805",
        name: "Gedung Aji Baru",
      },
      {
        id: "180529",
        city_id: "1805",
        name: "Banjar Baru",
      },
      {
        id: "180530",
        city_id: "1805",
        name: "Menggala Timur",
      },
      {
        id: "180601",
        city_id: "1806",
        name: "Kota Agung",
      },
      {
        id: "180602",
        city_id: "1806",
        name: "Talang Padang",
      },
      {
        id: "180603",
        city_id: "1806",
        name: "Wonosobo",
      },
      {
        id: "180604",
        city_id: "1806",
        name: "Pulau Panggung",
      },
      {
        id: "180609",
        city_id: "1806",
        name: "Cukuh Balak",
      },
      {
        id: "180611",
        city_id: "1806",
        name: "Pugung",
      },
      {
        id: "180612",
        city_id: "1806",
        name: "Semaka",
      },
      {
        id: "180613",
        city_id: "1806",
        name: "Sumber Rejo",
      },
      {
        id: "180615",
        city_id: "1806",
        name: "Ulu Belu",
      },
      {
        id: "180616",
        city_id: "1806",
        name: "Pematang Sawa",
      },
      {
        id: "180617",
        city_id: "1806",
        name: "Klumbayan",
      },
      {
        id: "180618",
        city_id: "1806",
        name: "Kota Agung Barat",
      },
      {
        id: "180619",
        city_id: "1806",
        name: "Kota Agung Timur",
      },
      {
        id: "180620",
        city_id: "1806",
        name: "Gisting",
      },
      {
        id: "180621",
        city_id: "1806",
        name: "Gunung Alip",
      },
      {
        id: "180624",
        city_id: "1806",
        name: "Limau",
      },
      {
        id: "180625",
        city_id: "1806",
        name: "Bandar Negeri Semuong",
      },
      {
        id: "180626",
        city_id: "1806",
        name: "Air Naningan",
      },
      {
        id: "180627",
        city_id: "1806",
        name: "Bulok",
      },
      {
        id: "180628",
        city_id: "1806",
        name: "Klumbayan Barat",
      },
      {
        id: "180701",
        city_id: "1807",
        name: "Sukadana",
      },
      {
        id: "180702",
        city_id: "1807",
        name: "Labuhan Maringgai",
      },
      {
        id: "180703",
        city_id: "1807",
        name: "Jabung",
      },
      {
        id: "180704",
        city_id: "1807",
        name: "Pekalongan",
      },
      {
        id: "180705",
        city_id: "1807",
        name: "Sekampung",
      },
      {
        id: "180706",
        city_id: "1807",
        name: "Batanghari",
      },
      {
        id: "180707",
        city_id: "1807",
        name: "Way Jepara",
      },
      {
        id: "180708",
        city_id: "1807",
        name: "Purbolinggo",
      },
      {
        id: "180709",
        city_id: "1807",
        name: "Raman Utara",
      },
      {
        id: "180710",
        city_id: "1807",
        name: "Metro Kibang",
      },
      {
        id: "180711",
        city_id: "1807",
        name: "Marga Tiga",
      },
      {
        id: "180712",
        city_id: "1807",
        name: "Sekampung Udik",
      },
      {
        id: "180713",
        city_id: "1807",
        name: "Batanghari Nuban",
      },
      {
        id: "180714",
        city_id: "1807",
        name: "Bumi Agung",
      },
      {
        id: "180715",
        city_id: "1807",
        name: "Bandar Sribhawono",
      },
      {
        id: "180716",
        city_id: "1807",
        name: "Mataram Baru",
      },
      {
        id: "180717",
        city_id: "1807",
        name: "Melinting",
      },
      {
        id: "180718",
        city_id: "1807",
        name: "Gunung Pelindung",
      },
      {
        id: "180719",
        city_id: "1807",
        name: "Pasir Sakti",
      },
      {
        id: "180720",
        city_id: "1807",
        name: "Waway Karya",
      },
      {
        id: "180721",
        city_id: "1807",
        name: "Labuhan Ratu",
      },
      {
        id: "180722",
        city_id: "1807",
        name: "Braja Selebah",
      },
      {
        id: "180723",
        city_id: "1807",
        name: "Way Bungur",
      },
      {
        id: "180724",
        city_id: "1807",
        name: "Marga Sekampung",
      },
      {
        id: "180801",
        city_id: "1808",
        name: "Blambangan Umpu",
      },
      {
        id: "180802",
        city_id: "1808",
        name: "Kasui",
      },
      {
        id: "180803",
        city_id: "1808",
        name: "Banjit",
      },
      {
        id: "180804",
        city_id: "1808",
        name: "Baradatu",
      },
      {
        id: "180805",
        city_id: "1808",
        name: "Bahuga",
      },
      {
        id: "180806",
        city_id: "1808",
        name: "Pakuan Ratu",
      },
      {
        id: "180807",
        city_id: "1808",
        name: "Negeri Agung",
      },
      {
        id: "180808",
        city_id: "1808",
        name: "Way Tuba",
      },
      {
        id: "180809",
        city_id: "1808",
        name: "Rebang Tangkas",
      },
      {
        id: "180810",
        city_id: "1808",
        name: "Gunung Labuhan",
      },
      {
        id: "180811",
        city_id: "1808",
        name: "Negara Batin",
      },
      {
        id: "180812",
        city_id: "1808",
        name: "Negeri Besar",
      },
      {
        id: "180813",
        city_id: "1808",
        name: "Buay Bahuga",
      },
      {
        id: "180814",
        city_id: "1808",
        name: "Bumi Agung",
      },
      {
        id: "180901",
        city_id: "1809",
        name: "Gedong Tataan",
      },
      {
        id: "180902",
        city_id: "1809",
        name: "Negeri Katon",
      },
      {
        id: "180903",
        city_id: "1809",
        name: "Tegineneng",
      },
      {
        id: "180904",
        city_id: "1809",
        name: "Way Lima",
      },
      {
        id: "180905",
        city_id: "1809",
        name: "Padang Cermin",
      },
      {
        id: "180906",
        city_id: "1809",
        name: "Punduh Pidada",
      },
      {
        id: "180907",
        city_id: "1809",
        name: "Kedondong",
      },
      {
        id: "180908",
        city_id: "1809",
        name: "Marga Punduh",
      },
      {
        id: "180909",
        city_id: "1809",
        name: "Way Khilau",
      },
      {
        id: "180910",
        city_id: "1809",
        name: "Teluk Pandan",
      },
      {
        id: "180911",
        city_id: "1809",
        name: "Way Ratai",
      },
      {
        id: "181001",
        city_id: "1810",
        name: "Pringsewu",
      },
      {
        id: "181002",
        city_id: "1810",
        name: "Gading Rejo",
      },
      {
        id: "181003",
        city_id: "1810",
        name: "Ambarawa",
      },
      {
        id: "181004",
        city_id: "1810",
        name: "Pardasuka",
      },
      {
        id: "181005",
        city_id: "1810",
        name: "Pagelaran",
      },
      {
        id: "181006",
        city_id: "1810",
        name: "Banyumas",
      },
      {
        id: "181007",
        city_id: "1810",
        name: "Adiluwih",
      },
      {
        id: "181008",
        city_id: "1810",
        name: "Sukoharjo",
      },
      {
        id: "181009",
        city_id: "1810",
        name: "Pagelaran Utara",
      },
      {
        id: "181101",
        city_id: "1811",
        name: "Mesuji",
      },
      {
        id: "181102",
        city_id: "1811",
        name: "Mesuji Timur",
      },
      {
        id: "181103",
        city_id: "1811",
        name: "Rawa Jitu Utara",
      },
      {
        id: "181104",
        city_id: "1811",
        name: "Way Serdang",
      },
      {
        id: "181105",
        city_id: "1811",
        name: "Simpang Pematang",
      },
      {
        id: "181106",
        city_id: "1811",
        name: "Panca Jaya",
      },
      {
        id: "181107",
        city_id: "1811",
        name: "Tanjung Raya",
      },
      {
        id: "181201",
        city_id: "1812",
        name: "Tulang Bawang Tengah",
      },
      {
        id: "181202",
        city_id: "1812",
        name: "Tumijajar",
      },
      {
        id: "181203",
        city_id: "1812",
        name: "Tulang Bawang Udik",
      },
      {
        id: "181204",
        city_id: "1812",
        name: "Gunung Terang",
      },
      {
        id: "181205",
        city_id: "1812",
        name: "Gunung Agung",
      },
      {
        id: "181206",
        city_id: "1812",
        name: "Way Kenanga",
      },
      {
        id: "181207",
        city_id: "1812",
        name: "Lambu Kibang",
      },
      {
        id: "181208",
        city_id: "1812",
        name: "Pagar Dewa",
      },
      {
        id: "181209",
        city_id: "1812",
        name: "Batu Putih",
      },
      {
        id: "181301",
        city_id: "1813",
        name: "Pesisir Tengah",
      },
      {
        id: "181302",
        city_id: "1813",
        name: "Pesisir Selatan",
      },
      {
        id: "181303",
        city_id: "1813",
        name: "Lemong",
      },
      {
        id: "181304",
        city_id: "1813",
        name: "Pesisir Utara",
      },
      {
        id: "181305",
        city_id: "1813",
        name: "Karya Penggawa",
      },
      {
        id: "181306",
        city_id: "1813",
        name: "Pulaupisang",
      },
      {
        id: "181307",
        city_id: "1813",
        name: "Way Krui",
      },
      {
        id: "181308",
        city_id: "1813",
        name: "Krui Selatan",
      },
      {
        id: "181309",
        city_id: "1813",
        name: "Ngambur",
      },
      {
        id: "181310",
        city_id: "1813",
        name: "Ngaras",
      },
      {
        id: "181311",
        city_id: "1813",
        name: "Bangkunat",
      },
      {
        id: "187101",
        city_id: "1871",
        name: "Kedaton",
      },
      {
        id: "187102",
        city_id: "1871",
        name: "Sukarame",
      },
      {
        id: "187103",
        city_id: "1871",
        name: "Tanjungkarang Barat",
      },
      {
        id: "187104",
        city_id: "1871",
        name: "Panjang",
      },
      {
        id: "187105",
        city_id: "1871",
        name: "Tanjungkarang Timur",
      },
      {
        id: "187106",
        city_id: "1871",
        name: "Tanjungkarang Pusat",
      },
      {
        id: "187107",
        city_id: "1871",
        name: "Telukbetung Selatan",
      },
      {
        id: "187108",
        city_id: "1871",
        name: "Telukbetung Barat",
      },
      {
        id: "187109",
        city_id: "1871",
        name: "Telukbetung Utara",
      },
      {
        id: "187110",
        city_id: "1871",
        name: "Rajabasa",
      },
      {
        id: "187111",
        city_id: "1871",
        name: "Tanjung Senang",
      },
      {
        id: "187112",
        city_id: "1871",
        name: "Sukabumi",
      },
      {
        id: "187113",
        city_id: "1871",
        name: "Kemiling",
      },
      {
        id: "187114",
        city_id: "1871",
        name: "Labuhan Ratu",
      },
      {
        id: "187115",
        city_id: "1871",
        name: "Way Halim",
      },
      {
        id: "187116",
        city_id: "1871",
        name: "Langkapura",
      },
      {
        id: "187117",
        city_id: "1871",
        name: "Enggal",
      },
      {
        id: "187118",
        city_id: "1871",
        name: "Kedamaian",
      },
      {
        id: "187119",
        city_id: "1871",
        name: "Telukbetung Timur",
      },
      {
        id: "187120",
        city_id: "1871",
        name: "Bumi Waras",
      },
      {
        id: "187201",
        city_id: "1872",
        name: "Metro Pusat",
      },
      {
        id: "187202",
        city_id: "1872",
        name: "Metro Utara",
      },
      {
        id: "187203",
        city_id: "1872",
        name: "Metro Barat",
      },
      {
        id: "187204",
        city_id: "1872",
        name: "Metro Timur",
      },
      {
        id: "187205",
        city_id: "1872",
        name: "Metro Selatan",
      },
      {
        id: "190101",
        city_id: "1901",
        name: "Sungailiat",
      },
      {
        id: "190102",
        city_id: "1901",
        name: "Belinyu",
      },
      {
        id: "190103",
        city_id: "1901",
        name: "Merawang",
      },
      {
        id: "190104",
        city_id: "1901",
        name: "Mendo Barat",
      },
      {
        id: "190105",
        city_id: "1901",
        name: "Pemali",
      },
      {
        id: "190106",
        city_id: "1901",
        name: "Bakam",
      },
      {
        id: "190107",
        city_id: "1901",
        name: "Riau Silip",
      },
      {
        id: "190108",
        city_id: "1901",
        name: "Puding Besar",
      },
      {
        id: "190201",
        city_id: "1902",
        name: "Tanjung Pandan",
      },
      {
        id: "190202",
        city_id: "1902",
        name: "Membalong",
      },
      {
        id: "190203",
        city_id: "1902",
        name: "Selat Nasik",
      },
      {
        id: "190204",
        city_id: "1902",
        name: "Sijuk",
      },
      {
        id: "190205",
        city_id: "1902",
        name: "Badau",
      },
      {
        id: "190301",
        city_id: "1903",
        name: "Toboali",
      },
      {
        id: "190302",
        city_id: "1903",
        name: "Lepar Pongok",
      },
      {
        id: "190303",
        city_id: "1903",
        name: "Air Gegas",
      },
      {
        id: "190304",
        city_id: "1903",
        name: "Simpang Rimba",
      },
      {
        id: "190305",
        city_id: "1903",
        name: "Payung",
      },
      {
        id: "190306",
        city_id: "1903",
        name: "Tukak Sadai",
      },
      {
        id: "190307",
        city_id: "1903",
        name: "Pulaubesar",
      },
      {
        id: "190308",
        city_id: "1903",
        name: "Kepulauan Pongok",
      },
      {
        id: "190401",
        city_id: "1904",
        name: "Koba",
      },
      {
        id: "190402",
        city_id: "1904",
        name: "Pangkalan Baru",
      },
      {
        id: "190403",
        city_id: "1904",
        name: "Sungai Selan",
      },
      {
        id: "190404",
        city_id: "1904",
        name: "Simpang Katis",
      },
      {
        id: "190405",
        city_id: "1904",
        name: "Namang",
      },
      {
        id: "190406",
        city_id: "1904",
        name: "Lubuk Besar",
      },
      {
        id: "190501",
        city_id: "1905",
        name: "Muntok",
      },
      {
        id: "190502",
        city_id: "1905",
        name: "Simpang Teritip",
      },
      {
        id: "190503",
        city_id: "1905",
        name: "Jebus",
      },
      {
        id: "190504",
        city_id: "1905",
        name: "Kelapa",
      },
      {
        id: "190505",
        city_id: "1905",
        name: "Tempilang",
      },
      {
        id: "190506",
        city_id: "1905",
        name: "Parittiga",
      },
      {
        id: "190601",
        city_id: "1906",
        name: "Manggar",
      },
      {
        id: "190602",
        city_id: "1906",
        name: "Gantung",
      },
      {
        id: "190603",
        city_id: "1906",
        name: "Dendang",
      },
      {
        id: "190604",
        city_id: "1906",
        name: "Kelapa Kampit",
      },
      {
        id: "190605",
        city_id: "1906",
        name: "Damar",
      },
      {
        id: "190606",
        city_id: "1906",
        name: "Simpang Renggiang",
      },
      {
        id: "190607",
        city_id: "1906",
        name: "Simpang Pesak",
      },
      {
        id: "197101",
        city_id: "1971",
        name: "Bukitintan",
      },
      {
        id: "197102",
        city_id: "1971",
        name: "Taman Sari",
      },
      {
        id: "197103",
        city_id: "1971",
        name: "Pangkal Balam",
      },
      {
        id: "197104",
        city_id: "1971",
        name: "Rangkui",
      },
      {
        id: "197105",
        city_id: "1971",
        name: "Gerunggang",
      },
      {
        id: "197106",
        city_id: "1971",
        name: "Gabek",
      },
      {
        id: "197107",
        city_id: "1971",
        name: "Girimaya",
      },
      {
        id: "210104",
        city_id: "2101",
        name: "Gunung Kijang",
      },
      {
        id: "210106",
        city_id: "2101",
        name: "Bintan Timur",
      },
      {
        id: "210107",
        city_id: "2101",
        name: "Bintan Utara",
      },
      {
        id: "210108",
        city_id: "2101",
        name: "Teluk Bintan",
      },
      {
        id: "210109",
        city_id: "2101",
        name: "Tambelan",
      },
      {
        id: "210110",
        city_id: "2101",
        name: "Telok Sebong",
      },
      {
        id: "210112",
        city_id: "2101",
        name: "Toapaya",
      },
      {
        id: "210113",
        city_id: "2101",
        name: "Mantang",
      },
      {
        id: "210114",
        city_id: "2101",
        name: "Bintan Pesisir",
      },
      {
        id: "210115",
        city_id: "2101",
        name: "Seri Kuala Lobam",
      },
      {
        id: "210201",
        city_id: "2102",
        name: "Moro",
      },
      {
        id: "210202",
        city_id: "2102",
        name: "Kundur",
      },
      {
        id: "210203",
        city_id: "2102",
        name: "Karimun",
      },
      {
        id: "210204",
        city_id: "2102",
        name: "Meral",
      },
      {
        id: "210205",
        city_id: "2102",
        name: "Tebing",
      },
      {
        id: "210206",
        city_id: "2102",
        name: "Buru",
      },
      {
        id: "210207",
        city_id: "2102",
        name: "Kundur Utara",
      },
      {
        id: "210208",
        city_id: "2102",
        name: "Kundur Barat",
      },
      {
        id: "210209",
        city_id: "2102",
        name: "Durai",
      },
      {
        id: "210210",
        city_id: "2102",
        name: "Meral Barat",
      },
      {
        id: "210211",
        city_id: "2102",
        name: "Ungar",
      },
      {
        id: "210212",
        city_id: "2102",
        name: "Belat",
      },
      {
        id: "210304",
        city_id: "2103",
        name: "Midai",
      },
      {
        id: "210305",
        city_id: "2103",
        name: "Bunguran Barat",
      },
      {
        id: "210306",
        city_id: "2103",
        name: "Serasan",
      },
      {
        id: "210307",
        city_id: "2103",
        name: "Bunguran Timur",
      },
      {
        id: "210308",
        city_id: "2103",
        name: "Bunguran Utara",
      },
      {
        id: "210309",
        city_id: "2103",
        name: "Subi",
      },
      {
        id: "210310",
        city_id: "2103",
        name: "Pulau Laut",
      },
      {
        id: "210311",
        city_id: "2103",
        name: "Pulau Tiga",
      },
      {
        id: "210315",
        city_id: "2103",
        name: "Bunguran Timur Laut",
      },
      {
        id: "210316",
        city_id: "2103",
        name: "Bunguran Tengah",
      },
      {
        id: "210318",
        city_id: "2103",
        name: "Bunguran Selatan",
      },
      {
        id: "210319",
        city_id: "2103",
        name: "Serasan Timur",
      },
      {
        id: "210320",
        city_id: "2103",
        name: "Bunguran Batubi",
      },
      {
        id: "210321",
        city_id: "2103",
        name: "Pulau Tiga Barat",
      },
      {
        id: "210322",
        city_id: "2103",
        name: "Suak Midai",
      },
      {
        id: "210401",
        city_id: "2104",
        name: "Singkep",
      },
      {
        id: "210402",
        city_id: "2104",
        name: "Lingga",
      },
      {
        id: "210403",
        city_id: "2104",
        name: "Senayang",
      },
      {
        id: "210404",
        city_id: "2104",
        name: "Singkep Barat",
      },
      {
        id: "210405",
        city_id: "2104",
        name: "Lingga Utara",
      },
      {
        id: "210406",
        city_id: "2104",
        name: "Singkep Pesisir",
      },
      {
        id: "210407",
        city_id: "2104",
        name: "Lingga Timur",
      },
      {
        id: "210408",
        city_id: "2104",
        name: "Selayar",
      },
      {
        id: "210409",
        city_id: "2104",
        name: "Singkep Selatan",
      },
      {
        id: "210410",
        city_id: "2104",
        name: "Kepulauan Posek",
      },
      {
        id: "210411",
        city_id: "2104",
        name: "Katang Bidare",
      },
      {
        id: "210412",
        city_id: "2104",
        name: "Temiang Pesisir",
      },
      {
        id: "210413",
        city_id: "2104",
        name: "Bakung Serumpun",
      },
      {
        id: "210501",
        city_id: "2105",
        name: "Siantan",
      },
      {
        id: "210502",
        city_id: "2105",
        name: "Palmatak",
      },
      {
        id: "210503",
        city_id: "2105",
        name: "Siantan Timur",
      },
      {
        id: "210504",
        city_id: "2105",
        name: "Siantan Selatan",
      },
      {
        id: "210505",
        city_id: "2105",
        name: "Jemaja Timur",
      },
      {
        id: "210506",
        city_id: "2105",
        name: "Jemaja",
      },
      {
        id: "210507",
        city_id: "2105",
        name: "Siantan Tengah",
      },
      {
        id: "210508",
        city_id: "2105",
        name: "Siantan Utara",
      },
      {
        id: "210509",
        city_id: "2105",
        name: "Jemaja Barat",
      },
      {
        id: "217101",
        city_id: "2171",
        name: "Belakang Padang",
      },
      {
        id: "217102",
        city_id: "2171",
        name: "Batu Ampar",
      },
      {
        id: "217103",
        city_id: "2171",
        name: "Sekupang",
      },
      {
        id: "217104",
        city_id: "2171",
        name: "Nongsa",
      },
      {
        id: "217105",
        city_id: "2171",
        name: "Bulang",
      },
      {
        id: "217106",
        city_id: "2171",
        name: "Lubuk Baja",
      },
      {
        id: "217107",
        city_id: "2171",
        name: "Sei Beduk",
      },
      {
        id: "217108",
        city_id: "2171",
        name: "Galang",
      },
      {
        id: "217109",
        city_id: "2171",
        name: "Bengkong",
      },
      {
        id: "217110",
        city_id: "2171",
        name: "Batam Kota",
      },
      {
        id: "217111",
        city_id: "2171",
        name: "Sagulung",
      },
      {
        id: "217112",
        city_id: "2171",
        name: "Batu Aji",
      },
      {
        id: "217201",
        city_id: "2172",
        name: "Tanjung Pinang Barat",
      },
      {
        id: "217202",
        city_id: "2172",
        name: "Tanjung Pinang Timur",
      },
      {
        id: "217203",
        city_id: "2172",
        name: "Tanjung Pinang Kota",
      },
      {
        id: "217204",
        city_id: "2172",
        name: "Bukit Bestari",
      },
      {
        id: "310101",
        city_id: "3101",
        name: "Kepulauan Seribu Utara",
      },
      {
        id: "310102",
        city_id: "3101",
        name: "Kepulauan Seribu Selatan.",
      },
      {
        id: "317101",
        city_id: "3171",
        name: "Gambir",
      },
      {
        id: "317102",
        city_id: "3171",
        name: "Sawah Besar",
      },
      {
        id: "317103",
        city_id: "3171",
        name: "Kemayoran",
      },
      {
        id: "317104",
        city_id: "3171",
        name: "Senen",
      },
      {
        id: "317105",
        city_id: "3171",
        name: "Cempaka Putih",
      },
      {
        id: "317106",
        city_id: "3171",
        name: "Menteng",
      },
      {
        id: "317107",
        city_id: "3171",
        name: "Tanah Abang",
      },
      {
        id: "317108",
        city_id: "3171",
        name: "Johar Baru",
      },
      {
        id: "317201",
        city_id: "3172",
        name: "Penjaringan",
      },
      {
        id: "317202",
        city_id: "3172",
        name: "Tanjung Priok",
      },
      {
        id: "317203",
        city_id: "3172",
        name: "Koja",
      },
      {
        id: "317204",
        city_id: "3172",
        name: "Cilincing",
      },
      {
        id: "317205",
        city_id: "3172",
        name: "Pademangan",
      },
      {
        id: "317206",
        city_id: "3172",
        name: "Kelapa Gading",
      },
      {
        id: "317301",
        city_id: "3173",
        name: "Cengkareng",
      },
      {
        id: "317302",
        city_id: "3173",
        name: "Grogol Petamburan",
      },
      {
        id: "317303",
        city_id: "3173",
        name: "Taman Sari",
      },
      {
        id: "317304",
        city_id: "3173",
        name: "Tambora",
      },
      {
        id: "317305",
        city_id: "3173",
        name: "Kebon Jeruk",
      },
      {
        id: "317306",
        city_id: "3173",
        name: "Kalideres",
      },
      {
        id: "317307",
        city_id: "3173",
        name: "Pal Merah",
      },
      {
        id: "317308",
        city_id: "3173",
        name: "Kembangan",
      },
      {
        id: "317401",
        city_id: "3174",
        name: "Tebet",
      },
      {
        id: "317402",
        city_id: "3174",
        name: "Setiabudi",
      },
      {
        id: "317403",
        city_id: "3174",
        name: "Mampang Prapatan",
      },
      {
        id: "317404",
        city_id: "3174",
        name: "Pasar Minggu",
      },
      {
        id: "317405",
        city_id: "3174",
        name: "Kebayoran Lama",
      },
      {
        id: "317406",
        city_id: "3174",
        name: "Cilandak",
      },
      {
        id: "317407",
        city_id: "3174",
        name: "Kebayoran Baru",
      },
      {
        id: "317408",
        city_id: "3174",
        name: "Pancoran",
      },
      {
        id: "317409",
        city_id: "3174",
        name: "Jagakarsa",
      },
      {
        id: "317410",
        city_id: "3174",
        name: "Pesanggrahan",
      },
      {
        id: "317501",
        city_id: "3175",
        name: "Matraman",
      },
      {
        id: "317502",
        city_id: "3175",
        name: "Pulogadung",
      },
      {
        id: "317503",
        city_id: "3175",
        name: "Jatinegara",
      },
      {
        id: "317504",
        city_id: "3175",
        name: "Kramatjati",
      },
      {
        id: "317505",
        city_id: "3175",
        name: "Pasar Rebo",
      },
      {
        id: "317506",
        city_id: "3175",
        name: "Cakung",
      },
      {
        id: "317507",
        city_id: "3175",
        name: "Duren Sawit",
      },
      {
        id: "317508",
        city_id: "3175",
        name: "Makasar",
      },
      {
        id: "317509",
        city_id: "3175",
        name: "Ciracas",
      },
      {
        id: "317510",
        city_id: "3175",
        name: "Cipayung",
      },
      {
        id: "320101",
        city_id: "3201",
        name: "Cibinong",
      },
      {
        id: "320102",
        city_id: "3201",
        name: "Gunung Putri",
      },
      {
        id: "320103",
        city_id: "3201",
        name: "Citeureup",
      },
      {
        id: "320104",
        city_id: "3201",
        name: "Sukaraja",
      },
      {
        id: "320105",
        city_id: "3201",
        name: "Babakan Madang",
      },
      {
        id: "320106",
        city_id: "3201",
        name: "Jonggol",
      },
      {
        id: "320107",
        city_id: "3201",
        name: "Cileungsi",
      },
      {
        id: "320108",
        city_id: "3201",
        name: "Cariu",
      },
      {
        id: "320109",
        city_id: "3201",
        name: "Sukamakmur",
      },
      {
        id: "320110",
        city_id: "3201",
        name: "Parung",
      },
      {
        id: "320111",
        city_id: "3201",
        name: "Gunung Sindur",
      },
      {
        id: "320112",
        city_id: "3201",
        name: "Kemang",
      },
      {
        id: "320113",
        city_id: "3201",
        name: "Bojong Gede",
      },
      {
        id: "320114",
        city_id: "3201",
        name: "Leuwiliang",
      },
      {
        id: "320115",
        city_id: "3201",
        name: "Ciampea",
      },
      {
        id: "320116",
        city_id: "3201",
        name: "Cibungbulang",
      },
      {
        id: "320117",
        city_id: "3201",
        name: "Pamijahan",
      },
      {
        id: "320118",
        city_id: "3201",
        name: "Rumpin",
      },
      {
        id: "320119",
        city_id: "3201",
        name: "Jasinga",
      },
      {
        id: "320120",
        city_id: "3201",
        name: "Parung Panjang",
      },
      {
        id: "320121",
        city_id: "3201",
        name: "Nanggung",
      },
      {
        id: "320122",
        city_id: "3201",
        name: "Cigudeg",
      },
      {
        id: "320123",
        city_id: "3201",
        name: "Tenjo",
      },
      {
        id: "320124",
        city_id: "3201",
        name: "Ciawi",
      },
      {
        id: "320125",
        city_id: "3201",
        name: "Cisarua",
      },
      {
        id: "320126",
        city_id: "3201",
        name: "Megamendung",
      },
      {
        id: "320127",
        city_id: "3201",
        name: "Caringin",
      },
      {
        id: "320128",
        city_id: "3201",
        name: "Cijeruk",
      },
      {
        id: "320129",
        city_id: "3201",
        name: "Ciomas",
      },
      {
        id: "320130",
        city_id: "3201",
        name: "Dramaga",
      },
      {
        id: "320131",
        city_id: "3201",
        name: "Tamansari",
      },
      {
        id: "320132",
        city_id: "3201",
        name: "Klapanunggal",
      },
      {
        id: "320133",
        city_id: "3201",
        name: "Ciseeng",
      },
      {
        id: "320134",
        city_id: "3201",
        name: "Ranca Bungur",
      },
      {
        id: "320135",
        city_id: "3201",
        name: "Sukajaya",
      },
      {
        id: "320136",
        city_id: "3201",
        name: "Tanjungsari",
      },
      {
        id: "320137",
        city_id: "3201",
        name: "Tajurhalang",
      },
      {
        id: "320138",
        city_id: "3201",
        name: "Cigombong",
      },
      {
        id: "320139",
        city_id: "3201",
        name: "Leuwisadeng",
      },
      {
        id: "320140",
        city_id: "3201",
        name: "Tenjolaya",
      },
      {
        id: "320201",
        city_id: "3202",
        name: "Palabuhanratu",
      },
      {
        id: "320202",
        city_id: "3202",
        name: "Simpenan",
      },
      {
        id: "320203",
        city_id: "3202",
        name: "Cikakak",
      },
      {
        id: "320204",
        city_id: "3202",
        name: "Bantargadung",
      },
      {
        id: "320205",
        city_id: "3202",
        name: "Cisolok",
      },
      {
        id: "320206",
        city_id: "3202",
        name: "Cikidang",
      },
      {
        id: "320207",
        city_id: "3202",
        name: "Lengkong",
      },
      {
        id: "320208",
        city_id: "3202",
        name: "Jampangtengah",
      },
      {
        id: "320209",
        city_id: "3202",
        name: "Warungkiara",
      },
      {
        id: "320210",
        city_id: "3202",
        name: "Cikembar",
      },
      {
        id: "320211",
        city_id: "3202",
        name: "Cibadak",
      },
      {
        id: "320212",
        city_id: "3202",
        name: "Nagrak",
      },
      {
        id: "320213",
        city_id: "3202",
        name: "Parungkuda",
      },
      {
        id: "320214",
        city_id: "3202",
        name: "Bojonggenteng",
      },
      {
        id: "320215",
        city_id: "3202",
        name: "Parakansalak",
      },
      {
        id: "320216",
        city_id: "3202",
        name: "Cicurug",
      },
      {
        id: "320217",
        city_id: "3202",
        name: "Cidahu",
      },
      {
        id: "320218",
        city_id: "3202",
        name: "Kalapanunggal",
      },
      {
        id: "320219",
        city_id: "3202",
        name: "Kabandungan",
      },
      {
        id: "320220",
        city_id: "3202",
        name: "Waluran",
      },
      {
        id: "320221",
        city_id: "3202",
        name: "Jampangkulon",
      },
      {
        id: "320222",
        city_id: "3202",
        name: "Ciemas",
      },
      {
        id: "320223",
        city_id: "3202",
        name: "Kalibunder",
      },
      {
        id: "320224",
        city_id: "3202",
        name: "Surade",
      },
      {
        id: "320225",
        city_id: "3202",
        name: "Cibitung",
      },
      {
        id: "320226",
        city_id: "3202",
        name: "Ciracap",
      },
      {
        id: "320227",
        city_id: "3202",
        name: "Gunungguruh",
      },
      {
        id: "320228",
        city_id: "3202",
        name: "Cicantayan",
      },
      {
        id: "320229",
        city_id: "3202",
        name: "Cisaat",
      },
      {
        id: "320230",
        city_id: "3202",
        name: "Kadudampit",
      },
      {
        id: "320231",
        city_id: "3202",
        name: "Caringin",
      },
      {
        id: "320232",
        city_id: "3202",
        name: "Sukabumi",
      },
      {
        id: "320233",
        city_id: "3202",
        name: "Sukaraja",
      },
      {
        id: "320234",
        city_id: "3202",
        name: "Kebonpedes",
      },
      {
        id: "320235",
        city_id: "3202",
        name: "Cireunghas",
      },
      {
        id: "320236",
        city_id: "3202",
        name: "Sukalarang",
      },
      {
        id: "320237",
        city_id: "3202",
        name: "Pabuaran",
      },
      {
        id: "320238",
        city_id: "3202",
        name: "Purabaya",
      },
      {
        id: "320239",
        city_id: "3202",
        name: "Nyalindung",
      },
      {
        id: "320240",
        city_id: "3202",
        name: "Gegerbitung",
      },
      {
        id: "320241",
        city_id: "3202",
        name: "Sagaranten",
      },
      {
        id: "320242",
        city_id: "3202",
        name: "Curugkembar",
      },
      {
        id: "320243",
        city_id: "3202",
        name: "Cidolog",
      },
      {
        id: "320244",
        city_id: "3202",
        name: "Cidadap",
      },
      {
        id: "320245",
        city_id: "3202",
        name: "Tegalbuleud",
      },
      {
        id: "320246",
        city_id: "3202",
        name: "Cimanggu",
      },
      {
        id: "320247",
        city_id: "3202",
        name: "Ciambar",
      },
      {
        id: "320301",
        city_id: "3203",
        name: "Cianjur",
      },
      {
        id: "320302",
        city_id: "3203",
        name: "Warungkondang",
      },
      {
        id: "320303",
        city_id: "3203",
        name: "Cibeber",
      },
      {
        id: "320304",
        city_id: "3203",
        name: "Cilaku",
      },
      {
        id: "320305",
        city_id: "3203",
        name: "Ciranjang",
      },
      {
        id: "320306",
        city_id: "3203",
        name: "Bojongpicung",
      },
      {
        id: "320307",
        city_id: "3203",
        name: "Karangtengah",
      },
      {
        id: "320308",
        city_id: "3203",
        name: "Mande",
      },
      {
        id: "320309",
        city_id: "3203",
        name: "Sukaluyu",
      },
      {
        id: "320310",
        city_id: "3203",
        name: "Pacet",
      },
      {
        id: "320311",
        city_id: "3203",
        name: "Cugenang",
      },
      {
        id: "320312",
        city_id: "3203",
        name: "Cikalongkulon",
      },
      {
        id: "320313",
        city_id: "3203",
        name: "Sukaresmi",
      },
      {
        id: "320314",
        city_id: "3203",
        name: "Sukanagara",
      },
      {
        id: "320315",
        city_id: "3203",
        name: "Campaka",
      },
      {
        id: "320316",
        city_id: "3203",
        name: "Takokak",
      },
      {
        id: "320317",
        city_id: "3203",
        name: "Kadupandak",
      },
      {
        id: "320318",
        city_id: "3203",
        name: "Pagelaran",
      },
      {
        id: "320319",
        city_id: "3203",
        name: "Tanggeung",
      },
      {
        id: "320320",
        city_id: "3203",
        name: "Cibinong",
      },
      {
        id: "320321",
        city_id: "3203",
        name: "Sindangbarang",
      },
      {
        id: "320322",
        city_id: "3203",
        name: "Agrabinta",
      },
      {
        id: "320323",
        city_id: "3203",
        name: "Cidaun",
      },
      {
        id: "320324",
        city_id: "3203",
        name: "Naringgul",
      },
      {
        id: "320325",
        city_id: "3203",
        name: "Campakamulya",
      },
      {
        id: "320326",
        city_id: "3203",
        name: "Cikadu",
      },
      {
        id: "320327",
        city_id: "3203",
        name: "Gekbrong",
      },
      {
        id: "320328",
        city_id: "3203",
        name: "Cipanas",
      },
      {
        id: "320329",
        city_id: "3203",
        name: "Cijati",
      },
      {
        id: "320330",
        city_id: "3203",
        name: "Leles",
      },
      {
        id: "320331",
        city_id: "3203",
        name: "Haurwangi",
      },
      {
        id: "320332",
        city_id: "3203",
        name: "Pasirkuda",
      },
      {
        id: "320405",
        city_id: "3204",
        name: "Cileunyi",
      },
      {
        id: "320406",
        city_id: "3204",
        name: "Cimenyan",
      },
      {
        id: "320407",
        city_id: "3204",
        name: "Cilengkrang",
      },
      {
        id: "320408",
        city_id: "3204",
        name: "Bojongsoang",
      },
      {
        id: "320409",
        city_id: "3204",
        name: "Margahayu",
      },
      {
        id: "320410",
        city_id: "3204",
        name: "Margaasih",
      },
      {
        id: "320411",
        city_id: "3204",
        name: "Katapang",
      },
      {
        id: "320412",
        city_id: "3204",
        name: "Dayeuhkolot",
      },
      {
        id: "320413",
        city_id: "3204",
        name: "Banjaran",
      },
      {
        id: "320414",
        city_id: "3204",
        name: "Pameungpeuk",
      },
      {
        id: "320415",
        city_id: "3204",
        name: "Pangalengan",
      },
      {
        id: "320416",
        city_id: "3204",
        name: "Arjasari",
      },
      {
        id: "320417",
        city_id: "3204",
        name: "Cimaung",
      },
      {
        id: "320425",
        city_id: "3204",
        name: "Cicalengka",
      },
      {
        id: "320426",
        city_id: "3204",
        name: "Nagreg",
      },
      {
        id: "320427",
        city_id: "3204",
        name: "Cikancung",
      },
      {
        id: "320428",
        city_id: "3204",
        name: "Rancaekek",
      },
      {
        id: "320429",
        city_id: "3204",
        name: "Ciparay",
      },
      {
        id: "320430",
        city_id: "3204",
        name: "Pacet",
      },
      {
        id: "320431",
        city_id: "3204",
        name: "Kertasari",
      },
      {
        id: "320432",
        city_id: "3204",
        name: "Baleendah",
      },
      {
        id: "320433",
        city_id: "3204",
        name: "Majalaya",
      },
      {
        id: "320434",
        city_id: "3204",
        name: "Solokanjeruk",
      },
      {
        id: "320435",
        city_id: "3204",
        name: "Paseh",
      },
      {
        id: "320436",
        city_id: "3204",
        name: "Ibun",
      },
      {
        id: "320437",
        city_id: "3204",
        name: "Soreang",
      },
      {
        id: "320438",
        city_id: "3204",
        name: "Pasirjambu",
      },
      {
        id: "320439",
        city_id: "3204",
        name: "Ciwidey",
      },
      {
        id: "320440",
        city_id: "3204",
        name: "Rancabali",
      },
      {
        id: "320444",
        city_id: "3204",
        name: "Cangkuang",
      },
      {
        id: "320446",
        city_id: "3204",
        name: "Kutawaringin",
      },
      {
        id: "320501",
        city_id: "3205",
        name: "Garut Kota",
      },
      {
        id: "320502",
        city_id: "3205",
        name: "Karangpawitan",
      },
      {
        id: "320503",
        city_id: "3205",
        name: "Wanaraja",
      },
      {
        id: "320504",
        city_id: "3205",
        name: "Tarogong Kaler",
      },
      {
        id: "320505",
        city_id: "3205",
        name: "Tarogong Kidul",
      },
      {
        id: "320506",
        city_id: "3205",
        name: "Banyuresmi",
      },
      {
        id: "320507",
        city_id: "3205",
        name: "Samarang",
      },
      {
        id: "320508",
        city_id: "3205",
        name: "Pasirwangi",
      },
      {
        id: "320509",
        city_id: "3205",
        name: "Leles",
      },
      {
        id: "320510",
        city_id: "3205",
        name: "Kadungora",
      },
      {
        id: "320511",
        city_id: "3205",
        name: "Leuwigoong",
      },
      {
        id: "320512",
        city_id: "3205",
        name: "Cibatu",
      },
      {
        id: "320513",
        city_id: "3205",
        name: "Kersamanah",
      },
      {
        id: "320514",
        city_id: "3205",
        name: "Malangbong",
      },
      {
        id: "320515",
        city_id: "3205",
        name: "Sukawening",
      },
      {
        id: "320516",
        city_id: "3205",
        name: "Karangtengah",
      },
      {
        id: "320517",
        city_id: "3205",
        name: "Bayongbong",
      },
      {
        id: "320518",
        city_id: "3205",
        name: "Cigedug",
      },
      {
        id: "320519",
        city_id: "3205",
        name: "Cilawu",
      },
      {
        id: "320520",
        city_id: "3205",
        name: "Cisurupan",
      },
      {
        id: "320521",
        city_id: "3205",
        name: "Sukaresmi",
      },
      {
        id: "320522",
        city_id: "3205",
        name: "Cikajang",
      },
      {
        id: "320523",
        city_id: "3205",
        name: "Banjarwangi",
      },
      {
        id: "320524",
        city_id: "3205",
        name: "Singajaya",
      },
      {
        id: "320525",
        city_id: "3205",
        name: "Cihurip",
      },
      {
        id: "320526",
        city_id: "3205",
        name: "Peundeuy",
      },
      {
        id: "320527",
        city_id: "3205",
        name: "Pameungpeuk",
      },
      {
        id: "320528",
        city_id: "3205",
        name: "Cisompet",
      },
      {
        id: "320529",
        city_id: "3205",
        name: "Cibalong",
      },
      {
        id: "320530",
        city_id: "3205",
        name: "Cikelet",
      },
      {
        id: "320531",
        city_id: "3205",
        name: "Bungbulang",
      },
      {
        id: "320532",
        city_id: "3205",
        name: "Mekarmukti",
      },
      {
        id: "320533",
        city_id: "3205",
        name: "Pakenjeng",
      },
      {
        id: "320534",
        city_id: "3205",
        name: "Pamulihan",
      },
      {
        id: "320535",
        city_id: "3205",
        name: "Cisewu",
      },
      {
        id: "320536",
        city_id: "3205",
        name: "Caringin",
      },
      {
        id: "320537",
        city_id: "3205",
        name: "Talegong",
      },
      {
        id: "320538",
        city_id: "3205",
        name: "Bl. Limbangan",
      },
      {
        id: "320539",
        city_id: "3205",
        name: "Selaawi",
      },
      {
        id: "320540",
        city_id: "3205",
        name: "Cibiuk",
      },
      {
        id: "320541",
        city_id: "3205",
        name: "Pangatikan",
      },
      {
        id: "320542",
        city_id: "3205",
        name: "Sucinaraja",
      },
      {
        id: "320601",
        city_id: "3206",
        name: "Cipatujah",
      },
      {
        id: "320602",
        city_id: "3206",
        name: "Karangnunggal",
      },
      {
        id: "320603",
        city_id: "3206",
        name: "Cikalong",
      },
      {
        id: "320604",
        city_id: "3206",
        name: "Pancatengah",
      },
      {
        id: "320605",
        city_id: "3206",
        name: "Cikatomas",
      },
      {
        id: "320606",
        city_id: "3206",
        name: "Cibalong",
      },
      {
        id: "320607",
        city_id: "3206",
        name: "Parungponteng",
      },
      {
        id: "320608",
        city_id: "3206",
        name: "Bantarkalong",
      },
      {
        id: "320609",
        city_id: "3206",
        name: "Bojongasih",
      },
      {
        id: "320610",
        city_id: "3206",
        name: "Culamega",
      },
      {
        id: "320611",
        city_id: "3206",
        name: "Bojonggambir",
      },
      {
        id: "320612",
        city_id: "3206",
        name: "Sodonghilir",
      },
      {
        id: "320613",
        city_id: "3206",
        name: "Taraju",
      },
      {
        id: "320614",
        city_id: "3206",
        name: "Salawu",
      },
      {
        id: "320615",
        city_id: "3206",
        name: "Puspahiang",
      },
      {
        id: "320616",
        city_id: "3206",
        name: "Tanjungjaya",
      },
      {
        id: "320617",
        city_id: "3206",
        name: "Sukaraja",
      },
      {
        id: "320618",
        city_id: "3206",
        name: "Salopa",
      },
      {
        id: "320619",
        city_id: "3206",
        name: "Jatiwaras",
      },
      {
        id: "320620",
        city_id: "3206",
        name: "Cineam",
      },
      {
        id: "320621",
        city_id: "3206",
        name: "Karang Jaya",
      },
      {
        id: "320622",
        city_id: "3206",
        name: "Manonjaya",
      },
      {
        id: "320623",
        city_id: "3206",
        name: "Gunung Tanjung",
      },
      {
        id: "320624",
        city_id: "3206",
        name: "Singaparna",
      },
      {
        id: "320625",
        city_id: "3206",
        name: "Mangunreja",
      },
      {
        id: "320626",
        city_id: "3206",
        name: "Sukarame",
      },
      {
        id: "320627",
        city_id: "3206",
        name: "Cigalontang",
      },
      {
        id: "320628",
        city_id: "3206",
        name: "Leuwisari",
      },
      {
        id: "320629",
        city_id: "3206",
        name: "Padakembang",
      },
      {
        id: "320630",
        city_id: "3206",
        name: "Sariwangi",
      },
      {
        id: "320631",
        city_id: "3206",
        name: "Sukaratu",
      },
      {
        id: "320632",
        city_id: "3206",
        name: "Cisayong",
      },
      {
        id: "320633",
        city_id: "3206",
        name: "Sukahening",
      },
      {
        id: "320634",
        city_id: "3206",
        name: "Rajapolah",
      },
      {
        id: "320635",
        city_id: "3206",
        name: "Jamanis",
      },
      {
        id: "320636",
        city_id: "3206",
        name: "Ciawi",
      },
      {
        id: "320637",
        city_id: "3206",
        name: "Kadipaten",
      },
      {
        id: "320638",
        city_id: "3206",
        name: "Pagerageung",
      },
      {
        id: "320639",
        city_id: "3206",
        name: "Sukaresik",
      },
      {
        id: "320701",
        city_id: "3207",
        name: "Ciamis",
      },
      {
        id: "320702",
        city_id: "3207",
        name: "Cikoneng",
      },
      {
        id: "320703",
        city_id: "3207",
        name: "Cijeungjing",
      },
      {
        id: "320704",
        city_id: "3207",
        name: "Sadananya",
      },
      {
        id: "320705",
        city_id: "3207",
        name: "Cidolog",
      },
      {
        id: "320706",
        city_id: "3207",
        name: "Cihaurbeuti",
      },
      {
        id: "320707",
        city_id: "3207",
        name: "Panumbangan",
      },
      {
        id: "320708",
        city_id: "3207",
        name: "Panjalu",
      },
      {
        id: "320709",
        city_id: "3207",
        name: "Kawali",
      },
      {
        id: "320710",
        city_id: "3207",
        name: "Panawangan",
      },
      {
        id: "320711",
        city_id: "3207",
        name: "Cipaku",
      },
      {
        id: "320712",
        city_id: "3207",
        name: "Jatinagara",
      },
      {
        id: "320713",
        city_id: "3207",
        name: "Rajadesa",
      },
      {
        id: "320714",
        city_id: "3207",
        name: "Sukadana",
      },
      {
        id: "320715",
        city_id: "3207",
        name: "Rancah",
      },
      {
        id: "320716",
        city_id: "3207",
        name: "Tambaksari",
      },
      {
        id: "320717",
        city_id: "3207",
        name: "Lakbok",
      },
      {
        id: "320718",
        city_id: "3207",
        name: "Banjarsari",
      },
      {
        id: "320719",
        city_id: "3207",
        name: "Pamarican",
      },
      {
        id: "320729",
        city_id: "3207",
        name: "Cimaragas",
      },
      {
        id: "320730",
        city_id: "3207",
        name: "Cisaga",
      },
      {
        id: "320731",
        city_id: "3207",
        name: "Sindangkasih",
      },
      {
        id: "320732",
        city_id: "3207",
        name: "Baregbeg",
      },
      {
        id: "320733",
        city_id: "3207",
        name: "Sukamantri",
      },
      {
        id: "320734",
        city_id: "3207",
        name: "Lumbung",
      },
      {
        id: "320735",
        city_id: "3207",
        name: "Purwadadi",
      },
      {
        id: "320737",
        city_id: "3207",
        name: "Banjaranyar",
      },
      {
        id: "320801",
        city_id: "3208",
        name: "Kadugede",
      },
      {
        id: "320802",
        city_id: "3208",
        name: "Ciniru",
      },
      {
        id: "320803",
        city_id: "3208",
        name: "Subang",
      },
      {
        id: "320804",
        city_id: "3208",
        name: "Ciwaru",
      },
      {
        id: "320805",
        city_id: "3208",
        name: "Cibingbin",
      },
      {
        id: "320806",
        city_id: "3208",
        name: "Luragung",
      },
      {
        id: "320807",
        city_id: "3208",
        name: "Lebakwangi",
      },
      {
        id: "320808",
        city_id: "3208",
        name: "Garawangi",
      },
      {
        id: "320809",
        city_id: "3208",
        name: "Kuningan",
      },
      {
        id: "320810",
        city_id: "3208",
        name: "Ciawigebang",
      },
      {
        id: "320811",
        city_id: "3208",
        name: "Cidahu",
      },
      {
        id: "320812",
        city_id: "3208",
        name: "Jalaksana",
      },
      {
        id: "320813",
        city_id: "3208",
        name: "Cilimus",
      },
      {
        id: "320814",
        city_id: "3208",
        name: "Mandirancan",
      },
      {
        id: "320815",
        city_id: "3208",
        name: "Selajambe",
      },
      {
        id: "320816",
        city_id: "3208",
        name: "Kramatmulya",
      },
      {
        id: "320817",
        city_id: "3208",
        name: "Darma",
      },
      {
        id: "320818",
        city_id: "3208",
        name: "Cigugur",
      },
      {
        id: "320819",
        city_id: "3208",
        name: "Pasawahan",
      },
      {
        id: "320820",
        city_id: "3208",
        name: "Nusaherang",
      },
      {
        id: "320821",
        city_id: "3208",
        name: "Cipicung",
      },
      {
        id: "320822",
        city_id: "3208",
        name: "Pancalang",
      },
      {
        id: "320823",
        city_id: "3208",
        name: "Japara",
      },
      {
        id: "320824",
        city_id: "3208",
        name: "Cimahi",
      },
      {
        id: "320825",
        city_id: "3208",
        name: "Cilebak",
      },
      {
        id: "320826",
        city_id: "3208",
        name: "Hantara",
      },
      {
        id: "320827",
        city_id: "3208",
        name: "Kalimanggis",
      },
      {
        id: "320828",
        city_id: "3208",
        name: "Cibeureum",
      },
      {
        id: "320829",
        city_id: "3208",
        name: "Karang Kancana",
      },
      {
        id: "320830",
        city_id: "3208",
        name: "Maleber",
      },
      {
        id: "320831",
        city_id: "3208",
        name: "Sindangagung",
      },
      {
        id: "320832",
        city_id: "3208",
        name: "Cigandamekar",
      },
      {
        id: "320901",
        city_id: "3209",
        name: "Waled",
      },
      {
        id: "320902",
        city_id: "3209",
        name: "Ciledug",
      },
      {
        id: "320903",
        city_id: "3209",
        name: "Losari",
      },
      {
        id: "320904",
        city_id: "3209",
        name: "Pabedilan",
      },
      {
        id: "320905",
        city_id: "3209",
        name: "Babakan",
      },
      {
        id: "320906",
        city_id: "3209",
        name: "Karangsembung",
      },
      {
        id: "320907",
        city_id: "3209",
        name: "Lemahabang",
      },
      {
        id: "320908",
        city_id: "3209",
        name: "Susukan Lebak",
      },
      {
        id: "320909",
        city_id: "3209",
        name: "Sedong",
      },
      {
        id: "320910",
        city_id: "3209",
        name: "Astanajapura",
      },
      {
        id: "320911",
        city_id: "3209",
        name: "Pangenan",
      },
      {
        id: "320912",
        city_id: "3209",
        name: "Mundu",
      },
      {
        id: "320913",
        city_id: "3209",
        name: "Beber",
      },
      {
        id: "320914",
        city_id: "3209",
        name: "Talun",
      },
      {
        id: "320915",
        city_id: "3209",
        name: "Sumber",
      },
      {
        id: "320916",
        city_id: "3209",
        name: "Dukupuntang",
      },
      {
        id: "320917",
        city_id: "3209",
        name: "Palimanan",
      },
      {
        id: "320918",
        city_id: "3209",
        name: "Plumbon",
      },
      {
        id: "320919",
        city_id: "3209",
        name: "Weru",
      },
      {
        id: "320920",
        city_id: "3209",
        name: "Kedawung",
      },
      {
        id: "320921",
        city_id: "3209",
        name: "Gunung Jati",
      },
      {
        id: "320922",
        city_id: "3209",
        name: "Kapetakan",
      },
      {
        id: "320923",
        city_id: "3209",
        name: "Klangenan",
      },
      {
        id: "320924",
        city_id: "3209",
        name: "Arjawinangun",
      },
      {
        id: "320925",
        city_id: "3209",
        name: "Panguragan",
      },
      {
        id: "320926",
        city_id: "3209",
        name: "Ciwaringin",
      },
      {
        id: "320927",
        city_id: "3209",
        name: "Susukan",
      },
      {
        id: "320928",
        city_id: "3209",
        name: "Gegesik",
      },
      {
        id: "320929",
        city_id: "3209",
        name: "Kaliwedi",
      },
      {
        id: "320930",
        city_id: "3209",
        name: "Gebang",
      },
      {
        id: "320931",
        city_id: "3209",
        name: "Depok",
      },
      {
        id: "320932",
        city_id: "3209",
        name: "Pasaleman",
      },
      {
        id: "320933",
        city_id: "3209",
        name: "Pabuaran",
      },
      {
        id: "320934",
        city_id: "3209",
        name: "Karangwareng",
      },
      {
        id: "320935",
        city_id: "3209",
        name: "Tengah Tani",
      },
      {
        id: "320936",
        city_id: "3209",
        name: "Plered",
      },
      {
        id: "320937",
        city_id: "3209",
        name: "Gempol",
      },
      {
        id: "320938",
        city_id: "3209",
        name: "Greged",
      },
      {
        id: "320939",
        city_id: "3209",
        name: "Suranenggala",
      },
      {
        id: "320940",
        city_id: "3209",
        name: "Jamblang",
      },
      {
        id: "321001",
        city_id: "3210",
        name: "Lemahsugih",
      },
      {
        id: "321002",
        city_id: "3210",
        name: "Bantarujeg",
      },
      {
        id: "321003",
        city_id: "3210",
        name: "Cikijing",
      },
      {
        id: "321004",
        city_id: "3210",
        name: "Talaga",
      },
      {
        id: "321005",
        city_id: "3210",
        name: "Argapura",
      },
      {
        id: "321006",
        city_id: "3210",
        name: "Maja",
      },
      {
        id: "321007",
        city_id: "3210",
        name: "Majalengka",
      },
      {
        id: "321008",
        city_id: "3210",
        name: "Sukahaji",
      },
      {
        id: "321009",
        city_id: "3210",
        name: "Rajagaluh",
      },
      {
        id: "321010",
        city_id: "3210",
        name: "Leuwimunding",
      },
      {
        id: "321011",
        city_id: "3210",
        name: "Jatiwangi",
      },
      {
        id: "321012",
        city_id: "3210",
        name: "Dawuan",
      },
      {
        id: "321013",
        city_id: "3210",
        name: "Kadipaten",
      },
      {
        id: "321014",
        city_id: "3210",
        name: "Kertajati",
      },
      {
        id: "321015",
        city_id: "3210",
        name: "Jatitujuh",
      },
      {
        id: "321016",
        city_id: "3210",
        name: "Ligung",
      },
      {
        id: "321017",
        city_id: "3210",
        name: "Sumberjaya",
      },
      {
        id: "321018",
        city_id: "3210",
        name: "Panyingkiran",
      },
      {
        id: "321019",
        city_id: "3210",
        name: "Palasah",
      },
      {
        id: "321020",
        city_id: "3210",
        name: "Cigasong",
      },
      {
        id: "321021",
        city_id: "3210",
        name: "Sindangwangi",
      },
      {
        id: "321022",
        city_id: "3210",
        name: "Banjaran",
      },
      {
        id: "321023",
        city_id: "3210",
        name: "Cingambul",
      },
      {
        id: "321024",
        city_id: "3210",
        name: "Kasokandel",
      },
      {
        id: "321025",
        city_id: "3210",
        name: "Sindang",
      },
      {
        id: "321026",
        city_id: "3210",
        name: "Malausma",
      },
      {
        id: "321101",
        city_id: "3211",
        name: "Wado",
      },
      {
        id: "321102",
        city_id: "3211",
        name: "Jatinunggal",
      },
      {
        id: "321103",
        city_id: "3211",
        name: "Darmaraja",
      },
      {
        id: "321104",
        city_id: "3211",
        name: "Cibugel",
      },
      {
        id: "321105",
        city_id: "3211",
        name: "Cisitu",
      },
      {
        id: "321106",
        city_id: "3211",
        name: "Situraja",
      },
      {
        id: "321107",
        city_id: "3211",
        name: "Conggeang",
      },
      {
        id: "321108",
        city_id: "3211",
        name: "Paseh",
      },
      {
        id: "321109",
        city_id: "3211",
        name: "Surian",
      },
      {
        id: "321110",
        city_id: "3211",
        name: "Buahdua",
      },
      {
        id: "321111",
        city_id: "3211",
        name: "Tanjungsari",
      },
      {
        id: "321112",
        city_id: "3211",
        name: "Sukasari",
      },
      {
        id: "321113",
        city_id: "3211",
        name: "Pamulihan",
      },
      {
        id: "321114",
        city_id: "3211",
        name: "Cimanggung",
      },
      {
        id: "321115",
        city_id: "3211",
        name: "Jatinangor",
      },
      {
        id: "321116",
        city_id: "3211",
        name: "Rancakalong",
      },
      {
        id: "321117",
        city_id: "3211",
        name: "Sumedang Selatan",
      },
      {
        id: "321118",
        city_id: "3211",
        name: "Sumedang Utara",
      },
      {
        id: "321119",
        city_id: "3211",
        name: "Ganeas",
      },
      {
        id: "321120",
        city_id: "3211",
        name: "Tanjungkerta",
      },
      {
        id: "321121",
        city_id: "3211",
        name: "Tanjungmedar",
      },
      {
        id: "321122",
        city_id: "3211",
        name: "Cimalaka",
      },
      {
        id: "321123",
        city_id: "3211",
        name: "Cisarua",
      },
      {
        id: "321124",
        city_id: "3211",
        name: "Tomo",
      },
      {
        id: "321125",
        city_id: "3211",
        name: "Ujungjaya",
      },
      {
        id: "321126",
        city_id: "3211",
        name: "Jatigede",
      },
      {
        id: "321201",
        city_id: "3212",
        name: "Haurgeulis",
      },
      {
        id: "321202",
        city_id: "3212",
        name: "Kroya",
      },
      {
        id: "321203",
        city_id: "3212",
        name: "Gabuswetan",
      },
      {
        id: "321204",
        city_id: "3212",
        name: "Cikedung",
      },
      {
        id: "321205",
        city_id: "3212",
        name: "Lelea",
      },
      {
        id: "321206",
        city_id: "3212",
        name: "Bangodua",
      },
      {
        id: "321207",
        city_id: "3212",
        name: "Widasari",
      },
      {
        id: "321208",
        city_id: "3212",
        name: "Kertasemaya",
      },
      {
        id: "321209",
        city_id: "3212",
        name: "Krangkeng",
      },
      {
        id: "321210",
        city_id: "3212",
        name: "Karangampel",
      },
      {
        id: "321211",
        city_id: "3212",
        name: "Juntinyuat",
      },
      {
        id: "321212",
        city_id: "3212",
        name: "Sliyeg",
      },
      {
        id: "321213",
        city_id: "3212",
        name: "Jatibarang",
      },
      {
        id: "321214",
        city_id: "3212",
        name: "Balongan",
      },
      {
        id: "321215",
        city_id: "3212",
        name: "Indramayu",
      },
      {
        id: "321216",
        city_id: "3212",
        name: "Sindang",
      },
      {
        id: "321217",
        city_id: "3212",
        name: "Cantigi",
      },
      {
        id: "321218",
        city_id: "3212",
        name: "Lohbener",
      },
      {
        id: "321219",
        city_id: "3212",
        name: "Arahan",
      },
      {
        id: "321220",
        city_id: "3212",
        name: "Losarang",
      },
      {
        id: "321221",
        city_id: "3212",
        name: "Kandanghaur",
      },
      {
        id: "321222",
        city_id: "3212",
        name: "Bongas",
      },
      {
        id: "321223",
        city_id: "3212",
        name: "Anjatan",
      },
      {
        id: "321224",
        city_id: "3212",
        name: "Sukra",
      },
      {
        id: "321225",
        city_id: "3212",
        name: "Gantar",
      },
      {
        id: "321226",
        city_id: "3212",
        name: "Trisi",
      },
      {
        id: "321227",
        city_id: "3212",
        name: "Sukagumiwang",
      },
      {
        id: "321228",
        city_id: "3212",
        name: "Kedokan Bunder",
      },
      {
        id: "321229",
        city_id: "3212",
        name: "Pasekan",
      },
      {
        id: "321230",
        city_id: "3212",
        name: "Tukdana",
      },
      {
        id: "321231",
        city_id: "3212",
        name: "Patrol",
      },
      {
        id: "321301",
        city_id: "3213",
        name: "Sagalaherang",
      },
      {
        id: "321302",
        city_id: "3213",
        name: "Cisalak",
      },
      {
        id: "321303",
        city_id: "3213",
        name: "Subang",
      },
      {
        id: "321304",
        city_id: "3213",
        name: "Kalijati",
      },
      {
        id: "321305",
        city_id: "3213",
        name: "Pabuaran",
      },
      {
        id: "321306",
        city_id: "3213",
        name: "Purwadadi",
      },
      {
        id: "321307",
        city_id: "3213",
        name: "Pagaden",
      },
      {
        id: "321308",
        city_id: "3213",
        name: "Binong",
      },
      {
        id: "321309",
        city_id: "3213",
        name: "Ciasem",
      },
      {
        id: "321310",
        city_id: "3213",
        name: "Pusakanagara",
      },
      {
        id: "321311",
        city_id: "3213",
        name: "Pamanukan",
      },
      {
        id: "321312",
        city_id: "3213",
        name: "Jalancagak",
      },
      {
        id: "321313",
        city_id: "3213",
        name: "Blanakan",
      },
      {
        id: "321314",
        city_id: "3213",
        name: "Tanjungsiang",
      },
      {
        id: "321315",
        city_id: "3213",
        name: "Compreng",
      },
      {
        id: "321316",
        city_id: "3213",
        name: "Patokbeusi",
      },
      {
        id: "321317",
        city_id: "3213",
        name: "Cibogo",
      },
      {
        id: "321318",
        city_id: "3213",
        name: "Cipunagara",
      },
      {
        id: "321319",
        city_id: "3213",
        name: "Cijambe",
      },
      {
        id: "321320",
        city_id: "3213",
        name: "Cipeundeuy",
      },
      {
        id: "321321",
        city_id: "3213",
        name: "Legonkulon",
      },
      {
        id: "321322",
        city_id: "3213",
        name: "Cikaum",
      },
      {
        id: "321323",
        city_id: "3213",
        name: "Serangpanjang",
      },
      {
        id: "321324",
        city_id: "3213",
        name: "Sukasari",
      },
      {
        id: "321325",
        city_id: "3213",
        name: "Tambakdahan",
      },
      {
        id: "321326",
        city_id: "3213",
        name: "Kasomalang",
      },
      {
        id: "321327",
        city_id: "3213",
        name: "Dawuan",
      },
      {
        id: "321328",
        city_id: "3213",
        name: "Pagaden Barat",
      },
      {
        id: "321329",
        city_id: "3213",
        name: "Ciater",
      },
      {
        id: "321330",
        city_id: "3213",
        name: "Pusakajaya",
      },
      {
        id: "321401",
        city_id: "3214",
        name: "Purwakarta",
      },
      {
        id: "321402",
        city_id: "3214",
        name: "Campaka",
      },
      {
        id: "321403",
        city_id: "3214",
        name: "Jatiluhur",
      },
      {
        id: "321404",
        city_id: "3214",
        name: "Plered",
      },
      {
        id: "321405",
        city_id: "3214",
        name: "Sukatani",
      },
      {
        id: "321406",
        city_id: "3214",
        name: "Darangdan",
      },
      {
        id: "321407",
        city_id: "3214",
        name: "Maniis",
      },
      {
        id: "321408",
        city_id: "3214",
        name: "Tegalwaru",
      },
      {
        id: "321409",
        city_id: "3214",
        name: "Wanayasa",
      },
      {
        id: "321410",
        city_id: "3214",
        name: "Pasawahan",
      },
      {
        id: "321411",
        city_id: "3214",
        name: "Bojong",
      },
      {
        id: "321412",
        city_id: "3214",
        name: "Babakancikao",
      },
      {
        id: "321413",
        city_id: "3214",
        name: "Bungursari",
      },
      {
        id: "321414",
        city_id: "3214",
        name: "Cibatu",
      },
      {
        id: "321415",
        city_id: "3214",
        name: "Sukasari",
      },
      {
        id: "321416",
        city_id: "3214",
        name: "Pondoksalam",
      },
      {
        id: "321417",
        city_id: "3214",
        name: "Kiarapedes",
      },
      {
        id: "321501",
        city_id: "3215",
        name: "Karawang Barat",
      },
      {
        id: "321502",
        city_id: "3215",
        name: "Pangkalan",
      },
      {
        id: "321503",
        city_id: "3215",
        name: "Telukjambe Timur",
      },
      {
        id: "321504",
        city_id: "3215",
        name: "Ciampel",
      },
      {
        id: "321505",
        city_id: "3215",
        name: "Klari",
      },
      {
        id: "321506",
        city_id: "3215",
        name: "Rengasdengklok",
      },
      {
        id: "321507",
        city_id: "3215",
        name: "Kutawaluya",
      },
      {
        id: "321508",
        city_id: "3215",
        name: "Batujaya",
      },
      {
        id: "321509",
        city_id: "3215",
        name: "Tirtajaya",
      },
      {
        id: "321510",
        city_id: "3215",
        name: "Pedes",
      },
      {
        id: "321511",
        city_id: "3215",
        name: "Cibuaya",
      },
      {
        id: "321512",
        city_id: "3215",
        name: "Pakisjaya",
      },
      {
        id: "321513",
        city_id: "3215",
        name: "Cikampek",
      },
      {
        id: "321514",
        city_id: "3215",
        name: "Jatisari",
      },
      {
        id: "321515",
        city_id: "3215",
        name: "Cilamaya Wetan",
      },
      {
        id: "321516",
        city_id: "3215",
        name: "Tirtamulya",
      },
      {
        id: "321517",
        city_id: "3215",
        name: "Telagasari",
      },
      {
        id: "321518",
        city_id: "3215",
        name: "Rawamerta",
      },
      {
        id: "321519",
        city_id: "3215",
        name: "Lemahabang",
      },
      {
        id: "321520",
        city_id: "3215",
        name: "Tempuran",
      },
      {
        id: "321521",
        city_id: "3215",
        name: "Majalaya",
      },
      {
        id: "321522",
        city_id: "3215",
        name: "Jayakerta",
      },
      {
        id: "321523",
        city_id: "3215",
        name: "Cilamaya Kulon",
      },
      {
        id: "321524",
        city_id: "3215",
        name: "Banyusari",
      },
      {
        id: "321525",
        city_id: "3215",
        name: "Kota Baru",
      },
      {
        id: "321526",
        city_id: "3215",
        name: "Karawang Timur",
      },
      {
        id: "321527",
        city_id: "3215",
        name: "Telukjambe Barat",
      },
      {
        id: "321528",
        city_id: "3215",
        name: "Tegalwaru",
      },
      {
        id: "321529",
        city_id: "3215",
        name: "Purwasari",
      },
      {
        id: "321530",
        city_id: "3215",
        name: "Cilebar",
      },
      {
        id: "321601",
        city_id: "3216",
        name: "Tarumajaya",
      },
      {
        id: "321602",
        city_id: "3216",
        name: "Babelan",
      },
      {
        id: "321603",
        city_id: "3216",
        name: "Sukawangi",
      },
      {
        id: "321604",
        city_id: "3216",
        name: "Tambelang",
      },
      {
        id: "321605",
        city_id: "3216",
        name: "Tambun Utara",
      },
      {
        id: "321606",
        city_id: "3216",
        name: "Tambun Selatan",
      },
      {
        id: "321607",
        city_id: "3216",
        name: "Cibitung",
      },
      {
        id: "321608",
        city_id: "3216",
        name: "Cikarang Barat",
      },
      {
        id: "321609",
        city_id: "3216",
        name: "Cikarang Utara",
      },
      {
        id: "321610",
        city_id: "3216",
        name: "Karang Bahagia",
      },
      {
        id: "321611",
        city_id: "3216",
        name: "Cikarang Timur",
      },
      {
        id: "321612",
        city_id: "3216",
        name: "Kedung Waringin",
      },
      {
        id: "321613",
        city_id: "3216",
        name: "Pebayuran",
      },
      {
        id: "321614",
        city_id: "3216",
        name: "Sukakarya",
      },
      {
        id: "321615",
        city_id: "3216",
        name: "Sukatani",
      },
      {
        id: "321616",
        city_id: "3216",
        name: "Cabangbungin",
      },
      {
        id: "321617",
        city_id: "3216",
        name: "Muaragembong",
      },
      {
        id: "321618",
        city_id: "3216",
        name: "Setu",
      },
      {
        id: "321619",
        city_id: "3216",
        name: "Cikarang Selatan",
      },
      {
        id: "321620",
        city_id: "3216",
        name: "Cikarang Pusat",
      },
      {
        id: "321621",
        city_id: "3216",
        name: "Serang Baru",
      },
      {
        id: "321622",
        city_id: "3216",
        name: "Cibarusah",
      },
      {
        id: "321623",
        city_id: "3216",
        name: "Bojongmangu",
      },
      {
        id: "321701",
        city_id: "3217",
        name: "Lembang",
      },
      {
        id: "321702",
        city_id: "3217",
        name: "Parongpong",
      },
      {
        id: "321703",
        city_id: "3217",
        name: "Cisarua",
      },
      {
        id: "321704",
        city_id: "3217",
        name: "Cikalongwetan",
      },
      {
        id: "321705",
        city_id: "3217",
        name: "Cipeundeuy",
      },
      {
        id: "321706",
        city_id: "3217",
        name: "Ngamprah",
      },
      {
        id: "321707",
        city_id: "3217",
        name: "Cipatat",
      },
      {
        id: "321708",
        city_id: "3217",
        name: "Padalarang",
      },
      {
        id: "321709",
        city_id: "3217",
        name: "Batujajar",
      },
      {
        id: "321710",
        city_id: "3217",
        name: "Cihampelas",
      },
      {
        id: "321711",
        city_id: "3217",
        name: "Cililin",
      },
      {
        id: "321712",
        city_id: "3217",
        name: "Cipongkor",
      },
      {
        id: "321713",
        city_id: "3217",
        name: "Rongga",
      },
      {
        id: "321714",
        city_id: "3217",
        name: "Sindangkerta",
      },
      {
        id: "321715",
        city_id: "3217",
        name: "Gununghalu",
      },
      {
        id: "321716",
        city_id: "3217",
        name: "Saguling",
      },
      {
        id: "321801",
        city_id: "3218",
        name: "Parigi",
      },
      {
        id: "321802",
        city_id: "3218",
        name: "Cijulang",
      },
      {
        id: "321803",
        city_id: "3218",
        name: "Cimerak",
      },
      {
        id: "321804",
        city_id: "3218",
        name: "Cigugur",
      },
      {
        id: "321805",
        city_id: "3218",
        name: "Langkaplancar",
      },
      {
        id: "321806",
        city_id: "3218",
        name: "Mangunjaya",
      },
      {
        id: "321807",
        city_id: "3218",
        name: "Padaherang",
      },
      {
        id: "321808",
        city_id: "3218",
        name: "Kalipucang",
      },
      {
        id: "321809",
        city_id: "3218",
        name: "Pangandaran",
      },
      {
        id: "321810",
        city_id: "3218",
        name: "Sidamulih",
      },
      {
        id: "327101",
        city_id: "3271",
        name: "Bogor Selatan",
      },
      {
        id: "327102",
        city_id: "3271",
        name: "Bogor Timur",
      },
      {
        id: "327103",
        city_id: "3271",
        name: "Bogor Tengah",
      },
      {
        id: "327104",
        city_id: "3271",
        name: "Bogor Barat",
      },
      {
        id: "327105",
        city_id: "3271",
        name: "Bogor Utara",
      },
      {
        id: "327106",
        city_id: "3271",
        name: "Tanah Sareal",
      },
      {
        id: "327201",
        city_id: "3272",
        name: "Gunungpuyuh",
      },
      {
        id: "327202",
        city_id: "3272",
        name: "Cikole",
      },
      {
        id: "327203",
        city_id: "3272",
        name: "Citamiang",
      },
      {
        id: "327204",
        city_id: "3272",
        name: "Warudoyong",
      },
      {
        id: "327205",
        city_id: "3272",
        name: "Baros",
      },
      {
        id: "327206",
        city_id: "3272",
        name: "Lembursitu",
      },
      {
        id: "327207",
        city_id: "3272",
        name: "Cibeureum",
      },
      {
        id: "327301",
        city_id: "3273",
        name: "Sukasari",
      },
      {
        id: "327302",
        city_id: "3273",
        name: "Coblong",
      },
      {
        id: "327303",
        city_id: "3273",
        name: "Babakan Ciparay",
      },
      {
        id: "327304",
        city_id: "3273",
        name: "Bojongloa Kaler",
      },
      {
        id: "327305",
        city_id: "3273",
        name: "Andir",
      },
      {
        id: "327306",
        city_id: "3273",
        name: "Cicendo",
      },
      {
        id: "327307",
        city_id: "3273",
        name: "Sukajadi",
      },
      {
        id: "327308",
        city_id: "3273",
        name: "Cidadap",
      },
      {
        id: "327309",
        city_id: "3273",
        name: "Bandung Wetan",
      },
      {
        id: "327310",
        city_id: "3273",
        name: "Astana Anyar",
      },
      {
        id: "327311",
        city_id: "3273",
        name: "Regol",
      },
      {
        id: "327312",
        city_id: "3273",
        name: "Batununggal",
      },
      {
        id: "327313",
        city_id: "3273",
        name: "Lengkong",
      },
      {
        id: "327314",
        city_id: "3273",
        name: "Cibeunying Kidul",
      },
      {
        id: "327315",
        city_id: "3273",
        name: "Bandung Kulon",
      },
      {
        id: "327316",
        city_id: "3273",
        name: "Kiaracondong",
      },
      {
        id: "327317",
        city_id: "3273",
        name: "Bojongloa Kidul",
      },
      {
        id: "327318",
        city_id: "3273",
        name: "Cibeunying Kaler",
      },
      {
        id: "327319",
        city_id: "3273",
        name: "Sumur Bandung",
      },
      {
        id: "327320",
        city_id: "3273",
        name: "Antapani",
      },
      {
        id: "327321",
        city_id: "3273",
        name: "Bandung Kidul",
      },
      {
        id: "327322",
        city_id: "3273",
        name: "Buahbatu",
      },
      {
        id: "327323",
        city_id: "3273",
        name: "Rancasari",
      },
      {
        id: "327324",
        city_id: "3273",
        name: "Arcamanik",
      },
      {
        id: "327325",
        city_id: "3273",
        name: "Cibiru",
      },
      {
        id: "327326",
        city_id: "3273",
        name: "Ujungberung",
      },
      {
        id: "327327",
        city_id: "3273",
        name: "Gedebage",
      },
      {
        id: "327328",
        city_id: "3273",
        name: "Panyileukan",
      },
      {
        id: "327329",
        city_id: "3273",
        name: "Cinambo",
      },
      {
        id: "327330",
        city_id: "3273",
        name: "Mandalajati",
      },
      {
        id: "327401",
        city_id: "3274",
        name: "Kejaksan",
      },
      {
        id: "327402",
        city_id: "3274",
        name: "Lemah Wungkuk",
      },
      {
        id: "327403",
        city_id: "3274",
        name: "Harjamukti",
      },
      {
        id: "327404",
        city_id: "3274",
        name: "Pekalipan",
      },
      {
        id: "327405",
        city_id: "3274",
        name: "Kesambi",
      },
      {
        id: "327501",
        city_id: "3275",
        name: "Bekasi Timur",
      },
      {
        id: "327502",
        city_id: "3275",
        name: "Bekasi Barat",
      },
      {
        id: "327503",
        city_id: "3275",
        name: "Bekasi Utara",
      },
      {
        id: "327504",
        city_id: "3275",
        name: "Bekasi Selatan",
      },
      {
        id: "327505",
        city_id: "3275",
        name: "Rawalumbu",
      },
      {
        id: "327506",
        city_id: "3275",
        name: "Medansatria",
      },
      {
        id: "327507",
        city_id: "3275",
        name: "Bantargebang",
      },
      {
        id: "327508",
        city_id: "3275",
        name: "Pondokgede",
      },
      {
        id: "327509",
        city_id: "3275",
        name: "Jatiasih",
      },
      {
        id: "327510",
        city_id: "3275",
        name: "Jatisampurna",
      },
      {
        id: "327511",
        city_id: "3275",
        name: "Mustikajaya",
      },
      {
        id: "327512",
        city_id: "3275",
        name: "Pondokmelati",
      },
      {
        id: "327601",
        city_id: "3276",
        name: "Pancoran Mas",
      },
      {
        id: "327602",
        city_id: "3276",
        name: "Cimanggis",
      },
      {
        id: "327603",
        city_id: "3276",
        name: "Sawangan",
      },
      {
        id: "327604",
        city_id: "3276",
        name: "Limo",
      },
      {
        id: "327605",
        city_id: "3276",
        name: "Sukmajaya",
      },
      {
        id: "327606",
        city_id: "3276",
        name: "Beji",
      },
      {
        id: "327607",
        city_id: "3276",
        name: "Cipayung",
      },
      {
        id: "327608",
        city_id: "3276",
        name: "Cilodong",
      },
      {
        id: "327609",
        city_id: "3276",
        name: "Cinere",
      },
      {
        id: "327610",
        city_id: "3276",
        name: "Tapos",
      },
      {
        id: "327611",
        city_id: "3276",
        name: "Bojongsari",
      },
      {
        id: "327701",
        city_id: "3277",
        name: "Cimahi Selatan",
      },
      {
        id: "327702",
        city_id: "3277",
        name: "Cimahi Tengah",
      },
      {
        id: "327703",
        city_id: "3277",
        name: "Cimahi Utara",
      },
      {
        id: "327801",
        city_id: "3278",
        name: "Cihideung",
      },
      {
        id: "327802",
        city_id: "3278",
        name: "Cipedes",
      },
      {
        id: "327803",
        city_id: "3278",
        name: "Tawang",
      },
      {
        id: "327804",
        city_id: "3278",
        name: "Indihiang",
      },
      {
        id: "327805",
        city_id: "3278",
        name: "Kawalu",
      },
      {
        id: "327806",
        city_id: "3278",
        name: "Cibeureum",
      },
      {
        id: "327807",
        city_id: "3278",
        name: "Tamansari",
      },
      {
        id: "327808",
        city_id: "3278",
        name: "Mangkubumi",
      },
      {
        id: "327809",
        city_id: "3278",
        name: "Bungursari",
      },
      {
        id: "327810",
        city_id: "3278",
        name: "Purbaratu",
      },
      {
        id: "327901",
        city_id: "3279",
        name: "Banjar",
      },
      {
        id: "327902",
        city_id: "3279",
        name: "Pataruman",
      },
      {
        id: "327903",
        city_id: "3279",
        name: "Purwaharja",
      },
      {
        id: "327904",
        city_id: "3279",
        name: "Langensari",
      },
      {
        id: "330101",
        city_id: "3301",
        name: "Kedungreja",
      },
      {
        id: "330102",
        city_id: "3301",
        name: "Kesugihan",
      },
      {
        id: "330103",
        city_id: "3301",
        name: "Adipala",
      },
      {
        id: "330104",
        city_id: "3301",
        name: "Binangun",
      },
      {
        id: "330105",
        city_id: "3301",
        name: "Nusawungu",
      },
      {
        id: "330106",
        city_id: "3301",
        name: "Kroya",
      },
      {
        id: "330107",
        city_id: "3301",
        name: "Maos",
      },
      {
        id: "330108",
        city_id: "3301",
        name: "Jeruklegi",
      },
      {
        id: "330109",
        city_id: "3301",
        name: "Kawunganten",
      },
      {
        id: "330110",
        city_id: "3301",
        name: "Gandrungmangu",
      },
      {
        id: "330111",
        city_id: "3301",
        name: "Sidareja",
      },
      {
        id: "330112",
        city_id: "3301",
        name: "Karangpucung",
      },
      {
        id: "330113",
        city_id: "3301",
        name: "Cimanggu",
      },
      {
        id: "330114",
        city_id: "3301",
        name: "Majenang",
      },
      {
        id: "330115",
        city_id: "3301",
        name: "Wanareja",
      },
      {
        id: "330116",
        city_id: "3301",
        name: "Dayeuhluhur",
      },
      {
        id: "330117",
        city_id: "3301",
        name: "Sampang",
      },
      {
        id: "330118",
        city_id: "3301",
        name: "Cipari",
      },
      {
        id: "330119",
        city_id: "3301",
        name: "Patimuan",
      },
      {
        id: "330120",
        city_id: "3301",
        name: "Bantarsari",
      },
      {
        id: "330121",
        city_id: "3301",
        name: "Cilacap Selatan",
      },
      {
        id: "330122",
        city_id: "3301",
        name: "Cilacap Tengah",
      },
      {
        id: "330123",
        city_id: "3301",
        name: "Cilacap Utara",
      },
      {
        id: "330124",
        city_id: "3301",
        name: "Kampung Laut",
      },
      {
        id: "330201",
        city_id: "3302",
        name: "Lumbir",
      },
      {
        id: "330202",
        city_id: "3302",
        name: "Wangon",
      },
      {
        id: "330203",
        city_id: "3302",
        name: "Jatilawang",
      },
      {
        id: "330204",
        city_id: "3302",
        name: "Rawalo",
      },
      {
        id: "330205",
        city_id: "3302",
        name: "Kebasen",
      },
      {
        id: "330206",
        city_id: "3302",
        name: "Kemranjen",
      },
      {
        id: "330207",
        city_id: "3302",
        name: "Sumpiuh",
      },
      {
        id: "330208",
        city_id: "3302",
        name: "Tambak",
      },
      {
        id: "330209",
        city_id: "3302",
        name: "Somagede",
      },
      {
        id: "330210",
        city_id: "3302",
        name: "Kalibagor",
      },
      {
        id: "330211",
        city_id: "3302",
        name: "Banyumas",
      },
      {
        id: "330212",
        city_id: "3302",
        name: "Patikraja",
      },
      {
        id: "330213",
        city_id: "3302",
        name: "Purwojati",
      },
      {
        id: "330214",
        city_id: "3302",
        name: "Ajibarang",
      },
      {
        id: "330215",
        city_id: "3302",
        name: "Gumelar",
      },
      {
        id: "330216",
        city_id: "3302",
        name: "Pekuncen",
      },
      {
        id: "330217",
        city_id: "3302",
        name: "Cilongok",
      },
      {
        id: "330218",
        city_id: "3302",
        name: "Karanglewas",
      },
      {
        id: "330219",
        city_id: "3302",
        name: "Sokaraja",
      },
      {
        id: "330220",
        city_id: "3302",
        name: "Kembaran",
      },
      {
        id: "330221",
        city_id: "3302",
        name: "Sumbang",
      },
      {
        id: "330222",
        city_id: "3302",
        name: "Baturraden",
      },
      {
        id: "330223",
        city_id: "3302",
        name: "Kedungbanteng",
      },
      {
        id: "330224",
        city_id: "3302",
        name: "Purwokerto Selatan",
      },
      {
        id: "330225",
        city_id: "3302",
        name: "Purwokerto Barat",
      },
      {
        id: "330226",
        city_id: "3302",
        name: "Purwokerto Timur",
      },
      {
        id: "330227",
        city_id: "3302",
        name: "Purwokerto Utara",
      },
      {
        id: "330301",
        city_id: "3303",
        name: "Kemangkon",
      },
      {
        id: "330302",
        city_id: "3303",
        name: "Bukateja",
      },
      {
        id: "330303",
        city_id: "3303",
        name: "Kejobong",
      },
      {
        id: "330304",
        city_id: "3303",
        name: "Kaligondang",
      },
      {
        id: "330305",
        city_id: "3303",
        name: "Purbalingga",
      },
      {
        id: "330306",
        city_id: "3303",
        name: "Kalimanah",
      },
      {
        id: "330307",
        city_id: "3303",
        name: "Kutasari",
      },
      {
        id: "330308",
        city_id: "3303",
        name: "Mrebet",
      },
      {
        id: "330309",
        city_id: "3303",
        name: "Bobotsari",
      },
      {
        id: "330310",
        city_id: "3303",
        name: "Karangreja",
      },
      {
        id: "330311",
        city_id: "3303",
        name: "Karanganyar",
      },
      {
        id: "330312",
        city_id: "3303",
        name: "Karangmoncol",
      },
      {
        id: "330313",
        city_id: "3303",
        name: "Rembang",
      },
      {
        id: "330314",
        city_id: "3303",
        name: "Bojongsari",
      },
      {
        id: "330315",
        city_id: "3303",
        name: "Padamara",
      },
      {
        id: "330316",
        city_id: "3303",
        name: "Pengadegan",
      },
      {
        id: "330317",
        city_id: "3303",
        name: "Karangjambu",
      },
      {
        id: "330318",
        city_id: "3303",
        name: "Kertanegara",
      },
      {
        id: "330401",
        city_id: "3304",
        name: "Susukan",
      },
      {
        id: "330402",
        city_id: "3304",
        name: "Purworeja Klampok",
      },
      {
        id: "330403",
        city_id: "3304",
        name: "Mandiraja",
      },
      {
        id: "330404",
        city_id: "3304",
        name: "Purwanegara",
      },
      {
        id: "330405",
        city_id: "3304",
        name: "Bawang",
      },
      {
        id: "330406",
        city_id: "3304",
        name: "Banjarnegara",
      },
      {
        id: "330407",
        city_id: "3304",
        name: "Sigaluh",
      },
      {
        id: "330408",
        city_id: "3304",
        name: "Madukara",
      },
      {
        id: "330409",
        city_id: "3304",
        name: "Banjarmangu",
      },
      {
        id: "330410",
        city_id: "3304",
        name: "Wanadadi",
      },
      {
        id: "330411",
        city_id: "3304",
        name: "Rakit",
      },
      {
        id: "330412",
        city_id: "3304",
        name: "Punggelan",
      },
      {
        id: "330413",
        city_id: "3304",
        name: "Karangkobar",
      },
      {
        id: "330414",
        city_id: "3304",
        name: "Pagentan",
      },
      {
        id: "330415",
        city_id: "3304",
        name: "Pejawaran",
      },
      {
        id: "330416",
        city_id: "3304",
        name: "Batur",
      },
      {
        id: "330417",
        city_id: "3304",
        name: "Wanayasa",
      },
      {
        id: "330418",
        city_id: "3304",
        name: "Kalibening",
      },
      {
        id: "330419",
        city_id: "3304",
        name: "Pandanarum",
      },
      {
        id: "330420",
        city_id: "3304",
        name: "Pagedongan",
      },
      {
        id: "330501",
        city_id: "3305",
        name: "Ayah",
      },
      {
        id: "330502",
        city_id: "3305",
        name: "Buayan",
      },
      {
        id: "330503",
        city_id: "3305",
        name: "Puring",
      },
      {
        id: "330504",
        city_id: "3305",
        name: "Petanahan",
      },
      {
        id: "330505",
        city_id: "3305",
        name: "Klirong",
      },
      {
        id: "330506",
        city_id: "3305",
        name: "Buluspesantren",
      },
      {
        id: "330507",
        city_id: "3305",
        name: "Ambal",
      },
      {
        id: "330508",
        city_id: "3305",
        name: "Mirit",
      },
      {
        id: "330509",
        city_id: "3305",
        name: "Prembun",
      },
      {
        id: "330510",
        city_id: "3305",
        name: "Kutowinangun",
      },
      {
        id: "330511",
        city_id: "3305",
        name: "Alian",
      },
      {
        id: "330512",
        city_id: "3305",
        name: "Kebumen",
      },
      {
        id: "330513",
        city_id: "3305",
        name: "Pejagoan",
      },
      {
        id: "330514",
        city_id: "3305",
        name: "Sruweng",
      },
      {
        id: "330515",
        city_id: "3305",
        name: "Adimulyo",
      },
      {
        id: "330516",
        city_id: "3305",
        name: "Kuwarasan",
      },
      {
        id: "330517",
        city_id: "3305",
        name: "Rowokele",
      },
      {
        id: "330518",
        city_id: "3305",
        name: "Sempor",
      },
      {
        id: "330519",
        city_id: "3305",
        name: "Gombong",
      },
      {
        id: "330520",
        city_id: "3305",
        name: "Karanganyar",
      },
      {
        id: "330521",
        city_id: "3305",
        name: "Karanggayam",
      },
      {
        id: "330522",
        city_id: "3305",
        name: "Sadang",
      },
      {
        id: "330523",
        city_id: "3305",
        name: "Bonorowo",
      },
      {
        id: "330524",
        city_id: "3305",
        name: "Padureso",
      },
      {
        id: "330525",
        city_id: "3305",
        name: "Poncowarno",
      },
      {
        id: "330526",
        city_id: "3305",
        name: "Karangsambung",
      },
      {
        id: "330601",
        city_id: "3306",
        name: "Grabag",
      },
      {
        id: "330602",
        city_id: "3306",
        name: "Ngombol",
      },
      {
        id: "330603",
        city_id: "3306",
        name: "Purwodadi",
      },
      {
        id: "330604",
        city_id: "3306",
        name: "Bagelen",
      },
      {
        id: "330605",
        city_id: "3306",
        name: "Kaligesing",
      },
      {
        id: "330606",
        city_id: "3306",
        name: "Purworejo",
      },
      {
        id: "330607",
        city_id: "3306",
        name: "Banyuurip",
      },
      {
        id: "330608",
        city_id: "3306",
        name: "Bayan",
      },
      {
        id: "330609",
        city_id: "3306",
        name: "Kutoarjo",
      },
      {
        id: "330610",
        city_id: "3306",
        name: "Butuh",
      },
      {
        id: "330611",
        city_id: "3306",
        name: "Pituruh",
      },
      {
        id: "330612",
        city_id: "3306",
        name: "Kemiri",
      },
      {
        id: "330613",
        city_id: "3306",
        name: "Bruno",
      },
      {
        id: "330614",
        city_id: "3306",
        name: "Gebang",
      },
      {
        id: "330615",
        city_id: "3306",
        name: "Loano",
      },
      {
        id: "330616",
        city_id: "3306",
        name: "Bener",
      },
      {
        id: "330701",
        city_id: "3307",
        name: "Wadaslintang",
      },
      {
        id: "330702",
        city_id: "3307",
        name: "Kepil",
      },
      {
        id: "330703",
        city_id: "3307",
        name: "Sapuran",
      },
      {
        id: "330704",
        city_id: "3307",
        name: "Kaliwiro",
      },
      {
        id: "330705",
        city_id: "3307",
        name: "Leksono",
      },
      {
        id: "330706",
        city_id: "3307",
        name: "Selomerto",
      },
      {
        id: "330707",
        city_id: "3307",
        name: "Kalikajar",
      },
      {
        id: "330708",
        city_id: "3307",
        name: "Kertek",
      },
      {
        id: "330709",
        city_id: "3307",
        name: "Wonosobo",
      },
      {
        id: "330710",
        city_id: "3307",
        name: "Watumalang",
      },
      {
        id: "330711",
        city_id: "3307",
        name: "Mojotengah",
      },
      {
        id: "330712",
        city_id: "3307",
        name: "Garung",
      },
      {
        id: "330713",
        city_id: "3307",
        name: "Kejajar",
      },
      {
        id: "330714",
        city_id: "3307",
        name: "Sukoharjo",
      },
      {
        id: "330715",
        city_id: "3307",
        name: "Kalibawang",
      },
      {
        id: "330801",
        city_id: "3308",
        name: "Salaman",
      },
      {
        id: "330802",
        city_id: "3308",
        name: "Borobudur",
      },
      {
        id: "330803",
        city_id: "3308",
        name: "Ngluwar",
      },
      {
        id: "330804",
        city_id: "3308",
        name: "Salam",
      },
      {
        id: "330805",
        city_id: "3308",
        name: "Srumbung",
      },
      {
        id: "330806",
        city_id: "3308",
        name: "Dukun",
      },
      {
        id: "330807",
        city_id: "3308",
        name: "Sawangan",
      },
      {
        id: "330808",
        city_id: "3308",
        name: "Muntilan",
      },
      {
        id: "330809",
        city_id: "3308",
        name: "Mungkid",
      },
      {
        id: "330810",
        city_id: "3308",
        name: "Mertoyudan",
      },
      {
        id: "330811",
        city_id: "3308",
        name: "Tempuran",
      },
      {
        id: "330812",
        city_id: "3308",
        name: "Kajoran",
      },
      {
        id: "330813",
        city_id: "3308",
        name: "Kaliangkrik",
      },
      {
        id: "330814",
        city_id: "3308",
        name: "Bandongan",
      },
      {
        id: "330815",
        city_id: "3308",
        name: "Candimulyo",
      },
      {
        id: "330816",
        city_id: "3308",
        name: "Pakis",
      },
      {
        id: "330817",
        city_id: "3308",
        name: "Ngablak",
      },
      {
        id: "330818",
        city_id: "3308",
        name: "Grabag",
      },
      {
        id: "330819",
        city_id: "3308",
        name: "Tegalrejo",
      },
      {
        id: "330820",
        city_id: "3308",
        name: "Secang",
      },
      {
        id: "330821",
        city_id: "3308",
        name: "Windusari",
      },
      {
        id: "330901",
        city_id: "3309",
        name: "Selo",
      },
      {
        id: "330902",
        city_id: "3309",
        name: "Ampel",
      },
      {
        id: "330903",
        city_id: "3309",
        name: "Cepogo",
      },
      {
        id: "330904",
        city_id: "3309",
        name: "Musuk",
      },
      {
        id: "330905",
        city_id: "3309",
        name: "Boyolali",
      },
      {
        id: "330906",
        city_id: "3309",
        name: "Mojosongo",
      },
      {
        id: "330907",
        city_id: "3309",
        name: "Teras",
      },
      {
        id: "330908",
        city_id: "3309",
        name: "Sawit",
      },
      {
        id: "330909",
        city_id: "3309",
        name: "Banyudono",
      },
      {
        id: "330910",
        city_id: "3309",
        name: "Sambi",
      },
      {
        id: "330911",
        city_id: "3309",
        name: "Ngemplak",
      },
      {
        id: "330912",
        city_id: "3309",
        name: "Nogosari",
      },
      {
        id: "330913",
        city_id: "3309",
        name: "Simo",
      },
      {
        id: "330914",
        city_id: "3309",
        name: "Karanggede",
      },
      {
        id: "330915",
        city_id: "3309",
        name: "Klego",
      },
      {
        id: "330916",
        city_id: "3309",
        name: "Andong",
      },
      {
        id: "330917",
        city_id: "3309",
        name: "Kemusu",
      },
      {
        id: "330918",
        city_id: "3309",
        name: "Wonosegoro",
      },
      {
        id: "330919",
        city_id: "3309",
        name: "Juwangi",
      },
      {
        id: "330920",
        city_id: "3309",
        name: "Gladagsari",
      },
      {
        id: "330921",
        city_id: "3309",
        name: "Tamansari",
      },
      {
        id: "330922",
        city_id: "3309",
        name: "Wonosamodro",
      },
      {
        id: "331001",
        city_id: "3310",
        name: "Prambanan",
      },
      {
        id: "331002",
        city_id: "3310",
        name: "Gantiwarno",
      },
      {
        id: "331003",
        city_id: "3310",
        name: "Wedi",
      },
      {
        id: "331004",
        city_id: "3310",
        name: "Bayat",
      },
      {
        id: "331005",
        city_id: "3310",
        name: "Cawas",
      },
      {
        id: "331006",
        city_id: "3310",
        name: "Trucuk",
      },
      {
        id: "331007",
        city_id: "3310",
        name: "Kebonarum",
      },
      {
        id: "331008",
        city_id: "3310",
        name: "Jogonalan",
      },
      {
        id: "331009",
        city_id: "3310",
        name: "Manisrenggo",
      },
      {
        id: "331010",
        city_id: "3310",
        name: "Karangnongko",
      },
      {
        id: "331011",
        city_id: "3310",
        name: "Ceper",
      },
      {
        id: "331012",
        city_id: "3310",
        name: "Pedan",
      },
      {
        id: "331013",
        city_id: "3310",
        name: "Karangdowo",
      },
      {
        id: "331014",
        city_id: "3310",
        name: "Juwiring",
      },
      {
        id: "331015",
        city_id: "3310",
        name: "Wonosari",
      },
      {
        id: "331016",
        city_id: "3310",
        name: "Delanggu",
      },
      {
        id: "331017",
        city_id: "3310",
        name: "Polanharjo",
      },
      {
        id: "331018",
        city_id: "3310",
        name: "Karanganom",
      },
      {
        id: "331019",
        city_id: "3310",
        name: "Tulung",
      },
      {
        id: "331020",
        city_id: "3310",
        name: "Jatinom",
      },
      {
        id: "331021",
        city_id: "3310",
        name: "Kemalang",
      },
      {
        id: "331022",
        city_id: "3310",
        name: "Ngawen",
      },
      {
        id: "331023",
        city_id: "3310",
        name: "Kalikotes",
      },
      {
        id: "331024",
        city_id: "3310",
        name: "Klaten Utara",
      },
      {
        id: "331025",
        city_id: "3310",
        name: "Klaten Tengah",
      },
      {
        id: "331026",
        city_id: "3310",
        name: "Klaten Selatan",
      },
      {
        id: "331101",
        city_id: "3311",
        name: "Weru",
      },
      {
        id: "331102",
        city_id: "3311",
        name: "Bulu",
      },
      {
        id: "331103",
        city_id: "3311",
        name: "Tawangsari",
      },
      {
        id: "331104",
        city_id: "3311",
        name: "Sukoharjo",
      },
      {
        id: "331105",
        city_id: "3311",
        name: "Nguter",
      },
      {
        id: "331106",
        city_id: "3311",
        name: "Bendosari",
      },
      {
        id: "331107",
        city_id: "3311",
        name: "Polokarto",
      },
      {
        id: "331108",
        city_id: "3311",
        name: "Mojolaban",
      },
      {
        id: "331109",
        city_id: "3311",
        name: "Grogol",
      },
      {
        id: "331110",
        city_id: "3311",
        name: "Baki",
      },
      {
        id: "331111",
        city_id: "3311",
        name: "Gatak",
      },
      {
        id: "331112",
        city_id: "3311",
        name: "Kartasura",
      },
      {
        id: "331201",
        city_id: "3312",
        name: "Pracimantoro",
      },
      {
        id: "331202",
        city_id: "3312",
        name: "Giritontro",
      },
      {
        id: "331203",
        city_id: "3312",
        name: "Giriwoyo",
      },
      {
        id: "331204",
        city_id: "3312",
        name: "Batuwarno",
      },
      {
        id: "331205",
        city_id: "3312",
        name: "Tirtomoyo",
      },
      {
        id: "331206",
        city_id: "3312",
        name: "Nguntoronadi",
      },
      {
        id: "331207",
        city_id: "3312",
        name: "Baturetno",
      },
      {
        id: "331208",
        city_id: "3312",
        name: "Eromoko",
      },
      {
        id: "331209",
        city_id: "3312",
        name: "Wuryantoro",
      },
      {
        id: "331210",
        city_id: "3312",
        name: "Manyaran",
      },
      {
        id: "331211",
        city_id: "3312",
        name: "Selogiri",
      },
      {
        id: "331212",
        city_id: "3312",
        name: "Wonogiri",
      },
      {
        id: "331213",
        city_id: "3312",
        name: "Ngadirojo",
      },
      {
        id: "331214",
        city_id: "3312",
        name: "Sidoharjo",
      },
      {
        id: "331215",
        city_id: "3312",
        name: "Jatiroto",
      },
      {
        id: "331216",
        city_id: "3312",
        name: "Kismantoro",
      },
      {
        id: "331217",
        city_id: "3312",
        name: "Purwantoro",
      },
      {
        id: "331218",
        city_id: "3312",
        name: "Bulukerto",
      },
      {
        id: "331219",
        city_id: "3312",
        name: "Slogohimo",
      },
      {
        id: "331220",
        city_id: "3312",
        name: "Jatisrono",
      },
      {
        id: "331221",
        city_id: "3312",
        name: "Jatipurno",
      },
      {
        id: "331222",
        city_id: "3312",
        name: "Girimarto",
      },
      {
        id: "331223",
        city_id: "3312",
        name: "Karangtengah",
      },
      {
        id: "331224",
        city_id: "3312",
        name: "Paranggupito",
      },
      {
        id: "331225",
        city_id: "3312",
        name: "Puhpelem",
      },
      {
        id: "331301",
        city_id: "3313",
        name: "Jatipuro",
      },
      {
        id: "331302",
        city_id: "3313",
        name: "Jatiyoso",
      },
      {
        id: "331303",
        city_id: "3313",
        name: "Jumapolo",
      },
      {
        id: "331304",
        city_id: "3313",
        name: "Jumantono",
      },
      {
        id: "331305",
        city_id: "3313",
        name: "Matesih",
      },
      {
        id: "331306",
        city_id: "3313",
        name: "Tawangmangu",
      },
      {
        id: "331307",
        city_id: "3313",
        name: "Ngargoyoso",
      },
      {
        id: "331308",
        city_id: "3313",
        name: "Karangpandan",
      },
      {
        id: "331309",
        city_id: "3313",
        name: "Karanganyar",
      },
      {
        id: "331310",
        city_id: "3313",
        name: "Tasikmadu",
      },
      {
        id: "331311",
        city_id: "3313",
        name: "Jaten",
      },
      {
        id: "331312",
        city_id: "3313",
        name: "Colomadu",
      },
      {
        id: "331313",
        city_id: "3313",
        name: "Gondangrejo",
      },
      {
        id: "331314",
        city_id: "3313",
        name: "Kebakkramat",
      },
      {
        id: "331315",
        city_id: "3313",
        name: "Mojogedang",
      },
      {
        id: "331316",
        city_id: "3313",
        name: "Kerjo",
      },
      {
        id: "331317",
        city_id: "3313",
        name: "Jenawi",
      },
      {
        id: "331401",
        city_id: "3314",
        name: "Kalijambe",
      },
      {
        id: "331402",
        city_id: "3314",
        name: "Plupuh",
      },
      {
        id: "331403",
        city_id: "3314",
        name: "Masaran",
      },
      {
        id: "331404",
        city_id: "3314",
        name: "Kedawung",
      },
      {
        id: "331405",
        city_id: "3314",
        name: "Sambirejo",
      },
      {
        id: "331406",
        city_id: "3314",
        name: "Gondang",
      },
      {
        id: "331407",
        city_id: "3314",
        name: "Sambungmacan",
      },
      {
        id: "331408",
        city_id: "3314",
        name: "Ngrampal",
      },
      {
        id: "331409",
        city_id: "3314",
        name: "Karangmalang",
      },
      {
        id: "331410",
        city_id: "3314",
        name: "Sragen",
      },
      {
        id: "331411",
        city_id: "3314",
        name: "Sidoharjo",
      },
      {
        id: "331412",
        city_id: "3314",
        name: "Tanon",
      },
      {
        id: "331413",
        city_id: "3314",
        name: "Gemolong",
      },
      {
        id: "331414",
        city_id: "3314",
        name: "Miri",
      },
      {
        id: "331415",
        city_id: "3314",
        name: "Sumberlawang",
      },
      {
        id: "331416",
        city_id: "3314",
        name: "Mondokan",
      },
      {
        id: "331417",
        city_id: "3314",
        name: "Sukodono",
      },
      {
        id: "331418",
        city_id: "3314",
        name: "Gesi",
      },
      {
        id: "331419",
        city_id: "3314",
        name: "Tangen",
      },
      {
        id: "331420",
        city_id: "3314",
        name: "Jenar",
      },
      {
        id: "331501",
        city_id: "3315",
        name: "Kedungjati",
      },
      {
        id: "331502",
        city_id: "3315",
        name: "Karangrayung",
      },
      {
        id: "331503",
        city_id: "3315",
        name: "Penawangan",
      },
      {
        id: "331504",
        city_id: "3315",
        name: "Toroh",
      },
      {
        id: "331505",
        city_id: "3315",
        name: "Geyer",
      },
      {
        id: "331506",
        city_id: "3315",
        name: "Pulokulon",
      },
      {
        id: "331507",
        city_id: "3315",
        name: "Kradenan",
      },
      {
        id: "331508",
        city_id: "3315",
        name: "Gabus",
      },
      {
        id: "331509",
        city_id: "3315",
        name: "Ngaringan",
      },
      {
        id: "331510",
        city_id: "3315",
        name: "Wirosari",
      },
      {
        id: "331511",
        city_id: "3315",
        name: "Tawangharjo",
      },
      {
        id: "331512",
        city_id: "3315",
        name: "Grobogan",
      },
      {
        id: "331513",
        city_id: "3315",
        name: "Purwodadi",
      },
      {
        id: "331514",
        city_id: "3315",
        name: "Brati",
      },
      {
        id: "331515",
        city_id: "3315",
        name: "Klambu",
      },
      {
        id: "331516",
        city_id: "3315",
        name: "Godong",
      },
      {
        id: "331517",
        city_id: "3315",
        name: "Gubug",
      },
      {
        id: "331518",
        city_id: "3315",
        name: "Tegowanu",
      },
      {
        id: "331519",
        city_id: "3315",
        name: "Tanggungharjo",
      },
      {
        id: "331601",
        city_id: "3316",
        name: "Jati",
      },
      {
        id: "331602",
        city_id: "3316",
        name: "Randublatung",
      },
      {
        id: "331603",
        city_id: "3316",
        name: "Kradenan",
      },
      {
        id: "331604",
        city_id: "3316",
        name: "Kedungtuban",
      },
      {
        id: "331605",
        city_id: "3316",
        name: "Cepu",
      },
      {
        id: "331606",
        city_id: "3316",
        name: "Sambong",
      },
      {
        id: "331607",
        city_id: "3316",
        name: "Jiken",
      },
      {
        id: "331608",
        city_id: "3316",
        name: "Jepon",
      },
      {
        id: "331609",
        city_id: "3316",
        name: "Blora",
      },
      {
        id: "331610",
        city_id: "3316",
        name: "Tunjungan",
      },
      {
        id: "331611",
        city_id: "3316",
        name: "Banjarejo",
      },
      {
        id: "331612",
        city_id: "3316",
        name: "Ngawen",
      },
      {
        id: "331613",
        city_id: "3316",
        name: "Kunduran",
      },
      {
        id: "331614",
        city_id: "3316",
        name: "Todanan",
      },
      {
        id: "331615",
        city_id: "3316",
        name: "Bogorejo",
      },
      {
        id: "331616",
        city_id: "3316",
        name: "Japah",
      },
      {
        id: "331701",
        city_id: "3317",
        name: "Sumber",
      },
      {
        id: "331702",
        city_id: "3317",
        name: "Bulu",
      },
      {
        id: "331703",
        city_id: "3317",
        name: "Gunem",
      },
      {
        id: "331704",
        city_id: "3317",
        name: "Sale",
      },
      {
        id: "331705",
        city_id: "3317",
        name: "Sarang",
      },
      {
        id: "331706",
        city_id: "3317",
        name: "Sedan",
      },
      {
        id: "331707",
        city_id: "3317",
        name: "Pamotan",
      },
      {
        id: "331708",
        city_id: "3317",
        name: "Sulang",
      },
      {
        id: "331709",
        city_id: "3317",
        name: "Kaliori",
      },
      {
        id: "331710",
        city_id: "3317",
        name: "Rembang",
      },
      {
        id: "331711",
        city_id: "3317",
        name: "Pancur",
      },
      {
        id: "331712",
        city_id: "3317",
        name: "Kragan",
      },
      {
        id: "331713",
        city_id: "3317",
        name: "Sluke",
      },
      {
        id: "331714",
        city_id: "3317",
        name: "Lasem",
      },
      {
        id: "331801",
        city_id: "3318",
        name: "Sukolilo",
      },
      {
        id: "331802",
        city_id: "3318",
        name: "Kayen",
      },
      {
        id: "331803",
        city_id: "3318",
        name: "Tambakromo",
      },
      {
        id: "331804",
        city_id: "3318",
        name: "Winong",
      },
      {
        id: "331805",
        city_id: "3318",
        name: "Pucakwangi",
      },
      {
        id: "331806",
        city_id: "3318",
        name: "Jaken",
      },
      {
        id: "331807",
        city_id: "3318",
        name: "Batangan",
      },
      {
        id: "331808",
        city_id: "3318",
        name: "Juwana",
      },
      {
        id: "331809",
        city_id: "3318",
        name: "Jakenan",
      },
      {
        id: "331810",
        city_id: "3318",
        name: "Pati",
      },
      {
        id: "331811",
        city_id: "3318",
        name: "Gabus",
      },
      {
        id: "331812",
        city_id: "3318",
        name: "Margorejo",
      },
      {
        id: "331813",
        city_id: "3318",
        name: "Gembong",
      },
      {
        id: "331814",
        city_id: "3318",
        name: "Tlogowungu",
      },
      {
        id: "331815",
        city_id: "3318",
        name: "Wedarijaksa",
      },
      {
        id: "331816",
        city_id: "3318",
        name: "Margoyoso",
      },
      {
        id: "331817",
        city_id: "3318",
        name: "Gunungwungkal",
      },
      {
        id: "331818",
        city_id: "3318",
        name: "Cluwak",
      },
      {
        id: "331819",
        city_id: "3318",
        name: "Tayu",
      },
      {
        id: "331820",
        city_id: "3318",
        name: "Dukuhseti",
      },
      {
        id: "331821",
        city_id: "3318",
        name: "Trangkil",
      },
      {
        id: "331901",
        city_id: "3319",
        name: "Kaliwungu",
      },
      {
        id: "331902",
        city_id: "3319",
        name: "Kota Kudus",
      },
      {
        id: "331903",
        city_id: "3319",
        name: "Jati",
      },
      {
        id: "331904",
        city_id: "3319",
        name: "Undaan",
      },
      {
        id: "331905",
        city_id: "3319",
        name: "Mejobo",
      },
      {
        id: "331906",
        city_id: "3319",
        name: "Jekulo",
      },
      {
        id: "331907",
        city_id: "3319",
        name: "Bae",
      },
      {
        id: "331908",
        city_id: "3319",
        name: "Gebog",
      },
      {
        id: "331909",
        city_id: "3319",
        name: "Dawe",
      },
      {
        id: "332001",
        city_id: "3320",
        name: "Kedung",
      },
      {
        id: "332002",
        city_id: "3320",
        name: "Pecangaan",
      },
      {
        id: "332003",
        city_id: "3320",
        name: "Welahan",
      },
      {
        id: "332004",
        city_id: "3320",
        name: "Mayong",
      },
      {
        id: "332005",
        city_id: "3320",
        name: "Batealit",
      },
      {
        id: "332006",
        city_id: "3320",
        name: "Jepara",
      },
      {
        id: "332007",
        city_id: "3320",
        name: "Mlonggo",
      },
      {
        id: "332008",
        city_id: "3320",
        name: "Bangsri",
      },
      {
        id: "332009",
        city_id: "3320",
        name: "Keling",
      },
      {
        id: "332010",
        city_id: "3320",
        name: "Karimun Jawa",
      },
      {
        id: "332011",
        city_id: "3320",
        name: "Tahunan",
      },
      {
        id: "332012",
        city_id: "3320",
        name: "Nalumsari",
      },
      {
        id: "332013",
        city_id: "3320",
        name: "Kalinyamatan",
      },
      {
        id: "332014",
        city_id: "3320",
        name: "Kembang",
      },
      {
        id: "332015",
        city_id: "3320",
        name: "Pakis Aji",
      },
      {
        id: "332016",
        city_id: "3320",
        name: "Donorojo",
      },
      {
        id: "332101",
        city_id: "3321",
        name: "Mranggen",
      },
      {
        id: "332102",
        city_id: "3321",
        name: "Karangawen",
      },
      {
        id: "332103",
        city_id: "3321",
        name: "Guntur",
      },
      {
        id: "332104",
        city_id: "3321",
        name: "Sayung",
      },
      {
        id: "332105",
        city_id: "3321",
        name: "Karangtengah",
      },
      {
        id: "332106",
        city_id: "3321",
        name: "Wonosalam",
      },
      {
        id: "332107",
        city_id: "3321",
        name: "Dempet",
      },
      {
        id: "332108",
        city_id: "3321",
        name: "Gajah",
      },
      {
        id: "332109",
        city_id: "3321",
        name: "Karanganyar",
      },
      {
        id: "332110",
        city_id: "3321",
        name: "Mijen",
      },
      {
        id: "332111",
        city_id: "3321",
        name: "Demak",
      },
      {
        id: "332112",
        city_id: "3321",
        name: "Bonang",
      },
      {
        id: "332113",
        city_id: "3321",
        name: "Wedung",
      },
      {
        id: "332114",
        city_id: "3321",
        name: "Kebonagung",
      },
      {
        id: "332201",
        city_id: "3322",
        name: "Getasan",
      },
      {
        id: "332202",
        city_id: "3322",
        name: "Tengaran",
      },
      {
        id: "332203",
        city_id: "3322",
        name: "Susukan",
      },
      {
        id: "332204",
        city_id: "3322",
        name: "Suruh",
      },
      {
        id: "332205",
        city_id: "3322",
        name: "Pabelan",
      },
      {
        id: "332206",
        city_id: "3322",
        name: "Tuntang",
      },
      {
        id: "332207",
        city_id: "3322",
        name: "Banyubiru",
      },
      {
        id: "332208",
        city_id: "3322",
        name: "Jambu",
      },
      {
        id: "332209",
        city_id: "3322",
        name: "Sumowono",
      },
      {
        id: "332210",
        city_id: "3322",
        name: "Ambarawa",
      },
      {
        id: "332211",
        city_id: "3322",
        name: "Bawen",
      },
      {
        id: "332212",
        city_id: "3322",
        name: "Bringin",
      },
      {
        id: "332213",
        city_id: "3322",
        name: "Bergas",
      },
      {
        id: "332215",
        city_id: "3322",
        name: "Pringapus",
      },
      {
        id: "332216",
        city_id: "3322",
        name: "Bancak",
      },
      {
        id: "332217",
        city_id: "3322",
        name: "Kaliwungu",
      },
      {
        id: "332218",
        city_id: "3322",
        name: "Ungaran Barat",
      },
      {
        id: "332219",
        city_id: "3322",
        name: "Ungaran Timur",
      },
      {
        id: "332220",
        city_id: "3322",
        name: "Bandungan",
      },
      {
        id: "332301",
        city_id: "3323",
        name: "Bulu",
      },
      {
        id: "332302",
        city_id: "3323",
        name: "Tembarak",
      },
      {
        id: "332303",
        city_id: "3323",
        name: "Temanggung",
      },
      {
        id: "332304",
        city_id: "3323",
        name: "Pringsurat",
      },
      {
        id: "332305",
        city_id: "3323",
        name: "Kaloran",
      },
      {
        id: "332306",
        city_id: "3323",
        name: "Kandangan",
      },
      {
        id: "332307",
        city_id: "3323",
        name: "Kedu",
      },
      {
        id: "332308",
        city_id: "3323",
        name: "Parakan",
      },
      {
        id: "332309",
        city_id: "3323",
        name: "Ngadirejo",
      },
      {
        id: "332310",
        city_id: "3323",
        name: "Jumo",
      },
      {
        id: "332311",
        city_id: "3323",
        name: "Tretep",
      },
      {
        id: "332312",
        city_id: "3323",
        name: "Candiroto",
      },
      {
        id: "332313",
        city_id: "3323",
        name: "Kranggan",
      },
      {
        id: "332314",
        city_id: "3323",
        name: "Tlogomulyo",
      },
      {
        id: "332315",
        city_id: "3323",
        name: "Selopampang",
      },
      {
        id: "332316",
        city_id: "3323",
        name: "Bansari",
      },
      {
        id: "332317",
        city_id: "3323",
        name: "Kledung",
      },
      {
        id: "332318",
        city_id: "3323",
        name: "Bejen",
      },
      {
        id: "332319",
        city_id: "3323",
        name: "Wonoboyo",
      },
      {
        id: "332320",
        city_id: "3323",
        name: "Gemawang",
      },
      {
        id: "332401",
        city_id: "3324",
        name: "Plantungan",
      },
      {
        id: "332402",
        city_id: "3324",
        name: "Pageruyung",
      },
      {
        id: "332403",
        city_id: "3324",
        name: "Sukorejo",
      },
      {
        id: "332404",
        city_id: "3324",
        name: "Patean",
      },
      {
        id: "332405",
        city_id: "3324",
        name: "Singorojo",
      },
      {
        id: "332406",
        city_id: "3324",
        name: "Limbangan",
      },
      {
        id: "332407",
        city_id: "3324",
        name: "Boja",
      },
      {
        id: "332408",
        city_id: "3324",
        name: "Kaliwungu",
      },
      {
        id: "332409",
        city_id: "3324",
        name: "Brangsong",
      },
      {
        id: "332410",
        city_id: "3324",
        name: "Pegandon",
      },
      {
        id: "332411",
        city_id: "3324",
        name: "Gemuh",
      },
      {
        id: "332412",
        city_id: "3324",
        name: "Weleri",
      },
      {
        id: "332413",
        city_id: "3324",
        name: "Cepiring",
      },
      {
        id: "332414",
        city_id: "3324",
        name: "Patebon",
      },
      {
        id: "332415",
        city_id: "3324",
        name: "Kendal",
      },
      {
        id: "332416",
        city_id: "3324",
        name: "Rowosari",
      },
      {
        id: "332417",
        city_id: "3324",
        name: "Kangkung",
      },
      {
        id: "332418",
        city_id: "3324",
        name: "Ringinarum",
      },
      {
        id: "332419",
        city_id: "3324",
        name: "Ngampel",
      },
      {
        id: "332420",
        city_id: "3324",
        name: "Kaliwungu Selatan",
      },
      {
        id: "332501",
        city_id: "3325",
        name: "Wonotunggal",
      },
      {
        id: "332502",
        city_id: "3325",
        name: "Bandar",
      },
      {
        id: "332503",
        city_id: "3325",
        name: "Blado",
      },
      {
        id: "332504",
        city_id: "3325",
        name: "Reban",
      },
      {
        id: "332505",
        city_id: "3325",
        name: "Bawang",
      },
      {
        id: "332506",
        city_id: "3325",
        name: "Tersono",
      },
      {
        id: "332507",
        city_id: "3325",
        name: "Gringsing",
      },
      {
        id: "332508",
        city_id: "3325",
        name: "Limpung",
      },
      {
        id: "332509",
        city_id: "3325",
        name: "Subah",
      },
      {
        id: "332510",
        city_id: "3325",
        name: "Tulis",
      },
      {
        id: "332511",
        city_id: "3325",
        name: "Batang",
      },
      {
        id: "332512",
        city_id: "3325",
        name: "Warungasem",
      },
      {
        id: "332513",
        city_id: "3325",
        name: "Kandeman",
      },
      {
        id: "332514",
        city_id: "3325",
        name: "Pecalungan",
      },
      {
        id: "332515",
        city_id: "3325",
        name: "Banyuputih",
      },
      {
        id: "332601",
        city_id: "3326",
        name: "Kandangserang",
      },
      {
        id: "332602",
        city_id: "3326",
        name: "Paninggaran",
      },
      {
        id: "332603",
        city_id: "3326",
        name: "Lebakbarang",
      },
      {
        id: "332604",
        city_id: "3326",
        name: "Petungkriyono",
      },
      {
        id: "332605",
        city_id: "3326",
        name: "Talun",
      },
      {
        id: "332606",
        city_id: "3326",
        name: "Doro",
      },
      {
        id: "332607",
        city_id: "3326",
        name: "Karanganyar",
      },
      {
        id: "332608",
        city_id: "3326",
        name: "Kajen",
      },
      {
        id: "332609",
        city_id: "3326",
        name: "Kesesi",
      },
      {
        id: "332610",
        city_id: "3326",
        name: "Sragi",
      },
      {
        id: "332611",
        city_id: "3326",
        name: "Bojong",
      },
      {
        id: "332612",
        city_id: "3326",
        name: "Wonopringgo",
      },
      {
        id: "332613",
        city_id: "3326",
        name: "Kedungwuni",
      },
      {
        id: "332614",
        city_id: "3326",
        name: "Buaran",
      },
      {
        id: "332615",
        city_id: "3326",
        name: "Tirto",
      },
      {
        id: "332616",
        city_id: "3326",
        name: "Wiradesa",
      },
      {
        id: "332617",
        city_id: "3326",
        name: "Siwalan",
      },
      {
        id: "332618",
        city_id: "3326",
        name: "Karangdadap",
      },
      {
        id: "332619",
        city_id: "3326",
        name: "Wonokerto",
      },
      {
        id: "332701",
        city_id: "3327",
        name: "Moga",
      },
      {
        id: "332702",
        city_id: "3327",
        name: "Pulosari",
      },
      {
        id: "332703",
        city_id: "3327",
        name: "Belik",
      },
      {
        id: "332704",
        city_id: "3327",
        name: "Watukumpul",
      },
      {
        id: "332705",
        city_id: "3327",
        name: "Bodeh",
      },
      {
        id: "332706",
        city_id: "3327",
        name: "Bantarbolang",
      },
      {
        id: "332707",
        city_id: "3327",
        name: "Randudongkal",
      },
      {
        id: "332708",
        city_id: "3327",
        name: "Pemalang",
      },
      {
        id: "332709",
        city_id: "3327",
        name: "Taman",
      },
      {
        id: "332710",
        city_id: "3327",
        name: "Petarukan",
      },
      {
        id: "332711",
        city_id: "3327",
        name: "Ampelgading",
      },
      {
        id: "332712",
        city_id: "3327",
        name: "Comal",
      },
      {
        id: "332713",
        city_id: "3327",
        name: "Ulujami",
      },
      {
        id: "332714",
        city_id: "3327",
        name: "Warungpring",
      },
      {
        id: "332801",
        city_id: "3328",
        name: "Margasari",
      },
      {
        id: "332802",
        city_id: "3328",
        name: "Bumijawa",
      },
      {
        id: "332803",
        city_id: "3328",
        name: "Bojong",
      },
      {
        id: "332804",
        city_id: "3328",
        name: "Balapulang",
      },
      {
        id: "332805",
        city_id: "3328",
        name: "Pagerbarang",
      },
      {
        id: "332806",
        city_id: "3328",
        name: "Lebaksiu",
      },
      {
        id: "332807",
        city_id: "3328",
        name: "Jatinegara",
      },
      {
        id: "332808",
        city_id: "3328",
        name: "Kedungbanteng",
      },
      {
        id: "332809",
        city_id: "3328",
        name: "Pangkah",
      },
      {
        id: "332810",
        city_id: "3328",
        name: "Slawi",
      },
      {
        id: "332811",
        city_id: "3328",
        name: "Adiwerna",
      },
      {
        id: "332812",
        city_id: "3328",
        name: "Talang",
      },
      {
        id: "332813",
        city_id: "3328",
        name: "Dukuhturi",
      },
      {
        id: "332814",
        city_id: "3328",
        name: "Tarub",
      },
      {
        id: "332815",
        city_id: "3328",
        name: "Kramat",
      },
      {
        id: "332816",
        city_id: "3328",
        name: "Suradadi",
      },
      {
        id: "332817",
        city_id: "3328",
        name: "Warureja",
      },
      {
        id: "332818",
        city_id: "3328",
        name: "Dukuhwaru",
      },
      {
        id: "332901",
        city_id: "3329",
        name: "Salem",
      },
      {
        id: "332902",
        city_id: "3329",
        name: "Bantarkawung",
      },
      {
        id: "332903",
        city_id: "3329",
        name: "Bumiayu",
      },
      {
        id: "332904",
        city_id: "3329",
        name: "Paguyangan",
      },
      {
        id: "332905",
        city_id: "3329",
        name: "Sirampog",
      },
      {
        id: "332906",
        city_id: "3329",
        name: "Tonjong",
      },
      {
        id: "332907",
        city_id: "3329",
        name: "Jatibarang",
      },
      {
        id: "332908",
        city_id: "3329",
        name: "Wanasari",
      },
      {
        id: "332909",
        city_id: "3329",
        name: "Brebes",
      },
      {
        id: "332910",
        city_id: "3329",
        name: "Songgom",
      },
      {
        id: "332911",
        city_id: "3329",
        name: "Kersana",
      },
      {
        id: "332912",
        city_id: "3329",
        name: "Losari",
      },
      {
        id: "332913",
        city_id: "3329",
        name: "Tanjung",
      },
      {
        id: "332914",
        city_id: "3329",
        name: "Bulakamba",
      },
      {
        id: "332915",
        city_id: "3329",
        name: "Larangan",
      },
      {
        id: "332916",
        city_id: "3329",
        name: "Ketanggungan",
      },
      {
        id: "332917",
        city_id: "3329",
        name: "Banjarharjo",
      },
      {
        id: "337101",
        city_id: "3371",
        name: "Magelang Selatan",
      },
      {
        id: "337102",
        city_id: "3371",
        name: "Magelang Utara",
      },
      {
        id: "337103",
        city_id: "3371",
        name: "Magelang Tengah",
      },
      {
        id: "337201",
        city_id: "3372",
        name: "Laweyan",
      },
      {
        id: "337202",
        city_id: "3372",
        name: "Serengan",
      },
      {
        id: "337203",
        city_id: "3372",
        name: "Pasar Kliwon",
      },
      {
        id: "337204",
        city_id: "3372",
        name: "Jebres",
      },
      {
        id: "337205",
        city_id: "3372",
        name: "Banjarsari",
      },
      {
        id: "337301",
        city_id: "3373",
        name: "Sidorejo",
      },
      {
        id: "337302",
        city_id: "3373",
        name: "Tingkir",
      },
      {
        id: "337303",
        city_id: "3373",
        name: "Argomulyo",
      },
      {
        id: "337304",
        city_id: "3373",
        name: "Sidomukti",
      },
      {
        id: "337401",
        city_id: "3374",
        name: "Semarang Tengah",
      },
      {
        id: "337402",
        city_id: "3374",
        name: "Semarang Utara",
      },
      {
        id: "337403",
        city_id: "3374",
        name: "Semarang Timur",
      },
      {
        id: "337404",
        city_id: "3374",
        name: "Gayamsari",
      },
      {
        id: "337405",
        city_id: "3374",
        name: "Genuk",
      },
      {
        id: "337406",
        city_id: "3374",
        name: "Pedurungan",
      },
      {
        id: "337407",
        city_id: "3374",
        name: "Semarang Selatan",
      },
      {
        id: "337408",
        city_id: "3374",
        name: "Candisari",
      },
      {
        id: "337409",
        city_id: "3374",
        name: "Gajahmungkur",
      },
      {
        id: "337410",
        city_id: "3374",
        name: "Tembalang",
      },
      {
        id: "337411",
        city_id: "3374",
        name: "Banyumanik",
      },
      {
        id: "337412",
        city_id: "3374",
        name: "Gunungpati",
      },
      {
        id: "337413",
        city_id: "3374",
        name: "Semarang Barat",
      },
      {
        id: "337414",
        city_id: "3374",
        name: "Mijen",
      },
      {
        id: "337415",
        city_id: "3374",
        name: "Ngaliyan",
      },
      {
        id: "337416",
        city_id: "3374",
        name: "Tugu",
      },
      {
        id: "337501",
        city_id: "3375",
        name: "Pekalongan Barat",
      },
      {
        id: "337502",
        city_id: "3375",
        name: "Pekalongan Timur",
      },
      {
        id: "337503",
        city_id: "3375",
        name: "Pekalongan Utara",
      },
      {
        id: "337504",
        city_id: "3375",
        name: "Pekalongan Selatan",
      },
      {
        id: "337601",
        city_id: "3376",
        name: "Tegal Barat",
      },
      {
        id: "337602",
        city_id: "3376",
        name: "Tegal Timur",
      },
      {
        id: "337603",
        city_id: "3376",
        name: "Tegal Selatan",
      },
      {
        id: "337604",
        city_id: "3376",
        name: "Margadana",
      },
      {
        id: "340101",
        city_id: "3401",
        name: "Temon",
      },
      {
        id: "340102",
        city_id: "3401",
        name: "Wates",
      },
      {
        id: "340103",
        city_id: "3401",
        name: "Panjatan",
      },
      {
        id: "340104",
        city_id: "3401",
        name: "Galur",
      },
      {
        id: "340105",
        city_id: "3401",
        name: "Lendah",
      },
      {
        id: "340106",
        city_id: "3401",
        name: "Sentolo",
      },
      {
        id: "340107",
        city_id: "3401",
        name: "Pengasih",
      },
      {
        id: "340108",
        city_id: "3401",
        name: "Kokap",
      },
      {
        id: "340109",
        city_id: "3401",
        name: "Girimulyo",
      },
      {
        id: "340110",
        city_id: "3401",
        name: "Nanggulan",
      },
      {
        id: "340111",
        city_id: "3401",
        name: "Samigaluh",
      },
      {
        id: "340112",
        city_id: "3401",
        name: "Kalibawang",
      },
      {
        id: "340201",
        city_id: "3402",
        name: "Srandakan",
      },
      {
        id: "340202",
        city_id: "3402",
        name: "Sanden",
      },
      {
        id: "340203",
        city_id: "3402",
        name: "Kretek",
      },
      {
        id: "340204",
        city_id: "3402",
        name: "Pundong",
      },
      {
        id: "340205",
        city_id: "3402",
        name: "Bambanglipuro",
      },
      {
        id: "340206",
        city_id: "3402",
        name: "Pandak",
      },
      {
        id: "340207",
        city_id: "3402",
        name: "Pajangan",
      },
      {
        id: "340208",
        city_id: "3402",
        name: "Bantul",
      },
      {
        id: "340209",
        city_id: "3402",
        name: "Jetis",
      },
      {
        id: "340210",
        city_id: "3402",
        name: "Imogiri",
      },
      {
        id: "340211",
        city_id: "3402",
        name: "Dlingo",
      },
      {
        id: "340212",
        city_id: "3402",
        name: "Banguntapan",
      },
      {
        id: "340213",
        city_id: "3402",
        name: "Pleret",
      },
      {
        id: "340214",
        city_id: "3402",
        name: "Piyungan",
      },
      {
        id: "340215",
        city_id: "3402",
        name: "Sewon",
      },
      {
        id: "340216",
        city_id: "3402",
        name: "Kasihan",
      },
      {
        id: "340217",
        city_id: "3402",
        name: "Sedayu",
      },
      {
        id: "340301",
        city_id: "3403",
        name: "Wonosari",
      },
      {
        id: "340302",
        city_id: "3403",
        name: "Nglipar",
      },
      {
        id: "340303",
        city_id: "3403",
        name: "Playen",
      },
      {
        id: "340304",
        city_id: "3403",
        name: "Patuk",
      },
      {
        id: "340305",
        city_id: "3403",
        name: "Paliyan",
      },
      {
        id: "340306",
        city_id: "3403",
        name: "Panggang",
      },
      {
        id: "340307",
        city_id: "3403",
        name: "Tepus",
      },
      {
        id: "340308",
        city_id: "3403",
        name: "Semanu",
      },
      {
        id: "340309",
        city_id: "3403",
        name: "Karangmojo",
      },
      {
        id: "340310",
        city_id: "3403",
        name: "Ponjong",
      },
      {
        id: "340311",
        city_id: "3403",
        name: "Rongkop",
      },
      {
        id: "340312",
        city_id: "3403",
        name: "Semin",
      },
      {
        id: "340313",
        city_id: "3403",
        name: "Ngawen",
      },
      {
        id: "340314",
        city_id: "3403",
        name: "Gedangsari",
      },
      {
        id: "340315",
        city_id: "3403",
        name: "Saptosari",
      },
      {
        id: "340316",
        city_id: "3403",
        name: "Girisubo",
      },
      {
        id: "340317",
        city_id: "3403",
        name: "Tanjungsari",
      },
      {
        id: "340318",
        city_id: "3403",
        name: "Purwosari",
      },
      {
        id: "340401",
        city_id: "3404",
        name: "Gamping",
      },
      {
        id: "340402",
        city_id: "3404",
        name: "Godean",
      },
      {
        id: "340403",
        city_id: "3404",
        name: "Moyudan",
      },
      {
        id: "340404",
        city_id: "3404",
        name: "Minggir",
      },
      {
        id: "340405",
        city_id: "3404",
        name: "Seyegan",
      },
      {
        id: "340406",
        city_id: "3404",
        name: "Mlati",
      },
      {
        id: "340407",
        city_id: "3404",
        name: "Depok",
      },
      {
        id: "340408",
        city_id: "3404",
        name: "Berbah",
      },
      {
        id: "340409",
        city_id: "3404",
        name: "Prambanan",
      },
      {
        id: "340410",
        city_id: "3404",
        name: "Kalasan",
      },
      {
        id: "340411",
        city_id: "3404",
        name: "Ngemplak",
      },
      {
        id: "340412",
        city_id: "3404",
        name: "Ngaglik",
      },
      {
        id: "340413",
        city_id: "3404",
        name: "Sleman",
      },
      {
        id: "340414",
        city_id: "3404",
        name: "Tempel",
      },
      {
        id: "340415",
        city_id: "3404",
        name: "Turi",
      },
      {
        id: "340416",
        city_id: "3404",
        name: "Pakem",
      },
      {
        id: "340417",
        city_id: "3404",
        name: "Cangkringan",
      },
      {
        id: "347101",
        city_id: "3471",
        name: "Tegalrejo",
      },
      {
        id: "347102",
        city_id: "3471",
        name: "Jetis",
      },
      {
        id: "347103",
        city_id: "3471",
        name: "Gondokusuman",
      },
      {
        id: "347104",
        city_id: "3471",
        name: "Danurejan",
      },
      {
        id: "347105",
        city_id: "3471",
        name: "Gedongtengen",
      },
      {
        id: "347106",
        city_id: "3471",
        name: "Ngampilan",
      },
      {
        id: "347107",
        city_id: "3471",
        name: "Wirobrajan",
      },
      {
        id: "347108",
        city_id: "3471",
        name: "Mantrijeron",
      },
      {
        id: "347109",
        city_id: "3471",
        name: "Kraton",
      },
      {
        id: "347110",
        city_id: "3471",
        name: "Gondomanan",
      },
      {
        id: "347111",
        city_id: "3471",
        name: "Pakualaman",
      },
      {
        id: "347112",
        city_id: "3471",
        name: "Mergangsan",
      },
      {
        id: "347113",
        city_id: "3471",
        name: "Umbulharjo",
      },
      {
        id: "347114",
        city_id: "3471",
        name: "Kotagede",
      },
      {
        id: "350101",
        city_id: "3501",
        name: "Donorojo",
      },
      {
        id: "350102",
        city_id: "3501",
        name: "Pringkuku",
      },
      {
        id: "350103",
        city_id: "3501",
        name: "Punung",
      },
      {
        id: "350104",
        city_id: "3501",
        name: "Pacitan",
      },
      {
        id: "350105",
        city_id: "3501",
        name: "Kebonagung",
      },
      {
        id: "350106",
        city_id: "3501",
        name: "Arjosari",
      },
      {
        id: "350107",
        city_id: "3501",
        name: "Nawangan",
      },
      {
        id: "350108",
        city_id: "3501",
        name: "Bandar",
      },
      {
        id: "350109",
        city_id: "3501",
        name: "Tegalombo",
      },
      {
        id: "350110",
        city_id: "3501",
        name: "Tulakan",
      },
      {
        id: "350111",
        city_id: "3501",
        name: "Ngadirojo",
      },
      {
        id: "350112",
        city_id: "3501",
        name: "Sudimoro",
      },
      {
        id: "350201",
        city_id: "3502",
        name: "Slahung",
      },
      {
        id: "350202",
        city_id: "3502",
        name: "Ngrayun",
      },
      {
        id: "350203",
        city_id: "3502",
        name: "Bungkal",
      },
      {
        id: "350204",
        city_id: "3502",
        name: "Sambit",
      },
      {
        id: "350205",
        city_id: "3502",
        name: "Sawoo",
      },
      {
        id: "350206",
        city_id: "3502",
        name: "Sooko",
      },
      {
        id: "350207",
        city_id: "3502",
        name: "Pulung",
      },
      {
        id: "350208",
        city_id: "3502",
        name: "Mlarak",
      },
      {
        id: "350209",
        city_id: "3502",
        name: "Jetis",
      },
      {
        id: "350210",
        city_id: "3502",
        name: "Siman",
      },
      {
        id: "350211",
        city_id: "3502",
        name: "Balong",
      },
      {
        id: "350212",
        city_id: "3502",
        name: "Kauman",
      },
      {
        id: "350213",
        city_id: "3502",
        name: "Badegan",
      },
      {
        id: "350214",
        city_id: "3502",
        name: "Sampung",
      },
      {
        id: "350215",
        city_id: "3502",
        name: "Sukorejo",
      },
      {
        id: "350216",
        city_id: "3502",
        name: "Babadan",
      },
      {
        id: "350217",
        city_id: "3502",
        name: "Ponorogo",
      },
      {
        id: "350218",
        city_id: "3502",
        name: "Jenangan",
      },
      {
        id: "350219",
        city_id: "3502",
        name: "Ngebel",
      },
      {
        id: "350220",
        city_id: "3502",
        name: "Jambon",
      },
      {
        id: "350221",
        city_id: "3502",
        name: "Pudak",
      },
      {
        id: "350301",
        city_id: "3503",
        name: "Panggul",
      },
      {
        id: "350302",
        city_id: "3503",
        name: "Munjungan",
      },
      {
        id: "350303",
        city_id: "3503",
        name: "Pule",
      },
      {
        id: "350304",
        city_id: "3503",
        name: "Dongko",
      },
      {
        id: "350305",
        city_id: "3503",
        name: "Tugu",
      },
      {
        id: "350306",
        city_id: "3503",
        name: "Karangan",
      },
      {
        id: "350307",
        city_id: "3503",
        name: "Kampak",
      },
      {
        id: "350308",
        city_id: "3503",
        name: "Watulimo",
      },
      {
        id: "350309",
        city_id: "3503",
        name: "Bendungan",
      },
      {
        id: "350310",
        city_id: "3503",
        name: "Gandusari",
      },
      {
        id: "350311",
        city_id: "3503",
        name: "Trenggalek",
      },
      {
        id: "350312",
        city_id: "3503",
        name: "Pogalan",
      },
      {
        id: "350313",
        city_id: "3503",
        name: "Durenan",
      },
      {
        id: "350314",
        city_id: "3503",
        name: "Suruh",
      },
      {
        id: "350401",
        city_id: "3504",
        name: "Tulungagung",
      },
      {
        id: "350402",
        city_id: "3504",
        name: "Boyolangu",
      },
      {
        id: "350403",
        city_id: "3504",
        name: "Kedungwaru",
      },
      {
        id: "350404",
        city_id: "3504",
        name: "Ngantru",
      },
      {
        id: "350405",
        city_id: "3504",
        name: "Kauman",
      },
      {
        id: "350406",
        city_id: "3504",
        name: "Pagerwojo",
      },
      {
        id: "350407",
        city_id: "3504",
        name: "Sendang",
      },
      {
        id: "350408",
        city_id: "3504",
        name: "Karangrejo",
      },
      {
        id: "350409",
        city_id: "3504",
        name: "Gondang",
      },
      {
        id: "350410",
        city_id: "3504",
        name: "Sumbergempol",
      },
      {
        id: "350411",
        city_id: "3504",
        name: "Ngunut",
      },
      {
        id: "350412",
        city_id: "3504",
        name: "Pucanglaban",
      },
      {
        id: "350413",
        city_id: "3504",
        name: "Rejotangan",
      },
      {
        id: "350414",
        city_id: "3504",
        name: "Kalidawir",
      },
      {
        id: "350415",
        city_id: "3504",
        name: "Besuki",
      },
      {
        id: "350416",
        city_id: "3504",
        name: "Campurdarat",
      },
      {
        id: "350417",
        city_id: "3504",
        name: "Bandung",
      },
      {
        id: "350418",
        city_id: "3504",
        name: "Pakel",
      },
      {
        id: "350419",
        city_id: "3504",
        name: "Tanggunggunung",
      },
      {
        id: "350501",
        city_id: "3505",
        name: "Wonodadi",
      },
      {
        id: "350502",
        city_id: "3505",
        name: "Udanawu",
      },
      {
        id: "350503",
        city_id: "3505",
        name: "Srengat",
      },
      {
        id: "350504",
        city_id: "3505",
        name: "Kademangan",
      },
      {
        id: "350505",
        city_id: "3505",
        name: "Bakung",
      },
      {
        id: "350506",
        city_id: "3505",
        name: "Ponggok",
      },
      {
        id: "350507",
        city_id: "3505",
        name: "Sanankulon",
      },
      {
        id: "350508",
        city_id: "3505",
        name: "Wonotirto",
      },
      {
        id: "350509",
        city_id: "3505",
        name: "Nglegok",
      },
      {
        id: "350510",
        city_id: "3505",
        name: "Kanigoro",
      },
      {
        id: "350511",
        city_id: "3505",
        name: "Garum",
      },
      {
        id: "350512",
        city_id: "3505",
        name: "Sutojayan",
      },
      {
        id: "350513",
        city_id: "3505",
        name: "Panggungrejo",
      },
      {
        id: "350514",
        city_id: "3505",
        name: "Talun",
      },
      {
        id: "350515",
        city_id: "3505",
        name: "Gandusari",
      },
      {
        id: "350516",
        city_id: "3505",
        name: "Binangun",
      },
      {
        id: "350517",
        city_id: "3505",
        name: "Wlingi",
      },
      {
        id: "350518",
        city_id: "3505",
        name: "Doko",
      },
      {
        id: "350519",
        city_id: "3505",
        name: "Kesamben",
      },
      {
        id: "350520",
        city_id: "3505",
        name: "Wates",
      },
      {
        id: "350521",
        city_id: "3505",
        name: "Selorejo",
      },
      {
        id: "350522",
        city_id: "3505",
        name: "Selopuro",
      },
      {
        id: "350601",
        city_id: "3506",
        name: "Semen",
      },
      {
        id: "350602",
        city_id: "3506",
        name: "Mojo",
      },
      {
        id: "350603",
        city_id: "3506",
        name: "Kras",
      },
      {
        id: "350604",
        city_id: "3506",
        name: "Ngadiluwih",
      },
      {
        id: "350605",
        city_id: "3506",
        name: "Kandat",
      },
      {
        id: "350606",
        city_id: "3506",
        name: "Wates",
      },
      {
        id: "350607",
        city_id: "3506",
        name: "Ngancar",
      },
      {
        id: "350608",
        city_id: "3506",
        name: "Puncu",
      },
      {
        id: "350609",
        city_id: "3506",
        name: "Plosoklaten",
      },
      {
        id: "350610",
        city_id: "3506",
        name: "Gurah",
      },
      {
        id: "350611",
        city_id: "3506",
        name: "Pagu",
      },
      {
        id: "350612",
        city_id: "3506",
        name: "Gampengrejo",
      },
      {
        id: "350613",
        city_id: "3506",
        name: "Grogol",
      },
      {
        id: "350614",
        city_id: "3506",
        name: "Papar",
      },
      {
        id: "350615",
        city_id: "3506",
        name: "Purwoasri",
      },
      {
        id: "350616",
        city_id: "3506",
        name: "Plemahan",
      },
      {
        id: "350617",
        city_id: "3506",
        name: "Pare",
      },
      {
        id: "350618",
        city_id: "3506",
        name: "Kepung",
      },
      {
        id: "350619",
        city_id: "3506",
        name: "Kandangan",
      },
      {
        id: "350620",
        city_id: "3506",
        name: "Tarokan",
      },
      {
        id: "350621",
        city_id: "3506",
        name: "Kunjang",
      },
      {
        id: "350622",
        city_id: "3506",
        name: "Banyakan",
      },
      {
        id: "350623",
        city_id: "3506",
        name: "Ringinrejo",
      },
      {
        id: "350624",
        city_id: "3506",
        name: "Kayen Kidul",
      },
      {
        id: "350625",
        city_id: "3506",
        name: "Ngasem",
      },
      {
        id: "350626",
        city_id: "3506",
        name: "Badas",
      },
      {
        id: "350701",
        city_id: "3507",
        name: "Donomulyo",
      },
      {
        id: "350702",
        city_id: "3507",
        name: "Pagak",
      },
      {
        id: "350703",
        city_id: "3507",
        name: "Bantur",
      },
      {
        id: "350704",
        city_id: "3507",
        name: "Sumbermanjing Wetan",
      },
      {
        id: "350705",
        city_id: "3507",
        name: "Dampit",
      },
      {
        id: "350706",
        city_id: "3507",
        name: "Ampelgading",
      },
      {
        id: "350707",
        city_id: "3507",
        name: "Poncokusumo",
      },
      {
        id: "350708",
        city_id: "3507",
        name: "Wajak",
      },
      {
        id: "350709",
        city_id: "3507",
        name: "Turen",
      },
      {
        id: "350710",
        city_id: "3507",
        name: "Gondanglegi",
      },
      {
        id: "350711",
        city_id: "3507",
        name: "Kalipare",
      },
      {
        id: "350712",
        city_id: "3507",
        name: "Sumberpucung",
      },
      {
        id: "350713",
        city_id: "3507",
        name: "Kepanjen",
      },
      {
        id: "350714",
        city_id: "3507",
        name: "Bululawang",
      },
      {
        id: "350715",
        city_id: "3507",
        name: "Tajinan",
      },
      {
        id: "350716",
        city_id: "3507",
        name: "Tumpang",
      },
      {
        id: "350717",
        city_id: "3507",
        name: "Jabung",
      },
      {
        id: "350718",
        city_id: "3507",
        name: "Pakis",
      },
      {
        id: "350719",
        city_id: "3507",
        name: "Pakisaji",
      },
      {
        id: "350720",
        city_id: "3507",
        name: "Ngajum",
      },
      {
        id: "350721",
        city_id: "3507",
        name: "Wagir",
      },
      {
        id: "350722",
        city_id: "3507",
        name: "Dau",
      },
      {
        id: "350723",
        city_id: "3507",
        name: "Karang Ploso",
      },
      {
        id: "350724",
        city_id: "3507",
        name: "Singosari",
      },
      {
        id: "350725",
        city_id: "3507",
        name: "Lawang",
      },
      {
        id: "350726",
        city_id: "3507",
        name: "Pujon",
      },
      {
        id: "350727",
        city_id: "3507",
        name: "Ngantang",
      },
      {
        id: "350728",
        city_id: "3507",
        name: "Kasembon",
      },
      {
        id: "350729",
        city_id: "3507",
        name: "Gedangan",
      },
      {
        id: "350730",
        city_id: "3507",
        name: "Tirtoyudo",
      },
      {
        id: "350731",
        city_id: "3507",
        name: "Kromengan",
      },
      {
        id: "350732",
        city_id: "3507",
        name: "Wonosari",
      },
      {
        id: "350733",
        city_id: "3507",
        name: "Pagelaran",
      },
      {
        id: "350801",
        city_id: "3508",
        name: "Tempursari",
      },
      {
        id: "350802",
        city_id: "3508",
        name: "Pronojiwo",
      },
      {
        id: "350803",
        city_id: "3508",
        name: "Candipuro",
      },
      {
        id: "350804",
        city_id: "3508",
        name: "Pasirian",
      },
      {
        id: "350805",
        city_id: "3508",
        name: "Tempeh",
      },
      {
        id: "350806",
        city_id: "3508",
        name: "Kunir",
      },
      {
        id: "350807",
        city_id: "3508",
        name: "Yosowilangun",
      },
      {
        id: "350808",
        city_id: "3508",
        name: "Rowokangkung",
      },
      {
        id: "350809",
        city_id: "3508",
        name: "Tekung",
      },
      {
        id: "350810",
        city_id: "3508",
        name: "Lumajang",
      },
      {
        id: "350811",
        city_id: "3508",
        name: "Pasrujambe",
      },
      {
        id: "350812",
        city_id: "3508",
        name: "Senduro",
      },
      {
        id: "350813",
        city_id: "3508",
        name: "Gucialit",
      },
      {
        id: "350814",
        city_id: "3508",
        name: "Padang",
      },
      {
        id: "350815",
        city_id: "3508",
        name: "Sukodono",
      },
      {
        id: "350816",
        city_id: "3508",
        name: "Kedungjajang",
      },
      {
        id: "350817",
        city_id: "3508",
        name: "Jatiroto",
      },
      {
        id: "350818",
        city_id: "3508",
        name: "Randuagung",
      },
      {
        id: "350819",
        city_id: "3508",
        name: "Klakah",
      },
      {
        id: "350820",
        city_id: "3508",
        name: "Ranuyoso",
      },
      {
        id: "350821",
        city_id: "3508",
        name: "Sumbersuko",
      },
      {
        id: "350901",
        city_id: "3509",
        name: "Jombang",
      },
      {
        id: "350902",
        city_id: "3509",
        name: "Kencong",
      },
      {
        id: "350903",
        city_id: "3509",
        name: "Sumberbaru",
      },
      {
        id: "350904",
        city_id: "3509",
        name: "Gumukmas",
      },
      {
        id: "350905",
        city_id: "3509",
        name: "Umbulsari",
      },
      {
        id: "350906",
        city_id: "3509",
        name: "Tanggul",
      },
      {
        id: "350907",
        city_id: "3509",
        name: "Semboro",
      },
      {
        id: "350908",
        city_id: "3509",
        name: "Puger",
      },
      {
        id: "350909",
        city_id: "3509",
        name: "Bangsalsari",
      },
      {
        id: "350910",
        city_id: "3509",
        name: "Balung",
      },
      {
        id: "350911",
        city_id: "3509",
        name: "Wuluhan",
      },
      {
        id: "350912",
        city_id: "3509",
        name: "Ambulu",
      },
      {
        id: "350913",
        city_id: "3509",
        name: "Rambipuji",
      },
      {
        id: "350914",
        city_id: "3509",
        name: "Panti",
      },
      {
        id: "350915",
        city_id: "3509",
        name: "Sukorambi",
      },
      {
        id: "350916",
        city_id: "3509",
        name: "Jenggawah",
      },
      {
        id: "350917",
        city_id: "3509",
        name: "Ajung",
      },
      {
        id: "350918",
        city_id: "3509",
        name: "Tempurejo",
      },
      {
        id: "350919",
        city_id: "3509",
        name: "Kaliwates",
      },
      {
        id: "350920",
        city_id: "3509",
        name: "Patrang",
      },
      {
        id: "350921",
        city_id: "3509",
        name: "Sumbersari",
      },
      {
        id: "350922",
        city_id: "3509",
        name: "Arjasa",
      },
      {
        id: "350923",
        city_id: "3509",
        name: "Mumbulsari",
      },
      {
        id: "350924",
        city_id: "3509",
        name: "Pakusari",
      },
      {
        id: "350925",
        city_id: "3509",
        name: "Jelbuk",
      },
      {
        id: "350926",
        city_id: "3509",
        name: "Mayang",
      },
      {
        id: "350927",
        city_id: "3509",
        name: "Kalisat",
      },
      {
        id: "350928",
        city_id: "3509",
        name: "Ledokombo",
      },
      {
        id: "350929",
        city_id: "3509",
        name: "Sukowono",
      },
      {
        id: "350930",
        city_id: "3509",
        name: "Silo",
      },
      {
        id: "350931",
        city_id: "3509",
        name: "Sumberjambe",
      },
      {
        id: "351001",
        city_id: "3510",
        name: "Pesanggaran",
      },
      {
        id: "351002",
        city_id: "3510",
        name: "Bangorejo",
      },
      {
        id: "351003",
        city_id: "3510",
        name: "Purwoharjo",
      },
      {
        id: "351004",
        city_id: "3510",
        name: "Tegaldlimo",
      },
      {
        id: "351005",
        city_id: "3510",
        name: "Muncar",
      },
      {
        id: "351006",
        city_id: "3510",
        name: "Cluring",
      },
      {
        id: "351007",
        city_id: "3510",
        name: "Gambiran",
      },
      {
        id: "351008",
        city_id: "3510",
        name: "Srono",
      },
      {
        id: "351009",
        city_id: "3510",
        name: "Genteng",
      },
      {
        id: "351010",
        city_id: "3510",
        name: "Glenmore",
      },
      {
        id: "351011",
        city_id: "3510",
        name: "Kalibaru",
      },
      {
        id: "351012",
        city_id: "3510",
        name: "Singojuruh",
      },
      {
        id: "351013",
        city_id: "3510",
        name: "Rogojampi",
      },
      {
        id: "351014",
        city_id: "3510",
        name: "Kabat",
      },
      {
        id: "351015",
        city_id: "3510",
        name: "Glagah",
      },
      {
        id: "351016",
        city_id: "3510",
        name: "Banyuwangi",
      },
      {
        id: "351017",
        city_id: "3510",
        name: "Giri",
      },
      {
        id: "351018",
        city_id: "3510",
        name: "Wongsorejo",
      },
      {
        id: "351019",
        city_id: "3510",
        name: "Songgon",
      },
      {
        id: "351020",
        city_id: "3510",
        name: "Sempu",
      },
      {
        id: "351021",
        city_id: "3510",
        name: "Kalipuro",
      },
      {
        id: "351022",
        city_id: "3510",
        name: "Siliragung",
      },
      {
        id: "351023",
        city_id: "3510",
        name: "Tegalsari",
      },
      {
        id: "351024",
        city_id: "3510",
        name: "Licin",
      },
      {
        id: "351025",
        city_id: "3510",
        name: "Blimbingsari",
      },
      {
        id: "351101",
        city_id: "3511",
        name: "Maesan",
      },
      {
        id: "351102",
        city_id: "3511",
        name: "Tamanan",
      },
      {
        id: "351103",
        city_id: "3511",
        name: "Tlogosari",
      },
      {
        id: "351104",
        city_id: "3511",
        name: "Sukosari",
      },
      {
        id: "351105",
        city_id: "3511",
        name: "Pujer",
      },
      {
        id: "351106",
        city_id: "3511",
        name: "Grujugan",
      },
      {
        id: "351107",
        city_id: "3511",
        name: "Curahdami",
      },
      {
        id: "351108",
        city_id: "3511",
        name: "Tenggarang",
      },
      {
        id: "351109",
        city_id: "3511",
        name: "Wonosari",
      },
      {
        id: "351110",
        city_id: "3511",
        name: "Tapen",
      },
      {
        id: "351111",
        city_id: "3511",
        name: "Bondowoso",
      },
      {
        id: "351112",
        city_id: "3511",
        name: "Wringin",
      },
      {
        id: "351113",
        city_id: "3511",
        name: "Tegalampel",
      },
      {
        id: "351114",
        city_id: "3511",
        name: "Klabang",
      },
      {
        id: "351115",
        city_id: "3511",
        name: "Cermee",
      },
      {
        id: "351116",
        city_id: "3511",
        name: "Prajekan",
      },
      {
        id: "351117",
        city_id: "3511",
        name: "Pakem",
      },
      {
        id: "351118",
        city_id: "3511",
        name: "Sumberwringin",
      },
      {
        id: "351119",
        city_id: "3511",
        name: "Sempol",
      },
      {
        id: "351120",
        city_id: "3511",
        name: "Binakal",
      },
      {
        id: "351121",
        city_id: "3511",
        name: "Taman Krocok",
      },
      {
        id: "351122",
        city_id: "3511",
        name: "Botolinggo",
      },
      {
        id: "351123",
        city_id: "3511",
        name: "Jambesari Darus Sholah",
      },
      {
        id: "351201",
        city_id: "3512",
        name: "Jatibanteng",
      },
      {
        id: "351202",
        city_id: "3512",
        name: "Besuki",
      },
      {
        id: "351203",
        city_id: "3512",
        name: "Suboh",
      },
      {
        id: "351204",
        city_id: "3512",
        name: "Mlandingan",
      },
      {
        id: "351205",
        city_id: "3512",
        name: "Kendit",
      },
      {
        id: "351206",
        city_id: "3512",
        name: "Panarukan",
      },
      {
        id: "351207",
        city_id: "3512",
        name: "Situbondo",
      },
      {
        id: "351208",
        city_id: "3512",
        name: "Panji",
      },
      {
        id: "351209",
        city_id: "3512",
        name: "Mangaran",
      },
      {
        id: "351210",
        city_id: "3512",
        name: "Kapongan",
      },
      {
        id: "351211",
        city_id: "3512",
        name: "Arjasa",
      },
      {
        id: "351212",
        city_id: "3512",
        name: "Jangkar",
      },
      {
        id: "351213",
        city_id: "3512",
        name: "Asembagus",
      },
      {
        id: "351214",
        city_id: "3512",
        name: "Banyuputih",
      },
      {
        id: "351215",
        city_id: "3512",
        name: "Sumbermalang",
      },
      {
        id: "351216",
        city_id: "3512",
        name: "Banyuglugur",
      },
      {
        id: "351217",
        city_id: "3512",
        name: "Bungatan",
      },
      {
        id: "351301",
        city_id: "3513",
        name: "Sukapura",
      },
      {
        id: "351302",
        city_id: "3513",
        name: "Sumber",
      },
      {
        id: "351303",
        city_id: "3513",
        name: "Kuripan",
      },
      {
        id: "351304",
        city_id: "3513",
        name: "Bantaran",
      },
      {
        id: "351305",
        city_id: "3513",
        name: "Leces",
      },
      {
        id: "351306",
        city_id: "3513",
        name: "Banyuanyar",
      },
      {
        id: "351307",
        city_id: "3513",
        name: "Tiris",
      },
      {
        id: "351308",
        city_id: "3513",
        name: "Krucil",
      },
      {
        id: "351309",
        city_id: "3513",
        name: "Gading",
      },
      {
        id: "351310",
        city_id: "3513",
        name: "Pakuniran",
      },
      {
        id: "351311",
        city_id: "3513",
        name: "Kotaanyar",
      },
      {
        id: "351312",
        city_id: "3513",
        name: "Paiton",
      },
      {
        id: "351313",
        city_id: "3513",
        name: "Besuk",
      },
      {
        id: "351314",
        city_id: "3513",
        name: "Kraksaan",
      },
      {
        id: "351315",
        city_id: "3513",
        name: "Krejengan",
      },
      {
        id: "351316",
        city_id: "3513",
        name: "Pejarakan",
      },
      {
        id: "351317",
        city_id: "3513",
        name: "Maron",
      },
      {
        id: "351318",
        city_id: "3513",
        name: "Gending",
      },
      {
        id: "351319",
        city_id: "3513",
        name: "Dringu",
      },
      {
        id: "351320",
        city_id: "3513",
        name: "Tegalsiwalan",
      },
      {
        id: "351321",
        city_id: "3513",
        name: "Sumberasih",
      },
      {
        id: "351322",
        city_id: "3513",
        name: "Wonomerto",
      },
      {
        id: "351323",
        city_id: "3513",
        name: "Tongas",
      },
      {
        id: "351324",
        city_id: "3513",
        name: "Lumbang",
      },
      {
        id: "351401",
        city_id: "3514",
        name: "Purwodadi",
      },
      {
        id: "351402",
        city_id: "3514",
        name: "Tutur",
      },
      {
        id: "351403",
        city_id: "3514",
        name: "Puspo",
      },
      {
        id: "351404",
        city_id: "3514",
        name: "Lumbang",
      },
      {
        id: "351405",
        city_id: "3514",
        name: "Pasrepan",
      },
      {
        id: "351406",
        city_id: "3514",
        name: "Kejayan",
      },
      {
        id: "351407",
        city_id: "3514",
        name: "Wonorejo",
      },
      {
        id: "351408",
        city_id: "3514",
        name: "Purwosari",
      },
      {
        id: "351409",
        city_id: "3514",
        name: "Sukorejo",
      },
      {
        id: "351410",
        city_id: "3514",
        name: "Prigen",
      },
      {
        id: "351411",
        city_id: "3514",
        name: "Pandaan",
      },
      {
        id: "351412",
        city_id: "3514",
        name: "Gempol",
      },
      {
        id: "351413",
        city_id: "3514",
        name: "Beji",
      },
      {
        id: "351414",
        city_id: "3514",
        name: "Bangil",
      },
      {
        id: "351415",
        city_id: "3514",
        name: "Rembang",
      },
      {
        id: "351416",
        city_id: "3514",
        name: "Kraton",
      },
      {
        id: "351417",
        city_id: "3514",
        name: "Pohjentrek",
      },
      {
        id: "351418",
        city_id: "3514",
        name: "Gondangwetan",
      },
      {
        id: "351419",
        city_id: "3514",
        name: "Winongan",
      },
      {
        id: "351420",
        city_id: "3514",
        name: "Grati",
      },
      {
        id: "351421",
        city_id: "3514",
        name: "Nguling",
      },
      {
        id: "351422",
        city_id: "3514",
        name: "Lekok",
      },
      {
        id: "351423",
        city_id: "3514",
        name: "Rejoso",
      },
      {
        id: "351424",
        city_id: "3514",
        name: "Tosari",
      },
      {
        id: "351501",
        city_id: "3515",
        name: "Tarik",
      },
      {
        id: "351502",
        city_id: "3515",
        name: "Prambon",
      },
      {
        id: "351503",
        city_id: "3515",
        name: "Krembung",
      },
      {
        id: "351504",
        city_id: "3515",
        name: "Porong",
      },
      {
        id: "351505",
        city_id: "3515",
        name: "Jabon",
      },
      {
        id: "351506",
        city_id: "3515",
        name: "Tanggulangin",
      },
      {
        id: "351507",
        city_id: "3515",
        name: "Candi",
      },
      {
        id: "351508",
        city_id: "3515",
        name: "Sidoarjo",
      },
      {
        id: "351509",
        city_id: "3515",
        name: "Tulangan",
      },
      {
        id: "351510",
        city_id: "3515",
        name: "Wonoayu",
      },
      {
        id: "351511",
        city_id: "3515",
        name: "Krian",
      },
      {
        id: "351512",
        city_id: "3515",
        name: "Balongbendo",
      },
      {
        id: "351513",
        city_id: "3515",
        name: "Taman",
      },
      {
        id: "351514",
        city_id: "3515",
        name: "Sukodono",
      },
      {
        id: "351515",
        city_id: "3515",
        name: "Buduran",
      },
      {
        id: "351516",
        city_id: "3515",
        name: "Gedangan",
      },
      {
        id: "351517",
        city_id: "3515",
        name: "Sedati",
      },
      {
        id: "351518",
        city_id: "3515",
        name: "Waru",
      },
      {
        id: "351601",
        city_id: "3516",
        name: "Jatirejo",
      },
      {
        id: "351602",
        city_id: "3516",
        name: "Gondang",
      },
      {
        id: "351603",
        city_id: "3516",
        name: "Pacet",
      },
      {
        id: "351604",
        city_id: "3516",
        name: "Trawas",
      },
      {
        id: "351605",
        city_id: "3516",
        name: "Ngoro",
      },
      {
        id: "351606",
        city_id: "3516",
        name: "Pungging",
      },
      {
        id: "351607",
        city_id: "3516",
        name: "Kutorejo",
      },
      {
        id: "351608",
        city_id: "3516",
        name: "Mojosari",
      },
      {
        id: "351609",
        city_id: "3516",
        name: "Dlanggu",
      },
      {
        id: "351610",
        city_id: "3516",
        name: "Bangsal",
      },
      {
        id: "351611",
        city_id: "3516",
        name: "Puri",
      },
      {
        id: "351612",
        city_id: "3516",
        name: "Trowulan",
      },
      {
        id: "351613",
        city_id: "3516",
        name: "Sooko",
      },
      {
        id: "351614",
        city_id: "3516",
        name: "Gedeg",
      },
      {
        id: "351615",
        city_id: "3516",
        name: "Kemlagi",
      },
      {
        id: "351616",
        city_id: "3516",
        name: "Jetis",
      },
      {
        id: "351617",
        city_id: "3516",
        name: "Dawarblandong",
      },
      {
        id: "351618",
        city_id: "3516",
        name: "Mojoanyar",
      },
      {
        id: "351701",
        city_id: "3517",
        name: "Perak",
      },
      {
        id: "351702",
        city_id: "3517",
        name: "Gudo",
      },
      {
        id: "351703",
        city_id: "3517",
        name: "Ngoro",
      },
      {
        id: "351704",
        city_id: "3517",
        name: "Bareng",
      },
      {
        id: "351705",
        city_id: "3517",
        name: "Wonosalam",
      },
      {
        id: "351706",
        city_id: "3517",
        name: "Mojoagung",
      },
      {
        id: "351707",
        city_id: "3517",
        name: "Mojowarno",
      },
      {
        id: "351708",
        city_id: "3517",
        name: "Diwek",
      },
      {
        id: "351709",
        city_id: "3517",
        name: "Jombang",
      },
      {
        id: "351710",
        city_id: "3517",
        name: "Peterongan",
      },
      {
        id: "351711",
        city_id: "3517",
        name: "Sumobito",
      },
      {
        id: "351712",
        city_id: "3517",
        name: "Kesamben",
      },
      {
        id: "351713",
        city_id: "3517",
        name: "Tembelang",
      },
      {
        id: "351714",
        city_id: "3517",
        name: "Ploso",
      },
      {
        id: "351715",
        city_id: "3517",
        name: "Plandaan",
      },
      {
        id: "351716",
        city_id: "3517",
        name: "Kabuh",
      },
      {
        id: "351717",
        city_id: "3517",
        name: "Kudu",
      },
      {
        id: "351718",
        city_id: "3517",
        name: "Bandarkedungmulyo",
      },
      {
        id: "351719",
        city_id: "3517",
        name: "Jogoroto",
      },
      {
        id: "351720",
        city_id: "3517",
        name: "Megaluh",
      },
      {
        id: "351721",
        city_id: "3517",
        name: "Ngusikan",
      },
      {
        id: "351801",
        city_id: "3518",
        name: "Sawahan",
      },
      {
        id: "351802",
        city_id: "3518",
        name: "Ngetos",
      },
      {
        id: "351803",
        city_id: "3518",
        name: "Berbek",
      },
      {
        id: "351804",
        city_id: "3518",
        name: "Loceret",
      },
      {
        id: "351805",
        city_id: "3518",
        name: "Pace",
      },
      {
        id: "351806",
        city_id: "3518",
        name: "Prambon",
      },
      {
        id: "351807",
        city_id: "3518",
        name: "Ngronggot",
      },
      {
        id: "351808",
        city_id: "3518",
        name: "Kertosono",
      },
      {
        id: "351809",
        city_id: "3518",
        name: "Patianrowo",
      },
      {
        id: "351810",
        city_id: "3518",
        name: "Baron",
      },
      {
        id: "351811",
        city_id: "3518",
        name: "Tanjunganom",
      },
      {
        id: "351812",
        city_id: "3518",
        name: "Sukomoro",
      },
      {
        id: "351813",
        city_id: "3518",
        name: "Nganjuk",
      },
      {
        id: "351814",
        city_id: "3518",
        name: "Bagor",
      },
      {
        id: "351815",
        city_id: "3518",
        name: "Wilangan",
      },
      {
        id: "351816",
        city_id: "3518",
        name: "Rejoso",
      },
      {
        id: "351817",
        city_id: "3518",
        name: "Gondang",
      },
      {
        id: "351818",
        city_id: "3518",
        name: "Ngluyu",
      },
      {
        id: "351819",
        city_id: "3518",
        name: "Lengkong",
      },
      {
        id: "351820",
        city_id: "3518",
        name: "Jatikalen",
      },
      {
        id: "351901",
        city_id: "3519",
        name: "Kebon Sari",
      },
      {
        id: "351902",
        city_id: "3519",
        name: "Dolopo",
      },
      {
        id: "351903",
        city_id: "3519",
        name: "Geger",
      },
      {
        id: "351904",
        city_id: "3519",
        name: "Dagangan",
      },
      {
        id: "351905",
        city_id: "3519",
        name: "Kare",
      },
      {
        id: "351906",
        city_id: "3519",
        name: "Gemarang",
      },
      {
        id: "351907",
        city_id: "3519",
        name: "Wungu",
      },
      {
        id: "351908",
        city_id: "3519",
        name: "Madiun",
      },
      {
        id: "351909",
        city_id: "3519",
        name: "Jiwan",
      },
      {
        id: "351910",
        city_id: "3519",
        name: "Balerejo",
      },
      {
        id: "351911",
        city_id: "3519",
        name: "Mejayan",
      },
      {
        id: "351912",
        city_id: "3519",
        name: "Saradan",
      },
      {
        id: "351913",
        city_id: "3519",
        name: "Pilangkenceng",
      },
      {
        id: "351914",
        city_id: "3519",
        name: "Sawahan",
      },
      {
        id: "351915",
        city_id: "3519",
        name: "Wonoasri",
      },
      {
        id: "352001",
        city_id: "3520",
        name: "Poncol",
      },
      {
        id: "352002",
        city_id: "3520",
        name: "Parang",
      },
      {
        id: "352003",
        city_id: "3520",
        name: "Lembeyan",
      },
      {
        id: "352004",
        city_id: "3520",
        name: "Takeran",
      },
      {
        id: "352005",
        city_id: "3520",
        name: "Kawedanan",
      },
      {
        id: "352006",
        city_id: "3520",
        name: "Magetan",
      },
      {
        id: "352007",
        city_id: "3520",
        name: "Plaosan",
      },
      {
        id: "352008",
        city_id: "3520",
        name: "Panekan",
      },
      {
        id: "352009",
        city_id: "3520",
        name: "Sukomoro",
      },
      {
        id: "352010",
        city_id: "3520",
        name: "Bendo",
      },
      {
        id: "352011",
        city_id: "3520",
        name: "Maospati",
      },
      {
        id: "352012",
        city_id: "3520",
        name: "Barat",
      },
      {
        id: "352013",
        city_id: "3520",
        name: "Karangrejo",
      },
      {
        id: "352014",
        city_id: "3520",
        name: "Karas",
      },
      {
        id: "352015",
        city_id: "3520",
        name: "Kartoharjo",
      },
      {
        id: "352016",
        city_id: "3520",
        name: "Ngariboyo",
      },
      {
        id: "352017",
        city_id: "3520",
        name: "Nguntoronadi",
      },
      {
        id: "352018",
        city_id: "3520",
        name: "Sidorejo",
      },
      {
        id: "352101",
        city_id: "3521",
        name: "Sine",
      },
      {
        id: "352102",
        city_id: "3521",
        name: "Ngrambe",
      },
      {
        id: "352103",
        city_id: "3521",
        name: "Jogorogo",
      },
      {
        id: "352104",
        city_id: "3521",
        name: "Kendal",
      },
      {
        id: "352105",
        city_id: "3521",
        name: "Geneng",
      },
      {
        id: "352106",
        city_id: "3521",
        name: "Kwadungan",
      },
      {
        id: "352107",
        city_id: "3521",
        name: "Karangjati",
      },
      {
        id: "352108",
        city_id: "3521",
        name: "Padas",
      },
      {
        id: "352109",
        city_id: "3521",
        name: "Ngawi",
      },
      {
        id: "352110",
        city_id: "3521",
        name: "Paron",
      },
      {
        id: "352111",
        city_id: "3521",
        name: "Kedunggalar",
      },
      {
        id: "352112",
        city_id: "3521",
        name: "Widodaren",
      },
      {
        id: "352113",
        city_id: "3521",
        name: "Mantingan",
      },
      {
        id: "352114",
        city_id: "3521",
        name: "Pangkur",
      },
      {
        id: "352115",
        city_id: "3521",
        name: "Bringin",
      },
      {
        id: "352116",
        city_id: "3521",
        name: "Pitu",
      },
      {
        id: "352117",
        city_id: "3521",
        name: "Karanganyar",
      },
      {
        id: "352118",
        city_id: "3521",
        name: "Gerih",
      },
      {
        id: "352119",
        city_id: "3521",
        name: "Kasreman",
      },
      {
        id: "352201",
        city_id: "3522",
        name: "Ngraho",
      },
      {
        id: "352202",
        city_id: "3522",
        name: "Tambakrejo",
      },
      {
        id: "352203",
        city_id: "3522",
        name: "Ngambon",
      },
      {
        id: "352204",
        city_id: "3522",
        name: "Ngasem",
      },
      {
        id: "352205",
        city_id: "3522",
        name: "Bubulan",
      },
      {
        id: "352206",
        city_id: "3522",
        name: "Dander",
      },
      {
        id: "352207",
        city_id: "3522",
        name: "Sugihwaras",
      },
      {
        id: "352208",
        city_id: "3522",
        name: "Kedungadem",
      },
      {
        id: "352209",
        city_id: "3522",
        name: "Kepohbaru",
      },
      {
        id: "352210",
        city_id: "3522",
        name: "Baureno",
      },
      {
        id: "352211",
        city_id: "3522",
        name: "Kanor",
      },
      {
        id: "352212",
        city_id: "3522",
        name: "Sumberejo",
      },
      {
        id: "352213",
        city_id: "3522",
        name: "Balen",
      },
      {
        id: "352214",
        city_id: "3522",
        name: "Kapas",
      },
      {
        id: "352215",
        city_id: "3522",
        name: "Bojonegoro",
      },
      {
        id: "352216",
        city_id: "3522",
        name: "Kalitidu",
      },
      {
        id: "352217",
        city_id: "3522",
        name: "Malo",
      },
      {
        id: "352218",
        city_id: "3522",
        name: "Purwosari",
      },
      {
        id: "352219",
        city_id: "3522",
        name: "Padangan",
      },
      {
        id: "352220",
        city_id: "3522",
        name: "Kasiman",
      },
      {
        id: "352221",
        city_id: "3522",
        name: "Temayang",
      },
      {
        id: "352222",
        city_id: "3522",
        name: "Margomulyo",
      },
      {
        id: "352223",
        city_id: "3522",
        name: "Trucuk",
      },
      {
        id: "352224",
        city_id: "3522",
        name: "Sukosewu",
      },
      {
        id: "352225",
        city_id: "3522",
        name: "Kedewan",
      },
      {
        id: "352226",
        city_id: "3522",
        name: "Gondang",
      },
      {
        id: "352227",
        city_id: "3522",
        name: "Sekar",
      },
      {
        id: "352228",
        city_id: "3522",
        name: "Gayam",
      },
      {
        id: "352301",
        city_id: "3523",
        name: "Kenduruan",
      },
      {
        id: "352302",
        city_id: "3523",
        name: "Jatirogo",
      },
      {
        id: "352303",
        city_id: "3523",
        name: "Bangilan",
      },
      {
        id: "352304",
        city_id: "3523",
        name: "Bancar",
      },
      {
        id: "352305",
        city_id: "3523",
        name: "Senori",
      },
      {
        id: "352306",
        city_id: "3523",
        name: "Tambakboyo",
      },
      {
        id: "352307",
        city_id: "3523",
        name: "Singgahan",
      },
      {
        id: "352308",
        city_id: "3523",
        name: "Kerek",
      },
      {
        id: "352309",
        city_id: "3523",
        name: "Parengan",
      },
      {
        id: "352310",
        city_id: "3523",
        name: "Montong",
      },
      {
        id: "352311",
        city_id: "3523",
        name: "Soko",
      },
      {
        id: "352312",
        city_id: "3523",
        name: "Jenu",
      },
      {
        id: "352313",
        city_id: "3523",
        name: "Merakurak",
      },
      {
        id: "352314",
        city_id: "3523",
        name: "Rengel",
      },
      {
        id: "352315",
        city_id: "3523",
        name: "Semanding",
      },
      {
        id: "352316",
        city_id: "3523",
        name: "Tuban",
      },
      {
        id: "352317",
        city_id: "3523",
        name: "Plumpang",
      },
      {
        id: "352318",
        city_id: "3523",
        name: "Palang",
      },
      {
        id: "352319",
        city_id: "3523",
        name: "Widang",
      },
      {
        id: "352320",
        city_id: "3523",
        name: "Grabagan",
      },
      {
        id: "352401",
        city_id: "3524",
        name: "Sukorame",
      },
      {
        id: "352402",
        city_id: "3524",
        name: "Bluluk",
      },
      {
        id: "352403",
        city_id: "3524",
        name: "Modo",
      },
      {
        id: "352404",
        city_id: "3524",
        name: "Ngimbang",
      },
      {
        id: "352405",
        city_id: "3524",
        name: "Babat",
      },
      {
        id: "352406",
        city_id: "3524",
        name: "Kedungpring",
      },
      {
        id: "352407",
        city_id: "3524",
        name: "Brondong",
      },
      {
        id: "352408",
        city_id: "3524",
        name: "Laren",
      },
      {
        id: "352409",
        city_id: "3524",
        name: "Sekaran",
      },
      {
        id: "352410",
        city_id: "3524",
        name: "Maduran",
      },
      {
        id: "352411",
        city_id: "3524",
        name: "Sambeng",
      },
      {
        id: "352412",
        city_id: "3524",
        name: "Sugio",
      },
      {
        id: "352413",
        city_id: "3524",
        name: "Pucuk",
      },
      {
        id: "352414",
        city_id: "3524",
        name: "Paciran",
      },
      {
        id: "352415",
        city_id: "3524",
        name: "Solokuro",
      },
      {
        id: "352416",
        city_id: "3524",
        name: "Mantup",
      },
      {
        id: "352417",
        city_id: "3524",
        name: "Sukodadi",
      },
      {
        id: "352418",
        city_id: "3524",
        name: "Karanggeneng",
      },
      {
        id: "352419",
        city_id: "3524",
        name: "Kembangbahu",
      },
      {
        id: "352420",
        city_id: "3524",
        name: "Kalitengah",
      },
      {
        id: "352421",
        city_id: "3524",
        name: "Turi",
      },
      {
        id: "352422",
        city_id: "3524",
        name: "Lamongan",
      },
      {
        id: "352423",
        city_id: "3524",
        name: "Tikung",
      },
      {
        id: "352424",
        city_id: "3524",
        name: "Karangbinangun",
      },
      {
        id: "352425",
        city_id: "3524",
        name: "Deket",
      },
      {
        id: "352426",
        city_id: "3524",
        name: "Glagah",
      },
      {
        id: "352427",
        city_id: "3524",
        name: "Sarirejo",
      },
      {
        id: "352501",
        city_id: "3525",
        name: "Dukun",
      },
      {
        id: "352502",
        city_id: "3525",
        name: "Balongpanggang",
      },
      {
        id: "352503",
        city_id: "3525",
        name: "Panceng",
      },
      {
        id: "352504",
        city_id: "3525",
        name: "Benjeng",
      },
      {
        id: "352505",
        city_id: "3525",
        name: "Duduksampeyan",
      },
      {
        id: "352506",
        city_id: "3525",
        name: "Wringinanom",
      },
      {
        id: "352507",
        city_id: "3525",
        name: "Ujungpangkah",
      },
      {
        id: "352508",
        city_id: "3525",
        name: "Kedamean",
      },
      {
        id: "352509",
        city_id: "3525",
        name: "Sidayu",
      },
      {
        id: "352510",
        city_id: "3525",
        name: "Manyar",
      },
      {
        id: "352511",
        city_id: "3525",
        name: "Cerme",
      },
      {
        id: "352512",
        city_id: "3525",
        name: "Bungah",
      },
      {
        id: "352513",
        city_id: "3525",
        name: "Menganti",
      },
      {
        id: "352514",
        city_id: "3525",
        name: "Kebomas",
      },
      {
        id: "352515",
        city_id: "3525",
        name: "Driyorejo",
      },
      {
        id: "352516",
        city_id: "3525",
        name: "Gresik",
      },
      {
        id: "352517",
        city_id: "3525",
        name: "Sangkapura",
      },
      {
        id: "352518",
        city_id: "3525",
        name: "Tambak",
      },
      {
        id: "352601",
        city_id: "3526",
        name: "Bangkalan",
      },
      {
        id: "352602",
        city_id: "3526",
        name: "Socah",
      },
      {
        id: "352603",
        city_id: "3526",
        name: "Burneh",
      },
      {
        id: "352604",
        city_id: "3526",
        name: "Kamal",
      },
      {
        id: "352605",
        city_id: "3526",
        name: "Arosbaya",
      },
      {
        id: "352606",
        city_id: "3526",
        name: "Geger",
      },
      {
        id: "352607",
        city_id: "3526",
        name: "Klampis",
      },
      {
        id: "352608",
        city_id: "3526",
        name: "Sepulu",
      },
      {
        id: "352609",
        city_id: "3526",
        name: "Tanjung Bumi",
      },
      {
        id: "352610",
        city_id: "3526",
        name: "Kokop",
      },
      {
        id: "352611",
        city_id: "3526",
        name: "Kwanyar",
      },
      {
        id: "352612",
        city_id: "3526",
        name: "Labang",
      },
      {
        id: "352613",
        city_id: "3526",
        name: "Tanah Merah",
      },
      {
        id: "352614",
        city_id: "3526",
        name: "Tragah",
      },
      {
        id: "352615",
        city_id: "3526",
        name: "Blega",
      },
      {
        id: "352616",
        city_id: "3526",
        name: "Modung",
      },
      {
        id: "352617",
        city_id: "3526",
        name: "Konang",
      },
      {
        id: "352618",
        city_id: "3526",
        name: "Galis",
      },
      {
        id: "352701",
        city_id: "3527",
        name: "Sreseh",
      },
      {
        id: "352702",
        city_id: "3527",
        name: "Torjun",
      },
      {
        id: "352703",
        city_id: "3527",
        name: "Sampang",
      },
      {
        id: "352704",
        city_id: "3527",
        name: "Camplong",
      },
      {
        id: "352705",
        city_id: "3527",
        name: "Omben",
      },
      {
        id: "352706",
        city_id: "3527",
        name: "Kedungdung",
      },
      {
        id: "352707",
        city_id: "3527",
        name: "Jrengik",
      },
      {
        id: "352708",
        city_id: "3527",
        name: "Tambelangan",
      },
      {
        id: "352709",
        city_id: "3527",
        name: "Banyuates",
      },
      {
        id: "352710",
        city_id: "3527",
        name: "Robatal",
      },
      {
        id: "352711",
        city_id: "3527",
        name: "Sokobanah",
      },
      {
        id: "352712",
        city_id: "3527",
        name: "Ketapang",
      },
      {
        id: "352713",
        city_id: "3527",
        name: "Pangarengan",
      },
      {
        id: "352714",
        city_id: "3527",
        name: "Karangpenang",
      },
      {
        id: "352801",
        city_id: "3528",
        name: "Tlanakan",
      },
      {
        id: "352802",
        city_id: "3528",
        name: "Pademawu",
      },
      {
        id: "352803",
        city_id: "3528",
        name: "Galis",
      },
      {
        id: "352804",
        city_id: "3528",
        name: "Pamekasan",
      },
      {
        id: "352805",
        city_id: "3528",
        name: "Proppo",
      },
      {
        id: "352806",
        city_id: "3528",
        name: "Palenggaan",
      },
      {
        id: "352807",
        city_id: "3528",
        name: "Pegantenan",
      },
      {
        id: "352808",
        city_id: "3528",
        name: "Larangan",
      },
      {
        id: "352809",
        city_id: "3528",
        name: "Pakong",
      },
      {
        id: "352810",
        city_id: "3528",
        name: "Waru",
      },
      {
        id: "352811",
        city_id: "3528",
        name: "Batumarmar",
      },
      {
        id: "352812",
        city_id: "3528",
        name: "Kadur",
      },
      {
        id: "352813",
        city_id: "3528",
        name: "Pasean",
      },
      {
        id: "352901",
        city_id: "3529",
        name: "Kota Sumenep",
      },
      {
        id: "352902",
        city_id: "3529",
        name: "Kalianget",
      },
      {
        id: "352903",
        city_id: "3529",
        name: "Manding",
      },
      {
        id: "352904",
        city_id: "3529",
        name: "Talango",
      },
      {
        id: "352905",
        city_id: "3529",
        name: "Bluto",
      },
      {
        id: "352906",
        city_id: "3529",
        name: "Saronggi",
      },
      {
        id: "352907",
        city_id: "3529",
        name: "Lenteng",
      },
      {
        id: "352908",
        city_id: "3529",
        name: "Giliginting",
      },
      {
        id: "352909",
        city_id: "3529",
        name: "Guluk-Guluk",
      },
      {
        id: "352910",
        city_id: "3529",
        name: "Ganding",
      },
      {
        id: "352911",
        city_id: "3529",
        name: "Pragaan",
      },
      {
        id: "352912",
        city_id: "3529",
        name: "Ambunten",
      },
      {
        id: "352913",
        city_id: "3529",
        name: "Pasongsongan",
      },
      {
        id: "352914",
        city_id: "3529",
        name: "Dasuk",
      },
      {
        id: "352915",
        city_id: "3529",
        name: "Rubaru",
      },
      {
        id: "352916",
        city_id: "3529",
        name: "Batang Batang",
      },
      {
        id: "352917",
        city_id: "3529",
        name: "Batuputih",
      },
      {
        id: "352918",
        city_id: "3529",
        name: "Dungkek",
      },
      {
        id: "352919",
        city_id: "3529",
        name: "Gapura",
      },
      {
        id: "352920",
        city_id: "3529",
        name: "Gayam",
      },
      {
        id: "352921",
        city_id: "3529",
        name: "Nonggunong",
      },
      {
        id: "352922",
        city_id: "3529",
        name: "Ra'as",
      },
      {
        id: "352923",
        city_id: "3529",
        name: "Masalembu",
      },
      {
        id: "352924",
        city_id: "3529",
        name: "Arjasa",
      },
      {
        id: "352925",
        city_id: "3529",
        name: "Sapeken",
      },
      {
        id: "352926",
        city_id: "3529",
        name: "Batuan",
      },
      {
        id: "352927",
        city_id: "3529",
        name: "Kangayan",
      },
      {
        id: "357101",
        city_id: "3571",
        name: "Mojoroto",
      },
      {
        id: "357102",
        city_id: "3571",
        name: "Kota",
      },
      {
        id: "357103",
        city_id: "3571",
        name: "Pesantren",
      },
      {
        id: "357201",
        city_id: "3572",
        name: "Kepanjenkidul",
      },
      {
        id: "357202",
        city_id: "3572",
        name: "Sukorejo",
      },
      {
        id: "357203",
        city_id: "3572",
        name: "Sananwetan",
      },
      {
        id: "357301",
        city_id: "3573",
        name: "Blimbing",
      },
      {
        id: "357302",
        city_id: "3573",
        name: "Klojen",
      },
      {
        id: "357303",
        city_id: "3573",
        name: "Kedungkandang",
      },
      {
        id: "357304",
        city_id: "3573",
        name: "Sukun",
      },
      {
        id: "357305",
        city_id: "3573",
        name: "Lowokwaru",
      },
      {
        id: "357401",
        city_id: "3574",
        name: "Kademangan",
      },
      {
        id: "357402",
        city_id: "3574",
        name: "Wonoasih",
      },
      {
        id: "357403",
        city_id: "3574",
        name: "Mayangan",
      },
      {
        id: "357404",
        city_id: "3574",
        name: "Kanigaran",
      },
      {
        id: "357405",
        city_id: "3574",
        name: "Kedopok",
      },
      {
        id: "357501",
        city_id: "3575",
        name: "Gadingrejo",
      },
      {
        id: "357502",
        city_id: "3575",
        name: "Purworejo",
      },
      {
        id: "357503",
        city_id: "3575",
        name: "Bugul Kidul",
      },
      {
        id: "357504",
        city_id: "3575",
        name: "Panggungrejo",
      },
      {
        id: "357601",
        city_id: "3576",
        name: "Prajuritkulon",
      },
      {
        id: "357602",
        city_id: "3576",
        name: "Magersari",
      },
      {
        id: "357603",
        city_id: "3576",
        name: "Kranggan",
      },
      {
        id: "357701",
        city_id: "3577",
        name: "Kartoharjo",
      },
      {
        id: "357702",
        city_id: "3577",
        name: "Manguharjo",
      },
      {
        id: "357703",
        city_id: "3577",
        name: "Taman",
      },
      {
        id: "357801",
        city_id: "3578",
        name: "Karang Pilang",
      },
      {
        id: "357802",
        city_id: "3578",
        name: "Wonocolo",
      },
      {
        id: "357803",
        city_id: "3578",
        name: "Rungkut",
      },
      {
        id: "357804",
        city_id: "3578",
        name: "Wonokromo",
      },
      {
        id: "357805",
        city_id: "3578",
        name: "Tegalsari",
      },
      {
        id: "357806",
        city_id: "3578",
        name: "Sawahan",
      },
      {
        id: "357807",
        city_id: "3578",
        name: "Genteng",
      },
      {
        id: "357808",
        city_id: "3578",
        name: "Gubeng",
      },
      {
        id: "357809",
        city_id: "3578",
        name: "Sukolilo",
      },
      {
        id: "357810",
        city_id: "3578",
        name: "Tambaksari",
      },
      {
        id: "357811",
        city_id: "3578",
        name: "Simokerto",
      },
      {
        id: "357812",
        city_id: "3578",
        name: "Pabean Cantian",
      },
      {
        id: "357813",
        city_id: "3578",
        name: "Bubutan",
      },
      {
        id: "357814",
        city_id: "3578",
        name: "Tandes",
      },
      {
        id: "357815",
        city_id: "3578",
        name: "Krembangan",
      },
      {
        id: "357816",
        city_id: "3578",
        name: "Semampir",
      },
      {
        id: "357817",
        city_id: "3578",
        name: "Kenjeran",
      },
      {
        id: "357818",
        city_id: "3578",
        name: "Lakarsantri",
      },
      {
        id: "357819",
        city_id: "3578",
        name: "Benowo",
      },
      {
        id: "357820",
        city_id: "3578",
        name: "Wiyung",
      },
      {
        id: "357821",
        city_id: "3578",
        name: "Dukuh Pakis",
      },
      {
        id: "357822",
        city_id: "3578",
        name: "Gayungan",
      },
      {
        id: "357823",
        city_id: "3578",
        name: "Jambangan",
      },
      {
        id: "357824",
        city_id: "3578",
        name: "Tenggilis Mejoyo",
      },
      {
        id: "357825",
        city_id: "3578",
        name: "Gunung Anyar",
      },
      {
        id: "357826",
        city_id: "3578",
        name: "Mulyorejo",
      },
      {
        id: "357827",
        city_id: "3578",
        name: "Sukomanunggal",
      },
      {
        id: "357828",
        city_id: "3578",
        name: "Asem Rowo",
      },
      {
        id: "357829",
        city_id: "3578",
        name: "Bulak",
      },
      {
        id: "357830",
        city_id: "3578",
        name: "Pakal",
      },
      {
        id: "357831",
        city_id: "3578",
        name: "Sambikerep",
      },
      {
        id: "357901",
        city_id: "3579",
        name: "Batu",
      },
      {
        id: "357902",
        city_id: "3579",
        name: "Bumiaji",
      },
      {
        id: "357903",
        city_id: "3579",
        name: "Junrejo",
      },
      {
        id: "360101",
        city_id: "3601",
        name: "Sumur",
      },
      {
        id: "360102",
        city_id: "3601",
        name: "Cimanggu",
      },
      {
        id: "360103",
        city_id: "3601",
        name: "Cibaliung",
      },
      {
        id: "360104",
        city_id: "3601",
        name: "Cikeusik",
      },
      {
        id: "360105",
        city_id: "3601",
        name: "Cigeulis",
      },
      {
        id: "360106",
        city_id: "3601",
        name: "Panimbang",
      },
      {
        id: "360107",
        city_id: "3601",
        name: "Angsana",
      },
      {
        id: "360108",
        city_id: "3601",
        name: "Munjul",
      },
      {
        id: "360109",
        city_id: "3601",
        name: "Pagelaran",
      },
      {
        id: "360110",
        city_id: "3601",
        name: "Bojong",
      },
      {
        id: "360111",
        city_id: "3601",
        name: "Picung",
      },
      {
        id: "360112",
        city_id: "3601",
        name: "Labuan",
      },
      {
        id: "360113",
        city_id: "3601",
        name: "Menes",
      },
      {
        id: "360114",
        city_id: "3601",
        name: "Saketi",
      },
      {
        id: "360115",
        city_id: "3601",
        name: "Cipeucang",
      },
      {
        id: "360116",
        city_id: "3601",
        name: "Jiput",
      },
      {
        id: "360117",
        city_id: "3601",
        name: "Mandalawangi",
      },
      {
        id: "360118",
        city_id: "3601",
        name: "Cimanuk",
      },
      {
        id: "360119",
        city_id: "3601",
        name: "Kaduhejo",
      },
      {
        id: "360120",
        city_id: "3601",
        name: "Banjar",
      },
      {
        id: "360121",
        city_id: "3601",
        name: "Pandeglang",
      },
      {
        id: "360122",
        city_id: "3601",
        name: "Cadasari",
      },
      {
        id: "360123",
        city_id: "3601",
        name: "Cisata",
      },
      {
        id: "360124",
        city_id: "3601",
        name: "Patia",
      },
      {
        id: "360125",
        city_id: "3601",
        name: "Karang Tanjung",
      },
      {
        id: "360126",
        city_id: "3601",
        name: "Cikedal",
      },
      {
        id: "360127",
        city_id: "3601",
        name: "Cibitung",
      },
      {
        id: "360128",
        city_id: "3601",
        name: "Carita",
      },
      {
        id: "360129",
        city_id: "3601",
        name: "Sukaresmi",
      },
      {
        id: "360130",
        city_id: "3601",
        name: "Mekarjaya",
      },
      {
        id: "360131",
        city_id: "3601",
        name: "Sindangresmi",
      },
      {
        id: "360132",
        city_id: "3601",
        name: "Pulosari",
      },
      {
        id: "360133",
        city_id: "3601",
        name: "Koroncong",
      },
      {
        id: "360134",
        city_id: "3601",
        name: "Majasari",
      },
      {
        id: "360135",
        city_id: "3601",
        name: "Sobang",
      },
      {
        id: "360201",
        city_id: "3602",
        name: "Malingping",
      },
      {
        id: "360202",
        city_id: "3602",
        name: "Panggarangan",
      },
      {
        id: "360203",
        city_id: "3602",
        name: "Bayah",
      },
      {
        id: "360204",
        city_id: "3602",
        name: "Cipanas",
      },
      {
        id: "360205",
        city_id: "3602",
        name: "Muncang",
      },
      {
        id: "360206",
        city_id: "3602",
        name: "Leuwidamar",
      },
      {
        id: "360207",
        city_id: "3602",
        name: "Bojongmanik",
      },
      {
        id: "360208",
        city_id: "3602",
        name: "Gunungkencana",
      },
      {
        id: "360209",
        city_id: "3602",
        name: "Banjarsari",
      },
      {
        id: "360210",
        city_id: "3602",
        name: "Cileles",
      },
      {
        id: "360211",
        city_id: "3602",
        name: "Cimarga",
      },
      {
        id: "360212",
        city_id: "3602",
        name: "Sajira",
      },
      {
        id: "360213",
        city_id: "3602",
        name: "Maja",
      },
      {
        id: "360214",
        city_id: "3602",
        name: "Rangkasbitung",
      },
      {
        id: "360215",
        city_id: "3602",
        name: "Warunggunung",
      },
      {
        id: "360216",
        city_id: "3602",
        name: "Cijaku",
      },
      {
        id: "360217",
        city_id: "3602",
        name: "Cikulur",
      },
      {
        id: "360218",
        city_id: "3602",
        name: "Cibadak",
      },
      {
        id: "360219",
        city_id: "3602",
        name: "Cibeber",
      },
      {
        id: "360220",
        city_id: "3602",
        name: "Cilograng",
      },
      {
        id: "360221",
        city_id: "3602",
        name: "Wanasalam",
      },
      {
        id: "360222",
        city_id: "3602",
        name: "Sobang",
      },
      {
        id: "360223",
        city_id: "3602",
        name: "Curug bitung",
      },
      {
        id: "360224",
        city_id: "3602",
        name: "Kalanganyar",
      },
      {
        id: "360225",
        city_id: "3602",
        name: "Lebakgedong",
      },
      {
        id: "360226",
        city_id: "3602",
        name: "Cihara",
      },
      {
        id: "360227",
        city_id: "3602",
        name: "Cirinten",
      },
      {
        id: "360228",
        city_id: "3602",
        name: "Cigemlong",
      },
      {
        id: "360301",
        city_id: "3603",
        name: "Balaraja",
      },
      {
        id: "360302",
        city_id: "3603",
        name: "Jayanti",
      },
      {
        id: "360303",
        city_id: "3603",
        name: "Tigaraksa",
      },
      {
        id: "360304",
        city_id: "3603",
        name: "Jambe",
      },
      {
        id: "360305",
        city_id: "3603",
        name: "Cisoka",
      },
      {
        id: "360306",
        city_id: "3603",
        name: "Kresek",
      },
      {
        id: "360307",
        city_id: "3603",
        name: "Kronjo",
      },
      {
        id: "360308",
        city_id: "3603",
        name: "Mauk",
      },
      {
        id: "360309",
        city_id: "3603",
        name: "Kemiri",
      },
      {
        id: "360310",
        city_id: "3603",
        name: "Sukadiri",
      },
      {
        id: "360311",
        city_id: "3603",
        name: "Rajeg",
      },
      {
        id: "360312",
        city_id: "3603",
        name: "Pasar Kemis",
      },
      {
        id: "360313",
        city_id: "3603",
        name: "Teluknaga",
      },
      {
        id: "360314",
        city_id: "3603",
        name: "Kosambi",
      },
      {
        id: "360315",
        city_id: "3603",
        name: "Pakuhaji",
      },
      {
        id: "360316",
        city_id: "3603",
        name: "Sepatan",
      },
      {
        id: "360317",
        city_id: "3603",
        name: "Curug",
      },
      {
        id: "360318",
        city_id: "3603",
        name: "Cikupa",
      },
      {
        id: "360319",
        city_id: "3603",
        name: "Panongan",
      },
      {
        id: "360320",
        city_id: "3603",
        name: "Legok",
      },
      {
        id: "360322",
        city_id: "3603",
        name: "Pagedangan",
      },
      {
        id: "360323",
        city_id: "3603",
        name: "Cisauk",
      },
      {
        id: "360327",
        city_id: "3603",
        name: "Sukamulya",
      },
      {
        id: "360328",
        city_id: "3603",
        name: "Kelapa Dua",
      },
      {
        id: "360329",
        city_id: "3603",
        name: "Sindang Jaya",
      },
      {
        id: "360330",
        city_id: "3603",
        name: "Sepatan Timur",
      },
      {
        id: "360331",
        city_id: "3603",
        name: "Solear",
      },
      {
        id: "360332",
        city_id: "3603",
        name: "Gunung Kaler",
      },
      {
        id: "360333",
        city_id: "3603",
        name: "Mekar Baru",
      },
      {
        id: "360405",
        city_id: "3604",
        name: "Kramatwatu",
      },
      {
        id: "360406",
        city_id: "3604",
        name: "Waringinkurung",
      },
      {
        id: "360407",
        city_id: "3604",
        name: "Bojonegara",
      },
      {
        id: "360408",
        city_id: "3604",
        name: "Pulo Ampel",
      },
      {
        id: "360409",
        city_id: "3604",
        name: "Ciruas",
      },
      {
        id: "360411",
        city_id: "3604",
        name: "Kragilan",
      },
      {
        id: "360412",
        city_id: "3604",
        name: "Pontang",
      },
      {
        id: "360413",
        city_id: "3604",
        name: "Tirtayasa",
      },
      {
        id: "360414",
        city_id: "3604",
        name: "Tanara",
      },
      {
        id: "360415",
        city_id: "3604",
        name: "Cikande",
      },
      {
        id: "360416",
        city_id: "3604",
        name: "Kibin",
      },
      {
        id: "360417",
        city_id: "3604",
        name: "Carenang",
      },
      {
        id: "360418",
        city_id: "3604",
        name: "Binuang",
      },
      {
        id: "360419",
        city_id: "3604",
        name: "Petir",
      },
      {
        id: "360420",
        city_id: "3604",
        name: "Tunjung Teja",
      },
      {
        id: "360422",
        city_id: "3604",
        name: "Baros",
      },
      {
        id: "360423",
        city_id: "3604",
        name: "Cikeusal",
      },
      {
        id: "360424",
        city_id: "3604",
        name: "Pamarayan",
      },
      {
        id: "360425",
        city_id: "3604",
        name: "Kopo",
      },
      {
        id: "360426",
        city_id: "3604",
        name: "Jawilan",
      },
      {
        id: "360427",
        city_id: "3604",
        name: "Ciomas",
      },
      {
        id: "360428",
        city_id: "3604",
        name: "Pabuaran",
      },
      {
        id: "360429",
        city_id: "3604",
        name: "Padarincang",
      },
      {
        id: "360430",
        city_id: "3604",
        name: "Anyar",
      },
      {
        id: "360431",
        city_id: "3604",
        name: "Cinangka",
      },
      {
        id: "360432",
        city_id: "3604",
        name: "Mancak",
      },
      {
        id: "360433",
        city_id: "3604",
        name: "Gunung Sari",
      },
      {
        id: "360434",
        city_id: "3604",
        name: "Bandung",
      },
      {
        id: "360435",
        city_id: "3604",
        name: "Lebak Wangi",
      },
      {
        id: "367101",
        city_id: "3671",
        name: "Tangerang",
      },
      {
        id: "367102",
        city_id: "3671",
        name: "Jatiuwung",
      },
      {
        id: "367103",
        city_id: "3671",
        name: "Batuceper",
      },
      {
        id: "367104",
        city_id: "3671",
        name: "Benda",
      },
      {
        id: "367105",
        city_id: "3671",
        name: "Cipondoh",
      },
      {
        id: "367106",
        city_id: "3671",
        name: "Ciledug",
      },
      {
        id: "367107",
        city_id: "3671",
        name: "Karawaci",
      },
      {
        id: "367108",
        city_id: "3671",
        name: "Periuk",
      },
      {
        id: "367109",
        city_id: "3671",
        name: "Cibodas",
      },
      {
        id: "367110",
        city_id: "3671",
        name: "Neglasari",
      },
      {
        id: "367111",
        city_id: "3671",
        name: "Pinang",
      },
      {
        id: "367112",
        city_id: "3671",
        name: "Karang Tengah",
      },
      {
        id: "367113",
        city_id: "3671",
        name: "Larangan",
      },
      {
        id: "367201",
        city_id: "3672",
        name: "Cibeber",
      },
      {
        id: "367202",
        city_id: "3672",
        name: "Cilegon",
      },
      {
        id: "367203",
        city_id: "3672",
        name: "Pulomerak",
      },
      {
        id: "367204",
        city_id: "3672",
        name: "Ciwandan",
      },
      {
        id: "367205",
        city_id: "3672",
        name: "Jombang",
      },
      {
        id: "367206",
        city_id: "3672",
        name: "Gerogol",
      },
      {
        id: "367207",
        city_id: "3672",
        name: "Purwakarta",
      },
      {
        id: "367208",
        city_id: "3672",
        name: "Citangkil",
      },
      {
        id: "367301",
        city_id: "3673",
        name: "Serang",
      },
      {
        id: "367302",
        city_id: "3673",
        name: "Kasemen",
      },
      {
        id: "367303",
        city_id: "3673",
        name: "Walantaka",
      },
      {
        id: "367304",
        city_id: "3673",
        name: "Curug",
      },
      {
        id: "367305",
        city_id: "3673",
        name: "Cipocok Jaya",
      },
      {
        id: "367306",
        city_id: "3673",
        name: "Taktakan",
      },
      {
        id: "367401",
        city_id: "3674",
        name: "Serpong",
      },
      {
        id: "367402",
        city_id: "3674",
        name: "Serpong Utara",
      },
      {
        id: "367403",
        city_id: "3674",
        name: "Pondok Aren",
      },
      {
        id: "367404",
        city_id: "3674",
        name: "Ciputat",
      },
      {
        id: "367405",
        city_id: "3674",
        name: "Ciputat Timur",
      },
      {
        id: "367406",
        city_id: "3674",
        name: "Pamulang",
      },
      {
        id: "367407",
        city_id: "3674",
        name: "Setu",
      },
      {
        id: "510101",
        city_id: "5101",
        name: "Negara",
      },
      {
        id: "510102",
        city_id: "5101",
        name: "Mendoyo",
      },
      {
        id: "510103",
        city_id: "5101",
        name: "Pekutatan",
      },
      {
        id: "510104",
        city_id: "5101",
        name: "Melaya",
      },
      {
        id: "510105",
        city_id: "5101",
        name: "Jembrana",
      },
      {
        id: "510201",
        city_id: "5102",
        name: "Selemadeg",
      },
      {
        id: "510202",
        city_id: "5102",
        name: "Salamadeg Timur",
      },
      {
        id: "510203",
        city_id: "5102",
        name: "Salemadeg Barat",
      },
      {
        id: "510204",
        city_id: "5102",
        name: "Kerambitan",
      },
      {
        id: "510205",
        city_id: "5102",
        name: "Tabanan",
      },
      {
        id: "510206",
        city_id: "5102",
        name: "Kediri",
      },
      {
        id: "510207",
        city_id: "5102",
        name: "Marga",
      },
      {
        id: "510208",
        city_id: "5102",
        name: "Penebel",
      },
      {
        id: "510209",
        city_id: "5102",
        name: "Baturiti",
      },
      {
        id: "510210",
        city_id: "5102",
        name: "Pupuan",
      },
      {
        id: "510301",
        city_id: "5103",
        name: "Kuta",
      },
      {
        id: "510302",
        city_id: "5103",
        name: "Mengwi",
      },
      {
        id: "510303",
        city_id: "5103",
        name: "Abiansemal",
      },
      {
        id: "510304",
        city_id: "5103",
        name: "Petang",
      },
      {
        id: "510305",
        city_id: "5103",
        name: "Kuta Selatan",
      },
      {
        id: "510306",
        city_id: "5103",
        name: "Kuta Utara",
      },
      {
        id: "510401",
        city_id: "5104",
        name: "Sukawati",
      },
      {
        id: "510402",
        city_id: "5104",
        name: "Blahbatuh",
      },
      {
        id: "510403",
        city_id: "5104",
        name: "Gianyar",
      },
      {
        id: "510404",
        city_id: "5104",
        name: "Tampaksiring",
      },
      {
        id: "510405",
        city_id: "5104",
        name: "Ubud",
      },
      {
        id: "510406",
        city_id: "5104",
        name: "Tegallalang",
      },
      {
        id: "510407",
        city_id: "5104",
        name: "Payangan",
      },
      {
        id: "510501",
        city_id: "5105",
        name: "Nusa Penida",
      },
      {
        id: "510502",
        city_id: "5105",
        name: "Banjarangkan",
      },
      {
        id: "510503",
        city_id: "5105",
        name: "Klungkung",
      },
      {
        id: "510504",
        city_id: "5105",
        name: "Dawan",
      },
      {
        id: "510601",
        city_id: "5106",
        name: "Susut",
      },
      {
        id: "510602",
        city_id: "5106",
        name: "Bangli",
      },
      {
        id: "510603",
        city_id: "5106",
        name: "Tembuku",
      },
      {
        id: "510604",
        city_id: "5106",
        name: "Kintamani",
      },
      {
        id: "510701",
        city_id: "5107",
        name: "Rendang",
      },
      {
        id: "510702",
        city_id: "5107",
        name: "Sidemen",
      },
      {
        id: "510703",
        city_id: "5107",
        name: "Manggis",
      },
      {
        id: "510704",
        city_id: "5107",
        name: "Karangasem",
      },
      {
        id: "510705",
        city_id: "5107",
        name: "Abang",
      },
      {
        id: "510706",
        city_id: "5107",
        name: "Bebandem",
      },
      {
        id: "510707",
        city_id: "5107",
        name: "Selat",
      },
      {
        id: "510708",
        city_id: "5107",
        name: "Kubu",
      },
      {
        id: "510801",
        city_id: "5108",
        name: "Gerokgak",
      },
      {
        id: "510802",
        city_id: "5108",
        name: "Seririt",
      },
      {
        id: "510803",
        city_id: "5108",
        name: "Busungbiu",
      },
      {
        id: "510804",
        city_id: "5108",
        name: "Banjar",
      },
      {
        id: "510805",
        city_id: "5108",
        name: "Sukasada",
      },
      {
        id: "510806",
        city_id: "5108",
        name: "Buleleng",
      },
      {
        id: "510807",
        city_id: "5108",
        name: "Sawan",
      },
      {
        id: "510808",
        city_id: "5108",
        name: "Kubutambahan",
      },
      {
        id: "510809",
        city_id: "5108",
        name: "Tejakula",
      },
      {
        id: "517101",
        city_id: "5171",
        name: "Denpasar Selatan",
      },
      {
        id: "517102",
        city_id: "5171",
        name: "Denpasar Timur",
      },
      {
        id: "517103",
        city_id: "5171",
        name: "Denpasar Barat",
      },
      {
        id: "517104",
        city_id: "5171",
        name: "Denpasar Utara",
      },
      {
        id: "520101",
        city_id: "5201",
        name: "Gerung",
      },
      {
        id: "520102",
        city_id: "5201",
        name: "Kediri",
      },
      {
        id: "520103",
        city_id: "5201",
        name: "Narmada",
      },
      {
        id: "520107",
        city_id: "5201",
        name: "Sekotong",
      },
      {
        id: "520108",
        city_id: "5201",
        name: "Labuapi",
      },
      {
        id: "520109",
        city_id: "5201",
        name: "Gunungsari",
      },
      {
        id: "520112",
        city_id: "5201",
        name: "Lingsar",
      },
      {
        id: "520113",
        city_id: "5201",
        name: "Lembar",
      },
      {
        id: "520114",
        city_id: "5201",
        name: "Batu Layar",
      },
      {
        id: "520115",
        city_id: "5201",
        name: "Kuripan",
      },
      {
        id: "520201",
        city_id: "5202",
        name: "Praya",
      },
      {
        id: "520202",
        city_id: "5202",
        name: "Jonggat",
      },
      {
        id: "520203",
        city_id: "5202",
        name: "Batukliang",
      },
      {
        id: "520204",
        city_id: "5202",
        name: "Pujut",
      },
      {
        id: "520205",
        city_id: "5202",
        name: "Praya Barat",
      },
      {
        id: "520206",
        city_id: "5202",
        name: "Praya Timur",
      },
      {
        id: "520207",
        city_id: "5202",
        name: "Janapria",
      },
      {
        id: "520208",
        city_id: "5202",
        name: "Pringgarata",
      },
      {
        id: "520209",
        city_id: "5202",
        name: "Kopang",
      },
      {
        id: "520210",
        city_id: "5202",
        name: "Praya Tengah",
      },
      {
        id: "520211",
        city_id: "5202",
        name: "Praya Barat Daya",
      },
      {
        id: "520212",
        city_id: "5202",
        name: "Batukliang Utara",
      },
      {
        id: "520301",
        city_id: "5203",
        name: "Keruak",
      },
      {
        id: "520302",
        city_id: "5203",
        name: "Sakra",
      },
      {
        id: "520303",
        city_id: "5203",
        name: "Terara",
      },
      {
        id: "520304",
        city_id: "5203",
        name: "Sikur",
      },
      {
        id: "520305",
        city_id: "5203",
        name: "Masbagik",
      },
      {
        id: "520306",
        city_id: "5203",
        name: "Sukamulia",
      },
      {
        id: "520307",
        city_id: "5203",
        name: "Selong",
      },
      {
        id: "520308",
        city_id: "5203",
        name: "Pringgabaya",
      },
      {
        id: "520309",
        city_id: "5203",
        name: "Aikmel",
      },
      {
        id: "520310",
        city_id: "5203",
        name: "Sambelia",
      },
      {
        id: "520311",
        city_id: "5203",
        name: "Montong Gading",
      },
      {
        id: "520312",
        city_id: "5203",
        name: "Pringgasela",
      },
      {
        id: "520313",
        city_id: "5203",
        name: "Suralaga",
      },
      {
        id: "520314",
        city_id: "5203",
        name: "Wanasaba",
      },
      {
        id: "520315",
        city_id: "5203",
        name: "Sembalun",
      },
      {
        id: "520316",
        city_id: "5203",
        name: "Suwela",
      },
      {
        id: "520317",
        city_id: "5203",
        name: "Labuhan Haji",
      },
      {
        id: "520318",
        city_id: "5203",
        name: "Sakra Timur",
      },
      {
        id: "520319",
        city_id: "5203",
        name: "Sakra Barat",
      },
      {
        id: "520320",
        city_id: "5203",
        name: "Jerowaru",
      },
      {
        id: "520321",
        city_id: "5203",
        name: "Lenek",
      },
      {
        id: "520402",
        city_id: "5204",
        name: "Lunyuk",
      },
      {
        id: "520405",
        city_id: "5204",
        name: "Alas",
      },
      {
        id: "520406",
        city_id: "5204",
        name: "Utan",
      },
      {
        id: "520407",
        city_id: "5204",
        name: "Batu Lanteh",
      },
      {
        id: "520408",
        city_id: "5204",
        name: "Sumbawa",
      },
      {
        id: "520409",
        city_id: "5204",
        name: "Moyo Hilir",
      },
      {
        id: "520410",
        city_id: "5204",
        name: "Moyo Hulu",
      },
      {
        id: "520411",
        city_id: "5204",
        name: "Ropang",
      },
      {
        id: "520412",
        city_id: "5204",
        name: "Lape",
      },
      {
        id: "520413",
        city_id: "5204",
        name: "Plampang",
      },
      {
        id: "520414",
        city_id: "5204",
        name: "Empang",
      },
      {
        id: "520417",
        city_id: "5204",
        name: "Alas Barat",
      },
      {
        id: "520418",
        city_id: "5204",
        name: "Labuhan Badas",
      },
      {
        id: "520419",
        city_id: "5204",
        name: "Labangka",
      },
      {
        id: "520420",
        city_id: "5204",
        name: "Buer",
      },
      {
        id: "520421",
        city_id: "5204",
        name: "Rhee",
      },
      {
        id: "520422",
        city_id: "5204",
        name: "Unter Iwes",
      },
      {
        id: "520423",
        city_id: "5204",
        name: "Moyo Utara",
      },
      {
        id: "520424",
        city_id: "5204",
        name: "Maronge",
      },
      {
        id: "520425",
        city_id: "5204",
        name: "Tarano",
      },
      {
        id: "520426",
        city_id: "5204",
        name: "Lopok",
      },
      {
        id: "520427",
        city_id: "5204",
        name: "Lenangguar",
      },
      {
        id: "520428",
        city_id: "5204",
        name: "Orong Telu",
      },
      {
        id: "520429",
        city_id: "5204",
        name: "Lantung",
      },
      {
        id: "520501",
        city_id: "5205",
        name: "Dompu",
      },
      {
        id: "520502",
        city_id: "5205",
        name: "Kempo",
      },
      {
        id: "520503",
        city_id: "5205",
        name: "Hu'u",
      },
      {
        id: "520504",
        city_id: "5205",
        name: "Kilo",
      },
      {
        id: "520505",
        city_id: "5205",
        name: "Woja",
      },
      {
        id: "520506",
        city_id: "5205",
        name: "Pekat",
      },
      {
        id: "520507",
        city_id: "5205",
        name: "Manggalewa",
      },
      {
        id: "520508",
        city_id: "5205",
        name: "Pajo",
      },
      {
        id: "520601",
        city_id: "5206",
        name: "Monta",
      },
      {
        id: "520602",
        city_id: "5206",
        name: "Bolo",
      },
      {
        id: "520603",
        city_id: "5206",
        name: "Woha",
      },
      {
        id: "520604",
        city_id: "5206",
        name: "Belo",
      },
      {
        id: "520605",
        city_id: "5206",
        name: "Wawo",
      },
      {
        id: "520606",
        city_id: "5206",
        name: "Sape",
      },
      {
        id: "520607",
        city_id: "5206",
        name: "Wera",
      },
      {
        id: "520608",
        city_id: "5206",
        name: "Donggo",
      },
      {
        id: "520609",
        city_id: "5206",
        name: "Sanggar",
      },
      {
        id: "520610",
        city_id: "5206",
        name: "Ambalawi",
      },
      {
        id: "520611",
        city_id: "5206",
        name: "Langgudu",
      },
      {
        id: "520612",
        city_id: "5206",
        name: "Lambu",
      },
      {
        id: "520613",
        city_id: "5206",
        name: "Madapangga",
      },
      {
        id: "520614",
        city_id: "5206",
        name: "Tambora",
      },
      {
        id: "520615",
        city_id: "5206",
        name: "Soromandi",
      },
      {
        id: "520616",
        city_id: "5206",
        name: "Parado",
      },
      {
        id: "520617",
        city_id: "5206",
        name: "Lambitu",
      },
      {
        id: "520618",
        city_id: "5206",
        name: "Palibelo",
      },
      {
        id: "520701",
        city_id: "5207",
        name: "Jereweh",
      },
      {
        id: "520702",
        city_id: "5207",
        name: "Taliwang",
      },
      {
        id: "520703",
        city_id: "5207",
        name: "Seteluk",
      },
      {
        id: "520704",
        city_id: "5207",
        name: "Sekongkang",
      },
      {
        id: "520705",
        city_id: "5207",
        name: "Brang Rea",
      },
      {
        id: "520706",
        city_id: "5207",
        name: "Poto Tano",
      },
      {
        id: "520707",
        city_id: "5207",
        name: "Brang Ene",
      },
      {
        id: "520708",
        city_id: "5207",
        name: "Maluk",
      },
      {
        id: "520801",
        city_id: "5208",
        name: "Tanjung",
      },
      {
        id: "520802",
        city_id: "5208",
        name: "Gangga",
      },
      {
        id: "520803",
        city_id: "5208",
        name: "Kayangan",
      },
      {
        id: "520804",
        city_id: "5208",
        name: "Bayan",
      },
      {
        id: "520805",
        city_id: "5208",
        name: "Pemenang",
      },
      {
        id: "527101",
        city_id: "5271",
        name: "Ampenan",
      },
      {
        id: "527102",
        city_id: "5271",
        name: "Mataram",
      },
      {
        id: "527103",
        city_id: "5271",
        name: "Cakranegara",
      },
      {
        id: "527104",
        city_id: "5271",
        name: "Sekarbela",
      },
      {
        id: "527105",
        city_id: "5271",
        name: "Selaprang",
      },
      {
        id: "527106",
        city_id: "5271",
        name: "Sandubaya",
      },
      {
        id: "527201",
        city_id: "5272",
        name: "Rasanae Barat",
      },
      {
        id: "527202",
        city_id: "5272",
        name: "Rasanae Timur",
      },
      {
        id: "527203",
        city_id: "5272",
        name: "Asakota",
      },
      {
        id: "527204",
        city_id: "5272",
        name: "Raba",
      },
      {
        id: "527205",
        city_id: "5272",
        name: "Mpunda",
      },
      {
        id: "530104",
        city_id: "5301",
        name: "Semau",
      },
      {
        id: "530105",
        city_id: "5301",
        name: "Kupang Barat",
      },
      {
        id: "530106",
        city_id: "5301",
        name: "Kupang Timur",
      },
      {
        id: "530107",
        city_id: "5301",
        name: "Sulamu",
      },
      {
        id: "530108",
        city_id: "5301",
        name: "Kupang Tengah",
      },
      {
        id: "530109",
        city_id: "5301",
        name: "Amarasi",
      },
      {
        id: "530110",
        city_id: "5301",
        name: "Fatuleu",
      },
      {
        id: "530111",
        city_id: "5301",
        name: "Takari",
      },
      {
        id: "530112",
        city_id: "5301",
        name: "Amfoang Selatan",
      },
      {
        id: "530113",
        city_id: "5301",
        name: "Amfoang Utara",
      },
      {
        id: "530116",
        city_id: "5301",
        name: "Nekamese",
      },
      {
        id: "530117",
        city_id: "5301",
        name: "Amarasi Barat",
      },
      {
        id: "530118",
        city_id: "5301",
        name: "Amarasi Selatan",
      },
      {
        id: "530119",
        city_id: "5301",
        name: "Amarasi Timur",
      },
      {
        id: "530120",
        city_id: "5301",
        name: "Amabi Oefeto Timur",
      },
      {
        id: "530121",
        city_id: "5301",
        name: "Amfoang Barat Daya",
      },
      {
        id: "530122",
        city_id: "5301",
        name: "Amfoang Barat Laut",
      },
      {
        id: "530123",
        city_id: "5301",
        name: "Semau Selatan",
      },
      {
        id: "530124",
        city_id: "5301",
        name: "Taebenu",
      },
      {
        id: "530125",
        city_id: "5301",
        name: "Amabi Oefeto",
      },
      {
        id: "530126",
        city_id: "5301",
        name: "Amfoang Timur",
      },
      {
        id: "530127",
        city_id: "5301",
        name: "Fatuleu Barat",
      },
      {
        id: "530128",
        city_id: "5301",
        name: "Fatuleu Tengah",
      },
      {
        id: "530130",
        city_id: "5301",
        name: "Amfoang Tengah",
      },
      {
        id: "530201",
        city_id: "5302",
        name: "Kota Soe",
      },
      {
        id: "530202",
        city_id: "5302",
        name: "Mollo Selatan",
      },
      {
        id: "530203",
        city_id: "5302",
        name: "Mollo Utara",
      },
      {
        id: "530204",
        city_id: "5302",
        name: "Amanuban Timur",
      },
      {
        id: "530205",
        city_id: "5302",
        name: "Amanuban Tengah",
      },
      {
        id: "530206",
        city_id: "5302",
        name: "Amanuban Selatan",
      },
      {
        id: "530207",
        city_id: "5302",
        name: "Amanuban Barat",
      },
      {
        id: "530208",
        city_id: "5302",
        name: "Amanatun Selatan",
      },
      {
        id: "530209",
        city_id: "5302",
        name: "Amanatun Utara",
      },
      {
        id: "530210",
        city_id: "5302",
        name: "KI'E",
      },
      {
        id: "530211",
        city_id: "5302",
        name: "Kuanfatu",
      },
      {
        id: "530212",
        city_id: "5302",
        name: "Fatumnasi",
      },
      {
        id: "530213",
        city_id: "5302",
        name: "Polen",
      },
      {
        id: "530214",
        city_id: "5302",
        name: "Batu Putih",
      },
      {
        id: "530215",
        city_id: "5302",
        name: "Boking",
      },
      {
        id: "530216",
        city_id: "5302",
        name: "Toianas",
      },
      {
        id: "530217",
        city_id: "5302",
        name: "Nunkolo",
      },
      {
        id: "530218",
        city_id: "5302",
        name: "Oenino",
      },
      {
        id: "530219",
        city_id: "5302",
        name: "Kolbano",
      },
      {
        id: "530220",
        city_id: "5302",
        name: "Kot olin",
      },
      {
        id: "530221",
        city_id: "5302",
        name: "Kualin",
      },
      {
        id: "530222",
        city_id: "5302",
        name: "Mollo Barat",
      },
      {
        id: "530223",
        city_id: "5302",
        name: "Kok Baun",
      },
      {
        id: "530224",
        city_id: "5302",
        name: "Noebana",
      },
      {
        id: "530225",
        city_id: "5302",
        name: "Santian",
      },
      {
        id: "530226",
        city_id: "5302",
        name: "Noebeba",
      },
      {
        id: "530227",
        city_id: "5302",
        name: "Kuatnana",
      },
      {
        id: "530228",
        city_id: "5302",
        name: "Fautmolo",
      },
      {
        id: "530229",
        city_id: "5302",
        name: "Fatukopa",
      },
      {
        id: "530230",
        city_id: "5302",
        name: "Mollo Tengah",
      },
      {
        id: "530231",
        city_id: "5302",
        name: "Tobu",
      },
      {
        id: "530232",
        city_id: "5302",
        name: "Nunbena",
      },
      {
        id: "530301",
        city_id: "5303",
        name: "Miomafo Timur",
      },
      {
        id: "530302",
        city_id: "5303",
        name: "Miomafo Barat",
      },
      {
        id: "530303",
        city_id: "5303",
        name: "Biboki Selatan",
      },
      {
        id: "530304",
        city_id: "5303",
        name: "Noemuti",
      },
      {
        id: "530305",
        city_id: "5303",
        name: "Kota Kefamenanu",
      },
      {
        id: "530306",
        city_id: "5303",
        name: "Biboki Utara",
      },
      {
        id: "530307",
        city_id: "5303",
        name: "Biboki Anleu",
      },
      {
        id: "530308",
        city_id: "5303",
        name: "Insana",
      },
      {
        id: "530309",
        city_id: "5303",
        name: "Insana Utara",
      },
      {
        id: "530310",
        city_id: "5303",
        name: "Noemuti Timur",
      },
      {
        id: "530311",
        city_id: "5303",
        name: "Miomaffo Tengah",
      },
      {
        id: "530312",
        city_id: "5303",
        name: "Musi",
      },
      {
        id: "530313",
        city_id: "5303",
        name: "Mutis",
      },
      {
        id: "530314",
        city_id: "5303",
        name: "Bikomi Selatan",
      },
      {
        id: "530315",
        city_id: "5303",
        name: "Bikomi Tengah",
      },
      {
        id: "530316",
        city_id: "5303",
        name: "Bikomi Nilulat",
      },
      {
        id: "530317",
        city_id: "5303",
        name: "Bikomi Utara",
      },
      {
        id: "530318",
        city_id: "5303",
        name: "Naibenu",
      },
      {
        id: "530319",
        city_id: "5303",
        name: "Insana Fafinesu",
      },
      {
        id: "530320",
        city_id: "5303",
        name: "Insana Barat",
      },
      {
        id: "530321",
        city_id: "5303",
        name: "Insana Tengah",
      },
      {
        id: "530322",
        city_id: "5303",
        name: "Biboki Tan Pah",
      },
      {
        id: "530323",
        city_id: "5303",
        name: "Biboki Moenleu",
      },
      {
        id: "530324",
        city_id: "5303",
        name: "Biboki Feotleu",
      },
      {
        id: "530401",
        city_id: "5304",
        name: "Lamaknen",
      },
      {
        id: "530402",
        city_id: "5304",
        name: "TasifetoTimur",
      },
      {
        id: "530403",
        city_id: "5304",
        name: "Raihat",
      },
      {
        id: "530404",
        city_id: "5304",
        name: "Tasifeto Barat",
      },
      {
        id: "530405",
        city_id: "5304",
        name: "Kakuluk Mesak",
      },
      {
        id: "530412",
        city_id: "5304",
        name: "Kota Atambua",
      },
      {
        id: "530413",
        city_id: "5304",
        name: "Raimanuk",
      },
      {
        id: "530417",
        city_id: "5304",
        name: "Lasiolat",
      },
      {
        id: "530418",
        city_id: "5304",
        name: "Lamaknen Selatan",
      },
      {
        id: "530421",
        city_id: "5304",
        name: "Atambua Barat",
      },
      {
        id: "530422",
        city_id: "5304",
        name: "Atambua Selatan",
      },
      {
        id: "530423",
        city_id: "5304",
        name: "Nanaet Duabesi",
      },
      {
        id: "530501",
        city_id: "5305",
        name: "Teluk Mutiara",
      },
      {
        id: "530502",
        city_id: "5305",
        name: "Alor Barat Laut",
      },
      {
        id: "530503",
        city_id: "5305",
        name: "Alor Barat Daya",
      },
      {
        id: "530504",
        city_id: "5305",
        name: "Alor Selatan",
      },
      {
        id: "530505",
        city_id: "5305",
        name: "Alor Timur",
      },
      {
        id: "530506",
        city_id: "5305",
        name: "Pantar",
      },
      {
        id: "530507",
        city_id: "5305",
        name: "Alor Tengah Utara",
      },
      {
        id: "530508",
        city_id: "5305",
        name: "Alor Timur Laut",
      },
      {
        id: "530509",
        city_id: "5305",
        name: "Pantar Barat",
      },
      {
        id: "530510",
        city_id: "5305",
        name: "Kabola",
      },
      {
        id: "530511",
        city_id: "5305",
        name: "Pulau Pura",
      },
      {
        id: "530512",
        city_id: "5305",
        name: "Mataru",
      },
      {
        id: "530513",
        city_id: "5305",
        name: "Pureman",
      },
      {
        id: "530514",
        city_id: "5305",
        name: "Pantar Timur",
      },
      {
        id: "530515",
        city_id: "5305",
        name: "Lembur",
      },
      {
        id: "530516",
        city_id: "5305",
        name: "Pantar Tengah",
      },
      {
        id: "530517",
        city_id: "5305",
        name: "Pantar Baru Laut",
      },
      {
        id: "530601",
        city_id: "5306",
        name: "Wulanggitang",
      },
      {
        id: "530602",
        city_id: "5306",
        name: "Titehena",
      },
      {
        id: "530603",
        city_id: "5306",
        name: "Larantuka",
      },
      {
        id: "530604",
        city_id: "5306",
        name: "Ile Mandiri",
      },
      {
        id: "530605",
        city_id: "5306",
        name: "Tanjung Bunga",
      },
      {
        id: "530606",
        city_id: "5306",
        name: "Solor Barat",
      },
      {
        id: "530607",
        city_id: "5306",
        name: "Solor Timur",
      },
      {
        id: "530608",
        city_id: "5306",
        name: "Adonara Barat",
      },
      {
        id: "530609",
        city_id: "5306",
        name: "Wotan Ulumando",
      },
      {
        id: "530610",
        city_id: "5306",
        name: "Adonara Timur",
      },
      {
        id: "530611",
        city_id: "5306",
        name: "Kelubagolit",
      },
      {
        id: "530612",
        city_id: "5306",
        name: "Witihama",
      },
      {
        id: "530613",
        city_id: "5306",
        name: "Ile Boleng",
      },
      {
        id: "530614",
        city_id: "5306",
        name: "Demon Pagong",
      },
      {
        id: "530615",
        city_id: "5306",
        name: "Lewolema",
      },
      {
        id: "530616",
        city_id: "5306",
        name: "Ile Bura",
      },
      {
        id: "530617",
        city_id: "5306",
        name: "Adonara",
      },
      {
        id: "530618",
        city_id: "5306",
        name: "Adonara Tengah",
      },
      {
        id: "530619",
        city_id: "5306",
        name: "Solor Selatan",
      },
      {
        id: "530701",
        city_id: "5307",
        name: "Paga",
      },
      {
        id: "530702",
        city_id: "5307",
        name: "Mego",
      },
      {
        id: "530703",
        city_id: "5307",
        name: "Lela",
      },
      {
        id: "530704",
        city_id: "5307",
        name: "Nita",
      },
      {
        id: "530705",
        city_id: "5307",
        name: "Alok",
      },
      {
        id: "530706",
        city_id: "5307",
        name: "Palue",
      },
      {
        id: "530707",
        city_id: "5307",
        name: "Nelle",
      },
      {
        id: "530708",
        city_id: "5307",
        name: "Talibura",
      },
      {
        id: "530709",
        city_id: "5307",
        name: "Waigete",
      },
      {
        id: "530710",
        city_id: "5307",
        name: "Kewapante",
      },
      {
        id: "530711",
        city_id: "5307",
        name: "Bola",
      },
      {
        id: "530712",
        city_id: "5307",
        name: "Magepanda",
      },
      {
        id: "530713",
        city_id: "5307",
        name: "Waiblama",
      },
      {
        id: "530714",
        city_id: "5307",
        name: "Alok Barat",
      },
      {
        id: "530715",
        city_id: "5307",
        name: "Alok Timur",
      },
      {
        id: "530716",
        city_id: "5307",
        name: "Koting",
      },
      {
        id: "530717",
        city_id: "5307",
        name: "Tana Wawo",
      },
      {
        id: "530718",
        city_id: "5307",
        name: "Hewokloang",
      },
      {
        id: "530719",
        city_id: "5307",
        name: "Kangae",
      },
      {
        id: "530720",
        city_id: "5307",
        name: "Doreng",
      },
      {
        id: "530721",
        city_id: "5307",
        name: "Mapitara",
      },
      {
        id: "530801",
        city_id: "5308",
        name: "Nangapanda",
      },
      {
        id: "530802",
        city_id: "5308",
        name: "Pulau Ende",
      },
      {
        id: "530803",
        city_id: "5308",
        name: "Ende",
      },
      {
        id: "530804",
        city_id: "5308",
        name: "Ende Selatan",
      },
      {
        id: "530805",
        city_id: "5308",
        name: "Ndona",
      },
      {
        id: "530806",
        city_id: "5308",
        name: "Detusoko",
      },
      {
        id: "530807",
        city_id: "5308",
        name: "Wewaria",
      },
      {
        id: "530808",
        city_id: "5308",
        name: "Wolowaru",
      },
      {
        id: "530809",
        city_id: "5308",
        name: "Wolojita",
      },
      {
        id: "530810",
        city_id: "5308",
        name: "Maurole",
      },
      {
        id: "530811",
        city_id: "5308",
        name: "Maukaro",
      },
      {
        id: "530812",
        city_id: "5308",
        name: "Lio Timur",
      },
      {
        id: "530813",
        city_id: "5308",
        name: "Kota Baru",
      },
      {
        id: "530814",
        city_id: "5308",
        name: "Kelimutu",
      },
      {
        id: "530815",
        city_id: "5308",
        name: "Detukeli",
      },
      {
        id: "530816",
        city_id: "5308",
        name: "Ndona Timur",
      },
      {
        id: "530817",
        city_id: "5308",
        name: "Ndori",
      },
      {
        id: "530818",
        city_id: "5308",
        name: "Ende Utara",
      },
      {
        id: "530819",
        city_id: "5308",
        name: "Ende Tengah",
      },
      {
        id: "530820",
        city_id: "5308",
        name: "Ende Timur",
      },
      {
        id: "530821",
        city_id: "5308",
        name: "Lepembusu Kelisoke",
      },
      {
        id: "530901",
        city_id: "5309",
        name: "Aimere",
      },
      {
        id: "530902",
        city_id: "5309",
        name: "Golewa",
      },
      {
        id: "530906",
        city_id: "5309",
        name: "Bajawa",
      },
      {
        id: "530907",
        city_id: "5309",
        name: "Soa",
      },
      {
        id: "530909",
        city_id: "5309",
        name: "Riung",
      },
      {
        id: "530912",
        city_id: "5309",
        name: "Jerebuu",
      },
      {
        id: "530914",
        city_id: "5309",
        name: "Riung Barat",
      },
      {
        id: "530915",
        city_id: "5309",
        name: "Bajawa Utara",
      },
      {
        id: "530916",
        city_id: "5309",
        name: "Wolomeze",
      },
      {
        id: "530918",
        city_id: "5309",
        name: "Golewa Selatan",
      },
      {
        id: "530919",
        city_id: "5309",
        name: "Golewa Barat",
      },
      {
        id: "530920",
        city_id: "5309",
        name: "Inerie",
      },
      {
        id: "531001",
        city_id: "5310",
        name: "Wae Rii",
      },
      {
        id: "531003",
        city_id: "5310",
        name: "Ruteng",
      },
      {
        id: "531005",
        city_id: "5310",
        name: "Satar Mese",
      },
      {
        id: "531006",
        city_id: "5310",
        name: "Cibal",
      },
      {
        id: "531011",
        city_id: "5310",
        name: "Reok",
      },
      {
        id: "531012",
        city_id: "5310",
        name: "Langke Rembong",
      },
      {
        id: "531013",
        city_id: "5310",
        name: "Satar Mese Barat",
      },
      {
        id: "531014",
        city_id: "5310",
        name: "Rahong Utara",
      },
      {
        id: "531015",
        city_id: "5310",
        name: "Lelak",
      },
      {
        id: "531016",
        city_id: "5310",
        name: "Reok Barat",
      },
      {
        id: "531017",
        city_id: "5310",
        name: "Cibal barat",
      },
      {
        id: "531018",
        city_id: "5310",
        name: "Satar Mese Utara",
      },
      {
        id: "531101",
        city_id: "5311",
        name: "Kota Waingapu",
      },
      {
        id: "531102",
        city_id: "5311",
        name: "Haharu",
      },
      {
        id: "531103",
        city_id: "5311",
        name: "Lewa",
      },
      {
        id: "531104",
        city_id: "5311",
        name: "Nggaha Ori Angu",
      },
      {
        id: "531105",
        city_id: "5311",
        name: "Tabundung",
      },
      {
        id: "531106",
        city_id: "5311",
        name: "Pinu Pahar",
      },
      {
        id: "531107",
        city_id: "5311",
        name: "Pandawai",
      },
      {
        id: "531108",
        city_id: "5311",
        name: "Umalulu",
      },
      {
        id: "531109",
        city_id: "5311",
        name: "Rindi",
      },
      {
        id: "531110",
        city_id: "5311",
        name: "Pahunga Lodu",
      },
      {
        id: "531111",
        city_id: "5311",
        name: "Wulla Waijelu",
      },
      {
        id: "531112",
        city_id: "5311",
        name: "Paberiwai",
      },
      {
        id: "531113",
        city_id: "5311",
        name: "Karera",
      },
      {
        id: "531114",
        city_id: "5311",
        name: "Kahaungu Eti",
      },
      {
        id: "531115",
        city_id: "5311",
        name: "Matawai La Pawu",
      },
      {
        id: "531116",
        city_id: "5311",
        name: "Kambera",
      },
      {
        id: "531117",
        city_id: "5311",
        name: "Kambata Mapambuhang",
      },
      {
        id: "531118",
        city_id: "5311",
        name: "Lewa Tidahu",
      },
      {
        id: "531119",
        city_id: "5311",
        name: "Katala Hamu Lingu",
      },
      {
        id: "531120",
        city_id: "5311",
        name: "Kanatang",
      },
      {
        id: "531121",
        city_id: "5311",
        name: "Ngadu Ngala",
      },
      {
        id: "531122",
        city_id: "5311",
        name: "Mahu",
      },
      {
        id: "531204",
        city_id: "5312",
        name: "Tana Righu",
      },
      {
        id: "531210",
        city_id: "5312",
        name: "Loli",
      },
      {
        id: "531211",
        city_id: "5312",
        name: "Wanokaka",
      },
      {
        id: "531212",
        city_id: "5312",
        name: "Lamboya",
      },
      {
        id: "531215",
        city_id: "5312",
        name: "Kota Waikabubak",
      },
      {
        id: "531218",
        city_id: "5312",
        name: "Laboya Barat",
      },
      {
        id: "531301",
        city_id: "5313",
        name: "Naga Wutung",
      },
      {
        id: "531302",
        city_id: "5313",
        name: "Atadei",
      },
      {
        id: "531303",
        city_id: "5313",
        name: "Ile Ape",
      },
      {
        id: "531304",
        city_id: "5313",
        name: "Lebatukan",
      },
      {
        id: "531305",
        city_id: "5313",
        name: "Nubatukan",
      },
      {
        id: "531306",
        city_id: "5313",
        name: "Omesuri",
      },
      {
        id: "531307",
        city_id: "5313",
        name: "Buyasuri",
      },
      {
        id: "531308",
        city_id: "5313",
        name: "Wulandoni",
      },
      {
        id: "531309",
        city_id: "5313",
        name: "Ile Ape Timur",
      },
      {
        id: "531401",
        city_id: "5314",
        name: "Rote Barat Daya",
      },
      {
        id: "531402",
        city_id: "5314",
        name: "Rote Barat Laut",
      },
      {
        id: "531403",
        city_id: "5314",
        name: "Lobalain",
      },
      {
        id: "531404",
        city_id: "5314",
        name: "Rote Tengah",
      },
      {
        id: "531405",
        city_id: "5314",
        name: "Pantai Baru",
      },
      {
        id: "531406",
        city_id: "5314",
        name: "Rote Timur",
      },
      {
        id: "531407",
        city_id: "5314",
        name: "Rote Barat",
      },
      {
        id: "531408",
        city_id: "5314",
        name: "Rote Selatan",
      },
      {
        id: "531409",
        city_id: "5314",
        name: "Ndao Nuse",
      },
      {
        id: "531410",
        city_id: "5314",
        name: "Landu Leko",
      },
      {
        id: "531501",
        city_id: "5315",
        name: "Macang Pacar",
      },
      {
        id: "531502",
        city_id: "5315",
        name: "Kuwus",
      },
      {
        id: "531503",
        city_id: "5315",
        name: "Lembor",
      },
      {
        id: "531504",
        city_id: "5315",
        name: "Sano Nggoang",
      },
      {
        id: "531505",
        city_id: "5315",
        name: "Komodo",
      },
      {
        id: "531506",
        city_id: "5315",
        name: "Boleng",
      },
      {
        id: "531507",
        city_id: "5315",
        name: "Welak",
      },
      {
        id: "531508",
        city_id: "5315",
        name: "Ndoso",
      },
      {
        id: "531509",
        city_id: "5315",
        name: "Lembor Selatan",
      },
      {
        id: "531510",
        city_id: "5315",
        name: "Mbeliling",
      },
      {
        id: "531511",
        city_id: "5315",
        name: "Pacar",
      },
      {
        id: "531512",
        city_id: "5315",
        name: "Kuwus Barat",
      },
      {
        id: "531601",
        city_id: "5316",
        name: "Aesesa",
      },
      {
        id: "531602",
        city_id: "5316",
        name: "Nangaroro",
      },
      {
        id: "531603",
        city_id: "5316",
        name: "Boawae",
      },
      {
        id: "531604",
        city_id: "5316",
        name: "Mauponggo",
      },
      {
        id: "531605",
        city_id: "5316",
        name: "Wolowae",
      },
      {
        id: "531606",
        city_id: "5316",
        name: "Keo Tengah",
      },
      {
        id: "531607",
        city_id: "5316",
        name: "Aesesa Selatan",
      },
      {
        id: "531701",
        city_id: "5317",
        name: "Katiku Tana",
      },
      {
        id: "531702",
        city_id: "5317",
        name: "Umbu Ratu Nggay Barat",
      },
      {
        id: "531703",
        city_id: "5317",
        name: "Mamboro",
      },
      {
        id: "531704",
        city_id: "5317",
        name: "Umbu Ratu Nggay",
      },
      {
        id: "531705",
        city_id: "5317",
        name: "Katiku Tana Selatan",
      },
      {
        id: "531801",
        city_id: "5318",
        name: "Loura",
      },
      {
        id: "531802",
        city_id: "5318",
        name: "Wewewa Utara",
      },
      {
        id: "531803",
        city_id: "5318",
        name: "Wewewa Timur",
      },
      {
        id: "531804",
        city_id: "5318",
        name: "Wewewa Barat",
      },
      {
        id: "531805",
        city_id: "5318",
        name: "Wewewa Selatan",
      },
      {
        id: "531806",
        city_id: "5318",
        name: "Kodi Bangedo",
      },
      {
        id: "531807",
        city_id: "5318",
        name: "Kodi",
      },
      {
        id: "531808",
        city_id: "5318",
        name: "Kodi Utara",
      },
      {
        id: "531809",
        city_id: "5318",
        name: "Kota Tambolaka",
      },
      {
        id: "531810",
        city_id: "5318",
        name: "Wewewa Tengah",
      },
      {
        id: "531811",
        city_id: "5318",
        name: "Kodi Balaghar",
      },
      {
        id: "531901",
        city_id: "5319",
        name: "Borong",
      },
      {
        id: "531902",
        city_id: "5319",
        name: "Poco Ranaka",
      },
      {
        id: "531903",
        city_id: "5319",
        name: "Lamba Leda",
      },
      {
        id: "531904",
        city_id: "5319",
        name: "Sambi Rampas",
      },
      {
        id: "531905",
        city_id: "5319",
        name: "Elar",
      },
      {
        id: "531906",
        city_id: "5319",
        name: "Kota Komba",
      },
      {
        id: "531907",
        city_id: "5319",
        name: "Rana Mese",
      },
      {
        id: "531908",
        city_id: "5319",
        name: "Poco Ranaka Timur",
      },
      {
        id: "531909",
        city_id: "5319",
        name: "Elar Selatan",
      },
      {
        id: "532001",
        city_id: "5320",
        name: "Sabu Barat",
      },
      {
        id: "532002",
        city_id: "5320",
        name: "Sabu Tengah",
      },
      {
        id: "532003",
        city_id: "5320",
        name: "Sabu Timur",
      },
      {
        id: "532004",
        city_id: "5320",
        name: "Sabu Liae",
      },
      {
        id: "532005",
        city_id: "5320",
        name: "Hawu Mehara",
      },
      {
        id: "532006",
        city_id: "5320",
        name: "Raijua",
      },
      {
        id: "532101",
        city_id: "5321",
        name: "Malaka Tengah",
      },
      {
        id: "532102",
        city_id: "5321",
        name: "Malaka Barat",
      },
      {
        id: "532103",
        city_id: "5321",
        name: "Wewiku",
      },
      {
        id: "532104",
        city_id: "5321",
        name: "Weliman",
      },
      {
        id: "532105",
        city_id: "5321",
        name: "Rinhat",
      },
      {
        id: "532106",
        city_id: "5321",
        name: "Io Kufeu",
      },
      {
        id: "532107",
        city_id: "5321",
        name: "Sasitamean",
      },
      {
        id: "532108",
        city_id: "5321",
        name: "Laenmanen",
      },
      {
        id: "532109",
        city_id: "5321",
        name: "Malaka Timur",
      },
      {
        id: "532110",
        city_id: "5321",
        name: "Kobalima Timur",
      },
      {
        id: "532111",
        city_id: "5321",
        name: "Kobalima",
      },
      {
        id: "532112",
        city_id: "5321",
        name: "Botin Leobele",
      },
      {
        id: "537101",
        city_id: "5371",
        name: "Alak",
      },
      {
        id: "537102",
        city_id: "5371",
        name: "Maulafa",
      },
      {
        id: "537103",
        city_id: "5371",
        name: "Kelapa Lima",
      },
      {
        id: "537104",
        city_id: "5371",
        name: "Oebobo",
      },
      {
        id: "537105",
        city_id: "5371",
        name: "Kota Raja",
      },
      {
        id: "537106",
        city_id: "5371",
        name: "Kota Lama",
      },
      {
        id: "610101",
        city_id: "6101",
        name: "Sambas",
      },
      {
        id: "610102",
        city_id: "6101",
        name: "Teluk Keramat",
      },
      {
        id: "610103",
        city_id: "6101",
        name: "Jawai",
      },
      {
        id: "610104",
        city_id: "6101",
        name: "Tebas",
      },
      {
        id: "610105",
        city_id: "6101",
        name: "Pemangkat",
      },
      {
        id: "610106",
        city_id: "6101",
        name: "Sejangkung",
      },
      {
        id: "610107",
        city_id: "6101",
        name: "Selakau",
      },
      {
        id: "610108",
        city_id: "6101",
        name: "Paloh",
      },
      {
        id: "610109",
        city_id: "6101",
        name: "Sajingan Besar",
      },
      {
        id: "610110",
        city_id: "6101",
        name: "Subah",
      },
      {
        id: "610111",
        city_id: "6101",
        name: "Galing",
      },
      {
        id: "610112",
        city_id: "6101",
        name: "Tekarang",
      },
      {
        id: "610113",
        city_id: "6101",
        name: "Semparuk",
      },
      {
        id: "610114",
        city_id: "6101",
        name: "Sajad",
      },
      {
        id: "610115",
        city_id: "6101",
        name: "Sebawi",
      },
      {
        id: "610116",
        city_id: "6101",
        name: "Jawai Selatan",
      },
      {
        id: "610117",
        city_id: "6101",
        name: "Tangaran",
      },
      {
        id: "610118",
        city_id: "6101",
        name: "Salatiga",
      },
      {
        id: "610119",
        city_id: "6101",
        name: "Selakau Timur",
      },
      {
        id: "610201",
        city_id: "6102",
        name: "Mempawah Hilir",
      },
      {
        id: "610206",
        city_id: "6102",
        name: "Toho",
      },
      {
        id: "610207",
        city_id: "6102",
        name: "Sungai Pinyuh",
      },
      {
        id: "610208",
        city_id: "6102",
        name: "Siantan",
      },
      {
        id: "610212",
        city_id: "6102",
        name: "Sungai Kunyit",
      },
      {
        id: "610215",
        city_id: "6102",
        name: "Segedong",
      },
      {
        id: "610216",
        city_id: "6102",
        name: "Anjongan",
      },
      {
        id: "610217",
        city_id: "6102",
        name: "Sadaniang",
      },
      {
        id: "610218",
        city_id: "6102",
        name: "Mempawah Timur",
      },
      {
        id: "610301",
        city_id: "6103",
        name: "Kapuas",
      },
      {
        id: "610302",
        city_id: "6103",
        name: "Mukok",
      },
      {
        id: "610303",
        city_id: "6103",
        name: "Noyan",
      },
      {
        id: "610304",
        city_id: "6103",
        name: "Jangkang",
      },
      {
        id: "610305",
        city_id: "6103",
        name: "Bonti",
      },
      {
        id: "610306",
        city_id: "6103",
        name: "Beduai",
      },
      {
        id: "610307",
        city_id: "6103",
        name: "Sekayam",
      },
      {
        id: "610308",
        city_id: "6103",
        name: "Kembayan",
      },
      {
        id: "610309",
        city_id: "6103",
        name: "Parindu",
      },
      {
        id: "610310",
        city_id: "6103",
        name: "Tayan Hulu",
      },
      {
        id: "610311",
        city_id: "6103",
        name: "Tayan Hilir",
      },
      {
        id: "610312",
        city_id: "6103",
        name: "Balai",
      },
      {
        id: "610313",
        city_id: "6103",
        name: "Toba",
      },
      {
        id: "610320",
        city_id: "6103",
        name: "Meliau",
      },
      {
        id: "610321",
        city_id: "6103",
        name: "Entikong",
      },
      {
        id: "610401",
        city_id: "6104",
        name: "Matan Hilir Utara",
      },
      {
        id: "610402",
        city_id: "6104",
        name: "Marau",
      },
      {
        id: "610403",
        city_id: "6104",
        name: "Manis Mata",
      },
      {
        id: "610404",
        city_id: "6104",
        name: "Kendawangan",
      },
      {
        id: "610405",
        city_id: "6104",
        name: "Sandai",
      },
      {
        id: "610407",
        city_id: "6104",
        name: "Sungai Laur",
      },
      {
        id: "610408",
        city_id: "6104",
        name: "Simpang Hulu",
      },
      {
        id: "610411",
        city_id: "6104",
        name: "Nanga Tayap",
      },
      {
        id: "610412",
        city_id: "6104",
        name: "Matan Hilir Selatan",
      },
      {
        id: "610413",
        city_id: "6104",
        name: "Tumbang Titi",
      },
      {
        id: "610414",
        city_id: "6104",
        name: "Jelai Hulu",
      },
      {
        id: "610416",
        city_id: "6104",
        name: "Delta Pawan",
      },
      {
        id: "610417",
        city_id: "6104",
        name: "Muara Pawan",
      },
      {
        id: "610418",
        city_id: "6104",
        name: "Benua Kayong",
      },
      {
        id: "610419",
        city_id: "6104",
        name: "Hulu Sungai",
      },
      {
        id: "610420",
        city_id: "6104",
        name: "Simpang Dua",
      },
      {
        id: "610421",
        city_id: "6104",
        name: "Air Upas",
      },
      {
        id: "610422",
        city_id: "6104",
        name: "Singkup",
      },
      {
        id: "610424",
        city_id: "6104",
        name: "Pemahan",
      },
      {
        id: "610425",
        city_id: "6104",
        name: "Sungai Melayu Rayak",
      },
      {
        id: "610501",
        city_id: "6105",
        name: "Sintang",
      },
      {
        id: "610502",
        city_id: "6105",
        name: "Tempunak",
      },
      {
        id: "610503",
        city_id: "6105",
        name: "Sepauk",
      },
      {
        id: "610504",
        city_id: "6105",
        name: "Ketungau Hilir",
      },
      {
        id: "610505",
        city_id: "6105",
        name: "Ketungau Tengah",
      },
      {
        id: "610506",
        city_id: "6105",
        name: "Ketungau Hulu",
      },
      {
        id: "610507",
        city_id: "6105",
        name: "Dedai",
      },
      {
        id: "610508",
        city_id: "6105",
        name: "Kayan Hilir",
      },
      {
        id: "610509",
        city_id: "6105",
        name: "Kayan Hulu",
      },
      {
        id: "610514",
        city_id: "6105",
        name: "Serawai",
      },
      {
        id: "610515",
        city_id: "6105",
        name: "Ambalau",
      },
      {
        id: "610519",
        city_id: "6105",
        name: "Kelam Permai",
      },
      {
        id: "610520",
        city_id: "6105",
        name: "Sungai Tebelian",
      },
      {
        id: "610521",
        city_id: "6105",
        name: "Binjai Hulu",
      },
      {
        id: "610601",
        city_id: "6106",
        name: "Putussibau Utara",
      },
      {
        id: "610602",
        city_id: "6106",
        name: "Bika",
      },
      {
        id: "610603",
        city_id: "6106",
        name: "Embaloh Hilir",
      },
      {
        id: "610604",
        city_id: "6106",
        name: "Embaloh Hulu",
      },
      {
        id: "610605",
        city_id: "6106",
        name: "Bunut Hilir",
      },
      {
        id: "610606",
        city_id: "6106",
        name: "Bunut Hulu",
      },
      {
        id: "610607",
        city_id: "6106",
        name: "Jongkong",
      },
      {
        id: "610608",
        city_id: "6106",
        name: "Hulu Gurung",
      },
      {
        id: "610609",
        city_id: "6106",
        name: "Selimbau",
      },
      {
        id: "610610",
        city_id: "6106",
        name: "Semitau",
      },
      {
        id: "610611",
        city_id: "6106",
        name: "Seberuang",
      },
      {
        id: "610612",
        city_id: "6106",
        name: "Batang Lupar",
      },
      {
        id: "610613",
        city_id: "6106",
        name: "Empanang",
      },
      {
        id: "610614",
        city_id: "6106",
        name: "Badau",
      },
      {
        id: "610615",
        city_id: "6106",
        name: "Silat Hilir",
      },
      {
        id: "610616",
        city_id: "6106",
        name: "Silat Hulu",
      },
      {
        id: "610617",
        city_id: "6106",
        name: "Putussibau Selatan",
      },
      {
        id: "610618",
        city_id: "6106",
        name: "Kalis",
      },
      {
        id: "610619",
        city_id: "6106",
        name: "Boyan Tanjung",
      },
      {
        id: "610620",
        city_id: "6106",
        name: "Mentebah",
      },
      {
        id: "610621",
        city_id: "6106",
        name: "Pengkadan",
      },
      {
        id: "610622",
        city_id: "6106",
        name: "Suhaid",
      },
      {
        id: "610623",
        city_id: "6106",
        name: "Puring Kencana",
      },
      {
        id: "610701",
        city_id: "6107",
        name: "Sungai Raya",
      },
      {
        id: "610702",
        city_id: "6107",
        name: "Samalantan",
      },
      {
        id: "610703",
        city_id: "6107",
        name: "Ledo",
      },
      {
        id: "610704",
        city_id: "6107",
        name: "Bengkayang",
      },
      {
        id: "610705",
        city_id: "6107",
        name: "Seluas",
      },
      {
        id: "610706",
        city_id: "6107",
        name: "Sanggau Ledo",
      },
      {
        id: "610707",
        city_id: "6107",
        name: "Jagoi Babang",
      },
      {
        id: "610708",
        city_id: "6107",
        name: "Monterado",
      },
      {
        id: "610709",
        city_id: "6107",
        name: "Teriak",
      },
      {
        id: "610710",
        city_id: "6107",
        name: "Suti Semarang",
      },
      {
        id: "610711",
        city_id: "6107",
        name: "Capkala",
      },
      {
        id: "610712",
        city_id: "6107",
        name: "Siding",
      },
      {
        id: "610713",
        city_id: "6107",
        name: "Lumar",
      },
      {
        id: "610714",
        city_id: "6107",
        name: "Sungai Betung",
      },
      {
        id: "610715",
        city_id: "6107",
        name: "Sungai Raya Kepulauan",
      },
      {
        id: "610716",
        city_id: "6107",
        name: "Lembah Bawang",
      },
      {
        id: "610717",
        city_id: "6107",
        name: "Tujuh Belas",
      },
      {
        id: "610801",
        city_id: "6108",
        name: "Ngabang",
      },
      {
        id: "610802",
        city_id: "6108",
        name: "Mempawah Hulu",
      },
      {
        id: "610803",
        city_id: "6108",
        name: "Menjalin",
      },
      {
        id: "610804",
        city_id: "6108",
        name: "Mandor",
      },
      {
        id: "610805",
        city_id: "6108",
        name: "Air Besar",
      },
      {
        id: "610806",
        city_id: "6108",
        name: "Menyuke",
      },
      {
        id: "610807",
        city_id: "6108",
        name: "Sengah Temila",
      },
      {
        id: "610808",
        city_id: "6108",
        name: "Meranti",
      },
      {
        id: "610809",
        city_id: "6108",
        name: "Kuala Behe",
      },
      {
        id: "610810",
        city_id: "6108",
        name: "Sebangki",
      },
      {
        id: "610811",
        city_id: "6108",
        name: "Jelimpo",
      },
      {
        id: "610812",
        city_id: "6108",
        name: "Banyuke Hulu",
      },
      {
        id: "610813",
        city_id: "6108",
        name: "Sompak",
      },
      {
        id: "610901",
        city_id: "6109",
        name: "Sekadau Hilir",
      },
      {
        id: "610902",
        city_id: "6109",
        name: "Sekadau Hulu",
      },
      {
        id: "610903",
        city_id: "6109",
        name: "Nanga Taman",
      },
      {
        id: "610904",
        city_id: "6109",
        name: "Nanga Mahap",
      },
      {
        id: "610905",
        city_id: "6109",
        name: "Belitang Hilir",
      },
      {
        id: "610906",
        city_id: "6109",
        name: "Belitang Hulu",
      },
      {
        id: "610907",
        city_id: "6109",
        name: "Belitang",
      },
      {
        id: "611001",
        city_id: "6110",
        name: "Belimbing",
      },
      {
        id: "611002",
        city_id: "6110",
        name: "Nanga Pinoh",
      },
      {
        id: "611003",
        city_id: "6110",
        name: "Ella Hilir",
      },
      {
        id: "611004",
        city_id: "6110",
        name: "Menukung",
      },
      {
        id: "611005",
        city_id: "6110",
        name: "Sayan",
      },
      {
        id: "611006",
        city_id: "6110",
        name: "Tanah Pinoh",
      },
      {
        id: "611007",
        city_id: "6110",
        name: "Sokan",
      },
      {
        id: "611008",
        city_id: "6110",
        name: "Pinoh Utara",
      },
      {
        id: "611009",
        city_id: "6110",
        name: "Pinoh Selatan",
      },
      {
        id: "611010",
        city_id: "6110",
        name: "Belimbing Hulu",
      },
      {
        id: "611011",
        city_id: "6110",
        name: "Tanah Pinoh Barat",
      },
      {
        id: "611101",
        city_id: "6111",
        name: "Sukadana",
      },
      {
        id: "611102",
        city_id: "6111",
        name: "Simpang Hilir",
      },
      {
        id: "611103",
        city_id: "6111",
        name: "Teluk Batang",
      },
      {
        id: "611104",
        city_id: "6111",
        name: "Pulau Maya",
      },
      {
        id: "611105",
        city_id: "6111",
        name: "Seponti",
      },
      {
        id: "611106",
        city_id: "6111",
        name: "Kepulauan Karimata",
      },
      {
        id: "611201",
        city_id: "6112",
        name: "Sungai Raya",
      },
      {
        id: "611202",
        city_id: "6112",
        name: "Kuala Mandor B",
      },
      {
        id: "611203",
        city_id: "6112",
        name: "Sungai Ambawang",
      },
      {
        id: "611204",
        city_id: "6112",
        name: "Terentang",
      },
      {
        id: "611205",
        city_id: "6112",
        name: "Batu Ampar",
      },
      {
        id: "611206",
        city_id: "6112",
        name: "Kubu",
      },
      {
        id: "611207",
        city_id: "6112",
        name: "Rasau Jaya",
      },
      {
        id: "611208",
        city_id: "6112",
        name: "Teluk Pakedai",
      },
      {
        id: "611209",
        city_id: "6112",
        name: "Sungai Kakap",
      },
      {
        id: "617101",
        city_id: "6171",
        name: "Pontianak Selatan",
      },
      {
        id: "617102",
        city_id: "6171",
        name: "Pontianak Timur",
      },
      {
        id: "617103",
        city_id: "6171",
        name: "Pontianak Barat",
      },
      {
        id: "617104",
        city_id: "6171",
        name: "Pontianak Utara",
      },
      {
        id: "617105",
        city_id: "6171",
        name: "Pontianak Kota",
      },
      {
        id: "617106",
        city_id: "6171",
        name: "Pontianak Tenggara",
      },
      {
        id: "617201",
        city_id: "6172",
        name: "Singkawang Tengah",
      },
      {
        id: "617202",
        city_id: "6172",
        name: "Singkawang Barat",
      },
      {
        id: "617203",
        city_id: "6172",
        name: "Singkawang Timur",
      },
      {
        id: "617204",
        city_id: "6172",
        name: "Singkawang Utara",
      },
      {
        id: "617205",
        city_id: "6172",
        name: "Singkawang Selatan",
      },
      {
        id: "620101",
        city_id: "6201",
        name: "Kumai",
      },
      {
        id: "620102",
        city_id: "6201",
        name: "Arut Selatan",
      },
      {
        id: "620103",
        city_id: "6201",
        name: "Kotawaringin Lama",
      },
      {
        id: "620104",
        city_id: "6201",
        name: "Arut Utara",
      },
      {
        id: "620105",
        city_id: "6201",
        name: "Pangkalan Lada",
      },
      {
        id: "620106",
        city_id: "6201",
        name: "Pangkalan Banteng",
      },
      {
        id: "620201",
        city_id: "6202",
        name: "Kota Besi",
      },
      {
        id: "620202",
        city_id: "6202",
        name: "Cempaga",
      },
      {
        id: "620203",
        city_id: "6202",
        name: "Mentaya Hulu",
      },
      {
        id: "620204",
        city_id: "6202",
        name: "Parenggean",
      },
      {
        id: "620205",
        city_id: "6202",
        name: "Baamang",
      },
      {
        id: "620206",
        city_id: "6202",
        name: "Mentawa Baru Ketapang",
      },
      {
        id: "620207",
        city_id: "6202",
        name: "Mentaya Hilir Utara",
      },
      {
        id: "620208",
        city_id: "6202",
        name: "Mentaya Hilir Selatan",
      },
      {
        id: "620209",
        city_id: "6202",
        name: "Pulau Hanaut",
      },
      {
        id: "620210",
        city_id: "6202",
        name: "Antang Kalang",
      },
      {
        id: "620211",
        city_id: "6202",
        name: "Teluk Sampit",
      },
      {
        id: "620212",
        city_id: "6202",
        name: "Seranau",
      },
      {
        id: "620213",
        city_id: "6202",
        name: "Cempaga Hulu",
      },
      {
        id: "620214",
        city_id: "6202",
        name: "Telawang",
      },
      {
        id: "620215",
        city_id: "6202",
        name: "Bukit Santuai",
      },
      {
        id: "620216",
        city_id: "6202",
        name: "Tualan Hulu",
      },
      {
        id: "620217",
        city_id: "6202",
        name: "Telaga Antang",
      },
      {
        id: "620301",
        city_id: "6203",
        name: "Selat",
      },
      {
        id: "620302",
        city_id: "6203",
        name: "Kapuas Hilir",
      },
      {
        id: "620303",
        city_id: "6203",
        name: "Kapuas Timur",
      },
      {
        id: "620304",
        city_id: "6203",
        name: "Kapuas Kuala",
      },
      {
        id: "620305",
        city_id: "6203",
        name: "Kapuas Barat",
      },
      {
        id: "620306",
        city_id: "6203",
        name: "Pulau Petak",
      },
      {
        id: "620307",
        city_id: "6203",
        name: "Kapuas Murung",
      },
      {
        id: "620308",
        city_id: "6203",
        name: "Basarang",
      },
      {
        id: "620309",
        city_id: "6203",
        name: "Mantangai",
      },
      {
        id: "620310",
        city_id: "6203",
        name: "Timpah",
      },
      {
        id: "620311",
        city_id: "6203",
        name: "Kapuas Tengah",
      },
      {
        id: "620312",
        city_id: "6203",
        name: "Kapuas Hulu",
      },
      {
        id: "620313",
        city_id: "6203",
        name: "Tamban Catur",
      },
      {
        id: "620314",
        city_id: "6203",
        name: "Pasak Talawang",
      },
      {
        id: "620315",
        city_id: "6203",
        name: "Mandau Talawang",
      },
      {
        id: "620316",
        city_id: "6203",
        name: "Dadahup",
      },
      {
        id: "620317",
        city_id: "6203",
        name: "Bataguh",
      },
      {
        id: "620401",
        city_id: "6204",
        name: "Jenamas",
      },
      {
        id: "620402",
        city_id: "6204",
        name: "Dusun Hilir",
      },
      {
        id: "620403",
        city_id: "6204",
        name: "Karau Kuala",
      },
      {
        id: "620404",
        city_id: "6204",
        name: "Dusun Utara",
      },
      {
        id: "620405",
        city_id: "6204",
        name: "Gn. Bintang Awai",
      },
      {
        id: "620406",
        city_id: "6204",
        name: "Dusun Selatan",
      },
      {
        id: "620501",
        city_id: "6205",
        name: "Montallat",
      },
      {
        id: "620502",
        city_id: "6205",
        name: "Gunung Timang",
      },
      {
        id: "620503",
        city_id: "6205",
        name: "Gunung Purei",
      },
      {
        id: "620504",
        city_id: "6205",
        name: "Teweh Timur",
      },
      {
        id: "620505",
        city_id: "6205",
        name: "Teweh Tengah",
      },
      {
        id: "620506",
        city_id: "6205",
        name: "Lahei",
      },
      {
        id: "620507",
        city_id: "6205",
        name: "Teweh Baru",
      },
      {
        id: "620508",
        city_id: "6205",
        name: "Teweh Selatan",
      },
      {
        id: "620509",
        city_id: "6205",
        name: "Lahei Barat",
      },
      {
        id: "620601",
        city_id: "6206",
        name: "Kamipang",
      },
      {
        id: "620602",
        city_id: "6206",
        name: "Katingan Hilir",
      },
      {
        id: "620603",
        city_id: "6206",
        name: "Tewang Sangalang Garing",
      },
      {
        id: "620604",
        city_id: "6206",
        name: "Pulau Malan",
      },
      {
        id: "620605",
        city_id: "6206",
        name: "Katingan Tengah",
      },
      {
        id: "620606",
        city_id: "6206",
        name: "Sanaman Mantikei",
      },
      {
        id: "620607",
        city_id: "6206",
        name: "Marikit",
      },
      {
        id: "620608",
        city_id: "6206",
        name: "Katingan Hulu",
      },
      {
        id: "620609",
        city_id: "6206",
        name: "Mendawai",
      },
      {
        id: "620610",
        city_id: "6206",
        name: "Katingan Kuala",
      },
      {
        id: "620611",
        city_id: "6206",
        name: "Tasik Payawan",
      },
      {
        id: "620612",
        city_id: "6206",
        name: "Petak Malai",
      },
      {
        id: "620613",
        city_id: "6206",
        name: "Bukit Raya",
      },
      {
        id: "620701",
        city_id: "6207",
        name: "Seruyan Hilir",
      },
      {
        id: "620702",
        city_id: "6207",
        name: "Seruyan Tengah",
      },
      {
        id: "620703",
        city_id: "6207",
        name: "Danau Sembuluh",
      },
      {
        id: "620704",
        city_id: "6207",
        name: "Hanau",
      },
      {
        id: "620705",
        city_id: "6207",
        name: "Seruyan Hulu",
      },
      {
        id: "620706",
        city_id: "6207",
        name: "Seruyan Hilir Timur",
      },
      {
        id: "620707",
        city_id: "6207",
        name: "Seruyan Raya",
      },
      {
        id: "620708",
        city_id: "6207",
        name: "Danau Seluluk",
      },
      {
        id: "620709",
        city_id: "6207",
        name: "Batu Ampar",
      },
      {
        id: "620710",
        city_id: "6207",
        name: "Suling Tambun",
      },
      {
        id: "620801",
        city_id: "6208",
        name: "Sukamara",
      },
      {
        id: "620802",
        city_id: "6208",
        name: "Jelai",
      },
      {
        id: "620803",
        city_id: "6208",
        name: "Balai Riam",
      },
      {
        id: "620804",
        city_id: "6208",
        name: "Pantai Lunci",
      },
      {
        id: "620805",
        city_id: "6208",
        name: "Permata Kecubung",
      },
      {
        id: "620901",
        city_id: "6209",
        name: "Lamandau",
      },
      {
        id: "620902",
        city_id: "6209",
        name: "Delang",
      },
      {
        id: "620903",
        city_id: "6209",
        name: "Bulik",
      },
      {
        id: "620904",
        city_id: "6209",
        name: "Bulik Timur",
      },
      {
        id: "620905",
        city_id: "6209",
        name: "Menthobi Raya",
      },
      {
        id: "620906",
        city_id: "6209",
        name: "Sematu Jaya",
      },
      {
        id: "620907",
        city_id: "6209",
        name: "Belantikan Raya",
      },
      {
        id: "620908",
        city_id: "6209",
        name: "Batang Kawa",
      },
      {
        id: "621001",
        city_id: "6210",
        name: "Sepang",
      },
      {
        id: "621002",
        city_id: "6210",
        name: "Kurun",
      },
      {
        id: "621003",
        city_id: "6210",
        name: "Tewah",
      },
      {
        id: "621004",
        city_id: "6210",
        name: "Kahayan Hulu Utara",
      },
      {
        id: "621005",
        city_id: "6210",
        name: "Rungan",
      },
      {
        id: "621006",
        city_id: "6210",
        name: "Manuhing",
      },
      {
        id: "621007",
        city_id: "6210",
        name: "Mihing Raya",
      },
      {
        id: "621008",
        city_id: "6210",
        name: "Damang Batu",
      },
      {
        id: "621009",
        city_id: "6210",
        name: "Miri Manasa",
      },
      {
        id: "621010",
        city_id: "6210",
        name: "Rungan Hulu",
      },
      {
        id: "621011",
        city_id: "6210",
        name: "Manuhing Raya",
      },
      {
        id: "621012",
        city_id: "6210",
        name: "Rungan Barat",
      },
      {
        id: "621101",
        city_id: "6211",
        name: "Pandih Batu",
      },
      {
        id: "621102",
        city_id: "6211",
        name: "Kahayan Kuala",
      },
      {
        id: "621103",
        city_id: "6211",
        name: "Kahayan Tengah",
      },
      {
        id: "621104",
        city_id: "6211",
        name: "Banama Tingang",
      },
      {
        id: "621105",
        city_id: "6211",
        name: "Kahayan Hilir",
      },
      {
        id: "621106",
        city_id: "6211",
        name: "Maliku",
      },
      {
        id: "621107",
        city_id: "6211",
        name: "Jabiren",
      },
      {
        id: "621108",
        city_id: "6211",
        name: "Sebangau Kuala",
      },
      {
        id: "621201",
        city_id: "6212",
        name: "Murung",
      },
      {
        id: "621202",
        city_id: "6212",
        name: "Tanah Siang",
      },
      {
        id: "621203",
        city_id: "6212",
        name: "Laung Tuhup",
      },
      {
        id: "621204",
        city_id: "6212",
        name: "Permata Intan",
      },
      {
        id: "621205",
        city_id: "6212",
        name: "Sumber Barito",
      },
      {
        id: "621206",
        city_id: "6212",
        name: "Barito Tuhup Raya",
      },
      {
        id: "621207",
        city_id: "6212",
        name: "Tanah Siang Selatan",
      },
      {
        id: "621208",
        city_id: "6212",
        name: "Sungai Babuat",
      },
      {
        id: "621209",
        city_id: "6212",
        name: "Seribu Riam",
      },
      {
        id: "621210",
        city_id: "6212",
        name: "Uut Murung",
      },
      {
        id: "621301",
        city_id: "6213",
        name: "Dusun Timur",
      },
      {
        id: "621302",
        city_id: "6213",
        name: "Banua Lima",
      },
      {
        id: "621303",
        city_id: "6213",
        name: "Patangkep Tutui",
      },
      {
        id: "621304",
        city_id: "6213",
        name: "Awang",
      },
      {
        id: "621305",
        city_id: "6213",
        name: "Dusun Tengah",
      },
      {
        id: "621306",
        city_id: "6213",
        name: "Pematang Karau",
      },
      {
        id: "621307",
        city_id: "6213",
        name: "Paju Epat",
      },
      {
        id: "621308",
        city_id: "6213",
        name: "Raren Batuah",
      },
      {
        id: "621309",
        city_id: "6213",
        name: "Paku",
      },
      {
        id: "621310",
        city_id: "6213",
        name: "Karusen Janang",
      },
      {
        id: "627101",
        city_id: "6271",
        name: "Pahandut",
      },
      {
        id: "627102",
        city_id: "6271",
        name: "Bukit Batu",
      },
      {
        id: "627103",
        city_id: "6271",
        name: "Jekan Raya",
      },
      {
        id: "627104",
        city_id: "6271",
        name: "Sabangau",
      },
      {
        id: "627105",
        city_id: "6271",
        name: "Rakumpit",
      },
      {
        id: "630101",
        city_id: "6301",
        name: "Takisung",
      },
      {
        id: "630102",
        city_id: "6301",
        name: "Jorong",
      },
      {
        id: "630103",
        city_id: "6301",
        name: "Pelaihari",
      },
      {
        id: "630104",
        city_id: "6301",
        name: "Kurau",
      },
      {
        id: "630105",
        city_id: "6301",
        name: "Bati Bati",
      },
      {
        id: "630106",
        city_id: "6301",
        name: "Panyipatan",
      },
      {
        id: "630107",
        city_id: "6301",
        name: "Kintap",
      },
      {
        id: "630108",
        city_id: "6301",
        name: "Tambang Ulang",
      },
      {
        id: "630109",
        city_id: "6301",
        name: "Batu Ampar",
      },
      {
        id: "630110",
        city_id: "6301",
        name: "Bajuin",
      },
      {
        id: "630111",
        city_id: "6301",
        name: "Bumi Makmur",
      },
      {
        id: "630201",
        city_id: "6302",
        name: "Pulau Sembilan",
      },
      {
        id: "630202",
        city_id: "6302",
        name: "Pulau Laut Barat",
      },
      {
        id: "630203",
        city_id: "6302",
        name: "Pulau Laut Selatan",
      },
      {
        id: "630204",
        city_id: "6302",
        name: "Pulau Laut Timur",
      },
      {
        id: "630205",
        city_id: "6302",
        name: "Pulau Sebuku",
      },
      {
        id: "630206",
        city_id: "6302",
        name: "Pulau Laut Utara",
      },
      {
        id: "630207",
        city_id: "6302",
        name: "Kelumpang Selatan",
      },
      {
        id: "630208",
        city_id: "6302",
        name: "Kelumpang Hulu",
      },
      {
        id: "630209",
        city_id: "6302",
        name: "Kelumpang Tengah",
      },
      {
        id: "630210",
        city_id: "6302",
        name: "Kelumpang Utara",
      },
      {
        id: "630211",
        city_id: "6302",
        name: "Pamukan Selatan",
      },
      {
        id: "630212",
        city_id: "6302",
        name: "Sampanahan",
      },
      {
        id: "630213",
        city_id: "6302",
        name: "Pamukan Utara",
      },
      {
        id: "630214",
        city_id: "6302",
        name: "Hampang",
      },
      {
        id: "630215",
        city_id: "6302",
        name: "Sungai Durian",
      },
      {
        id: "630216",
        city_id: "6302",
        name: "Pulau Laut Tengah",
      },
      {
        id: "630217",
        city_id: "6302",
        name: "Kelumpang Hilir",
      },
      {
        id: "630218",
        city_id: "6302",
        name: "Kelumpang Barat",
      },
      {
        id: "630219",
        city_id: "6302",
        name: "Pamukan Barat",
      },
      {
        id: "630220",
        city_id: "6302",
        name: "Pulau Laut Kepulauan",
      },
      {
        id: "630221",
        city_id: "6302",
        name: "Pulau Laut Tanjung Selayar",
      },
      {
        id: "630301",
        city_id: "6303",
        name: "Aluh Aluh",
      },
      {
        id: "630302",
        city_id: "6303",
        name: "Kertak Hanyar",
      },
      {
        id: "630303",
        city_id: "6303",
        name: "Gambut",
      },
      {
        id: "630304",
        city_id: "6303",
        name: "Sungai Tabuk",
      },
      {
        id: "630305",
        city_id: "6303",
        name: "Martapura",
      },
      {
        id: "630306",
        city_id: "6303",
        name: "Karang Intan",
      },
      {
        id: "630307",
        city_id: "6303",
        name: "Astambul",
      },
      {
        id: "630308",
        city_id: "6303",
        name: "Simpang Empat",
      },
      {
        id: "630309",
        city_id: "6303",
        name: "Pengarom",
      },
      {
        id: "630310",
        city_id: "6303",
        name: "Sungai Pinang",
      },
      {
        id: "630311",
        city_id: "6303",
        name: "Aranio",
      },
      {
        id: "630312",
        city_id: "6303",
        name: "Mataraman",
      },
      {
        id: "630313",
        city_id: "6303",
        name: "Beruntung Baru",
      },
      {
        id: "630314",
        city_id: "6303",
        name: "Martapura Barat",
      },
      {
        id: "630315",
        city_id: "6303",
        name: "Martapura Timur",
      },
      {
        id: "630316",
        city_id: "6303",
        name: "Sambung Makmur",
      },
      {
        id: "630317",
        city_id: "6303",
        name: "Paramasan",
      },
      {
        id: "630318",
        city_id: "6303",
        name: "Telaga Bauntung",
      },
      {
        id: "630319",
        city_id: "6303",
        name: "Tatah Makmur",
      },
      {
        id: "630320",
        city_id: "6303",
        name: "Cintapuri Darussalam",
      },
      {
        id: "630401",
        city_id: "6304",
        name: "Tabunganen",
      },
      {
        id: "630402",
        city_id: "6304",
        name: "Tamban",
      },
      {
        id: "630403",
        city_id: "6304",
        name: "Anjir Pasar",
      },
      {
        id: "630404",
        city_id: "6304",
        name: "Anjir Muara",
      },
      {
        id: "630405",
        city_id: "6304",
        name: "Alalak",
      },
      {
        id: "630406",
        city_id: "6304",
        name: "Mandastana",
      },
      {
        id: "630407",
        city_id: "6304",
        name: "Rantau Badauh",
      },
      {
        id: "630408",
        city_id: "6304",
        name: "Belawang",
      },
      {
        id: "630409",
        city_id: "6304",
        name: "Cerbon",
      },
      {
        id: "630410",
        city_id: "6304",
        name: "Bakumpai",
      },
      {
        id: "630411",
        city_id: "6304",
        name: "Kuripan",
      },
      {
        id: "630412",
        city_id: "6304",
        name: "Tabukan",
      },
      {
        id: "630413",
        city_id: "6304",
        name: "Mekarsari",
      },
      {
        id: "630414",
        city_id: "6304",
        name: "Barambai",
      },
      {
        id: "630415",
        city_id: "6304",
        name: "Marabahan",
      },
      {
        id: "630416",
        city_id: "6304",
        name: "Wanaraya",
      },
      {
        id: "630417",
        city_id: "6304",
        name: "Jejangkit",
      },
      {
        id: "630501",
        city_id: "6305",
        name: "Binuang",
      },
      {
        id: "630502",
        city_id: "6305",
        name: "Tapin Selatan",
      },
      {
        id: "630503",
        city_id: "6305",
        name: "Tapin Tengah",
      },
      {
        id: "630504",
        city_id: "6305",
        name: "Tapin Utara",
      },
      {
        id: "630505",
        city_id: "6305",
        name: "Candi Laras Selatan",
      },
      {
        id: "630506",
        city_id: "6305",
        name: "Candi Laras Utara",
      },
      {
        id: "630507",
        city_id: "6305",
        name: "Bakarangan",
      },
      {
        id: "630508",
        city_id: "6305",
        name: "Piani",
      },
      {
        id: "630509",
        city_id: "6305",
        name: "Bungur",
      },
      {
        id: "630510",
        city_id: "6305",
        name: "Lokpaikat",
      },
      {
        id: "630511",
        city_id: "6305",
        name: "Salam Babaris",
      },
      {
        id: "630512",
        city_id: "6305",
        name: "Hatungun",
      },
      {
        id: "630601",
        city_id: "6306",
        name: "Sungai Raya",
      },
      {
        id: "630602",
        city_id: "6306",
        name: "Padang Batung",
      },
      {
        id: "630603",
        city_id: "6306",
        name: "Telaga Langsat",
      },
      {
        id: "630604",
        city_id: "6306",
        name: "Angkinang",
      },
      {
        id: "630605",
        city_id: "6306",
        name: "Kandangan",
      },
      {
        id: "630606",
        city_id: "6306",
        name: "Simpur",
      },
      {
        id: "630607",
        city_id: "6306",
        name: "Daha Selatan",
      },
      {
        id: "630608",
        city_id: "6306",
        name: "Daha Utara",
      },
      {
        id: "630609",
        city_id: "6306",
        name: "Kalumpang",
      },
      {
        id: "630610",
        city_id: "6306",
        name: "Loksado",
      },
      {
        id: "630611",
        city_id: "6306",
        name: "Daha Barat",
      },
      {
        id: "630701",
        city_id: "6307",
        name: "Haruyan",
      },
      {
        id: "630702",
        city_id: "6307",
        name: "Batu Benawa",
      },
      {
        id: "630703",
        city_id: "6307",
        name: "Labuan Amas Selatan",
      },
      {
        id: "630704",
        city_id: "6307",
        name: "Labuan Amas Utara",
      },
      {
        id: "630705",
        city_id: "6307",
        name: "Pandawan",
      },
      {
        id: "630706",
        city_id: "6307",
        name: "Barabai",
      },
      {
        id: "630707",
        city_id: "6307",
        name: "Batang Alai Selatan",
      },
      {
        id: "630708",
        city_id: "6307",
        name: "Batang Alai Utara",
      },
      {
        id: "630709",
        city_id: "6307",
        name: "Hantakan",
      },
      {
        id: "630710",
        city_id: "6307",
        name: "Batang Alai Timur",
      },
      {
        id: "630711",
        city_id: "6307",
        name: "Limpasu",
      },
      {
        id: "630801",
        city_id: "6308",
        name: "Danau Panggang",
      },
      {
        id: "630802",
        city_id: "6308",
        name: "Babirik",
      },
      {
        id: "630803",
        city_id: "6308",
        name: "Sungai Pandan",
      },
      {
        id: "630804",
        city_id: "6308",
        name: "Amuntai Selatan",
      },
      {
        id: "630805",
        city_id: "6308",
        name: "Amuntai Tengah",
      },
      {
        id: "630806",
        city_id: "6308",
        name: "Amuntai Utara",
      },
      {
        id: "630807",
        city_id: "6308",
        name: "Banjang",
      },
      {
        id: "630808",
        city_id: "6308",
        name: "Haur Gading",
      },
      {
        id: "630809",
        city_id: "6308",
        name: "Paminggir",
      },
      {
        id: "630810",
        city_id: "6308",
        name: "Sungai Tabukan",
      },
      {
        id: "630901",
        city_id: "6309",
        name: "Banua Lawas",
      },
      {
        id: "630902",
        city_id: "6309",
        name: "Kelua",
      },
      {
        id: "630903",
        city_id: "6309",
        name: "Tanta",
      },
      {
        id: "630904",
        city_id: "6309",
        name: "Tanjung",
      },
      {
        id: "630905",
        city_id: "6309",
        name: "Haruai",
      },
      {
        id: "630906",
        city_id: "6309",
        name: "Murung Pudak",
      },
      {
        id: "630907",
        city_id: "6309",
        name: "Muara Uya",
      },
      {
        id: "630908",
        city_id: "6309",
        name: "Muara Harus",
      },
      {
        id: "630909",
        city_id: "6309",
        name: "Pugaan",
      },
      {
        id: "630910",
        city_id: "6309",
        name: "Upau",
      },
      {
        id: "630911",
        city_id: "6309",
        name: "Jaro",
      },
      {
        id: "630912",
        city_id: "6309",
        name: "Bintang Ara",
      },
      {
        id: "631001",
        city_id: "6310",
        name: "Batu Licin",
      },
      {
        id: "631002",
        city_id: "6310",
        name: "Kusan Hilir",
      },
      {
        id: "631003",
        city_id: "6310",
        name: "Sungai Loban",
      },
      {
        id: "631004",
        city_id: "6310",
        name: "Satui",
      },
      {
        id: "631005",
        city_id: "6310",
        name: "Kusan Hulu",
      },
      {
        id: "631006",
        city_id: "6310",
        name: "Simpang Empat",
      },
      {
        id: "631007",
        city_id: "6310",
        name: "Karang Bintang",
      },
      {
        id: "631008",
        city_id: "6310",
        name: "Mantewe",
      },
      {
        id: "631009",
        city_id: "6310",
        name: "Angsana",
      },
      {
        id: "631010",
        city_id: "6310",
        name: "Kuranji",
      },
      {
        id: "631101",
        city_id: "6311",
        name: "Juai",
      },
      {
        id: "631102",
        city_id: "6311",
        name: "Halong",
      },
      {
        id: "631103",
        city_id: "6311",
        name: "Awayan",
      },
      {
        id: "631104",
        city_id: "6311",
        name: "Batu Mandi",
      },
      {
        id: "631105",
        city_id: "6311",
        name: "Lampihong",
      },
      {
        id: "631106",
        city_id: "6311",
        name: "Paringin",
      },
      {
        id: "631107",
        city_id: "6311",
        name: "Paringin Selatan",
      },
      {
        id: "631108",
        city_id: "6311",
        name: "Tebing Tinggi",
      },
      {
        id: "637101",
        city_id: "6371",
        name: "Banjarmasin Selatan",
      },
      {
        id: "637102",
        city_id: "6371",
        name: "Banjarmasin Timur",
      },
      {
        id: "637103",
        city_id: "6371",
        name: "Banjarmasin Barat",
      },
      {
        id: "637104",
        city_id: "6371",
        name: "Banjarmasin Utara",
      },
      {
        id: "637105",
        city_id: "6371",
        name: "Banjarmasin Tengah",
      },
      {
        id: "637202",
        city_id: "6372",
        name: "Landasan Ulin",
      },
      {
        id: "637203",
        city_id: "6372",
        name: "Cempaka",
      },
      {
        id: "637204",
        city_id: "6372",
        name: "Banjarbaru Utara",
      },
      {
        id: "637205",
        city_id: "6372",
        name: "Banjarbaru Selatan",
      },
      {
        id: "637206",
        city_id: "6372",
        name: "Liang Anggang",
      },
      {
        id: "640101",
        city_id: "6401",
        name: "Batu Sopang",
      },
      {
        id: "640102",
        city_id: "6401",
        name: "Tanjung Harapan",
      },
      {
        id: "640103",
        city_id: "6401",
        name: "Paser Belengkong",
      },
      {
        id: "640104",
        city_id: "6401",
        name: "Tanah Grogot",
      },
      {
        id: "640105",
        city_id: "6401",
        name: "Kuaro",
      },
      {
        id: "640106",
        city_id: "6401",
        name: "Long Ikis",
      },
      {
        id: "640107",
        city_id: "6401",
        name: "Muara Komam",
      },
      {
        id: "640108",
        city_id: "6401",
        name: "Long Kali",
      },
      {
        id: "640109",
        city_id: "6401",
        name: "Batu Engau",
      },
      {
        id: "640110",
        city_id: "6401",
        name: "Muara Samu",
      },
      {
        id: "640201",
        city_id: "6402",
        name: "Muara Muntai",
      },
      {
        id: "640202",
        city_id: "6402",
        name: "Loa Kulu",
      },
      {
        id: "640203",
        city_id: "6402",
        name: "Loa Janan",
      },
      {
        id: "640204",
        city_id: "6402",
        name: "Anggana",
      },
      {
        id: "640205",
        city_id: "6402",
        name: "Muara Badak",
      },
      {
        id: "640206",
        city_id: "6402",
        name: "Tenggarong",
      },
      {
        id: "640207",
        city_id: "6402",
        name: "Sebulu",
      },
      {
        id: "640208",
        city_id: "6402",
        name: "Kota Bangun",
      },
      {
        id: "640209",
        city_id: "6402",
        name: "Kenohan",
      },
      {
        id: "640210",
        city_id: "6402",
        name: "Kembang Janggut",
      },
      {
        id: "640211",
        city_id: "6402",
        name: "Muara Kaman",
      },
      {
        id: "640212",
        city_id: "6402",
        name: "Tabang",
      },
      {
        id: "640213",
        city_id: "6402",
        name: "Samboja",
      },
      {
        id: "640214",
        city_id: "6402",
        name: "Muara Jawa",
      },
      {
        id: "640215",
        city_id: "6402",
        name: "Sanga Sanga",
      },
      {
        id: "640216",
        city_id: "6402",
        name: "Tenggarong Seberang",
      },
      {
        id: "640217",
        city_id: "6402",
        name: "Marang Kayu",
      },
      {
        id: "640218",
        city_id: "6402",
        name: "Muara Wis",
      },
      {
        id: "640301",
        city_id: "6403",
        name: "Kelay",
      },
      {
        id: "640302",
        city_id: "6403",
        name: "Talisayan",
      },
      {
        id: "640303",
        city_id: "6403",
        name: "Sambaliung",
      },
      {
        id: "640304",
        city_id: "6403",
        name: "Segah",
      },
      {
        id: "640305",
        city_id: "6403",
        name: "Tanjung Redeb",
      },
      {
        id: "640306",
        city_id: "6403",
        name: "Gunung Tabur",
      },
      {
        id: "640307",
        city_id: "6403",
        name: "Pulau Derawan",
      },
      {
        id: "640308",
        city_id: "6403",
        name: "Biduk-Biduk",
      },
      {
        id: "640309",
        city_id: "6403",
        name: "Teluk Bayur",
      },
      {
        id: "640310",
        city_id: "6403",
        name: "Tabalar",
      },
      {
        id: "640311",
        city_id: "6403",
        name: "Maratua",
      },
      {
        id: "640312",
        city_id: "6403",
        name: "Batu Putih",
      },
      {
        id: "640313",
        city_id: "6403",
        name: "Biatan",
      },
      {
        id: "640705",
        city_id: "6407",
        name: "Long Iram",
      },
      {
        id: "640706",
        city_id: "6407",
        name: "Melak",
      },
      {
        id: "640707",
        city_id: "6407",
        name: "Barong Tongkok",
      },
      {
        id: "640708",
        city_id: "6407",
        name: "Damai",
      },
      {
        id: "640709",
        city_id: "6407",
        name: "Muara Lawa",
      },
      {
        id: "640710",
        city_id: "6407",
        name: "Muara Pahu",
      },
      {
        id: "640711",
        city_id: "6407",
        name: "Jempang",
      },
      {
        id: "640712",
        city_id: "6407",
        name: "Bongan",
      },
      {
        id: "640713",
        city_id: "6407",
        name: "Penyinggahan",
      },
      {
        id: "640714",
        city_id: "6407",
        name: "Bentian Besar",
      },
      {
        id: "640715",
        city_id: "6407",
        name: "Linggang Bigung",
      },
      {
        id: "640716",
        city_id: "6407",
        name: "Nyuatan",
      },
      {
        id: "640717",
        city_id: "6407",
        name: "Siluq Ngurai",
      },
      {
        id: "640718",
        city_id: "6407",
        name: "Mook Manaar Bulatn",
      },
      {
        id: "640719",
        city_id: "6407",
        name: "Tering",
      },
      {
        id: "640720",
        city_id: "6407",
        name: "Sekolaq Darat",
      },
      {
        id: "640801",
        city_id: "6408",
        name: "Muara Ancalong",
      },
      {
        id: "640802",
        city_id: "6408",
        name: "Muara Wahau",
      },
      {
        id: "640803",
        city_id: "6408",
        name: "Muara Bengkal",
      },
      {
        id: "640804",
        city_id: "6408",
        name: "Sangatta Utara",
      },
      {
        id: "640805",
        city_id: "6408",
        name: "Sangkulirang",
      },
      {
        id: "640806",
        city_id: "6408",
        name: "Busang",
      },
      {
        id: "640807",
        city_id: "6408",
        name: "Telen",
      },
      {
        id: "640808",
        city_id: "6408",
        name: "Kombeng",
      },
      {
        id: "640809",
        city_id: "6408",
        name: "Bengalon",
      },
      {
        id: "640810",
        city_id: "6408",
        name: "Kaliorang",
      },
      {
        id: "640811",
        city_id: "6408",
        name: "Sandaran",
      },
      {
        id: "640812",
        city_id: "6408",
        name: "Sangatta Selatan",
      },
      {
        id: "640813",
        city_id: "6408",
        name: "Teluk Pandan",
      },
      {
        id: "640814",
        city_id: "6408",
        name: "Rantau Pulung",
      },
      {
        id: "640815",
        city_id: "6408",
        name: "Kaubun",
      },
      {
        id: "640816",
        city_id: "6408",
        name: "Karangan",
      },
      {
        id: "640817",
        city_id: "6408",
        name: "Batu Ampar",
      },
      {
        id: "640818",
        city_id: "6408",
        name: "Long Mesangat",
      },
      {
        id: "640901",
        city_id: "6409",
        name: "Penajam",
      },
      {
        id: "640902",
        city_id: "6409",
        name: "Waru",
      },
      {
        id: "640903",
        city_id: "6409",
        name: "Babulu",
      },
      {
        id: "640904",
        city_id: "6409",
        name: "Sepaku",
      },
      {
        id: "641101",
        city_id: "6411",
        name: "Long Bagun",
      },
      {
        id: "641102",
        city_id: "6411",
        name: "Long Hubung",
      },
      {
        id: "641103",
        city_id: "6411",
        name: "Laham",
      },
      {
        id: "641104",
        city_id: "6411",
        name: "Long Apari",
      },
      {
        id: "641105",
        city_id: "6411",
        name: "Long Pahangai",
      },
      {
        id: "647101",
        city_id: "6471",
        name: "Balikpapan Timur",
      },
      {
        id: "647102",
        city_id: "6471",
        name: "Balikpapan Barat",
      },
      {
        id: "647103",
        city_id: "6471",
        name: "Balikpapan Utara",
      },
      {
        id: "647104",
        city_id: "6471",
        name: "Balikpapan Tengah",
      },
      {
        id: "647105",
        city_id: "6471",
        name: "Balikpapan Selatan",
      },
      {
        id: "647106",
        city_id: "6471",
        name: "Balikpapan Kota",
      },
      {
        id: "647201",
        city_id: "6472",
        name: "Palaran",
      },
      {
        id: "647202",
        city_id: "6472",
        name: "Samarinda Seberang",
      },
      {
        id: "647203",
        city_id: "6472",
        name: "Samarinda Ulu",
      },
      {
        id: "647204",
        city_id: "6472",
        name: "Samarinda Ilir",
      },
      {
        id: "647205",
        city_id: "6472",
        name: "Samarinda Utara",
      },
      {
        id: "647206",
        city_id: "6472",
        name: "Sungai Kunjang",
      },
      {
        id: "647207",
        city_id: "6472",
        name: "Sambutan",
      },
      {
        id: "647208",
        city_id: "6472",
        name: "Sungai Pinang",
      },
      {
        id: "647209",
        city_id: "6472",
        name: "Samarinda Kota",
      },
      {
        id: "647210",
        city_id: "6472",
        name: "Loa Janan Ilir",
      },
      {
        id: "647401",
        city_id: "6474",
        name: "Bontang Utara",
      },
      {
        id: "647402",
        city_id: "6474",
        name: "Bontang Selatan",
      },
      {
        id: "647403",
        city_id: "6474",
        name: "Bontang Barat",
      },
      {
        id: "650101",
        city_id: "6501",
        name: "Tanjung Palas",
      },
      {
        id: "650102",
        city_id: "6501",
        name: "Tanjung Palas Barat",
      },
      {
        id: "650103",
        city_id: "6501",
        name: "Tanjung Palas Utara",
      },
      {
        id: "650104",
        city_id: "6501",
        name: "Tanjung Palas Timur",
      },
      {
        id: "650105",
        city_id: "6501",
        name: "Tanjung Selor",
      },
      {
        id: "650106",
        city_id: "6501",
        name: "Tanjung Palas Tengah",
      },
      {
        id: "650107",
        city_id: "6501",
        name: "Peso",
      },
      {
        id: "650108",
        city_id: "6501",
        name: "Peso Hilir",
      },
      {
        id: "650109",
        city_id: "6501",
        name: "Sekatak",
      },
      {
        id: "650110",
        city_id: "6501",
        name: "Bunyu",
      },
      {
        id: "650201",
        city_id: "6502",
        name: "Mentarang",
      },
      {
        id: "650202",
        city_id: "6502",
        name: "Malinau Kota",
      },
      {
        id: "650203",
        city_id: "6502",
        name: "Pujungan",
      },
      {
        id: "650204",
        city_id: "6502",
        name: "Kayan Hilir",
      },
      {
        id: "650205",
        city_id: "6502",
        name: "Kayan Hulu",
      },
      {
        id: "650206",
        city_id: "6502",
        name: "Malinau Selatan",
      },
      {
        id: "650207",
        city_id: "6502",
        name: "Malinau Utara",
      },
      {
        id: "650208",
        city_id: "6502",
        name: "Malinau Barat",
      },
      {
        id: "650209",
        city_id: "6502",
        name: "Sungai Boh",
      },
      {
        id: "650210",
        city_id: "6502",
        name: "Kayan Selatan",
      },
      {
        id: "650211",
        city_id: "6502",
        name: "Bahau Hulu",
      },
      {
        id: "650212",
        city_id: "6502",
        name: "Mentarang Hulu",
      },
      {
        id: "650213",
        city_id: "6502",
        name: "Malinau Selatan Hilir",
      },
      {
        id: "650214",
        city_id: "6502",
        name: "Malinau Selatan Hulu",
      },
      {
        id: "650215",
        city_id: "6502",
        name: "Sungai Tubu",
      },
      {
        id: "650301",
        city_id: "6503",
        name: "Sebatik",
      },
      {
        id: "650302",
        city_id: "6503",
        name: "Nunukan",
      },
      {
        id: "650303",
        city_id: "6503",
        name: "Sembakung",
      },
      {
        id: "650304",
        city_id: "6503",
        name: "Lumbis",
      },
      {
        id: "650305",
        city_id: "6503",
        name: "Krayan",
      },
      {
        id: "650306",
        city_id: "6503",
        name: "Sebuku",
      },
      {
        id: "650307",
        city_id: "6503",
        name: "Krayan Selatan",
      },
      {
        id: "650308",
        city_id: "6503",
        name: "Sebatik Barat",
      },
      {
        id: "650309",
        city_id: "6503",
        name: "Nunukan Selatan",
      },
      {
        id: "650310",
        city_id: "6503",
        name: "Sebatik Timur",
      },
      {
        id: "650311",
        city_id: "6503",
        name: "Sebatik Utara",
      },
      {
        id: "650312",
        city_id: "6503",
        name: "Sebatik Tengah",
      },
      {
        id: "650313",
        city_id: "6503",
        name: "Sei Menggaris",
      },
      {
        id: "650314",
        city_id: "6503",
        name: "Tulin Onsoi",
      },
      {
        id: "650315",
        city_id: "6503",
        name: "Lumbis Ogong",
      },
      {
        id: "650316",
        city_id: "6503",
        name: "Sembakung Atulai",
      },
      {
        id: "650317",
        city_id: "6503",
        name: "Krayan Tengah",
      },
      {
        id: "650318",
        city_id: "6503",
        name: "Krayan Timur",
      },
      {
        id: "650319",
        city_id: "6503",
        name: "Krayan Barat",
      },
      {
        id: "650401",
        city_id: "6504",
        name: "Sesayap",
      },
      {
        id: "650402",
        city_id: "6504",
        name: "Sesayap Hilir",
      },
      {
        id: "650403",
        city_id: "6504",
        name: "Tana Lia",
      },
      {
        id: "650404",
        city_id: "6504",
        name: "Betayau",
      },
      {
        id: "650405",
        city_id: "6504",
        name: "Muruk Rian",
      },
      {
        id: "657101",
        city_id: "6571",
        name: "Tarakan Barat",
      },
      {
        id: "657102",
        city_id: "6571",
        name: "Tarakan Tengah",
      },
      {
        id: "657103",
        city_id: "6571",
        name: "Tarakan Timur",
      },
      {
        id: "657104",
        city_id: "6571",
        name: "Tarakan Utara",
      },
      {
        id: "710105",
        city_id: "7101",
        name: "Sang Tombolang",
      },
      {
        id: "710109",
        city_id: "7101",
        name: "Dumoga Barat",
      },
      {
        id: "710110",
        city_id: "7101",
        name: "Dumoga Timur",
      },
      {
        id: "710111",
        city_id: "7101",
        name: "Dumoga Utara",
      },
      {
        id: "710112",
        city_id: "7101",
        name: "Lolak",
      },
      {
        id: "710113",
        city_id: "7101",
        name: "Bolaang",
      },
      {
        id: "710114",
        city_id: "7101",
        name: "Lolayan",
      },
      {
        id: "710119",
        city_id: "7101",
        name: "Passi Barat",
      },
      {
        id: "710120",
        city_id: "7101",
        name: "Poigar",
      },
      {
        id: "710122",
        city_id: "7101",
        name: "Passi Timur",
      },
      {
        id: "710131",
        city_id: "7101",
        name: "Bolaang Timur",
      },
      {
        id: "710132",
        city_id: "7101",
        name: "Bilalang",
      },
      {
        id: "710133",
        city_id: "7101",
        name: "Dumoga",
      },
      {
        id: "710134",
        city_id: "7101",
        name: "Dumoga Tenggara",
      },
      {
        id: "710135",
        city_id: "7101",
        name: "Dumoga Tengah",
      },
      {
        id: "710201",
        city_id: "7102",
        name: "Tondano Barat",
      },
      {
        id: "710202",
        city_id: "7102",
        name: "Tondano Timur",
      },
      {
        id: "710203",
        city_id: "7102",
        name: "Eris",
      },
      {
        id: "710204",
        city_id: "7102",
        name: "Kombi",
      },
      {
        id: "710205",
        city_id: "7102",
        name: "Lembean Timur",
      },
      {
        id: "710206",
        city_id: "7102",
        name: "Kakas",
      },
      {
        id: "710207",
        city_id: "7102",
        name: "Tompaso",
      },
      {
        id: "710208",
        city_id: "7102",
        name: "Remboken",
      },
      {
        id: "710209",
        city_id: "7102",
        name: "Langowan Timur",
      },
      {
        id: "710210",
        city_id: "7102",
        name: "Langowan Barat",
      },
      {
        id: "710211",
        city_id: "7102",
        name: "Sonder",
      },
      {
        id: "710212",
        city_id: "7102",
        name: "Kawangkoan",
      },
      {
        id: "710213",
        city_id: "7102",
        name: "Pineleng",
      },
      {
        id: "710214",
        city_id: "7102",
        name: "Tombulu",
      },
      {
        id: "710215",
        city_id: "7102",
        name: "Tombariri",
      },
      {
        id: "710216",
        city_id: "7102",
        name: "Tondano Utara",
      },
      {
        id: "710217",
        city_id: "7102",
        name: "Langowan Selatan",
      },
      {
        id: "710218",
        city_id: "7102",
        name: "Tondano Selatan",
      },
      {
        id: "710219",
        city_id: "7102",
        name: "Langowan Utara",
      },
      {
        id: "710220",
        city_id: "7102",
        name: "Kakas Barat",
      },
      {
        id: "710221",
        city_id: "7102",
        name: "Kawangkoan Utara",
      },
      {
        id: "710222",
        city_id: "7102",
        name: "Kawangkoan Barat",
      },
      {
        id: "710223",
        city_id: "7102",
        name: "Mandolang",
      },
      {
        id: "710224",
        city_id: "7102",
        name: "Tombariri Timur",
      },
      {
        id: "710225",
        city_id: "7102",
        name: "Tompaso Barat",
      },
      {
        id: "710308",
        city_id: "7103",
        name: "Tabukan Utara",
      },
      {
        id: "710309",
        city_id: "7103",
        name: "Nusa Tabukan",
      },
      {
        id: "710310",
        city_id: "7103",
        name: "Manganitu Selatan",
      },
      {
        id: "710311",
        city_id: "7103",
        name: "Tatoareng",
      },
      {
        id: "710312",
        city_id: "7103",
        name: "Tamako",
      },
      {
        id: "710313",
        city_id: "7103",
        name: "Manganitu",
      },
      {
        id: "710314",
        city_id: "7103",
        name: "Tabukan Tengah",
      },
      {
        id: "710315",
        city_id: "7103",
        name: "Tabukan Selatan",
      },
      {
        id: "710316",
        city_id: "7103",
        name: "Kendahe",
      },
      {
        id: "710317",
        city_id: "7103",
        name: "Tahuna",
      },
      {
        id: "710319",
        city_id: "7103",
        name: "Tabukan Selatan Tengah",
      },
      {
        id: "710320",
        city_id: "7103",
        name: "Tabukan Selatan Tenggara",
      },
      {
        id: "710323",
        city_id: "7103",
        name: "Tahuna Barat",
      },
      {
        id: "710324",
        city_id: "7103",
        name: "Tahuna Timur",
      },
      {
        id: "710325",
        city_id: "7103",
        name: "Kepulauan Marore",
      },
      {
        id: "710401",
        city_id: "7104",
        name: "Lirung",
      },
      {
        id: "710402",
        city_id: "7104",
        name: "Beo",
      },
      {
        id: "710403",
        city_id: "7104",
        name: "Rainis",
      },
      {
        id: "710404",
        city_id: "7104",
        name: "Essang",
      },
      {
        id: "710405",
        city_id: "7104",
        name: "Nanusa",
      },
      {
        id: "710406",
        city_id: "7104",
        name: "Kabaruan",
      },
      {
        id: "710407",
        city_id: "7104",
        name: "Melonguane",
      },
      {
        id: "710408",
        city_id: "7104",
        name: "Gemeh",
      },
      {
        id: "710409",
        city_id: "7104",
        name: "Damau",
      },
      {
        id: "710410",
        city_id: "7104",
        name: "Tampan' Amma",
      },
      {
        id: "710411",
        city_id: "7104",
        name: "Salibabu",
      },
      {
        id: "710412",
        city_id: "7104",
        name: "Kalongan",
      },
      {
        id: "710413",
        city_id: "7104",
        name: "Miangas",
      },
      {
        id: "710414",
        city_id: "7104",
        name: "Beo Utara",
      },
      {
        id: "710415",
        city_id: "7104",
        name: "Pulutan",
      },
      {
        id: "710416",
        city_id: "7104",
        name: "Melonguane Timur",
      },
      {
        id: "710417",
        city_id: "7104",
        name: "Moronge",
      },
      {
        id: "710418",
        city_id: "7104",
        name: "Beo Selatan",
      },
      {
        id: "710419",
        city_id: "7104",
        name: "Essang Selatan",
      },
      {
        id: "710501",
        city_id: "7105",
        name: "Modoinding",
      },
      {
        id: "710502",
        city_id: "7105",
        name: "Tompaso Baru",
      },
      {
        id: "710503",
        city_id: "7105",
        name: "Ranoyapo",
      },
      {
        id: "710507",
        city_id: "7105",
        name: "Motoling",
      },
      {
        id: "710508",
        city_id: "7105",
        name: "Sinonsayang",
      },
      {
        id: "710509",
        city_id: "7105",
        name: "Tenga",
      },
      {
        id: "710510",
        city_id: "7105",
        name: "Amurang",
      },
      {
        id: "710512",
        city_id: "7105",
        name: "Tumpaan",
      },
      {
        id: "710513",
        city_id: "7105",
        name: "Tareran",
      },
      {
        id: "710515",
        city_id: "7105",
        name: "Kumelembuai",
      },
      {
        id: "710516",
        city_id: "7105",
        name: "Maesaan",
      },
      {
        id: "710517",
        city_id: "7105",
        name: "Amurang Barat",
      },
      {
        id: "710518",
        city_id: "7105",
        name: "Amurang Timur",
      },
      {
        id: "710519",
        city_id: "7105",
        name: "Tatapaan",
      },
      {
        id: "710521",
        city_id: "7105",
        name: "Motoling Barat",
      },
      {
        id: "710522",
        city_id: "7105",
        name: "Motoling Timur",
      },
      {
        id: "710523",
        city_id: "7105",
        name: "Suluun Tareran",
      },
      {
        id: "710601",
        city_id: "7106",
        name: "Kema",
      },
      {
        id: "710602",
        city_id: "7106",
        name: "Kauditan",
      },
      {
        id: "710603",
        city_id: "7106",
        name: "Airmadidi",
      },
      {
        id: "710604",
        city_id: "7106",
        name: "Wori",
      },
      {
        id: "710605",
        city_id: "7106",
        name: "Dimembe",
      },
      {
        id: "710606",
        city_id: "7106",
        name: "Likupang Barat",
      },
      {
        id: "710607",
        city_id: "7106",
        name: "Likupang Timur",
      },
      {
        id: "710608",
        city_id: "7106",
        name: "Kalawat",
      },
      {
        id: "710609",
        city_id: "7106",
        name: "Talawaan",
      },
      {
        id: "710610",
        city_id: "7106",
        name: "Likupang Selatan",
      },
      {
        id: "710701",
        city_id: "7107",
        name: "Ratahan",
      },
      {
        id: "710702",
        city_id: "7107",
        name: "Pusomaen",
      },
      {
        id: "710703",
        city_id: "7107",
        name: "Belang",
      },
      {
        id: "710704",
        city_id: "7107",
        name: "Ratatotok",
      },
      {
        id: "710705",
        city_id: "7107",
        name: "Tombatu",
      },
      {
        id: "710706",
        city_id: "7107",
        name: "Touluaan",
      },
      {
        id: "710707",
        city_id: "7107",
        name: "Touluaan Selatan",
      },
      {
        id: "710708",
        city_id: "7107",
        name: "Silian Raya",
      },
      {
        id: "710709",
        city_id: "7107",
        name: "Tombatu Timur",
      },
      {
        id: "710710",
        city_id: "7107",
        name: "Tombatu Utara",
      },
      {
        id: "710711",
        city_id: "7107",
        name: "Pasan",
      },
      {
        id: "710712",
        city_id: "7107",
        name: "Ratahan Timur",
      },
      {
        id: "710801",
        city_id: "7108",
        name: "Sangkub",
      },
      {
        id: "710802",
        city_id: "7108",
        name: "Bintauna",
      },
      {
        id: "710803",
        city_id: "7108",
        name: "Bolangitang Timur",
      },
      {
        id: "710804",
        city_id: "7108",
        name: "Bolangitang Barat",
      },
      {
        id: "710805",
        city_id: "7108",
        name: "Kaidipang",
      },
      {
        id: "710806",
        city_id: "7108",
        name: "Pinogaluman",
      },
      {
        id: "710901",
        city_id: "7109",
        name: "Siau Timur",
      },
      {
        id: "710902",
        city_id: "7109",
        name: "Siau Barat",
      },
      {
        id: "710903",
        city_id: "7109",
        name: "Tagulandang",
      },
      {
        id: "710904",
        city_id: "7109",
        name: "Siau Timur Selatan",
      },
      {
        id: "710905",
        city_id: "7109",
        name: "Siau Barat Selatan",
      },
      {
        id: "710906",
        city_id: "7109",
        name: "Tagulandang Utara",
      },
      {
        id: "710907",
        city_id: "7109",
        name: "Biaro",
      },
      {
        id: "710908",
        city_id: "7109",
        name: "Siau Barat Utara",
      },
      {
        id: "710909",
        city_id: "7109",
        name: "Siau Tengah",
      },
      {
        id: "710910",
        city_id: "7109",
        name: "Tagulandang Selatan",
      },
      {
        id: "711001",
        city_id: "7110",
        name: "Tutuyan",
      },
      {
        id: "711002",
        city_id: "7110",
        name: "Kotabunan",
      },
      {
        id: "711003",
        city_id: "7110",
        name: "Nuangan",
      },
      {
        id: "711004",
        city_id: "7110",
        name: "Modayag",
      },
      {
        id: "711005",
        city_id: "7110",
        name: "Modayag Barat",
      },
      {
        id: "711006",
        city_id: "7110",
        name: "Motongkad",
      },
      {
        id: "711007",
        city_id: "7110",
        name: "Mooat",
      },
      {
        id: "711101",
        city_id: "7111",
        name: "Bolaang Uki",
      },
      {
        id: "711102",
        city_id: "7111",
        name: "Posigadan",
      },
      {
        id: "711103",
        city_id: "7111",
        name: "Pinolosian",
      },
      {
        id: "711104",
        city_id: "7111",
        name: "Pinolosian Tengah",
      },
      {
        id: "711105",
        city_id: "7111",
        name: "Pinolosian Timur",
      },
      {
        id: "711106",
        city_id: "7111",
        name: "Helumo",
      },
      {
        id: "711107",
        city_id: "7111",
        name: "Tomini",
      },
      {
        id: "717101",
        city_id: "7171",
        name: "Bunaken",
      },
      {
        id: "717102",
        city_id: "7171",
        name: "Tuminiting",
      },
      {
        id: "717103",
        city_id: "7171",
        name: "Singkil",
      },
      {
        id: "717104",
        city_id: "7171",
        name: "Wenang",
      },
      {
        id: "717105",
        city_id: "7171",
        name: "Tikala",
      },
      {
        id: "717106",
        city_id: "7171",
        name: "Sario",
      },
      {
        id: "717107",
        city_id: "7171",
        name: "Wanea",
      },
      {
        id: "717108",
        city_id: "7171",
        name: "Mapanget",
      },
      {
        id: "717109",
        city_id: "7171",
        name: "Malalayang",
      },
      {
        id: "717110",
        city_id: "7171",
        name: "Bunaken Kepulauan",
      },
      {
        id: "717111",
        city_id: "7171",
        name: "Paal Dua",
      },
      {
        id: "717201",
        city_id: "7172",
        name: "Lembeh Selatan",
      },
      {
        id: "717202",
        city_id: "7172",
        name: "Madidir",
      },
      {
        id: "717203",
        city_id: "7172",
        name: "Ranowulu",
      },
      {
        id: "717204",
        city_id: "7172",
        name: "Aertembaga",
      },
      {
        id: "717205",
        city_id: "7172",
        name: "Matuari",
      },
      {
        id: "717206",
        city_id: "7172",
        name: "Girian",
      },
      {
        id: "717207",
        city_id: "7172",
        name: "Maesa",
      },
      {
        id: "717208",
        city_id: "7172",
        name: "Lembeh Utara",
      },
      {
        id: "717301",
        city_id: "7173",
        name: "Tomohon Selatan",
      },
      {
        id: "717302",
        city_id: "7173",
        name: "Tomohon Tengah",
      },
      {
        id: "717303",
        city_id: "7173",
        name: "Tomohon Utara",
      },
      {
        id: "717304",
        city_id: "7173",
        name: "Tomohon Barat",
      },
      {
        id: "717305",
        city_id: "7173",
        name: "Tomohon Timur",
      },
      {
        id: "717401",
        city_id: "7174",
        name: "Kotamobagu Utara",
      },
      {
        id: "717402",
        city_id: "7174",
        name: "Kotamobagu Timur",
      },
      {
        id: "717403",
        city_id: "7174",
        name: "Kotamobagu Selatan",
      },
      {
        id: "717404",
        city_id: "7174",
        name: "Kotamobagu Barat",
      },
      {
        id: "720101",
        city_id: "7201",
        name: "Batui",
      },
      {
        id: "720102",
        city_id: "7201",
        name: "Bunta",
      },
      {
        id: "720103",
        city_id: "7201",
        name: "Kintom",
      },
      {
        id: "720104",
        city_id: "7201",
        name: "Luwuk",
      },
      {
        id: "720105",
        city_id: "7201",
        name: "Lamala",
      },
      {
        id: "720106",
        city_id: "7201",
        name: "Balantak",
      },
      {
        id: "720107",
        city_id: "7201",
        name: "Pagimana",
      },
      {
        id: "720108",
        city_id: "7201",
        name: "Bualemo",
      },
      {
        id: "720109",
        city_id: "7201",
        name: "Toili",
      },
      {
        id: "720110",
        city_id: "7201",
        name: "Masama",
      },
      {
        id: "720111",
        city_id: "7201",
        name: "Luwuk Timur",
      },
      {
        id: "720112",
        city_id: "7201",
        name: "Toili Barat",
      },
      {
        id: "720113",
        city_id: "7201",
        name: "Nuhon",
      },
      {
        id: "720114",
        city_id: "7201",
        name: "Moilong",
      },
      {
        id: "720115",
        city_id: "7201",
        name: "Batui Selatan",
      },
      {
        id: "720116",
        city_id: "7201",
        name: "Lobu",
      },
      {
        id: "720117",
        city_id: "7201",
        name: "Simpang Raya",
      },
      {
        id: "720118",
        city_id: "7201",
        name: "Balantak Selatan",
      },
      {
        id: "720119",
        city_id: "7201",
        name: "Balantak Utara",
      },
      {
        id: "720120",
        city_id: "7201",
        name: "Luwuk Selatan",
      },
      {
        id: "720121",
        city_id: "7201",
        name: "Luwuk Utara",
      },
      {
        id: "720122",
        city_id: "7201",
        name: "Mantoh",
      },
      {
        id: "720123",
        city_id: "7201",
        name: "Nambo",
      },
      {
        id: "720201",
        city_id: "7202",
        name: "Poso Kota",
      },
      {
        id: "720202",
        city_id: "7202",
        name: "Poso Pesisir",
      },
      {
        id: "720203",
        city_id: "7202",
        name: "Lage",
      },
      {
        id: "720204",
        city_id: "7202",
        name: "Pamona Puselemba",
      },
      {
        id: "720205",
        city_id: "7202",
        name: "Pamona Timur",
      },
      {
        id: "720206",
        city_id: "7202",
        name: "Pamona Selatan",
      },
      {
        id: "720207",
        city_id: "7202",
        name: "Lore Utara",
      },
      {
        id: "720208",
        city_id: "7202",
        name: "Lore Tengah",
      },
      {
        id: "720209",
        city_id: "7202",
        name: "Lore Selatan",
      },
      {
        id: "720218",
        city_id: "7202",
        name: "Poso Pesisir Utara",
      },
      {
        id: "720219",
        city_id: "7202",
        name: "Poso Pesisir Selatan",
      },
      {
        id: "720220",
        city_id: "7202",
        name: "Pamona Barat",
      },
      {
        id: "720221",
        city_id: "7202",
        name: "Poso Kota Selatan",
      },
      {
        id: "720222",
        city_id: "7202",
        name: "Poso Kota Utara",
      },
      {
        id: "720223",
        city_id: "7202",
        name: "Lore Barat",
      },
      {
        id: "720224",
        city_id: "7202",
        name: "Lore Timur",
      },
      {
        id: "720225",
        city_id: "7202",
        name: "Lore Piore",
      },
      {
        id: "720226",
        city_id: "7202",
        name: "Pamona Tenggara",
      },
      {
        id: "720227",
        city_id: "7202",
        name: "Pamona Utara",
      },
      {
        id: "720304",
        city_id: "7203",
        name: "Rio Pakava",
      },
      {
        id: "720306",
        city_id: "7203",
        name: "Dampelas",
      },
      {
        id: "720308",
        city_id: "7203",
        name: "Banawa",
      },
      {
        id: "720309",
        city_id: "7203",
        name: "Labuan",
      },
      {
        id: "720310",
        city_id: "7203",
        name: "Sindue",
      },
      {
        id: "720311",
        city_id: "7203",
        name: "Sirenja",
      },
      {
        id: "720312",
        city_id: "7203",
        name: "Balaesang",
      },
      {
        id: "720314",
        city_id: "7203",
        name: "Sojol",
      },
      {
        id: "720318",
        city_id: "7203",
        name: "Banawa Selatan",
      },
      {
        id: "720319",
        city_id: "7203",
        name: "Tanantovea",
      },
      {
        id: "720321",
        city_id: "7203",
        name: "Pinembani",
      },
      {
        id: "720324",
        city_id: "7203",
        name: "Sindue Tombusabora",
      },
      {
        id: "720325",
        city_id: "7203",
        name: "Sindue Tobata",
      },
      {
        id: "720327",
        city_id: "7203",
        name: "Banawa Tengah",
      },
      {
        id: "720330",
        city_id: "7203",
        name: "Sojol Utara",
      },
      {
        id: "720331",
        city_id: "7203",
        name: "Balaesang Tanjung",
      },
      {
        id: "720401",
        city_id: "7204",
        name: "Dampal Selatan",
      },
      {
        id: "720402",
        city_id: "7204",
        name: "Dampal Utara",
      },
      {
        id: "720403",
        city_id: "7204",
        name: "Dondo",
      },
      {
        id: "720404",
        city_id: "7204",
        name: "Basidondo",
      },
      {
        id: "720405",
        city_id: "7204",
        name: "Ogodeide",
      },
      {
        id: "720406",
        city_id: "7204",
        name: "Lampasio",
      },
      {
        id: "720407",
        city_id: "7204",
        name: "Baolan",
      },
      {
        id: "720408",
        city_id: "7204",
        name: "Galang",
      },
      {
        id: "720409",
        city_id: "7204",
        name: "Toli-Toli Utara",
      },
      {
        id: "720410",
        city_id: "7204",
        name: "Dako Pemean",
      },
      {
        id: "720501",
        city_id: "7205",
        name: "Momunu",
      },
      {
        id: "720502",
        city_id: "7205",
        name: "Lakea",
      },
      {
        id: "720503",
        city_id: "7205",
        name: "Bokat",
      },
      {
        id: "720504",
        city_id: "7205",
        name: "Bunobogu",
      },
      {
        id: "720505",
        city_id: "7205",
        name: "Paleleh",
      },
      {
        id: "720506",
        city_id: "7205",
        name: "Biau",
      },
      {
        id: "720507",
        city_id: "7205",
        name: "Tiloan",
      },
      {
        id: "720508",
        city_id: "7205",
        name: "Bukal",
      },
      {
        id: "720509",
        city_id: "7205",
        name: "Gadung",
      },
      {
        id: "720510",
        city_id: "7205",
        name: "Karamat",
      },
      {
        id: "720511",
        city_id: "7205",
        name: "Paleleh Barat",
      },
      {
        id: "720605",
        city_id: "7206",
        name: "Bungku Tengah",
      },
      {
        id: "720606",
        city_id: "7206",
        name: "Bungku Selatan",
      },
      {
        id: "720607",
        city_id: "7206",
        name: "Menui Kepulauan",
      },
      {
        id: "720608",
        city_id: "7206",
        name: "Bungku Barat",
      },
      {
        id: "720609",
        city_id: "7206",
        name: "Bumi Raya",
      },
      {
        id: "720610",
        city_id: "7206",
        name: "Bahodopi",
      },
      {
        id: "720612",
        city_id: "7206",
        name: "Wita Ponda",
      },
      {
        id: "720615",
        city_id: "7206",
        name: "Bungku Pesisir",
      },
      {
        id: "720618",
        city_id: "7206",
        name: "Bungku Timur",
      },
      {
        id: "720703",
        city_id: "7207",
        name: "Totikum",
      },
      {
        id: "720704",
        city_id: "7207",
        name: "Tinangkung",
      },
      {
        id: "720705",
        city_id: "7207",
        name: "Liang",
      },
      {
        id: "720706",
        city_id: "7207",
        name: "Bulagi",
      },
      {
        id: "720707",
        city_id: "7207",
        name: "Buko",
      },
      {
        id: "720709",
        city_id: "7207",
        name: "Bulagi Selatan",
      },
      {
        id: "720711",
        city_id: "7207",
        name: "Tinangkung Selatan",
      },
      {
        id: "720715",
        city_id: "7207",
        name: "Totikum Selatan",
      },
      {
        id: "720716",
        city_id: "7207",
        name: "Peling Tengah",
      },
      {
        id: "720717",
        city_id: "7207",
        name: "Bulagi Utara",
      },
      {
        id: "720718",
        city_id: "7207",
        name: "Buko Selatan",
      },
      {
        id: "720719",
        city_id: "7207",
        name: "Tinangkung Utara",
      },
      {
        id: "720801",
        city_id: "7208",
        name: "Parigi",
      },
      {
        id: "720802",
        city_id: "7208",
        name: "Ampibabo",
      },
      {
        id: "720803",
        city_id: "7208",
        name: "Tinombo",
      },
      {
        id: "720804",
        city_id: "7208",
        name: "Moutong",
      },
      {
        id: "720805",
        city_id: "7208",
        name: "Tomini",
      },
      {
        id: "720806",
        city_id: "7208",
        name: "Sausu",
      },
      {
        id: "720807",
        city_id: "7208",
        name: "Bolano Lambunu",
      },
      {
        id: "720808",
        city_id: "7208",
        name: "Kasimbar",
      },
      {
        id: "720809",
        city_id: "7208",
        name: "Torue",
      },
      {
        id: "720810",
        city_id: "7208",
        name: "Tinombo Selatan",
      },
      {
        id: "720811",
        city_id: "7208",
        name: "Parigi Selatan",
      },
      {
        id: "720812",
        city_id: "7208",
        name: "Mepanga",
      },
      {
        id: "720813",
        city_id: "7208",
        name: "Toribulu",
      },
      {
        id: "720814",
        city_id: "7208",
        name: "Taopa",
      },
      {
        id: "720815",
        city_id: "7208",
        name: "Balinggi",
      },
      {
        id: "720816",
        city_id: "7208",
        name: "Parigi Barat",
      },
      {
        id: "720817",
        city_id: "7208",
        name: "Siniu",
      },
      {
        id: "720818",
        city_id: "7208",
        name: "Palasa",
      },
      {
        id: "720819",
        city_id: "7208",
        name: "Parigi Utara",
      },
      {
        id: "720820",
        city_id: "7208",
        name: "Parigi Tengah",
      },
      {
        id: "720821",
        city_id: "7208",
        name: "Bolano",
      },
      {
        id: "720822",
        city_id: "7208",
        name: "Ongka Malino",
      },
      {
        id: "720823",
        city_id: "7208",
        name: "Sidoan",
      },
      {
        id: "720901",
        city_id: "7209",
        name: "Una Una",
      },
      {
        id: "720902",
        city_id: "7209",
        name: "Togean",
      },
      {
        id: "720903",
        city_id: "7209",
        name: "Walea Kepulauan",
      },
      {
        id: "720904",
        city_id: "7209",
        name: "Ampana Tete",
      },
      {
        id: "720905",
        city_id: "7209",
        name: "Ampana Kota",
      },
      {
        id: "720906",
        city_id: "7209",
        name: "Ulubongka",
      },
      {
        id: "720907",
        city_id: "7209",
        name: "Tojo Barat",
      },
      {
        id: "720908",
        city_id: "7209",
        name: "Tojo",
      },
      {
        id: "720909",
        city_id: "7209",
        name: "Walea Besar",
      },
      {
        id: "720910",
        city_id: "7209",
        name: "Ratolindo",
      },
      {
        id: "720911",
        city_id: "7209",
        name: "Batudaka",
      },
      {
        id: "720912",
        city_id: "7209",
        name: "Talatako",
      },
      {
        id: "721001",
        city_id: "7210",
        name: "Sigi Biromaru",
      },
      {
        id: "721002",
        city_id: "7210",
        name: "Palolo",
      },
      {
        id: "721003",
        city_id: "7210",
        name: "Nokilalaki",
      },
      {
        id: "721004",
        city_id: "7210",
        name: "Lindu",
      },
      {
        id: "721005",
        city_id: "7210",
        name: "Kulawi",
      },
      {
        id: "721006",
        city_id: "7210",
        name: "Kulawi Selatan",
      },
      {
        id: "721007",
        city_id: "7210",
        name: "Pipikoro",
      },
      {
        id: "721008",
        city_id: "7210",
        name: "Gumbasa",
      },
      {
        id: "721009",
        city_id: "7210",
        name: "Dolo Selatan",
      },
      {
        id: "721010",
        city_id: "7210",
        name: "Tanambulava",
      },
      {
        id: "721011",
        city_id: "7210",
        name: "Dolo Barat",
      },
      {
        id: "721012",
        city_id: "7210",
        name: "Dolo",
      },
      {
        id: "721013",
        city_id: "7210",
        name: "Kinovaro",
      },
      {
        id: "721014",
        city_id: "7210",
        name: "Marawola",
      },
      {
        id: "721015",
        city_id: "7210",
        name: "Marawola Barat",
      },
      {
        id: "721101",
        city_id: "7211",
        name: "Banggai",
      },
      {
        id: "721102",
        city_id: "7211",
        name: "Banggai Utara",
      },
      {
        id: "721103",
        city_id: "7211",
        name: "Bokan Kepulauan",
      },
      {
        id: "721104",
        city_id: "7211",
        name: "Bangkurung",
      },
      {
        id: "721105",
        city_id: "7211",
        name: "Labobo",
      },
      {
        id: "721106",
        city_id: "7211",
        name: "Banggai Selatan",
      },
      {
        id: "721107",
        city_id: "7211",
        name: "Banggai Tengah",
      },
      {
        id: "721201",
        city_id: "7212",
        name: "Petasia",
      },
      {
        id: "721202",
        city_id: "7212",
        name: "Petasia Timur",
      },
      {
        id: "721203",
        city_id: "7212",
        name: "Lembo Raya",
      },
      {
        id: "721204",
        city_id: "7212",
        name: "Lembo",
      },
      {
        id: "721205",
        city_id: "7212",
        name: "Mori Atas",
      },
      {
        id: "721206",
        city_id: "7212",
        name: "Mori Utara",
      },
      {
        id: "721207",
        city_id: "7212",
        name: "Soyo Jaya",
      },
      {
        id: "721208",
        city_id: "7212",
        name: "Bungku Utara",
      },
      {
        id: "721209",
        city_id: "7212",
        name: "Mamosalato",
      },
      {
        id: "721210",
        city_id: "7212",
        name: "Petasia Barat",
      },
      {
        id: "727101",
        city_id: "7271",
        name: "Palu Timur",
      },
      {
        id: "727102",
        city_id: "7271",
        name: "Palu Barat",
      },
      {
        id: "727103",
        city_id: "7271",
        name: "Palu Selatan",
      },
      {
        id: "727104",
        city_id: "7271",
        name: "Palu Utara",
      },
      {
        id: "727105",
        city_id: "7271",
        name: "Ulujadi",
      },
      {
        id: "727106",
        city_id: "7271",
        name: "Tatanga",
      },
      {
        id: "727107",
        city_id: "7271",
        name: "Tawaeli",
      },
      {
        id: "727108",
        city_id: "7271",
        name: "Mantikulore",
      },
      {
        id: "730101",
        city_id: "7301",
        name: "Benteng",
      },
      {
        id: "730102",
        city_id: "7301",
        name: "Bontoharu",
      },
      {
        id: "730103",
        city_id: "7301",
        name: "Bontomatene",
      },
      {
        id: "730104",
        city_id: "7301",
        name: "Bontomanai",
      },
      {
        id: "730105",
        city_id: "7301",
        name: "Bontosikuyu",
      },
      {
        id: "730106",
        city_id: "7301",
        name: "Pasimasunggu",
      },
      {
        id: "730107",
        city_id: "7301",
        name: "Pasimarannu",
      },
      {
        id: "730108",
        city_id: "7301",
        name: "Taka Bonerate",
      },
      {
        id: "730109",
        city_id: "7301",
        name: "Pasilambena",
      },
      {
        id: "730110",
        city_id: "7301",
        name: "Pasimasunggu Timur",
      },
      {
        id: "730111",
        city_id: "7301",
        name: "Buki",
      },
      {
        id: "730201",
        city_id: "7302",
        name: "Gantorang",
      },
      {
        id: "730202",
        city_id: "7302",
        name: "Ujung Bulu",
      },
      {
        id: "730203",
        city_id: "7302",
        name: "Bonto Bahari",
      },
      {
        id: "730204",
        city_id: "7302",
        name: "Bonto Tiro",
      },
      {
        id: "730205",
        city_id: "7302",
        name: "Herlang",
      },
      {
        id: "730206",
        city_id: "7302",
        name: "Kajang",
      },
      {
        id: "730207",
        city_id: "7302",
        name: "Bulukumpa",
      },
      {
        id: "730208",
        city_id: "7302",
        name: "Kindang",
      },
      {
        id: "730209",
        city_id: "7302",
        name: "Ujungloe",
      },
      {
        id: "730210",
        city_id: "7302",
        name: "Rilauale",
      },
      {
        id: "730301",
        city_id: "7303",
        name: "Bissappu",
      },
      {
        id: "730302",
        city_id: "7303",
        name: "Bantaeng",
      },
      {
        id: "730303",
        city_id: "7303",
        name: "Eremerasa",
      },
      {
        id: "730304",
        city_id: "7303",
        name: "Tompo Bulu",
      },
      {
        id: "730305",
        city_id: "7303",
        name: "Pajukukang",
      },
      {
        id: "730306",
        city_id: "7303",
        name: "Uluere",
      },
      {
        id: "730307",
        city_id: "7303",
        name: "Gantarang Keke",
      },
      {
        id: "730308",
        city_id: "7303",
        name: "Sinoa",
      },
      {
        id: "730401",
        city_id: "7304",
        name: "Bangkala",
      },
      {
        id: "730402",
        city_id: "7304",
        name: "Tamalatea",
      },
      {
        id: "730403",
        city_id: "7304",
        name: "Binamu",
      },
      {
        id: "730404",
        city_id: "7304",
        name: "Batang",
      },
      {
        id: "730405",
        city_id: "7304",
        name: "Kelara",
      },
      {
        id: "730406",
        city_id: "7304",
        name: "Bangkala Barat",
      },
      {
        id: "730407",
        city_id: "7304",
        name: "Bontoramba",
      },
      {
        id: "730408",
        city_id: "7304",
        name: "Turatea",
      },
      {
        id: "730409",
        city_id: "7304",
        name: "Arungkeke",
      },
      {
        id: "730410",
        city_id: "7304",
        name: "Rumbia",
      },
      {
        id: "730411",
        city_id: "7304",
        name: "Tarowang",
      },
      {
        id: "730501",
        city_id: "7305",
        name: "Mappakasunggu",
      },
      {
        id: "730502",
        city_id: "7305",
        name: "Mangarabombang",
      },
      {
        id: "730503",
        city_id: "7305",
        name: "Polombangkeng Selatan",
      },
      {
        id: "730504",
        city_id: "7305",
        name: "Polombangkeng Utara",
      },
      {
        id: "730505",
        city_id: "7305",
        name: "Galesong Selatan",
      },
      {
        id: "730506",
        city_id: "7305",
        name: "Galesong Utara",
      },
      {
        id: "730507",
        city_id: "7305",
        name: "Pattallassang",
      },
      {
        id: "730508",
        city_id: "7305",
        name: "Sanrobone",
      },
      {
        id: "730509",
        city_id: "7305",
        name: "Galesong",
      },
      {
        id: "730510",
        city_id: "7305",
        name: "Kepulauan Tanakeke",
      },
      {
        id: "730601",
        city_id: "7306",
        name: "Bontonompo",
      },
      {
        id: "730602",
        city_id: "7306",
        name: "Bajeng",
      },
      {
        id: "730603",
        city_id: "7306",
        name: "Tompobullu",
      },
      {
        id: "730604",
        city_id: "7306",
        name: "Tinggimoncong",
      },
      {
        id: "730605",
        city_id: "7306",
        name: "Parangloe",
      },
      {
        id: "730606",
        city_id: "7306",
        name: "Bontomarannu",
      },
      {
        id: "730607",
        city_id: "7306",
        name: "Palangga",
      },
      {
        id: "730608",
        city_id: "7306",
        name: "Somba Upu",
      },
      {
        id: "730609",
        city_id: "7306",
        name: "Bungaya",
      },
      {
        id: "730610",
        city_id: "7306",
        name: "Tombolopao",
      },
      {
        id: "730611",
        city_id: "7306",
        name: "Biringbulu",
      },
      {
        id: "730612",
        city_id: "7306",
        name: "Barombong",
      },
      {
        id: "730613",
        city_id: "7306",
        name: "Pattalasang",
      },
      {
        id: "730614",
        city_id: "7306",
        name: "Manuju",
      },
      {
        id: "730615",
        city_id: "7306",
        name: "Bontolempangang",
      },
      {
        id: "730616",
        city_id: "7306",
        name: "Bontonompo Selatan",
      },
      {
        id: "730617",
        city_id: "7306",
        name: "Parigi",
      },
      {
        id: "730618",
        city_id: "7306",
        name: "Bajeng Barat",
      },
      {
        id: "730701",
        city_id: "7307",
        name: "Sinjai Barat",
      },
      {
        id: "730702",
        city_id: "7307",
        name: "Sinjai Selatan",
      },
      {
        id: "730703",
        city_id: "7307",
        name: "Sinjai Timur",
      },
      {
        id: "730704",
        city_id: "7307",
        name: "Sinjai Tengah",
      },
      {
        id: "730705",
        city_id: "7307",
        name: "Sinjai Utara",
      },
      {
        id: "730706",
        city_id: "7307",
        name: "Bulupoddo",
      },
      {
        id: "730707",
        city_id: "7307",
        name: "Sinjai Borong",
      },
      {
        id: "730708",
        city_id: "7307",
        name: "Tellu Limpoe",
      },
      {
        id: "730709",
        city_id: "7307",
        name: "Pulau Sembilan",
      },
      {
        id: "730801",
        city_id: "7308",
        name: "Bontocani",
      },
      {
        id: "730802",
        city_id: "7308",
        name: "Kahu",
      },
      {
        id: "730803",
        city_id: "7308",
        name: "Kajuara",
      },
      {
        id: "730804",
        city_id: "7308",
        name: "Salomekko",
      },
      {
        id: "730805",
        city_id: "7308",
        name: "Tonra",
      },
      {
        id: "730806",
        city_id: "7308",
        name: "Libureng",
      },
      {
        id: "730807",
        city_id: "7308",
        name: "Mare",
      },
      {
        id: "730808",
        city_id: "7308",
        name: "Sibulue",
      },
      {
        id: "730809",
        city_id: "7308",
        name: "Barebbo",
      },
      {
        id: "730810",
        city_id: "7308",
        name: "Cina",
      },
      {
        id: "730811",
        city_id: "7308",
        name: "Ponre",
      },
      {
        id: "730812",
        city_id: "7308",
        name: "Lappariaja",
      },
      {
        id: "730813",
        city_id: "7308",
        name: "Lamuru",
      },
      {
        id: "730814",
        city_id: "7308",
        name: "Ulaweng",
      },
      {
        id: "730815",
        city_id: "7308",
        name: "Palakka",
      },
      {
        id: "730816",
        city_id: "7308",
        name: "Awangpone",
      },
      {
        id: "730817",
        city_id: "7308",
        name: "Tellu Siattinge",
      },
      {
        id: "730818",
        city_id: "7308",
        name: "Ajangale",
      },
      {
        id: "730819",
        city_id: "7308",
        name: "Dua Boccoe",
      },
      {
        id: "730820",
        city_id: "7308",
        name: "Cenrana",
      },
      {
        id: "730821",
        city_id: "7308",
        name: "Tanete Riattang",
      },
      {
        id: "730822",
        city_id: "7308",
        name: "Tanete Riattang Barat",
      },
      {
        id: "730823",
        city_id: "7308",
        name: "Tanete Riattang Timur",
      },
      {
        id: "730824",
        city_id: "7308",
        name: "Amali",
      },
      {
        id: "730825",
        city_id: "7308",
        name: "Tellulimpoe",
      },
      {
        id: "730826",
        city_id: "7308",
        name: "Bengo",
      },
      {
        id: "730827",
        city_id: "7308",
        name: "Patimpeng",
      },
      {
        id: "730901",
        city_id: "7309",
        name: "Mandai",
      },
      {
        id: "730902",
        city_id: "7309",
        name: "Camba",
      },
      {
        id: "730903",
        city_id: "7309",
        name: "Bantimurung",
      },
      {
        id: "730904",
        city_id: "7309",
        name: "Maros Baru",
      },
      {
        id: "730905",
        city_id: "7309",
        name: "Bontoa",
      },
      {
        id: "730906",
        city_id: "7309",
        name: "Malllawa",
      },
      {
        id: "730907",
        city_id: "7309",
        name: "Tanralili",
      },
      {
        id: "730908",
        city_id: "7309",
        name: "Marusu",
      },
      {
        id: "730909",
        city_id: "7309",
        name: "Simbang",
      },
      {
        id: "730910",
        city_id: "7309",
        name: "Cenrana",
      },
      {
        id: "730911",
        city_id: "7309",
        name: "Tompobulu",
      },
      {
        id: "730912",
        city_id: "7309",
        name: "Lau",
      },
      {
        id: "730913",
        city_id: "7309",
        name: "Moncong Loe",
      },
      {
        id: "730914",
        city_id: "7309",
        name: "Turikale",
      },
      {
        id: "731001",
        city_id: "7310",
        name: "Liukang Tangaya",
      },
      {
        id: "731002",
        city_id: "7310",
        name: "Liukang Kalmas",
      },
      {
        id: "731003",
        city_id: "7310",
        name: "Liukang Tupabbiring",
      },
      {
        id: "731004",
        city_id: "7310",
        name: "Pangkajene",
      },
      {
        id: "731005",
        city_id: "7310",
        name: "Balocci",
      },
      {
        id: "731006",
        city_id: "7310",
        name: "Bungoro",
      },
      {
        id: "731007",
        city_id: "7310",
        name: "Labakkang",
      },
      {
        id: "731008",
        city_id: "7310",
        name: "Marang",
      },
      {
        id: "731009",
        city_id: "7310",
        name: "Segeri",
      },
      {
        id: "731010",
        city_id: "7310",
        name: "Minasa Tene",
      },
      {
        id: "731011",
        city_id: "7310",
        name: "Mandalle",
      },
      {
        id: "731012",
        city_id: "7310",
        name: "Tondong Tallasa",
      },
      {
        id: "731013",
        city_id: "7310",
        name: "Liukang Tupabbiring Utara",
      },
      {
        id: "731101",
        city_id: "7311",
        name: "Tanete Riaja",
      },
      {
        id: "731102",
        city_id: "7311",
        name: "Tanete Rilau",
      },
      {
        id: "731103",
        city_id: "7311",
        name: "Barru",
      },
      {
        id: "731104",
        city_id: "7311",
        name: "Soppeng Riaja",
      },
      {
        id: "731105",
        city_id: "7311",
        name: "Mallusetasi",
      },
      {
        id: "731106",
        city_id: "7311",
        name: "Pujananting",
      },
      {
        id: "731107",
        city_id: "7311",
        name: "Balusu",
      },
      {
        id: "731201",
        city_id: "7312",
        name: "Marioriwawo",
      },
      {
        id: "731202",
        city_id: "7312",
        name: "Liliraja",
      },
      {
        id: "731203",
        city_id: "7312",
        name: "Lilirilau",
      },
      {
        id: "731204",
        city_id: "7312",
        name: "Lalabata",
      },
      {
        id: "731205",
        city_id: "7312",
        name: "Marioriawa",
      },
      {
        id: "731206",
        city_id: "7312",
        name: "Donri Donri",
      },
      {
        id: "731207",
        city_id: "7312",
        name: "Ganra",
      },
      {
        id: "731208",
        city_id: "7312",
        name: "Citta",
      },
      {
        id: "731301",
        city_id: "7313",
        name: "Sabangparu",
      },
      {
        id: "731302",
        city_id: "7313",
        name: "Pammana",
      },
      {
        id: "731303",
        city_id: "7313",
        name: "Takkalalla",
      },
      {
        id: "731304",
        city_id: "7313",
        name: "Sajoanging",
      },
      {
        id: "731305",
        city_id: "7313",
        name: "Majauleng",
      },
      {
        id: "731306",
        city_id: "7313",
        name: "Tempe",
      },
      {
        id: "731307",
        city_id: "7313",
        name: "Belawa",
      },
      {
        id: "731308",
        city_id: "7313",
        name: "Tanasitolo",
      },
      {
        id: "731309",
        city_id: "7313",
        name: "Maniangpajo",
      },
      {
        id: "731310",
        city_id: "7313",
        name: "Pitumpanua",
      },
      {
        id: "731311",
        city_id: "7313",
        name: "Bola",
      },
      {
        id: "731312",
        city_id: "7313",
        name: "Penrang",
      },
      {
        id: "731313",
        city_id: "7313",
        name: "Gilireng",
      },
      {
        id: "731314",
        city_id: "7313",
        name: "Keera",
      },
      {
        id: "731401",
        city_id: "7314",
        name: "Panca Lautan",
      },
      {
        id: "731402",
        city_id: "7314",
        name: "Tellu Limpoe",
      },
      {
        id: "731403",
        city_id: "7314",
        name: "Watang Pulu",
      },
      {
        id: "731404",
        city_id: "7314",
        name: "Baranti",
      },
      {
        id: "731405",
        city_id: "7314",
        name: "Panca Rijang",
      },
      {
        id: "731406",
        city_id: "7314",
        name: "Kulo",
      },
      {
        id: "731407",
        city_id: "7314",
        name: "Maritengngae",
      },
      {
        id: "731408",
        city_id: "7314",
        name: "WT. Sidenreng",
      },
      {
        id: "731409",
        city_id: "7314",
        name: "Dua Pitue",
      },
      {
        id: "731410",
        city_id: "7314",
        name: "Pitu Riawa",
      },
      {
        id: "731411",
        city_id: "7314",
        name: "Pitu Raise",
      },
      {
        id: "731501",
        city_id: "7315",
        name: "Matirro Sompe",
      },
      {
        id: "731502",
        city_id: "7315",
        name: "Suppa",
      },
      {
        id: "731503",
        city_id: "7315",
        name: "Mattiro Bulu",
      },
      {
        id: "731504",
        city_id: "7315",
        name: "Watang Sawito",
      },
      {
        id: "731505",
        city_id: "7315",
        name: "Patampanua",
      },
      {
        id: "731506",
        city_id: "7315",
        name: "Duampanua",
      },
      {
        id: "731507",
        city_id: "7315",
        name: "Lembang",
      },
      {
        id: "731508",
        city_id: "7315",
        name: "Cempa",
      },
      {
        id: "731509",
        city_id: "7315",
        name: "Tiroang",
      },
      {
        id: "731510",
        city_id: "7315",
        name: "Lansirang",
      },
      {
        id: "731511",
        city_id: "7315",
        name: "Paleteang",
      },
      {
        id: "731512",
        city_id: "7315",
        name: "Batu Lappa",
      },
      {
        id: "731601",
        city_id: "7316",
        name: "Maiwa",
      },
      {
        id: "731602",
        city_id: "7316",
        name: "Enrekang",
      },
      {
        id: "731603",
        city_id: "7316",
        name: "Baraka",
      },
      {
        id: "731604",
        city_id: "7316",
        name: "Anggeraja",
      },
      {
        id: "731605",
        city_id: "7316",
        name: "Alla",
      },
      {
        id: "731606",
        city_id: "7316",
        name: "Bungin",
      },
      {
        id: "731607",
        city_id: "7316",
        name: "Cendana",
      },
      {
        id: "731608",
        city_id: "7316",
        name: "Curio",
      },
      {
        id: "731609",
        city_id: "7316",
        name: "Malua",
      },
      {
        id: "731610",
        city_id: "7316",
        name: "Buntu Batu",
      },
      {
        id: "731611",
        city_id: "7316",
        name: "Masalle",
      },
      {
        id: "731612",
        city_id: "7316",
        name: "Baroko",
      },
      {
        id: "731701",
        city_id: "7317",
        name: "Basse Sangtempe",
      },
      {
        id: "731702",
        city_id: "7317",
        name: "Larompong",
      },
      {
        id: "731703",
        city_id: "7317",
        name: "Suli",
      },
      {
        id: "731704",
        city_id: "7317",
        name: "Bajo",
      },
      {
        id: "731705",
        city_id: "7317",
        name: "Bua Ponrang",
      },
      {
        id: "731706",
        city_id: "7317",
        name: "Walenrang",
      },
      {
        id: "731707",
        city_id: "7317",
        name: "Belopa",
      },
      {
        id: "731708",
        city_id: "7317",
        name: "Bua",
      },
      {
        id: "731709",
        city_id: "7317",
        name: "Lamasi",
      },
      {
        id: "731710",
        city_id: "7317",
        name: "Larompong Selatan",
      },
      {
        id: "731711",
        city_id: "7317",
        name: "Ponrang",
      },
      {
        id: "731712",
        city_id: "7317",
        name: "Latimojong",
      },
      {
        id: "731713",
        city_id: "7317",
        name: "Kamanre",
      },
      {
        id: "731714",
        city_id: "7317",
        name: "Belopa Utara",
      },
      {
        id: "731715",
        city_id: "7317",
        name: "Walenrang Barat",
      },
      {
        id: "731716",
        city_id: "7317",
        name: "Walenrang Utara",
      },
      {
        id: "731717",
        city_id: "7317",
        name: "Walenrang Timur",
      },
      {
        id: "731718",
        city_id: "7317",
        name: "Lamasi Timur",
      },
      {
        id: "731719",
        city_id: "7317",
        name: "Suli Barat",
      },
      {
        id: "731720",
        city_id: "7317",
        name: "Bajo Barat",
      },
      {
        id: "731721",
        city_id: "7317",
        name: "Ponrang Selatan",
      },
      {
        id: "731722",
        city_id: "7317",
        name: "Basse Sangtempe Utara",
      },
      {
        id: "731801",
        city_id: "7318",
        name: "Saluputi",
      },
      {
        id: "731802",
        city_id: "7318",
        name: "Bittuang",
      },
      {
        id: "731803",
        city_id: "7318",
        name: "Bonggakaradeng",
      },
      {
        id: "731805",
        city_id: "7318",
        name: "Makale",
      },
      {
        id: "731809",
        city_id: "7318",
        name: "Simbuang",
      },
      {
        id: "731811",
        city_id: "7318",
        name: "Rantetayo",
      },
      {
        id: "731812",
        city_id: "7318",
        name: "Mengkendek",
      },
      {
        id: "731813",
        city_id: "7318",
        name: "Sangalla",
      },
      {
        id: "731819",
        city_id: "7318",
        name: "Gandangbatu Sillanan",
      },
      {
        id: "731820",
        city_id: "7318",
        name: "Rembon",
      },
      {
        id: "731827",
        city_id: "7318",
        name: "Makale Utara",
      },
      {
        id: "731828",
        city_id: "7318",
        name: "Mappak",
      },
      {
        id: "731829",
        city_id: "7318",
        name: "Makale Selatan",
      },
      {
        id: "731831",
        city_id: "7318",
        name: "Masanda",
      },
      {
        id: "731833",
        city_id: "7318",
        name: "Sangalla Selatan",
      },
      {
        id: "731834",
        city_id: "7318",
        name: "Sangalla Utara",
      },
      {
        id: "731835",
        city_id: "7318",
        name: "Malimbong Balepe",
      },
      {
        id: "731837",
        city_id: "7318",
        name: "Rano",
      },
      {
        id: "731838",
        city_id: "7318",
        name: "Kurra",
      },
      {
        id: "732201",
        city_id: "7322",
        name: "Malangke",
      },
      {
        id: "732202",
        city_id: "7322",
        name: "Bone Bone",
      },
      {
        id: "732203",
        city_id: "7322",
        name: "Masamba",
      },
      {
        id: "732204",
        city_id: "7322",
        name: "Sabbang",
      },
      {
        id: "732205",
        city_id: "7322",
        name: "Limbong",
      },
      {
        id: "732206",
        city_id: "7322",
        name: "Sukamaju",
      },
      {
        id: "732207",
        city_id: "7322",
        name: "Seko",
      },
      {
        id: "732208",
        city_id: "7322",
        name: "Malangke Barat",
      },
      {
        id: "732209",
        city_id: "7322",
        name: "Rampi",
      },
      {
        id: "732210",
        city_id: "7322",
        name: "Mappedeceng",
      },
      {
        id: "732211",
        city_id: "7322",
        name: "Baebunta",
      },
      {
        id: "732212",
        city_id: "7322",
        name: "Tana Lili",
      },
      {
        id: "732213",
        city_id: "7322",
        name: "Sukamaju Selatan",
      },
      {
        id: "732214",
        city_id: "7322",
        name: "Baebunta Selatan",
      },
      {
        id: "732215",
        city_id: "7322",
        name: "Sabbang Selatan",
      },
      {
        id: "732401",
        city_id: "7324",
        name: "Mangkutana",
      },
      {
        id: "732402",
        city_id: "7324",
        name: "Nuha",
      },
      {
        id: "732403",
        city_id: "7324",
        name: "Towuti",
      },
      {
        id: "732404",
        city_id: "7324",
        name: "Malili",
      },
      {
        id: "732405",
        city_id: "7324",
        name: "Angkona",
      },
      {
        id: "732406",
        city_id: "7324",
        name: "Wotu",
      },
      {
        id: "732407",
        city_id: "7324",
        name: "Burau",
      },
      {
        id: "732408",
        city_id: "7324",
        name: "Tomoni",
      },
      {
        id: "732409",
        city_id: "7324",
        name: "Tomoni Timur",
      },
      {
        id: "732410",
        city_id: "7324",
        name: "Kalaena",
      },
      {
        id: "732411",
        city_id: "7324",
        name: "Wasuponda",
      },
      {
        id: "732601",
        city_id: "7326",
        name: "Rantepao",
      },
      {
        id: "732602",
        city_id: "7326",
        name: "Sesean",
      },
      {
        id: "732603",
        city_id: "7326",
        name: "Nanggala",
      },
      {
        id: "732604",
        city_id: "7326",
        name: "Rindingallo",
      },
      {
        id: "732605",
        city_id: "7326",
        name: "Buntao",
      },
      {
        id: "732606",
        city_id: "7326",
        name: "Sa'dan",
      },
      {
        id: "732607",
        city_id: "7326",
        name: "Sanggalangi",
      },
      {
        id: "732608",
        city_id: "7326",
        name: "Sopai",
      },
      {
        id: "732609",
        city_id: "7326",
        name: "Tikala",
      },
      {
        id: "732610",
        city_id: "7326",
        name: "Balusu",
      },
      {
        id: "732611",
        city_id: "7326",
        name: "Tallunglipu",
      },
      {
        id: "732612",
        city_id: "7326",
        name: "Dende' Piongan Napo",
      },
      {
        id: "732613",
        city_id: "7326",
        name: "Buntu Pepasan",
      },
      {
        id: "732614",
        city_id: "7326",
        name: "Baruppu",
      },
      {
        id: "732615",
        city_id: "7326",
        name: "Kesu",
      },
      {
        id: "732616",
        city_id: "7326",
        name: "Tondon",
      },
      {
        id: "732617",
        city_id: "7326",
        name: "Bangkelekila",
      },
      {
        id: "732618",
        city_id: "7326",
        name: "Rantebua",
      },
      {
        id: "732619",
        city_id: "7326",
        name: "Sesean Suloara",
      },
      {
        id: "732620",
        city_id: "7326",
        name: "Kapala Pitu",
      },
      {
        id: "732621",
        city_id: "7326",
        name: "Awan Rante Karua",
      },
      {
        id: "737101",
        city_id: "7371",
        name: "Mariso",
      },
      {
        id: "737102",
        city_id: "7371",
        name: "Mamajang",
      },
      {
        id: "737103",
        city_id: "7371",
        name: "Makassar",
      },
      {
        id: "737104",
        city_id: "7371",
        name: "Ujung Pandang",
      },
      {
        id: "737105",
        city_id: "7371",
        name: "Wajo",
      },
      {
        id: "737106",
        city_id: "7371",
        name: "Bontoala",
      },
      {
        id: "737107",
        city_id: "7371",
        name: "Tallo",
      },
      {
        id: "737108",
        city_id: "7371",
        name: "Ujung Tanah",
      },
      {
        id: "737109",
        city_id: "7371",
        name: "Panakkukang",
      },
      {
        id: "737110",
        city_id: "7371",
        name: "Tamalate",
      },
      {
        id: "737111",
        city_id: "7371",
        name: "Biringkanaya",
      },
      {
        id: "737112",
        city_id: "7371",
        name: "Manggala",
      },
      {
        id: "737113",
        city_id: "7371",
        name: "Rappocini",
      },
      {
        id: "737114",
        city_id: "7371",
        name: "Tamalanrea",
      },
      {
        id: "737115",
        city_id: "7371",
        name: "Kepulauan Sangkarrang",
      },
      {
        id: "737201",
        city_id: "7372",
        name: "Bacukiki",
      },
      {
        id: "737202",
        city_id: "7372",
        name: "Ujung",
      },
      {
        id: "737203",
        city_id: "7372",
        name: "Soreang",
      },
      {
        id: "737204",
        city_id: "7372",
        name: "Bacukiki Barat",
      },
      {
        id: "737301",
        city_id: "7373",
        name: "Wara",
      },
      {
        id: "737302",
        city_id: "7373",
        name: "Wara Utara",
      },
      {
        id: "737303",
        city_id: "7373",
        name: "Wara Selatan",
      },
      {
        id: "737304",
        city_id: "7373",
        name: "Telluwanua",
      },
      {
        id: "737305",
        city_id: "7373",
        name: "Wara Timur",
      },
      {
        id: "737306",
        city_id: "7373",
        name: "Wara Barat",
      },
      {
        id: "737307",
        city_id: "7373",
        name: "Sendana",
      },
      {
        id: "737308",
        city_id: "7373",
        name: "Mungkajang",
      },
      {
        id: "737309",
        city_id: "7373",
        name: "Bara",
      },
      {
        id: "740101",
        city_id: "7401",
        name: "Wundulako",
      },
      {
        id: "740104",
        city_id: "7401",
        name: "Kolaka",
      },
      {
        id: "740107",
        city_id: "7401",
        name: "Pomalaa",
      },
      {
        id: "740108",
        city_id: "7401",
        name: "Watubangga",
      },
      {
        id: "740110",
        city_id: "7401",
        name: "Wolo",
      },
      {
        id: "740112",
        city_id: "7401",
        name: "Baula",
      },
      {
        id: "740114",
        city_id: "7401",
        name: "Latambaga",
      },
      {
        id: "740118",
        city_id: "7401",
        name: "Tanggetada",
      },
      {
        id: "740120",
        city_id: "7401",
        name: "Samaturu",
      },
      {
        id: "740124",
        city_id: "7401",
        name: "Toari",
      },
      {
        id: "740125",
        city_id: "7401",
        name: "Polinggona",
      },
      {
        id: "740127",
        city_id: "7401",
        name: "Iwoimendaa",
      },
      {
        id: "740201",
        city_id: "7402",
        name: "Lambuya",
      },
      {
        id: "740202",
        city_id: "7402",
        name: "Unaaha",
      },
      {
        id: "740203",
        city_id: "7402",
        name: "Wawotobi",
      },
      {
        id: "740204",
        city_id: "7402",
        name: "Pondidaha",
      },
      {
        id: "740205",
        city_id: "7402",
        name: "Sampara",
      },
      {
        id: "740210",
        city_id: "7402",
        name: "Abuki",
      },
      {
        id: "740211",
        city_id: "7402",
        name: "Soropia",
      },
      {
        id: "740215",
        city_id: "7402",
        name: "Tongauna",
      },
      {
        id: "740216",
        city_id: "7402",
        name: "Latoma",
      },
      {
        id: "740217",
        city_id: "7402",
        name: "Puriala",
      },
      {
        id: "740218",
        city_id: "7402",
        name: "Uepai",
      },
      {
        id: "740219",
        city_id: "7402",
        name: "Wonggeduku",
      },
      {
        id: "740220",
        city_id: "7402",
        name: "Besulutu",
      },
      {
        id: "740221",
        city_id: "7402",
        name: "Bondoala",
      },
      {
        id: "740223",
        city_id: "7402",
        name: "Routa",
      },
      {
        id: "740224",
        city_id: "7402",
        name: "Anggaberi",
      },
      {
        id: "740225",
        city_id: "7402",
        name: "Meluhu",
      },
      {
        id: "740228",
        city_id: "7402",
        name: "Amonggedo",
      },
      {
        id: "740231",
        city_id: "7402",
        name: "Asinua",
      },
      {
        id: "740232",
        city_id: "7402",
        name: "Konawe",
      },
      {
        id: "740233",
        city_id: "7402",
        name: "Kapoiala",
      },
      {
        id: "740236",
        city_id: "7402",
        name: "Lalonggasumeeto",
      },
      {
        id: "740237",
        city_id: "7402",
        name: "Onembute",
      },
      {
        id: "740238",
        city_id: "7402",
        name: "Padangguni",
      },
      {
        id: "740239",
        city_id: "7402",
        name: "Morosi",
      },
      {
        id: "740240",
        city_id: "7402",
        name: "Anggalomoare",
      },
      {
        id: "740241",
        city_id: "7402",
        name: "Wonggeduku Barat",
      },
      {
        id: "740306",
        city_id: "7403",
        name: "Napabalano",
      },
      {
        id: "740307",
        city_id: "7403",
        name: "Maligano",
      },
      {
        id: "740313",
        city_id: "7403",
        name: "Wakorumba Selatan",
      },
      {
        id: "740314",
        city_id: "7403",
        name: "Lasalepa",
      },
      {
        id: "740315",
        city_id: "7403",
        name: "Batalaiwaru",
      },
      {
        id: "740316",
        city_id: "7403",
        name: "Katobu",
      },
      {
        id: "740317",
        city_id: "7403",
        name: "Duruka",
      },
      {
        id: "740318",
        city_id: "7403",
        name: "Lohia",
      },
      {
        id: "740319",
        city_id: "7403",
        name: "Watopute",
      },
      {
        id: "740320",
        city_id: "7403",
        name: "Kontunaga",
      },
      {
        id: "740323",
        city_id: "7403",
        name: "Kabangka",
      },
      {
        id: "740324",
        city_id: "7403",
        name: "Kabawo",
      },
      {
        id: "740325",
        city_id: "7403",
        name: "Parigi",
      },
      {
        id: "740326",
        city_id: "7403",
        name: "Bone",
      },
      {
        id: "740327",
        city_id: "7403",
        name: "Tongkuno",
      },
      {
        id: "740328",
        city_id: "7403",
        name: "Pasir Putih",
      },
      {
        id: "740330",
        city_id: "7403",
        name: "Kontu Kowuna",
      },
      {
        id: "740331",
        city_id: "7403",
        name: "Marobo",
      },
      {
        id: "740332",
        city_id: "7403",
        name: "Tongkuno Selatan",
      },
      {
        id: "740333",
        city_id: "7403",
        name: "Pasi Kolaga",
      },
      {
        id: "740334",
        city_id: "7403",
        name: "Batukara",
      },
      {
        id: "740337",
        city_id: "7403",
        name: "Towea",
      },
      {
        id: "740411",
        city_id: "7404",
        name: "Pasarwajo",
      },
      {
        id: "740422",
        city_id: "7404",
        name: "Kapontori",
      },
      {
        id: "740423",
        city_id: "7404",
        name: "Lasalimu",
      },
      {
        id: "740424",
        city_id: "7404",
        name: "Lasalimu Selatan",
      },
      {
        id: "740427",
        city_id: "7404",
        name: "Siotapina",
      },
      {
        id: "740428",
        city_id: "7404",
        name: "Wolowa",
      },
      {
        id: "740429",
        city_id: "7404",
        name: "Wabula",
      },
      {
        id: "740501",
        city_id: "7405",
        name: "Tinanggea",
      },
      {
        id: "740502",
        city_id: "7405",
        name: "Angata",
      },
      {
        id: "740503",
        city_id: "7405",
        name: "Andoolo",
      },
      {
        id: "740504",
        city_id: "7405",
        name: "Palangga",
      },
      {
        id: "740505",
        city_id: "7405",
        name: "Landono",
      },
      {
        id: "740506",
        city_id: "7405",
        name: "Lainea",
      },
      {
        id: "740507",
        city_id: "7405",
        name: "Konda",
      },
      {
        id: "740508",
        city_id: "7405",
        name: "Ranomeeto",
      },
      {
        id: "740509",
        city_id: "7405",
        name: "Kolono",
      },
      {
        id: "740510",
        city_id: "7405",
        name: "Moramo",
      },
      {
        id: "740511",
        city_id: "7405",
        name: "Laonti",
      },
      {
        id: "740512",
        city_id: "7405",
        name: "Lalembuu",
      },
      {
        id: "740513",
        city_id: "7405",
        name: "Benua",
      },
      {
        id: "740514",
        city_id: "7405",
        name: "Palangga Selatan",
      },
      {
        id: "740515",
        city_id: "7405",
        name: "Mowila",
      },
      {
        id: "740516",
        city_id: "7405",
        name: "Moramo Utara",
      },
      {
        id: "740517",
        city_id: "7405",
        name: "Buke",
      },
      {
        id: "740518",
        city_id: "7405",
        name: "Wolasi",
      },
      {
        id: "740519",
        city_id: "7405",
        name: "Laeya",
      },
      {
        id: "740520",
        city_id: "7405",
        name: "Baito",
      },
      {
        id: "740521",
        city_id: "7405",
        name: "Basala",
      },
      {
        id: "740522",
        city_id: "7405",
        name: "Ranomeeto Barat",
      },
      {
        id: "740523",
        city_id: "7405",
        name: "Kolono Timur",
      },
      {
        id: "740524",
        city_id: "7405",
        name: "Sabulakoa",
      },
      {
        id: "740525",
        city_id: "7405",
        name: "Andoolo Barat",
      },
      {
        id: "740601",
        city_id: "7406",
        name: "Poleang",
      },
      {
        id: "740602",
        city_id: "7406",
        name: "Poleang Timur",
      },
      {
        id: "740603",
        city_id: "7406",
        name: "Rarowatu",
      },
      {
        id: "740604",
        city_id: "7406",
        name: "Rumbia",
      },
      {
        id: "740605",
        city_id: "7406",
        name: "Kabaena",
      },
      {
        id: "740606",
        city_id: "7406",
        name: "Kabaena Timur",
      },
      {
        id: "740607",
        city_id: "7406",
        name: "Poleang Barat",
      },
      {
        id: "740608",
        city_id: "7406",
        name: "Mata Oleo",
      },
      {
        id: "740609",
        city_id: "7406",
        name: "Rarowatu Utara",
      },
      {
        id: "740610",
        city_id: "7406",
        name: "Poleang Utara",
      },
      {
        id: "740611",
        city_id: "7406",
        name: "Poleang Selatan",
      },
      {
        id: "740612",
        city_id: "7406",
        name: "Poleang Tenggara",
      },
      {
        id: "740613",
        city_id: "7406",
        name: "Kabaena Selatan",
      },
      {
        id: "740614",
        city_id: "7406",
        name: "Kabaena Barat",
      },
      {
        id: "740615",
        city_id: "7406",
        name: "Kabaena Utara",
      },
      {
        id: "740616",
        city_id: "7406",
        name: "Kabaena Tengah",
      },
      {
        id: "740617",
        city_id: "7406",
        name: "Kep. Masaloka Raya",
      },
      {
        id: "740618",
        city_id: "7406",
        name: "Rumbia Tengah",
      },
      {
        id: "740619",
        city_id: "7406",
        name: "Poleang Tengah",
      },
      {
        id: "740620",
        city_id: "7406",
        name: "Tontonunu",
      },
      {
        id: "740621",
        city_id: "7406",
        name: "Lantari Jaya",
      },
      {
        id: "740622",
        city_id: "7406",
        name: "Mata Usu",
      },
      {
        id: "740701",
        city_id: "7407",
        name: "Wangi-Wangi",
      },
      {
        id: "740702",
        city_id: "7407",
        name: "Kaledupa",
      },
      {
        id: "740703",
        city_id: "7407",
        name: "Tomia",
      },
      {
        id: "740704",
        city_id: "7407",
        name: "Binongko",
      },
      {
        id: "740705",
        city_id: "7407",
        name: "Wangi Wangi Selatan",
      },
      {
        id: "740706",
        city_id: "7407",
        name: "Kaledupa Selatan",
      },
      {
        id: "740707",
        city_id: "7407",
        name: "Tomia Timur",
      },
      {
        id: "740708",
        city_id: "7407",
        name: "Togo Binongko",
      },
      {
        id: "740801",
        city_id: "7408",
        name: "Lasusua",
      },
      {
        id: "740802",
        city_id: "7408",
        name: "Pakue",
      },
      {
        id: "740803",
        city_id: "7408",
        name: "Batu Putih",
      },
      {
        id: "740804",
        city_id: "7408",
        name: "Rante Angin",
      },
      {
        id: "740805",
        city_id: "7408",
        name: "Kodeoha",
      },
      {
        id: "740806",
        city_id: "7408",
        name: "Ngapa",
      },
      {
        id: "740807",
        city_id: "7408",
        name: "Wawo",
      },
      {
        id: "740808",
        city_id: "7408",
        name: "Lambai",
      },
      {
        id: "740809",
        city_id: "7408",
        name: "Watunohu",
      },
      {
        id: "740810",
        city_id: "7408",
        name: "Pakue Tengah",
      },
      {
        id: "740811",
        city_id: "7408",
        name: "Pakue Utara",
      },
      {
        id: "740812",
        city_id: "7408",
        name: "Porehu",
      },
      {
        id: "740813",
        city_id: "7408",
        name: "Katoi",
      },
      {
        id: "740814",
        city_id: "7408",
        name: "Tiwu",
      },
      {
        id: "740815",
        city_id: "7408",
        name: "Tolala",
      },
      {
        id: "740901",
        city_id: "7409",
        name: "Asera",
      },
      {
        id: "740902",
        city_id: "7409",
        name: "Wiwirano",
      },
      {
        id: "740903",
        city_id: "7409",
        name: "Langgikima",
      },
      {
        id: "740904",
        city_id: "7409",
        name: "Molawe",
      },
      {
        id: "740905",
        city_id: "7409",
        name: "Lasolo",
      },
      {
        id: "740906",
        city_id: "7409",
        name: "Lembo",
      },
      {
        id: "740907",
        city_id: "7409",
        name: "Sawa",
      },
      {
        id: "740908",
        city_id: "7409",
        name: "Oheo",
      },
      {
        id: "740909",
        city_id: "7409",
        name: "Andowia",
      },
      {
        id: "740910",
        city_id: "7409",
        name: "Motui",
      },
      {
        id: "740911",
        city_id: "7409",
        name: "Wawolesea",
      },
      {
        id: "740912",
        city_id: "7409",
        name: "Lasolo Kepulauan",
      },
      {
        id: "740913",
        city_id: "7409",
        name: "Landawe",
      },
      {
        id: "741001",
        city_id: "7410",
        name: "Kulisusu",
      },
      {
        id: "741002",
        city_id: "7410",
        name: "Kambowa",
      },
      {
        id: "741003",
        city_id: "7410",
        name: "Bonegunu",
      },
      {
        id: "741004",
        city_id: "7410",
        name: "Kulisusu Barat",
      },
      {
        id: "741005",
        city_id: "7410",
        name: "Kulisusu Utara",
      },
      {
        id: "741006",
        city_id: "7410",
        name: "Wakorumba Utara",
      },
      {
        id: "741101",
        city_id: "7411",
        name: "Tirawuta",
      },
      {
        id: "741102",
        city_id: "7411",
        name: "Loea",
      },
      {
        id: "741103",
        city_id: "7411",
        name: "Ladongi",
      },
      {
        id: "741104",
        city_id: "7411",
        name: "Poli Polia",
      },
      {
        id: "741105",
        city_id: "7411",
        name: "Lambandia",
      },
      {
        id: "741106",
        city_id: "7411",
        name: "Lalolae",
      },
      {
        id: "741107",
        city_id: "7411",
        name: "Mowewe",
      },
      {
        id: "741108",
        city_id: "7411",
        name: "Uluiwoi",
      },
      {
        id: "741109",
        city_id: "7411",
        name: "Tinondo",
      },
      {
        id: "741110",
        city_id: "7411",
        name: "Aere",
      },
      {
        id: "741111",
        city_id: "7411",
        name: "Ueesi",
      },
      {
        id: "741112",
        city_id: "7411",
        name: "Dangia",
      },
      {
        id: "741201",
        city_id: "7412",
        name: "Wawonii Barat",
      },
      {
        id: "741202",
        city_id: "7412",
        name: "Wawonii Utara",
      },
      {
        id: "741203",
        city_id: "7412",
        name: "Wawonii Timur Laut",
      },
      {
        id: "741204",
        city_id: "7412",
        name: "Wawonii Timur",
      },
      {
        id: "741205",
        city_id: "7412",
        name: "Wawonii Tenggara",
      },
      {
        id: "741206",
        city_id: "7412",
        name: "Wawonii Selatan",
      },
      {
        id: "741207",
        city_id: "7412",
        name: "Wawonii Tengah",
      },
      {
        id: "741301",
        city_id: "7413",
        name: "Sawerigadi",
      },
      {
        id: "741302",
        city_id: "7413",
        name: "Barangka",
      },
      {
        id: "741303",
        city_id: "7413",
        name: "Lawa",
      },
      {
        id: "741304",
        city_id: "7413",
        name: "Wadaga",
      },
      {
        id: "741305",
        city_id: "7413",
        name: "Tiworo Selatan",
      },
      {
        id: "741306",
        city_id: "7413",
        name: "Maginti",
      },
      {
        id: "741307",
        city_id: "7413",
        name: "Tiworo Tengah",
      },
      {
        id: "741308",
        city_id: "7413",
        name: "Tiworo Utara",
      },
      {
        id: "741309",
        city_id: "7413",
        name: "Tiworo Kepulauan",
      },
      {
        id: "741310",
        city_id: "7413",
        name: "Kusambi",
      },
      {
        id: "741311",
        city_id: "7413",
        name: "Napano Kusambi",
      },
      {
        id: "741401",
        city_id: "7414",
        name: "Lakudo",
      },
      {
        id: "741402",
        city_id: "7414",
        name: "Mawasangka Timur",
      },
      {
        id: "741403",
        city_id: "7414",
        name: "Mawasangka Tengah",
      },
      {
        id: "741404",
        city_id: "7414",
        name: "Mawasangka",
      },
      {
        id: "741405",
        city_id: "7414",
        name: "Talaga Raya",
      },
      {
        id: "741406",
        city_id: "7414",
        name: "Gu",
      },
      {
        id: "741407",
        city_id: "7414",
        name: "Sangia Wambulu",
      },
      {
        id: "741501",
        city_id: "7415",
        name: "Batauga",
      },
      {
        id: "741502",
        city_id: "7415",
        name: "Sampolawa",
      },
      {
        id: "741503",
        city_id: "7415",
        name: "Lapandewa",
      },
      {
        id: "741504",
        city_id: "7415",
        name: "Batu Atas",
      },
      {
        id: "741505",
        city_id: "7415",
        name: "Siompu Barat",
      },
      {
        id: "741506",
        city_id: "7415",
        name: "Siompu",
      },
      {
        id: "741507",
        city_id: "7415",
        name: "Kadatua",
      },
      {
        id: "747101",
        city_id: "7471",
        name: "Mandonga",
      },
      {
        id: "747102",
        city_id: "7471",
        name: "Kendari",
      },
      {
        id: "747103",
        city_id: "7471",
        name: "Baruga",
      },
      {
        id: "747104",
        city_id: "7471",
        name: "Poasia",
      },
      {
        id: "747105",
        city_id: "7471",
        name: "Kendari Barat",
      },
      {
        id: "747106",
        city_id: "7471",
        name: "Abeli",
      },
      {
        id: "747107",
        city_id: "7471",
        name: "Wua-Wua",
      },
      {
        id: "747108",
        city_id: "7471",
        name: "Kadia",
      },
      {
        id: "747109",
        city_id: "7471",
        name: "Puuwatu",
      },
      {
        id: "747110",
        city_id: "7471",
        name: "Kambu",
      },
      {
        id: "747201",
        city_id: "7472",
        name: "Betoambari",
      },
      {
        id: "747202",
        city_id: "7472",
        name: "Wolio",
      },
      {
        id: "747203",
        city_id: "7472",
        name: "Sorawolio",
      },
      {
        id: "747204",
        city_id: "7472",
        name: "Bungi",
      },
      {
        id: "747205",
        city_id: "7472",
        name: "Kokalukuna",
      },
      {
        id: "747206",
        city_id: "7472",
        name: "Murhum",
      },
      {
        id: "747207",
        city_id: "7472",
        name: "Lea-Lea",
      },
      {
        id: "747208",
        city_id: "7472",
        name: "Batupoaro",
      },
      {
        id: "750101",
        city_id: "7501",
        name: "Limboto",
      },
      {
        id: "750102",
        city_id: "7501",
        name: "Telaga",
      },
      {
        id: "750103",
        city_id: "7501",
        name: "Batudaa",
      },
      {
        id: "750104",
        city_id: "7501",
        name: "Tibawa",
      },
      {
        id: "750105",
        city_id: "7501",
        name: "Batudaa Pantai",
      },
      {
        id: "750109",
        city_id: "7501",
        name: "Boliyohuto",
      },
      {
        id: "750110",
        city_id: "7501",
        name: "Telaga Biru",
      },
      {
        id: "750111",
        city_id: "7501",
        name: "Bongomeme",
      },
      {
        id: "750113",
        city_id: "7501",
        name: "Tolangohula",
      },
      {
        id: "750114",
        city_id: "7501",
        name: "Mootilango",
      },
      {
        id: "750116",
        city_id: "7501",
        name: "Pulubala",
      },
      {
        id: "750117",
        city_id: "7501",
        name: "Limboto Barat",
      },
      {
        id: "750118",
        city_id: "7501",
        name: "Tilango",
      },
      {
        id: "750119",
        city_id: "7501",
        name: "Tabongo",
      },
      {
        id: "750120",
        city_id: "7501",
        name: "Biluhu",
      },
      {
        id: "750121",
        city_id: "7501",
        name: "Asparaga",
      },
      {
        id: "750122",
        city_id: "7501",
        name: "Talaga Jaya",
      },
      {
        id: "750123",
        city_id: "7501",
        name: "Bilato",
      },
      {
        id: "750124",
        city_id: "7501",
        name: "Dungaliyo",
      },
      {
        id: "750201",
        city_id: "7502",
        name: "Paguyaman",
      },
      {
        id: "750202",
        city_id: "7502",
        name: "Wonosari",
      },
      {
        id: "750203",
        city_id: "7502",
        name: "Dulupi",
      },
      {
        id: "750204",
        city_id: "7502",
        name: "Tilamuta",
      },
      {
        id: "750205",
        city_id: "7502",
        name: "Mananggu",
      },
      {
        id: "750206",
        city_id: "7502",
        name: "Botumoita",
      },
      {
        id: "750207",
        city_id: "7502",
        name: "Paguyaman Pantai",
      },
      {
        id: "750301",
        city_id: "7503",
        name: "Tapa",
      },
      {
        id: "750302",
        city_id: "7503",
        name: "Kabila",
      },
      {
        id: "750303",
        city_id: "7503",
        name: "Suwawa",
      },
      {
        id: "750304",
        city_id: "7503",
        name: "Bonepantai",
      },
      {
        id: "750305",
        city_id: "7503",
        name: "Bulango Utara",
      },
      {
        id: "750306",
        city_id: "7503",
        name: "Tilongkabila",
      },
      {
        id: "750307",
        city_id: "7503",
        name: "Botupingge",
      },
      {
        id: "750308",
        city_id: "7503",
        name: "Kabila Bone",
      },
      {
        id: "750309",
        city_id: "7503",
        name: "Bone",
      },
      {
        id: "750310",
        city_id: "7503",
        name: "Bone Raya",
      },
      {
        id: "750311",
        city_id: "7503",
        name: "Suwawa Timur",
      },
      {
        id: "750312",
        city_id: "7503",
        name: "Suwawa Selatan",
      },
      {
        id: "750313",
        city_id: "7503",
        name: "Suwawa Tengah",
      },
      {
        id: "750314",
        city_id: "7503",
        name: "Bulango Ulu",
      },
      {
        id: "750315",
        city_id: "7503",
        name: "Bulango Selatan",
      },
      {
        id: "750316",
        city_id: "7503",
        name: "Bulango Timur",
      },
      {
        id: "750317",
        city_id: "7503",
        name: "Bulawa",
      },
      {
        id: "750318",
        city_id: "7503",
        name: "Pinogu",
      },
      {
        id: "750401",
        city_id: "7504",
        name: "Popayato",
      },
      {
        id: "750402",
        city_id: "7504",
        name: "Lemito",
      },
      {
        id: "750403",
        city_id: "7504",
        name: "Randangan",
      },
      {
        id: "750404",
        city_id: "7504",
        name: "Marisa",
      },
      {
        id: "750405",
        city_id: "7504",
        name: "Paguat",
      },
      {
        id: "750406",
        city_id: "7504",
        name: "Patilanggio",
      },
      {
        id: "750407",
        city_id: "7504",
        name: "Taluditi",
      },
      {
        id: "750408",
        city_id: "7504",
        name: "Dengilo",
      },
      {
        id: "750409",
        city_id: "7504",
        name: "Buntulia",
      },
      {
        id: "750410",
        city_id: "7504",
        name: "Duhiadaa",
      },
      {
        id: "750411",
        city_id: "7504",
        name: "Wanggarasi",
      },
      {
        id: "750412",
        city_id: "7504",
        name: "Popayato Timur",
      },
      {
        id: "750413",
        city_id: "7504",
        name: "Popayato Barat",
      },
      {
        id: "750501",
        city_id: "7505",
        name: "Atinggola",
      },
      {
        id: "750502",
        city_id: "7505",
        name: "Kwandang",
      },
      {
        id: "750503",
        city_id: "7505",
        name: "Anggrek",
      },
      {
        id: "750504",
        city_id: "7505",
        name: "Sumalata",
      },
      {
        id: "750505",
        city_id: "7505",
        name: "Tolinggula",
      },
      {
        id: "750506",
        city_id: "7505",
        name: "Gentuma Raya",
      },
      {
        id: "750507",
        city_id: "7505",
        name: "Tomolito",
      },
      {
        id: "750508",
        city_id: "7505",
        name: "Ponelo Kepulauan",
      },
      {
        id: "750509",
        city_id: "7505",
        name: "Monano",
      },
      {
        id: "750510",
        city_id: "7505",
        name: "Biau",
      },
      {
        id: "750511",
        city_id: "7505",
        name: "Sumalata Timur",
      },
      {
        id: "757101",
        city_id: "7571",
        name: "Kota Barat",
      },
      {
        id: "757102",
        city_id: "7571",
        name: "Kota Selatan",
      },
      {
        id: "757103",
        city_id: "7571",
        name: "Kota Utara",
      },
      {
        id: "757104",
        city_id: "7571",
        name: "Dungingi",
      },
      {
        id: "757105",
        city_id: "7571",
        name: "Kota Timur",
      },
      {
        id: "757106",
        city_id: "7571",
        name: "Kota Tengah",
      },
      {
        id: "757107",
        city_id: "7571",
        name: "Sipatana",
      },
      {
        id: "757108",
        city_id: "7571",
        name: "Dumbo Raya",
      },
      {
        id: "757109",
        city_id: "7571",
        name: "Hulonthalangi",
      },
      {
        id: "760101",
        city_id: "7601",
        name: "Bambalamotu",
      },
      {
        id: "760102",
        city_id: "7601",
        name: "Pasangkayu",
      },
      {
        id: "760103",
        city_id: "7601",
        name: "Baras",
      },
      {
        id: "760104",
        city_id: "7601",
        name: "Sarudu",
      },
      {
        id: "760105",
        city_id: "7601",
        name: "Dapurang",
      },
      {
        id: "760106",
        city_id: "7601",
        name: "Duripoku",
      },
      {
        id: "760107",
        city_id: "7601",
        name: "Bulu Taba",
      },
      {
        id: "760108",
        city_id: "7601",
        name: "Tikke Raya",
      },
      {
        id: "760109",
        city_id: "7601",
        name: "Pedongga",
      },
      {
        id: "760110",
        city_id: "7601",
        name: "Bambaira",
      },
      {
        id: "760111",
        city_id: "7601",
        name: "Sarjo",
      },
      {
        id: "760112",
        city_id: "7601",
        name: "Lariang",
      },
      {
        id: "760201",
        city_id: "7602",
        name: "Mamuju",
      },
      {
        id: "760202",
        city_id: "7602",
        name: "Tapalang",
      },
      {
        id: "760203",
        city_id: "7602",
        name: "Kalukku",
      },
      {
        id: "760204",
        city_id: "7602",
        name: "Kalumpang",
      },
      {
        id: "760207",
        city_id: "7602",
        name: "Papalang",
      },
      {
        id: "760208",
        city_id: "7602",
        name: "Sampaga",
      },
      {
        id: "760211",
        city_id: "7602",
        name: "Tommo",
      },
      {
        id: "760212",
        city_id: "7602",
        name: "Simboro dan Kepulauan",
      },
      {
        id: "760213",
        city_id: "7602",
        name: "Tapalang Barat",
      },
      {
        id: "760215",
        city_id: "7602",
        name: "Bonehau",
      },
      {
        id: "760216",
        city_id: "7602",
        name: "Kep. Bala Balakang",
      },
      {
        id: "760301",
        city_id: "7603",
        name: "Mambi",
      },
      {
        id: "760302",
        city_id: "7603",
        name: "Aralle",
      },
      {
        id: "760303",
        city_id: "7603",
        name: "Mamasa",
      },
      {
        id: "760304",
        city_id: "7603",
        name: "Pana",
      },
      {
        id: "760305",
        city_id: "7603",
        name: "Tabulahan",
      },
      {
        id: "760306",
        city_id: "7603",
        name: "Sumarorong",
      },
      {
        id: "760307",
        city_id: "7603",
        name: "Messawa",
      },
      {
        id: "760308",
        city_id: "7603",
        name: "Sesenapadang",
      },
      {
        id: "760309",
        city_id: "7603",
        name: "Tanduk Kalua",
      },
      {
        id: "760310",
        city_id: "7603",
        name: "Tabang",
      },
      {
        id: "760311",
        city_id: "7603",
        name: "Bambang",
      },
      {
        id: "760312",
        city_id: "7603",
        name: "Balla",
      },
      {
        id: "760313",
        city_id: "7603",
        name: "Nosu",
      },
      {
        id: "760314",
        city_id: "7603",
        name: "Tawalian",
      },
      {
        id: "760315",
        city_id: "7603",
        name: "Rantebulahan Timur",
      },
      {
        id: "760316",
        city_id: "7603",
        name: "Buntumalangka",
      },
      {
        id: "760317",
        city_id: "7603",
        name: "Mehalaan",
      },
      {
        id: "760401",
        city_id: "7604",
        name: "Tinambung",
      },
      {
        id: "760402",
        city_id: "7604",
        name: "Campalagian",
      },
      {
        id: "760403",
        city_id: "7604",
        name: "Wonomulyo",
      },
      {
        id: "760404",
        city_id: "7604",
        name: "Polewali",
      },
      {
        id: "760405",
        city_id: "7604",
        name: "Tutar",
      },
      {
        id: "760406",
        city_id: "7604",
        name: "Binuang",
      },
      {
        id: "760407",
        city_id: "7604",
        name: "Tapango",
      },
      {
        id: "760408",
        city_id: "7604",
        name: "Mapilli",
      },
      {
        id: "760409",
        city_id: "7604",
        name: "Matangnga",
      },
      {
        id: "760410",
        city_id: "7604",
        name: "Luyo",
      },
      {
        id: "760411",
        city_id: "7604",
        name: "Limboro",
      },
      {
        id: "760412",
        city_id: "7604",
        name: "Balanipa",
      },
      {
        id: "760413",
        city_id: "7604",
        name: "Anreapi",
      },
      {
        id: "760414",
        city_id: "7604",
        name: "Matakali",
      },
      {
        id: "760415",
        city_id: "7604",
        name: "Allu",
      },
      {
        id: "760416",
        city_id: "7604",
        name: "Bulo",
      },
      {
        id: "760501",
        city_id: "7605",
        name: "Banggae",
      },
      {
        id: "760502",
        city_id: "7605",
        name: "Pamboang",
      },
      {
        id: "760503",
        city_id: "7605",
        name: "Sendana",
      },
      {
        id: "760504",
        city_id: "7605",
        name: "Malunda",
      },
      {
        id: "760505",
        city_id: "7605",
        name: "Ulumanda",
      },
      {
        id: "760506",
        city_id: "7605",
        name: "Tammerodo Sendana",
      },
      {
        id: "760507",
        city_id: "7605",
        name: "Tubo Sendana",
      },
      {
        id: "760508",
        city_id: "7605",
        name: "Banggae Timur",
      },
      {
        id: "760601",
        city_id: "7606",
        name: "Tobadak",
      },
      {
        id: "760602",
        city_id: "7606",
        name: "Pangale",
      },
      {
        id: "760603",
        city_id: "7606",
        name: "Budong-Budong",
      },
      {
        id: "760604",
        city_id: "7606",
        name: "Topoyo",
      },
      {
        id: "760605",
        city_id: "7606",
        name: "Karossa",
      },
      {
        id: "810101",
        city_id: "8101",
        name: "Amahai",
      },
      {
        id: "810102",
        city_id: "8101",
        name: "Teon Nila Serua",
      },
      {
        id: "810106",
        city_id: "8101",
        name: "Seram Utara",
      },
      {
        id: "810109",
        city_id: "8101",
        name: "Banda",
      },
      {
        id: "810111",
        city_id: "8101",
        name: "Tehoru",
      },
      {
        id: "810112",
        city_id: "8101",
        name: "Saparua",
      },
      {
        id: "810113",
        city_id: "8101",
        name: "Pulau Haruku",
      },
      {
        id: "810114",
        city_id: "8101",
        name: "Salahutu",
      },
      {
        id: "810115",
        city_id: "8101",
        name: "Leihitu",
      },
      {
        id: "810116",
        city_id: "8101",
        name: "Nusa Laut",
      },
      {
        id: "810117",
        city_id: "8101",
        name: "Kota Masohi",
      },
      {
        id: "810120",
        city_id: "8101",
        name: "Seram Utara Barat",
      },
      {
        id: "810121",
        city_id: "8101",
        name: "Teluk Elpaputih",
      },
      {
        id: "810122",
        city_id: "8101",
        name: "Leihitu Barat",
      },
      {
        id: "810123",
        city_id: "8101",
        name: "Telutih",
      },
      {
        id: "810124",
        city_id: "8101",
        name: "Seram Utara Timur Seti",
      },
      {
        id: "810125",
        city_id: "8101",
        name: "Seram Utara Timur Kobi",
      },
      {
        id: "810126",
        city_id: "8101",
        name: "Saparua Timur",
      },
      {
        id: "810201",
        city_id: "8102",
        name: "Kei Kecil",
      },
      {
        id: "810203",
        city_id: "8102",
        name: "Kei Besar",
      },
      {
        id: "810204",
        city_id: "8102",
        name: "Kei Besar Selatan",
      },
      {
        id: "810205",
        city_id: "8102",
        name: "Kei Besar Utara Timur",
      },
      {
        id: "810213",
        city_id: "8102",
        name: "Kei Kecil Timur",
      },
      {
        id: "810214",
        city_id: "8102",
        name: "Kei Kecil Barat",
      },
      {
        id: "810215",
        city_id: "8102",
        name: "Manyeuw",
      },
      {
        id: "810216",
        city_id: "8102",
        name: "Hoat Sorbay",
      },
      {
        id: "810217",
        city_id: "8102",
        name: "Kei Besar Utara Barat",
      },
      {
        id: "810218",
        city_id: "8102",
        name: "Kei Besar Selatan Barat",
      },
      {
        id: "810219",
        city_id: "8102",
        name: "Kei Kecil Timur Selatan",
      },
      {
        id: "810301",
        city_id: "8103",
        name: "Tanimbar Selatan",
      },
      {
        id: "810302",
        city_id: "8103",
        name: "Selaru",
      },
      {
        id: "810303",
        city_id: "8103",
        name: "Wer Tamrian",
      },
      {
        id: "810304",
        city_id: "8103",
        name: "Wer Maktian",
      },
      {
        id: "810305",
        city_id: "8103",
        name: "Tanimbar Utara",
      },
      {
        id: "810306",
        city_id: "8103",
        name: "Yaru",
      },
      {
        id: "810307",
        city_id: "8103",
        name: "Wuar Labobar",
      },
      {
        id: "810308",
        city_id: "8103",
        name: "Kormomolin",
      },
      {
        id: "810309",
        city_id: "8103",
        name: "Nirunmas",
      },
      {
        id: "810318",
        city_id: "8103",
        name: "Molu Maru",
      },
      {
        id: "810401",
        city_id: "8104",
        name: "Namlea",
      },
      {
        id: "810402",
        city_id: "8104",
        name: "Air Buaya",
      },
      {
        id: "810403",
        city_id: "8104",
        name: "Waeapo",
      },
      {
        id: "810406",
        city_id: "8104",
        name: "Waplau",
      },
      {
        id: "810410",
        city_id: "8104",
        name: "Batabual",
      },
      {
        id: "810411",
        city_id: "8104",
        name: "Lolong Guba",
      },
      {
        id: "810412",
        city_id: "8104",
        name: "Waelata",
      },
      {
        id: "810413",
        city_id: "8104",
        name: "Fena Leisela",
      },
      {
        id: "810414",
        city_id: "8104",
        name: "Teluk Kaiely",
      },
      {
        id: "810415",
        city_id: "8104",
        name: "Lilialy",
      },
      {
        id: "810501",
        city_id: "8105",
        name: "Bula",
      },
      {
        id: "810502",
        city_id: "8105",
        name: "Seram Timur",
      },
      {
        id: "810503",
        city_id: "8105",
        name: "Werinama",
      },
      {
        id: "810504",
        city_id: "8105",
        name: "Pulau Gorom",
      },
      {
        id: "810505",
        city_id: "8105",
        name: "Wakate",
      },
      {
        id: "810506",
        city_id: "8105",
        name: "Tutuk Tolu",
      },
      {
        id: "810507",
        city_id: "8105",
        name: "Siwalalat",
      },
      {
        id: "810508",
        city_id: "8105",
        name: "Kilmury",
      },
      {
        id: "810509",
        city_id: "8105",
        name: "Pulau Panjang",
      },
      {
        id: "810510",
        city_id: "8105",
        name: "Teor",
      },
      {
        id: "810511",
        city_id: "8105",
        name: "Gorom Timur",
      },
      {
        id: "810512",
        city_id: "8105",
        name: "Bula Barat",
      },
      {
        id: "810513",
        city_id: "8105",
        name: "Kian Darat",
      },
      {
        id: "810514",
        city_id: "8105",
        name: "Siritaun Wida Timur",
      },
      {
        id: "810515",
        city_id: "8105",
        name: "Teluk Waru",
      },
      {
        id: "810601",
        city_id: "8106",
        name: "Kairatu",
      },
      {
        id: "810602",
        city_id: "8106",
        name: "Seram Barat",
      },
      {
        id: "810603",
        city_id: "8106",
        name: "Taniwel",
      },
      {
        id: "810604",
        city_id: "8106",
        name: "Huamual Belakang",
      },
      {
        id: "810605",
        city_id: "8106",
        name: "Amalatu",
      },
      {
        id: "810606",
        city_id: "8106",
        name: "Inamosol",
      },
      {
        id: "810607",
        city_id: "8106",
        name: "Kairatu Barat",
      },
      {
        id: "810608",
        city_id: "8106",
        name: "Huamual",
      },
      {
        id: "810609",
        city_id: "8106",
        name: "Kepulauan Manipa",
      },
      {
        id: "810610",
        city_id: "8106",
        name: "Taniwel Timur",
      },
      {
        id: "810611",
        city_id: "8106",
        name: "Elpaputih",
      },
      {
        id: "810701",
        city_id: "8107",
        name: "Pulau-Pulau Aru",
      },
      {
        id: "810702",
        city_id: "8107",
        name: "Aru Selatan",
      },
      {
        id: "810703",
        city_id: "8107",
        name: "Aru Tengah",
      },
      {
        id: "810704",
        city_id: "8107",
        name: "Aru Utara",
      },
      {
        id: "810705",
        city_id: "8107",
        name: "Aru Utara Timur Batuley",
      },
      {
        id: "810706",
        city_id: "8107",
        name: "Sir-Sir",
      },
      {
        id: "810707",
        city_id: "8107",
        name: "Aru Tengah Timur",
      },
      {
        id: "810708",
        city_id: "8107",
        name: "Aru Tengah Selatan",
      },
      {
        id: "810709",
        city_id: "8107",
        name: "Aru Selatan Timur",
      },
      {
        id: "810710",
        city_id: "8107",
        name: "Aru Selatan Utara",
      },
      {
        id: "810801",
        city_id: "8108",
        name: "Moa Lakor",
      },
      {
        id: "810802",
        city_id: "8108",
        name: "Damer",
      },
      {
        id: "810803",
        city_id: "8108",
        name: "Mndona Hiera",
      },
      {
        id: "810804",
        city_id: "8108",
        name: "Pulau-Pulau Babar",
      },
      {
        id: "810805",
        city_id: "8108",
        name: "Pulau-pulau Babar Timur",
      },
      {
        id: "810806",
        city_id: "8108",
        name: "Wetar",
      },
      {
        id: "810807",
        city_id: "8108",
        name: "Pulau-pulau Terselatan",
      },
      {
        id: "810808",
        city_id: "8108",
        name: "Pulau Leti",
      },
      {
        id: "810809",
        city_id: "8108",
        name: "Pulau Masela",
      },
      {
        id: "810810",
        city_id: "8108",
        name: "Dawelor Dawera",
      },
      {
        id: "810811",
        city_id: "8108",
        name: "Pulau Wetang",
      },
      {
        id: "810812",
        city_id: "8108",
        name: "Pulau Lakor",
      },
      {
        id: "810813",
        city_id: "8108",
        name: "Wetar Utara",
      },
      {
        id: "810814",
        city_id: "8108",
        name: "Wetar Barat",
      },
      {
        id: "810815",
        city_id: "8108",
        name: "Wetar Timur",
      },
      {
        id: "810816",
        city_id: "8108",
        name: "Kepulauan Romang",
      },
      {
        id: "810817",
        city_id: "8108",
        name: "Kisar Utara",
      },
      {
        id: "810901",
        city_id: "8109",
        name: "Namrole",
      },
      {
        id: "810902",
        city_id: "8109",
        name: "Waesama",
      },
      {
        id: "810903",
        city_id: "8109",
        name: "Ambalau",
      },
      {
        id: "810904",
        city_id: "8109",
        name: "Kepala Madan",
      },
      {
        id: "810905",
        city_id: "8109",
        name: "Leksula",
      },
      {
        id: "810906",
        city_id: "8109",
        name: "Fena Fafan",
      },
      {
        id: "817101",
        city_id: "8171",
        name: "Nusaniwe",
      },
      {
        id: "817102",
        city_id: "8171",
        name: "Sirimau",
      },
      {
        id: "817103",
        city_id: "8171",
        name: "Baguala",
      },
      {
        id: "817104",
        city_id: "8171",
        name: "Teluk Ambon",
      },
      {
        id: "817105",
        city_id: "8171",
        name: "Leitimur Selatan",
      },
      {
        id: "817201",
        city_id: "8172",
        name: "Pulau Dullah Utara",
      },
      {
        id: "817202",
        city_id: "8172",
        name: "Pulau Dullah Selatan",
      },
      {
        id: "817203",
        city_id: "8172",
        name: "Tayando Tam",
      },
      {
        id: "817204",
        city_id: "8172",
        name: "Pulau-Pulau Kur",
      },
      {
        id: "817205",
        city_id: "8172",
        name: "Kur Selatan",
      },
      {
        id: "820101",
        city_id: "8201",
        name: "Jailolo",
      },
      {
        id: "820102",
        city_id: "8201",
        name: "Loloda",
      },
      {
        id: "820103",
        city_id: "8201",
        name: "Ibu",
      },
      {
        id: "820104",
        city_id: "8201",
        name: "Sahu",
      },
      {
        id: "820105",
        city_id: "8201",
        name: "Jailolo Selatan",
      },
      {
        id: "820107",
        city_id: "8201",
        name: "Ibu Utara",
      },
      {
        id: "820108",
        city_id: "8201",
        name: "Ibu Selatan",
      },
      {
        id: "820109",
        city_id: "8201",
        name: "Sahu Timur",
      },
      {
        id: "820201",
        city_id: "8202",
        name: "Weda",
      },
      {
        id: "820202",
        city_id: "8202",
        name: "Patani",
      },
      {
        id: "820203",
        city_id: "8202",
        name: "Pulau Gebe",
      },
      {
        id: "820204",
        city_id: "8202",
        name: "Weda Utara",
      },
      {
        id: "820205",
        city_id: "8202",
        name: "Weda Selatan",
      },
      {
        id: "820206",
        city_id: "8202",
        name: "Patani Utara",
      },
      {
        id: "820207",
        city_id: "8202",
        name: "Weda Tengah",
      },
      {
        id: "820208",
        city_id: "8202",
        name: "Patani Barat",
      },
      {
        id: "820209",
        city_id: "8202",
        name: "Weda Timur",
      },
      {
        id: "820210",
        city_id: "8202",
        name: "Patani Timur",
      },
      {
        id: "820304",
        city_id: "8203",
        name: "Galela",
      },
      {
        id: "820305",
        city_id: "8203",
        name: "Tobelo",
      },
      {
        id: "820306",
        city_id: "8203",
        name: "Tobelo Selatan",
      },
      {
        id: "820307",
        city_id: "8203",
        name: "Kao",
      },
      {
        id: "820308",
        city_id: "8203",
        name: "Malifut",
      },
      {
        id: "820309",
        city_id: "8203",
        name: "Loloda Utara",
      },
      {
        id: "820310",
        city_id: "8203",
        name: "Tobelo Utara",
      },
      {
        id: "820311",
        city_id: "8203",
        name: "Tobelo Tengah",
      },
      {
        id: "820312",
        city_id: "8203",
        name: "Tobelo Timur",
      },
      {
        id: "820313",
        city_id: "8203",
        name: "Tobelo Barat",
      },
      {
        id: "820314",
        city_id: "8203",
        name: "Galela Barat",
      },
      {
        id: "820315",
        city_id: "8203",
        name: "Galela Utara",
      },
      {
        id: "820316",
        city_id: "8203",
        name: "Galela Selatan",
      },
      {
        id: "820319",
        city_id: "8203",
        name: "Loloda Kepulauan",
      },
      {
        id: "820320",
        city_id: "8203",
        name: "Kao Utara",
      },
      {
        id: "820321",
        city_id: "8203",
        name: "Kao Barat",
      },
      {
        id: "820322",
        city_id: "8203",
        name: "Kao Teluk",
      },
      {
        id: "820401",
        city_id: "8204",
        name: "Pulau Makian",
      },
      {
        id: "820402",
        city_id: "8204",
        name: "Kayoa",
      },
      {
        id: "820403",
        city_id: "8204",
        name: "Gane Timur",
      },
      {
        id: "820404",
        city_id: "8204",
        name: "Gane Barat",
      },
      {
        id: "820405",
        city_id: "8204",
        name: "Obi Selatan",
      },
      {
        id: "820406",
        city_id: "8204",
        name: "Obi",
      },
      {
        id: "820407",
        city_id: "8204",
        name: "Bacan Timur",
      },
      {
        id: "820408",
        city_id: "8204",
        name: "Bacan",
      },
      {
        id: "820409",
        city_id: "8204",
        name: "Bacan Barat",
      },
      {
        id: "820410",
        city_id: "8204",
        name: "Makian Barat",
      },
      {
        id: "820411",
        city_id: "8204",
        name: "Kayoa Barat",
      },
      {
        id: "820412",
        city_id: "8204",
        name: "Kayoa Selatan",
      },
      {
        id: "820413",
        city_id: "8204",
        name: "Kayoa Utara",
      },
      {
        id: "820414",
        city_id: "8204",
        name: "Bacan Barat Utara",
      },
      {
        id: "820415",
        city_id: "8204",
        name: "Kasiruta Barat",
      },
      {
        id: "820416",
        city_id: "8204",
        name: "Kasiruta Timur",
      },
      {
        id: "820417",
        city_id: "8204",
        name: "Bacan Selatan",
      },
      {
        id: "820418",
        city_id: "8204",
        name: "Kepulauan Botanglomang",
      },
      {
        id: "820419",
        city_id: "8204",
        name: "Mandioli Selatan",
      },
      {
        id: "820420",
        city_id: "8204",
        name: "Mandioli Utara",
      },
      {
        id: "820421",
        city_id: "8204",
        name: "Bacan Timur Selatan",
      },
      {
        id: "820422",
        city_id: "8204",
        name: "Bacan Timur Tengah",
      },
      {
        id: "820423",
        city_id: "8204",
        name: "Gane Barat Selatan",
      },
      {
        id: "820424",
        city_id: "8204",
        name: "Gane Barat Utara",
      },
      {
        id: "820425",
        city_id: "8204",
        name: "Kepulauan Joronga",
      },
      {
        id: "820426",
        city_id: "8204",
        name: "Gane Timur Selatan",
      },
      {
        id: "820427",
        city_id: "8204",
        name: "Gane Timur Tengah",
      },
      {
        id: "820428",
        city_id: "8204",
        name: "Obi Barat",
      },
      {
        id: "820429",
        city_id: "8204",
        name: "Obi Timur",
      },
      {
        id: "820430",
        city_id: "8204",
        name: "Obi Utara",
      },
      {
        id: "820501",
        city_id: "8205",
        name: "Mangoli Timur",
      },
      {
        id: "820502",
        city_id: "8205",
        name: "Sanana",
      },
      {
        id: "820503",
        city_id: "8205",
        name: "Sulabesi Barat",
      },
      {
        id: "820506",
        city_id: "8205",
        name: "Mangoli Barat",
      },
      {
        id: "820507",
        city_id: "8205",
        name: "Sulabesi Tengah",
      },
      {
        id: "820508",
        city_id: "8205",
        name: "Sulabesi Timur",
      },
      {
        id: "820509",
        city_id: "8205",
        name: "Sulabesi Selatan",
      },
      {
        id: "820510",
        city_id: "8205",
        name: "Mangoli Utara Timur",
      },
      {
        id: "820511",
        city_id: "8205",
        name: "Mangoli Tengah",
      },
      {
        id: "820512",
        city_id: "8205",
        name: "Mangoli Selatan",
      },
      {
        id: "820513",
        city_id: "8205",
        name: "Mangoli Utara",
      },
      {
        id: "820518",
        city_id: "8205",
        name: "Sanana Utara",
      },
      {
        id: "820601",
        city_id: "8206",
        name: "Wasile",
      },
      {
        id: "820602",
        city_id: "8206",
        name: "Maba",
      },
      {
        id: "820603",
        city_id: "8206",
        name: "Maba Selatan",
      },
      {
        id: "820604",
        city_id: "8206",
        name: "Wasile Selatan",
      },
      {
        id: "820605",
        city_id: "8206",
        name: "Wasile Tengah",
      },
      {
        id: "820606",
        city_id: "8206",
        name: "Wasile Utara",
      },
      {
        id: "820607",
        city_id: "8206",
        name: "Wasile Timur",
      },
      {
        id: "820608",
        city_id: "8206",
        name: "Maba Tengah",
      },
      {
        id: "820609",
        city_id: "8206",
        name: "Maba Utara",
      },
      {
        id: "820610",
        city_id: "8206",
        name: "Kota Maba",
      },
      {
        id: "820701",
        city_id: "8207",
        name: "Morotai Selatan",
      },
      {
        id: "820702",
        city_id: "8207",
        name: "Morotai Selatan Barat",
      },
      {
        id: "820703",
        city_id: "8207",
        name: "Morotai Jaya",
      },
      {
        id: "820704",
        city_id: "8207",
        name: "Morotai Utara",
      },
      {
        id: "820705",
        city_id: "8207",
        name: "Morotai Timur",
      },
      {
        id: "820801",
        city_id: "8208",
        name: "Taliabu Barat",
      },
      {
        id: "820802",
        city_id: "8208",
        name: "Taliabu Barat Laut",
      },
      {
        id: "820803",
        city_id: "8208",
        name: "Lede",
      },
      {
        id: "820804",
        city_id: "8208",
        name: "Taliabu Utara",
      },
      {
        id: "820805",
        city_id: "8208",
        name: "Taliabu Timur",
      },
      {
        id: "820806",
        city_id: "8208",
        name: "Taliabu Timur Selatan",
      },
      {
        id: "820807",
        city_id: "8208",
        name: "Taliabu Selatan",
      },
      {
        id: "820808",
        city_id: "8208",
        name: "Tabona",
      },
      {
        id: "827101",
        city_id: "8271",
        name: "Pulau Ternate",
      },
      {
        id: "827102",
        city_id: "8271",
        name: "Kota Ternate Selatan",
      },
      {
        id: "827103",
        city_id: "8271",
        name: "Kota Ternate Utara",
      },
      {
        id: "827104",
        city_id: "8271",
        name: "Moti",
      },
      {
        id: "827105",
        city_id: "8271",
        name: "Pulau Batang Dua",
      },
      {
        id: "827106",
        city_id: "8271",
        name: "Kota Ternate Tengah",
      },
      {
        id: "827107",
        city_id: "8271",
        name: "Pulau Hiri",
      },
      {
        id: "827108",
        city_id: "8271",
        name: "Ternate Barat",
      },
      {
        id: "827201",
        city_id: "8272",
        name: "Tidore",
      },
      {
        id: "827202",
        city_id: "8272",
        name: "Oba Utara",
      },
      {
        id: "827203",
        city_id: "8272",
        name: "Oba",
      },
      {
        id: "827204",
        city_id: "8272",
        name: "Tidore Selatan",
      },
      {
        id: "827205",
        city_id: "8272",
        name: "Tidore Utara",
      },
      {
        id: "827206",
        city_id: "8272",
        name: "Oba Tengah",
      },
      {
        id: "827207",
        city_id: "8272",
        name: "Oba Selatan",
      },
      {
        id: "827208",
        city_id: "8272",
        name: "Tidore Timur",
      },
      {
        id: "910101",
        city_id: "9101",
        name: "Merauke",
      },
      {
        id: "910102",
        city_id: "9101",
        name: "Muting",
      },
      {
        id: "910103",
        city_id: "9101",
        name: "Okaba",
      },
      {
        id: "910104",
        city_id: "9101",
        name: "Kimaam",
      },
      {
        id: "910105",
        city_id: "9101",
        name: "Semangga",
      },
      {
        id: "910106",
        city_id: "9101",
        name: "Tanah Miring",
      },
      {
        id: "910107",
        city_id: "9101",
        name: "Jagebob",
      },
      {
        id: "910108",
        city_id: "9101",
        name: "Sota",
      },
      {
        id: "910109",
        city_id: "9101",
        name: "Ulilin",
      },
      {
        id: "910110",
        city_id: "9101",
        name: "Elikobal",
      },
      {
        id: "910111",
        city_id: "9101",
        name: "Kurik",
      },
      {
        id: "910112",
        city_id: "9101",
        name: "Naukenjerai",
      },
      {
        id: "910113",
        city_id: "9101",
        name: "Animha",
      },
      {
        id: "910114",
        city_id: "9101",
        name: "Malind",
      },
      {
        id: "910115",
        city_id: "9101",
        name: "Tubang",
      },
      {
        id: "910116",
        city_id: "9101",
        name: "Ngguti",
      },
      {
        id: "910117",
        city_id: "9101",
        name: "Kaptel",
      },
      {
        id: "910118",
        city_id: "9101",
        name: "Tabonji",
      },
      {
        id: "910119",
        city_id: "9101",
        name: "Waan",
      },
      {
        id: "910120",
        city_id: "9101",
        name: "Ilwayab",
      },
      {
        id: "910201",
        city_id: "9102",
        name: "Wamena",
      },
      {
        id: "910203",
        city_id: "9102",
        name: "Kurulu",
      },
      {
        id: "910204",
        city_id: "9102",
        name: "Asologaima",
      },
      {
        id: "910212",
        city_id: "9102",
        name: "Hubikosi",
      },
      {
        id: "910215",
        city_id: "9102",
        name: "Bolakme",
      },
      {
        id: "910225",
        city_id: "9102",
        name: "Walelagama",
      },
      {
        id: "910227",
        city_id: "9102",
        name: "Musatfak",
      },
      {
        id: "910228",
        city_id: "9102",
        name: "Wolo",
      },
      {
        id: "910229",
        city_id: "9102",
        name: "Asolokobal",
      },
      {
        id: "910234",
        city_id: "9102",
        name: "Pelebaga",
      },
      {
        id: "910235",
        city_id: "9102",
        name: "Yalengga",
      },
      {
        id: "910240",
        city_id: "9102",
        name: "Trikora",
      },
      {
        id: "910241",
        city_id: "9102",
        name: "Napua",
      },
      {
        id: "910242",
        city_id: "9102",
        name: "Walaik",
      },
      {
        id: "910243",
        city_id: "9102",
        name: "Wouma",
      },
      {
        id: "910244",
        city_id: "9102",
        name: "Hubikiak",
      },
      {
        id: "910245",
        city_id: "9102",
        name: "Ibele",
      },
      {
        id: "910246",
        city_id: "9102",
        name: "Taelarek",
      },
      {
        id: "910247",
        city_id: "9102",
        name: "Itlay Hisage",
      },
      {
        id: "910248",
        city_id: "9102",
        name: "Siepkosi",
      },
      {
        id: "910249",
        city_id: "9102",
        name: "Usilimo",
      },
      {
        id: "910250",
        city_id: "9102",
        name: "Wita Waya",
      },
      {
        id: "910251",
        city_id: "9102",
        name: "Libarek",
      },
      {
        id: "910252",
        city_id: "9102",
        name: "Wadangku",
      },
      {
        id: "910253",
        city_id: "9102",
        name: "Pisugi",
      },
      {
        id: "910254",
        city_id: "9102",
        name: "Koragi",
      },
      {
        id: "910255",
        city_id: "9102",
        name: "Tagime",
      },
      {
        id: "910256",
        city_id: "9102",
        name: "Molagalome",
      },
      {
        id: "910257",
        city_id: "9102",
        name: "Tagineri",
      },
      {
        id: "910258",
        city_id: "9102",
        name: "Silo Karno Doga",
      },
      {
        id: "910259",
        city_id: "9102",
        name: "Piramid",
      },
      {
        id: "910260",
        city_id: "9102",
        name: "Muliama",
      },
      {
        id: "910261",
        city_id: "9102",
        name: "Bugi",
      },
      {
        id: "910262",
        city_id: "9102",
        name: "Bpiri",
      },
      {
        id: "910263",
        city_id: "9102",
        name: "Welesi",
      },
      {
        id: "910264",
        city_id: "9102",
        name: "Asotipo",
      },
      {
        id: "910265",
        city_id: "9102",
        name: "Maima",
      },
      {
        id: "910266",
        city_id: "9102",
        name: "Popugoba",
      },
      {
        id: "910267",
        city_id: "9102",
        name: "Wame",
      },
      {
        id: "910268",
        city_id: "9102",
        name: "Wesaput",
      },
      {
        id: "910301",
        city_id: "9103",
        name: "Sentani",
      },
      {
        id: "910302",
        city_id: "9103",
        name: "Sentani Timur",
      },
      {
        id: "910303",
        city_id: "9103",
        name: "Depapre",
      },
      {
        id: "910304",
        city_id: "9103",
        name: "Sentani Barat",
      },
      {
        id: "910305",
        city_id: "9103",
        name: "Kemtuk",
      },
      {
        id: "910306",
        city_id: "9103",
        name: "Kemtuk Gresi",
      },
      {
        id: "910307",
        city_id: "9103",
        name: "Nimboran",
      },
      {
        id: "910308",
        city_id: "9103",
        name: "Nimbokrang",
      },
      {
        id: "910309",
        city_id: "9103",
        name: "Unurum Guay",
      },
      {
        id: "910310",
        city_id: "9103",
        name: "Demta",
      },
      {
        id: "910311",
        city_id: "9103",
        name: "Kaureh",
      },
      {
        id: "910312",
        city_id: "9103",
        name: "Ebungfao",
      },
      {
        id: "910313",
        city_id: "9103",
        name: "Waibu",
      },
      {
        id: "910314",
        city_id: "9103",
        name: "Nambluong",
      },
      {
        id: "910315",
        city_id: "9103",
        name: "Yapsi",
      },
      {
        id: "910316",
        city_id: "9103",
        name: "Airu",
      },
      {
        id: "910317",
        city_id: "9103",
        name: "Raveni Rara",
      },
      {
        id: "910318",
        city_id: "9103",
        name: "Gresi Selatan",
      },
      {
        id: "910319",
        city_id: "9103",
        name: "Yokari",
      },
      {
        id: "910401",
        city_id: "9104",
        name: "Nabire",
      },
      {
        id: "910402",
        city_id: "9104",
        name: "Napan",
      },
      {
        id: "910403",
        city_id: "9104",
        name: "Yaur",
      },
      {
        id: "910406",
        city_id: "9104",
        name: "Uwapa",
      },
      {
        id: "910407",
        city_id: "9104",
        name: "Wanggar",
      },
      {
        id: "910410",
        city_id: "9104",
        name: "Siriwo",
      },
      {
        id: "910411",
        city_id: "9104",
        name: "Makimi",
      },
      {
        id: "910412",
        city_id: "9104",
        name: "Teluk Umar",
      },
      {
        id: "910416",
        city_id: "9104",
        name: "Teluk Kimi",
      },
      {
        id: "910417",
        city_id: "9104",
        name: "Yaro",
      },
      {
        id: "910421",
        city_id: "9104",
        name: "Wapoga",
      },
      {
        id: "910422",
        city_id: "9104",
        name: "Nabire Barat",
      },
      {
        id: "910423",
        city_id: "9104",
        name: "Moora",
      },
      {
        id: "910424",
        city_id: "9104",
        name: "Dipa",
      },
      {
        id: "910425",
        city_id: "9104",
        name: "Menou",
      },
      {
        id: "910501",
        city_id: "9105",
        name: "Yapen Selatan",
      },
      {
        id: "910502",
        city_id: "9105",
        name: "Yapen Barat",
      },
      {
        id: "910503",
        city_id: "9105",
        name: "Yapen Timur",
      },
      {
        id: "910504",
        city_id: "9105",
        name: "Angkaisera",
      },
      {
        id: "910505",
        city_id: "9105",
        name: "Poom",
      },
      {
        id: "910506",
        city_id: "9105",
        name: "Kosiwo",
      },
      {
        id: "910507",
        city_id: "9105",
        name: "Yapen Utara",
      },
      {
        id: "910508",
        city_id: "9105",
        name: "Raimbawi",
      },
      {
        id: "910509",
        city_id: "9105",
        name: "Teluk Ampimoi",
      },
      {
        id: "910510",
        city_id: "9105",
        name: "Kepulauan Ambai",
      },
      {
        id: "910511",
        city_id: "9105",
        name: "Wonawa",
      },
      {
        id: "910512",
        city_id: "9105",
        name: "Windesi",
      },
      {
        id: "910513",
        city_id: "9105",
        name: "Pulau Kurudu",
      },
      {
        id: "910514",
        city_id: "9105",
        name: "Pulau Yerui",
      },
      {
        id: "910515",
        city_id: "9105",
        name: "Anotaurei",
      },
      {
        id: "910516",
        city_id: "9105",
        name: "Yawakukat",
      },
      {
        id: "910601",
        city_id: "9106",
        name: "Biak Kota",
      },
      {
        id: "910602",
        city_id: "9106",
        name: "Biak Utara",
      },
      {
        id: "910603",
        city_id: "9106",
        name: "Biak Timur",
      },
      {
        id: "910604",
        city_id: "9106",
        name: "Numfor Barat",
      },
      {
        id: "910605",
        city_id: "9106",
        name: "Numfor Timur",
      },
      {
        id: "910608",
        city_id: "9106",
        name: "Biak Barat",
      },
      {
        id: "910609",
        city_id: "9106",
        name: "Warsa",
      },
      {
        id: "910610",
        city_id: "9106",
        name: "Padaido",
      },
      {
        id: "910611",
        city_id: "9106",
        name: "Yendidori",
      },
      {
        id: "910612",
        city_id: "9106",
        name: "Samofa",
      },
      {
        id: "910613",
        city_id: "9106",
        name: "Yawosi",
      },
      {
        id: "910614",
        city_id: "9106",
        name: "Andey",
      },
      {
        id: "910615",
        city_id: "9106",
        name: "Swandiwe",
      },
      {
        id: "910616",
        city_id: "9106",
        name: "Bruyadori",
      },
      {
        id: "910617",
        city_id: "9106",
        name: "Orkeri",
      },
      {
        id: "910618",
        city_id: "9106",
        name: "Poiru",
      },
      {
        id: "910619",
        city_id: "9106",
        name: "Aimando Padaido",
      },
      {
        id: "910620",
        city_id: "9106",
        name: "Oridek",
      },
      {
        id: "910621",
        city_id: "9106",
        name: "Bondifuar",
      },
      {
        id: "910701",
        city_id: "9107",
        name: "Mulia",
      },
      {
        id: "910703",
        city_id: "9107",
        name: "Ilu",
      },
      {
        id: "910706",
        city_id: "9107",
        name: "Fawi",
      },
      {
        id: "910707",
        city_id: "9107",
        name: "Mewoluk",
      },
      {
        id: "910708",
        city_id: "9107",
        name: "Yamo",
      },
      {
        id: "910710",
        city_id: "9107",
        name: "Nume",
      },
      {
        id: "910711",
        city_id: "9107",
        name: "Torere",
      },
      {
        id: "910712",
        city_id: "9107",
        name: "Tingginambut",
      },
      {
        id: "910717",
        city_id: "9107",
        name: "Pagaleme",
      },
      {
        id: "910718",
        city_id: "9107",
        name: "Gurage",
      },
      {
        id: "910719",
        city_id: "9107",
        name: "Irimuli",
      },
      {
        id: "910720",
        city_id: "9107",
        name: "Muara",
      },
      {
        id: "910721",
        city_id: "9107",
        name: "Ilamburawi",
      },
      {
        id: "910722",
        city_id: "9107",
        name: "Yambi",
      },
      {
        id: "910723",
        city_id: "9107",
        name: "Lumo",
      },
      {
        id: "910724",
        city_id: "9107",
        name: "Molanikime",
      },
      {
        id: "910725",
        city_id: "9107",
        name: "Dokome",
      },
      {
        id: "910726",
        city_id: "9107",
        name: "Kalome",
      },
      {
        id: "910727",
        city_id: "9107",
        name: "Wanwi",
      },
      {
        id: "910728",
        city_id: "9107",
        name: "Yamoneri",
      },
      {
        id: "910729",
        city_id: "9107",
        name: "Waegi",
      },
      {
        id: "910730",
        city_id: "9107",
        name: "Nioga",
      },
      {
        id: "910731",
        city_id: "9107",
        name: "Gubume",
      },
      {
        id: "910732",
        city_id: "9107",
        name: "Taganombak",
      },
      {
        id: "910733",
        city_id: "9107",
        name: "Dagai",
      },
      {
        id: "910734",
        city_id: "9107",
        name: "Kiyage",
      },
      {
        id: "910801",
        city_id: "9108",
        name: "Paniai Timur",
      },
      {
        id: "910802",
        city_id: "9108",
        name: "Paniai Barat",
      },
      {
        id: "910804",
        city_id: "9108",
        name: "Aradide",
      },
      {
        id: "910807",
        city_id: "9108",
        name: "Bogabaida",
      },
      {
        id: "910809",
        city_id: "9108",
        name: "Bibida",
      },
      {
        id: "910812",
        city_id: "9108",
        name: "Dumadama",
      },
      {
        id: "910813",
        city_id: "9108",
        name: "Siriwo",
      },
      {
        id: "910819",
        city_id: "9108",
        name: "Kebo",
      },
      {
        id: "910820",
        city_id: "9108",
        name: "Yatamo",
      },
      {
        id: "910821",
        city_id: "9108",
        name: "Ekadide",
      },
      {
        id: "910822",
        city_id: "9108",
        name: "Wegee Muka",
      },
      {
        id: "910823",
        city_id: "9108",
        name: "Wegee Bino",
      },
      {
        id: "910824",
        city_id: "9108",
        name: "Pugo Dagi",
      },
      {
        id: "910825",
        city_id: "9108",
        name: "Muye",
      },
      {
        id: "910826",
        city_id: "9108",
        name: "Nakama",
      },
      {
        id: "910827",
        city_id: "9108",
        name: "Teluk Deya",
      },
      {
        id: "910828",
        city_id: "9108",
        name: "Yagai",
      },
      {
        id: "910829",
        city_id: "9108",
        name: "Youtadi",
      },
      {
        id: "910830",
        city_id: "9108",
        name: "Baya Biru",
      },
      {
        id: "910831",
        city_id: "9108",
        name: "Deiyai Miyo",
      },
      {
        id: "910832",
        city_id: "9108",
        name: "Dogomo",
      },
      {
        id: "910833",
        city_id: "9108",
        name: "Aweida",
      },
      {
        id: "910834",
        city_id: "9108",
        name: "Topiyai",
      },
      {
        id: "910901",
        city_id: "9109",
        name: "Mimika Baru",
      },
      {
        id: "910902",
        city_id: "9109",
        name: "Agimuga",
      },
      {
        id: "910903",
        city_id: "9109",
        name: "Mimika Timur",
      },
      {
        id: "910904",
        city_id: "9109",
        name: "Mimika Barat",
      },
      {
        id: "910905",
        city_id: "9109",
        name: "Jita",
      },
      {
        id: "910906",
        city_id: "9109",
        name: "Jila",
      },
      {
        id: "910907",
        city_id: "9109",
        name: "Mimika Timur Jauh",
      },
      {
        id: "910908",
        city_id: "9109",
        name: "Mimika Tengah",
      },
      {
        id: "910909",
        city_id: "9109",
        name: "Kuala Kencana",
      },
      {
        id: "910910",
        city_id: "9109",
        name: "Tembagapura",
      },
      {
        id: "910911",
        city_id: "9109",
        name: "Mimika Barat Jauh",
      },
      {
        id: "910912",
        city_id: "9109",
        name: "Mimika Barat Tengah",
      },
      {
        id: "910913",
        city_id: "9109",
        name: "Kwamki Narama",
      },
      {
        id: "910914",
        city_id: "9109",
        name: "Hoya",
      },
      {
        id: "910915",
        city_id: "9109",
        name: "Iwaka",
      },
      {
        id: "910916",
        city_id: "9109",
        name: "Wania",
      },
      {
        id: "910917",
        city_id: "9109",
        name: "Amar",
      },
      {
        id: "910918",
        city_id: "9109",
        name: "Alama",
      },
      {
        id: "911001",
        city_id: "9110",
        name: "Sarmi",
      },
      {
        id: "911002",
        city_id: "9110",
        name: "Tor Atas",
      },
      {
        id: "911003",
        city_id: "9110",
        name: "Pantai Barat",
      },
      {
        id: "911004",
        city_id: "9110",
        name: "Pantai Timur",
      },
      {
        id: "911005",
        city_id: "9110",
        name: "Bonggo",
      },
      {
        id: "911009",
        city_id: "9110",
        name: "Apawer Hulu",
      },
      {
        id: "911012",
        city_id: "9110",
        name: "Sarmi Selatan",
      },
      {
        id: "911013",
        city_id: "9110",
        name: "Sarmi Timur",
      },
      {
        id: "911014",
        city_id: "9110",
        name: "Pantai Timur Bagian Barat",
      },
      {
        id: "911015",
        city_id: "9110",
        name: "Bonggo Timur",
      },
      {
        id: "911101",
        city_id: "9111",
        name: "Waris",
      },
      {
        id: "911102",
        city_id: "9111",
        name: "Arso",
      },
      {
        id: "911103",
        city_id: "9111",
        name: "Senggi",
      },
      {
        id: "911104",
        city_id: "9111",
        name: "Web",
      },
      {
        id: "911105",
        city_id: "9111",
        name: "Skanto",
      },
      {
        id: "911106",
        city_id: "9111",
        name: "Arso Timur",
      },
      {
        id: "911107",
        city_id: "9111",
        name: "Towe",
      },
      {
        id: "911108",
        city_id: "9111",
        name: "Arso Barat",
      },
      {
        id: "911109",
        city_id: "9111",
        name: "Mannem",
      },
      {
        id: "911110",
        city_id: "9111",
        name: "Yaffi",
      },
      {
        id: "911111",
        city_id: "9111",
        name: "Kaisenar",
      },
      {
        id: "911201",
        city_id: "9112",
        name: "Oksibil",
      },
      {
        id: "911202",
        city_id: "9112",
        name: "Kiwirok",
      },
      {
        id: "911203",
        city_id: "9112",
        name: "Okbibab",
      },
      {
        id: "911204",
        city_id: "9112",
        name: "Iwur",
      },
      {
        id: "911205",
        city_id: "9112",
        name: "Batom",
      },
      {
        id: "911206",
        city_id: "9112",
        name: "Borme",
      },
      {
        id: "911207",
        city_id: "9112",
        name: "Kiwirok Timur",
      },
      {
        id: "911208",
        city_id: "9112",
        name: "Aboy",
      },
      {
        id: "911209",
        city_id: "9112",
        name: "Pepera",
      },
      {
        id: "911210",
        city_id: "9112",
        name: "Bime",
      },
      {
        id: "911211",
        city_id: "9112",
        name: "Alemsom",
      },
      {
        id: "911212",
        city_id: "9112",
        name: "Okbape",
      },
      {
        id: "911213",
        city_id: "9112",
        name: "Kalomdol",
      },
      {
        id: "911214",
        city_id: "9112",
        name: "Oksop",
      },
      {
        id: "911215",
        city_id: "9112",
        name: "Serambakon",
      },
      {
        id: "911216",
        city_id: "9112",
        name: "Ok Aom",
      },
      {
        id: "911217",
        city_id: "9112",
        name: "Kawor",
      },
      {
        id: "911218",
        city_id: "9112",
        name: "Awinbon",
      },
      {
        id: "911219",
        city_id: "9112",
        name: "Tarup",
      },
      {
        id: "911220",
        city_id: "9112",
        name: "Okhika",
      },
      {
        id: "911221",
        city_id: "9112",
        name: "Oksamol",
      },
      {
        id: "911222",
        city_id: "9112",
        name: "Oklip",
      },
      {
        id: "911223",
        city_id: "9112",
        name: "Okbemtau",
      },
      {
        id: "911224",
        city_id: "9112",
        name: "Oksebang",
      },
      {
        id: "911225",
        city_id: "9112",
        name: "Okbab",
      },
      {
        id: "911226",
        city_id: "9112",
        name: "Batani",
      },
      {
        id: "911227",
        city_id: "9112",
        name: "Weime",
      },
      {
        id: "911228",
        city_id: "9112",
        name: "Murkim",
      },
      {
        id: "911229",
        city_id: "9112",
        name: "Mofinop",
      },
      {
        id: "911230",
        city_id: "9112",
        name: "Jetfa",
      },
      {
        id: "911231",
        city_id: "9112",
        name: "Teiraplu",
      },
      {
        id: "911232",
        city_id: "9112",
        name: "Eipumek",
      },
      {
        id: "911233",
        city_id: "9112",
        name: "Pamek",
      },
      {
        id: "911234",
        city_id: "9112",
        name: "Nongme",
      },
      {
        id: "911301",
        city_id: "9113",
        name: "Kurima",
      },
      {
        id: "911302",
        city_id: "9113",
        name: "Anggruk",
      },
      {
        id: "911303",
        city_id: "9113",
        name: "Ninia",
      },
      {
        id: "911306",
        city_id: "9113",
        name: "Silimo",
      },
      {
        id: "911307",
        city_id: "9113",
        name: "Samenage",
      },
      {
        id: "911308",
        city_id: "9113",
        name: "Nalca",
      },
      {
        id: "911309",
        city_id: "9113",
        name: "Dekai",
      },
      {
        id: "911310",
        city_id: "9113",
        name: "Obio",
      },
      {
        id: "911311",
        city_id: "9113",
        name: "Suru Suru",
      },
      {
        id: "911312",
        city_id: "9113",
        name: "Wusama",
      },
      {
        id: "911313",
        city_id: "9113",
        name: "Amuma",
      },
      {
        id: "911314",
        city_id: "9113",
        name: "Musaik",
      },
      {
        id: "911315",
        city_id: "9113",
        name: "Pasema",
      },
      {
        id: "911316",
        city_id: "9113",
        name: "Hogio",
      },
      {
        id: "911317",
        city_id: "9113",
        name: "Mugi",
      },
      {
        id: "911318",
        city_id: "9113",
        name: "Soba",
      },
      {
        id: "911319",
        city_id: "9113",
        name: "Werima",
      },
      {
        id: "911320",
        city_id: "9113",
        name: "Tangma",
      },
      {
        id: "911321",
        city_id: "9113",
        name: "Ukha",
      },
      {
        id: "911322",
        city_id: "9113",
        name: "Panggema",
      },
      {
        id: "911323",
        city_id: "9113",
        name: "Kosarek",
      },
      {
        id: "911324",
        city_id: "9113",
        name: "Nipsan",
      },
      {
        id: "911325",
        city_id: "9113",
        name: "Ubahak",
      },
      {
        id: "911326",
        city_id: "9113",
        name: "Pronggoli",
      },
      {
        id: "911327",
        city_id: "9113",
        name: "Walma",
      },
      {
        id: "911328",
        city_id: "9113",
        name: "Yahuliambut",
      },
      {
        id: "911329",
        city_id: "9113",
        name: "Hereapini",
      },
      {
        id: "911330",
        city_id: "9113",
        name: "Ubalihi",
      },
      {
        id: "911331",
        city_id: "9113",
        name: "Talambo",
      },
      {
        id: "911332",
        city_id: "9113",
        name: "Puldama",
      },
      {
        id: "911333",
        city_id: "9113",
        name: "Endomen",
      },
      {
        id: "911334",
        city_id: "9113",
        name: "Kona",
      },
      {
        id: "911335",
        city_id: "9113",
        name: "Dirwemna",
      },
      {
        id: "911336",
        city_id: "9113",
        name: "Holuon",
      },
      {
        id: "911337",
        city_id: "9113",
        name: "Lolat",
      },
      {
        id: "911338",
        city_id: "9113",
        name: "Soloikma",
      },
      {
        id: "911339",
        city_id: "9113",
        name: "Sela",
      },
      {
        id: "911340",
        city_id: "9113",
        name: "Korupun",
      },
      {
        id: "911341",
        city_id: "9113",
        name: "Langda",
      },
      {
        id: "911342",
        city_id: "9113",
        name: "Bomela",
      },
      {
        id: "911343",
        city_id: "9113",
        name: "Suntamon",
      },
      {
        id: "911344",
        city_id: "9113",
        name: "Seredela",
      },
      {
        id: "911345",
        city_id: "9113",
        name: "Sobaham",
      },
      {
        id: "911346",
        city_id: "9113",
        name: "Kabianggama",
      },
      {
        id: "911347",
        city_id: "9113",
        name: "Kwelemdua",
      },
      {
        id: "911348",
        city_id: "9113",
        name: "Kwikma",
      },
      {
        id: "911349",
        city_id: "9113",
        name: "Hilipuk",
      },
      {
        id: "911350",
        city_id: "9113",
        name: "Duram",
      },
      {
        id: "911351",
        city_id: "9113",
        name: "Yogosem",
      },
      {
        id: "911352",
        city_id: "9113",
        name: "Kayo",
      },
      {
        id: "911353",
        city_id: "9113",
        name: "Sumo",
      },
      {
        id: "911401",
        city_id: "9114",
        name: "Karubaga",
      },
      {
        id: "911402",
        city_id: "9114",
        name: "Bokondini",
      },
      {
        id: "911403",
        city_id: "9114",
        name: "Kanggime",
      },
      {
        id: "911404",
        city_id: "9114",
        name: "Kembu",
      },
      {
        id: "911405",
        city_id: "9114",
        name: "Goyage",
      },
      {
        id: "911406",
        city_id: "9114",
        name: "Wunim",
      },
      {
        id: "911407",
        city_id: "9114",
        name: "Wina",
      },
      {
        id: "911408",
        city_id: "9114",
        name: "Umagi",
      },
      {
        id: "911409",
        city_id: "9114",
        name: "Panaga",
      },
      {
        id: "911410",
        city_id: "9114",
        name: "Woniki",
      },
      {
        id: "911411",
        city_id: "9114",
        name: "Kubu",
      },
      {
        id: "911412",
        city_id: "9114",
        name: "Konda/Kondaga",
      },
      {
        id: "911413",
        city_id: "9114",
        name: "Nelawi",
      },
      {
        id: "911414",
        city_id: "9114",
        name: "Kuari",
      },
      {
        id: "911415",
        city_id: "9114",
        name: "Bokoneri",
      },
      {
        id: "911416",
        city_id: "9114",
        name: "Bewani",
      },
      {
        id: "911418",
        city_id: "9114",
        name: "Nabunage",
      },
      {
        id: "911419",
        city_id: "9114",
        name: "Gilubandu",
      },
      {
        id: "911420",
        city_id: "9114",
        name: "Nunggawi",
      },
      {
        id: "911421",
        city_id: "9114",
        name: "Gundagi",
      },
      {
        id: "911422",
        city_id: "9114",
        name: "Numba",
      },
      {
        id: "911423",
        city_id: "9114",
        name: "Timori",
      },
      {
        id: "911424",
        city_id: "9114",
        name: "Dundu",
      },
      {
        id: "911425",
        city_id: "9114",
        name: "Geya",
      },
      {
        id: "911426",
        city_id: "9114",
        name: "Egiam",
      },
      {
        id: "911427",
        city_id: "9114",
        name: "Poganeri",
      },
      {
        id: "911428",
        city_id: "9114",
        name: "Kamboneri",
      },
      {
        id: "911429",
        city_id: "9114",
        name: "Airgaram",
      },
      {
        id: "911430",
        city_id: "9114",
        name: "Wari/Taiyeve II",
      },
      {
        id: "911431",
        city_id: "9114",
        name: "Dow",
      },
      {
        id: "911432",
        city_id: "9114",
        name: "Tagineri",
      },
      {
        id: "911433",
        city_id: "9114",
        name: "Yuneri",
      },
      {
        id: "911434",
        city_id: "9114",
        name: "Wakuwo",
      },
      {
        id: "911435",
        city_id: "9114",
        name: "Gika",
      },
      {
        id: "911436",
        city_id: "9114",
        name: "Telenggeme",
      },
      {
        id: "911437",
        city_id: "9114",
        name: "Anawi",
      },
      {
        id: "911438",
        city_id: "9114",
        name: "Wenam",
      },
      {
        id: "911439",
        city_id: "9114",
        name: "Wugi",
      },
      {
        id: "911440",
        city_id: "9114",
        name: "Danime",
      },
      {
        id: "911441",
        city_id: "9114",
        name: "Tagime",
      },
      {
        id: "911442",
        city_id: "9114",
        name: "Kai",
      },
      {
        id: "911443",
        city_id: "9114",
        name: "Aweku",
      },
      {
        id: "911444",
        city_id: "9114",
        name: "Bogonuk",
      },
      {
        id: "911445",
        city_id: "9114",
        name: "Li Anogomma",
      },
      {
        id: "911446",
        city_id: "9114",
        name: "Biuk",
      },
      {
        id: "911447",
        city_id: "9114",
        name: "Yuko",
      },
      {
        id: "911501",
        city_id: "9115",
        name: "Waropen Bawah",
      },
      {
        id: "911503",
        city_id: "9115",
        name: "Masirei",
      },
      {
        id: "911507",
        city_id: "9115",
        name: "Risei Sayati",
      },
      {
        id: "911508",
        city_id: "9115",
        name: "Urei Faisei",
      },
      {
        id: "911509",
        city_id: "9115",
        name: "Inggerus",
      },
      {
        id: "911510",
        city_id: "9115",
        name: "Kirihi",
      },
      {
        id: "911511",
        city_id: "9115",
        name: "Oudate",
      },
      {
        id: "911512",
        city_id: "9115",
        name: "Wapoga",
      },
      {
        id: "911513",
        city_id: "9115",
        name: "Demba",
      },
      {
        id: "911514",
        city_id: "9115",
        name: "Wonti",
      },
      {
        id: "911515",
        city_id: "9115",
        name: "Soyoi Mambai",
      },
      {
        id: "911601",
        city_id: "9116",
        name: "Mandobo",
      },
      {
        id: "911602",
        city_id: "9116",
        name: "Mindiptana",
      },
      {
        id: "911603",
        city_id: "9116",
        name: "Waropko",
      },
      {
        id: "911604",
        city_id: "9116",
        name: "Kouh",
      },
      {
        id: "911605",
        city_id: "9116",
        name: "Jair",
      },
      {
        id: "911606",
        city_id: "9116",
        name: "Bomakia",
      },
      {
        id: "911607",
        city_id: "9116",
        name: "Kombut",
      },
      {
        id: "911608",
        city_id: "9116",
        name: "Iniyandit",
      },
      {
        id: "911609",
        city_id: "9116",
        name: "Arimop",
      },
      {
        id: "911610",
        city_id: "9116",
        name: "Fofi",
      },
      {
        id: "911611",
        city_id: "9116",
        name: "Ambatkwi",
      },
      {
        id: "911612",
        city_id: "9116",
        name: "Manggelum",
      },
      {
        id: "911613",
        city_id: "9116",
        name: "Firiwage",
      },
      {
        id: "911614",
        city_id: "9116",
        name: "Yaniruma",
      },
      {
        id: "911615",
        city_id: "9116",
        name: "Subur",
      },
      {
        id: "911616",
        city_id: "9116",
        name: "Kombay",
      },
      {
        id: "911617",
        city_id: "9116",
        name: "Ninati",
      },
      {
        id: "911618",
        city_id: "9116",
        name: "Sesnuk",
      },
      {
        id: "911619",
        city_id: "9116",
        name: "Ki",
      },
      {
        id: "911620",
        city_id: "9116",
        name: "Kawagit",
      },
      {
        id: "911701",
        city_id: "9117",
        name: "Obaa",
      },
      {
        id: "911702",
        city_id: "9117",
        name: "Mambioman Bapai",
      },
      {
        id: "911703",
        city_id: "9117",
        name: "Citak-Mitak",
      },
      {
        id: "911704",
        city_id: "9117",
        name: "Edera",
      },
      {
        id: "911705",
        city_id: "9117",
        name: "Haju",
      },
      {
        id: "911706",
        city_id: "9117",
        name: "Assue",
      },
      {
        id: "911707",
        city_id: "9117",
        name: "Kaibar",
      },
      {
        id: "911708",
        city_id: "9117",
        name: "Passue",
      },
      {
        id: "911709",
        city_id: "9117",
        name: "Minyamur",
      },
      {
        id: "911710",
        city_id: "9117",
        name: "Venaha",
      },
      {
        id: "911711",
        city_id: "9117",
        name: "Syahcame",
      },
      {
        id: "911712",
        city_id: "9117",
        name: "Yakomi",
      },
      {
        id: "911713",
        city_id: "9117",
        name: "Bamgi",
      },
      {
        id: "911714",
        city_id: "9117",
        name: "Passue Bawah",
      },
      {
        id: "911715",
        city_id: "9117",
        name: "Ti Zain",
      },
      {
        id: "911801",
        city_id: "9118",
        name: "Agats",
      },
      {
        id: "911802",
        city_id: "9118",
        name: "Atsj",
      },
      {
        id: "911803",
        city_id: "9118",
        name: "Sawa Erma",
      },
      {
        id: "911804",
        city_id: "9118",
        name: "Akat",
      },
      {
        id: "911805",
        city_id: "9118",
        name: "Fayit",
      },
      {
        id: "911806",
        city_id: "9118",
        name: "Pantai Kasuari",
      },
      {
        id: "911807",
        city_id: "9118",
        name: "Suator",
      },
      {
        id: "911808",
        city_id: "9118",
        name: "Suru-suru",
      },
      {
        id: "911809",
        city_id: "9118",
        name: "Kolf Braza",
      },
      {
        id: "911810",
        city_id: "9118",
        name: "Unir Sirau",
      },
      {
        id: "911811",
        city_id: "9118",
        name: "Joerat",
      },
      {
        id: "911812",
        city_id: "9118",
        name: "Pulau Tiga",
      },
      {
        id: "911813",
        city_id: "9118",
        name: "Jetsy",
      },
      {
        id: "911814",
        city_id: "9118",
        name: "Der Koumur",
      },
      {
        id: "911815",
        city_id: "9118",
        name: "Kopay",
      },
      {
        id: "911816",
        city_id: "9118",
        name: "Safan",
      },
      {
        id: "911817",
        city_id: "9118",
        name: "Sirets",
      },
      {
        id: "911818",
        city_id: "9118",
        name: "Ayip",
      },
      {
        id: "911819",
        city_id: "9118",
        name: "Betcbamu",
      },
      {
        id: "911901",
        city_id: "9119",
        name: "Supiori Selatan",
      },
      {
        id: "911902",
        city_id: "9119",
        name: "Supiori Utara",
      },
      {
        id: "911903",
        city_id: "9119",
        name: "Supiori Timur",
      },
      {
        id: "911904",
        city_id: "9119",
        name: "Kepulauan Aruri",
      },
      {
        id: "911905",
        city_id: "9119",
        name: "Supiori Barat",
      },
      {
        id: "912001",
        city_id: "9120",
        name: "Mamberamo Tengah",
      },
      {
        id: "912002",
        city_id: "9120",
        name: "Mamberamo Hulu",
      },
      {
        id: "912003",
        city_id: "9120",
        name: "Rufaer",
      },
      {
        id: "912004",
        city_id: "9120",
        name: "Mamberamo Tengah Timur",
      },
      {
        id: "912005",
        city_id: "9120",
        name: "Mamberamo Hilir",
      },
      {
        id: "912006",
        city_id: "9120",
        name: "Waropen Atas",
      },
      {
        id: "912007",
        city_id: "9120",
        name: "Benuki",
      },
      {
        id: "912008",
        city_id: "9120",
        name: "Sawai",
      },
      {
        id: "912101",
        city_id: "9121",
        name: "Kobagma",
      },
      {
        id: "912102",
        city_id: "9121",
        name: "Kelila",
      },
      {
        id: "912103",
        city_id: "9121",
        name: "Eragayam",
      },
      {
        id: "912104",
        city_id: "9121",
        name: "Megambilis",
      },
      {
        id: "912105",
        city_id: "9121",
        name: "Ilugwa",
      },
      {
        id: "912201",
        city_id: "9122",
        name: "Elelim",
      },
      {
        id: "912202",
        city_id: "9122",
        name: "Apalapsili",
      },
      {
        id: "912203",
        city_id: "9122",
        name: "Abenaho",
      },
      {
        id: "912204",
        city_id: "9122",
        name: "Benawa",
      },
      {
        id: "912205",
        city_id: "9122",
        name: "Welarek",
      },
      {
        id: "912301",
        city_id: "9123",
        name: "Tiom",
      },
      {
        id: "912302",
        city_id: "9123",
        name: "Pirime",
      },
      {
        id: "912303",
        city_id: "9123",
        name: "Makki",
      },
      {
        id: "912304",
        city_id: "9123",
        name: "Gamelia",
      },
      {
        id: "912305",
        city_id: "9123",
        name: "Dimba",
      },
      {
        id: "912306",
        city_id: "9123",
        name: "Melagineri",
      },
      {
        id: "912307",
        city_id: "9123",
        name: "Balingga",
      },
      {
        id: "912308",
        city_id: "9123",
        name: "Tiomneri",
      },
      {
        id: "912309",
        city_id: "9123",
        name: "Kuyawage",
      },
      {
        id: "912310",
        city_id: "9123",
        name: "Poga",
      },
      {
        id: "912311",
        city_id: "9123",
        name: "Niname",
      },
      {
        id: "912312",
        city_id: "9123",
        name: "Nogi",
      },
      {
        id: "912313",
        city_id: "9123",
        name: "Yiginua",
      },
      {
        id: "912314",
        city_id: "9123",
        name: "Tiom Ollo",
      },
      {
        id: "912315",
        city_id: "9123",
        name: "Yugungwi",
      },
      {
        id: "912316",
        city_id: "9123",
        name: "Mokoni",
      },
      {
        id: "912317",
        city_id: "9123",
        name: "Wereka",
      },
      {
        id: "912318",
        city_id: "9123",
        name: "Milimbo",
      },
      {
        id: "912319",
        city_id: "9123",
        name: "Wiringgambut",
      },
      {
        id: "912320",
        city_id: "9123",
        name: "Gollo",
      },
      {
        id: "912321",
        city_id: "9123",
        name: "Awina",
      },
      {
        id: "912322",
        city_id: "9123",
        name: "Ayumnati",
      },
      {
        id: "912323",
        city_id: "9123",
        name: "Wano Barat",
      },
      {
        id: "912324",
        city_id: "9123",
        name: "Goa Balim",
      },
      {
        id: "912325",
        city_id: "9123",
        name: "Bruwa",
      },
      {
        id: "912326",
        city_id: "9123",
        name: "Balingga Barat",
      },
      {
        id: "912327",
        city_id: "9123",
        name: "Gupura",
      },
      {
        id: "912328",
        city_id: "9123",
        name: "Kolawa",
      },
      {
        id: "912329",
        city_id: "9123",
        name: "Gelok Beam",
      },
      {
        id: "912330",
        city_id: "9123",
        name: "Kuly Lanny",
      },
      {
        id: "912331",
        city_id: "9123",
        name: "Lannyna",
      },
      {
        id: "912332",
        city_id: "9123",
        name: "Karu",
      },
      {
        id: "912333",
        city_id: "9123",
        name: "Yiluk",
      },
      {
        id: "912334",
        city_id: "9123",
        name: "Guna",
      },
      {
        id: "912335",
        city_id: "9123",
        name: "Kelulome",
      },
      {
        id: "912336",
        city_id: "9123",
        name: "Nikogwe",
      },
      {
        id: "912337",
        city_id: "9123",
        name: "Muara",
      },
      {
        id: "912338",
        city_id: "9123",
        name: "Buguk Gona",
      },
      {
        id: "912339",
        city_id: "9123",
        name: "Melagi",
      },
      {
        id: "912401",
        city_id: "9124",
        name: "Kenyam",
      },
      {
        id: "912402",
        city_id: "9124",
        name: "Mapenduma",
      },
      {
        id: "912403",
        city_id: "9124",
        name: "Yigi",
      },
      {
        id: "912404",
        city_id: "9124",
        name: "Wosak",
      },
      {
        id: "912405",
        city_id: "9124",
        name: "Geselma",
      },
      {
        id: "912406",
        city_id: "9124",
        name: "Mugi",
      },
      {
        id: "912407",
        city_id: "9124",
        name: "Mbuwa",
      },
      {
        id: "912408",
        city_id: "9124",
        name: "Gearek",
      },
      {
        id: "912409",
        city_id: "9124",
        name: "Koroptak",
      },
      {
        id: "912410",
        city_id: "9124",
        name: "Kegayem",
      },
      {
        id: "912411",
        city_id: "9124",
        name: "Paro",
      },
      {
        id: "912412",
        city_id: "9124",
        name: "Mebarok",
      },
      {
        id: "912413",
        city_id: "9124",
        name: "Yenggelo",
      },
      {
        id: "912414",
        city_id: "9124",
        name: "Kilmid",
      },
      {
        id: "912415",
        city_id: "9124",
        name: "Alama",
      },
      {
        id: "912416",
        city_id: "9124",
        name: "Yal",
      },
      {
        id: "912417",
        city_id: "9124",
        name: "Mam",
      },
      {
        id: "912418",
        city_id: "9124",
        name: "Dal",
      },
      {
        id: "912419",
        city_id: "9124",
        name: "Nirkuri",
      },
      {
        id: "912420",
        city_id: "9124",
        name: "Inikgal",
      },
      {
        id: "912421",
        city_id: "9124",
        name: "Iniye",
      },
      {
        id: "912422",
        city_id: "9124",
        name: "Mbulmu Yalma",
      },
      {
        id: "912423",
        city_id: "9124",
        name: "Mbua Tengah",
      },
      {
        id: "912424",
        city_id: "9124",
        name: "Embetpen",
      },
      {
        id: "912425",
        city_id: "9124",
        name: "Kora",
      },
      {
        id: "912426",
        city_id: "9124",
        name: "Wusi",
      },
      {
        id: "912427",
        city_id: "9124",
        name: "Pija",
      },
      {
        id: "912428",
        city_id: "9124",
        name: "Moba",
      },
      {
        id: "912429",
        city_id: "9124",
        name: "Wutpaga",
      },
      {
        id: "912430",
        city_id: "9124",
        name: "Nenggeagin",
      },
      {
        id: "912431",
        city_id: "9124",
        name: "Krepkuri",
      },
      {
        id: "912432",
        city_id: "9124",
        name: "Pasir Putih",
      },
      {
        id: "912501",
        city_id: "9125",
        name: "Ilaga",
      },
      {
        id: "912502",
        city_id: "9125",
        name: "Wangbe",
      },
      {
        id: "912503",
        city_id: "9125",
        name: "Beoga",
      },
      {
        id: "912504",
        city_id: "9125",
        name: "Doufo",
      },
      {
        id: "912505",
        city_id: "9125",
        name: "Pogoma",
      },
      {
        id: "912506",
        city_id: "9125",
        name: "Sinak",
      },
      {
        id: "912507",
        city_id: "9125",
        name: "Agandugume",
      },
      {
        id: "912508",
        city_id: "9125",
        name: "Gome",
      },
      {
        id: "912509",
        city_id: "9125",
        name: "Dervos",
      },
      {
        id: "912510",
        city_id: "9125",
        name: "Beoga Barat",
      },
      {
        id: "912511",
        city_id: "9125",
        name: "Beoga Timur",
      },
      {
        id: "912512",
        city_id: "9125",
        name: "Ogamanim",
      },
      {
        id: "912513",
        city_id: "9125",
        name: "Kembru",
      },
      {
        id: "912514",
        city_id: "9125",
        name: "Bina",
      },
      {
        id: "912515",
        city_id: "9125",
        name: "Sinak Barat",
      },
      {
        id: "912516",
        city_id: "9125",
        name: "Mage'abume",
      },
      {
        id: "912517",
        city_id: "9125",
        name: "Yugumuak",
      },
      {
        id: "912518",
        city_id: "9125",
        name: "Ilaga Utara",
      },
      {
        id: "912519",
        city_id: "9125",
        name: "Mabugi",
      },
      {
        id: "912520",
        city_id: "9125",
        name: "Omukia",
      },
      {
        id: "912521",
        city_id: "9125",
        name: "Lambewi",
      },
      {
        id: "912522",
        city_id: "9125",
        name: "Oneri",
      },
      {
        id: "912523",
        city_id: "9125",
        name: "Amungkalpia",
      },
      {
        id: "912524",
        city_id: "9125",
        name: "Gome Utara",
      },
      {
        id: "912525",
        city_id: "9125",
        name: "Erelmakawia",
      },
      {
        id: "912601",
        city_id: "9126",
        name: "Kamu",
      },
      {
        id: "912602",
        city_id: "9126",
        name: "Mapia",
      },
      {
        id: "912603",
        city_id: "9126",
        name: "Piyaiye",
      },
      {
        id: "912604",
        city_id: "9126",
        name: "Kamu Utara",
      },
      {
        id: "912605",
        city_id: "9126",
        name: "Sukikai Selatan",
      },
      {
        id: "912606",
        city_id: "9126",
        name: "Mapia Barat",
      },
      {
        id: "912607",
        city_id: "9126",
        name: "Kamu Selatan",
      },
      {
        id: "912608",
        city_id: "9126",
        name: "Kamu Timur",
      },
      {
        id: "912609",
        city_id: "9126",
        name: "Mapia Tengah",
      },
      {
        id: "912610",
        city_id: "9126",
        name: "Dogiyai",
      },
      {
        id: "912701",
        city_id: "9127",
        name: "Sugapa",
      },
      {
        id: "912702",
        city_id: "9127",
        name: "Homeyo",
      },
      {
        id: "912703",
        city_id: "9127",
        name: "Wandai",
      },
      {
        id: "912704",
        city_id: "9127",
        name: "Biandoga",
      },
      {
        id: "912705",
        city_id: "9127",
        name: "Agisiga",
      },
      {
        id: "912706",
        city_id: "9127",
        name: "Hitadipa",
      },
      {
        id: "912707",
        city_id: "9127",
        name: "Ugimba",
      },
      {
        id: "912708",
        city_id: "9127",
        name: "Tomosiga",
      },
      {
        id: "912801",
        city_id: "9128",
        name: "Tigi",
      },
      {
        id: "912802",
        city_id: "9128",
        name: "Tigi Timur",
      },
      {
        id: "912803",
        city_id: "9128",
        name: "Bowobado",
      },
      {
        id: "912804",
        city_id: "9128",
        name: "Tigi Barat",
      },
      {
        id: "912805",
        city_id: "9128",
        name: "Kapiraya",
      },
      {
        id: "917101",
        city_id: "9171",
        name: "Jayapura Utara",
      },
      {
        id: "917102",
        city_id: "9171",
        name: "Jayapura Selatan",
      },
      {
        id: "917103",
        city_id: "9171",
        name: "Abepura",
      },
      {
        id: "917104",
        city_id: "9171",
        name: "Muara Tami",
      },
      {
        id: "917105",
        city_id: "9171",
        name: "Heram",
      },
      {
        id: "920101",
        city_id: "9201",
        name: "Makbon",
      },
      {
        id: "920104",
        city_id: "9201",
        name: "Beraur",
      },
      {
        id: "920105",
        city_id: "9201",
        name: "Salawati",
      },
      {
        id: "920106",
        city_id: "9201",
        name: "Seget",
      },
      {
        id: "920107",
        city_id: "9201",
        name: "Aimas",
      },
      {
        id: "920108",
        city_id: "9201",
        name: "Klamono",
      },
      {
        id: "920110",
        city_id: "9201",
        name: "Sayosa",
      },
      {
        id: "920112",
        city_id: "9201",
        name: "Segun",
      },
      {
        id: "920113",
        city_id: "9201",
        name: "Mayamuk",
      },
      {
        id: "920114",
        city_id: "9201",
        name: "Salawati Selatan",
      },
      {
        id: "920117",
        city_id: "9201",
        name: "Klabot",
      },
      {
        id: "920118",
        city_id: "9201",
        name: "Klawak",
      },
      {
        id: "920120",
        city_id: "9201",
        name: "Maudus",
      },
      {
        id: "920139",
        city_id: "9201",
        name: "Mariat",
      },
      {
        id: "920140",
        city_id: "9201",
        name: "Klayili",
      },
      {
        id: "920141",
        city_id: "9201",
        name: "Klaso",
      },
      {
        id: "920142",
        city_id: "9201",
        name: "Moisegen",
      },
      {
        id: "920143",
        city_id: "9201",
        name: "Sorong",
      },
      {
        id: "920144",
        city_id: "9201",
        name: "Bagun",
      },
      {
        id: "920145",
        city_id: "9201",
        name: "Wemak",
      },
      {
        id: "920146",
        city_id: "9201",
        name: "Sunook",
      },
      {
        id: "920147",
        city_id: "9201",
        name: "Buk",
      },
      {
        id: "920148",
        city_id: "9201",
        name: "Saengkeduk",
      },
      {
        id: "920149",
        city_id: "9201",
        name: "Malabotom",
      },
      {
        id: "920150",
        city_id: "9201",
        name: "Konhir",
      },
      {
        id: "920151",
        city_id: "9201",
        name: "Klasafet",
      },
      {
        id: "920152",
        city_id: "9201",
        name: "Hobard",
      },
      {
        id: "920153",
        city_id: "9201",
        name: "Salawati Tengah",
      },
      {
        id: "920154",
        city_id: "9201",
        name: "Botain",
      },
      {
        id: "920155",
        city_id: "9201",
        name: "Sayosa Timur",
      },
      {
        id: "920203",
        city_id: "9202",
        name: "Warmare",
      },
      {
        id: "920204",
        city_id: "9202",
        name: "Prafi",
      },
      {
        id: "920205",
        city_id: "9202",
        name: "Masni",
      },
      {
        id: "920212",
        city_id: "9202",
        name: "Manokwari Barat",
      },
      {
        id: "920213",
        city_id: "9202",
        name: "Manokwari Timur",
      },
      {
        id: "920214",
        city_id: "9202",
        name: "Manokwari Utara",
      },
      {
        id: "920215",
        city_id: "9202",
        name: "Manokwari Selatan",
      },
      {
        id: "920217",
        city_id: "9202",
        name: "Tanah Rubuh",
      },
      {
        id: "920221",
        city_id: "9202",
        name: "Sidey",
      },
      {
        id: "920301",
        city_id: "9203",
        name: "Fak-Fak",
      },
      {
        id: "920302",
        city_id: "9203",
        name: "Fak-Fak Barat",
      },
      {
        id: "920303",
        city_id: "9203",
        name: "Fak-Fak Timur",
      },
      {
        id: "920304",
        city_id: "9203",
        name: "Kokas",
      },
      {
        id: "920305",
        city_id: "9203",
        name: "Fak-Fak Tengah",
      },
      {
        id: "920306",
        city_id: "9203",
        name: "Karas",
      },
      {
        id: "920307",
        city_id: "9203",
        name: "Bomberay",
      },
      {
        id: "920308",
        city_id: "9203",
        name: "Kramongmongga",
      },
      {
        id: "920309",
        city_id: "9203",
        name: "Teluk Patipi",
      },
      {
        id: "920310",
        city_id: "9203",
        name: "Pariwari",
      },
      {
        id: "920311",
        city_id: "9203",
        name: "Wartutin",
      },
      {
        id: "920312",
        city_id: "9203",
        name: "Fakfak Timur Tengah",
      },
      {
        id: "920313",
        city_id: "9203",
        name: "Arguni",
      },
      {
        id: "920314",
        city_id: "9203",
        name: "Mbahamdandara",
      },
      {
        id: "920315",
        city_id: "9203",
        name: "Kayauni",
      },
      {
        id: "920316",
        city_id: "9203",
        name: "Furwagi",
      },
      {
        id: "920317",
        city_id: "9203",
        name: "Tomage",
      },
      {
        id: "920401",
        city_id: "9204",
        name: "Teminabuan",
      },
      {
        id: "920404",
        city_id: "9204",
        name: "Inanwatan",
      },
      {
        id: "920406",
        city_id: "9204",
        name: "Sawiat",
      },
      {
        id: "920409",
        city_id: "9204",
        name: "Kokoda",
      },
      {
        id: "920410",
        city_id: "9204",
        name: "Moswaren",
      },
      {
        id: "920411",
        city_id: "9204",
        name: "Seremuk",
      },
      {
        id: "920412",
        city_id: "9204",
        name: "Wayer",
      },
      {
        id: "920414",
        city_id: "9204",
        name: "Kais",
      },
      {
        id: "920415",
        city_id: "9204",
        name: "Konda",
      },
      {
        id: "920420",
        city_id: "9204",
        name: "Matemani",
      },
      {
        id: "920421",
        city_id: "9204",
        name: "Kokoda Utara",
      },
      {
        id: "920422",
        city_id: "9204",
        name: "Saifi",
      },
      {
        id: "920424",
        city_id: "9204",
        name: "Fokour",
      },
      {
        id: "920425",
        city_id: "9204",
        name: "Salkma",
      },
      {
        id: "920426",
        city_id: "9204",
        name: "Kais Darat",
      },
      {
        id: "920501",
        city_id: "9205",
        name: "Misool (Misool Utara)",
      },
      {
        id: "920502",
        city_id: "9205",
        name: "Waigeo Utara",
      },
      {
        id: "920503",
        city_id: "9205",
        name: "Waigeo Selatan",
      },
      {
        id: "920504",
        city_id: "9205",
        name: "Salawati Utara",
      },
      {
        id: "920505",
        city_id: "9205",
        name: "Kepulauan Ayau",
      },
      {
        id: "920506",
        city_id: "9205",
        name: "Misool Timur",
      },
      {
        id: "920507",
        city_id: "9205",
        name: "Waigeo Barat",
      },
      {
        id: "920508",
        city_id: "9205",
        name: "Waigeo Timur",
      },
      {
        id: "920509",
        city_id: "9205",
        name: "Teluk Mayalibit",
      },
      {
        id: "920510",
        city_id: "9205",
        name: "Kofiau",
      },
      {
        id: "920511",
        city_id: "9205",
        name: "Meos Mansar",
      },
      {
        id: "920513",
        city_id: "9205",
        name: "Misool Selatan",
      },
      {
        id: "920514",
        city_id: "9205",
        name: "Warwarbomi",
      },
      {
        id: "920515",
        city_id: "9205",
        name: "Waigeo Barat",
      },
      {
        id: "920516",
        city_id: "9205",
        name: "Misool Barat",
      },
      {
        id: "920517",
        city_id: "9205",
        name: "Kepulauan Sembilan",
      },
      {
        id: "920518",
        city_id: "9205",
        name: "Kota Waisai",
      },
      {
        id: "920519",
        city_id: "9205",
        name: "Tiplol Mayalibit",
      },
      {
        id: "920520",
        city_id: "9205",
        name: "Batanta Utara",
      },
      {
        id: "920521",
        city_id: "9205",
        name: "Salawati Barat",
      },
      {
        id: "920522",
        city_id: "9205",
        name: "Salawati Tengah",
      },
      {
        id: "920523",
        city_id: "9205",
        name: "Supnin",
      },
      {
        id: "920524",
        city_id: "9205",
        name: "Ayau",
      },
      {
        id: "920525",
        city_id: "9205",
        name: "Batanta Selatan",
      },
      {
        id: "920601",
        city_id: "9206",
        name: "Bintuni",
      },
      {
        id: "920602",
        city_id: "9206",
        name: "Merdey",
      },
      {
        id: "920603",
        city_id: "9206",
        name: "Babo",
      },
      {
        id: "920604",
        city_id: "9206",
        name: "Aranday",
      },
      {
        id: "920605",
        city_id: "9206",
        name: "Moskona Selatan",
      },
      {
        id: "920606",
        city_id: "9206",
        name: "Moskona Utara",
      },
      {
        id: "920607",
        city_id: "9206",
        name: "Wamesa",
      },
      {
        id: "920608",
        city_id: "9206",
        name: "Fafurwar",
      },
      {
        id: "920609",
        city_id: "9206",
        name: "Tembuni",
      },
      {
        id: "920610",
        city_id: "9206",
        name: "Kuri",
      },
      {
        id: "920611",
        city_id: "9206",
        name: "Manimeri",
      },
      {
        id: "920612",
        city_id: "9206",
        name: "Tuhiba",
      },
      {
        id: "920613",
        city_id: "9206",
        name: "Dataran Beimes",
      },
      {
        id: "920614",
        city_id: "9206",
        name: "Sumuri",
      },
      {
        id: "920615",
        city_id: "9206",
        name: "Kaitaro",
      },
      {
        id: "920616",
        city_id: "9206",
        name: "Aroba",
      },
      {
        id: "920617",
        city_id: "9206",
        name: "Masyeta",
      },
      {
        id: "920618",
        city_id: "9206",
        name: "Biscoop",
      },
      {
        id: "920619",
        city_id: "9206",
        name: "Tomu",
      },
      {
        id: "920620",
        city_id: "9206",
        name: "Kamundan",
      },
      {
        id: "920621",
        city_id: "9206",
        name: "Weriagar",
      },
      {
        id: "920622",
        city_id: "9206",
        name: "Moskona Barat",
      },
      {
        id: "920623",
        city_id: "9206",
        name: "Meyado",
      },
      {
        id: "920624",
        city_id: "9206",
        name: "Moskona Timur",
      },
      {
        id: "920701",
        city_id: "9207",
        name: "Wasior",
      },
      {
        id: "920702",
        city_id: "9207",
        name: "Windesi",
      },
      {
        id: "920703",
        city_id: "9207",
        name: "Teluk Duairi",
      },
      {
        id: "920704",
        city_id: "9207",
        name: "Wondiboy",
      },
      {
        id: "920705",
        city_id: "9207",
        name: "Wamesa",
      },
      {
        id: "920706",
        city_id: "9207",
        name: "Rumberpon",
      },
      {
        id: "920707",
        city_id: "9207",
        name: "Naikere",
      },
      {
        id: "920708",
        city_id: "9207",
        name: "Rasiei",
      },
      {
        id: "920709",
        city_id: "9207",
        name: "Kuri Wamesa",
      },
      {
        id: "920710",
        city_id: "9207",
        name: "Roon",
      },
      {
        id: "920711",
        city_id: "9207",
        name: "Roswar",
      },
      {
        id: "920712",
        city_id: "9207",
        name: "Nikiwar",
      },
      {
        id: "920713",
        city_id: "9207",
        name: "Soug Jaya",
      },
      {
        id: "920801",
        city_id: "9208",
        name: "Kaimana",
      },
      {
        id: "920802",
        city_id: "9208",
        name: "Buruway",
      },
      {
        id: "920803",
        city_id: "9208",
        name: "Teluk Arguni Atas",
      },
      {
        id: "920804",
        city_id: "9208",
        name: "Teluk Etna",
      },
      {
        id: "920805",
        city_id: "9208",
        name: "Kambrau",
      },
      {
        id: "920806",
        city_id: "9208",
        name: "Teluk Arguni Bawah",
      },
      {
        id: "920807",
        city_id: "9208",
        name: "Yamor",
      },
      {
        id: "920901",
        city_id: "9209",
        name: "Fef",
      },
      {
        id: "920902",
        city_id: "9209",
        name: "Miyah",
      },
      {
        id: "920903",
        city_id: "9209",
        name: "Yembun",
      },
      {
        id: "920904",
        city_id: "9209",
        name: "Kwoor",
      },
      {
        id: "920905",
        city_id: "9209",
        name: "Sausapor",
      },
      {
        id: "920906",
        city_id: "9209",
        name: "Abun",
      },
      {
        id: "920907",
        city_id: "9209",
        name: "Syujak",
      },
      {
        id: "920908",
        city_id: "9209",
        name: "Moraid",
      },
      {
        id: "920909",
        city_id: "9209",
        name: "Kebar",
      },
      {
        id: "920910",
        city_id: "9209",
        name: "Amberbaken",
      },
      {
        id: "920911",
        city_id: "9209",
        name: "Senopi",
      },
      {
        id: "920912",
        city_id: "9209",
        name: "Mubrani",
      },
      {
        id: "920913",
        city_id: "9209",
        name: "Bikar",
      },
      {
        id: "920914",
        city_id: "9209",
        name: "Bamusbama",
      },
      {
        id: "920915",
        city_id: "9209",
        name: "Ases",
      },
      {
        id: "920916",
        city_id: "9209",
        name: "Miyah Selatan",
      },
      {
        id: "920917",
        city_id: "9209",
        name: "Ireres",
      },
      {
        id: "920918",
        city_id: "9209",
        name: "Tobouw",
      },
      {
        id: "920919",
        city_id: "9209",
        name: "Wilhem Roumbouts",
      },
      {
        id: "920920",
        city_id: "9209",
        name: "Tinggouw",
      },
      {
        id: "920921",
        city_id: "9209",
        name: "Kwesefo",
      },
      {
        id: "920922",
        city_id: "9209",
        name: "Mawabuan",
      },
      {
        id: "920923",
        city_id: "9209",
        name: "Kebar Timur",
      },
      {
        id: "920924",
        city_id: "9209",
        name: "Kebar Selatan",
      },
      {
        id: "920925",
        city_id: "9209",
        name: "Manekar",
      },
      {
        id: "920926",
        city_id: "9209",
        name: "Mpur",
      },
      {
        id: "920927",
        city_id: "9209",
        name: "Amberbaken Barat",
      },
      {
        id: "920928",
        city_id: "9209",
        name: "Kasi",
      },
      {
        id: "920929",
        city_id: "9209",
        name: "Selemkai",
      },
      {
        id: "921001",
        city_id: "9210",
        name: "Aifat",
      },
      {
        id: "921002",
        city_id: "9210",
        name: "Aifat Utara",
      },
      {
        id: "921003",
        city_id: "9210",
        name: "Aifat Timur",
      },
      {
        id: "921004",
        city_id: "9210",
        name: "Aifat Selatan",
      },
      {
        id: "921005",
        city_id: "9210",
        name: "Aitinyo Barat",
      },
      {
        id: "921006",
        city_id: "9210",
        name: "Aitinyo",
      },
      {
        id: "921007",
        city_id: "9210",
        name: "Aitinyo Utara",
      },
      {
        id: "921008",
        city_id: "9210",
        name: "Ayamaru",
      },
      {
        id: "921009",
        city_id: "9210",
        name: "Ayamaru Utara",
      },
      {
        id: "921010",
        city_id: "9210",
        name: "Ayamaru Timur",
      },
      {
        id: "921011",
        city_id: "9210",
        name: "Mare",
      },
      {
        id: "921012",
        city_id: "9210",
        name: "Aifat Timur Tengah",
      },
      {
        id: "921013",
        city_id: "9210",
        name: "Aifat Timur Jauh",
      },
      {
        id: "921014",
        city_id: "9210",
        name: "Aifat Timur Selatan",
      },
      {
        id: "921015",
        city_id: "9210",
        name: "Ayamaru Selatan",
      },
      {
        id: "921016",
        city_id: "9210",
        name: "Ayamaru Jaya",
      },
      {
        id: "921017",
        city_id: "9210",
        name: "Ayamaru Selatan Jaya",
      },
      {
        id: "921018",
        city_id: "9210",
        name: "Ayamaru Timur",
      },
      {
        id: "921019",
        city_id: "9210",
        name: "Ayamaru Utara Timur",
      },
      {
        id: "921020",
        city_id: "9210",
        name: "Ayamaru Tengah",
      },
      {
        id: "921021",
        city_id: "9210",
        name: "Ayamaru Barat",
      },
      {
        id: "921022",
        city_id: "9210",
        name: "Aitinyo Tengah",
      },
      {
        id: "921023",
        city_id: "9210",
        name: "Aitinyo Raya",
      },
      {
        id: "921024",
        city_id: "9210",
        name: "Mare Selatan",
      },
      {
        id: "921101",
        city_id: "9211",
        name: "Ransiki",
      },
      {
        id: "921102",
        city_id: "9211",
        name: "Oransbari",
      },
      {
        id: "921103",
        city_id: "9211",
        name: "Neney",
      },
      {
        id: "921104",
        city_id: "9211",
        name: "Dataran Isim",
      },
      {
        id: "921105",
        city_id: "9211",
        name: "Momi Waren",
      },
      {
        id: "921106",
        city_id: "9211",
        name: "Tahota",
      },
      {
        id: "921201",
        city_id: "9212",
        name: "Anggi",
      },
      {
        id: "921202",
        city_id: "9212",
        name: "Anggi Gida",
      },
      {
        id: "921203",
        city_id: "9212",
        name: "Membey",
      },
      {
        id: "921204",
        city_id: "9212",
        name: "Sururey",
      },
      {
        id: "921205",
        city_id: "9212",
        name: "Didohu",
      },
      {
        id: "921206",
        city_id: "9212",
        name: "Taige",
      },
      {
        id: "921207",
        city_id: "9212",
        name: "Catubouw",
      },
      {
        id: "921208",
        city_id: "9212",
        name: "Testega",
      },
      {
        id: "921209",
        city_id: "9212",
        name: "Minyambaouw",
      },
      {
        id: "921210",
        city_id: "9212",
        name: "Hingk",
      },
      {
        id: "927101",
        city_id: "9271",
        name: "Sorong",
      },
      {
        id: "927102",
        city_id: "9271",
        name: "Sorong Timur",
      },
      {
        id: "927103",
        city_id: "9271",
        name: "Sorong Barat",
      },
      {
        id: "927104",
        city_id: "9271",
        name: "Sorong Kepulauan",
      },
      {
        id: "927105",
        city_id: "9271",
        name: "Sorong Utara",
      },
      {
        id: "927106",
        city_id: "9271",
        name: "Sorong Manoi",
      },
      {
        id: "927107",
        city_id: "9271",
        name: "Sorong Kota",
      },
      {
        id: "927108",
        city_id: "9271",
        name: "Klaurung",
      },
      {
        id: "927109",
        city_id: "9271",
        name: "Malaimsimsa",
      },
      {
        id: "927110",
        city_id: "9271",
        name: "Maladum Mes",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("districts", null, {});
  },
};
