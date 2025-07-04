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
          <h2 className="sidebar__nav-heading">Getting Started</h2>
          <ul className="sidebar__nav-list" role="list">
            <li role="listitem">
              <a href="#installation" onClick={handleNavClick} aria-describedby="installation-desc">
                Installation
              </a>
            </li>
            <li role="listitem">
              <a href="#example" onClick={handleNavClick} aria-describedby="example-desc">
                Example
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar__nav-group">
          <h2 className="sidebar__nav-heading">Elements</h2>
          <ul className="sidebar__nav-list" role="list">
            <li role="listitem">
              <a href="#text" onClick={handleNavClick}>
                Text
              </a>
            </li>
            <li role="listitem">
              <a href="#inline" onClick={handleNavClick}>
                Inline
              </a>
            </li>
            <li role="listitem">
              <a href="#form" onClick={handleNavClick}>
                Form
              </a>
            </li>
            <li role="listitem">
              <a href="#image" onClick={handleNavClick}>
                Image
              </a>
            </li>
            <li role="listitem">
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
