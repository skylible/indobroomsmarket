export const products: Product[] = [
  {
    id: 1,
    name: "Lidi",
    slug: "lidi",
    description:
      "Lidi sawit adalah tulang daun tanaman sawit, Indonesia merupakan Negara yang memiliki perkebunan kelapa sawit terluas di dunia, dengan ini Indonesia menjadi penghasil lidi terbesar di  dunia. Kami memperoleh dan memproses lidi sawit kami di Sumatra utara, kami telah berkembang menjadi salah satu eksportir lidi sawit  terbesar dari Indonesia. Kami mampu mengekspor sekitar 250 MT lidi sawit per bulan. kami memproses lidi sawit dengan daun kelapa sawit yang akan diambil tulangnya harus produk terbaik, setelah selesai memisahkan daun dan tulangnya secara otomatis menggunakan mesin, kami akan menjemur lidi kelapa sawit di terik matahari agar produk tidak mengandung bakteri dan jamur yang dapat merusak kualitas produk pada saat pengiriman atau saat sampai di tempat tujuan selain itu, pengeringan berguna untuk mengurangi kadar air stik dan membuat stik kering dan kuat serta tidak berbau jika lama dalam perjalanan ke negara tujuan.",
    short_description:
      "Kami memperoleh dan memproses lidi sawit kami di Sumatra utara, kami telah berkembang menjadi salah satu eksportir lidi sawit  terbesar dari Indonesia. Kami mampu mengekspor sekitar 250 MT lidi sawit per bulan. kami memproses lidi sawit dengan daun kelapa sawit yang akan diambil tulangnya harus produk terbaik",
    images: [
      { url: "/lidi1.jpeg" },
      { url: "/lidi2.jpeg" },
      { url: "/lidi3.jpeg" },
      { url: "/lidi4.jpeg" },
      { url: "/lidi5.jpeg" },
      { url: "/lidi6.jpeg" },
      { url: "/lidi7.jpeg" },
      { url: "/lidi8.jpeg" },
      { url: "/lidi9.jpeg" },
      { url: "/lidi10.jpeg" },
      { url: "/lidi11.jpeg" },
      { url: "/lidi12.jpeg" },
      { url: "/lidi13.jpeg" },
      { url: "/lidi14.jpeg" },
    ],
    specs: [
      "TYPE : PREMIUM",
      "LENGTH : 90-120 CM",
      "COLOR : GRENISH YELLOW",
      "CONDITION : WELL DRIED",
      "PACKAGING : Woven plastic bags/ gunny plastics (as per your requirement)",
      "PLACE OF ORIGIN : SOUTH SUMATRA",
      "WEIGHT : 50KG/BAG",
    ],
    other_specs: [
      "TYPE : HIGH QUALITY",
      "LENGTH : 100-120 CM",
      "COLOR : GRENISH YELLOW",
      "CONDITION : WELL DRIED",
      "PACKAGING : Woven plastic bags/ gunny plastics (as per your requirement)",
      "PLACE OF ORIGIN : SOUTH SUMATRA",
      "WEIGHT : 50KG/BAG",
    ],
  },
  {
    id: 2,
    name: "Nipah",
    slug: "nipah",
    description:
      "Lidi sawit adalah tulang daun tanaman sawit, Indonesia merupakan Negara yang memiliki perkebunan kelapa sawit terluas di dunia, dengan ini Indonesia menjadi penghasil lidi terbesar di  dunia. Kami memperoleh dan memproses lidi sawit kami di Sumatra utara, kami telah berkembang menjadi salah satu eksportir lidi sawit  terbesar dari Indonesia. Kami mampu mengekspor sekitar 250 MT lidi sawit per bulan. kami memproses lidi sawit dengan daun kelapa sawit yang akan diambil tulangnya harus produk terbaik, setelah selesai memisahkan daun dan tulangnya secara otomatis menggunakan mesin, kami akan menjemur lidi kelapa sawit di terik matahari agar produk tidak mengandung bakteri dan jamur yang dapat merusak kualitas produk pada saat pengiriman atau saat sampai di tempat tujuan selain itu, pengeringan berguna untuk mengurangi kadar air stik dan membuat stik kering dan kuat serta tidak berbau jika lama dalam perjalanan ke negara tujuan.",
    short_description:
      "Kami menawarkan lidi nipah berkualitas tinggi dengan rata-rata tinggi 120 cm hingga 220 cm, lidi nipah yang kami tawarkan banyak diminati karena berkualitas tinggi dalamm pembuatan sapu, khusus nya untuk sapu kasur dan sapu halaman. Kami menyediakan lidi nipah dengan tingkat kekeringan 10 – 5 % sehingga menghasilkan lidi nipah yang berkualitas",
    images: [
      { url: "/nipah1.jpeg" },
      { url: "/nipah2.jpeg" },
      { url: "/nipah3.jpeg" },
      { url: "/nipah4.jpeg" },
      { url: "/nipah5.jpeg" },
      { url: "/nipah6.jpeg" },
      { url: "/nipah7.jpeg" },
      { url: "/nipah8.jpeg" },
      { url: "/nipah9.jpeg" },
      { url: "/nipah10.jpeg" },
      { url: "/nipah11.jpeg" },
      { url: "/nipah12.jpeg" },
      { url: "/nipah13.jpeg" },
      { url: "/nipah14.jpeg" },
      { url: "/nipah15.jpeg" },
      { url: "/nipah16.jpeg" },
      { url: "/nipah17.jpeg" },
      { url: "/nipah18.jpeg" },
    ],
    specs: [
      "TYPE : HIGH QUALITY",
      "LENGTH : 100-120 CM",
      "COLOR : GRENISH YELLOW",
      "CONDITION : WELL DRIED",
      "PACKAGING : Woven plastic bags/ gunny plastics (as per your requirement)",
      "PLACE OF ORIGIN : SOUTH SUMATRA",
      "WEIGHT : 50KG/BAG",
    ],
  },
];

export interface ProductImage {
  url: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  images: ProductImage[];
  specs: string[];
  other_specs?: string[];
}
