import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Get_your_customers } from "@/types";
import Link from "next/link";
import image1 from "../../../public/bg/live-chat.png";


interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Get_your_customers;
  reverse?: boolean;
}

const CallToAction = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="mb-28">
          <div className="container">
             <h2
              className={`mb-12`}
              style={{
                fontSize: "48px",
                lineHeight: "57.6px",
                textAlign: "center",
                color: "white",
                background: "linear-gradient(to right, #f57114, #5e2591)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}
            >Plan For Sale</h2>
            <div className="rounded-xl py-16 xl:p-20 bg-gradient-to-b from-[#044045] to-transparent">
              <div className={`row items-center justify-between`}>
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
                      fontSize: "40px",
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
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
