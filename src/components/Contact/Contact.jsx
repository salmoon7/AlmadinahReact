// src/components/Contact.js
import React from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "34fca34a-d940-420c-a45f-068aacac6a27");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id="contact" className="contact-section">
      <h2>Have you chosen your niche?</h2>
      <p>
        Or do you have another tech course in mind? Reach out to the school
        management!
      </p>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="class">Class:</label>
          <input type="text" id="class" name="class" required />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course in mind:</label>
          <input type="text" id="course" name="course" required />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <textarea id="reason" name="reason" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
