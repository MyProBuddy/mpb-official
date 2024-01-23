import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";
import Link from "next/link";
import image1 from "../../../public/bg/expert-deck-review.png";


interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
  reverse?: boolean;
}

const CounterInfo = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="mb-28">
          <div className="container">
            <div className="rounded-xl px-4 py-16 xl:p-20 bg-gradient-to-b from-transparent to-[#1a232f]">
              <div className={`row flex-row-reverse items-center justify-between`}>
                <div className="mb-10 md:col-7 lg:col-7 md:order-2 md:mb-0">
                  <ImageFallback
                    className="w-full"
                    src={image1}
                    width={392}
                    height={390}
                    alt="cta-image"
                  />
                </div>
                <div className="md:col-5 md:order-1">
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
                    className="mb-6 text-[#be9a94]"
                    style={{
                      fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                      fontSize: "15px",
                      lineHeight: "27px",
                      textAlign: "left",
                    }}
                  >Stuck on something? Dont sweat it. Jump on a call with the Founder guru on the topic and get instant answers to anything from How to Optimize my Facebook Spend to Give me a brutal review of my Pitch Deck.</p>
                 
                    <Link
                      className="btn btn-primary"
                      href={data.frontmatter.button.link}
                    >
                     Connect With Experts
                    </Link>

                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CounterInfo;
