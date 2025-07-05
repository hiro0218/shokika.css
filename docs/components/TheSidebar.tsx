import { useCallback } from 'react';

const TheSidebar = () => {
  const handleNavClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    const href = target.getAttribute('href');

    if (href?.startsWith('#')) {
      event.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Update URL without triggering page reload
        history.pushState(null, '', href);
      }
    }
  }, []);

  return (
    <aside className="sidebar" aria-label="Documentation navigation">
      <nav>
        <div className="sidebar__nav-group">
          <h2 className="sidebar__nav-heading">Installation</h2>
          <ul className="sidebar__nav-list">
            <li>
              <a href="#npm" onClick={handleNavClick}>
                npm
              </a>
            </li>
            <li>
              <a href="#cdn" onClick={handleNavClick}>
                cdn
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar__nav-group">
          <h2 className="sidebar__nav-heading">Example</h2>
          <ul className="sidebar__nav-list">
            <li>
              <a href="#text" onClick={handleNavClick}>
                Text
              </a>
            </li>
            <li>
              <a href="#inline" onClick={handleNavClick}>
                Inline
              </a>
            </li>
            <li>
              <a href="#form" onClick={handleNavClick}>
                Form
              </a>
            </li>
            <li>
              <a href="#image" onClick={handleNavClick}>
                Image
              </a>
            </li>
            <li>
              <a href="#other" onClick={handleNavClick}>
                Other
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default TheSidebar;
