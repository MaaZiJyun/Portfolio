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
            <i className="bi bi-envelope"></i>
            <p>domukino@gmail.com</p>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/zhiyuan-ma-288b44241/">
            <i className="bi bi-linkedin"></i>
            <p>https://www.linkedin.com/in/zhiyuan-ma-288b44241/</p>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/MaaZiJyun">
            <i className="bi bi-github"></i>
            <p>https://github.com/MaaZiJyun</p>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
