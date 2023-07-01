import React, { useState } from 'react'
import './LandPageSecFive.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { FaLinkedinIn,FaFacebookF,FaTwitter } from "react-icons/fa";

const LandPageSecFive = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [text,setText]=useState('')


    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('ProfilePortfolio', 'profilePortfolioTemplate', form.current, 'R-PIU8JgrSoL-sOGO')
        .then((result) => {
          alert("Submission Granted")
        }, (error) => {
          alert("Something Went Wrong !")
        });
        setName('');
        setEmail('');
        setText('');
    }

  return (
   <>
    <h1 className='contactSecFiveTitle'>... Contact Me ...</h1>
    <div className='contactSectionWrapper' id='contact'>
        

        <div className="secFiveLeft">
            <span style={{color:"gray"}}>{`<hi>`}</span>
            <h2>Just say hi!</h2>
            <span style={{color:"gray"}}>{`</hi>`}</span>
            <p>I'll contact you soon <span style={{color:"#FDCA00"}}>:)</span></p>
        <form ref={form} onSubmit={sendEmail}>
          {/* <label>Name</label> */}
          <input placeholder='Enter Your Name' type="text" name="user_name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          {/* <label>Email</label> */}
          <input placeholder='Enter Your Email' type="email" name="user_email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          {/* <label>Message</label> */}
          <textarea placeholder='Write Your Message' rows={4} name="message" value={text} onChange={(e)=>{setText(e.target.value)}}/>
          <button className='Cbtn' type='submit'>Send</button>
        </form>
        </div>
        <div className="secFiveRight">
            <h3>Contact Information</h3>
            <p>556/A Kamal Khan Street <br />Mirpur-14, Dhaka <br />Bangladesh</p><br />
            <p>Call Me : +880 13 1551 3173 <br />10.00 AM - 10.00 PM</p>
            <h4>Follow Me,</h4>
            <div className="secFiveIcons">
                <a target='blank' href="https://www.linkedin.com/in/piyasmahamudealif/"><FaLinkedinIn id='linkFive' className='CIcon'/></a>
                <a target='blank' href="https://www.facebook.com/piyasmahamude.alif.9/"><FaFacebookF id='facebookFive' className='CIcon'/></a>
                <a target='blank' href="https://twitter.com/AlifPiyas"><FaTwitter id='twitterFive' className='CIcon'/></a>
            </div>
        </div>



    </div>
   
   </>
  )
}

export default LandPageSecFive