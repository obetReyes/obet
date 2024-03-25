import { projects } from "~/content";
import ProjectCard from "../Card";
import BumbyTextAnim from "../about-text";

const Projects = () => {
    return (
        <section className="mt-5 max-w-4xl p-8 text-white mx-auto md:px-8" id="projects">
          
            <div className="text-center pb-10">
            <BumbyTextAnim text="proyectos" className="text-4xl font-bold" />
            <p className="">mis proyectos</p>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-0 gap-5">
                {projects.map((project, idx) => (
                    <ProjectCard project={project} key={idx} />
                ))}
            </div>
        </section>
    )
}

export default Projects