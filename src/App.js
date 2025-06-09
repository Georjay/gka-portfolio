import React, { useState } from 'react';

// Reusable Button Component (Styling adjusted for dark mode, sleek)
const Button = ({ children, onClick, primary = false, className = '' }) => {
  const baseClasses = "font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-2";
  const primaryClasses = "bg-white text-gray-900 border-white hover:bg-gray-200";
  const secondaryClasses = "bg-transparent text-white border-white hover:bg-white hover:text-gray-900";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}
    >
      {children}
    </button>
  );
};

// SVG Icons (adjusted for dark mode contrast)
const GitHubIcon = ({ className = '' }) => (
  <svg className={`w-5 h-5 inline-block mr-2 ${className}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.475.087.687-.206.687-.458 0-.226-.007-.753-.011-1.489-2.775.604-3.364-1.39-3.364-1.39-.455-1.157-1.11-1.465-1.11-1.465-.909-.62.069-.608.069-.608 1.002.072 1.53.992 1.53.992.892 1.529 2.341 1.089 2.91.834.091-.647.348-1.09.635-1.343-2.22-.253-4.555-1.116-4.555-4.945 0-1.092.39-1.983 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025.795-.221 1.638-.332 2.48-.335.84.003 1.684.114 2.475.335 1.91-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.397.099 2.65.64.699 1.029 1.59 1.029 2.682 0 3.839-2.339 4.686-4.568 4.935.359.309.678.92.678 1.855 0 1.343-.012 2.426-.012 2.75 0 .254.211.546.694.456C20.147 20.198 23 16.442 23 12.017 23 6.484 18.522 2 12 2Z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = ({ className = '' }) => (
  <svg className={`w-5 h-5 inline-block mr-2 ${className}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.381 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zM.02 24h4.96V8h-4.96V24zM22.5 16.297c0-3.323-1.635-4.944-4.835-4.944-1.748 0-2.887.971-3.392 1.815h.063v-1.554H10v16h4.94V16.713c0-1.077.202-2.115 1.528-2.115 1.312 0 1.517 1.139 1.517 2.21V24h4.94V16.297z" />
  </svg>
);

const LinkIcon = ({ className = '' }) => (
  <svg className={`w-5 h-5 inline-block mr-1 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.142a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101"></path>
  </svg>
);

// Hamburger Icon (for mobile menu toggle)
const HamburgerIcon = ({ isOpen, onClick }) => (
  <button
    className="text-white focus:outline-none md:hidden"
    onClick={onClick}
    aria-label="Toggle navigation menu"
  >
    {isOpen ? (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    ) : (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    )}
  </button>
);


// Navigation Bar (Sleek dark mode with responsiveness and fluid dropdown)
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close

  const handleNavLinkClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-950 bg-opacity-80 backdrop-blur-md shadow-lg z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white tracking-wide">George Kofi Addai</div>
        <HamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} /> {/* Hamburger icon for mobile */}

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li><button onClick={() => handleNavLinkClick('home')} className="text-gray-300 hover:text-white font-medium transition-colors duration-200">Home</button></li>
          <li><button onClick={() => handleNavLinkClick('about')} className="text-gray-300 hover:text-white font-medium transition-colors duration-200">About</button></li>
          <li><button onClick={() => handleNavLinkClick('projects')} className="text-gray-300 hover:text-white font-medium transition-colors duration-200">Projects</button></li>
          <li><button onClick={() => handleNavLinkClick('blog')} className="text-gray-300 hover:text-white font-medium transition-colors duration-200">Blog</button></li>
          <li><button onClick={() => handleNavLinkClick('contact')} className="text-gray-300 hover:text-white font-medium">Contact</button></li>
        </ul>
      </div>

      {/* Mobile Menu (Conditional Rendering with Transition) */}
      {/* Added `duration-500` for slower transition, `ease-in-out` for smoothness */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col space-y-2 mt-4 px-4 pb-4 border-t border-gray-800">
          <li><button onClick={() => handleNavLinkClick('home')} className="block text-gray-300 hover:text-white font-medium w-full text-left py-2">Home</button></li>
          <li><button onClick={() => handleNavLinkClick('about')} className="block text-gray-300 hover:text-white font-medium w-full text-left py-2">About</button></li>
          <li><button onClick={() => handleNavLinkClick('projects')} className="block text-gray-300 hover:text-white font-medium w-full text-left py-2">Projects</button></li>
          <li><button onClick={() => handleNavLinkClick('blog')} className="block text-gray-300 hover:text-white font-medium w-full text-left py-2">Blog</button></li>
          <li><button onClick={() => handleNavLinkClick('contact')} className="block text-gray-300 hover:text-white font-medium w-full text-left py-2">Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

// Hero Section (Dark mode, minimalist, enhanced animations, new image style)
const HeroSection = () => {
  const handleViewProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };
  const handleReadBlog = () => {
    // FIX: Corrected typo from scrollIn`toView to scrollIntoView
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
  };
  const handleContactMe = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 text-white pt-16 px-4 md:px-0 overflow-hidden relative">
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        background: 'radial-gradient(circle at 10% 20%, #4a90e2 0%, transparent 40%), radial-gradient(circle at 90% 80%, #6a0dad 0%, transparent 40%)'
      }}></div>

      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left z-10 py-16 md:py-0">
        <div className="max-w-xl md:w-1/2 mt-12 md:mt-0 md:mr-16"> {/* Adjusted width and margin */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 tracking-tight animate-fade-in-down">
            <span className="text-blue-400">The Administrative Developer</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 animate-fade-in-up">
            Bridging operations with code, creating streamlined, efficient solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
            <Button primary onClick={handleViewProjects}>Projects</Button>
            <Button onClick={handleReadBlog}>Blog</Button>
            <Button onClick={handleContactMe}>Get In Touch</Button>
          </div>
        </div>
        <div className="flex-shrink-0 relative w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end"> {/* Image container */}
          <img
            src="https://placehold.co/500x700/000000/FFFFFF/png?text=Your+Professional+Photo+Transparent+BG" // Placeholder for transparent background image
            alt="George"
            className="w-auto h-72 sm:h-96 md:h-[600px] lg:h-[700px] object-contain animate-fade-in-right" // Adjusted sizing and object-contain
          />
        </div>
      </div>
    </section>
  );
};

