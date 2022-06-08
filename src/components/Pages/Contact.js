import React from 'react'
import "../Css/contact.css";
export default function Contact() {
  return (
    <div className='contactPage'>
      <form onsubmit="sendEmail(); reset(); return false;">
        <h2>Contact Us</h2>
        <input type="text" id="name" placeholder="Your Name" required />
        <input type="email" id="email" placeholder="Your Email " required />
        <input type="text" id="phone" placeholder="Your Number" required />
        <textarea
          name="message"
          id="message"
          rows="4"
          placeholder="Enter your massage"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
