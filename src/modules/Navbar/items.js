import { nanoid } from "nanoid";

const navItems = [
  {
    id: nanoid(),
    text: "Home",
    link: "/",
  },
  {
    id: nanoid(),
    text: "Tweets",
    link: "/tweets",
  },
];

export default navItems;