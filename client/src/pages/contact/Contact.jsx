import React, { useState } from 'react'
import './contact.css'

export default function Contact() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("");
    const [review, setReview] = useState("");

    const handleSubmitContact = async () => {
        console.log('hello', name, phone, email, review)
    }
    console.log(name, phone, email, review)
    return (
        <div className="wrapperContact">
            <div className='contactContainer'>
                <h1 className='headingContact'>
                    Contact Us
                </h1>
                <div className="line"></div>

                <div className="contactDetails">
                    <div className="leftContact">
                        <p className='contactBrief'>
                            We would love to hear from you! Whether you have a question, suggestion, or simply want to say hello, we value your feedback and appreciate your interest in our blog. Please feel free to reach out to us using the contact form below or connect with us on our social media platforms. We strive to respond to all inquiries in a timely manner. Let's start a conversation and build a vibrant community together. We look forward to connecting with you!
                        </p>
                    </div>

                    <div className="rightContact">
                        <h1 style={{ paddingTop: "3%", paddingBottom: '3%', textAlign: "center" }}>Feel Free To Share Your Ideas</h1>
                        <form className="contactForm" onSubmit={handleSubmitContact}>
                            <label style={{ marginLeft: '2%' }}>Name :</label>
                            <input
                                className="formInputContact"
                                type="text"
                                placeholder="Enter your name..."
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <label style={{ marginLeft: '2%' }}>Phone :</label>
                            <input
                                className="formInputContact"
                                type="text"
                                placeholder="Enter your number..."
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <label style={{ marginLeft: '2%' }}>Email :</label>
                            <input
                                className="formInputContact"
                                type="email"
                                placeholder="Enter your email..."
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label style={{ marginLeft: '2%' }}>Your Review :</label>
                            <textarea
                                className="formInputContact"
                                type="text"
                                placeholder="Enter your review..."
                                onChange={(e) => setReview(e.target.value)}
                                required
                            />

                            <button className="contactSubmitButton" type="submit" >Submit</button>

                        </form>
                    </div>


                </div>

            </div>
        </div>
    )
}
