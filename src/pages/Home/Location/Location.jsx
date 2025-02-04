import React from "react";

const Location = () => {
    return (
        <section>
            <div className="flex items-center justify-center pb-10 lg:pb-20">
                <div className="lg:w-[970px] flex flex-col items-center justify-center gap-5 md:gap-10">
                    <h1 className="text-lg font-bold lg:text-2xl">
                        OUR LOCATION
                    </h1>
                    <div className="flex flex-col justify-center gap-4 md:gap-0 lg:flex-row">
                        <div className="flex items-center justify-center ">
                            <iframe
                                title="Office Location"
                                className="rounded-md md:w-[470px] md:h-[300px] w-full h-[300px]"
                                style={{ border: 0 }}
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pila%20Sport%20(Piala%20Dunia)%20R2+(PILASPORT)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="bg-[#F3F3F3] lg:p-10 p-5 mx-5 rounded-md">
                            <h3 className="text-xl font-bold">
                                OFFICE LOCATION
                            </h3>
                            <p>
                                Sawahan, RT.04/RW.29, Cambahan, Nogotirto, Kec.
                                Gamping, Kabupaten Sleman, Daerah Istimewa
                                Yogyakarta 55592
                            </p>
                            <h3 className="mt-4 text-xl font-bold">
                                OFFICE HOURS
                            </h3>
                            <p>Monday - Friday (08:00-17:00)</p>
                            <p>Saturday - Sunday (08:00-13:00)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
