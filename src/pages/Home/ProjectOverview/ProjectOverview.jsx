import React, { useEffect, useState } from "react";
import Pattern from "../../../components/Pattern/Pattern";

const cardData = [
    { img: "/img/1.jpg", title: "Jawa" },
    { img: "/img/2.jpg", title: "Sulawesi" },
    { img: "/img/3.jpg", title: "Banda Aceh" },
];

const ProjectOverview = () => {
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
        <section className="bg-[#fff]">
            <div className="relative py-20 lg:flex lg:justify-center lg:items-center bg-[#fff]">
                <div className="w-[970px] h-[480px] bg-[#F3F3F3] rounded-[10px] relative shadow-lg">
                    <div className="relative z-10 pt-10">
                        <h1 className="mb-5 text-2xl font-bold text-center">
                            OUR PROJECT
                        </h1>
                        <div className="flex justify-center gap-10">
                            <div className="w-[340px]">
                                <p className="mb-3 text-justify">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque gravida, ex
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
                                <div className="flex justify-end">
                                    <button className="flex items-center rounded-lg bg-[#b7b7b7] hover:bg-[#7f7f7f] px-5 py-2 text-sm font-medium text-white">
                                        Explore More
                                    </button>
                                </div>
                            </div>

                            <div className="w-[230px] h-[300px] bg-[#b7b7b7] flex items-center justify-center rounded-[20px]">
                                <div className="w-[210px] h-[280px] flex items-center justify-center rounded-[10px]">
                                    <div className="relative z-20 w-full h-full">
                                        <div
                                            style={{
                                                backgroundImage: `url(${cardData[currentIndex].img})`,
                                            }}
                                            className="w-full h-full rounded-[10px] bg-center bg-cover duration-200"
                                        >
                                            <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-[10px]">
                                                <h3 className="text-2xl font-extrabold text-center text-wrap text-white w-[150px]">
                                                    {
                                                        cardData[currentIndex]
                                                            .title
                                                    }
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
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

export default ProjectOverview;
