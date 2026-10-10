import React, { useState } from 'react'
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', botcheck: '' });
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user types
        if (formErrors[e.target.name]) {
            setFormErrors({ ...formErrors, [e.target.name]: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.botcheck) return;

        // Validation
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Please enter a valid email address";
        }
        if (!formData.message.trim()) errors.message = "Message is required";

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setLoading(true);
        setStatus('');
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });
            const result = await response.json();
            if (result.success) {
                setStatus('SUCCESS');
                setFormData({ name: '', email: '', message: '', botcheck: '' });
                setFormErrors({});
            } else {
                setStatus('ERROR');
            }
        } catch {
            setStatus('ERROR');
        }
        setLoading(false);
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="section-title-container reveal">
                    <div className="section-badge"><i className="fas fa-paper-plane"></i> Contact</div>
                    <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to collaborate? Let's talk!
                    </p>
                </div>

                <div className="contact-container">
                    <div className="contact-info reveal-left">
                        <h3 className="contact-heading">Let's Build Something<br />Amazing Together</h3>
                        <p className="contact-text">
                            I'm always open to discussing new projects, creative ideas, or opportunities
                            to be part of your vision. Feel free to reach out using any of the methods below.
                        </p>
                        <div className="contact-links">
                            <a href="tel:+917398386086" className="contact-link">
                                <div className="contact-link-icon"><i className="fas fa-phone"></i></div>
                                <div className="contact-link-text">
                                    <span className="contact-link-label">Phone</span>
                                    <span className="contact-link-value">+91 7398386086</span>
                                </div>
                            </a>
                            <a href="mailto:utkarsha070@gmail.com" className="contact-link">
                                <div className="contact-link-icon"><i className="fas fa-envelope"></i></div>
                                <div className="contact-link-text">
                                    <span className="contact-link-label">Email</span>
                                    <span className="contact-link-value">utkarsha070@gmail.com</span>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/utkarsh-awasthi-79a349291" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <div className="contact-link-icon"><i className="fab fa-linkedin-in"></i></div>
                                <div className="contact-link-text">
                                    <span className="contact-link-label">LinkedIn</span>
                                    <span className="contact-link-value">Utkarsh Awasthi</span>
                                </div>
                            </a>
                            <a href="https://github.com/Utkarsh-Awasthi08" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <div className="contact-link-icon"><i className="fab fa-github"></i></div>
                                <div className="contact-link-text">
                                    <span className="contact-link-label">GitHub</span>
                                    <span className="contact-link-value">Utkarsh-Awasthi08</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper reveal-right">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="botcheck" value={formData.botcheck} onChange={handleChange} style={{ display: 'none' }} />

                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} className={`form-control ${formErrors.name ? 'error-input' : ''}`} placeholder="Utkarsh Awasthi" />
                                {formErrors.name && <span className="error-text" style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>{formErrors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} className={`form-control ${formErrors.email ? 'error-input' : ''}`} placeholder="you@example.com" />
                                {formErrors.email && <span className="error-text" style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>{formErrors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={`form-control ${formErrors.message ? 'error-input' : ''}`} placeholder="Tell me about your project or opportunity..." />
                                {formErrors.message && <span className="error-text" style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>{formErrors.message}</span>}
                            </div>

                            <div className="form-submit-row">
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? <><i className="fas fa-spinner fa-spin"></i> Sending…</> : <><i className="fas fa-paper-plane"></i> Send Message</>}
                                </button>
                                {status === 'SUCCESS' && (
                                    <p className="success-message"><i className="fas fa-check-circle"></i> Sent successfully!</p>
                                )}
                                {status === 'ERROR' && (
                                    <p className="error-message"><i className="fas fa-times-circle"></i> Something went wrong.</p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact