import React, { useEffect } from 'react'
import "../css/Projects.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
// import background from "../download/background.mov"
import Slideone from '../Components/Slideone'
import Slidetwo from '../Components/Slidetwo'
import { ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const Projects = () => {
  useEffect(() => {
    AOS.init({duration:"1500"});
  }, [])
  return (
    <div className="projectsbox" id="projects">
      <div className='fakebox'></div>
      <h1 >ＰＲＯＪＥＣＴＳ</h1>
      <div  className="projectsgridbox">

        <Card data-aos="fade-up" 
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          bgColor={'#336699'}
          padding='2'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://miro.medium.com/max/1400/1*eA7TAy4ObVcCoo-TGtsTAQ.jpeg'
            alt='myntra'
          />

          <Stack>
            <CardBody>
              <Heading size='md' color={'#7cad3e'}>Myntra Clone Website</Heading>
              <Text align={'start'} color='#C0C0C0' fontSize='xl'>
                Tech-Stack :
              </Text>
              <Text py={'-0.5'} align={'start'} color='white'>
              <ChevronRightIcon /> CSS, ReactJs, Redux, Redux-Thunk, Chakra-Ui.
              </Text>
              <Text  align={'start'} color='#C0C0C0' fontSize='xl'>
                Features :
              </Text>
              <Text py={'-0.5'} align={'start'} color='white'>
                <p><ChevronRightIcon /> Authentication</p>
                <p><ChevronRightIcon />  Sort products by brand or price range</p>
                <p><ChevronRightIcon />  Filter by popularity or price </p>
                <p><ChevronRightIcon />  Adding products to cart</p>
                <p><ChevronRightIcon />  Payment Page</p>
              </Text>
            </CardBody>
            <CardFooter py={'-1.5'}>
              <ButtonGroup spacing='5'>
                <Button variant='solid' color={'white'} backgroundColor='#7cad3e'>
                  Go Live
                </Button>
                <a href={'https://github.com/Sammyak555/Myntra-clone'}><Button color={'#7cad3e'} variant='solid' backgroundColor='white'>
                  GitHub Link
                </Button></a>
              </ButtonGroup>
            </CardFooter>
          </Stack>
        </Card>


        <Card data-aos="fade-up" 
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          bgColor={'GrayText'}
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>The perfect latte</Heading>

              <Text py='2'>
                Caffè latte is a coffee beverage of Italian origin made with espresso
                and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
        </Card>

        
      </div>
    </div>
  )
}