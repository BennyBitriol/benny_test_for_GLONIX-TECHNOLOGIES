import React, { useState, useEffect } from "react";
import { ICourseLandingPage } from "../interface";

const CourseLandingPage = () => {
  const [selectedCard, setSelectedCard] = useState<string[] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const courseTitles = [
    "Generative AI and ChatGPT: Design Thinking Edition",
    "Generative ChatGPT:",
    "UX Accelerator",
  ];

  const handleCardClick = (title: string) => {
    if (isMobile) {
      setSelectedCard((prevSelected) =>
        prevSelected && prevSelected.includes(title)
          ? prevSelected.filter((item) => item !== title)
          : prevSelected
          ? [...prevSelected, title]
          : [title]
      );
    } else {
      setSelectedCard([title]);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setSelectedCard(courseTitles);
    } else {
      setSelectedCard(["Generative AI and ChatGPT: Design Thinking Edition"]);
    }
  }, [isMobile]);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
        <p className="text-[#00665E] font-medium mb-2 text-sm sm:text-base">
          Lorem ipsum is simply dummy.
        </p>
        <img
          src="/LearnAnytime.png"
          alt=""
          className="w-full h-auto object-cover mb-4 sm:mb-6"
        />
        <div className="w-full">
          <form className="flex items-center w-full">
            <input
              type="text"
              placeholder="ค้นหา..."
              className="flex-grow px-3 sm:px-4 py-2 rounded-l-full border focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-lime-400 text-black px-4 sm:px-6 py-2 rounded-r-full font-semibold flex items-center text-sm sm:text-base"
            >
              ค้นหา
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 w-full lg:w-1/2">
        <CourseCard
          title="Generative AI and ChatGPT: Design Thinking Edition"
          subtitle="ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI"
          instructor="ณัฐกานต์ สิทธิชัยอนันต์"
          role="CEO Y.I.M Corporation"
          bgColor="bg-[#00665E]"
          textColor="text-white"
          isSelected={selectedCard?.includes(
            "Generative AI and ChatGPT: Design Thinking Edition"
          )}
          onClick={() =>
            handleCardClick(
              "Generative AI and ChatGPT: Design Thinking Edition"
            )
          }
          bgImage="/FirstSection/CourseLandingPage1.png"
          avatarUrl="/FirstSection/CourseLandingPageAvatar1.png"
          isMobile={isMobile}
        />
        <CourseCard
          title="Generative ChatGPT:"
          subtitle="UX Design Edition"
          instructor="ณัฐกานต์ สิทธิชัยอนันต์"
          role="CEO Y.I.M Corporation"
          bgColor="bg-emerald-400"
          textColor="text-black"
          isSelected={selectedCard?.includes("Generative ChatGPT:")}
          onClick={() => handleCardClick("Generative ChatGPT:")}
          bgImage="/FirstSection/CourseLandingPage2.png"
          avatarUrl="/FirstSection/CourseLandingPageAvatar2.png"
          isMobile={isMobile}
        />
        <CourseCard
          title="UX Accelerator"
          subtitle="Bundle"
          instructor="ณัฐกานต์ สิทธิชัยอนันต์"
          role="CEO Y.I.M Corporation"
          bgColor="bg-yellow-300"
          textColor="text-black"
          isSelected={selectedCard?.includes("UX Accelerator")}
          onClick={() => handleCardClick("UX Accelerator")}
          bgImage="/FirstSection/CourseLandingPage3.png"
          avatarUrl="/FirstSection/CourseLandingPageAvatar3.png"
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};

const CourseCard = ({
  title,
  subtitle,
  instructor,
  role,
  bgColor,
  textColor,
  isSelected,
  onClick,
  bgImage,
  avatarUrl,
  isMobile,
}: ICourseLandingPage & { isMobile: boolean }) => {
  return (
    <div
      className={`${bgColor} ${textColor} p-4 sm:p-6 rounded-xl flex flex-col justify-between h-full cursor-pointer transition-all duration-300 relative`}
      onClick={onClick}
      style={{
        width: !isMobile && !isSelected ? "calc(50% - 0.5rem)" : "100%",
      }}
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50 rounded-xl"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div
        className={`relative z-10 ${
          isMobile || isSelected ? "" : "flex flex-col items-center"
        }`}
      >
        <h2
          className={`font-bold text-lg sm:text-xl mb-2 ${
            isMobile || isSelected ? "" : "transform -rotate-90 origin-center"
          }`}
          style={{
            transform: isMobile || isSelected ? "none" : "rotate(-90deg)",
            transformOrigin: "center center", // Adjusting the rotation point
            display: "flex", // Added to center the text vertically
            alignItems: "center", // Align vertically
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-sm sm:text-base ${
              isMobile || isSelected
                ? "mb-4"
                : "transform -rotate-90 whitespace-nowrap mb-2 origin-top-left"
            }`}
            style={{
              transform: isMobile || isSelected ? "none" : "rotate(-90deg)",
              transformOrigin: "center center", // Adjusting the rotation point
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {(isMobile || isSelected) && (
        <div className="flex items-center mt-4 relative z-10">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt={`${instructor}'s avatar`}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2"
            />
          )}
          <div>
            <p className="font-semibold text-sm sm:text-base">{instructor}</p>
            {role && <p className="text-xs sm:text-sm">{role}</p>}
          </div>
        </div>
      )}
      {!isMobile && !isSelected && (
        <div className="absolute bottom-4 left-4">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt={`${instructor}'s avatar`}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CourseLandingPage;
