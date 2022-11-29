import { Heading } from "@chakra-ui/react"


export const Skills=()=>{
    return(
        <div>
            <Heading >Skills</Heading>
            <div className="skills">
            <div className="skillcard">
                <img src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt="html" />
                <h3 className="white">HTML 5</h3>
            </div>
            <div className="skillcard">
                <img src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt="css3" />
                <h3 className="white">CSS 3</h3>
            </div>
            <div className="skillcard">
                <img src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt="js" />
                <h3 className="white">JavaScript</h3>
            </div>
            <div className="skillcard">
                <img src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt="react" />
                <h3 className="white">React.Js</h3>
            </div>
            <div className="skillcard">
                <img src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" alt="redux" />
                <h3 className="white">Redux</h3>
            </div>
            <div className="skillcard">
                <img src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg" alt="node" />
                <h3 className="white">node.Js</h3>
            </div>
            <div className="skillcard">
                <img style={{marginTop:"52.5px",height:"105px",marginBottom:"52.5px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&usqp=CAU" alt="" />
                <h3 className="white">Express.Js</h3>
            </div>
            <div className="skillcard">
                <img src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg" alt="mongodb" />
                <h3 className="white">MongoDB</h3>
            </div>
            <div className="skillcard">
                <img src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4" alt="chakra-ui" />
                <h3 className="white">Chakra UI</h3>
            </div>
            <div className="skillcard">
                <img src="https://chiranjeev-thapliyal.vercel.app/svg/git.svg" alt="git" />
                <h3 className="white">GitHub</h3>
            </div>
            <div className="skillcard">
                
                <h3 className="white"></h3>
            </div>
            <div className="skillcard">
              
                <h3 className="white"></h3>
            </div>
        </div>
        </div>
    )
}