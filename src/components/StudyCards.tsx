import React from "react";
import { ArrowRight, Database, Cpu, Briefcase } from "lucide-react";
//Flask
import { IStudyCards } from "../interface";

const StudyAreaCards = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <img src="/TitleIcon.png" alt="title-icon" className="mr-2" />
        เลือกเรียนตามหัวข้อที่สนใจ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StudyCard
          icon="/DataIcon.png"
          title="Data"
          description="เรียนรู้และฝึกฝนกระบวนการคิดสร้างมูลค่าให้ธุรกิจด้วยข้อมูล"
        />
        <StudyCard
          icon="/ScienceIcon.png"
          title="Science"
          description="เรียนรู้และฝึกฝนกระบวนการคิดด้วยกระบวนการทางวิทยาศาสตร์"
        />
        <StudyCard
          icon="/TechIcon.png"
          title="Tech"
          description="พร้อมเป็นที่ต้องการของตลาดแรงงานด้วยทักษะการเขียนโปรแกรม"
        />
        <StudyCard
          icon="/BookIcon.png"
          title="Business"
          description="พลิกโฉมธุรกิจในยุคดิจิทัลด้วยการเข้าถึงลูกค้าในช่องทาง และเวลาที่เหมาะ"
        />
      </div>
    </div>
  );
};

const StudyCard = ({ icon, title, description }: IStudyCards) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center ">
          <img src={icon} alt="icon" className="mb-4 mr-2" />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="flex justify-end">
        <ArrowRight className="text-[#00665E]" size={24} />
      </div>
    </div>
  );
};

export default StudyAreaCards;
