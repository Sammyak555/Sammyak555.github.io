import React from 'react'
import "../css/Contact.css"
import { Field, Form, Formik } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react'
import { FiMail, FiPhone } from "react-icons/fi";
import { BsGithub, BsCursorFill } from "react-icons/bs"
function Contact() {

  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    }

    return error
  }
  function validateEmail(value) {
    let error
    if (!value) {
      error = 'Eamil is required'
    }
    return error
  }
  function validateMessage(value) {
    let error
    if (!value) {
      error = 'Message is required'
    }
    return error
  }

  return (
   <div className='fullcontactcont'>
     <div className="contact" id="contact">
      <h1>ＣＯＮＴＡＣＴ</h1>
      <div className='contactbox'>
        <div className='contactinput'>
          <h1>Message me</h1>
          <FormControl isRequired>
            <FormLabel marginTop={"14px"} marginLeft="10px">Name</FormLabel>
            <Input border={"none"} borderBottom={"1px solid rgb(72, 72, 72)"} background={"transparent"} placeholder='enter name' width={"95%"} />
            <FormLabel marginTop={"14px"} marginLeft="10px">Email</FormLabel>
            <Input border={"none"} borderBottom={"1px solid rgb(72, 72, 72)"} background={"transparent"} placeholder='enter email' width={"95%"} />
            <FormLabel marginTop={"14px"} marginLeft="10px">Message</FormLabel>
            <Input border={"none"} borderBottom={"1px solid rgb(72, 72, 72)"} background={"transparent"} height={"3.5rem"} placeholder='emter message' width={"95%"} />
          </FormControl>
          <br />
          <Button onClick={() => alert("thank you for visiting")} className='subbtn' background={"transparent"} color="rgb(72, 72, 72)" width="20%">Submit</Button>
        </div>
      </div>
    </div>
    <div className='contactdetails'>
          <div className='tool'>

            <FiPhone /> <div className='cdt'><span>+91-9503803512</span></div>
          </div>
          <div className='tool'>

            <FiMail /><div  className='cdt'><span>sammyak.deosale.1@gmail.com</span></div>
          </div>

          <div className='tool'>

            <BsGithub /><div className='cdt'><a href="https://github.com/Sammyak555"><span>Sammyak555</span></a></div>
          </div>
          <div className='tool'>

            <BsCursorFill /><div className='cdt'><a href="https://www.linkedin.com/in/sammyak-deosale-1b9abb229/"><span>Sammyak Deosale</span></a></div>
          </div>
          <br />
          {/* <div>
            <a className="btns" href='../Resume/Sammyak_MERN_Resume1.pdf' download><button style={{ width: "auto",padding:"5px" }} className="btns">
              Download CV
            </button>
            </a>
          </div> */}
        </div>
   </div>
  )
}

export default Contact;