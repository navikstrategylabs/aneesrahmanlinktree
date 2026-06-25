import { useState } from 'react';
import profileImage from './assets/profile_Image.jpeg';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent flip if clicked on any link, button, or social icon
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button') || target.closest('.social-btn')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <main className="container">
      {/* 3D Card Container */}
      <div 
        className={`card-perspective ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
      >
        <div className="card-inner">
          
          {/* FRONT SIDE (Personal Details) */}
          <div className="card-face card-front">
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
              <div className="header-row">
                <div className="header-titles">
                  <h1 className="name">Anees Rahman</h1>
                  <h2 className="title">Large-Scale Event Specialist</h2>
                </div>
                <button 
                  className="flip-btn-mini" 
                  onClick={(e) => { e.stopPropagation(); setIsFlipped(true); }}
                  aria-label="Flip to corporate info"
                >
                  Company Info
                </button>
              </div>
              
              <hr className="divider" />
              
              <p className="bio">
                Specializing in large-scale events, corporate gatherings, and impactful experiences across India and the UAE. Turning ideas into unforgettable experiences through creativity, strategy, and flawless execution.
              </p>
              
              {/* Direct Contact Bar */}
              <div className="direct-contact-row">
                <a href="tel:+919207066661" className="phone-link">
                  <svg viewBox="0 0 24 24" className="phone-icon-inline" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                  +91 92070 66661
                </a>
              </div>

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

                {/* Phone Call */}
                <a 
                  href="tel:+919207066661" 
                  className="social-btn" 
                  aria-label="Call Phone"
                >
                  <svg viewBox="0 0 24 24" className="icon-stroke" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
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

          {/* BACK SIDE (Corporate Branding) */}
          <div className="card-face card-back">
            <div className="corporate-brand-wrapper">
              <div className="corporate-logo-container">
                <img 
                  src="/greenhopperevents_logo.png" 
                  alt="Greenhopper Events Logo" 
                  className="corporate-logo" 
                />
              </div>
              
              <a 
                href="https://greenhopperevents.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="corporate-website-link"
              >
                www.greenhopperevents.com
              </a>
            </div>

            {/* Subtle floating back button in the corner */}
            <button 
              className="flip-btn-back-corner"
              onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
              aria-label="Flip back to profile"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="icon-stroke">
                <path d="M20 16V8a2 2 0 0 0-2-2h-6M4 8v8a2 2 0 0 0 2 2h10" />
                <path d="M12 20l4-4-4-4" />
                <path d="M12 4L8 8l4 4" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;
