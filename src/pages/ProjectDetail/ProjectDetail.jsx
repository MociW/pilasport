import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import projects from "../../data/project.json";
import { Link, useParams } from "react-router-dom";

const CardDetail = ({ data }) => {
    const desc = { __html: data.description };

    return (
        <div>
            <div className="w-[500px] text-wrap">
                <h1 className="font-bold">{data.name}</h1>
                <div dangerouslySetInnerHTML={desc} />
                <div className="flex justify-center my-4">
                    <Link to="https://wa.me/62811283048" target="_blank">
                        <button className="flex items-center justify-center gap-1 btn bg-[#25D366] w-72 text-[#fff] hover:bg-[#5CB85C] btn-md">
                            <span className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>
                            </span>
                            Whatsapp
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Gallery = ({ images, onImageClick, mainImage }) => {
    return (
        <div className="flex flex-wrap gap-4">
            {images.map((img, index) => (
                <div key={index} className="relative">
                    <img
                        src={img}
                        alt=""
                        className="object-cover w-24 h-24 rounded-lg cursor-pointer"
                        onClick={() => onImageClick(img)}
                    />
                    {img === mainImage && (
                        <div className="absolute inset-0"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

const ProjectDetail = () => {
    const { category, id } = useParams();
    const project = projects.find(
        (data) =>
            data.name.toLowerCase().replace(/\s/g, "-") === id &&
            data.category.toLowerCase() === category
    );

    if (!project) {
        return (
            <>
                <Navbar />
                <section className="flex items-center justify-center">
                    <div className="w-[970px] flex flex-col items-center justify-center mt-10 mb-20">
                        <h1 className="font-bold">Project Not Found</h1>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    const [mainImage, setMainImage] = useState(project?.img?.[0]);

    const handleImageClick = (img) => setMainImage(img);

    return (
        <>
            <Navbar />
            <section className="flex items-center justify-center mt-10 mb-20">
                <div className="w-[970px] flex gap-24 justify-center">
                    <div>
                        <div className="mb-4 ">
                            <img
                                src={mainImage}
                                alt=""
                                className="w-[350px] h-[350px] rounded-lg object-cover"
                            />
                        </div>
                        <Gallery
                            images={project.img}
                            onImageClick={handleImageClick}
                            mainImage={mainImage}
                        />
                    </div>
                    <CardDetail data={project} />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProjectDetail;
