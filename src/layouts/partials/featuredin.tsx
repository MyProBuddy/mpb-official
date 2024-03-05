import Image from "next/image"

export default function FeaturedIn(){
  const images = [
    "/logos/Frame1.png",
    "/logos/Frame2.png",
    "/logos/Frame3.png",
    "/logos/Frame4.png",
    "/logos/Frame5.png",
    "/logos/Frame6.png",
    "/logos/Frame7.png",
    "/logos/Frame8.png",
    "/logos/Frame9.png",
    "/logos/Frame10.png",
    "/logos/Frame11.png",
    "/logos/Frame12.png",
  ]
  return (
    <section className="mt-24 mb-16">
    <div className="container">
      <div className="w-full flex justify-center mb-6">
    <h2
                    className="mb-2"
                    style={{
                      fontSize: "36px",
                      lineHeight: "47px",
                      textAlign: "center",
                    }}
                  >
                 Recognised By
                  </h2>
      </div>
      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-x-14 gap-y-6">
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
          ))
        }
      </div>
      </div>
      </section>
  )
}
