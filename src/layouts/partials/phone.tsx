import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Get_your_customers } from "@/types";
import Link from "next/link";
import image1 from "../../../public/assets/phone.png";
import Image from "next/image";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Get_your_customers;
  reverse?: boolean;
}

const Phone = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="">
          <div className="container mt-14">
            <h2
              className={`mb-6 text-4xl sm:text-5xl`}
              style={{
                // fontSize: "48px",
                lineHeight: "57.6px",
                textAlign: "center",
                color: "white",
              }}
            >
              Chat with Experts!
            </h2>
            <div className="rounded-xl px-3 py-16 xl:p-20 bg-gradient-to-b from-[#04393e] to-transparent">
              <div className={`row items-center justify-between`}>
                <div className="mb-10 md:col-7 lg:col-6 md:order-2 md:mb-0">
                <Image
  className="w-full"
  src={image1}
  height={100}
  width={200} // Adjust the width as needed
  alt="cta-image"
/>
                </div>
                <div className="md:col-5 md:order-1">
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.title,
                    )}
                    className="mb-2 text-3xl sm:text-4xl"
                    style={{
                      // fontSize: "40px",
                      lineHeight: "50px",
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
                    <a
                      className="btn btn-primary"
                      href="https://calendly.com/myprobuddy"
                      target="_blank"
                    >
                      Meet Your Advisor
                    </a>
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

export default Phone;
