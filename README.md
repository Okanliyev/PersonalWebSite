Okan Aliyev - Personal Portfolio Website


📋 Overview
A modern, responsive personal portfolio website for Okan Aliyev, a Software Engineering student from Azerbaijan. The website showcases his projects, skills, and contact information in a clean, professional design.

🚀 Features
Responsive Design: Fully responsive layout that works on all devices

Modern UI/UX: Clean, professional interface with smooth animations

Interactive Elements: Hamburger menu for mobile, contact form, and smooth scrolling

Project Showcase: Display of recent projects with GitHub links

Contact Section: Complete contact information and contact form

Social Integration: Links to GitHub, email, LinkedIn, and Twitter

🛠️ Technologies Used
HTML5: Semantic markup for better accessibility

CSS3: Custom styling with modern CSS features

JavaScript: Interactive functionality

Font Awesome: Icon library for social and UI icons

Google Fonts: Poppins and Roboto Mono fonts for typography

📁 Project Structure
text
portfolio-website/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
│
├── README.md           # This documentation file
│
└── assets/             # For images and other assets
    └── profile.jpg     # Profile image (placeholder)
🎯 Sections
Hero Section - Introduction with name, title, and social links

About Section - Personal information, skills, and stats

Projects Section - Showcase of recent projects with GitHub links

Contact Section - Contact information and form

Footer - Quick links and copyright information

🔧 Setup Instructions
Clone or Download the project files

Add your profile image:

Place your photo in the assets folder

Name it profile.jpg

Replace the placeholder icon in the hero section with:

html
<img src="assets/profile.jpg" alt="Your Name">
Customize personal information:

Update name, email, phone, and location in the HTML

Add your actual LinkedIn and Twitter URLs

Update project descriptions and links

Deploy:

Can be deployed on GitHub Pages, Netlify, or any static hosting service

For GitHub Pages, push to a repository and enable in settings

📱 Customization Guide
Change Colors
Modify CSS variables in style.css:

css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    /* ... other colors ... */
}
Add More Projects
Duplicate the project card HTML structure:

html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3 class="project-title">Project Title</h3>
    <p class="project-description">Project description</p>
    <a href="https://github.com/your-repo" target="_blank" class="project-link">
        <i class="fab fa-github"></i> View on GitHub
    </a>
</div>
Update Skills
Add more skill tags in the About section:

html
<span>New Skill</span>
📞 Contact Form Integration
To make the contact form functional, you'll need to:

Use a form service like Formspree, Netlify Forms, or a backend API

Update the form action in the HTML:

html
<form action="https://formspree.io/f/your-form-id" method="POST">
🚀 Deployment
GitHub Pages (Free)
Create a new repository

Push all files to the repository

Go to Settings > Pages

Select source branch (main/master)

Your site will be live at https://username.github.io/repository-name

Netlify (Recommended)
Drag and drop the folder to Netlify

Your site will be deployed instantly

Get a custom domain if desired

📊 Performance Tips
Optimize images before uploading

Minify CSS and JavaScript for production

Use a CDN for Font Awesome and Google Fonts

Enable GZIP compression on your server

🐛 Troubleshooting
Images not loading: Check file paths and file names

Form not working: Ensure you've set up a form handling service

Responsive issues: Check viewport meta tag and media queries

JavaScript errors: Open browser console (F12) for error messages

📝 License
This project is open source and available for personal and commercial use. Attribution is appreciated but not required.

👨‍💻 Author
Okan Aliyev

GitHub: @okanliyev

Email: okanaliyev@gmail.com

Location: Baku, Azerbaijan

Education: University of Technology

🌟 Credits
Design inspiration from modern portfolio templates

Icons by Font Awesome

Fonts by Google Fonts

CSS Reset by Modern CSS Reset
