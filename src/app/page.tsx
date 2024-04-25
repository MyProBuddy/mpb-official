import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import { IoSearch } from "react-icons/io5/index.js";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import Phone from "@/partials/phone";
import { Button, Feature } from "@/types";
import AnotherFeaturedin from "@/partials/AnotherFeaturedin";
import Link from "next/link";
import { FaCheck } from "react-icons/fa/index.js";
import LogoGrid from "@/partials/logoGrid";
import Counter from "@/partials/counter";
import CounterMid from "@/partials/CounterMid";
import CounterInfo from "@/partials/CounterInfo";
// import RaiseCapital from "@/partials/RaiseCapital";
import InteractiveCourses from "@/partials/InteractiveCourses";
import FeaturedIn from "@/partials/featuredin";
import { Author } from "@/types";
import { getSinglePage } from "@/lib/contentParser";
import AuthorCard from "@/components/AuthorCard";

const Home = () => {
  const authorIndex: Author = getListPage("authors/_index.md");
  const authors: Author[] = getSinglePage("authors");
  const { title, meta_title, description, image } = authorIndex.frontmatter;
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const phone = getListPage("sections/phone.md");
  const interactiveCourses = getListPage("sections/interactive-courses.md");
  // const raiseCapital = getListPage("sections/raise-capital.md");
  const counterinfo = getListPage("sections/counterinfo.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      <section
        className=""
        style={{ paddingTop: "", paddingBottom: "6rem" }}
      >
        <div className="h-24 sm:block bg-gradient-to-b from-[#ffffff22] to-transparent"></div>
        <div className="container">
          <div className="row justify-center">
            <div className="mb-4 text-center lg:col-8">
              <h4
                className="head1 mb-4 text-4xl font-bold sm:text-6xl"
                style={{
                  background: "linear-gradient(to right, #f57114, #5e2591)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <p
                className="text-lg"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
            </div>
            {banner.image && (
              <div className="col-12">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto"
                  width="2000"
                  height="932"
                  alt="banner image"
                  priority
                />
              </div>
            )}
          </div>
          <div className="order-1 w-full justify-center align-center ml-auto flex items-center md:order-2 lg:ml-0">
            {/* <ThemeSwitcher className="mr-5" /> */}

            <a
              className="btn btn-primary w-64 text-center sm: mt-4"
              href="mailto:reachus@myprobuddy.com"
              target="_blank"
              style={{
                background: "linear-gradient(to right, #f57114, #5e2591)",
                outline: "none",
                border: "none",
                color: "white",
                padding: "0.47rem 2rem",
              }}
            >
              Get Started
            </a>
          </div>
          {/* <div className="flex justify-center items-center w-full mt-3">
            {banner.button!.enable && (
              <Link
                className="btn btn-primary"
                href={banner.button!.link}
                style={{
                  background: "linear-gradient(to right, #f57114, #5e2591)",
                  outline: "none",
                  border: "none",
                  color: "white",
                  padding: "0.75rem 2.5rem",
                }}
              >
                {banner.button!.label}
              </Link>
            )}
          </div> */}
        </div>
      </section>
      <CallToAction data={callToAction} />

      <Phone data={phone} />
      <CounterMid />
      <CounterInfo data={counterinfo} />
      <h2
        className=""
        style={{
          fontSize: "36px",
          lineHeight: "57.6px",
          textAlign: "center",
        }}
      >
        Get Customized Action Plan
      </h2>
      {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient-to-b to-transparent from-[#34222E]"}`}
          style={{ padding: "3rem 0", marginTop: "1rem" }}
        >
          <div className="container ">
            {index % 2 !== 0 ? (
              <h2
                className={`mb-8 text-4xl sm:text-5xl sm:mb-12`}
                style={{
                  // fontSize: "48px",
                  lineHeight: "57.6px",
                  textAlign: "center",
                  color: index % 2 === 0 ? "#a17aa7" : "white",
                }}
                dangerouslySetInnerHTML={markdownify(feature.heading)}
              />
            ) : (
              <div className="mt-12"></div>
            )}

            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-7 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                <ImageFallback
                  src={feature.image}
                  height={880}
                  width={1020}
                  alt={feature.title}
                />
              </div>

              <div
                className={`md:col-7 lg:col-4 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                <h2
                  className="mb-0 text-2xl sm:text-4xl"
                  style={{
                    // fontSize: "36px",
                    lineHeight: "57.6px",
                    textAlign: "left",
                  }}
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                    fontSize: "16px",
                    lineHeight: "27px",
                    textAlign: "left",
                    letterSpacing: "-0.36px",
                    color: index % 2 === 0 ? "#be9a94" : "gray",
                  }}
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                {/* <ul>
                  {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul> */}
                {feature.button.enable && (
                  <a
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                    target="_blank"
                  >
                    {feature.button.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
      <LogoGrid />
      <Counter />

      {/* <GetMoreCustomers data={getMoreCustomers} /> */}
      {/* <RaiseCapital data={raiseCapital} /> */}
      <InteractiveCourses data={interactiveCourses} />

      <FeaturedIn />
      <AnotherFeaturedin />

      <Testimonials data={testimonial} />
    </>
  );
};

export default Home;
