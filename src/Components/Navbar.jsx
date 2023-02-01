
import React from 'react'
import { HashLink } from "react-router-hash-link";
import  {RiFileUserLine}  from 'react-icons/ri'
import { Flex, Spacer,Button,Heading,ButtonGroup,Box, Icon } from '@chakra-ui/react'
import "./ccss/Navbar.css"
import {Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'
import {HamburgerIcon} from "@chakra-ui/icons"
import Sammyak_MERN_Resume1 from "../Resume/Sammyak_Deosale_Resume.pdf"

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
  <Box  >
    <Heading  className='logo' color={"white"} fontFamily={'sans-serif'} size='auto'>{"Sammyak"}</Heading>
  </Box>
  <Spacer />
  <Box className='navlink' >
  <a className="navresume" href='https://drive.google.com/file/d/122wyJSFMfP61yciEuM2q_JKrYpv2FNFf/view?usp=sharing' download><Button  variant='outline' _hover={{ bg: 'gray.700' }} justifyContent={"space-evenly"} color={"white"}><Icon as={RiFileUserLine} />My Resume</Button>
    </a>
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
  <MenuButton height="70%"  width="9%" padding={"3"} color="white" _hover={{ bg: 'gray.700' }}  as={Button} backgroundColor="#172b4d">
  <HamburgerIcon height="80%"  width="80%" />
  </MenuButton>

  <MenuList  className="menu" >
  {links.map((link) => (
      <HashLink 
      key={link.path}
     smooth to={link.path}
      end>
  <MenuItem className="menuItem"  ><p>{link.title}</p></MenuItem>
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