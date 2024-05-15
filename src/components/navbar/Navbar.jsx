"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Image from "next/image";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logo from "@/assets/images/navlogo.svg";
import Link from "next/link";
import "@/sass/components/navbar.scss";
import { Container } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Shop All" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
];

export default function SearchAppBar() {
  const [showLinks, setShowLinks] = React.useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <Box className="navbar" sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleLinks}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <div className={`nav__links ${showLinks ? "show" : ""}`}>
                <Link href={"/"}>
                  <Image src={logo} />
                </Link>
                {links.map((link, index) => (
                  <Link key={index} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </Typography>
            <Search
              sx={{
                backgroundColor: "rgb(237, 242, 244)",
                color: "rgba(0, 0, 0, 0.5);",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
