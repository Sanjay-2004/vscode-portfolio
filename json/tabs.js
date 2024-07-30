import { IoMdCopy } from "react-icons/io";
import { IoGitBranchOutline } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

export const tabs = [
  { href: "", icon: <IoMdCopy /> },
  { href: "github", icon: <IoGitBranchOutline /> },
  { href: "projects", icon: <IoCodeSlash /> },
  { href: "contact", icon: <AiOutlineMail /> },
];

export const bottomTabs = [
  { href: "about", icon: <IoMdContact /> },
  { href: "settings", icon: <IoMdSettings /> },
];

export const navbarTabs = [
  { name: "home.jsx", icon: "/images/react.png", href: "" },
  { name: "about.html", icon: "/images/html.png", href: "about" },
  { name: "contact.css", icon: "/images/css.png", href: "contact" },
  { name: "projects.js", icon: "/images/js.png", href: "projects" },
  { name: "github.md", icon: "/images/readme.png", href: "github" },
];
