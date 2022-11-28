
import { Avatar, Box, Button, Center, Flex, Heading, Icon, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import  {AiOutlineHeart}  from 'react-icons/ai'
import  {RiAdminFill}  from 'react-icons/ri'
import  {BsHandbag}  from 'react-icons/bs'




export default function Navbar(){
  

  
  return(
    <div>
      <nav className="flex light-bg justify-space">
            <div className="logo white">
                <Link href="/">{"< Sammyak Deosale />"}</Link>
            </div>

            <ul className="flex white">
                
                <li>
                    <Link href="/#about">About</Link>
                </li>
                <li>
                    <Link href="/#skills">Skills</Link>
                </li>
                <li>
                    <Link href="/#projects">Projects</Link>
                </li>
                <li>
                    <Link href="/#contact">Contact</Link>
                </li>
                <li>
                    <Link href="/#contact">Resume</Link>
                </li>
                
            </ul>   
        </nav>
    </div>
  )

}
