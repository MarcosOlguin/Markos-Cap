import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <p>Developed by Marcos</p>
      </div>

      <div className="contact">
        <p>Contact</p>
        <span>Linkedin</span>
        <span>Github</span>
        <span>Email</span>
        <img
          src="https://raw.githubusercontent.com/gcoronelc/imagenes/master/24x24/Banned%20User.png"
          alt="img"
        />
      </div>
    </footer>
  );
}

export default Footer;
