import { VideoCard } from "./VideoCard"

const Videos=[
    {
              title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
              image: "photo.jpg",
              thumbImage: "thumb.jpeg",
              author: "Bhajan Marg",
              views: "100k",
              timestamp: "2 days ago"
    },
    {
        title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
        image: "photo.jpg",
        thumbImage: "thumb.jpeg",
        author: "Bhajan Marg",
        views: "100k",
        timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "#637 Ekantik Vartalaap & Darshan/ 15-08-2024/ Shri Hit Premanand Govind Sharan...",
    image: "photo.jpg",
    thumbImage: "thumb.jpeg",
    author: "Bhajan Marg",
    views: "100k",
    timestamp: "2 days ago"
}
]

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10">
        {Videos.map(video=>{
            return <div>
                <VideoCard 
                title={video.title}
                image={video.image}
                thumbImage={video.thumbImage}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
                />
            </div>
        })}
    </div>
  )
}

export default VideoGrid