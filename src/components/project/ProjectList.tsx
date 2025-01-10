import ProjectCard from "./ProjectCard";
import {fetchProjects} from "@/lib/contentful/projects"

function parseUrl(url? : string) : string {
    if(!url){
        return "/ov-high-resolution-logo-black.png"
    }

    return "https:" + url
}

const ProjectList = async () => {

    const projects = await fetchProjects();

    return (
        // <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        //     {projects.map((p, index) => (
                
        //         <ProjectCard key={index} img={p.image} title={p.title} text={p.description} url={p.url}/>
        //     ))}
        // </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((p, index) => {
                let image = {
                    url : parseUrl(p.image?.url),
                    alt : p.image?.alt || "",
                    width : p.image?.width || 0,
                    height : p.image?.height || 0
                }

                return(<ProjectCard key={index} img={image} title={p.title} text={p.description} url={p.url}/>)
            })}
        </div>
    )
}

export default ProjectList;
