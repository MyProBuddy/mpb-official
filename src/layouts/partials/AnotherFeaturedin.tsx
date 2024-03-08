import Image from "next/image";

export default function AnotherFeaturedin() {
  const images = [
    "/assets/innsurge.png",
    "/assets/forbes.png",
    "/assets/passionvista.png",
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
      <div className="flex justify-center align-center sm:grid-cols-3 grid-cols-2 sm:gap-x-12 gap-x-2 gap-y-6">
        {
          images.map((image, index)=> (
            <div key={index} className="py-2 bg-white px-3 rounded-xl flex justify-center items-center">
            <Image
              alt={`image at ${image}`}
              src={image}
              className="w-full"
              width={100}
              height={100}
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
