import Image from "next/image";
import icon1 from "../../../public/assets/icon-target.svg";
import icon2 from "../../../public/assets/icon-launch.svg";

export default function CounterMid() {
  return (
    <section className="mt-4 mb-10">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-2 lg:mb-0">
            <div className="text-center items-center flex flex-col">
              {/* <img src="image1.jpg" alt="Experience" className="mb-4" /> */}
              {/* <Image alt={"target"} src={icon1} height={200} width={200} /> */}
              <h3
                className="text-4xl font-semibold text-[#4BA39C]"
                style={{
                  fontSize: "40px",
                  lineHeight: "96px",
                  textAlign: "center",
                }}
              >
                10,000+
              </h3>
              <p
                className=" text-[#4BA39C]"
                style={{
                  fontSize: "20px",
                  lineHeight: "36px",
                  textAlign: "center",
                }}
              >
                Questions Answered
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-2 lg:mb-0">
            <div className="text-center items-center flex flex-col">
              {/* <img src="image1.jpg" alt="Experience" className="mb-4" /> */}
              {/* <Image alt={"target"} src={icon1} height={200} width={200} /> */}
              <h3
                className="text-4xl font-semibold text-[#4BA39C]"
                style={{
                  fontSize: "40px",
                  lineHeight: "52px",
                  textAlign: "center",
                }}
              >
                Every 120 Seconds
              </h3>
              <p
                className=" text-[#4BA39C]"
                style={{
                  fontSize: "20px",
                  lineHeight: "36px",
                  textAlign: "center",
                }}
              >
                Someone is on a call with our Expert
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-2 lg:mb-0">
            <div className="text-center items-center flex flex-col">
              {/* <img src="image2.jpg" alt="Projects" className="mb-4" /> */}
              {/* <Image alt={"projects"} src={icon2} height={200} width={200} /> */}
              <h3
                className="text-4xl font-semibold text-[#4BA39C]"
                style={{
                  fontSize: "40px",
                  lineHeight: "96px",
                  textAlign: "center",
                }}
              >
                50,000+
              </h3>
              <p
                className=" text-[#4BA39C]"
                style={{
                  fontSize: "20px",
                  lineHeight: "36px",
                  textAlign: "center",
                }}
              >
                Completed Expert Calls
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
