import React from "react";

const Hero = () => {
    return (
        <section>
            <div
                className="h-65vh hero"
                style={{
                    backgroundImage: `url(/img/hero.jpg)`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-extrabold">PILASPORT</h1>
                        <p className="text-2xl font-bold">
                            Olahraga Tanpa Batas
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
