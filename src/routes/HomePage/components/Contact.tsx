import { icons } from "../data/content";
import style from "./Contact.module.css";

const Contact = () => {
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
