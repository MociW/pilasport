import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import projects from "../../data/project.json";

const ProjectList = () => {
    const { category } = useParams();
    const filteredCategory = projects.filter(
        (data) => projects.category === category
    );

    return (
        <>
            <Navbar />
            <section></section>
            <Footer />
        </>
    );
};

export default ProjectList;
