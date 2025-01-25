import React from "react";
import products from "../../data/product.json"; // Assuming you might use this data later
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const ProjectList = ({ data }) => {
    return (
        <div className="m-4">
            <div className="w-[200px] h-[300px] shadow-xl card bg-base-100 image-full hover:scale-[1.1] duration-300">
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
        { name: "Jawa", img: "/img/1.jpg", path: "jawa" },
        { name: "Sulawesi", img: "/img/2.jpg", path: "sulawesi" },
        { name: "Nusa Tenggara", img: "/img/3.jpg", path: "nusa-tenggara" },
        { name: "Sumatera", img: "/img/1.jpg", path: "sumatera" },
        { name: "Bali", img: "/img/3.jpg", path: "bali" },
        { name: "Sumatera", img: "/img/1.jpg", path: "sumatera" },
        { name: "Bali", img: "/img/3.jpg", path: "bali" },
    ];

    return (
        <>
            <Navbar />
            <section className="flex items-center justify-center">
                <div className="w-[970px] flex flex-col items-center justify-center mt-10 mb-20">
                    <div className="bg-[#F3F3F3] w-full rounded-xl py-6 flex items-center justify-center mb-6">
                        <div className="flex flex-col w-4/5 border-opacity-50">
                            <div className="text-2xl font-bold divider">
                                OUR PROJECT
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-1 lg:grid-cols-4">
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
