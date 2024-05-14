import Image from "next/image";

export default function FeaturedIn() {
  const images = [
    
    "/logos/Frame2.png",
    "/logos/Frame3.png",
    "/logos/Frame4.png",
    
    "/logos/Frame6.png",
    "/logos/Frame7.png",
    "/logos/Frame8.png",
    "/logos/Frame9.png",
    
    "/logos/Frame11.png",
   
  ];
  return (
    <section className="mt-24 mb-16">
    <div className="container">
      <div className="w-full flex justify-center mb-6">
    <h2
                    className="mb-2 sm:text-4xl text-3xl"
                    style={{
                      // fontSize: "36px",
                      lineHeight: "47px",
                      textAlign: "center",
                    }}
                  >
                 Recognised By
                  </h2>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3  grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-8">
        {
          images.map((image, index)=> (
            <div key={index} className="py-2 bg-white px-3 rounded-xl flex justify-center items-center">
            <Image
              alt={`image at ${image}`}
              src={image}
              className="w-full"
              width={160}
              height={100}
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
