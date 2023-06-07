import useStore from "../store/store";
import * as muiComponents from "./headerMui";
import { useState } from "react";
import { logo } from "../assets/img/logo/logo";
import "./header.scss";
import { langIcon } from "../assets/img/lang/translate";
import { landingTexts } from "../assets/texts/landing";
function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLanguage = () => {
    if (language === "ka") {
      setLanguage("en");
    } else {
      setLanguage("ka");
    }
  };
  console.log(language);
  return (
    <header>
      <muiComponents.Container maxWidth="xl">
        <muiComponents.Toolbar disableGutters>
          <muiComponents.Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} width="150px" alt="" />
          </muiComponents.Typography>

          <muiComponents.Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <muiComponents.IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <muiComponents.MenuIcon />
            </muiComponents.IconButton>
            <muiComponents.Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {landingTexts[language].pages.map((page) => (
                <muiComponents.MenuItem key={page} onClick={handleCloseNavMenu}>
                  <muiComponents.Typography textAlign="center">
                    {page}
                  </muiComponents.Typography>
                </muiComponents.MenuItem>
              ))}
            </muiComponents.Menu>
          </muiComponents.Box>
          <muiComponents.Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} width="150px" alt="" />
          </muiComponents.Typography>
          <muiComponents.Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {landingTexts[language].pages.map((page) => (
              <muiComponents.Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "1.2rem",
                }}
                className="pages"
              >
                {page}
              </muiComponents.Button>
            ))}
          </muiComponents.Box>
          <span onClick={handleLanguage}>
            <img src={langIcon} alt="" />
          </span>
        </muiComponents.Toolbar>
      </muiComponents.Container>
    </header>
  );
}
export default Header;
