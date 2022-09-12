import GithubIcon from "@material-ui/icons/GitHub";
import Link from '@material-ui/core/Link';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Link href="https://github.com/MatheusCTorres" target="_blank" >
                    <GithubIcon />
                </Link>
            </div>
            <p> &copy; 2022 Matheus Torres</p>
        </div>
    );
}

export default Footer;