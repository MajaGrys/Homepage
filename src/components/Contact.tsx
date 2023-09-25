import { Slide } from "react-awesome-reveal";

export default function Contact() {
    return (
        <section id="contact" className="four">
        <div className="container">

          <header>
            <Slide duration={2000} triggerOnce>
            <h2>Contact</h2>
            </Slide>
          </header>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="5ecd38ca-833f-4ae9-849d-6a8148791d8d" />
            <div className="row">
              <div className="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" minLength={3} maxLength={50} /></div>
              <div className="col-6 col-12-mobile"><input type="email" name="email" placeholder="Email" minLength={3} maxLength={50} /></div>
              <div className="col-12"><input type="text" name="topic" placeholder="Topic" minLength={3} /></div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" minLength={3} />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form> 

        </div>
      </section>
    )
}