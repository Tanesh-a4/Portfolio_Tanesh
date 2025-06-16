import React, { useState, useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Blast } from "../../components";
import { motion } from "framer-motion";
import { FiSend, FiPhone, FiMap, FiMail, FiChevronRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiJavascript, SiReact, SiPython, SiHtml5, SiCss3, SiNodedotjs,SiCplusplus } from "react-icons/si";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "./contact.scss";

// Fix for Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// Custom CircleProgress component for skills visualization
const CircleProgress = ({ percentage, color, icon, name, index }) => {
  const circleRef = useRef(null);
  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    if (circleRef.current) {
      // Animation for the circle filling
      circleRef.current.style.transition = 'stroke-dashoffset 2s ease-in-out';
      circleRef.current.style.strokeDashoffset = strokeDashoffset;
    }
  }, [strokeDashoffset]);

  return (
    <motion.div 
      className="skill-circle"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        transition: { duration: 0.3 }
      }}
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        className="circle-progress"
      >
        {/* Background circle */}
        <circle
          stroke="#2a2a2a"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <circle
          ref={circleRef}
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset: circumference }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90, ${radius}, ${radius})`}
        />
        
        {/* Percentage text */}
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          className="percentage-text"
          fill="var(--color-white)"
        >
          {`${percentage}%`}
        </text>
      </svg>
      
      <div className="skill-info">
        <div className="skill-icon" style={{ color }}>
          {icon}
        </div>
        <h4>{name}</h4>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [skillsHovered, setSkillsHovered] = useState(false);
  const formRef = useRef(null);
  const skillsSectionRef = useRef(null);
  
  // Your location coordinates - replace with your actual coordinates
  const position = [13.555717381164524, 80.02665912452288]; // IIIT Sri City, Andhra Pradesh


  // Programming skills data with colors
 const programmingSkills = [
  { name: "React", icon: <SiReact />, proficiency: 85, color: "#00d8ff" },         // Bright cyan
  { name: "Python", icon: <SiPython />, proficiency: 80, color: "#4B8BBE" },        // Cool blue
  { name: "HTML5", icon: <SiHtml5 />, proficiency: 95, color: "#FF5722" },         // Vibrant orange
  { name: "CSS3", icon: <SiCss3 />, proficiency: 90, color: "#2196F3" },           // Vivid blue
  { name: "Node.js", icon: <SiNodedotjs />, proficiency: 75, color: "#8BC34A" },   // Fresh green
  { name: "JavaScript", icon: <SiJavascript />, proficiency: 90, color: "#FFD600" }, // Bright yellow
  { name: "C++", icon: <SiCplusplus />, proficiency: 70, color: "#6E57E0" },       // Electric violet
];


  // Initialize animation class when component mounts
  useEffect(() => {
    // Start with text-animate class for initial animation
    setLetterClass("text-animate");
    
    // After a delay, switch to hover animation state
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      errors.message = "Message is too short";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleFocus = (field) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({...formErrors, [name]: null});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission - replace with your actual form handling
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Reset submission status after 8 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 8000);
      }, 1500);
    }
  };

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    float: { 
      y: [0, -15, 0], 
      transition: { 
        repeat: Infinity, 
        repeatType: "mirror", 
        duration: 3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="section__contact section__padding">
      <div className="fake-big">Contact</div>
      
      {/* Page Header */}
      <motion.div 
        className="contact__header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 arial-area-label="Contact me"  style={{ fontSize: "3rem", lineHeight: "1.2", height: "200%" }}> 
          <Blast
            letterClass={letterClass}
            arrayStr={["G", "e", "t", " ", "i", "n", " ", "T", "o", "u", "c", "h"]}
            indexLetter={15}
          />
        </h2>
        
        <div className="section__contact-subtitle">
          <span className="line animate-line"></span>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            Let's collaborate and build something extraordinary
          </motion.p>
        </div>
      </motion.div>
      
      {/* Main Content Layout */}
      <div className="contact__modern-layout">
        {/* Left Side - Contact Form */}
        <motion.div 
          className="contact__form-container"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="contact__form-card"
            variants={cardVariants}
          >
            <div className="form__header">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="section-title"
              >
                Send a Message
              </motion.h3>
              <motion.div 
                className="pulse-dot"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              ></motion.div>
            </div>

            {isSubmitted ? (
              <motion.div 
                className="contact__success-message"
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="success-icon">
                  <svg viewBox="0 0 24 24" width="90" height="90">
                    <circle className="success-circle" cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path className="success-check" d="M7 13l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  Message Sent Successfully!
                </motion.h4>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </motion.p>
                
                <motion.button 
                  className="reset-button"
                  onClick={() => setIsSubmitted(false)}
                  whileHover={{ scale: 1.05, backgroundColor: "var(--color-tem)", color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                >
                  <span>Send Another</span>
                  <FiChevronRight />
                </motion.button>
              </motion.div>
            ) : (
              <motion.form 
                ref={formRef} 
                className="contact__form" 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="form__grid">
                  <motion.div 
                    className={`contact__form-group ${activeField === 'name' ? 'focused' : ''} ${formData.name ? 'filled' : ''} ${formErrors.name ? 'error' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      placeholder=" "
                    />
                    <label htmlFor="name">Your Name</label>
                    <div className="border-animation"></div>
                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                  </motion.div>
                  
                  <motion.div 
                    className={`contact__form-group ${activeField === 'email' ? 'focused' : ''} ${formData.email ? 'filled' : ''} ${formErrors.email ? 'error' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      placeholder=" "
                    />
                    <label htmlFor="email">Your Email</label>
                    <div className="border-animation"></div>
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                  </motion.div>
                  
                  <motion.div 
                    className={`contact__form-group full-width ${activeField === 'subject' ? 'focused' : ''} ${formData.subject ? 'filled' : ''} ${formErrors.subject ? 'error' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      placeholder=" "
                    />
                    <label htmlFor="subject">Subject</label>
                    <div className="border-animation"></div>
                    {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                  </motion.div>
                  
                  <motion.div 
                    className={`contact__form-group full-width ${activeField === 'message' ? 'focused' : ''} ${formData.message ? 'filled' : ''} ${formErrors.message ? 'error' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      placeholder=" "
                    ></textarea>
                    <label htmlFor="message">Your Message</label>
                    <div className="border-animation"></div>
                    {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                  </motion.div>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="contact__submit-button"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(var(--color-tem-rgb), 0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  {isSubmitting ? (
                    <span className="button-content">
                      <div className="spinner"></div> 
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="button-content">
                      <FiSend className="send-icon" /> 
                      <span>Send Message</span>
                    </span>
                  )}
                </motion.button>
              </motion.form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact__info-card"
            variants={cardVariants}
          >
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="section-title"
            >
              Contact Information
            </motion.h3>
            
            <motion.ul 
              className="contact__list"
              variants={containerVariants}
            >
              <motion.li variants={itemVariants}>
                <div className="icon-container">
                  <FiMail />
                  <div className="icon-ripple"></div>
                </div>
                <div className="contact-detail">
                  <span>Email</span>
                  <a href="mailto:tanesh753@gmail.com">tanesh753@gmail.com</a>
                </div>
              </motion.li>
              
              <motion.li variants={itemVariants}>
                <div className="icon-container">
                  <FiPhone />
                  <div className="icon-ripple"></div>
                </div>
                <div className="contact-detail">
                  <span>Phone</span>
                  <a href="tel:+1234567890">+91 9067519449</a>
                </div>
              </motion.li>
              
              <motion.li variants={itemVariants}>
                <div className="icon-container">
                  <FiMap />
                  <div className="icon-ripple"></div>
                </div>
                <div className="contact-detail">
                  <span>Location</span>
                  <p>IIIT Sri City, India</p>
                </div>
              </motion.li>
            </motion.ul>
            
            <motion.div 
              className="contact__social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {[
                { icon: <FaGithub />, url: "hhttps://github.com/Tanesh-a4", color: "#333" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/tanesh-ashan-011087260/", color: "#0077b5" },
                { icon: <FaTwitter />, url: "", color: "#1da1f2" },
                { icon: <FaInstagram />, url: "", color: "#e1306c" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: social.color,
                    color: "#fff",
                    y: -5,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: 1.2 + (index * 0.1) } 
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Right Side - Skills & Map */}
        <motion.div 
          className="contact__visual-container" 
          initial="hidden" 
          animate="visible" 
          variants={containerVariants}
        >
          {/* Skills Section with Circular Progress */}
          <motion.div 
            className="skills__showcase"
            ref={skillsSectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            onHoverStart={() => setSkillsHovered(true)}
            onHoverEnd={() => setSkillsHovered(false)}
            variants={cardVariants}
          >
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="section-title skills-title"
            >
              Technical Expertise
            </motion.h3>
            
            <motion.div 
              className="skills-grid"
              variants={containerVariants}
            >
              {programmingSkills.map((skill, index) => (
                <CircleProgress
                  key={skill.name}
                  percentage={skill.proficiency}
                  color={skill.color}
                  icon={skill.icon}
                  name={skill.name}
                  index={index}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            className="map__section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            variants={cardVariants}
          >
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="section-title"
            >
              Where to Find Me
            </motion.h3>
            
            <motion.div 
              className="map__container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
            >
              <MapContainer 
                center={position} 
                zoom={13} 
                style={{ height: "300px", width: "100%", borderRadius: "12px" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    <div className="map__popup">
                      <h4>My Location</h4>
                      <p>Available for in-person collaboration and meetings</p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;