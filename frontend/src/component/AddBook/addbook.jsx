import React, { useState } from "react";
import styles from "./addbook.module.css";
// import { Link, useNavigate } from 'react-router-dom';
import Footer from "../../component/Footer/Footer";

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
    <>
      <div className={styles.container}>
        <h1>Add Book</h1>
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
              type="url"
              name="coverImage"
              value={formData.coverImage}
              placeholder="Cover Image Url"
              required
              onChange={handleChange}
            />
          </div>

          {/* Start Date */}
          <div className={styles.inputbox}>
            <input
              type="text"
              name="startDate"
              value={formData.startDate}
              placeholder="Date Read"
              required
              onChange={handleChange}
              min="1997-01-01"
              max="2030-12-31"
            />
          </div>

          {/* Finish Date */}
          <div className={styles.inputbox}>
            <input
              type="text"
              name="finishDate"
              value={formData.finishDate}
              placeholder="Finish Date"
              required
              onChange={handleChange}
              min="1997-01-01"
              max="2030-12-31"
            />
          </div>

          {/* Submit Button */}
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

export default Addbook;
