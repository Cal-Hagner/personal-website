import React from 'react';
import Header from '../header/header';
import Headroom from 'react-headroom';
import EmailIcon from '@material-ui/icons/Email';

import '../../styles/layout.css';
import styles from './layout.module.css';

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Headroom>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    </Headroom>
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>&copy; {new Date().getFullYear()} Caleb Hagner</div>
      </div>
    </footer>
  </>
);

export default Layout;
