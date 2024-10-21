import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ICourseCarouselTwo } from "../interface";

const courses = [
  {
    category: "Business",
    title: "ลงทุนหุ้นมั่นใจ ต้องเข้าใจปัจจัยพื้นฐาน",
    description: "รู้และเข้าใจปัจจัยที่ส่งผล กระทบต่อราคาหุ้น",
    instructor: {
      name: "ณัฐธานินท์ ลักขณอนันต์",
      role: "CEO Y.I.M Corporation",
      image: "/Online/OnlineAvatar1.png",
    },
    bgColor: "bg-[#FCFF8B]",
    textColor: "text-[#000000]",
    bgImage: "/Online/Online1.png",
  },
  {
    category: "Data",
    title: "Progressive Web Application",
    description:
      "การพัฒนา Application ด้วยคอนเซ็ปท์ Progressive Web Application (PWA)",
    instructor: {
      name: "ปัญญาพงศ์ เสริมวรวัฒน์",
      role: "Google Developers",
      image: "/Online/OnlineAvatar2.png",
    },
    bgColor: "bg-[#000D2E]",
    textColor: "text-white",
    bgImage: "/Online/Online2.png",
  },
  {
    category: "Science",
    title: "React Hooks in Action",
    description: "เรียนรู้การเขียน React Hooks แบบ Best Practice",
    instructor: {
      name: "วรทัศน์ วัฒนาสกุลไท",
      role: "Co-Founder",
      image: "/Online/OnlineAvatar3.png",
    },
    bgColor: "bg-[#95FFE5]",
    textColor: "text-gray-800",
    bgImage: "/Online/Online3.png",
  },
  {
    category: "Tech",
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    description: "ปลดล็อคข้อจำกัดการทำงาน ด้วยพลัง AI",
    instructor: {
      name: "ทิชานันท์ รัชตะสัมฤทธิ์",
      role: "Software Engineer",
      image: "/Online/OnlineAvatar4.png",
    },
    bgColor: "bg-[#06002E]",
    textColor: "text-white",
    bgImage: "/Online/Online4.png",
  },
];

const CourseCarouselTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <h2 className="text-xl sm:text-2xl font-bold flex items-center mb-2 sm:mb-0">
          <img src="/TitleIcon.png" alt="title-icon" className="mr-2 w-6 h-6" />
          คอร์สออนไลน์
        </h2>
        <button className="px-3 py-1 sm:px-4 sm:py-2 border-2 border-[#A8AD00] text-[#A8AD00] rounded-full font-semibold text-sm sm:text-base">
          ดูทั้งหมด
        </button>
      </div>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} visibleCards={visibleCards} />
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
  category,
  title,
  description,
  instructor,
  bgColor,
  textColor,
  bgImage,
  visibleCards,
}: ICourseCarouselTwo & { visibleCards: number }) => {
  return (
    <div
      className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2`}
      style={{ flex: `0 0 ${100 / visibleCards}%` }}
    >
      <div
        className={`${bgColor} ${textColor} rounded-lg overflow-hidden h-full flex flex-col relative`}
      >
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></div>
        <div className="p-4 sm:p-6 flex-grow relative z-10">
          <span className="inline-block px-2 py-1 rounded-full border border-current text-xs sm:text-sm mb-2 sm:mb-4">
            {category}
          </span>
          <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="mb-4 text-sm sm:text-base line-clamp-3">
            {description}
          </p>
        </div>
        <div className="p-4 sm:p-6 flex items-center relative z-10">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold text-sm sm:text-base">
              {instructor.name}
            </p>
            <p className="text-xs sm:text-sm">{instructor.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCarouselTwo;
