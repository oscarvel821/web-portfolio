import ProjectList from "@/components/project/ProjectList";

const ProjectsPage = () => {
  return (
    <main className="p-4 grow">
      <section className="">
        <h1 className="text-4xl font-medium">Projects</h1>
      </section>
      <section className="mt-5">
        <div className="">
          <ProjectList />
        </div>
      </section>
    </main>
  )
}


export default ProjectsPage;
