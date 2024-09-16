import style from "./Contact.module.css";
import { icons } from "./content";

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
