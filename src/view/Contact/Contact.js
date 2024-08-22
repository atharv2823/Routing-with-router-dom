import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  return (
    <div>
      <Navbar/>
      <h1>Contact-Page</h1>
      <img 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8KI4zQvrEG7pjpGjb969Q4UMP-rlqtHOuw&s' 
      alt='contact-image'
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

export default Contact