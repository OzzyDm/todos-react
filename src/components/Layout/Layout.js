import { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
