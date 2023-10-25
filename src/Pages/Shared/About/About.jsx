
const About = () => {
    return (
        <div className="hero min-h-screen px-5 lg:px-0 my-10 lg:my-0">
            <div className="flex justify-center gap-6 lg:gap-0 flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src="https://i.ibb.co/ScpJ7v3/person.jpg" className=" rounded-lg shadow-2xl h-[430px] w-[420px]" />
                    <div className="bg-white absolute bottom-0 top-48 right-36 w-2/4">
                        <img src="https://i.ibb.co/nfKrTBT/parts.jpg" className=" rounded-lg shadow-2xl h-full p-2" />
                    </div>
                </div>
                <div className="lg:w-1/2 space-y-7 pr-16">
                    <h4 className="text-[#FF3811] text-xl font-bold">About Us</h4>
                    <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-outline btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;