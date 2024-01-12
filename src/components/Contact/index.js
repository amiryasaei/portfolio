import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import pdfIcon from '../../assets/images/pdfIcon.svg';
import resume from '../../assets/resume.pdf';
const Contact = () => {
    const refForm = useRef()
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
                window.location.reload(false)
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
                or inquiries. Please contact me through my Linkdin or via the form below.
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
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        <div className='footer'>
          You can also download my CV from below!
          <a href={resume} download><img src={pdfIcon} alt='pdfIcon'/></a>
        </div>
      </div>
    </>
  )
}

export default Contact