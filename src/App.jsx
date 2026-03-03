import ProjectCard from './components/ProjectCard.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import RepoGallery from './components/RepoGallery.jsx';
import Contact from './components/Contact.jsx';
import gif from './assets/swimming-koi.gif';
import resume from './assets/resume.pdf'
import './App.css'

function App() {
  const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <div className="app">
      
      {/* 1. NAV AREA */}
      <div style={{ gridArea: 'nav' }}>
        <Navbar scrollToSection={scrollToSection} />
      </div>

      {/* 2. HERO AREA */}
      {/* We removed the inline styles and added className="hero" */}
      <header className="hero" id='hero' style={{ gridArea: 'hero' }}>
        
        <div className="hero-text">
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>
            Quoc Bao Dinh Le
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
            Fullstack Web Developer focusing on the <span style={{ background: '#ff6b6b', color: 'white', padding:'0 5px'}}>Backend</span><br/>
            in <span style={{ background: '#ff6b6b', color: 'white', padding:'0 5px'}}>Georgia</span>. <br/>
            Currently focused on <span style={{ background: '#ff6b6b', color: 'white', padding:'0 5px'}}>React</span>.
          </p>  
          <div className="hero-actions">
            <button className='signal-btn' onClick={() => scrollToSection('contact')}>
              SEND_SIGNAL
            </button>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button className="download-btn">
                DOWNLOAD_CV
              </button>
            </a>
          </div>
        </div>

        <div className="hero-image-container">
           {/* Make sure to place your GIF in the `public` folder */}
           <img src={gif} alt="Animated illustration" />
        </div>

      </header>

      {/* 3. REPO AREA */}
      <main id='repo' style={{ 
        gridArea: 'repo', 
        padding: '40px'
      }}>
        <h2>My_Repositories:</h2>
        <RepoGallery/>
      </main>

      {/* 4. CONTACT AREA */}
      <div id="contact" style={{ gridArea: 'contact' }}>
        <Contact />
      </div>

      {/* 5. FOOTER AREA */}
      <div style={{ gridArea: 'footer' }}>
        <Footer/>  
      </div>
      
    </div>
  );
}

export default App;