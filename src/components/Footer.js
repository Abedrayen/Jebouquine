import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <i className="fab fa-twitter"></i>
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <i className="fab fa-pinterest-p"></i>
                </a>
            </div>
            <p className="copyright">Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
