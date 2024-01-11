import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

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
      <div className="container contact-me">
        <div className="text-zone">

          <h1>
            Contact me
          </h1>
          <p>
            Thanks for visiting my website. I will be looking forward to hear
            from you either about job opportunities or regarding any question
            or inquiries. Please contact me through my social media or via the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
            Amir Yasaei
            <br/>
            250 Lester Street<br/>
            Watrerloo, ON,<br/>
            Canada
        </div>
        <div className='map-wrap'>
          <MapContainer center={[43.473399, -80.534377]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[43.473399, -80.534377]}>
              <Popup className='popup'>I live here, let's grab a coffee if you were around ;)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact