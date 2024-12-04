import React, { useState } from 'react'; // Import React and useState hook
import styles from './ContactStyles.module.css'; // Import CSS module for styling

function Contact() {
  const [email, setEmail] = useState(''); // State to store email input
  const [emailError, setEmailError] = useState(''); // State to store email error message

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    if (!emailRegex.test(email)) { // Check if email is valid
      setEmailError('Please enter a valid email address.'); // Set error message if email is invalid
    } else {
      setEmailError(''); // Clear error message if email is valid
      alert('Thank you for submitting the contact form!'); // Show alert thanking the user
      console.log('Form submitted'); // Log form submission to console
    }
  };

  return (
    <section id='contact' className={styles.container}> {/* Contact section with styling */}
      <h1 className="sectionTitle">Contact</h1> {/* Section title */}
      <form onSubmit={handleSubmit}> {/* Form with submit handler */}
        <div className="formGroup"> {/* Form group for name input */}
          <label htmlFor="name" hidden> {/* Hidden label for accessibility */}
            Name
          </label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Name" 
            required // Name input field with placeholder and required attribute
          />
        </div>
        <div className="formGroup"> {/* Form group for email input */}
          <label htmlFor="email" hidden> {/* Hidden label for accessibility */}
            Email
          </label>
          <input 
            type="text" 
            name="email" 
            id="email" 
            placeholder="Email" 
            value={email} // Bind email state to input value
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            required // Email input field with placeholder and required attribute
          />
          {emailError && <p className="error">{emailError}</p>} {/* Display email error message if any */}
        </div> 
        <div className="formGroup"> {/* Form group for message textarea */}
          <label htmlFor="message" hidden> {/* Hidden label for accessibility */}
            Message
          </label>
          <textarea
            name="message" 
            id="message" 
            placeholder="Message" 
            required // Message textarea with placeholder and required attribute
          ></textarea>
        </div> 
        <input className='hover btn' type="submit" value="Submit"/> {/* Submit button */}
      </form>
    </section>
  );
}

export default Contact; // Export Contact component as default