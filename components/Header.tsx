import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = (props: {
  containerClass: string;
  brandName: string;
}) => {
  const brandName = props.brandName;
  const containerClass = props.containerClass;

  const [scrollPosition, setPosition] = React.useState(0);
  React.useEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  let bgColorClass = "";
  let textClass = "text-white";
  if (scrollPosition > 0) {
    bgColorClass = "bg-white shadow-md";
    textClass = "text-black";
  }

  let height = 96;
  if (scrollPosition > 128) {
    height = 80;
  }

  return (
    <header
      className={
        "transition flex flex-row w-full justify-center sticky top-0 z-50 " +
        bgColorClass
      }
      style={{ height }}
    >
      <div
        className={
          "flex flex-col h-full w-full mb-0 justify-center" + containerClass
        }
      >
        <div className="flex flex-row h-full w-full justify-center">
          <Link href={"/"}>
            <a className="flex flex-col justify-center">
              <Image
                src={"/navbar-image.png"}
                alt={brandName}
                width={169}
                height={48}
              />
            </a>
          </Link>

          <div className="flex w-full h-full justify-end">
            <Link href={"/"}>
              <a className="flex flex-col h-full justify-center">
                <p className={"text-center font-medium text-sm md:text-base " + textClass}>Home</p>
              </a>
            </Link>
            <Link href={"/about"}>
              <a className="flex flex-col h-full ml-2 sm:ml-4 justify-center">
                <p className={"text-center font-medium text-sm md:text-base " + textClass}>About</p>
              </a>
            </Link>
            <Link href={"/product"}>
              <a className="flex flex-col h-full justify-center ml-2 sm:ml-4">
                <p className={"text-center font-medium text-sm md:text-base " + textClass}>Product</p>
              </a>
            </Link>
            <Link href={"/contact"}>
              <a className="flex flex-col h-full justify-center ml-2 sm:ml-4">
                <p className={"text-center font-medium text-sm md:text-base " + textClass}>Contact</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
