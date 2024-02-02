import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Slider({ data }) {
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
          <SwiperSlide key={index}>
          <div className="p-3">
            <img src={item.Image} className="w-full h-40 object-cover" alt={item.name} />
            <h4 className="text-black text-lg font-bold mt-3">{item.name}</h4>
          </div>
          </SwiperSlide>
        )
       })}
      </Swiper>
    </div>
  );
}

export default Slider;
