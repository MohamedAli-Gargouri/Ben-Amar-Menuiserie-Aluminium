import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Logo from "@/public/Images/logo/Logo.webp"
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { DesktopNavbar } from "./methods";
import { DesktopNavbarProps, NavbarProps } from "./types";
import styles from "./style.module.css";
import Image from "next/image";
const drawerWidth = 240;

const navItems = [
  { name: "Présentation", link: "/" },
  { name: "Nos Produits", link: "/products" },
  { name: "À Propos", link: "/about" },
  { name: "Contact", link: "/contact" },
];

//This is the Mobile Side Navbar
const MobileNavbar = ({
  navItems,
  router,
  handleDrawerToggle,
  mobileOpen,
}: DesktopNavbarProps) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div className="flex justify-center items-center flex-col">
      <Image className="" height={100} src={Logo} alt={"Ben Amar Menuiserie Aluminium"} />
      </div>
      
      <Divider />
      <FontAwesomeIcon className="mt-4" icon={faHome} />
      <List>
        {navItems.map((item, index) => (
          <ListItemButton
            key={index}
            onClick={() => console.log(item)}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        className={styles.menuButton}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

function Navbar({
  bgWhite
}: NavbarProps) {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    // The debounce function receives our function as a parameter
    const debounce = (
      // @ts-ignore
      fn
    ) => {
      // This holds the requestAnimationFrame reference, so we can cancel it if we wish
      // @ts-ignore
      let frame;
      // The debounce function returns a new function that can receive a variable number of arguments
      return (
        // @ts-ignore
        ...params
      ) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        // @ts-ignore
        if (frame) {
          cancelAnimationFrame(frame);
        }
        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
          // Call our function and pass any params we received
          fn(...params);
        });
      };
    };

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      // @ts-ignore
      document.documentElement.dataset.scroll = window.scrollY;
    };

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true,
    });

    // Update scroll position for first time
    storeScroll();
  });

  return (
    <div>
      <CssBaseline />
      <DesktopNavbar
        navItems={navItems}
        router={router}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        bgWhite={bgWhite}
      />
      <MobileNavbar
        navItems={navItems}
        router={router}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
    </div>
  );
}

export default Navbar;
