import { useEffect, useState } from "react";
import { BsArrowRight } from 'react-icons/bs';
const HomeService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-20">
            <div className="text-center space-y-5 mb-12">
                <h5 className=" font-bold text-[#FF3811] text-xl">Service</h5>
                <h2 className=" text-[#151515] font-bold text-5xl">Our Service Area</h2>
                <p className="lg:px-80">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <div key={service._id}>
                        <div className="shadow-xl p-6 border rounded-lg">
                            <figure><img className="h-52 w-full" src={service.img} alt="Shoes" /></figure>
                            <div className="mt-5 space-y-5">
                                <h2 className="card-title">{service.title}</h2>
                                <div className="flex justify-between items-center text-[#FF3811] text-xl font-semibold">
                                    <p>{service.price}</p>
                                    <button className=""><BsArrowRight></BsArrowRight></button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomeService;