import Link from "@suid/material/Link";
import { mergeProps } from "solid-js";

function Links(props) {
  const merged = mergeProps({ text: "Home", href: "/" }, props);

  return (
    <Link href={merged.href} underline="hover">
      {merged.text}
    </Link>
  );
}

export default Links;
