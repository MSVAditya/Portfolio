import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name === 'from_name' ? 'name' : 
        name === 'from_email' ? 'email' : name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
  
    setFormStatus({ submitting: true, submitted: false, error: null });
  
    const payload = {
      access_key: "112bf978-adb6-432e-9c0a-dee7838b06e5",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });
  
      const result = await res.json();
  
      if (result.success) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' }); 
        console.log("Success:", result);
      } else {
        setFormStatus({ submitting: false, submitted: false, error: "Something went wrong." });
      }
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: "Submission failed. Please try again." });
    }
  };
  

  const contactInfo = [
    {
      icon: <FaEnvelope className="contact-icon" />,
      title: 'Email',
      value: 'msvaditya129@gmail.com',
      link: 'mailto:msvaditya129@gmail.com'
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">I'd love to hear from you</p>
        </div>

        <div
          className="contact-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="contact-info" variants={itemVariants}>
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-description">
              Feel free to get in touch with me. I am always open to discussing new projects, 
              creative ideas or opportunities to be part of your visions.
            </p>
            
            <ul className="contact-info-list">
              {contactInfo.map((item, index) => (
                <li 
                  key={index} 
                  className="contact-info-item"
                  whileHover={{ x: 5 }}
                  variants={itemVariants}
                >
                  <a 
                    href={item.link} 
                    className="contact-info-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="contact-info-icon">{item.icon}</span>
                    <div className="contact-info-content">
                      <span className="contact-info-label">{item.title}</span>
                      <span className="contact-info-value">{item.value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form 
            ref={form}
            className="contact-form" 
            onSubmit={onSubmit}
            id="contact-form"
          >
            <div className="form-group">
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? (
                'Sending...'
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane className="send-icon" />
                </>
              )}
            </button>

            {formStatus.submitted && (
              <div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {formStatus.error && (
              <div
                className="error-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {formStatus.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
