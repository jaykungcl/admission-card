const Header = ({ logo, name, faculty }) => {
  return (
    <div className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <div className="header-text">
        <h2 className="faculty">{faculty.name}</h2>
        <h3 className="divisioin">{name}</h3>
        <h3 className="university">{faculty.university.name}</h3>
      </div>
    </div>
  );
};

export default Header;
