import { PrismaClient, social_media, top_product } from "@prisma/client";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { capitalize } from "..";
import { Header } from "../../components/Header";

const brandName = "Indo Brooms Market";

// Classes
const containerClass =
  "w-full p-4 mb-12 sm:max-w-540px md:max-w-768px lg:max-w-960px xl:max-w-1140px align-center";

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient();
  const [topProducts, socialMedias] = await Promise.all([
    prisma.top_product.findMany(),
    prisma.social_media.findMany(),
  ]);
  return {
    props: {
      topProducts,
      socialMedias,
    },
  };
};

const ContactPage = (props: {
  topProducts: top_product[];
  socialMedias: social_media[];
}) => {
  return (
    <div>
      <Head>
        <title>{brandName}</title>
        <meta name="description" content={brandName} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Oswald"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <Header brandName={brandName} containerClass={containerClass} />

      <main style={{ marginTop: -100 }}>
        <div className="flex flex-col">
          {/* Top image */}
          <div
            className={"w-full h-72"}
            style={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/farm-banner-2.jpg)`,
            }}
          >
            <div className="flex flex-col flex-grow h-full justify-end">
              <div className="mb-16">
                <p className="text-theme-text text-center font-bold">About</p>
                <h2 className="text-5xl text-center text-white mt-2">
                  OUR COMPANY
                </h2>
              </div>
            </div>
          </div>
          {/* End Top Image */}

          {/* Content */}
          <div className="flex flex-col w-full p-6 md:p-24">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full md:pr-10">
              <div className="flex flex-1 flex-col">
                <h2 className="text-black text-3xl">OUR STORY</h2>
                <p className="mt-4 text-justify">
                  Indonesia telah di kenal sebagai penghasil minyak sawit
                  terbesar di dunia, dengan total luas lahan sawit kurang lebih
                  16 juta Hektar yang di dominasi kepemilikiannya di miliki oleh
                  perusuahaan-perusahaan besar. Sayangnya buru-buru kasar yang
                  bekerja di perkebunan kelapa sawit dan juga masyarakat sekitar
                  yang masih minim nya penghasilan mereka dan masih banyak yang
                  hidup dalam kemiskinan. Karena mereka hanya memiliki satu
                  sumber pendapatan yaitu dari gaji mereka bekerja di perkebunan
                  kelapa sawit. Oleh karena itu, kami menetapkan misi kami untuk
                  menghadirkan penghasilan tambahan bagi mereka dengan menjual
                  limbah perkebunan kelapa sawit yaitu lidi sawit.
                </p>
                <p className="mt-4 text-justify">
                  Indobroomsmarket adalah perusahaan swasta dengan basis menjual
                  lidi sawit langsung kepada pembeli di luar negri, kami
                  berkomitmen untuk menyediakan produk lidi sawit dan lidi nypah
                  berkualitas tinggi dengan harga pasar yang kompetiti dan
                  melayani pelanggan kami dengan kemampuan terbaik kami. Kami
                  akan berusaha memberikan sesuai jadwal seperti yang dijanjikan
                  meskipun pasar yang berfluktiasi. Didukung oleh ratusan petani
                  binaan kami, dan teknologi terbaik untuk industry kami, pada
                  akhirnya prioritas utama kamu adalah memenuhi kepuasaan dan
                  harapan pelanggan kami. Impian kami sederhana, kami ingin
                  membantu petani dan masyarakat sekitar untuk meningkatkan
                  standar kehidupan mereka.
                </p>
              </div>
              <div className="flex flex-1 pl-10">
                <div className="relative w-full h-full">
                  <Image
                    src={"/lidi7.jpeg"}
                    alt={"story"}
                    layout={"fill"}
                    objectFit={"contain"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div
          className="flex justify-center py-32 w-full"
          style={{
            background:
              "linear-gradient(to right, #2F80ED 0%, #43A7F0 51%, #58CCFF 100%)",
          }}
        >
          <div
            className={"flex flex-col w-full justify-center" + containerClass}
          >
            <div className=" w-full flex flex-col md:flex-row h-auto text-white">
              {/* About Us */}
              <div className="px-3 md:w-1/5">
                <h2 className="mb-6 text-white">{brandName.toUpperCase()}</h2>
                <p className="text-white mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <h2 className="mb-6 text-white">SOCIAL MEDIA</h2>
                <div className="flex flex-col md:flex-row">
                  {props.socialMedias.map((socialMedia, idx) => {
                    return (
                      <div className="mx-1" key={idx}>
                        <Image
                          src={socialMedia.image_url || ""}
                          alt={socialMedia.name + " link"}
                          width={50}
                          height={50}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Product */}
              <div className="px-3 md:w-1/5">
                <h2 className="mb-6 text-white">PRODUCT</h2>
                <ul>
                  {props.topProducts.map((product, idx) => {
                    return (
                      <Link key={idx} href={product.button_url || ""}>
                        <a>
                          <li>{capitalize(product.title)}</li>
                        </a>
                      </Link>
                    );
                  })}
                </ul>
              </div>

              {/* Features */}
              <div className="px-3 md:w-1/5">
                <h2 className="mb-6 text-white">FEATURES</h2>
                <ul>
                  <Link href={"/"}>
                    <a>
                      <li>Home</li>
                    </a>
                  </Link>
                </ul>
              </div>

              {/* Image */}
              <div className="md:w-2/5 flex flex-row justify-center">
                <Image
                  src={"/brand-image.png"}
                  alt={brandName}
                  width={256}
                  height={256}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
