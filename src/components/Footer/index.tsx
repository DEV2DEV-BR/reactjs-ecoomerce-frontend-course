import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <strong>E-commerce Developer</strong>
        <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
