import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main";

function App() {
  return (
    <div className="min-h-screen bg-[#FCFAFA] flex flex-col">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-grow flex flex-col">
        <Header />
        <main className="flex-grow">
          <Main />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
