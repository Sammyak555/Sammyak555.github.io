
import React from 'react'
import { HashLink } from "react-router-hash-link";
import { RiFileUserLine } from 'react-icons/ri'
import { Spacer, Button, Box, Icon } from '@chakra-ui/react'
import "./ccss/Navbar.css"
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
import Sammyak_MERN_Resume1 from "../Resume/fw19_1004-Sammyak-Deosale-Resume.pdf"
<link href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Sacramento&family=Shantell+Sans:ital,wght@1,300&display=swap" rel="stylesheet"></link>


const links = [
  // { path: "#home", title: "Home" },
  { path: "#aboutme", title: "About" },
  { path: "#projects", title: "Projects" },
  { path: "#skills", title: "Skills" },
  { path: "#contact", title: "Contacts" }
];

function Navbar() {
  const onButtonClick = () => {
    window.open('https://drive.google.com/file/d/122wyJSFMfP61yciEuM2q_JKrYpv2FNFf/view?usp=sharing')
   
  }
  return (
    <Box className="navbarbox">
      <Box  >
        <h1 className='logo navheadname' >{"< Sammyak />"}</h1>
      </Box>
      <Spacer />
      <Box className='navlink' >
        <a className="navresume" target={'_blank'} href={Sammyak_MERN_Resume1} download={true}><Button variant='outline' _hover={{ bg: 'gray.700' }} justifyContent={"space-evenly"} color={"white"} onClick={onButtonClick}><Icon as={RiFileUserLine} />My Resume</Button>
        </a>
        {links.map((link) => (
          <HashLink
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
          <MenuButton height="70%" width="9%" padding={"3"} color="white" _hover={{ bg: 'gray.700' }} as={Button} backgroundColor="#172b4d">
            <HamburgerIcon height="80%" width="80%" />
          </MenuButton>

          <MenuList className="menu" >
            {links.map((link) => (
              <HashLink
                key={link.path}
                smooth to={link.path}
                end>
                <MenuItem className="menuItem"><p>{link.title}</p></MenuItem>
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