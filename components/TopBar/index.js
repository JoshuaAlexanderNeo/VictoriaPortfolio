import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Link from 'next/link'
import { useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import LeftDrawer from '../LeftDrawer';
import isCurrentPage from '../Utils';

const pages = ['Home', 'CV', 'Projects', 'Contact'];

const ResponsiveAppBar = () => {

  const theme = useTheme();
  const { asPath } = useRouter()
  const [leftOpen, setLeftOpen] = React.useState(false);

  const handleOpenLeftDrawer = () => {
    setLeftOpen(true);
  };

  const handleCloseLeftDrawer = () => {
    setLeftOpen(false);
  };

  let appBarColor = 'primary';
  let elevation = 1;
  if(asPath === '/') {
    appBarColor = 'transparent'
    elevation = 0;
  }

  return (
    <AppBar id="app-bar" color={appBarColor} elevation={elevation} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="expand menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenLeftDrawer}
              color="inherit"
            >
              <MenuIcon style={{color: 'white'}} />
            </IconButton>
            <LeftDrawer pages={pages} visible={leftOpen} handleClose={handleCloseLeftDrawer}></LeftDrawer>
          </Box>
          <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: 'none', md: 'flex' } }}>
            
            {pages.map((page) => (
              <Link
                key={page}
                href={page === 'Home' ? '/' : '/'.concat(page.replace(/ /g,"_"))}
                passHref
              >
                <div className={isCurrentPage(asPath.slice(1), page.replace(/ /g,"_")) ? "activeLink" : 'headerLink'} ><a>{page}</a></div>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;