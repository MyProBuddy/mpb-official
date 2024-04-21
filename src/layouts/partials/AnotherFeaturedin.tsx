import Image from "next/image";

export default function AnotherFeaturedin() {
  const images = [
    "/assets/innsurge.png",
    "/assets/forbes.png",
    "/assets/passionvista.png",
    "/assets/internet2.png",
    "/assets/yourstory.png",
    "/assets/indiaachiever.png",
  ];

  return (
    <section className="mt-20 mb-0">
    <div className="container">
      <div className="w-full flex justify-center mb-6">
    <h2
      className="mb-2 "
      style={{
        fontSize: "36px",
        lineHeight: "47px",
        textAlign: "center",
      }}
    >
      Featured In
    </h2>
      </div>
      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-6">
    <a
            href="https://www.magzter.com/IN/CMI-Tech/INNSURGE/Business/685259"
            target="_blank">
              <div className="py-2 bg-white px-3 rounded-xl flex justify-center items-center">
            <Image
              alt={`image`}
              src="/assets/innsurge.png"
              className="w-full"
              width={100}
              height={100}
            />
            </div></a>
            <a
            href="https://jionews.pie.news/magazine/38/43139?from=Share"
            target="_blank"> <div className="py-2 bg-white px-3 rounded-xl flex justify-center items-center">
             <Image
               alt={`image`}
               src="/assets/forbes.png"
               className="w-full"
               width={100}
               height={100}
             />
             </div></a>
             <a href="https://www.passionvista.com/amrish-krishnan/"
             target="_blank">   <div className="py-2 bg-white px-3 rounded-xl flex justify-center items-center">
              <Image
                alt={`image`}
                src= "/assets/passionvista.png"
                className="w-full"
                width={100}
                height={100}
              />
              </div></a>
        <a
              href="https://www.youtube.com/watch?v=_Hj6KQw_lI0"
              target="_blank">    <div className="py-2 bg-white px-3 rounded-xl flex justify-center items-center">
               <Image
                 alt={`image`}
                 src= "/assets/internet2.png"
                 className="w-full"
                 width={100}
                 height={100}
               />
               </div></a>
               <a
               href="https://yourstory.com/companies/myprobuddy"
               target="_blank">    <div className="py-2 bg-white px-3 rounded-xl flex justify-center items-center">
                <Image
                  alt={`image`}
                  src="/assets/yourstory.png"
                  className="w-full"
                  width={100}
                  height={100}
                />
                </div></a>
                <a
                href="https://www.iafindia.com/mr-amrish-krishnan/"
                target="_blank">   <div className="py-2 bg-white px-3 rounded-xl flex justify-center items-center">
                  <Image
                    alt={`image`}
                    src="/assets/indiaachiever.png"
                    className="w-full"
                    width={100}
                    height={100}
                  />
                  </div></a>
        </div>
      </div>
    </section>
  );
}
