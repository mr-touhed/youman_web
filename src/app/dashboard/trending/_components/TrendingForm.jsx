"use client";
import { DateRange } from "react-date-range";
import { baseURL } from "@/utils/baseURL";
import { uploadImageToImgBB } from "@/utils/imageupload";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import revalidateTag from "@/utils/revalided";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const TrendingForm = ({ trending }) => {
  

  const [trendingPost, setTrendingPost] = useState(trending);

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const change_value = (e) => {
    setTrendingPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  

 

  const handel_submit_event = async (e) => {
      e.preventDefault();
       
      try {

          if(image === null) return toast('select your partner image');
          setLoading(true)
          const imageUrl = await uploadImageToImgBB(image.file);
              if (imageUrl){
                  const events = {...trendingPost, image:imageUrl }
                      const response = await fetch(`${baseURL}/create-events`,{
                          method:"POST",
                          headers:{
                              "content-type": "application/json"
                          },
                          body: JSON.stringify(events)
                      })

                      const result = await response.json();
                      if(result.status.type){
                          setLoading(false)
                          e.target.reset()
                          setImage(null)
                         
                          setTrendingPost({
                            image: "",
                            name: "",
                            type:"",
                            venue: "",
                            date:"",
                            details: "",
                          })
                          toast(result.status.message)
                          revalidateTag("events");
                          revalidateTag("tranding");
                          
                          return
                      }
              }else{
                console.log(imageUrl);
              }

      } catch (error) {
          console.log("upload offer",error);
          toast(error.message)
      }
  }

  return (
    <form onSubmit={handel_submit_event}>
      <section className="flex flex-col gap-8 max-w-2xl mx-auto">
        <div className="">
          <section className="h-full  grid place-content-center rounded-md">
            {image?.img && (
              <Image
                width={300}
                height={250}
                src={image?.img}
                alt="product Image"
              />
            )}
            <div>
              <label
                htmlFor="image"
                className=" rounded-md  p-2 border bg-green-600 text-white text-xs shadow-lg"
              >
                Select Image
              </label>{" "}
              <br />
              <input
                className="hidden"
                accept="image/png,image/jpg,image/jpeg"
                type="file"
                name="image"
                id="image"
                onChange={(e) =>
                  setImage({
                    file: e.target.files[0],
                    img: e.target.files[0]
                      ? URL.createObjectURL(e.target.files[0])
                      : null,
                  })
                }
              />
            </div>
          </section>
         
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="Event name" className="text-sm">
            Events Title <span className="text-red-400">*</span>
          </label>
          <input
            onChange={(e) => change_value(e)}
            type="text"
            name="name"
            required
            value={trendingPost.name}
            placeholder="Events Title"
            className="border p-2"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="name" className="text-sm">
            Events type <span className="text-red-400">*</span>
          </label>
          <input
            onChange={(e) => change_value(e)}
            type="text"
            name="type"
            required
            value={trendingPost.type}
            placeholder="Events type"
            className="border p-2"
          />
        </div>

        <div className="flex flex-col w-full gap-1  ">
          <label htmlFor="venue" className="text-sm">
            venue <span className="text-red-400">*</span>
          </label>

          <input
            type="text"
            name="venue"
            required
            value={trendingPost.venue}
            onChange={(e) => change_value(e)}
            className="border p-2 "
            placeholder="venue"
          />
        </div>
        <section className="grid grid-cols-2 gap-6">
        <div className="flex flex-col w-full gap-1  ">
          <label htmlFor="venue" className="text-sm">
            Date <span className="text-red-400">*</span>
          </label>

          <input
            type="text"
            name="date"
            required
            value={trendingPost.date}
            onChange={(e) => change_value(e)}
            className="border p-2 "
            placeholder="date"
          />
        </div>
        <div className="flex flex-col w-full gap-1  ">
          <label htmlFor="venue" className="text-sm">
            Status <span className="text-red-400">*</span>
          </label>
                <select  name="status"
            required
            value={trendingPost.status}
            onChange={(e) => change_value(e)}
            className="border p-2 "
            
            >
                        <option value="ongoing">Ongoing</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="preceding">Preceding</option>
                </select>
          
        </div>
        </section>

        <div className="flex flex-col w-full gap-1">
          <label htmlFor="title" className="text-sm">
            {" "}
            Details <span className="text-red-400">*</span>
          </label>
          <textarea
            required
            onChange={(e) => change_value(e)}
            type="text"
            name="details"
            value={trendingPost.details}
            placeholder="Details"
            className="border p-2 h-28"
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 p-2 text-white rounded-lg uppercase"
        >
          {loading ? "Loading..." : "Add Events +"}
        </button>
      </section>
     
    </form>
  );
};

export default TrendingForm;
