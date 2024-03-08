"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action, Slide } from "@/types";
import Link from "next/link";
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
            <div className="rounded-xl p-3 xl:p-20 bg-gradient-to-t from-[#2a313d] to-transparent">
              <div className={`row items-center justify-between`}>
                <div className="md:col-5 md:order-2">
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.title,
                    )}
                    className="mb-2 text-4xl sm:text-5xl"
                    style={{
                      // fontSize: "48px",
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
                      className="btn mb-8 btn-primary"
                      href="https://www.notion.so/414fbbfd0e284746b9ce201d6c9022bf?v=8f13602cf0404371a9abb14b756dcc19"
                    >
                      Explore Courses
                    </Link>
                  )}
                </div>
                <div className="hidden md:block md:col-7 lg:col-7 md:order-2 md:mb-0">
                  <ImageFallback
                    className="w-full h-auto rounded-2xl"
                    src={data.frontmatter.image}
                    width={392}
                    height={390}
                    alt="cta-image"
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-white mb-2 font-bold">Curated Courses</span>
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
                {data.frontmatter.slides.map((item: Slide, index: number) => (
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
