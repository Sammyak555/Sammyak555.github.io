import React from 'react'
import "../css/Projects.css"
// import background from "../download/background.mov"
import Slideone from '../Components/Slideone'
import Slidetwo from '../Components/Slidetwo'
import { ArrowRightIcon } from "@chakra-ui/icons"
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
export const Projects = () => {

  return (
    <div className="projectsbox" id="projects">
      <video className="projectvideo" autoPlay loop muted />

      <div className='fakebox'></div>
      <h1>Projects</h1>
      <div className="projectsgridbox">

        <Card 
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
              <Heading size='md' color={'yellow.300'}>Myntra Clone WebSite</Heading>
              <Text align={'start'} color='blue.700' fontSize='xl'>
                Tech-Stack :
                <span style={{ color: "white", fontSize: "15px" }}> CSS, ReactJs, Redux, Redux-Thunk, Chakra-Ui .</span>
              </Text>
              <Text  align={'start'} color='blue.700' fontSize='xl'>
                Features :
              </Text>
              <Text py={'-0.5'} align={'start'}>
                <p><ArrowRightIcon /> Authentication</p>
                <p><ArrowRightIcon />  Sort products by brand or price range</p>
                <p><ArrowRightIcon />  Filter by popularity or price </p>
                <p><ArrowRightIcon />  Adding products to cart</p>
                <p><ArrowRightIcon />  Payment Page</p>
              </Text>
            </CardBody>
            <CardFooter py={'-1.5'}>
              <ButtonGroup spacing='5'>
                <Button variant='solid' colorScheme='blue'>
                  Go Live
                </Button>
                <Button variant='solid' colorScheme='blue'>
                  GitHub Link
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Stack>
        </Card>


        <Card
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

        <div className='projectcard'>
          <div className='pdetails'>
            <div className='slides'>
              <Slidetwo />
            </div>
            <div className='details'>
              <div className='title' color='#5ddcff'>
                <span>Title :- Olx.on(clone Website)</span>

              </div>
              <div className='tool'>
                <span>Tech Stacks </span><span>:- React , Chakra-UI , Firebase , Css</span>
              </div>
              <div className='features'>
                <span>It is ecommmerce webiste here you can buy or cell second hand products</span>
                <h6>Features</h6>
                <div>
                  <p><ArrowRightIcon />  Authentication</p>
                  <p><ArrowRightIcon />  sort by category or price</p>
                  <p><ArrowRightIcon />  filter by location of user</p>
                  <p><ArrowRightIcon />  Searchbar to earc</p>
                </div>

              </div>
              <div className='links'>
                <a href="https://github.com/fw190480/splendid-rhythm-293"><button>Github</button></a>
                <a href=""><button>Deploy link</button></a>
                {/* <a href=""><button>Demo Vedio</button></a> */}

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}