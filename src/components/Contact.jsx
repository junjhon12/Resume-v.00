import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // New State: To show "Sending..." or "Success!" messages
  const [result, setResult] = useState(""); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending..."); // 1. Feedback: Tell user we are working
    
    // 2. Prepare the data for Web3Forms
    // We must convert our object into a JSON string
    const object = {
      ...formData,
      access_key: import.meta.env.WEB3FORMS_ACCESS_KEY,
    };
    const json = JSON.stringify(object);

    try {
      // 3. Send the POST request
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const res = await response.json();

      if (res.success) {
        setResult("Success! Signal received.");
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setResult("Error. Transmission failed.");
      }
    } catch (error) {
      console.error(error);
      setResult("Error. Server unreachable.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>SEND_SIGNAL</h2>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>NAME:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="ENTER_NAME"
            required 
          />
        </div>

        <div className="form-group">
          <label>EMAIL:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="ENTER_EMAIL"
            required 
          />
        </div>

        <div className="form-group">
          <label>MESSAGE:</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="TYPE_MESSAGE..."
            rows="5"
            required 
          ></textarea>
        </div>

        <button type="submit">TRANSMIT_DATA</button>
        
        {/* Show the success/error message if it exists */}
        {result && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{result}</p>}
      </form>
    </section>
  );
};

export default Contact;