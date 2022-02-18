import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { capitalize } from "..";
import { Header } from "../../components/Header";
import { products } from "../../data/product";
import { socialMedias } from "../../data/social-media";

const brandName = "Indo Brooms Market";

// Classes
const containerClass =
  "w-full p-4 mb-12 sm:max-w-540px md:max-w-768px lg:max-w-960px xl:max-w-1140px align-center";

const ProductPage = () => {
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
                  OUR
                </p>
                <h2 className="text-5xl text-center text-white mt-2">
                  PRODUCT
                </h2>
              </div>
            </div>
          </div>
          {/* End Top Image */}

          {/* Product Group */}
          <ProductGroup />
          <div className="mt-10"></div>
        </div>
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
                      <Link key={idx} href={"/product/" + product.slug}>
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

const ProductGroup = () => {
  const CardGroup = () => {
    return (
      <div className="flex flex-col py-2 px-6 justify-center bg-sky-100">
        {/* <div className="flex w-full justify-center my-4">
          <h4 className="text-theme-text font-normal text-2xl">{group.name}</h4>
        </div> */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col justify-center"
                style={{
                  background: "linear-gradient(0deg, #FFFFFF 70%, #71bc42 0%)",
                }}
              >
                <div className="flex flex-row w-full justify-center p-8">
                  <div className="relative h-32 w-32 rounded-full">
                    <Image
                      className="rounded-full"
                      layout="fill"
                      src={product.images[0].url}
                      alt={product.name}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h2 className="text-xl mb-2 text-center text-black">
                    {product.name}
                  </h2>
                </div>
                {/* <div className="text-xs w-full mb-4">
                  <p className="text-center">{group.name}</p>
                </div> */}
                <div className="flex flex-row w-full justify-center">
                  <div
                    className="w-fit mb-4 py-2 px-3 rounded"
                    style={{ backgroundColor: "#71bc42" }}
                  >
                    <Link href={"/product-detail/" + product.slug}>
                      <a>
                        <p className="text-white w-auto">{"See Our Product"}</p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col mt-6 w-full h-auto justify-center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mx-0 sm:mx-12 xl:mx-48">
        <CardGroup />
      </div>
    </div>
  );
};

export default ProductPage;
