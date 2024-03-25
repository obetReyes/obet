import { motion, useAnimation } from "framer-motion";
import BumbyTextAnim from "../about-text";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
    const control = useAnimation();

    const [ref, inView] = useInView();

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0, transition: { duration: 0.8 }
        },
    };

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <div className="bg-white w-full p-8" id="about">
        <section className=" text-slate-900 mt-5 max-w-2xl mx-auto md:px-8" >

<div className="text-primary-text text-center pb-10">
<BumbyTextAnim text="Acerca de mi" className="text-4xl font-bold" />
</div>
<div className="text-slate-900 md:flex flex-row gap-16 px-4 md:px-0" ref={ref}>
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={control}
        className="flex-1 text-base">
        <p className="pb-3">
       
desde pequeño he tenido gustos por la tecnologia y  la seguridad en mi entorno   ademas  me gusta crear aplicaciones  / software   y participar en el ambito de la interfaz y el servidor 
        </p>

        

        <div className="pb-3">
        tambien me gustan los retos y resolverlos tanto de programacion como en la vida real. ademas disfruto  mucho  de leer e informarme de las cosas en las cuales estoy interesado.
        </div>

       
    </motion.div>

 
</div>
</section>
        </div>

    )
}

export default About