import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import { useNavigation, useTranslate, useGetLocale, useSetLocale } from "@refinedev/core";

const pages = [
  { label: "resources", path: "/resources" },
  { label: "contact", path: "/contact" },
  { label: "discoveryFlight", path: "/discovery-flight" },
];

const settings = [
  { label: "bookings", path: "/bookings" },
  { label: "logbook", path: "/logbook" },
  { label: "notice", path: "/notice" },
  { label: "profile", path: "/profile" },
  { label: "logout", path: "/logout" },
];

const availableLocales = [
  { code: "en", label: "English" },
  { code: "fi", label: "Suomi" },
];

function ResponsiveAppBar() {
  const { push } = useNavigation();
  const t = useTranslate();
  const getLocale = useGetLocale();
  const setLocale = useSetLocale();
  const currentLocale = getLocale();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElLang(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleCloseLangMenu = () => setAnchorElLang(null);

  const handleLocaleChange = (locale: string) => {
    setLocale(locale);
    handleCloseLangMenu();
    console.log("Locale:", locale)
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo and Title */}
          <Avatar sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} src="/Logo.png" variant="square" />
          <Typography
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
            WING T2
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={() => {
                    push(page.path);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">{t(`buttons.${page.label}`)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={page.label} onClick={() => push(page.path)} sx={{ my: 2, color: "white", display: "block" }}>
                {t(`buttons.${page.label}`)}
              </Button>
            ))}
          </Box>

          {/* Language Switcher */}
          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <Tooltip title="Change Language">
              <IconButton onClick={handleOpenLangMenu} sx={{ color: "white" }}>
                <LanguageIcon />
              </IconButton>
            </Tooltip>
            <Menu anchorEl={anchorElLang} open={Boolean(anchorElLang)} onClose={handleCloseLangMenu}>
              {availableLocales.map((locale) => (
                <MenuItem key={locale.code} onClick={() => handleLocaleChange(locale.code)}>
                  <Typography textAlign="center">
                    {locale.label} {locale.code === currentLocale && "✔"}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* User Avatar Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu anchorEl={anchorElUser} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem
                  key={setting.label}
                  onClick={() => {
                    push(setting.path);
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">{t(`buttons.${setting.label}`)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
