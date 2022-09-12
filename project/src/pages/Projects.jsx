import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../data";
import { motion } from "framer-motion";
import "../styles/Projects.css";

function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="projects">
            <h1> My Personal Projects</h1>
            <div className="projectList">
                {ProjectList.map((project, idx) => {
                    return (
                        <ProjectItem id={idx} name={project.name} image={project.image} />
                    );
                })}
            </div>
        </motion.div>
    );
}

export default Projects;