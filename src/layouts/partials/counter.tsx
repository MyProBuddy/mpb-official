import Image from "next/image";
import icon1 from "../../../public/assets/icon-target.svg";
import icon2 from "../../../public/assets/icon-launch.svg";

export default function Counter() {
  return (
    <section className="section pt-2">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="text-center items-center flex flex-col">
              {/* <img src="image1.jpg" alt="Experience" className="mb-4" /> */}
              <Image alt={"target"} src={icon1} height={200} width={200} />
              <h3
                className="sm:text-7xl text-5xl font-semibold text-[#d15e5e]"
                style={{
                  // fontSize: "75px",
                  lineHeight: "96px",
                  textAlign: "center",
                }}
              >
                100+
              </h3>
              <p
                className=" text-[#be4444]"
                style={{
                  fontSize: "20px",
                  lineHeight: "36px",
                  textAlign: "center",
                }}
              >
                Mentors Onboard
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="text-center items-center flex flex-col">
              {/* <img src="image2.jpg" alt="Projects" className="mb-4" /> */}
              <Image alt={"projects"} src={icon2} height={200} width={200} />
              <h3
                className="sm:text-7xl text-5xl font-semibold text-[#d15e5e]"
                style={{
                  // fontSize: "75px",
                  lineHeight: "96px",
                  textAlign: "center",
                }}
              >
                70k+
              </h3>
              <p
                className=" text-[#be4444]"
                style={{
                  fontSize: "20px",
                  lineHeight: "36px",
                  textAlign: "center",
                }}
              >
                Students Mentored
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
