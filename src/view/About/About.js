import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import toast, { Toaster } from "react-hot-toast";

function About() {
  return (
    <div>
      <Navbar/>
      <h1>About-Page</h1>
      <img 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66-EVEhzOkLFuSPV3512ogwqAXBLWh4lC8w&s' 
      alt='about-image'
      className='image'
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
  )
}

export default About