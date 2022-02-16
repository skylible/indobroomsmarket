export const whatWeDos: WhatWeDo[] = [
  {
    title: "PENDIDIKAN DAN PELATIHAN",
    description:
      "Perusahaan kami berdedikasi untuk memberikan Pendidikan dan pelatihan berkelanjutan bagi Petani dan masyarakat di sekitar perkebunan kelapa sawit dan nypah untuk meningkatkan kesejahteraan mereka serta kualitas produk kami",
      image_url: '/what-we-do-3.jpeg',
  },
  {
    title: "PROGRAM PEMERINTAH",
    description:
      "Kami berpartisipasi dalam program pemerintah untuk mengembangkan produk komoditas dari desa tertinggal. Kami selalu berkomitmen untuk membantu petani Indonesia mensejahterakan dan membawa produk pertanian dari desa ke dunia.",
      image_url: '/what-we-do-3.jpeg',
  },
  {
    title: "PERKEBUNAN KELAPA SAWIT",
    description:
      "Kami memproses lidi sawit dari total lahan perkebunan 100.000 hektar perkebunan kelapa sawit yang kami binah di Sumatra utara",
    image_url: '/what-we-do-3.jpeg',
  },
];

export interface WhatWeDo {
  title: string;
  description: string;
  image_url?: string;
}
