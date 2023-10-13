import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto: domukino@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <p>domukino@gmail.com</p>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/zhiyuan-ma-288b44241/">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <p>https://www.linkedin.com/in/zhiyuan-ma-288b44241/</p>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/MaaZiJyun">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <p>https://github.com/MaaZiJyun</p>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
