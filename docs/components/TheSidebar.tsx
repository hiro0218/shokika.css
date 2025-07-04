const TheSidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <div className="sidebar__nav-group">
          <h2 className="sidebar__nav-heading">Getting Started</h2>
          <ul className="sidebar__nav-list">
            <li>
              <a href="#installation">Installation</a>
            </li>
            <li>
              <a href="#example">Example</a>
            </li>
          </ul>
        </div>
        <div className="sidebar__nav-group">
          <h2 className="sidebar__nav-heading">Elements</h2>
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
};

export default TheSidebar;
