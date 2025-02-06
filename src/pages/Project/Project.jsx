import React from "react";
import products from "../../data/product.json"; // Assuming you might use this data later
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const ProjectList = ({ data }) => {
    return (
        <div className="">
            <div className="w-52 h-72 shadow-xl card bg-base-100 image-full hover:scale-[1.1] duration-300">
                <figure>
                    <img
                        src={data.img} // Placeholder image
                        alt={data.name}
                    />
                </figure>
                <div className="flex items-center justify-center card-body">
                    <h2 className="text-2xl font-bold text-center">
                        {data.name}
                    </h2>
                </div>
            </div>
        </div>
    );
};

const Project = () => {
    const projectCategory = [
        { name: "Sulawesi", img: "/img/2.jpg", path: "sulawesi" },
        { name: "Nusa Tenggara", img: "/img/3.jpg", path: "nusa-tenggara" },
        { name: "Sumatera", img: "/img/1.jpg", path: "sumatera" },
        { name: "Kalimantan", img: "/img/2.jpg", path: "kalimantan" },
        { name: "Bali", img: "/img/3.jpg", path: "bali" },
        { name: "Jawa Barat", img: "/img/1.jpg", path: "jawa-barat" },
        { name: "Jawa Timur", img: "/img/3.jpg", path: "jawa-timur" },
        { name: "Jawa Tengah", img: "/img/3.jpg", path: "jawa-tengah" },
        { name: "Aceh", img: "/img/3.jpg", path: "aceh" },
    ];

    return (
        <>
            <Navbar />
            <section className="flex items-center justify-center">
                <div className="max-w-[970px] mt-10 mb-20">
                    <div className="bg-[#F3F3F3] w-full rounded-xl py-6 flex items-center justify-center mb-6">
                        <div className="flex flex-col w-4/5 border-opacity-50">
                            <div className="text-2xl font-bold divider">
                                OUR PROJECT
                            </div>
                        </div>
                    </div>
                    <div className="grid items-center justify-center grid-cols-1 gap-7 lg:gap-10 md:grid-cols-3 lg:grid-cols-4">
                        {projectCategory.map((category, index) => (
                            <Link key={index} to={`/project/${category.path}`}>
                                <ProjectList data={category} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Project;
