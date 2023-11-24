import '../assets/css/Contact.scss';

export default function Contact() {
    return (
        <section id="contact">
          <h2>Contact</h2>

          <div className='form-container'>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="5ecd38ca-833f-4ae9-849d-6a8148791d8d" />
            <input type="text" name="name" placeholder="Name" minLength={3} maxLength={50} required />
            <input type="email" name="email" placeholder="E-mail" minLength={3} maxLength={50} required />
            <input type="text" name="topic" placeholder="Topic" minLength={3} required />
            <textarea name="message" placeholder="Message" rows={5} minLength={3} required />
            <input type="submit" value="Send" className='btn'/>
          </form>
          </div>

      </section>
    )
}