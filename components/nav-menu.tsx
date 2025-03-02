"use client";

const NavMenu = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ul className="flex space-x-8">
      <li>
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          className="hover:text-gray-300"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={(e) => handleScroll(e, "projects")}
          className="hover:text-gray-300"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#experience"
          onClick={(e) => handleScroll(e, "experience")}
          className="hover:text-gray-300"
        >
          Experience
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="hover:text-gray-300"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavMenu;
