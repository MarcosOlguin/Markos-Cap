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
          <a
            href="https://www.linkedin.com/in/marcos-olguin-fullstack/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <img
            className="img-linkedin"
            src="https://raw.githubusercontent.com/MarcosOlguin/Markos-Cap/main/src/recursos/linkedin%20(1).png"
            alt="img"
          />
        </div>

        <div className="gitbuh">
          <a
            href="https://github.com/MarcosOlguin"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <img
            className="img-github"
            src="https://raw.githubusercontent.com/MarcosOlguin/Markos-Cap/main/src/recursos/github.png"
            alt="img"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
