import React from "react";
import "../../styles/Contact.css";

export default function Contact() {
  return (
    <section>
      <form id="contact-form">
        <div>
          <label for="name"> Name</label>
          <input type="text" id="name" name="fname" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="text" id="name" name="email" />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
