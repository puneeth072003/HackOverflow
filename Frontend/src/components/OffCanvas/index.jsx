import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Header from "../Header";
// import Footer from "../Footer";
import PermanentDrawer from "../PermanentDrawer";
import Profile from "../Profile";
import MidPage from "../MidPage";

// import PropTypes from 'prop-types';

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF007A",
    },
    secondary: {
      main: "#fff",
    },
  },
});

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        theme={theme}
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.07)",
          boxShadow: "0px 2px 3px -1px rgb(255 255 255/ 20%)",
          borderRadius: "7px",
        }}
      >
        <Toolbar sx={{ backgroundColor: "rgba(0, 0, 0, 0.07)" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && { display: "none" }),
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
          <Header></Header>
        </Toolbar>
      </AppBar>
      <Drawer
        theme={theme}
        sx={{
          "& .MuiPaper-root": {
            display: open ? "" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.07)",
            transition: "box-shadow 0s cubic-bezier(0.4, 0, 0.6, 1) 225ms",
            boxShadow: "2px 0px 3px -1px rgb(255 255 255/ 20%)",
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader theme={theme}>
          <IconButton onClick={handleDrawerClose}>
            <FontAwesomeIcon icon={faChevronLeft} color="#fff" />
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ "border-color": "#313942" }} />
        <Profile />
        <Divider sx={{ "border-color": "#313942" }} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, marginTop: "25px" }}>
        <DrawerHeader />
        <PermanentDrawer />
        <main
          className={
            open
              ? "absolute w-[56vw] h-[85vh] left-[20vw] pr-[1.5rem]"
              : "absolute w-[72vw] h-[85vh] left-[35px] pr-0"
          }
        >
          <MidPage large={open} />
        </main>
      </Box>
    </Box>
  );
}