'use client';

import React, { useRef, useState } from 'react';

export default function Contact() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null); // Ref to access the form element

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPopupVisible(true);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the popup
  };

  return (
    <div>
      <form
        ref={formRef}
        className="page-4"
        id="contact"
        onSubmit={handleSubmit}
      >
        <h2>CONTACT ME</h2>
        <div className="page-4-inner">
          <label htmlFor="name">NAME</label>
          <input type="text" name="name" id="name" required />
          <label htmlFor="email">EMAIL</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="message">MESSAGE</label>
          <textarea name="message" id="message" required></textarea>
          <button type="submit" id="btn">Submit</button>
        </div>
      </form>

      {isPopupVisible && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
          }}
        >
          <h3>Form Submitted!</h3>
          <p>Thank you for reaching out. Well get back to you soon!</p>
          <button onClick={handleClosePopup} style={{ marginTop: '10px' }}>
            Close
          </button>
        </div>
      )}

      {/* Overlay */}
      {isPopupVisible && (
        <div
          onClick={handleClosePopup}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
        ></div>
      )}
    </div>
  );
}
