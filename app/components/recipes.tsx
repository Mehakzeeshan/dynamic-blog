import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import Image from "next/image";
  import Link from "next/link";

  

export default function Recipes () {
    return (
        <section  id="recipes" className="max-w-screen-xl mt-14">
            <button className=" bg-red-400 text-white font-semibold px-4 py-2 rounded-3xl md:ml-[560px] ml-36">RECIPES</button>
            <h1 className="text-center font-bold md:text-5xl text-3xl mt-2 md:mx-96">EMBARK ON A JOURNEY</h1>
            <p className="text-center text-[#555353] mt-4 md:mx-[350px] font-medium text-xl">With our diverse collection of recipes we have something to satisfy every palate</p>


{/* first row */}
<div className="mt-8 md:grid md:grid-cols-3 flex flex-col md:mx-2 mx-4 md:space-x-2 gap-3">

<div>
 <Card className="md:w-[390px] bg-[#fffbf2]">
  <CardHeader>
    <Image src="/Recipe Image.png" alt="Recipe" width={450} height={450}/>
    <CardTitle className="font-bold text-3xl pt-8">Savory Herb-Infused Chicken</CardTitle>
    <CardDescription className="pt-4 text-xl">Indulge in the rich and savory symphony of flavors with our savory herb-infused chicken</CardDescription>
  </CardHeader>
  
  <CardFooter className="flex justify-between pt-6 font-semibold">
    <p>40 MIN-EASY PREP-3 SERVES</p>
    <button className="border border-black px-3 py-2 rounded-3xl"><Link href="/blog/1">VIEW RECIPE</Link></button>
  </CardFooter>
</Card>
</div>


<div>
 <Card className="md:w-[390px] bg-[#fffbf2]">
  <CardHeader>
    <Image src="/Recipe Image (1).png" alt="Recipe" width={450} height={450}/>
    <CardTitle className="font-bold text-3xl pt-8">Lemon Garlic Grilled Chicken</CardTitle>
    <CardDescription className="pt-4 text-xl">Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe</CardDescription>
  </CardHeader>
  
  <CardFooter className="flex justify-between pt-6 font-semibold">
    <p>HOUR-HARD PREP-4 SERVES</p>
    <button className="border border-black px-3 py-2 rounded-3xl"><Link href="/blog/2">VIEW RECIPE</Link></button>
  </CardFooter>
</Card>
</div>



<div>
 <Card className="md:w-[390px] bg-[#fffbf2]">
  <CardHeader>
    <Image src="/Recipe Image (2).png" alt="Recipe" width={450} height={450}/>
    <CardTitle className="font-bold text-3xl pt-8">Quinoa Vegie Stir-Fry</CardTitle>
    <CardDescription className="pt-4 text-xl">Quick, wholesome and bursting with flavors, It is perfect for healthy weeknight dinner</CardDescription>
  </CardHeader>
  
  <CardFooter className="flex justify-between pt-[62px] font-semibold">
    <p>30 MIN-EASY PREP-3 SERVES</p>
    <button className="border border-black px-3 py-2 rounded-3xl"><Link href="/blog/3">VIEW RECIPE</Link></button>
  </CardFooter>
</Card>
</div>

</div>


{/* second row */}
<div className="mt-8 md:grid md:grid-cols-3 flex flex-col md:mx-2 mx-4 md:space-x-2 gap-3">

<div>
 <Card className="md:w-[390px] bg-[#fffbf2]">
  <CardHeader>
    <Image src="/Recipe Image (3).png" alt="Recipe" width={450} height={450}/>
    <CardTitle className="font-bold text-3xl pt-8">Berry Bliss Smoothy Bowl</CardTitle>
    <CardDescription className="pt-4 text-xl">This smoothie berry bowl is not only visually appealing but also a powerhouse of antioxidants</CardDescription>
  </CardHeader>
  
  <CardFooter className="flex justify-between pt-6 font-semibold">
    <p>10 MIN-EASY PREP-2 SERVES</p>
    <button className="border border-black px-3 py-2 rounded-3xl"><Link href="/blog/4">VIEW RECIPE</Link></button>
  </CardFooter>
</Card>
</div>


<div>
 <Card className="md:w-[390px] bg-[#fffbf2]">
  <CardHeader>
    <Image src="/Recipe Image (4).png" alt="Recipe" width={450} height={450}/>
    <CardTitle className="font-bold text-3xl pt-8">Spaghetti Aglio e Olio</CardTitle>
    <CardDescription className="pt-4 text-xl">A minimalist yet flavorful dish with garlic, olive oil, and a hint of red pepper flakes</CardDescription>
  </CardHeader>
  
  <CardFooter className="flex justify-between pt-14 font-semibold">
    <p>20 MINS-EASY PREP-2 SERVES</p>
    <button className="border border-black px-2 py-2 rounded-3xl"><Link href="/blog/5">VIEW RECIPE</Link></button>
  </CardFooter>
</Card>
</div>



<div>
 <Card className="md:w-[390px] bg-[#fffbf2] ">
  <CardHeader>
    <Image src="/Recipe Image (5).png" alt="Recipe" width={450} height={450}/>
    <CardTitle className="font-bold text-3xl pt-6">Grilled Veggies With Sauce</CardTitle>
    <CardDescription className="pt-4 text-xl">Served with a zesty chimichurri sauce it is a perfec addition to your outdoor gatherings</CardDescription>
  </CardHeader>
  
  <CardFooter className="flex justify-between pt-8 font-semibold">
    <p>25 MIN-MED PREP-4 SERVES</p>
    <button className="border border-black px-2 py-2 rounded-3xl"><Link href="/blog/6">VIEW RECIPE</Link></button>
  </CardFooter>
</Card>
</div>

</div>

</section>
    )
}