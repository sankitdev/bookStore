const DarkModeToggle = () => {
  return (
    <li className="nav-item align-items-center d-flex">
      <i className="fas fa-sun"></i>
      <div className="ms-2 form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="themingSwitcher"
        />
      </div>
      <i className="fas fa-moon"></i>
    </li>
  );
};

export default DarkModeToggle;
