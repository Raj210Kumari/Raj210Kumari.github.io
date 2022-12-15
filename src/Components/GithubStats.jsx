import { Center } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import "./Styles/GithubStats.css";


export function GithubStats() {
  return (
    <div >
      <h1>
        Statistics
      </h1>
      <div className="gitStatsDetails">
        <div>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Raj210Kumari&theme=dark"
            alt="Github Contributions"
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api?username=Raj210Kumari&theme=dark&show_icons=true&count_private=true"
            alt="Github Contributions"
          />
        </div>
      </div>

      <div className="gitCalanderDetails">
        <Center >
          <GitHubCalendar username="Raj210Kumari" />
        </Center>
      </div>
    </div>
  );
}
