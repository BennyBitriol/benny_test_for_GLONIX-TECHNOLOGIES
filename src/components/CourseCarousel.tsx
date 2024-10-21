import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ICourseCard } from "../interface";

const courses = [
  {
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    subtitle: "Generative AI and ChatGPT: Design Thinking Edition",
    progress: 0,
    color: "bg-blue-600",
    bgImage: "/CourseSection/Course1.png",
  },
  {
    title: "Generative ChatGPT: UX Design Edition",
    subtitle: "Generative ChatGPT: UX Design Edition",
    progress: 10,
    color: "bg-purple-800",
    bgImage: "/CourseSection/Course2.png",
  },
  {
    title: "เทคนิคการจัดทำบัญชี จัดการภาษี ด้วยเทคโนโลยีดิจิทัล",
    subtitle: "เทคนิคการจัดทำบัญชี จัดการภาษี ด้วยเทคโนโลยีดิจิทัล",
    progress: 40,
    color: "bg-slate-800",
    bgImage: "/CourseSection/Course3.png",
  },
  {
    title: "องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ",
    subtitle: "องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ",
    progress: 80,
    color: "bg-[#00665E]",
    bgImage: "/CourseSection/Course4.png",
  },
];

const CourseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 768) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (courses.length - visibleCards + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + (courses.length - visibleCards + 1)) %
        (courses.length - visibleCards + 1)
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <h2 className="text-xl sm:text-2xl font-bold flex items-center mb-2 sm:mb-0">
          <img src="/TitleIcon.png" alt="title-icon" className="mr-2 w-6 h-6" />
          คอร์สของฉัน
        </h2>
        <button className="px-3 py-1 sm:px-4 sm:py-2 border-2 border-[#A8AD00] text-[#A8AD00] rounded-full font-semibold text-sm sm:text-base">
          ดูทั้งหมด
        </button>
      </div>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2`}
                style={{ flex: `0 0 ${100 / visibleCards}%` }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 sm:-left-10 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-md z-10"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 sm:-right-10 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-md z-10"
          disabled={currentIndex === courses.length - visibleCards}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

const CourseCard = ({
  title,
  subtitle,
  progress,
  color,
  bgImage,
}: ICourseCard) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div className={`h-32 sm:h-40 ${color} relative`}>
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></div>
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="font-semibold mb-2 text-sm sm:text-base line-clamp-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
          {subtitle}
        </p>
        <div className="flex items-center">
          <div className="flex-grow bg-gray-200 rounded-full h-1 sm:h-2 mr-2">
            <div
              className="bg-lime-400 h-1 sm:h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">{`เรียนไปแล้ว ${progress}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCarousel;
