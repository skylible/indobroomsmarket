import { PrismaClient, social_media, top_product } from "@prisma/client";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { capitalize } from "..";
import { Header } from "../../components/Header";
import { Product, products } from "../../data/product";
import { Carousel } from "react-responsive-carousel";
import { socialMedias } from "../../data/social-media";

const brandName = "Indo Brooms Market";

// Classes
const containerClass =
  "w-full p-4 mb-12 sm:max-w-540px md:max-w-768px lg:max-w-960px xl:max-w-1140px align-center";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prisma = new PrismaClient();
  const [socialMedias] = await Promise.all([prisma.social_media.findMany()]);
  const slug = context.params?.slug as string;
  const product = products.find((product) => product.slug === slug);

  if (!product)
    return {
      notFound: true,
    };
  return {
    props: {
      products,
      product,
      socialMedias,
    },
  };
};

const ProductPage = (props: {
  products: Product[];
  product: Product;
  socialMedias: social_media[];
}) => {
  const product = props.product;
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
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/bg.jpeg)`,
            }}
          >
            <div className="flex flex-col flex-grow h-full justify-end">
              <div className="mb-16">
                <p className="text-theme-text text-center text-xs font-bold">
                  OUR PRODUCT
                </p>
                <h2 className="text-5xl text-center text-white mt-2">
                  {product.name}
                </h2>
              </div>
            </div>
          </div>
          {/* End Top Image */}

          {/* Product Definition */}
          <div className="flex flex-col justify-center w-full px-0 sm:px-12 xl:px-48 mt-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full items-center justify-center">
              <div>
                <Carousel autoPlay={true} swipeable={false}>
                  {product.images.map((image, idx) => {
                    return (
                      <Image
                        key={idx}
                        src={image.url}
                        height={550}
                        width={550}
                        alt={product.name}
                        layout="responsive"
                      />
                    );
                  })}
                </Carousel>
              </div>
              <div>
                <h2 className="text-black text-4xl">{product.name}</h2>
                <p className="mt-5">{product.description}</p>
                <div className="w-fit mt-5 py-2 px-4 rounded-md bg-theme-text">
                  <Link href={"/product-detail/" + product.slug}>
                    <a>
                      <p className="text-white w-auto">{"Contact Us"}</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Specs */}
            <div className="flex flex-col w-full">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="text-white bg-theme-text py-3">
                      SPECIFICATION
                    </th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: "#bdeaff" }}>
                  {product.specs.map((spec, idx) => {
                    const bgColor = idx % 2 ? "rgba(0, 0, 0, 0.05)" : "";
                    return (
                      <tr key={idx}>
                        <td
                          className={"text-gray-900 font-normal p-3 "}
                          style={{ backgroundColor: bgColor }}
                        >
                          {spec}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-10"></div>
      </main>

      <footer>
        <div
          className="flex justify-center py-14 md:py-24 w-full"
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
                <h2 className="mb-1 md:mb-6 text-white">
                  {brandName.toUpperCase()}
                </h2>
                <p className="text-white mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <h2 className="mb-1 md:mb-6 text-white">SOCIAL MEDIA</h2>
                <div className="flex flex-row">
                  {socialMedias.map((socialMedia, idx) => {
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
              <div className="mt-3 md:mt-0 px-3 md:w-1/5">
                <h2 className="mb-1 md:mb-6 text-white">PRODUCT</h2>
                <ul>
                  {products.map((product, idx) => {
                    return (
                      <Link key={idx} href={"/product-detail/" + product.slug}>
                        <a>
                          <li>{capitalize(product.name)}</li>
                        </a>
                      </Link>
                    );
                  })}
                </ul>
              </div>

              {/* Features */}
              {/* <div className="px-3 md:w-1/5">
                <h2 className="mb-6 text-white">FEATURES</h2>
                <ul>
                  <Link href={"/"}>
                    <a>
                      <li>Home</li>
                    </a>
                  </Link>
                </ul>
              </div> */}

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

export default ProductPage;
