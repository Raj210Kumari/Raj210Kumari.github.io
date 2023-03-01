import { Box, Flex, Spacer,  useMediaQuery, IconButton, Button, Text, Divider } from "@chakra-ui/react"
import Resume from "../fw18-1045-Rajnandani-Kumari-Resume.pdf"
import "./Styles/Navbar.css"

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
   
  } from '@chakra-ui/react'

  import {  HamburgerIcon } from '@chakra-ui/icons'
// import {  yellow, headline, red } from "../theme/color"
// import { toggleClick } from "../Toggle/ToggleClick"




const Navbar = () => {
    const [navMid] = useMediaQuery('(min-width: 900px)')

    function toggleClick(id){
        console.log("done")
        let value = document.getElementById(id)
        let dec = 90
        if(id==="about"){
            dec = 160
        }
        window.scrollTo({top:value.offsetTop-dec,behavior:"smooth"})
     }
   

    return (
        <>
        <Flex className="navbarMainDiv">
            <Box>
                <Text> <b style={{fontSize:"24px", marginLeft:"40px"}}> Rajnandani  </b></Text>
            </Box>
            <Spacer/>

            <Box >
           { navMid && <Box className="navButtons">
                <Button onClick={()=>toggleClick("home")}>Home</Button>
                <Button onClick={()=>toggleClick("about")} >About Me</Button>
                <Button onClick={()=>toggleClick("skill")} >Skills</Button>
                <Button onClick={()=>toggleClick("project")} >Projects</Button>
                <Button onClick={()=>toggleClick("contact")}>Contact</Button>
                <Button><a href={Resume} download="fw18-1045-Rajnandani-Kumari-Resume.pdf" onClick={()=>window.open('https://drive.google.com/file/d/18ogbzR1xeFjQYVKSx3g851M0Xefp_a6N')}>Resume</a></Button>
            </Box>
            }
            {/*   */}
            { 
            !navMid && <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
                variant='outline'
                style={{width:"30px",height:"40px",background:"021872"}}
              />
            <MenuList className="menuBar">
              <MenuItem onClick={()=>toggleClick("home")} className="menuBarSection"> Home</MenuItem>
              <MenuItem onClick={()=>toggleClick("about")} className="menuBarSection">About Me</MenuItem>
              <MenuItem onClick={()=>toggleClick("skill")} className="menuBarSection">skills</MenuItem>
              <MenuItem onClick={()=>toggleClick("project")} className="menuBarSection">Projects</MenuItem>
              <MenuItem onClick={()=>toggleClick("contact")} className="menuBarSection"> Contact</MenuItem>
              <MenuItem onClick={()=>window.open('https://drive.google.com/file/d/18ogbzR1xeFjQYVKSx3g851M0Xefp_a6N')} className="menuBarSection"> <a href={Resume} download="fw18-1045-Rajnandani-Kumari-Resume.pdf">Resume</a></MenuItem>
            </MenuList>
          </Menu>
            }   
            </Box>
        </Flex>
        <Divider orientation='horizontal' />
        </>
    )

}

export default Navbar;