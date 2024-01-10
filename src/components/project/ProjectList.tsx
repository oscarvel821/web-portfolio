import ProjectCard from "./ProjectCard";

interface project {
    img : string;
    title : string;
    text : string;
}

const ProjectList = () => {

    const projects : project[] = [
        {
            img : "/ov-high-resolution-logo-black.png",
            title : "Project Title 1",
            text : "Project Info 1"
        },
        {
            img : "/ov-high-resolution-logo-black.png",
            title : "Project Title 2",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            img : "/ov-high-resolution-logo-black.png",
            title : "Project Title 3",
            text : "Project Info 3"
        }
    ]

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((p, index) => (
                <ProjectCard img={p.img} title={p.title} text={p.text} />
            ))}
        </div>
    )
}

export default ProjectList;
