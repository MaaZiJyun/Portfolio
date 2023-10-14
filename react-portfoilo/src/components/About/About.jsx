import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.chara}>
          <img
            src={getImageUrl("about/people.png")}
            alt="me"
            className={styles.people}
          />
          <img
            src={getImageUrl("about/glasses.png")}
            alt="my glasses"
            className={styles.glasses}
          />
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <i className="bi bi-display"></i>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building
                applications by applying Flutter and React frameworks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <i className="bi bi-pc"></i>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience of developing and managing database by using
                Laravel framework.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Server" /> */}
            <i className="bi bi-play-btn"></i>
            <div className={styles.aboutItemText}>
              <h3>Music Composer and Video Editor</h3>
              <p>
                I've composed multiple musics and edited videos as well. You
                could check my works on NetEase and Youtube.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default About;
