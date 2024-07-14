// src/components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Ferretería FerTools. Todos los derechos reservados.
        </p>
        <p className={styles.footerText}>
          Dirección: México
        </p>
        <p className={styles.footerText}>
          Teléfono: +52 5576466645
        </p>
        <p className={styles.footerText}>
          Email: info@fertools.com
        </p>
      </div>
      <p className={styles.footerText}>
        Universidad UNIR | Desarrollado por Fernando Rivera 
      </p>
    </footer>
  );
};

export default Footer;
