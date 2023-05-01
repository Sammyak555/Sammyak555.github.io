import GitHubCalendar from "react-github-calendar";
import Tooltips from "react-tooltip";


const GitHubCalendarComponent = () => {
  return (
    <div className="flex flex-col justify-center  justify-items-stretch h-full w-full mx-auto mt-5">
     
      <div className="react-activity-calendar">
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="Sammyak555"
          blockSize={15}
          fontSize={15}
          colorScheme='light'
        >
          {/* <Tooltips delayShow={20} html /> */}
        </GitHubCalendar>
      </div>
      
    </div>
  );
};

export default GitHubCalendarComponent;
