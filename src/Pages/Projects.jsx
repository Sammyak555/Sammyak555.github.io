import React from 'react'
import "../css/Projects.css"
// import background from "../download/background.mov"
import Slideone from '../Components/Slideone'
import Slidetwo from '../Components/Slidetwo'
import {ArrowRightIcon} from "@chakra-ui/icons"
export const Projects=()=>{

    return(
        <div   className="projectsbox" id="projects">
      <video   className="projectvideo"  autoPlay loop muted/>

      <div className='fakebox'></div>
      <h1>Projects</h1>
      <div className="projectsgridbox">
           <div className='projectcard'>
           <div className='pdetails'>
                <div className='slides'>
                 <Slideone/>

                </div>
                <div className='details'>
                      <div className='title' color='#5ddcff'>
                     <span>Title :- Myntra.co.in(clone Website)</span>

                      </div>
                      <div className='tool'>
                        <span>Tech Stacks </span><span>:- React , Chakra-UI , Firebase , Css</span>
                      </div>
                      <div className='features'>
                        <span>It is ecommmerce webiste here you can buy products</span>
                       <h6>Features</h6>
                       <div>
                       <p><ArrowRightIcon/>  Authentication</p>
                       <p><ArrowRightIcon/>  sort by category or price</p>
                       <p><ArrowRightIcon/>  filter by Brand of product</p>
                       <p><ArrowRightIcon/>  Add to wishlist and Cart</p>
                       </div>

                      </div>
                      <div className='links'>
                      <a href="https://github.com/Sammyak555/ossified-celery-3594"> <button>Github</button></a> 
                      <a href=""><button>Deploy link</button></a>
                        {/* <a href=""><button>Demo Vedio</button></a> */}
                        
                      </div>
                </div>

            </div>

          </div>

          <div className='projectcard'>
           <div className='pdetails'>
                <div className='slides'>
                <Slidetwo/>

                </div>
                <div className='details'>
                      <div className='title' color='#5ddcff'>
                     <span>Title :- Geekbuing.com</span>

                      </div>
                      <div className='tool'>
                        <span>Tech Stacks </span><span>:- HTML,javaScript,Css</span>
                      </div>
                      <div className='features'>
                        <span>It is ecommmerce webiste here you can buy or cell products</span>
                       <h6>Features</h6>
                       <div>
                       <p><ArrowRightIcon/>  Authentication</p>
                       <p><ArrowRightIcon/>  sort by category or price</p>
                       <p><ArrowRightIcon/>  sort by brands</p>
                       <p><ArrowRightIcon/>  Searchbar </p>
                       </div>

                      </div>
                      <div className='links'>
                     <a href="https://github.com/akashkanade9182/Geekbuyingapp"><button>Github</button></a>
                     <a href=""><button>Deploy link</button></a>
                        {/* <a href=""><button>Demo Vedio</button></a> */}
                        
                      </div>
                </div>

            </div>

          </div>

          <div className='projectcard'>
           <div className='pdetails'>
                <div className='slides'>
                <Slidetwo/>
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
                       <p><ArrowRightIcon/>  Authentication</p>
                       <p><ArrowRightIcon/>  sort by category or price</p>
                       <p><ArrowRightIcon/>  filter by location of user</p>
                       <p><ArrowRightIcon/>  Searchbar to earc</p>
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