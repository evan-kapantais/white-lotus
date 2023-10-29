import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import MenuModal from "./MenuModal";

import Menu from "../utils/menu";

const Layout = ({ id, className, children }) => {
  const [loaded, setLoaded] = useState(false);
  const [pageId, setPageId] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) new Menu();

    if (!window) return;

    const { pathname } = window.location;

    setPageId(id ? id : pathname === "/" ? "home" : pathname.match(/\w+/g)[0]);
  }, [loaded]);

  return (
    <>
      <Header />
      <main id={`${pageId}-page`} className={className}>
        {children}
      </main>
      <Footer />
      <MenuModal />
    </>
  );
};

export default Layout;
