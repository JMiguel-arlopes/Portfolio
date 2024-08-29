import { CardProject } from "../../componets/CardProject";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "../../datas";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwipperProjects() {
  return (
    <div className="max-w-section w-full">
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{ enabled: true }}
        pagination={{
          dynamicBullets: true,
        }}
        style={{ padding: "2rem 3rem", alignItems: "center", height: "100%" }}
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            style={{
              justifyContent: "center",
              alignItems: "stretch",
              height: "100%",
            }}
          >
            <CardProject project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
