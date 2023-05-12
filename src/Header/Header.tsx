import * as muiComponents from "./headerMui";
import { useState } from "react";
import { logo } from "../assets/logo/logo";
import "./header.scss";
const pages = ["About us", "places"];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

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
              {pages.map((page) => (
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
            {pages.map((page) => (
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

          {/* <muiComponents.Box sx={{ flexGrow: 0 }}>
            <muiComponents.Tooltip title="Open settings">
              <muiComponents.IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <muiComponents.Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </muiComponents.IconButton>
            </muiComponents.Tooltip>
            <muiComponents.Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <muiComponents.MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <muiComponents.Typography textAlign="center">{setting}</muiComponents.Typography>
                </muiComponents.MenuItem>
              ))}
            </muiComponents.Menu>
          </muiComponents.Box>
           */}
    
        </muiComponents.Toolbar>
      </muiComponents.Container>
    </header>
  );
}
export default Header;
