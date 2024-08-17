import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div>
          <VideoCard 
              title={"#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan Ji Maharaj"}
              image={"photo.jpg"}
              thumbImage={"thumb.jpeg"}
              author={"Bhajan Marg"}
              views={"100k"}
              timestamp={"2 days ago"}
              />
      </div>
  )
}
