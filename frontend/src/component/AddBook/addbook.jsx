import React, { useState } from "react";
import styles from "./addbook.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Addbook() {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    coverImage: "",
    dateRead: "",
    finishDate: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    // Add your form submission logic here
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className={styles.inputbox}>
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="Title"
            required
            onChange={handleChange}
          />
        </div>

        {/* Author */}
        <div className={styles.inputbox}>
          <input
            type="text"
            name="author"
            value={formData.author}
            placeholder="Author"
            required
            onChange={handleChange}
          />
        </div>

        {/* Cover Image */}
        <div className={styles.inputbox}>
          <input
            type="text"
            name="coverImage"
            value={formData.coverImage}
            placeholder="Cover Image Url"
            required
            onChange={handleChange}
          />
        </div>

        {/* Date Read */}
        <div className={styles.inputbox}>
          <input
            type="date"
            name="dateRead"
            value={formData.dateRead}
            placeholder="Date Read"
            required
            onChange={handleChange}
          />
        </div>

        {/* Finish Date */}
        <div className={styles.inputbox}>
          <input
            type="date"
            name="finishDate"
            value={formData.finishDate}
            placeholder="Finish Date"
            required
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Addbook;
