import styles from "../../assets/sass/modules/footer.module.scss";

export default function Footer() {
  return (
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
  );
}
