import { useParams } from "react-router-dom"
import { motion } from "framer-motion";
import { ProjectList } from '../data'
import GitHubIcon from '@material-ui/icons/GitHub'
import Link from '@material-ui/core/Link';
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {

    const { id } = useParams()
    const project = ProjectList[id]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="project">
            <h1>{project.name}</h1>
            <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src={project.image} alt="project" />
            <p>
                <b>Skills:</b>{project.skills}
            </p>
            <Link href={project.url} target="_blank" >
                <GitHubIcon />
            </Link>
        </motion.div>
    )
}

export default ProjectDisplay