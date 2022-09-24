import GithubIcon from "@material-ui/icons/GitHub";
import Link from '@material-ui/core/Link';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
          <h2 className="homeTitle">
          <span>Hi, My Name is Matheus</span>
        </h2>
        <div className="icon">
          <p>Passion for learning and creating.</p>
          <Link href="https://github.com/MatheusCTorres" target="_blank" >
            <GithubIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li>
            <h2> Front-End</h2>
            <hr />
            <span>ReactJS, HTML, CSS, BootStrap, Styled-Components</span>
          </li>
          <li>
            <h2>Back-End</h2>
            <hr />
            <span>NodeJS, MySQL, MongoDB, SQL</span>
          </li>
          <li>
            <h2>Languages</h2>
            <hr />
            <span>JavaScript, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
