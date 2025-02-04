import React, { useEffect, useState } from "react";
import Pattern from "../../../components/Pattern/Pattern";
import { Link } from "react-router-dom";

const cardData = [
    { img: "/img/1.jpg", title: "Jawa" },
    { img: "/img/2.jpg", title: "Sulawesi" },
    { img: "/img/3.jpg", title: "Banda Aceh" },
];

const ProductOverview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const autoPlay = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === cardData.length - 1 ? 0 : prev + 1
            );
        }, 2000);

        return () => clearInterval(autoPlay);
    }, []);

    return (
        <section className="bg-white">
            <div className="relative pb-10 lg:pb-20 lg:flex lg:justify-center lg:items-center">
                <div className="lg:w-[970px] mx-4 lg:mx-0 bg-[#F3F3F3] rounded-lg shadow-lg lg:h-[480px] relative">
                    <div className="relative z-10 px-4 pt-10 lg:px-0">
                        {/* Flex container reversed for mobile (image on top, text below) */}
                        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-end lg:gap-10">
                            {/* Image Card */}
                            <div className="w-[230px] h-[300px] bg-gray-400 flex items-center justify-center rounded-2xl">
                                <div className="w-[210px] h-[280px] flex items-center justify-center rounded-lg">
                                    <div
                                        style={{
                                            backgroundImage: `url(${cardData[currentIndex].img})`,
                                        }}
                                        className="w-full h-full duration-200 bg-center bg-cover rounded-lg"
                                    >
                                        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-lg">
                                            <h3 className="text-2xl font-extrabold text-white text-center w-[150px]">
                                                {cardData[currentIndex].title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="w-full lg:w-[340px] text-center lg:text-left">
                                <h1 className="mb-1 text-2xl font-bold lg:mb-5">
                                    OUR PRODUCT
                                </h1>
                                <p className="mb-3 text-sm text-justify lg:text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque gravaida, ex
                                    vel consectetur mattis, nunc ex rhoncus
                                    ligula, sit amet convallis justo sapien a
                                    nulla. Fusce non lacus mattis, interdum
                                    lectus at, varius libero. Proin consequat ex
                                    arcu, a semper tellus dapibus posuere. Etiam
                                    dictum odio a interdum rhoncus. Nam
                                    vestibulum lacus eget lacinia vestibulum.
                                    iaculis ipsum eu leo dapibus vulputate quis
                                    id odio.
                                </p>
                                <div className="flex justify-center mb-10 lg:mb-0 lg:justify-start">
                                    <Link to="/product">
                                        <button className="px-5 py-2 text-sm font-medium text-white transition-colors bg-gray-400 rounded-lg hover:bg-gray-500">
                                            Explore More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:block h-[250px] w-[250px] text-[#D5D5D5] z-0 absolute bottom-[0px] left-[5px] opacity-50">
                        <Pattern />
                    </div>
                    <div className="hidden sm:block h-[250px] w-[250px] text-[#D5D5D5] z-0 absolute left-[710px] bottom-[220px] opacity-50">
                        <Pattern />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductOverview;
