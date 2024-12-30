import Image from "next/image";
import { FaTiktok, FaFacebook, FaInstagram, FaYoutube, FaCopyright } from "react-icons/fa";
export default function Footer () {
    return (
        <section className="md:flex justify-around mt-12 border border-[#9f9f9f] py-4 md:rounded-full rounded-3xl md:mx-20 mx-2 max-w-screen-xl bg-[#262522] md:pl-0 pl-10">
        <div className="md:pl-0 pl-20">
        <Image src="/Logo Footer.png" alt="logo" height={200} width={200} />
        </div>

        <div>
            <p className="flex gap-2 text-white md:mt-1 mt-3">COPYRIGHT. <FaCopyright className="mt-1"/> 2024 COOKS DELIGHT.</p>
        </div>

        <div className="space-x-8 md:mt-0 mt-4 md:pl-0 pl-8">
            <button className="px-2 py-2 bg-[#9f9f9f] rounded-full"><FaTiktok /> </button>
            <button className="px-2 py-2 bg-[#9f9f9f] rounded-full"><FaFacebook /> </button>
            <button className="px-2 py-2 bg-[#9f9f9f] rounded-full"><FaInstagram /> </button>
            <button className="px-2 py-2 bg-[#9f9f9f] rounded-full"><FaYoutube /> </button>
            
        </div>


        </section>
    )
}