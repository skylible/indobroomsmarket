import type { GetStaticProps } from "next";
import React, { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { InView } from "react-intersection-observer";
// import {
//   core_value,
//   feature,
//   hero,
//   PrismaClient,
//   registered_on,
//   social_media,
//   top_product,
// } from "@prisma/client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Header } from "../components/Header";
import { products } from "../data/product";
import { coreValues } from "../data/core-value";
import { heroes } from "../data/hero";
import { socialMedias } from "../data/social-media";

// export const getStaticProps: GetStaticProps = async () => {
//   const prisma = new PrismaClient();
//   const [heroes, topProducts, features, registeredOns, socialMedias] =
//     await Promise.all([
//       prisma.hero.findMany(),
//       prisma.top_product.findMany(),
//       prisma.feature.findMany(),
//       prisma.registered_on.findMany(),
//       prisma.social_media.findMany(),
//     ]);
//   return {
//     props: {
//       heroes,
//       topProducts,
//       features,
//       registeredOns,
//       socialMedias,
//     },
//   };
// };

const brandName = "Indo Brooms Market";

// Classes
const containerClass =
  "w-full p-4 mb-12 sm:max-w-540px md:max-w-768px lg:max-w-960px xl:max-w-1140px align-center";

// const Home: ReactNode = (props: {
//   heroes: hero[];
//   topProducts: top_product[];
//   features: feature[];
//   registeredOns: registered_on[];
//   socialMedias: social_media[];
// }) => {
const Home: ReactNode = () => {
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
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        /> */}
      </Head>

      <Header brandName={brandName} containerClass={containerClass} />

      <main style={{ marginTop: -100 }}>
        {/* Floating button */}
        <Link href={"/"}>
          <a>
            <div className="fixed bottom-0 right-0 h-16 w-16 sm:h-20 sm:w-20 m-7 sm:m-10 p-2 bg-green-600 rounded-full z-10">
              <Image src={"/whatsapp.svg"} alt={"whatsapp"} layout="fill" />
            </div>
          </a>
        </Link>

        {/* Hero */}
        <Hero />

        {/* Product */}
        <Product />

        {/* Core value */}
        <CoreValues />

        {/* Meet us */}
        {/* <Features features={props.features} /> */}

        {/* Registered On */}
        {/* <RegisteredOn registeredOns={props.registeredOns} /> */}
      </main>

      <footer>
        <div
          className="flex justify-center py-14 md:py-32 w-full"
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
                <h2 className="mb-1 md:mb-6 text-white">{brandName.toUpperCase()}</h2>
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
                      <Link key={idx} href={'/product/' + product.slug}>
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

const Hero = () => {
  // inter = heroes.sort(
  //   (a, b) => (a.sequence || 0) - (b.sequence || 0)
  // );
  const [currIdx, setCurrIdx] = React.useState(0);

  const nextIdx = () => {
    console.log("ne");
    let idx = currIdx + 1;
    if (idx >= heroes.length) {
      idx = 0;
    }
    setCurrIdx(idx);
  };
  const prevIdx = () => {
    let idx = currIdx - 1;
    if (idx < 0) {
      idx = heroes.length - 1;
    }
    setCurrIdx(idx);
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      nextIdx();
    }, 5000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currIdx]);

  const slides = heroes.map((hero, idx) => {
    const Slide = () => {
      return (
        <div
          className="flex flex-grow mb-28 h-192 relative"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${hero.image_url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-row w-full h-full justify-center z-10">
            <div className="flex flex-col justify-center max-w-3xl z-20">
              <p
                className="text-white text-center mb-4"
                style={{ fontSize: 18 }}
              >
                {hero.subtitle}
              </p>
              <h1 className="mb-12 text-white text-center text-7xl">
                {hero.title}
              </h1>
              <div className="flex flex-row justify-center">
                <div
                  className="w-fit rounded-md mb-4 border-2 border-white z-20"
                  style={{
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingLeft: 12,
                    paddingRight: 12,
                  }}
                >
                  <Link href={hero.button_url || ""}>
                    <a>
                      <button className="text-white w-auto z-30">
                        {hero.button_text}
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    return <Slide key={idx} />;
  });

  return (
    <Carousel
      autoPlay={true}
      showArrows={true}
      showThumbs={false}
      showStatus={false}
    >
      {slides}
    </Carousel>
  );
};

const Product = () => {
  const cards = products.map((product) => {
    const Card = () => {
      const [isInView, setIsInView] = React.useState(false);
      let cardClass = "";
      if (isInView) cardClass = "fade-in";
      else cardClass = "fade-out";
      return (
        <InView
          triggerOnce={true}
          onChange={(inView, entry) => {
            setIsInView(inView);
          }}
        >
          <div className={"flex flex-col h-auto w-full rounded " + cardClass}>
            <div className="w-full mb-6 h-32 relative rounded">
              <Image
                className="rounded-t"
                src={product.images[0].url}
                layout={"fill"}
                objectFit={"cover"}
                alt={product.name}
              />
            </div>
            <div className="w-full">
              <h2 className="text-3xl mb-2">{product.name}</h2>
            </div>
            <div className="w-full mb-4">
              <p>{product.short_description}</p>
            </div>
            <div className="w-fit mb-4 py-2 px-5 border-2 border-theme-text rounded">
              <Link href={"/product-detail/" + product.slug}>
                <a>
                  <p className="text-theme-text w-auto">{"See Our Product"}</p>
                </a>
              </Link>
            </div>
          </div>
        </InView>
      );
    };
    return <Card key={product.id} />;
  });

  const [titleInView, setTitleInView] = React.useState(false);
  let titleClass = "";
  if (titleInView) titleClass = "fade-in";

  return (
    <div className="flex w-full h-auto justify-center">
      <div className={"h-full w-auto " + containerClass}>
        <div className="flex flex-col h-full w-full items-center">
          <InView
            triggerOnce={true}
            onChange={(inView, entry) => {
              setTitleInView(inView);
            }}
          >
            <div className={"w-full mb-12 " + titleClass}>
              <p
                className="text-gray-500 text-center text-xs font-bold"
                style={{ color: "#BBBBBB" }}
              >
                OUR TOP
              </p>
              <h2 className="text-5xl text-center">PRODUCT</h2>
            </div>
          </InView>
          <div className="mt-12 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 w-full h-auto">
            {cards}
          </div>
        </div>
      </div>
    </div>
  );
};

const CoreValues = () => {
  const [isTitleInView, setTitleInView] = React.useState(false);
  let titleClass = "";
  if (isTitleInView) titleClass = "fade-in";
  else titleClass = "fade-out";

  const cards = coreValues.map((coreValue, idx) => {
    const Card = () => {
      const [isInView, setIsInView] = React.useState(false);
      let cardClass = "";
      if (isInView) cardClass = "fade-in";
      else cardClass = "fade-out";

      return (
        <InView
          triggerOnce={true}
          onChange={(inView, entry) => {
            setIsInView(inView);
          }}
        >
          <div
            className={
              "transition flex flex-col h-full w-full px-10 py-8 bg-white rounded-lg shadow-xl z-10 " +
              cardClass
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mb-5 text-theme-text"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex w-full">
              <h4 className="text-xl mb-2">{coreValue.title}</h4>
            </div>
            <div className="flex w-full mb-4">
              <p>{coreValue.description}</p>
            </div>
          </div>
        </InView>
      );
    };
    return <Card key={idx} />;
  });

  return (
    <div className="flex flex-col w-full h-auto justify-center">
      <div className="flex w-full bg-theme-text" style={{ minHeight: 350 }} />
      <div className="flex w-full justify-center">
        <div
          className={"flex flex-col h-full " + containerClass}
          style={{ marginTop: -300 }}
        >
          <div className="flex flex-col h-full w-full">
            <InView
              triggerOnce={true}
              onChange={(titleInView, entry) => {
                setTitleInView(titleInView);
              }}
            >
              <div className={"w-full mb-12 " + titleClass}>
                <p className="text-center text-xs font-bold text-white">OUR</p>
                <h2 className="text-5xl text-center text-white  ">
                  CORE VALUE
                </h2>
              </div>
            </InView>
            <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 w-full h-auto">
              {cards}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Features = (props: { features: feature[] }) => {
//   const cards = props.features.map((feature, idx) => {
//     const Card = () => {
//       const [isInView, setIsInView] = React.useState(false);
//       let cardClass = "";
//       if (isInView) cardClass = "fade-in";
//       else cardClass = "fade-out";
//       return (
//         <InView
//           triggerOnce={true}
//           onChange={(inView, entry) => {
//             setIsInView(inView);
//           }}
//         >
//           <div className={"flex flex-col h-auto w-full rounded " + cardClass}>
//             <div className="w-full mb-6 h-32 relative rounded">
//               <Image
//                 className="rounded"
//                 src={feature.image_url || ""}
//                 layout={"fill"}
//                 objectFit={"cover"}
//                 alt={feature.title}
//               />
//             </div>
//             <div className="w-full">
//               <h5 className="text-xl mb-2">{feature.title}</h5>
//             </div>
//             <div className="w-full mb-4">
//               <p>{feature.description}</p>
//             </div>
//             <div className="flex flex-row justify-start">
//               <div
//                 className="w-fit bg-theme-text rounded-md mb-4 border-2 border-theme-text"
//                 style={{
//                   paddingTop: 6,
//                   paddingBottom: 6,
//                   paddingLeft: 12,
//                   paddingRight: 12,
//                 }}
//               >
//                 <Link href={feature.button_url || ""}>
//                   <a>
//                     <p className="text-white">{feature.button_text}</p>
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </InView>
//       );
//     };
//     return <Card key={idx} />;
//   });
//   return (
//     <div className="flex w-full h-auto justify-center">
//       <div className={"h-full w-auto " + containerClass}>
//         <div className="flex flex-col h-full w-full items-center">
//           <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 w-full h-auto">
//             {cards}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RegisteredOn = (props: { registeredOns: registered_on[] }) => {
//   const [isInView, setIsInView] = React.useState(false);
//   let cardClass = "";
//   if (isInView) cardClass = "fade-in";
//   else cardClass = "fade-out";

//   return (
//     <InView
//       triggerOnce={true}
//       onChange={(inView, entry) => {
//         setIsInView(inView);
//       }}
//     >
//       <div className={"flex w-full h-auto justify-center " + cardClass}>
//         <div className={"h-full w-auto " + containerClass}>
//           <div className="flex flex-col mt-4 mb-24 w-full items-center">
//             <h2 className="text-5xl">WE REGISTERED ON</h2>
//           </div>
//           <div className="mb-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
//             {props.registeredOns.map((image, idx) => {
//               return (
//                 <div className="w-full mb-6 h-32 relative" key={idx}>
//                   <Image
//                     src={image.image_url}
//                     alt={image.name || ""}
//                     height={100}
//                     width={100}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </InView>
//   );
// };

export function capitalize(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1))
    .join(" ");
}

export default Home;
