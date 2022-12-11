
import React from 'react'
import { HashLink } from "react-router-hash-link";
import { NavLink } from 'react-router-dom';
import { Flex, Spacer,Button,Heading,ButtonGroup,Box } from '@chakra-ui/react'
import "./ccss/Navbar.css"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,

  Input
  

} from '@chakra-ui/react'
import {HamburgerIcon,AddIcon} from "@chakra-ui/icons"
import { IconButton,Wrap,WrapItem,Avatar } from '@chakra-ui/react'

const links = [
  // { path: "#home", title: "Home" },
  { path: "#aboutme", title: "About" },
  { path: "#projects", title: "Projects" },
  { path: "#skills", title: "Skills" },
  { path: "#contact", title: "Contacts" }
];

function Navbar() {
  return (


<Box className="navbarbox">
  <Box p='2' >
    <Heading  className='logo' fontFamily={'sans-serif'} size='md'>Sammyak</Heading>
  </Box>
  <Spacer />
  <Box className='navlink'   p='2'>
  {links.map((link) => (
        
        <HashLink
          // style={({ isActive }) => {
          //   return isActive ? activeStyle : defaultStyle;
          // }}
          className="active"
            
        
          key={link.path}
         smooth to={link.path}
          end
        ><div className='link'>
          
          {link.title}</div>
        </HashLink>
      ))}
  </Box>
 
  <Box className="menubutton">
  <Menu >
  <MenuButton height="70%"  width="9%" padding={"3"}  as={Button} colorScheme='green'>
  <HamburgerIcon height="80%"  width="80%" />
  </MenuButton>

  <MenuList  className="menu"  borderRadius={"15px"} w={"200px"}>
  {links.map((link) => (
      <HashLink 
      key={link.path}
     smooth to={link.path}
      end>
  <MenuItem className="menuItem" height={"30px"} style={{textDecoration:"none",
   fontSize:"15px",
   textAlign:"center",
   alignItems:"center"}} ><p>{link.title}</p></MenuItem>
  </HashLink>
  )
  )
}
  </MenuList>
</Menu>
</Box>
   
</Box>


  )
}

export default Navbar;