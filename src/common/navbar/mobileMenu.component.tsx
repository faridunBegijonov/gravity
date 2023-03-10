import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./navbar.style.scss";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

type Anchor = "right";

export const MobileMenu: React.FC = () => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    right: false,
  });

  const changeLanguage = (l: string) => {
    i18n.changeLanguage(l);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <NavLink to="/studio">{t("Студия")}</NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <NavLink to="/cases">{t("Кейсы")}</NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <NavLink to="/services">{t("Услуги")}</NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <NavLink to="/startProject">{t("+Начать проект")}</NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>Язык</ListItemButton>
        </ListItem>
        <ListItem onClick={() => changeLanguage("ru")}>
          <ListItemButton>RU</ListItemButton>
        </ListItem>
        <ListItem onClick={() => changeLanguage("en")}>
          <ListItemButton>EN</ListItemButton>
        </ListItem>
        <ListItem onClick={() => changeLanguage("uzb")}>
          <ListItemButton>UZB</ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="menuNavbar">
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            className="iconMenuNavbar"
          >
            <MenuIcon sx={{ fontSize: 35 }} />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};
