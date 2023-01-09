import { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";

import classes from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
