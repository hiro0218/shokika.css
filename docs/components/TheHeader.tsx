import { GitHub } from './Icon/GitHub';

const TheHeader = () => {
  return (
    <header className="header">
      <h1 className="header__logo">
        <a href={import.meta.env.BASE_URL}>shokika.css</a>
      </h1>
      <nav className="header__nav">
        <a
          href="https://github.com/hiro0218/shokika.css"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub repository"
        >
          <GitHub />
        </a>
      </nav>
    </header>
  );
};

export default TheHeader;
