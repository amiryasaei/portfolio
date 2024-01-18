import './index.scss'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import pdfIcon from '../../assets/images/pdfIcon.svg';
import resume from '../../assets/resume.pdf';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
    
    const recaptcha = useRef(); 
    const refForm = useRef()
    const [capValue, setCapValue] = useState();

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm(
            'service_smh78hh',
            'template_wufjtnb',
            refForm.current,
            'Xwly80i5Ey-cjR-IF'
        )
        .then(
            (result) => {
                alert('Message successfully sent!')
                window.location.reload(true)
            },
            (error) => {
                alert('Failed to send the message! Please try again')
            }
        )
    }
  return (
    <>
      <div className="contactMe">
        <div className="header">
          <div className='main'>
            <div className='body'>
              <h1 className='titleBlock'>
                Contact me
              </h1>
              <p>
                Thanks for visiting my website. I will be looking forward to hear
                from you either about job opportunities or regarding any question
                or inquiries. Please contact me through my Linkedin or via the form below.
              </p>
            </div>
            <div className="contact-form">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input placeholder="Email" type="email" name="email" required />
                  </li>
                  <li>
                    <input placeholder="Subject" type="text" name="subject" required />
                  </li>
                  <li>
                    <textarea placeholder="Message" name="message" required></textarea>
                  </li>
                  <li>
                    <ReCAPTCHA onChange={(val) => setCapValue(val)} sitekey={process.env.REACT_APP_SITE_KEY_RECAPTCHA} ref={recaptcha} ></ReCAPTCHA>
                    <input disabled={!capValue} type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        <div className='footer'>
          You can also download my CV from below!
          <a href={resume} download={'resume.pdf'} target="_blank" rel="noopener noreferrer"><img className="pdfImage"src={pdfIcon} alt='pdfIcon'/></a>
        </div>
      </div>
    </>
  )
}

export default Contact