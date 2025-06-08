import Darkmode from "./Darkmode";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import Search from "./Search";

function Navbar() {
  return (
    <nav>
      <div className="container flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4 py-8">
        <div className=""> {/* Logo container */}
          <Logo />
        </div>
        <Search />
        {/* Controls container for Dropdown and Darkmode */}
        {/* On small screens (flex-col), self-end pushes it to the right. */}
        {/* On md+ screens (flex-row), parent's justify-between pushes it to the right, self-auto resets self-end. */}
        <div className="flex items-center gap-4 self-end md:self-auto">
          <Dropdown />
          <Darkmode />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
