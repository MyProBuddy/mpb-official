import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import Link from "next/link";
import { FaCheck } from "react-icons/fa/index.js";
import LogoGrid from "@/partials/logoGrid";
import Counter from "@/partials/counter";
import CounterInfo from "@/partials/CounterInfo";
import RaiseCapital from "@/partials/RaiseCapital";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
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
      <section className="section pt-14">
        <div className="container">
          <div className="row justify-center mt-10">
            <div className="mb-16 text-center lg:col-7">
              <h1
                className="head1 mb-4 text-5xl font-bold"
                style={{ background: "linear-gradient(to right, #f57114, #5e2591)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />

              <p
                className="mb-8"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              {banner.button!.enable && (
                <Link className="btn btn-primary" href={banner.button!.link} style={{ background: "linear-gradient(to right, #f57114, #5e2591)", outline: "none", border: "none", color: "white", padding: "0.75rem 2.5rem" }}>
                  {banner.button!.label}
                </Link>
              )}
            </div>
            {banner.image && (
              <div className="col-12">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto"
                  width="1100"
                  height="550"
                  alt="banner image"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient-to-b to-transparent from-[#34222E]"}`}
          style={{ padding: "3rem 0" }}
        >
          <div className="container ">
            <h2
              className={`mb-12`}
              style={{
                fontSize: "48px",
                lineHeight: "57.6px",
                textAlign: "center",
                color: index % 2 === 0 ? "#a17aa7" : "white",
              }}
              dangerouslySetInnerHTML={markdownify(feature.heading)}
            />
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-4 md:col-7 ${index % 2 !== 0 && "md:order-2"
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
                className={`md:col-7 lg:col-4 ${index % 2 !== 0 && "md:order-1"
                  }`}
              >
                <h2
                  className="mb-4"
                  style={{
                    fontSize: "36px",
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
                  <Link
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                  >
                    {feature.button.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
      <LogoGrid />
      <Counter />
      <CounterInfo data={counterinfo} />
      <RaiseCapital />

      <Testimonials data={testimonial} />
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
