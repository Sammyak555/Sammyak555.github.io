import "../css/GitCalender.css"
import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const GitCalender = () => {
  
  return (
    <div className="gitcont">
      {/* <h1 className="stateheading">ＣＡＬＥＮＤＥＲ</h1> */}
      <div className="calender">
      <GitHubCalendar style={{width:"100%"}} blockSize={20} fontSize={20} username="Sammyak555">
</GitHubCalendar>
      </div>
    </div>
  )
}

export default GitCalender