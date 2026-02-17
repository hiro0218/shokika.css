function TheSidebar() {
  return (
    <aside className="sidebar" aria-label="Documentation navigation">
      <nav>
        <div className="sidebar__nav-group">
          <h2 className="sidebar__nav-heading">Installation</h2>
          <ul className="sidebar__nav-list">
            <li>
              <a href="#npm">npm</a>
            </li>
            <li>
              <a href="#cdn">cdn</a>
            </li>
          </ul>
        </div>
        <div className="sidebar__nav-group">
          <h2 className="sidebar__nav-heading">Example</h2>
          <ul className="sidebar__nav-list">
            <li>
              <a href="#text">Text</a>
            </li>
            <li>
              <a href="#inline">Inline</a>
            </li>
            <li>
              <a href="#form">Form</a>
            </li>
            <li>
              <a href="#image">Image</a>
            </li>
            <li>
              <a href="#other">Other</a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export default TheSidebar;
