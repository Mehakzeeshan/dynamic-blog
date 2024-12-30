import { BlogDetails } from "@/app/data/details";
import Image from "next/image";
import CommentBox from "@/app/components/comments";

interface DetailPageProps {
  params: {
    id: string; // Matches the `[id]` segment
  };
}

export async function generateStaticParams() {
  // Map the IDs of products to create static paths
  return BlogDetails.map((detail) => ({
    id: detail.id.toString(),
  }));
}

const DetailPage = ({ params }: DetailPageProps) => {
  // Find the product based on the dynamic ID
  const detail = BlogDetails.find((p) => p.id === params.id);

  if (!detail) {
    return <div>Product not found</div>; // Fallback for invalid IDs
  }

  return (
    <div className="mt-12 border border-[#9f9f9f] rounded-2xl md:mx-20 mx-2 pb-16">
      <button className=" bg-red-400 text-white font-semibold px-4 py-1 rounded-3xl md:ml-[480px] ml-36 mt-12">{detail.heading}</button>
      <h1 className="md:text-6xl text-5xl font-extrabold text-center mt-5 md:px-60">{detail.title}</h1>
      <p className="text-[#262522] mt-12 text-center text-xl md:px-60">{detail.headDiscription}</p>
      <p className="mt-8 font-bold text-center">⏱{detail.timing}</p>
      <Image src={detail.imageURL} alt="Grilled Chicken" width={900} height={900} className="mt-8 md:mx-20 px-2 md:px-0"/>
      <p className="text-[#333333] md:px-32 px-8 mt-8 text-center">{detail.description}</p>
      <div className="mt-10 border bg-[#fffbf2] md:mx-32 mx-2 rounded-2xl pb-10">
      <h2 className="text-[#ee6352] pt-8 px-10 text-2xl font-bold">{detail.ingredientsHead}</h2>
      <li className="pt-8 md:px-10 px-4 text-xl font-semibold text-[#262522] ">{detail.ingredients}</li>
      </div>
      <h1 className="mt-12 text-4xl font-bold md:px-32 px-8">{detail.instructions}</h1>
      <p className="text-[#333333] mt-6 md:px-32 px-8">{detail.instructDetails}</p>

      <div>
        <CommentBox />
      </div>
    </div>
  );
};

export default DetailPage;
