import React from "react";
import {
  Bold,
  Italic,
  Underline,
  Link,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

const QuestionForm = () => {
  return (
    <div className="max-w-6xl p-4 sm:p-6 mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold flex items-center">
        <img
          src="/TitleIcon.png"
          alt="title-icon"
          className="mr-2 w-6 h-6 sm:w-8 sm:h-8"
        />
        ตั้งกระทู้คำถาม
      </h2>
      <div className="rounded-xl bg-white p-4 sm:p-6 mt-4">
        <form>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm sm:text-md font-bold text-[#000000] mb-1"
            >
              หัวข้อกระทู้
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="หัวข้อกระทู้"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm sm:text-md font-bold text-[#000000] mb-1"
            >
              เนื้อหา
            </label>
            <div className="mb-2 flex flex-wrap items-center space-x-1 sm:space-x-2 border border-gray-300 rounded-md p-1">
              <select className="text-xs sm:text-sm border-none focus:ring-0 mb-1 sm:mb-0">
                <option>Normal</option>
                <option>Sans Serif</option>
              </select>
              <div className="hidden sm:block h-4 border-l border-gray-300"></div>
              <div className="flex space-x-1 sm:space-x-2">
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <Bold size={14} />
                </button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <Italic size={14} />
                </button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <Underline size={14} />
                </button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <Link size={14} />
                </button>
              </div>
              <div className="hidden sm:block h-4 border-l border-gray-300"></div>
              <div className="flex space-x-1 sm:space-x-2">
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <List size={14} />
                </button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <AlignLeft size={14} />
                </button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <AlignCenter size={14} />
                </button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <AlignRight size={14} />
                </button>
              </div>
            </div>
            <textarea
              id="content"
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#b5c731] text-white rounded-md hover:bg-[#00665E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b5c731]"
            >
              ส่ง
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
