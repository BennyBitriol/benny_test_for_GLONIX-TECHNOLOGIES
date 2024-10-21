import React from "react";
import { Youtube, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const ourCourse = [
    {
      id: 1,
      name: "Data",
    },
    {
      id: 2,
      name: "Science",
    },
    {
      id: 3,
      name: "Tech",
    },
    {
      id: 4,
      name: "Business",
    },
  ];
  const aboutUs = [
    {
      id: 1,
      name: "สอนกับเรา",
    },
    {
      id: 2,
      name: "ติดต่อสอบถามเพิ่มเติม ",
    },
    {
      id: 3,
      name: "แจ้งปัญหาเกี่ยวกับระบบ",
    },
    {
      id: 4,
      name: "ช่องทางการร้องเรียน",
    },
  ];
  const policy = [
    {
      id: 1,
      name: "Privacy",
    },
    {
      id: 2,
      name: "Terms and Conditions",
    },
    {
      id: 3,
      name: "Data Protection Policy Six",
    },
    {
      id: 4,
      name: "Cookie Policy",
    },
  ];
  return (
    <footer className="  bg-[#00665E] text-white p-8">
      <div className="max-w-6xl mx-auto container pr-10 pl-5">
        <h2 className="text-[64px] font-bold">LOGO</h2>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="mt-8 pt-8 border-t border-[#C1C7CD]-500  grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-2">คอร์สของเรา</h3>
              <ul>
                {ourCourse.map((ele) => (
                  <li key={ele.id}>{ele.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">เกี่ยวกับเรา</h3>
              <ul>
                {aboutUs.map((ele) => (
                  <li key={ele.id}>{ele.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">ความปลอดภัย</h3>
              <ul>
                {policy.map((ele) => (
                  <li key={ele.id}>{ele.name}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="mb-2 font-bold mb-4">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <p className="mb-4">
                199 ม.6 ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230
              </p>
              <h3 className="font-bold mb-2">ติดต่อเรา</h3>
              <div className="flex space-x-4">
                <Youtube size={20} />
                <Facebook size={20} />
                <Twitter size={20} />
                <Instagram size={20} />
                <Linkedin size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#00665E]-500 flex flex-col md:flex-row justify-between items-center">
          <p>Y.I.M Corporation © 2023. All rights reserved.</p>
          <p>0-3835-4580-4, 0-3835-2611-6</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
