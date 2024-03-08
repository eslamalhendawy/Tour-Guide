import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

const PlaceSlider = ({ data }) => {
  return (
    <div>
      <Swiper
        className="mb-6"
        slidesPerGroup={1}
        spaceBetween={15}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide className="mb-6" key={index}>
              <Link to={`/place/${item._id}`}>
                <div className="p-3">
                  <img src={item.image} className="w-full h-40 object-cover" alt={item.name} />
                  <h4 className="text-black text-lg font-bold mt-3">{item.name}</h4>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PlaceSlider;
