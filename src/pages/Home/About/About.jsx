import React from "react";
import Pattern from "../../../components/Pattern/Pattern";

const About = () => {
    return (
        <section className="bg-[#F3F3F3] ">
            <div className="relative flex items-center justify-center py-5 lg:py-20">
                <div className="lg:w-[970px] flex flex-col-reverse lg:flex-row justify-center lg:gap-10 z-10 px-5 lg:px-0">
                    <div className="md:w-[470px]">
                        <h1 className="pt-4 text-2xl font-bold lg:pt-0">
                            ABOUT US
                        </h1>
                        <p className="text-sm text-justify lg:text-base">
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
                        className="w-auto h-[350px] lg:w-[470px] lg:h-[470px] object-cover"
                    />
                </div>
                <div className="hidden sm:block h-[250px] w-[250px] text-[#D5D5D5] z-0 absolute bottom-[0%] left-[calc(50%+250px)] opacity-50">
                    <Pattern />
                </div>
                <div className="hidden sm:block h-[250px] w-[250px] text-[#D5D5D5] z-0 absolute left-[calc(50%-550px)] bottom-[calc(50%+50px)] opacity-50">
                    <Pattern />
                </div>
            </div>
        </section>
    );
};

export default About;
