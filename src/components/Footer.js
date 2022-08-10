import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <p>Developed by Marcos</p>
      </div>

      <div className="contact">
        <p>Contact</p>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/marcos-olguin-fullstack/">
            Linkedin
          </a>
          <img
            className="img"
            src="https://raw.githubusercontent.com/MarcosOlguin/Markos-Cap/main/src/recursos/linkedin%20(1).png"
            alt="img"
          />
        </div>
        <span>Github</span>
        <span>Email</span>
      </div>
    </footer>
  );
}

export default Footer;
