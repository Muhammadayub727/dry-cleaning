import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink , Outlet, useLocation } from 'react-router-dom';
import { ListItemText } from '@mui/material';
// import { useEffect  } from 'react';
// import { useNavigate } from 'react-router-dom';


import navList from "@navList"
import {AccountMenu } from "@ui"
import Logo from "../../assets/logo.svg"

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };


  // my code ....------------------------------------------------
  const {pathname} = useLocation();
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if(!localStorage.getItem("acses-token")){
  //      navigate("/signin")
  //   }
  // }, []);
  // ....------------------------------------------------
  

  const drawer = (
    <div >
     <div className='w-full py-[16px]'>
            <img className='w-full h-[32px] ' src={Logo} alt="logo" />
      </div>
      <Divider />
      <List className='bg-[#F9F9F9] min-h-[90vh] ' >
          {navList.map((el, index) => (
            <NavLink key={index} to={el.path} className={el.path === pathname ? "block bg-[#109CF1] text-white duration-200  " :" "}>
               <ListItem disablePadding>
                 <ListItemButton>
                   <ListItemIcon>
                     <span className={el.path === pathname ? "text-white" : ""}>{el.icon}</span>
                   </ListItemIcon>
                   <ListItemText primary={el.title}/>
                 </ListItemButton>
               </ListItem>
            </NavLink>
          ))}
        </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className='bg-[#F9F9F9] '>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
                mr: 2, 
                display: { sm: 'none' },
                color: '#767676' // HEX formatida rang
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography  noWrap component="div" className='bg-[#F9F9F9] flex items-center justify-between w-full h-full'>
          <div className='flex items-center gap-[25px] '>
            {/* <button className='py-2 px-12 bg-[#109CF1] rounded-[10px] hover:bg-sky-700 active:bg-[#109CF1] duration-200'>Buyurtma qo‘shish</button> */}
            <div className=' relative bg-[#E2E2E2] max-w-[294px] w-full h-[40px] rounded-[10px] '>
              <i className=" absolute top-2 left-3  text-[#767676]  bi bi-search"></i>
              <input type="text" placeholder='Qidiruv' className='w-full h-full rounded-[10px] pl-10 pr-3 outline-none text-[#767676]' />
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <AccountMenu/>
          </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet/>
      </Box>
    </Box>
  );
}
