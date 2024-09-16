import { FaGithub, FaLinkedin, FaMailBulk, FaTelegram } from "react-icons/fa";
import style from "./Contact.module.css";

const Contact = () => {
  const icons = [
    { Icon: FaLinkedin, key: "linkedin" },
    { Icon: FaMailBulk, key: "mail" },
    { Icon: FaTelegram, key: "telegram" },
    { Icon: FaGithub, key: "github" },
  ];

  return (
    <div className={style.container}>
      {icons.map(({ Icon, key }) => (
        <Icon key={key} className={style.icon} />
      ))}
    </div>
  );
};

export default Contact;
