import React from "react";
import { Clock, Eye } from "lucide-react";

const Card = ({
  title,
  title2,
  description,
  category,
  date,
  views,
  imageUrl,
  bgColor,
  icon,
  isFirstIcon,
}: any) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row m-2">
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundColor: `rgba(${parseInt(bgColor.slice(0, 2), 16)}, ${parseInt(
          bgColor.slice(2, 4),
          16
        )}, ${parseInt(bgColor.slice(4, 6), 16)}, 0.8)`,
        backgroundBlendMode: "multiply",
        position: "relative",
      }}
      className="w-full sm:w-1/2 p-4"
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover opacity-0"
        />
      )}
      <div className="absolute top-20 mt-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl sm:text-xl">
        {title2}
      </div>
      {icon && (
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 ${
            isFirstIcon ? "bottom-0" : "bottom-6"
          }`}
        >
          <img src={icon} alt="icon" className="w-full h-36" />
        </div>
      )}
    </div>

    <div className="p-4 w-full sm:w-2/3">
      <span className="inline-block px-2 py-1 text-xs font-semibold text-[#00665E] mb-2">
        {category}
      </span>
      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
      {date && views && (
        <div className=" items-center text-xs text-gray-500">
          <div className="flex items-center mr-4 mb-2 mt-28 sm:mb-0">
            <Clock size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center mt-2">
            <Eye size={14} className="mr-1" />
            <span>{views}</span>
          </div>
        </div>
      )}
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-bold flex items-center mb-4 sm:mb-0">
          <img src="/TitleIcon.png" alt="title-icon" className="mr-2 w-6 h-6" />
          บทความและข่าวสารล่าสุด
        </h2>
        <button className="px-4 sm:px-6 py-2 border-2 border-[#A8AD00] text-[#A8AD00] rounded-full font-semibold hover:bg-yellow-500 transition-colors text-sm sm:text-base">
          ดูทั้งหมด
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <Card
            title="กำไร/ขาดทุนของหุ้นในพอร์ต ต้องดูอย่างไร?"
            category="Business"
            description="เมื่อซื้อขายหุ้นแล้วสิ่งหนึ่งที่ขาดไม่ได้ คือ การติดตามดูข้อมูลของหุ้นในพอร์ตลงทุนว่าตอนนี้มีกำไรหรือขาดทุนมากน้อยเท่าใด? "
            date="29 กรกฎาคม 2023"
            views="เข้าชม 240 ครั้ง"
            imageUrl="/Dashboard/Dashboard1.png"
            bgColor="081631"
            title2="PROFIT / LOSS
OF STOCKS 
IN THE
PORTFOLIO"
            icon="/Dashboard/WalletIcon.png"
            isFirstIcon={true}
          />
          <Card
            title="Data Engineer คืออะไร?"
            category="Data"
            description="Data Engineer คือคนที่ทำงาน กับหลากหลายเครื่องมือเพื่อรวบรวมข้อมูลจัดการข้อมูลและเปลี่ยนข้อมูลดิบ ให้พร้อมใช้งาน สำหรับทั้ง Data Scientist และ Data Analyst"
            date="29 กรกฎาคม 2023"
            views="เข้าชม 240 ครั้ง"
            imageUrl="/Dashboard/Dashboard2.png"
            bgColor="002E3D"
            title2="WHAT IS
A DATA 
ENGINEER"
            icon="/Dashboard/CubeIcon.png"
          />
        </div>
        <div className="space-y-4">
          <Card
            title="สารแทนน้ำตาลไม่อันตราย"
            category="Science"
            description="สารหรือสิ่งที่เราเรียกมันว่าน้ำตาลแต่จริงๆแล้วมันเป็นสารอะไรกันแน่ที่ช่วยทำให้หวานแต่ไม่เป็นอันตรายต่อการย่อยของปากและกระเพาะอาหาร"
            date=""
            views=""
            imageUrl="/Dashboard/Dashboard3.png"
            bgColor="0D2E6D"
            title2="สารแทนน้ำตาล
ไม่อันตราย"
          />
          <Card
            title="Data Pipelines With Airflow"
            category="Tech"
            description="เรียนรู้การสร้าง End-to-End Data Pipelines โดยใช้ Apache Airflow ตั้งแต่เริ่มต้นจนจบความสะดวก ปรับใช้ได้ในรูปแบบที่เหมาะสม"
            date=""
            views=""
            imageUrl="/Dashboard/Dashboard4.png"
            bgColor="151C59"
            title2="Data Pipelines
with Airflow"
          />
          <Card
            title={`ร่างกายสามารถย้อนวัย ${"อายุชีวภาพ"}`}
            category="Science"
            description={`ความอ่อนเยาว์หรือแนวโน้มของอายุสามารถวัดระดับเซลล์ นั่น คือคำนิยาม "อายุชีวภาพ" (biological age) ซึ่งอาจจะแตกต่างจากอายุจริง`}
            date=""
            views=""
            imageUrl="/Dashboard/Dashboard5.png"
            bgColor="052D43"
            title2="ร่างกายสามารถ
ย้อนวัย 
“อายุชีวภาพ” "
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
