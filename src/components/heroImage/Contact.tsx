import { FaGithub, FaLinkedin, FaMailBulk, FaTelegram } from "react-icons/fa";
import style from "./Contact.module.css";

const Contact = () => {
  const icons = [
    {
      Icon: FaLinkedin,
      key: "linkedin",
      link: "https://www.linkedin.com/in/erfan-taheri/",
    },
    {
      Icon: FaMailBulk,
      key: "mail",
      link: "mailto:erfanta197@gmail.com",
    },
    {
      Icon: FaTelegram,
      key: "telegram",
      link: "https://t.me/letnamebeNull",
    },
    {
      Icon: FaGithub,
      key: "github",
      link: "https://github.com/erufan",
    },
  ];

  return (
    <div className={style.container}>
      {icons.map(({ Icon, link, key }) => (
        <a href={link} rel="noopener noreferrer" key={key}>
          <Icon className={style.icon} />
        </a>
      ))}
    </div>
  );
};

export default Contact;
