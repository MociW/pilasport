import React from "react";

const Location = () => {
    return (
        <section>
            <div className="flex items-center justify-center pb-20">
                <div className="w-[970px] flex flex-col items-center justify-center gap-10">
                    <h1 className="text-2xl font-bold">OUR LOCATION</h1>
                    <div className="flex justify-center gap-10">
                        <div>
                            <iframe
                                title="Office Location"
                                className="rounded-md md:w-[470px] md:h-[300px] w-[300px] h-[270px]"
                                style={{ border: 0 }}
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pila%20Sport%20(Piala%20Dunia)%20R2+(PILASPORT)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                allowFullScreen
                            >
                                <a href="https://www.gps.ie/">gps trackers</a>
                            </iframe>
                        </div>
                        <div className="bg-[#F3F3F3] p-10">
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
