import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import BodyPage from '../Body/BodyPage'
import { IoCallSharp } from "react-icons/io5";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleMsg = (e) => {
    setMessage(e.target.value)
  } 


  return (
    <div>
        <Header/>
            <BodyPage>
                <div className='bg-orange-900'>
                  <p className='p-10 text-white text-6xl text-center'>Let's Chat</p>
                  <div className='flex flex-row ml-10 mr-10  rounded-md bg-orange-300'>
                    <div className='flex'>
                      <div className="flex flex-col w-2/4 justify-center">
                        <span className="m-6 flex items-center mb-4 hover:cursor-pointer">
                          <IoCallSharp className="m-4" />
                          <div>
                            <p>Call us at</p>
                            <p>24578466431</p>
                          </div>
                        </span> 

                        <span className="m-6 flex items-center mb-4 hover:cursor-pointer">
                          <FaLocationPin className="m-4" />
                          <div>
                            <p>No 4,</p>
                            <p>Main Road</p>
                            <p>Sri Lanka</p>
                          </div>
                        </span>

                        <span className="m-6 flex items-center mb-4 hover:cursor-pointer">
                          <MdEmail className="m-4" />
                          <div>
                            <p>Email us at</p>
                            <p>abcd@gmail.com</p>
                          </div>
                        </span>
                      </div>
                      <div className='flex items-center bg-orange-400 m-2'>
                        <img className="rounded h-auto min-h-72	w-96 min-w-52	 p-2" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="img"/>
                      </div>
                      <p className='text-orange-900 p-8 content-center text-5xl' >What's on your mind</p>
                    </div>
                  </div>

                  <div className='p-8'>
                  <form className='flex flex-col items-center w-auto h-auto text-xl text-center m-2 p-4'>
                    <div className='bg-orange-500 p-8 rounded-xl' >
                      <label className='text-white flex justify-items-start items-center mb-4'>
                        Name:
                        <input type="text" name="name" value={name} onChange={handleName} required className='ml-10 w-96 text-black' />
                      </label>
                      <label className='text-white flex  mb-4'>
                        Email:
                        <input type="text" name="email" value={email} onChange={handleEmail} required className='ml-12 w-96 text-black'/> 
                      </label>
                      <label className='text-white flex justify-start items-center mb-4'>
                        Message:
                        <textarea name="message" value={message} onChange={handleMsg} className='ml-4 w-96 text-black'></textarea>
                      </label>
                      <input type="submit" value="Submit" required  className="bg-white text-red-900 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200" />
 
                    </div>
                   </form>
                  </div>

                </div>
            </BodyPage>
        <Footer/>
    </div>
  )
}

export default Contact