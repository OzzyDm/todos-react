import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Copyright &#169;{" "}
        <a
          href="https://oguzhandemiraslan.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oguzhan
        </a>{" "}
        &{" "}
        <a
          href="https://omergencoglu.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Omer
        </a>
      </span>
      <span>
        Made with <span className={styles.heart}>&#10084;&#xFE0E;</span>
      </span>
    </footer>
  );
}

export default Footer;
