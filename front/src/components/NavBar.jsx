import styles from "./NavBar.module.css";
import { Link } from "@solidjs/router";

function NavBar() {
  return (
    <nav>
      <div class="logo" id="logo"></div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/faq">FAQ</Link>
    </nav>
  );
}

export default NavBar;
