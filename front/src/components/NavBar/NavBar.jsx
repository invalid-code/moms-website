import Links from "./Links";
import Box from "@suid/material/Box";

function NavBar() {
  return (
    <nav>
      <div class="logo" id="logo"></div>
      <Links />
      <Links href="/about" text="About" />
      <Links href="/faq" text="FAQ" />
      <Links href="/product-list" text="Product List" />
    </nav>
  );
}

export default NavBar;
