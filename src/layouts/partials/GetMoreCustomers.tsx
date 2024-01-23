"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action, Slide } from "@/types";
import Link from "next/link";
import image1 from "../../../public/bg/bumble-background.png";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const GetMoreCustomers = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section>
          <div className="container">
            <div className="rounded-xl px-4 xl:p-20 bg-gradient-to-t from-[#7b3f30] to-transparent">
              <div className={`row items-center justify-between`}>
                <div className="hidden md:block mb-10 md:col-7 lg:col-7 md:order-2 md:mb-0">
                  <ImageFallback
                    className="w-full h-auto "
                    src={image1}
                    width={392}
                    height={390}
                    alt="cta-image"
                  />
                </div>
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
                    className="mb-6 text-[#be9a94]"
                    style={{
                      fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                      fontSize: "18px",
                      lineHeight: "27px",
                      textAlign: "left",
                    }}
                  />
                  {data.frontmatter.button.enable && (
                    <Link
                      className="btn btn-primary"
                      href={data.frontmatter.button.link}
                    >
                      {data.frontmatter.button.label}
                    </Link>
                  )}
                </div>
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
                  {data.frontmatter.slides.map(
                    (item: Slide, index: number) => (
                      <SwiperSlide key={index}>
                        <ImageFallback
                          height={200}
                          width={200}
                          className="w-full h-auto rounded-2xl"
                          src={item.image}
                          alt={item.name}
                        />
                      </SwiperSlide>
                    ))}
              </Swiper>
                
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default GetMoreCustomers;
