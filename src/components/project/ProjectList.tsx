import ProjectCard from "./ProjectCard";
import {fetchProjects} from "@/lib/contentful/projects"

interface project {
    img : string;
    title : string;
    text : string;
}

const ProjectList = async () => {

    const projects = await fetchProjects();

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((p, index) => (
                <ProjectCard key={index} img="/ov-high-resolution-logo-black.png" title={p.title} text={p.description} url={p.url}/>
            ))}
        </div>
    )
}

export default ProjectList;
