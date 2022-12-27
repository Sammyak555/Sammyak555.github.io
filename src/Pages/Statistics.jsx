
import "../css/Stats.css"
import React from 'react'

const Statistics = () => {
  return (
    <div className="statistics">
      <h1 className="stateheading">ＧＩＴＨＵＢ  ＳＴＡＴＩＳＴＩＣＳ</h1>
      <div className="statisticsbox">
        <div className="state1" >
          <div className="state1a">
          <a href="https://github.com/Sammyak555">
            <img src="https://github-readme-streak-stats.herokuapp.com?user=Sammyak555&theme=radical&theme=sea&border_radius=10.2&date_format=j%20M%5B%20Y%5D" alt="" />
          </a>
          </div>
        </div>
        <div className="state2">
          <div className="state2a">
          <a href="https://github.com/Sammyak555">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sammyak555&theme=default&show_icons=true&border_radius=10.2&date_format=j%20M%5B%20Y%5D"
              alt="err"  //launguages
            />
          </a>
          </div>
          <div className="state2b">
          <a href="https://github.com/Sammyak555">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Sammyak555&count_private=true&theme=sea&show_icons=true&border_radius=10.2&date_format=j%20M%5B%20Y%5D"
              alt="err" //stats
            />
          </a>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Statistics