/**
 * Footer Component
 * ----------------
 * A responsive React footer built with Flexbox and CSS Grid.
 * Includes three main sections: Contact (with social media icons),
 * Support (with helpful links), and Badges (for achievement tags).
 * 
 * Props:
 *  - title (string): The main heading displayed at the top of the footer.
 * 
 * The component imports Font Awesome icons from `react-icons` and styles from `footer.css`.
 * Social links open in new tabs with accessible ARIA labels.
 */

import React from 'react';
import '../styles/footer.css';
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer({ title }) {
    return (
        <footer className="footer">
            <h1 className="footer-title">{title}</h1>

            <div className="content">
                <div className="col">
                    <h2 className="section-head">Contact</h2>
                    <p>Email: contact@mywebsite.com</p>
                    <p>Phone: +1 (555) 555-5555</p>
                    <div className="social-icons">
                        <a
                            href="https://twitter.com/tuusuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://linkedin.com/in/tuusuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/tuusuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>

                <div className="col">
                    <h2 className="section-head">Support</h2>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h2 className="section-head">Badges</h2>
                    <div className="badges">
                        <span>⭐ Gold</span>
                        <span>💎 Platinum</span>
                        <span>🔥 Pro</span>
                    </div>
                </div>
            </div>

            <p className="footer-copy">
                © {new Date().getFullYear()} My Website. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
