const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4">
        <p>&copy; {new Date().getFullYear()} WiseWorks. All rights reserved.</p>
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><a className="text-white" href="#">Terms of Service</a></li>
            <li><a className="text-white" href="#">Privacy Policy</a></li>
            <li><a className="text-white" href="#">Cookie Policy</a></li>
            <li><a className="text-white" href="#">Support</a></li>
          </ul>
        </nav>
      </footer>

  );
};

export default Footer;