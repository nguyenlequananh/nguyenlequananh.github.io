import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      
      {/* CỘT TRÁI: SIDEBAR & MENU */}
      <aside className="sidebar">
        <img
          src="/avt.jpg" /* Đảm bảo bạn có file avatar.jpg trong thư mục public */
          alt="Avatar Nguyen Le Quan Anh"
          className="avatar"
        />
        <h1>Nguyen Le Quan Anh</h1>
        <h3>BACKEND / FULLSTACK DEVELOPER</h3>

        <ul className="nav-menu">
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* NÚT XEM CV */}
        <div className="cv-wrapper">
          <a 
            href="https://thuat3tuoi.github.io/cv_DuongVanThuat.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cv-btn"
          >
            View CV / Resume
          </a>
        </div>
      </aside>

      {/* CỘT PHẢI: NỘI DUNG CHÍNH */}
      <main className="main-content">

        {/* PHẦN 1: ABOUT ME */}
        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          
          <p className="about-text">
            Hello! I am an IT student passionate about programming and problem-solving. 
            I am currently focusing on building robust Backend systems and transitioning towards a Fullstack Developer role. 
            I enjoy writing clean code, designing database structures, and learning modern web technologies.
          </p>

          <div className="info-list">
            <p><strong>Name:</strong> Nguyen Le Quan Anh</p>
            <p><strong>Education:</strong> Sai Gon University</p>
            <p><strong>Major:</strong> Information Technology</p>
            <p><strong>Role:</strong> Backend / Fullstack Developer</p>
          </div>
        </section>

        {/* PHẦN 2: SKILLS */}
        <section id="skills" className="section">
          <h2 className="section-title">Technical Skills</h2>

          <div className="skills-container">
            <div className="skill-group">
              <h4>Languages & Backend</h4>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C / C++</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">Python</span>
              </div>
            </div>

            <div className="skill-group">
              <h4>Frontend & Web</h4>
              <div className="skill-tags">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">HTML5 / CSS3</span>
              </div>
            </div>

            <div className="skill-group">
              <h4>Database & Tools</h4>
              <div className="skill-tags">
                <span className="skill-tag">SQL Server</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Git / GitHub</span>
              </div>
            </div>
          </div>
        </section>

        {/* PHẦN 3: PROJECTS */}
        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            
            <div className="project-card">
              <h3>Tour Management System</h3>
              <p>
                A management application designed to handle tour bookings, schedules, and customer information efficiently. Focuses heavily on relational database design and backend logic.
              </p>
              <span className="tech-stack">Java / Spring + SQL Server</span>
            </div>

            <div className="project-card">
              <h3>Bookstore Management</h3>
              <p>
                A comprehensive system to manage book inventory, track daily sales, and oversee staff accounts. Implemented robust data querying and reporting features.
              </p>
              <span className="tech-stack">PHP + MySQL</span>
            </div>

            <div className="project-card">
              <h3>Personal Portfolio</h3>
              <p>
                A modern, responsive personal website structured with a sidebar layout to showcase my CV, technical skills, and featured projects.
              </p>
              <span className="tech-stack">ReactJS + CSS3</span>
            </div>

          </div>
        </section>

        {/* PHẦN 4: CONTACT */}
        <section id="contact" className="section">
          <h2 className="section-title">Contact Me</h2>

          <div className="contact-card">
            <div className="contact-item">
              <span>Phone:</span>
              <p>0393 257 782</p>
            </div>
            <div className="contact-item">
              <span>Email:</span>
              <a href="mailto:lepodz2503@gmail.com">lepodz2503@gmail.com</a>
            </div>
            <div className="contact-item">
              <span>GitHub:</span>
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                github.com/yourusername
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;