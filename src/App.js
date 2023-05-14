import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const navLinks = document.querySelectorAll('.nav-link');
      const sections = document.querySelectorAll('.section');
      const scaleFactor = 2; //scale factor for how fast/slow it moves
  
      document.querySelector('.moving-background').style.top = -(scrollTop * 0.2) + 'px';
  
      sections.forEach((section) => {
        const offset = section.offsetTop - 290;
        const height = section.offsetHeight;
        const sectionId = section.id;
  
        if (scrollTop >= offset && scrollTop < offset + height) {
          navLinks.forEach((link) => link.classList.remove('active'));
          document.getElementById(`${sectionId}-link`).classList.add('active');
          sections.forEach((section) => section.classList.remove('active'));
          section.classList.add('active');
        }
      });
  
      navLinks.forEach(navLink => {
        const activeNavItem = navLink.parentNode;
        const widthDifference = navLink.offsetWidth - activeNavItem.offsetWidth;
  
        activeNavItem.style.paddingLeft = widthDifference + 'px';
  
        const textContainer = document.querySelector('.footer-text');
        textContainer.style.marginLeft = `${(widthDifference * scaleFactor)}px`;
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="background" className="moving-background"></div>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 left-column" id="mainNav">
              <nav>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a id="about-link" className="nav-link active" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a id="skills-link" className="nav-link" href="#skills">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a id="projects-link" className="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a id="contact-link" className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-9 right-column">
              <section id="about" className="section py-5 active">
                <h2 className="section-heading">About Me</h2>
                <p className="section-subheading">
                  desc abt me. this WIP website rn
                </p>
                <img src="your-image.jpg" alt="About me" className="img-fluid rounded-circle" />
              </section>
              <section id="skills" className="section">
                <h2 className="section-heading">Skills</h2>
                <p className="section-subheading">Here are some of my skills:</p>
                <ul className="list-unstyled">
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                  </ul>
              </section>
              <section id="projects" className="section py-5">
                <h2 className="section-heading">Projects</h2>
                <p className="section-subheading">Here are some of my projects:</p>
                <div className="row">
                  <div className="col-md-4">
                    <img src="project-1.jpg" alt="Project 1" className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <h3>Project 1</h3>
                    <p>proj 1 desc</p>
                    <a href="project-1-link.html" className="btn btn-outline-light">View Project</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <img src="project-2.jpg" alt="Project 2" className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <h3>Project 2</h3>
                    <p>proj 2 desc</p>
                    <a href="project-2-link.html" className="btn btn-outline-light">View Project</a>
                  </div>
                </div>
              </section>
              <section id="contact" className="section py-5">
                <h2 className="section-heading">Contact Me</h2>
                <p className="section-subheading">If you have any questions, feel free to contact me:</p>
                <p>Email: <a href="mailto:andrewbeketov03@gmail.com">andrewbeketov03@gmail.com</a></p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <footer>
  <div class="container">
    <div class="footer-text">
      <a href="https://github.com/Beketovian" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/andrew-beketov-94b576217/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <p class="content">
        Designed using <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" class="custom-link">Figma</a>,
        built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" class="custom-link">React.js</a>
      </p>
    </div>
  </div>
</footer>
  </div>
  );
}

export default App;
