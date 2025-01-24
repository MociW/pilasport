import React from "react";

const SvgPattern = () => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern
                id="b"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.5)"
            >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    strokeWidth="1"
                    fill="currentColor"
                />
            </pattern>
        </defs>
        <rect width="800%" height="800%" fill="url(#b)" />
    </svg>
);

const About = () => {
    return (
        <section className="bg-[#F3F3F3] ">
            <div className="relative flex items-center justify-center py-20">
                <div className="lg:w-[970px] flex justify-center gap-8 z-10">
                    <div className="w-[470px]">
                        <h2 className="text-2xl font-bold">ABOUT US</h2>
                        <p className="text-justify">
                            Pila Sport merupakan distributor alat olahraga yang
                            berdiri pada tahun 2002 hingga saat ini. Pila Sport
                            mengembangkan usaha dengan membuat jasa pemasangan
                            lapangan futsal di seluruh Indonesia. Selain itu
                            Pila Sport juga menerima pemesanan tiang-tiang
                            portable seperti tiang Basket, Voli, Badminton,
                            Tennis dan Gawang. Pila Sport juga menyediakan
                            Tennis Meja Grosir dan Ecer. Pila Sport juga
                            memprodyksi segala macam net dan jaring. Semoga Pila
                            Sport selalu berada di hati masyarakat Indonesia.
                        </p>
                    </div>
                    <img
                        src="/img/about.jpg"
                        alt=""
                        className="w-[470px] h-[470px] object-cover"
                    />
                </div>
                <div className="hidden sm:block h-[250px] w-[250px] text-[#D5D5D5] z-0 absolute bottom-[0%] left-[calc(50%+250px)] opacity-50">
                    <SvgPattern />
                </div>
                <div className="hidden sm:block h-[250px] w-[250px] text-[#D5D5D5] z-0 absolute left-[calc(50%-550px)] bottom-[calc(50%+50px)] opacity-50">
                    <SvgPattern />
                </div>
            </div>
        </section>
    );
};

export default About;
