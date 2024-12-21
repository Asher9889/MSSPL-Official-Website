import "./style.css"

const ContactUsForm = ({setShowContactForm}) =>{
    return (
    <>
        <div className="form-container">
            <div className="form">
                <span className="heading">Get in touch</span>
                <input required placeholder="Name" type="text" className="input" />
                <input required placeholder="Email" id="mail" type="email" className="input" />
                <input required placeholder="Mobile No." type="tel" id="Phone" name="phone" className="input"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                <textarea placeholder="Your Message" rows="10" cols="30" id="message" name="message" className="textarea"></textarea>
                <div className="button-container">
                    <div className="send-button cursor-pointer">Send</div>
                    <div  onClick={()=> setShowContactForm(false)} className="send-button cursor-pointer">Close</div>
                    
                </div>
            </div>
           
        </div>
    </>
    )
}

export default ContactUsForm;