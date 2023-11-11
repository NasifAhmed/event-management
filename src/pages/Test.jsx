// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../assets/styles/swiper.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function Test({ data }) {
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {data &&
                    data.map((data) => {
                        return (
                            <SwiperSlide
                                key={data.id}
                                className="text-center bg-no-repeat bg-cover "
                                style={{
                                    backgroundImage: `url(${data.image})`,
                                }}
                            >
                                <div className="w-full h-full bg-black opacity-70 flex justify-center items-center px-5">
                                    <h1 className="text-white opacity-100">
                                        {data.name}
                                    </h1>
                                </div>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </>
    );
}
