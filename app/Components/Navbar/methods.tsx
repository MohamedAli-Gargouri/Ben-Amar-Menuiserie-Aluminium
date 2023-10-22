import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Router from "next/router";
import Logo from "@/public/Images/logo/Logo.webp"
import {
  DesktopNavbarProps,
  NavItemContainerProps,
  NavbarProps,
} from "./types";

import { AppBar, IconButton, Link, Toolbar } from "@mui/material";

import styles from "./style.module.css";

export const menuClick = (link: any) => {
  Router.push(link).then(() => window.scrollTo(0, 0));
};

export const NavItemContainer = ({
  navItems,
  router,
}: NavItemContainerProps) => {
  return (
    <div className={styles.navItemContainer}>
      {navItems.map((item, index) => (
        <Link
          key={index}
          className={`${styles.navItem} no-underline hover:no-underline`}
          onClick={() => menuClick(item.link)}
        >
            <div className="uppercase  text-lg hover-underline-animation font-lato">
              {item.name}
            </div>
          
        </Link>
      ))}
    </div>
  );
};

export const DesktopNavbar = ({
  navItems,
  router,
  handleDrawerToggle,
  bgWhite,
}: DesktopNavbarProps) => {
  return (
    <AppBar
      component="nav"
      position="fixed"
      className={`${styles.navContainer} ${bgWhite ? styles.bgWhite : ""}`}
    >
      <Toolbar className={styles.insideContainer}>
        <div className={styles.logoContainer}>
          
          <Image
          className={styles.logo}
            src={Logo}
            alt="Ben Amar Menuiserie Aluminium"
            loading="lazy"
            title="SBAA"
          />
        </div>

        <NavItemContainer navItems={navItems} router={router} />

        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          className={styles.menuButton}
          onClick={handleDrawerToggle}
        >
          <div>
            <MenuIcon className={styles.menuButtonIcon} />
          </div>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
