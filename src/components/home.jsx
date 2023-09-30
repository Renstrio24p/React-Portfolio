import Loader from "react-loaders";
import styles from "../assets/sass/modules/home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.box}>
          <h2>Living Luxury and Experience Better Spaces</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, nulla atque officiis a nobis praesentium exercitationem
            ducimus dolorum iure temporibus repellat iusto odit magni ea veniam
            facere eius suscipit ipsa.
          </p>
        </div>
        <div className={styles.box1}>
          <h1>Change the Way of Living</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            repudiandae quaerat explicabo asperiores, expedita officiis.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles['text-zone']}>
          <h2>Build and Innovation</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur tenetur ipsa fuga, adipisci fugit, eveniet omnis porro
            commodi unde saepe placeat facilis! Culpa laboriosam quidem eaque
            repudiandae consectetur in alias.
          </p>
        </div>
        <div className={styles["image-div"]}>
          <img src="living2.jpg" alt="living" />
        </div>
      </div>
      <footer className={styles.footer}>
      <div className={styles["upper-footer"]}>
        <div className={styles.box}>
          <img src="logo.png" alt="alt" className={styles.logo} />
          <h3>Design and Passion Awaits</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis neque expedita at! Accusantium, perspiciatis quo?
          </p>
        </div>
        <div className={styles.box}>
          <p>Subscribe for News letters</p>
          <div className={styles.subscribe}>
          <input type="email" className={styles.email} placeholder="email" />
          <input type="button" value="subscribe" />
          </div>
          <h3>Social Media</h3>
          <ul className={styles.icons}>
            <li>
              <box-icon
                className={styles["facebook"]}
                type="logo"
                color="blue"
                name="facebook-square"
              ></box-icon>
            </li>
            <li>
              <box-icon
                className={styles["instagram"]}
                type="logo"
                color="gold"
                name="instagram"
              ></box-icon>
            </li>
            <li>
              <box-icon
                className={styles["gmail"]}
                type="logo"
                color="red"
                name="gmail"
              ></box-icon>
            </li>
          </ul>
        </div>
        
      </div>
      <div className={styles["lower-footer"]}>
        <p>&copy; Copyright 2023 by. Elcito Jr. &trade;</p>
      </div>
    </footer>
      <Loader type="line-scale" />
    </>
  );
}
