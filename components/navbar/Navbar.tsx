import Darkmode from "./Darkmode";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import Search from "./Search";

function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between py-8">
        <div>
          <Logo />
        </div>
        <Search />
        <div className="flex gap-4">
          <Dropdown />
          <Darkmode />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
