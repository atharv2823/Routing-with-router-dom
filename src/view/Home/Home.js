import React from "react";
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home-Page</h1>
      <img
        src="https://img.freepik.com/free-vector/house-restyling-concept-illustration_114360-2877.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=ais_user"
        alt="home-image"
        className="image"
      />

      <div>
        <button
        className="btn" 
        onClick={()=>{
          toast.loading("loading...")
          }}>
          loading
        </button>

        <button 
        className="btn"
        onClick={()=>{
          toast.dismiss()
          toast.success("loaded successfully...")
          }}>
            success
        </button>

        <button
        className="btn"
        onClick={()=>{
          toast.dismiss()
          toast.error("loding error...")
          }}>
          error
        </button>
      </div>
      <Footer />
      <Toaster/>
    </div>
  );
}

export default Home;
