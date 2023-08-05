const Footer = () => {
  return (
    <footer>
      <div>
        {/* Copyright information */}
        <p>&copy; {new Date().getFullYear()} WiseWorks. All rights reserved.</p>
      </div>
      <div>
        {/* Legal links */}
        <ul>
          <li>
            <a href="/terms-of-service">Terms of Service</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/cookie-policy">Cookie Policy</a>
          </li>
        </ul>
      </div>
      <div>
        {/* Support/contact information */}
        <p>Contact us at support@wiseworks.com</p>
      </div>
      <div>
        {/* Social media links */}
        <ul>
          <li>
            <a href="https://twitter.com/wiseworks">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/wiseworks">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.instagram.com/wiseworks">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;