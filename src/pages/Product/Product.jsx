import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link, useParams } from "react-router-dom";

const Card = ({ category, data }) => {
    return (
        <div className="m-4">
            <div className="w-56 shadow-xl h-72 card card-compact bg-base-100">
                <figure>
                    <img src={data.img[0]} alt={data.name} />
                </figure>
                <div className="gap-0 card-body">
                    <h2 className="text-lg font-bold leading-none">
                        {data.name}
                    </h2>
                    <p className="text-[#B7B7B7]">{data.category}</p>
                    <div className="justify-end card-actions">
                        <Link
                            to={`/product/${data.name
                                .toLowerCase()
                                .replace(/\s/g, "-")}`}
                        >
                            <button className="btn btn-primary btn-sm">
                                More Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Product = () => {
    const projectCategory = [
        { name: "Ring", img: ["/img/1.jpg"], path: "jawa" },
        { name: "Jaring", img: ["/img/2.jpg"], path: "sulawesi" },
        { name: "Tenis Meja", img: ["/img/3.jpg"], path: "nusa-tenggara" },
        { name: "Ring Portable", img: ["/img/1.jpg"], path: "sumatera" },
        { name: "Meja Billiard", img: ["/img/3.jpg"], path: "bali" },
        { name: "Ring", img: ["/img/1.jpg"], path: "sumatera" },
        { name: "Tenis Meja", img: ["/img/3.jpg"], path: "bali" },
    ];

    return (
        <>
            <Navbar />
            <section className="flex items-center justify-center">
                <div className="w-[970px] mt-10 mb-20">
                    <div className="bg-[#F3F3F3] w-full rounded-xl py-6 flex items-center justify-center mb-6">
                        <div className="flex flex-col w-4/5 border-opacity-50">
                            <div className="text-2xl font-bold divider">
                                OUR PRODUCT
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        {projectCategory.map((data, index) => (
                            <Link key={index} to={`/product/${data.path}`}>
                                <Card data={data} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Product;
