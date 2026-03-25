import React, { useState } from 'react'
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        botcheck: "" // honeypot
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        // 🚨 Honeypot check
        if (formData.botcheck) {
            return;
        }
        
        setLoading(true);
        setStatus("");

        try {
            console.log("Hello");
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });
            
            const result = await response.json();
            console.log(result);
            if (result.success) {
                setStatus("SUCCESS");
                setFormData({ name: "", email: "", message: "", botcheck: "" });
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            console.log(error);
            setStatus("ERROR");
        }

        setLoading(false);
    };
    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="section-title-container">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to collaborate? Let's talk!
                    </p>
                </div>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3 className="contact-heading">Let's Build Something Amazing Together</h3>
                        <p className="contact-text">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out using any of the methods below.
                        </p>
                        <div className="contact-links">
                            <a href="tel:+917398386086" className="contact-link">
                                <div className="contact-link-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="contact-link-text">
                                    <span className="contact-link-label">Phone</span>
                                    <span className="contact-link-value">+91 7398386086</span>
                                </div>
                            </a>
                            <a href="mailto:utkarsha070@gmail.com" className="contact-link">
                                <div className="contact-link-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-link-text">
                                    <span className="contact-link-label">Email</span>
                                    <span className="contact-link-value">utkarsha070@gmail.com</span>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/utkarsh-awasthi-79a349291" target="_blank" className="contact-link">
                                <div className="contact-link-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className="contact-link-text">
                                    <span className="contact-link-label">LinkedIn</span>
                                    <span className="contact-link-value">Utkarsh Awasthi</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>

                            {/* Honeypot field */}
                            <input
                                type="text"
                                name="botcheck"
                                value={formData.botcheck}
                                onChange={handleChange}
                                style={{ display: "none" }}
                            />

                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                            {/* Status Messages */}
                            {status === "SUCCESS" && (
                                <p className="success-message">
                                    ✅ Message sent successfully!
                                </p>
                            )}

                            {status === "ERROR" && (
                                <p className="error-message">
                                    ❌ Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact