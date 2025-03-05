import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Get_your_customers } from "@/types";
import Link from "next/link";
import image1 from "../../../public/assets/amrish.png";
import { Author } from "@/types";
import { getSinglePage } from "@/lib/contentParser";
import AuthorCard from "@/components/AuthorCard";
import { getListPage } from "@/lib/contentParser";
import Image from "next/image";


interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Get_your_customers;
  reverse?: boolean;
}

const CallToAction = ({ data }: { data: PageData }) => {
   const authorIndex: Author = getListPage("authors/_index.md");
  const authors: Author[] = getSinglePage("authors");
  return (
    <>
      {data.frontmatter.enable && (
        <section className="mt-4">
          <div className="container">
            {/* <h2
              className={`mb-12`}
              style={{
                fontSize: "48px",
                lineHeight: "57.6px",
                textAlign: "center",
                color: "white",
              }}
            >
              Get Expert Help
            </h2> */}
            <div className="rounded-xl pt-16 xl:px-20 bg-gradient-to-b from-[#612A84] to-transparent">
              <div className={`row items-center justify-between px-4`}>
                <div className="mb-10 md:col-7 lg:col-5 md:order-2 md:mb-0">
                <Image
  className="w-full"
  src={image1}
  height={100}
  width={200} // Set an appropriate width
  alt="cta-image"
/>
                </div>
                <div className="md:col-5 md:order-1">
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.title,
                    )}
                    className="mb-2 text-4xl sm:text-4xl"
                    style={{
                      // fontSize: "40px",
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
               <section className="section-sm pb-0">
        <div className="container">
          <div className="row justify-center">
            {authors.map((author: Author, index: number) => (
              <div className="mb-8 md:col-6 lg:col-4" key={index}>
                <AuthorCard data={author} />
              </div>
            ))}
          </div>
        </div>
      </section>
            </div>
          </div>

        </section>
      )}
    </>
  );
};

export default CallToAction;
