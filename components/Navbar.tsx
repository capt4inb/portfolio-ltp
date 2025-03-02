import { scrollToSection } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => scrollToSection("about")}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
