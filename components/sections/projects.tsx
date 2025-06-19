"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Copy from "../animation/Copy";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Mobile App UI Design",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting.",
      image: "/mobile-app-ui.png",
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Professional dashboard interface with data visualization.",
      image: "/dashboard-ui.png",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with seamless user experience.",
      image: "/ecommerce-ui.png",
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Copy delay={0.5}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-SpaceMonoRegular font-bold text-gray-900 mb-4 md:mb-6">
            <span className="inline-flex items-center">
              <MdOutlineKeyboardArrowRight className="text-[#d297fc] rounded-none w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[60px] lg:h-[60px]" />{" "}
              Projects We Have For Our Clients
            </span>
          </h2>
        </Copy>

        <div className="relative pb-12">
          <Swiper
            pagination={{
              el: '.swiper-pagination',
              clickable: true
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 7000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 1.75,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="max-w-2xl mx-auto">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl">
                    <div className="bg-purple-200/50 rounded-2xl sm:rounded-3xl overflow-hidden p-2 sm:p-4 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                      />
                    </div>
                    <div className="mt-4 sm:mt-6 md:mt-8 text-center">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination absolute bottom-0 w-full"></div>
        </div>
      </div>
    </section>
  );
}
