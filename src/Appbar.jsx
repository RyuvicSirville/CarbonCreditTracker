import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import logo from '/img/carbon-credit-icon-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration-png.webp'
const pages = ['Dashboard', 'Generate', 'Tracking'];
const settings = ['Profile', 'Account', 'SignUp', 'Logout'];


function Appbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div class="lg:px-20 md:px-10   ">
      <AppBar class="backdrop-blur-lg	" position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            src={logo}
            alt="logo"
            style={{ display: { xs: 'none', md: 'flex' }, marginRight: '1rem', height: '40px' }}
          />
          <Typography 
            variant="h5"
            noWrap
            component="a"
            onClick={() => { navigate("/") }}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            CarbonCreditTracker
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              
                <MenuItem  onClick={() => { navigate("/dashboard") }}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
                <MenuItem onClick={() => { navigate("/generate") }}>
                  <Typography textAlign="center">Generate</Typography>
                </MenuItem>
                <MenuItem  onClick={() => { navigate("/trading") }}>
                  <Typography textAlign="center">Trade</Typography>
                </MenuItem>
              

            </Menu>
          </
          Box>

          <Typography
            variant="h8"
            noWrap
            component="a"
            onClick={() => { navigate("/") }}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            CarbonCreditTracker
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button

              onClick={() => { navigate("/dashboard") }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              dashboard
            </Button>
            <Button

              onClick={() => { navigate("/generate") }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Generate
            </Button>
            <Button

              onClick={() => { navigate("/Trading") }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Trade
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://www.koimoi.com/wp-content/new-galleries/2022/08/the-batman-2-is-still-happening-the-robert-pattinson-starrer-has-an-update-around-its-script-001.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
    
  )
}
export default Appbar;