import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  

export default function Navbar () {

    return (
        <section className="flex justify-around mt-12 border border-[#9f9f9f] py-4 rounded-full mx-20 max-w-screen-xl">
        <div>
        <Image src="/Logo Nav Bar.png" alt="logo" height={200} width={200} className="md:h-[40px] md:w-[150px] h-[30px] w-[90px]"/>
        </div>
         {/* large screens  */}
        <div className="hidden md:block">
            <ul className=" flex space-x-14 mt-2">
                <Link href="/" className="font-bold border-b-4 border-red-500"> HOME </Link>
                <Link href="#recipes" className="text-[#9f9f9f] font-semibold"> RECIPES </Link>
                <Link  href="#about" className="text-[#9f9f9f] font-semibold">ABOUT US</Link>
            </ul>
        </div>

        <div className="md:hidden">
        <Sheet>
  <SheetTrigger><GiHamburgerMenu className="text-2xl mt-1" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>MENU</SheetTitle>
      
            <ul className="flex flex-col gap-4 mt-2">
                <Link href="/" className="font-semibold text-[#9f9f9f]"> HOME </Link>
                <Link href="#recipes" className="text-[#9f9f9f] font-semibold"> RECIPES </Link>
                <Link  href="#about" className="text-[#9f9f9f] font-semibold">ABOUT US</Link>
            </ul>
      
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>

        <div className="hidden md:block space-x-8">
            <button className="px-2 py-2 bg-[#9f9f9f] rounded-full"><FaSearch /> </button>
            <button className=" px-4 py-2 bg-[#262522] text-white rounded-3xl">SUBSCRIBE</button>
        </div>

        
        </section>
    )
}