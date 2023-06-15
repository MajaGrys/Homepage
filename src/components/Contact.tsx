import { Slide } from "react-awesome-reveal";
import {
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { useState } from "react";
import Provider from "../provider/mainDataProvider";

export default function Contact() {
    const [contactName, setContactName] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [contactTopic, setContactTopic] = useState("")
    const [contactMessage, setContactMessage] = useState("")

    interface FormDataType {contactName:string, contactEmail: string, contactTopic: string, contactMessage: string}
    const responseBody: FormDataType = {contactName: "", contactEmail: "", contactTopic: "", contactMessage: ""}

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('asxas')
        responseBody.contactName = contactName
        responseBody.contactEmail = contactEmail
        responseBody.contactTopic = contactTopic
        responseBody.contactMessage = contactMessage
        console.log(JSON.stringify(responseBody))
        //Form submission happens here
        Provider.sendMailData(responseBody).then(res => res.json()).then(res => console.log(res))
    }
    const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value)
    }

    return (
        <section id="contact" className="four">
        <div className="container">

          <header>
            <Slide duration={2000} triggerOnce>
            <h2>Contact</h2>
            </Slide>
          </header>

          {/* <form method="POST" action="ajaxmail.php"> */}
          <form onSubmit={onSubmitHandler}>
            <div className="row">
              <div className="col-6 col-12-mobile"><input type="text" name="contactName" placeholder="Name" maxLength={50}  onChange={(e)=>inputChangeHandler(setContactName, e)}/></div>
              <div className="col-6 col-12-mobile"><input type="text" name="contactEmail" placeholder="Email" maxLength={50} onChange={(e)=>inputChangeHandler(setContactEmail, e)} /></div>
              <div className="col-12"><input type="text" name="contactTopic" placeholder="Topic" onChange={(e)=>inputChangeHandler(setContactTopic, e)} /></div>
              <div className="col-12">
                {/* <textarea contactName="contactMessage" placeholder="Message" onChange={(e)=>inputChangeHandler(setMessage, e)}></textarea> */}
                <input type="text" name="contactMessage" placeholder="Message" onChange={(e)=>inputChangeHandler(setContactMessage, e)}></input>
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>

          {/* <form method="POST" action="ajaxmail.php">
            <div className="row">
              <div className="col-6 col-12-mobile"><input type="text" name="contactName" placeholder="Name" maxLength={50}  /></div>
              <div className="col-6 col-12-mobile"><input type="text" name="contactEmail" placeholder="Email" maxLength={50} /></div>
              <div className="col-12"><input type="text" name="contactTopic" placeholder="Topic" /></div>
              <div className="col-12">
                <textarea name="contactMessage" placeholder="Message"></textarea>
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form> */}

          <Alert status='error'>
            <AlertIcon /> Your message couldn't be sent, try again.
          </Alert>

          <Alert status='success'>
            <AlertIcon /> Your message has been sent!
          </Alert>

        </div>
      </section>
    )
}