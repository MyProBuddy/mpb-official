import Link from "next/link";

export default function RaiseCapital() {
    const data = [
        {
            image: "/assets/raise-capital/icon-fundraise-strategy.svg",
            title: "Fundraise Strategy",
            containerColor: "#242F3C",
        },
        {
            image: "/assets/raise-capital/icon-pitch-deck-creation.svg",
            title: "Pitch Deck Creation",
            containerColor: "#303D49",
        },
        {
            image: "/assets/raise-capital/icon-step-courses.svg",
            title: "Step-by-Step Courses",
            containerColor: "#3A4955",
        },
        {
            image: "/assets/raise-capital/icon-investor-research.svg",
            title: "Investor Research",
            containerColor: "#455561",
        }
    ]
    return (
        <section
            className={`section-sm bg-gradient-to-b to-transparent from-[#1C2633]`}
            style={{ padding: "3rem 0" }}
        >
            <div className="container ">
                <h2
                    className={`mb-12`}
                    style={{
                        fontSize: "48px",
                        lineHeight: "57.6px",
                        textAlign: "center",
                        color: "#94BFD6",
                    }}
                >
                    Raise Capital
                </h2>
                <div className="row items-center justify-between">
                    <div
                        className={`mb:md-0 mb-4 md:col-7 md:order-2 grid gap-4 md:grid-cols-4 sm:grid-cols-2`}
                    >
                        {data.map((item, index) => (
                            <div className="w-full py-8 flex flex-col justify-between gap-4 rounded-xl" key={index} style={{ backgroundColor: item.containerColor }}>
                                <div className="flex items-center justify-center">
                                    <img src={item.image} alt="" />
                                </div>
                                <h3
                                    className="mt-4 mb-2"
                                    style={{
                                        fontSize: "16px",
                                        textAlign: "center",
                                        color: "white",
                                    }}
                                >
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div
                        className={`md:col-7 lg:col-4 md:order-1
                            `}
                    >
                        <h2
                            className="mb-4 text-center mt-3 md:text-left md:mt-0"
                            style={{
                                fontSize: "36px",
                                lineHeight: "57.6px",
                            }}
                        >
                            Looking for Funding?
                        </h2>
                        <p
                            className="mb-6 text-center md:text-left"
                            style={{
                                fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                                fontSize: "16px",
                                lineHeight: "27px",
                                letterSpacing: "-0.36px",
                                color: "#be9a94"
                            }}
                        >
                            We've helped startups raise over $600 million in funding commitments. We can help you with every aspect of your fundraise from understanding how the process works to building your Pitch Deck to finding the perfect investors.
                        </p>
                        <div className="w-full flex justify-center md:justify-start">
                            <Link
                                className="btn btn-primary mt-5"
                                href="/"
                            >
                                Accelerate Your Fundraise
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}