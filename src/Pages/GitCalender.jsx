import "../css/GitCalender.css"
import GitHubCalendar from 'react-github-calendar';
export default function GitCalender(){
    return (
        <>
        {/* <div>
            
            <img className="git_stack" src="https://github-readme-stats.vercel.app/api?username=Nikhil-81&show_icons=true&theme=radical" />
        </div>
        <br/>
        <div>
            <img  className="git_stack" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nikhil-81&theme=chartreuse-dark" />
        </div> */}
        <div className='Git_call' >
        <GitHubCalendar style={{ margin: "auto" }}
            responsive={true} username="Sammyak555" />
        </div>
        </>
    )
}