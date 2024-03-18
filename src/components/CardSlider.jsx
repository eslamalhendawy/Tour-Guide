import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { getData } from "../Services/APICalls";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function CardSlider() {
  const [articles, setArticles] = useState([]);
  const userToken = localStorage.getItem("userToken");
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await getData("articles", userToken);
      setArticles(response.data.articles);
    };
    fetchArticles();
  }, []);
  return (
    <div className="bg-postage py-6 px-3">
      <div className="container mx-auto flex flex-col md:flex-row md:items-stretch bg-white rounded-lg">
        <Swiper className="container " slidesPerGroup={1} navigation={true} modules={[Pagination, Navigation]}>
          {articles.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-stretch">
                <div className="w-full rounded-l-lg">
                  <img className="h-full w-full rounded-t-lg md:rounded-t-none md:rounded-l-lg" src={item.image} alt="" />
                </div>
                <div className="p-8">
                  <div className="mb-12">
                    <h3 className="text-brownOrange font-semibold text-xl md:text-2xl xl:text-3xl mb-3 uppercase">{item.title}</h3>
                    <div className="border-t-4 border-dotted border-brownOrange w-[30%] mb-3"></div>
                    <div className="border-t-4 border-dotted border-brownOrange w-[30%] mb-6"></div>
                    <p className="text-base mb-3">{item.hint}</p>
                  </div>
                  <Link to={`/article/${item._id}`} className="bg-brownOrange hover:bg-postage duration-300 text-lg text-white p-3 font-bold block mt-auto w-fit">
                    KNOW MORE <i className="fa-solid fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CardSlider;
