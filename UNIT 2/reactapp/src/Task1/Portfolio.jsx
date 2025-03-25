import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Abcd</h1>
        <img src="profile.jpg" alt="Sai Madhav" className="profile-img" />
        <p className="subtitle">
          Hi, I’m Sai Madhav, a passionate Computer Science Engineering student at Keshav Memorial Institute of Technology.
        </p>
      </header>
      <div className="content">
        <section className="section">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> saimadhav204@gmail.com</p>
          <p><strong>Phone:</strong> +91 9177756036</p>
        </section>

        <section className="section">
          <h2>Career Objective</h2>
          <p>To solve real-world problems using technology and continuously enhance my skills in software development and AI-driven solutions.</p>
        </section>

        <section className="section">
          <h2>Academic Information</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Degree</th>
                <th>Institution</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B.Tech</td>
                <td>Keshav Memorial Institute of Technology</td>
                <td>2026</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Technical Skills</h2>
          <ul>
            <li>Programming Languages: Java, JavaScript</li>
            <li>Databases: MySQL</li>
            <li>Web Technologies: HTML, CSS, React</li>
          </ul>
        </section>

        <section className="section">
          <h2>Projects</h2>
          <ol>
            <li>
              <a href="https://github.com/rithesh10/workout2.git" target="_blank" rel="noopener noreferrer">
                Workout Assistant
              </a> - Web Application for generating diet and workout plans with OpenCV posture detection.
            </li>
            <li>
              <a href="https://github.com/rithesh10/ps.git" target="_blank" rel="noopener noreferrer">
                Manas Health
              </a> - A portal for students to test and review their mental health.
            </li>
          </ol>
        </section>

        <section className="section">
          <h2>Achievements</h2>
          <ol>
            <li>Participated in multiple coding hackathons.</li>
            <li>Developed AI-based solutions for real-world problems.</li>
          </ol>
        </section>

        <section className="section">
          <h2>Strengths</h2>
          <ul>
            <li>Strong problem-solving skills</li>
            <li>Good teamwork and collaboration</li>
            <li>Quick learning ability</li>
          </ul>
        </section>

        <section className="section">
          <h2>Personal Profile</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Current Location</th>
                <th>Date of Birth</th>
                <th>Languages Known</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>India</td>
                <td>20/08/2004</td>
                <td>English, Telugu, Hindi</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
