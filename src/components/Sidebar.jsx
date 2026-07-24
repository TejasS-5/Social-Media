const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const handleOnClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "180px", height: "100vh" }}>
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 text-white text-decoration-none">
        <span className="fs-4">Content</span>
      </a>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => handleOnClick("Home")}>
          <a
            href="#"
            className={`nav-link ${
              selectedTab === "Home" ? "active" : "text-white"
            }`}>
            Home
          </a>
        </li>

        <li onClick={() => handleOnClick("CreatePost")}>
          <a
            href="#"
            className={`nav-link ${
              selectedTab === "CreatePost" ? "active" : "text-white"
            }`}>
            Create Post
          </a>
        </li>
      </ul>

      <hr />

      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown">
          <img
            src="https://github.com/mdo.png"
            alt="profile"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>User</strong>
        </a>

        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
