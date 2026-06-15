import profileImage from './assets/profile_Image.jpeg';

function App() {
  return (
    <main className="container">
      <div className="card">
        {/* Left Column / Profile Image */}
        <div className="image-container">
          <img 
            src={profileImage} 
            alt="Anees Rahman" 
            className="profile-image" 
          />
        </div>

        {/* Right Column / Content Details */}
        <div className="content-container">
          <h1 className="name">Anees Rahman</h1>
          <h2 className="title">Large-Scale Event Specialist</h2>
          
          <hr className="divider" />
          
          <p className="bio">
            Specializing in large-scale events, corporate gatherings, and impactful experiences across India and the UAE. Turning ideas into unforgettable experiences through creativity, strategy, and flawless execution.
          </p>
          
          <a 
            href="https://greenhopperevents.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="website-link"
          >
            greenhopperevents.com
          </a>

          {/* Social Icons Row */}
          <div className="social-row">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/message/GGPVVFWHTAD7E1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn" 
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="icon-stroke" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/greenhopperevents?utm_source=qr&igsh=MWF5enRpcXNqZDBmMw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn" 
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="icon-stroke" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/aneesrahman666?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn" 
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="icon-stroke" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/share/18wKbbs7Sn/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn" 
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="icon-stroke" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* Email */}
            <a 
              href="mailto:aneesrahmangreenhopper@gmail.com" 
              className="social-btn" 
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" className="icon-stroke" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
