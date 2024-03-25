/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { GitBranchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectCard = ({ project }:any) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
        >
            <CardContainer className="" containerClassName="">
                <CardBody className="bg-third relative grou/card  w-auto lg:w-[25rem] lg:h-[25rem] h-auto rounded-xl p-6 bg-slate-800 text-white">
                    <CardItem
                        translateZ={50}
                        className="text-xl font-semibold "
                    >
                        {project.title}
                    </CardItem>

                    <CardItem
                        as="p"
                        translateZ={60}
                        className="text-secondary-text text-base max-w-sm mt-2"
                    >
                        {project.description}
                    </CardItem>

                    <CardItem translateZ={100} className="w-full mt-4">
                        <img
                            src={project.image}
                            height="100"
                            width="100"
                            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>

                    <div className="flex justify-between items-center mt-6">
                     

                        {project.linkGithub &&
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl text-white text-xl font-bold hover:bg-secondary"
                            >
                                <Link to={project.linkGithub}><GitBranchIcon /></Link>
                            </CardItem>
                        }
                    </div>
                </CardBody>
            </CardContainer>
        </motion.div>
    )
}

export default ProjectCard