import Image from "next/image"

export default function About () {
    return (
        <div id="about" className="border border-[#9f9f9f] rounded-2xl h-auto md:w-[1100px] mt-12 md:mx-16 mx-2 pb-10 max-w-screen-xl">
            <div className="md:grid md:grid-cols-5">
                <div className="md:col-span-3">
                    <div className="md:flex justify-between">
                        <div className="px-8  pt-14">
                            <button className="bg-red-400 text-white px-3 py-1 font-semibold rounded-2xl">ABOUT US</button>
                            <h1 className="md:text-5xl text-4xl font-bold pt-4">OUR CULINARY CHRONICLE</h1>
                            <p className="text-[#262522] pt-3 md:pr-20">Our journey is crafted with dedication, creativity, and an unrelenting commitment to delivering delightful culinary experiences. Join us in savoring the essence of every dish and the stories that unfold.</p>
                        </div>
                        <div className="md:mt-20 mt-8">
                            <Image src="/about1.png" alt="Recipe Card" width={1000} height={1000} className="md:w-[800px] md:h-[250px] w-[300px] h-[300px] md:mx-0 mx-8"/>
                        </div>
                    </div>
                    <Image src="/about3.png" alt="Recipe Card" width={850} height={200} className="mt-3 ml-8 md:w-[850px] md:h-[250px] w-[300px] h-[300px]"/>
                </div>

                <div className="col-span-2 md:pt-16 md:mt-0 mt-4 md:px-12 px-8">
                <Image src="/about2.png" alt="Recipe Card" width={600} height={600} className='md:w-[900px] md:h-[550px] w-[300px] h-[300px]'/>
                </div>
                </div>
                
        </div>
    )
}