// About Me Section (Dark mode, cleaner layout)
const AboutMe = () => {
  const skills = [
    { name: "Python", proficiency: "Efficient" },
    { name: "Django", proficiency: "Proficient" },
    { name: "FastAPI", proficiency: "Proficient" },
    { name: "Git", proficiency: "Proficient" },
    { name: "GitHub", proficiency: "Proficient" },
    { name: "React.js", proficiency: "Learning" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-950 text-gray-200 px-4 md:px-0">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Professional Journey */}
          <div className="p-6 bg-gray-900 rounded-xl shadow-xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">My Journey</h3>
            <p className="mb-4 leading-relaxed text-gray-300">
              My path through IT Support, Community Resources, and Academic Operations has built a unique skill set. I excel at problem-solving, process optimization, and clear communication.
            </p>
            <p className="leading-relaxed text-gray-300">
              Each role strengthened my ability to streamline processes and bridge technical gaps, preparing me to tackle complex challenges with efficient, technology-driven solutions.
            </p>
          </div>

          {/* Technical Skills & Passion */}
          <div className="p-6 bg-gray-900 rounded-xl shadow-xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Skills & Passion</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-3 flex items-center justify-between shadow-inner">
                  <span className="font-medium text-gray-100">{skill.name}</span>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    skill.proficiency === "Efficient" ? "bg-green-700 text-green-100" :
                    skill.proficiency === "Proficient" ? "bg-blue-700 text-blue-100" :
                    "bg-yellow-700 text-yellow-100"
                  }`}>
                    {skill.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section (Dark mode, sleek cards)
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Automated Workflow System",
      description: "Streamlined data entry and report generation, drastically cutting manual effort and errors for departmental efficiency.",
      technologies: ["Python", "Django", "FastAPI"],
      liveDemo: "#",
      githubRepo: "#"
    },
    {
      id: 2,
      title: "Resource Management Portal",
      description: "A web app for efficient community resource allocation and tracking, with intuitive booking and real-time updates.",
      technologies: ["Python", "Django", "React.js"],
      liveDemo: "#",
      githubRepo: "#"
    },
    {
      id: 3,
      title: "Academic Performance Tracker",
      description: "An internal tool to monitor and visualize student progress, enabling targeted support and educational insights.",
      technologies: ["Python", "FastAPI", "React.js"],
      liveDemo: "#",
      githubRepo: "#"
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description: "A dashboard to visualize complex datasets, providing interactive charts and insights for business decisions.",
      technologies: ["Python", "FastAPI", "React.js", "D3.js"],
      liveDemo: "#",
      githubRepo: "#"
    },
    {
      id: 5,
      title: "Mini-E-commerce Platform",
      description: "A simplified e-commerce site demonstrating core features: product listings, shopping cart, and basic checkout.",
      technologies: ["Python", "Django", "JavaScript", "HTML", "CSS"],
      liveDemo: "#",
      githubRepo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-gray-200 px-4 md:px-0">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-100 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-indigo-700 text-indigo-100 text-xs font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex flex-wrap gap-3">
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <Button primary className="text-sm px-4 py-2">
                      <LinkIcon className="text-gray-900" /> Demo
                    </Button>
                  </a>
                )}
                {project.githubRepo && (
                  <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                    <Button className="text-sm px-4 py-2">
                      <GitHubIcon className="text-white" /> Code
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Blog Section (Dark mode, refined links)
const Blog = () => {
  const hashnodeUsername = "yourhashnodeusername"; // Replace with your actual Hashnode username

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Python Decorators",
      date: "May 28, 2025",
      link: `https://hashnode.com/@${hashnodeUsername}/understanding-python-decorators`
    },
    {
      id: 2,
      title: "Building RESTful APIs with FastAPI",
      date: "April 15, 2025",
      link: `https://hashnode.com/@${hashnodeUsername}/building-restful-apis-with-fastapi`
    },
    {
      id: 3,
      title: "Demystifying Django ORM",
      date: "March 5, 2025",
      link: `https://hashnode.com/@${hashnodeUsername}/demystifying-django-orm`
    },
    {
      id: 4,
      title: "Introduction to React Hooks",
      date: "February 10, 2025",
      link: `https://hashnode.com/@${hashnodeUsername}/introduction-to-react-hooks`
    },
    {
      id: 5,
      title: "Git Best Practices for Collaboration",
      date: "January 22, 2025",
      link: `https://hashnode.com/@${hashnodeUsername}/git-best-practices`
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-950 text-gray-200 px-4 md:px-0">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">My Blog</h2>
        <p className="text-lg text-center text-gray-300 mb-10">
          Latest insights on technology, development, and efficiency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="bg-gray-900 rounded-xl shadow-xl p-6 h-full flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-800">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400 group-hover:text-white transition-colors duration-200">{post.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                </div>
                <Button className="w-full text-sm">Read Article</Button>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href={`https://hashnode.com/@${hashnodeUsername}`} target="_blank" rel="noopener noreferrer">
            <Button primary>View All Blog Posts</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

// Contact Section (Dark mode, sleek form)
const Contact = () => {
  // Replace with your actual Formspree endpoint (e.g., https://formspree.io/f/your_form_id)
  // You get this ID after creating a new form on Formspree.io
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzzgegzz";

  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-200 px-4 md:px-0">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Get In Touch</h2>
        <div className="bg-gray-950 rounded-xl shadow-2xl p-8 md:p-12 border border-gray-800">
          <p className="text-center text-lg text-gray-300 mb-10">
            Open to projects, ideas, or opportunities. Let's connect. Fill out the form below.
          </p>

          <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-200 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name" // IMPORTANT: Formspree uses the `name` attribute
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-200 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email" // IMPORTANT: Formspree uses the `name` attribute
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-200 font-semibold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject" // IMPORTANT: Formspree uses the `name` attribute
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                placeholder="Subject of your message"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-200 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message" // IMPORTANT: Formspree uses the `name` attribute
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            {/* Formspree will handle the submission, so no `onSubmit` handler is needed here */}
            <div className="text-center">
              <Button primary type="submit" className="w-full sm:w-auto mt-4">Send Message</Button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <h3 className="text-xl font-semibold mb-6 text-white">Connect with me:</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors duration-200 flex items-center font-medium">
                <LinkedInIcon className="text-blue-400 group-hover:text-white" /> LinkedIn
              </a>
              <a href="https://github.com/yourgithubprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center font-medium">
                <GitHubIcon className="text-gray-300 group-hover:text-white" /> GitHub
              </a>
              <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-white transition-colors duration-200 flex items-center font-medium">
                <svg className="w-6 h-6 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.003 5.884L10 9.803l7.997-3.919A2.002 2.002 0 0016 4H8a2.002 2.002 0 00-1.997 1.884zM2 8.761V18a2 2 0 002 2h16a2 2 0 002-2V8.761L12 13.561 2 8.761z" />
                </svg> Email
              </a>
            </div>
            {/* Optional: Calendly Link */}
            <div className="mt-8">
              <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors duration-200 text-lg font-medium underline">
                Or Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component (Dark mode)
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 text-center border-t border-gray-800">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} George Kofi Addai. All rights reserved.</p>
        <p className="text-xs mt-2">Designed and Developed with Passion.</p>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App bg-gray-950 text-gray-200">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
