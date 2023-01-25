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
            src='https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/10/05/Photos/nykaa1-kvEC--621x414@LiveMint.jpg'
            alt='nykaa'
          />

          <Stack>
            <CardBody>
              <Heading size='md' color={'#A3C577'}>Nykaa  Website</Heading>
              <Text align={'start'} color='white' fontSize='15px'>
                It is a clone of e-commerce website Nykaa.com
              </Text>
              <Text align={'start'} color='#C0C0C0' fontSize='xl'>
                Tech-Stack :
              </Text>
              <Text py={'-0.5'} align={'start'} color='white'>
              <ChevronRightIcon /> CSS, ReactJs, Redux, Redux-Thunk, Chakra-Ui, node.js, express.js, mongoDB
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
                <p><ChevronRightIcon />  Admin Panel </p>
              </Text>
            </CardBody>
            <CardFooter py={'-1.5'}>
              <ButtonGroup spacing='5'>
                <a href="https://frontend-three-coral.vercel.app/">
                <Button variant='solid' color={'white'} backgroundColor='#7cad3e'>
                  Go Live
                </Button>
                </a>
                <a href={'https://github.com/Saurav02022/Nykaa-Clone'}><Button color={'#7cad3e'} variant='solid' backgroundColor='white'>
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
          bgColor={'#336699'}
          padding='2'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://repository-images.githubusercontent.com/540342974/fd1ce63c-54d6-4082-ad20-c1439973e7b1'
            alt='myntra'
          />

          <Stack>
            <CardBody>
              <Heading size='md' color={'#A3C577'}>Myntra  Website</Heading>
              <Text align={'start'} color='white' fontSize='15px'>
                It is a clone of e-commerce website myntra.com
              </Text>
              <Text align={'start'} color='#C0C0C0' fontSize='xl'>
                Tech-Stack :
              </Text>
              <Text py={'-0.5'} align={'start'} color='white'>
              <ChevronRightIcon /> CSS, ReactJs, Redux, Redux-Thunk, Chakra-Ui
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
                <a href="https://shopversemyntra.netlify.app">
                <Button variant='solid' color={'white'} backgroundColor='#7cad3e'>
                  Go Live
                </Button>
                </a>
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
          bgColor={'#336699'}
          padding='2'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://github.com/Nikhil-81/sleek-chance-4491/raw/main/bigbasket/Home.PNG'
            alt='bigbasket'
          />

          <Stack>
            <CardBody>
              <Heading size='md' color={'#A3C577'}>BigBasket Website</Heading>
              <Text align={'start'} color='white' fontSize='15px'>
                It is a clone of e-commerce website BigBasket.com
              </Text>
              <Text align={'start'} color='#C0C0C0' fontSize='xl'>
                Tech-Stack :
              </Text>
              <Text py={'-0.5'} align={'start'} color='white'>
              <ChevronRightIcon /> CSS, ReactJs, Redux, Redux-Thunk, Chakra-Ui
              </Text>
              <Text  align={'start'} color='#C0C0C0' fontSize='xl'>
                Features :
              </Text>
              <Text py={'-0.5'} align={'start'} color='white'>
                <p><ChevronRightIcon /> Authentication</p>
                <p><ChevronRightIcon />  Sort products by brand or price range</p>
                <p><ChevronRightIcon />  Filter by popularity or price </p>
                <p><ChevronRightIcon />  Adding products to cart</p>
                <p><ChevronRightIcon />  Payment Page </p>
              </Text>
            </CardBody>
            <CardFooter py={'-1.5'}>
              <ButtonGroup spacing='5'>
                <a href="https://vaibhav-firke-makes-great-sites-e8301.netlify.app/"><Button variant='solid' color={'white'} backgroundColor='#7cad3e'>
                  Go Live
                </Button></a>
                <a href={'https://github.com/Nikhil-81/sleek-chance-4491/tree/main/bigbasket'}><Button color={'#7cad3e'} variant='solid' backgroundColor='white'>
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
          bgColor={'#336699'}
          padding='2'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://global.discourse-cdn.com/brave/original/3X/0/0/00a39d3d720044feecaa8e14d435f8f6d6bc686d.jpeg'
            alt='indeed'
          />

          <Stack>
            <CardBody>
              <Heading size='md' color={'#A3C577'}>Indeed Website</Heading>
              <Text align={'start'} color='white' fontSize='15px'>
                It is a clone of job search website indeed.com
              </Text>
              <Text align={'start'} color='#C0C0C0' fontSize='xl'>
                Tech-Stack :
              </Text>
              <Text py={'-0.5'} align={'start'} color='white'>
              <ChevronRightIcon /> CSS, HTML, JavaScript, LocalStorage
              </Text>
              <Text  align={'start'} color='#C0C0C0' fontSize='xl'>
                Features :
              </Text>
              <Text py={'-0.5'} align={'start'} color='white'>
              <p><ChevronRightIcon /> Authentication</p>
                <p><ChevronRightIcon />  Job search and Apply job</p>
                <p><ChevronRightIcon />  Salary guide </p>
                <p><ChevronRightIcon />  Company Details Page</p>
              </Text>
            </CardBody>
            <CardFooter py={'-1.5'}>
              <ButtonGroup spacing='5'>
                <a href="https://deft-florentine-9618bc.netlify.app/"><Button variant='solid' color={'white'} backgroundColor='#7cad3e'>
                  Go Live
                </Button></a>
                <a href={'https://github.com/akshaykadu24/Indeed.com-Clone'}><Button color={'#7cad3e'} variant='solid' backgroundColor='white'>
                  GitHub Link
                </Button></a>
              </ButtonGroup>
            </CardFooter>
          </Stack>
        </Card>

      </div>
    </div>
  )
}