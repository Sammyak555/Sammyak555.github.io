// import "../css/GitCalender.css"
// import GitHubCalendar from 'react-github-calendar';
// import React from 'react'
// import ReactTooltip from "react-tooltip";
// const Calendor = () => {
//     const selectLastHalfYear = contributions => {
//         const currentYear = new Date().getFullYear();
//         const currentMonth = new Date().getMonth();
//         const shownMonths = 7;
      
//         return contributions.filter(day => {
//           const date = new Date(day.date);
//           const monthOfDay = date.getMonth();
      
//           return (
//             date.getFullYear() === currentYear &&
//             monthOfDay > currentMonth - shownMonths &&
//             monthOfDay <= currentMonth
//           );
//         });
//       };
//   return (
//     <div className="calendor">
//          <h1 className='calheading'>My Github Calendor</h1>  
//     <div className='calendorbox'>
//     <GitHubCalendar
//     style={{margin:"auto"}}
//      username="Sammyak555" 
//      transformData={selectLastHalfYear}
//      blockSize={20}
//      fontSize={20}
//      hideColorLegend={false}
     
//      >
//         <ReactTooltip delayShow={20} html/>


//       </GitHubCalendar>
      
//     </div>
//     </div>
//   )
// }

// export default Calendor