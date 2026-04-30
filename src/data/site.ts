//   { text: "Email", link: "mailto:your@email.com?subject=Hello&body=Hi%20there" }, for email

type Link = {
  text: string;
  link: string;
};

export const footerLinks: Link[] = [
  { text: "LinkedIn", link: "https://www.linkedin.com/in/evgenia-babulkova/" },
  { text: "Instagram", link: "https://www.instagram.com/ev_shots" },
  { text: "Resume", link: "/Resume-Evgenia-Babulkova-Jan-2026.pdf" },
];

export const watermark: string = "© 2026 Evbubble";
