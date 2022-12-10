
import "../css/Stats.css"
import React from 'react'

const Statistics = () => {
  return (
    <div className="statistics">
        <h1 className="stateheading">Github Statistics</h1>
        <div className="statisticsbox">
          <div className="state1" style={{margin:"auto"}}>
            <a href="https://github.com/Sammyak555">
              <img src="https://github-readme-streak-stats.herokuapp.com?user=Sammyak555&theme=radical&theme=algolia&border_radius=17.2&date_format=j%20M%5B%20Y%5D" alt="" />
            </a>
            
          </div>
          <div className="state2"
        style={{
        
        
          display: "flex",
          margin: "auto",
        }}
      >
        <a href="https://github.com/Sammyak555">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sammyak555&theme=algolia&show_icons=true&border_radius=17.2&date_format=j%20M%5B%20Y%5D"
            alt="err"  //launguages
          />
        </a>
        <a href="https://github.com/Sammyak555">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=Sammyak555&count_private=true&theme=algolia&show_icons=true&border_radius=17.2&date_format=j%20M%5B%20Y%5D" 
            alt="err" //stats
          />
        </a>
      </div>
            

        </div>

    </div>
  )
}

export default Statistics