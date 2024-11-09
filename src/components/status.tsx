"use client";
import { INFURA_GATEWAY, SITIOS_WEB } from "../lib/constants";
import Image from "next/legacy/image";
import { ReactElement, useEffect, useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { Dictionary } from "./status.types";

export default function StatusPage({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: string;
}) {
  function formatDate(date: Date) {
    return date.toISOString().split("T")[0];
  }
  const [dias, setDias] = useState<"90" | "45">("90");
  const [leftPosition, setLeftPosition] = useState("-left-28");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updatePosition = () => {
        setLeftPosition(window.innerWidth < 700 ? "-left-14" : "-left-28");
      };
      updatePosition();
      window.addEventListener("resize", updatePosition);
      return () => window.removeEventListener("resize", updatePosition);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 700) {
      setDias("45");
    }
  }, []);

  return (
    <div className="relative w-full h-fit flex flex-col gap-6 items-start justify-start pt-12 bg-offBlack overflow-none">
      <div className="px-6 items-start justify-start w-fit h-fit flex font-fut text-white uppercase">
        {dict.status}
      </div>
      <div className="relative w-full h-fit flex flex-col gap-10 px-6">
        {SITIOS_WEB.map(
          (
            sitio: {
              titulo: string;
              sitio: string;
              fechas: {
                status: string;
                date: Date;
              }[];
            },
            siteIndex: number
          ) => (
            <div
              key={siteIndex}
              className="relative w-full h-fit flex items-start justify-start flex-col gap-4 border border-offWhite p-6 rounded-sm font-fut text-offWhite"
            >
              <div
                className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
                title={sitio.sitio}
                onClick={() => window.open(sitio.sitio)}
              >
                {sitio.titulo}
              </div>
              <div className="relative w-full h-fit gap-1 flex flex-row">
                {Array.from({
                  length: Number(dias),
                }).map((_, dayIndex: number) => {
                  const date = new Date();
                  date.setDate(date.getDate() - (Number(dias) - 1 - dayIndex));
                  const fecha = formatDate(date);

                  return (
                    <div
                      key={dayIndex}
                      className={`relative w-full h-10 flex items-center justify-center cursor-pointer ${
                        sitio?.fechas?.find(
                          (f) => formatDate(new Date(f.date)) == fecha
                        )
                          ? "bg-[#e9680f] hover:bg-[#e9680f]/70"
                          : "bg-[#10a37f] hover:bg-[#10a37f]/70"
                      }`}
                      onMouseEnter={(e) => {
                        const tooltip = document.getElementById(
                          `tooltip-${siteIndex}-${dayIndex}`
                        );
                        if (tooltip) {
                          console.log({ tooltip });
                          tooltip.style.opacity = "1";
                        }
                      }}
                      onMouseLeave={(e) => {
                        const tooltip = document.getElementById(
                          `tooltip-${siteIndex}-${dayIndex}`
                        );

                        if (tooltip) {
                          tooltip.style.opacity = "0";
                        }
                      }}
                    >
                      <div
                        id={`tooltip-${siteIndex}-${dayIndex}`}
                        className={`absolute w-fit bg-black/70 text-white text-center border border-offWhite py-1 px-1.5 text-xxxs text-center opacity-0 transition-opacity duration-300 z-50 -top-12 pointer-events-none ${
                          dayIndex < 45 ? "left-0" : leftPosition
                        }`}
                      >
                        {sitio?.fechas?.find(
                          (f) => formatDate(new Date(f.date)) == fecha
                        )?.status && "⚠️"}{" "}
                        {fecha}:{" "}
                        {sitio?.fechas?.find(
                          (f) => formatDate(new Date(f.date)) == fecha
                        )?.status || dict.operacional}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="relative w-full h-fit flex items-center justify-between flex-row gap-3 font-mag text-xxs text-offWhite opacity-70">
                <div className="relative w-fit h-fit flex whitespace-nowrap">
                  {dict?.[dias]}
                </div>
                <div className="relative w-full h-px flex bg-offWhite"></div>
                <div className="relative w-fit h-fit flex">{dict.hoy}</div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="relative w-full h-fit flex items-center justify-center pt-20">
        <div
          className={`relative flex border-2 border-offWhite bg-offWhite w-full md:w-fit p-2 h-fit lg:h-full items-center justify-center`}
        >
          <Image
            layout="fill"
            src={`${INFURA_GATEWAY}/ipfs/QmSvQQsELrcEaGrQ2L2Lak8F2hgMeiBxw7MwhCrog6snDj`}
            priority
            draggable={false}
          />
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div
              id="digi"
              className="relative flex w-fit text-center h-fit text-offWhite font-mag text-[8.5vw] p-4"
            >
              DIGITALAX
            </div>
            <div
              id="code"
              className="font-fut w-full h-fit text-[1.4vw] lg:text-[1vw] relative flex items-center justify-center pb-2"
            >
              100 105 103 105 116 97 108 97 120
            </div>
            <div className="relative w-full px-8 h-10 flex items-center justify-center flex-col lg:pb-0 pb-6">
              <div className="w-full h-full border-x-2 border-b-2 border-white flex items-center justify-center relative"></div>
              <div className="w-full h-full border-x-2 border-white flex items-center justify-center relative"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full h-fit items-center justify-center gap-2 flex-col">
        <div
          id="foot1"
          className="relative flex items-center justify-center w-full h-1"
        ></div>
        <div
          id="foot2"
          className="relative flex items-center justify-center w-full h-1"
        ></div>
        <div
          id="foot3"
          className="relative flex items-center justify-center w-full h-1"
        ></div>
      </div>
      <div className="relative w-full h-fit flex items-end justify-end">
        <div className="relative w-fit h-fit flex-row gap-3 flex items-end justify-end md:pr-2 md:order-3 order-1 mr-0">
          {[
            {
              image: "QmWVdyGgXbPL5SiRnQwALHvWzAnyiXBos1oB4TVTqg7saV",
              link: "https://blog.digitalax.xyz/",
              title: "Blog",
            },
            {
              image: "QmP5349vcKLNXUhtLyZWQXB8vEbFwRcKLzzB93vxkLsvpw",
              link: "https://github.com/digitalax",
              title: "Github",
            },
            {
              image: "QmeA7R3J8FrhZuMmiFFrVqNmWzKkJCbP51pajFrYdEGBVX",
              link: "https://cypher.digitalax.xyz/autograph/digitalax",
              title: "Autograph",
            },
            {
              link: "https://twitter.com/digitalax_",
              title: "Twitter",
              component: <BsTwitter size={30} color={"#FFDCFF"} />,
            },
            {
              link: "https://youtube.com/@digitalax",
              title: "Youtube",
              image: "Qmchp1UWTavZBxq9mTbjASESgRRmsFNXzmxzaMzRSf9aax",
            },
          ].map(
            (
              item: {
                image?: string;
                title: string;
                link: string;
                component?: ReactElement;
              },
              index: number
            ) => {
              return (
                <div
                  key={index}
                  className="relative w-5 h-5 flex items-center justify-center cursor-pointer active:scale-95"
                  onClick={() => window.open(item.link)}
                  title={item.title}
                >
                  {item?.component ? (
                    item.component
                  ) : (
                    <Image
                      src={`${INFURA_GATEWAY}/ipfs/${item.image}`}
                      layout="fill"
                      draggable={false}
                    />
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
