
import React from "react";
import Slider from "../SliderFolder/Slider";
import { useState } from "react";
import { DetailsData } from "../SliderFolder/Details-data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FaPhone } from 'react-icons/fa';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Homepage() {
    const Details = DetailsData[0];
    const [comments, setComments] = useState([]);
    const Name = localStorage.getItem("Name");
    const comment = localStorage.getItem("comment");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
   
        
        };
        const updatedComments = [ newComment, ...comments.slice(0, 9) ]; // Limit to 10 comments
        setComments(updatedComments);
        localStorage.setItem('Name', JSON.stringify(formData.name));
        localStorage.setItem('comment', JSON.stringify(formData.message));
        localStorage.setItem('email', JSON.stringify(formData.email));

    
        // Reset form fields to empty values
        setFormData({
            name: '',
            email: '',
            message: '',
        });

        
    };



    return(
        <div className="body">
            <div className="Nav">
            <img src={require("../Images.png/LogoNNN.png")} alt=""/>
            <p>eo Dynamics Limited</p>
            <div className="RcNumber">
            Rc:7333127
            </div>
            </div>

            <Slider />

            <div className="Welcome">            
                <h3>
                <FontAwesomeIcon icon={faUser} /><br></br>
                    Welcome To Neo Dynamics Limited</h3>
                {Details.Welcome}
            </div>

            <div className="Contact">
            <button onClick={() => window.open('tel:+2347064901413')}><FaPhone />Contact Us</button>
            <button onClick={() => window.open('https://wa.me/message/RI3D3CKA2EO3O1')}><FontAwesomeIcon icon={faWhatsapp} />WhatsApp</button>
            </div>

            <div className="Welcome">
                <h3>Services</h3>
                {Details.Services}
            </div>

            <div className="imagescontainer">
                <div>
                <img src={require("../Images.png/car2.jpeg")}alt=""/>
                <p>Price:</p>
                </div>

                <div className="">
                <img src={require("../Images.png/car6.jpeg")}alt=""/>
                <p>Price:</p>
                </div>

                <div className="">
                <img src={require("../Images.png/car8.jpeg")}alt=""/>
                <p>Price:</p>
                </div>

                <div className="">
                <img src={require("../Images.png/car2.jpeg")}alt=""/>
                <p>Price:</p>
                </div>

                <div className="">
                <img src={require("../Images.png/car6.jpeg")}alt=""/>
                <p>Price:</p>
                </div>

                <div className="">
                <img src={require("../Images.png/car6.jpeg")} alt=""/>
                <p>Price:</p>
                </div>
            </div>

            <div className="Contact">
                <button onClick={() => window.open('tel:+2347064901413')}><FaPhone />Contact Us</button>
                <button onClick={() => window.open('https://wa.me/message/RI3D3CKA2EO3O1')}><FontAwesomeIcon icon={faWhatsapp} />WhatsApp</button>
            </div>
            <br></br>
            <div className="Welcome">
                <h3>Import Clearance</h3>
                {Details.ImportClearance}
            </div>
            <br></br>
            <div className="Welcome">
                <h3>Export</h3>
                {Details.ImportAndExport}
            </div>
            <div className="Contact">
                <button onClick={() => window.open('tel:+2347064901413')}><FaPhone />Contact Us</button>
                <button onClick={() => window.open('https://wa.me/message/RI3D3CKA2EO3O1')}><FontAwesomeIcon icon={faWhatsapp} />WhatsApp</button>
            </div>
            <div className="Welcome">
                <h3>Logistics Consultation</h3>
                {Details.LogisticsConsultation}
            </div>
            <br></br>
            <div className="Welcome">
                <h3>Wharehousing</h3>
                {Details.Wharehousing}
            </div>
            <br></br>
            <div className="Contact">
                <button onClick={() => window.open('tel:+2347064901413')}><FaPhone />Contact Us</button>
                <button onClick={() => window.open('https://wa.me/message/RI3D3CKA2EO3O1')}><FontAwesomeIcon icon={faWhatsapp} />WhatsApp</button>
            </div>

 
{comments.map((comment, index) => (
                <div key={index} className="comment">
                    <p><strong>{comment.name}</strong>: {comment.message} <br></br>{comment.image}</p>
                </div>
            ))}
            
            <form onSubmit={handleSubmit} className="form">
                <h4>Comment:</h4>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>

               
                <button type="submit">Submit</button>
            </form>
        
   

<footer className="footer">
    <p>Developed by SeeloveTechHub Nig. Ltd <br></br>+2348131264231<br></br>© 2024 <br></br> All Rights Reserved</p>

</footer>


        </div>
    )
}

export default Homepage