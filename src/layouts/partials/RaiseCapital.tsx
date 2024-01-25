"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Raise_capital, Slide } from "@/types";
import Link from "next/link";
import image1 from "../../../public/bg/bumble-background.png";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Raise_capital;
}

const RaiseCapital = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="mt-10">
          <div className="container">
            <h1 className="text-center mb-12 text-6xl"
           >Raise Capital</h1>

            <div className="rounded-xl p-4 xl:p-20 bg-gradient-to-b from-[#2a313d] to-transparent">
              <div className={`row items-center justify-between`}>
                <div className="md:col-5 md:order-2">
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.title,
                    )}
                    className="mb-2"
                    style={{
                      fontSize: "48px",
                      lineHeight: "57.6px",
                      textAlign: "left",
                    }}
                  />
                  <p
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.description,
                    )}
                    className="mb-6 text-[#96a3b9]"
                    style={{
                      fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                      fontSize: "14px",
                      lineHeight: "27px",
                      textAlign: "left",
                    }}
                  />
                  {data.frontmatter.button.enable && (
                    <Link
                      className="btn btn-primary"
                      href="https://myprobuddy.freshdesk.com/support/tickets/new?ticket_form=mpb_startup_assistance_form"
                    >
                      {data.frontmatter.button.label}
                    </Link>
                  )}
                </div>
                <div className="hidden md:grid md:grid-cols-4 mb-10 md:col-7 lg:col-7 md:order-2 md:mb-0">
                  {data.frontmatter.illustrations.map(
                    (item: Slide, index: number) => (
                      <div
                        className="flex flex-col items-center justify-around m-1 rounded-2xl p-6 py-8 bg-slate-900"
                        key={index}
                      >
                        <ImageFallback
                          height={50}
                          width={50}
                          className="w-16 h-16 rounded-2xl mb-10"
                          src={item.image}
                          alt={item.name}
                        />
                        <span className="text-white font-semibold text-center">
                          {item.name}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="flex items-center mb-2 mt-12">
                <span className="text-white font-bold">Recently Funded</span>
                <hr className="flex-1 ml-4 opacity-30 border-[1px]" />
              </div>
              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                spaceBetween={24}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
              >
                {data.frontmatter.funded.map((item: Slide, index: number) => (
                  <SwiperSlide key={index}>
                    <ImageFallback
                      height={200}
                      width={200}
                      className="w-full h-auto rounded-2xl"
                      src={item.image}
                      alt={item.name}
                    />
                    <span className="block font-semibold text-white text-lg">
                      {item.name}
                    </span>
                    <span className="block font-semibold">
                      {item.description}
                    </span>
                  </SwiperSlide>
                ))}
              </Swiper>


              <div className="flex items-center justify-stretch mt-20">
                <div className="flex flex-col items-center justify-center w-full border-0 md:border-r-[1px] border-white/30">
                  <ImageFallback
                    height={200}
                    width={200}
                    className="w-28 h-28 rounded-2xl mb-6"
                    src={"/bg/rc/illustrations/icon-tree-raised.svg"}
                    alt={"Raise Capital Icon"}
                  />
                  <h2>$6 Million+ Raised</h2>
                </div>
                <div className="flex flex-col items-center justify-center w-full border-0 md:border-l-[1px] border-white/30">
                  <ImageFallback
                    height={200}
                    width={200}
                    className="w-28 h-28 rounded-2xl mb-6"
                    src={"/bg/rc/illustrations/icon-ipo-handshake.svg"}
                    alt={"Raise Capital Icon"}
                  />
                  <h2>1M+ Startups Assisted</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RaiseCapital;

