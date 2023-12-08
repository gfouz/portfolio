import ContactForm from 'components/form/ContactForm';

function Footer() {
  return (
    <footer className="footer bg-base-200 p-10 text-base-content">
      <nav>
        <header className="footer-title">Join me on</header>
        <a className="link-hover link" href="https://github.com/gfouz">
          Github
        </a>
        <a className="link-hover link">Blog</a>
        <a className="link-hover link">About</a>
        <a className="link-hover link">Contact</a>
      </nav>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link-hover link">Branding</a>
        <a className="link-hover link">Design</a>
        <a className="link-hover link">Marketing</a>
        <a className="link-hover link">Advertisement</a>
      </nav>

      <nav>
        <header className="footer-title">Legal</header>
        <a className="link-hover link">Terms of use</a>
        <a className="link-hover link">Privacy policy</a>
        <a className="link-hover link">Cookie policy</a>
      </nav>
      <ContactForm />
    </footer>
  );
}

export default Footer;
