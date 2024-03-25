/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    motion,
    AnimatePresence,
} from "framer-motion";
import { Link, animateScroll } from 'react-scroll';
import { navItems } from "~/content/navItems";

interface Props{
    className?:string
    visible:boolean
}



export const FloatingNavBar = ({ className, visible }:Props) => {
    const scrollToTop = (navItem:any) => {
        if (navItem.href === '#home') {
            animateScroll.scrollToTop();
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={`flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4 ${className}`}
            >
                {navItems.map((navItem, idx) => (
                    <Link
                        to={navItem.href}
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-50}
                        activeClass="active"
                        onClick={() => 
                            scrollToTop
                        }
                        key={`link=${idx}`}
                        className={`relative items-center flex space-x-1 text-slate-900 transition-li hover:transform-li cursor-pointer ${className}`}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm md:text-base ">{navItem.name}</span>
                    </Link>
                ))}
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-50}
                    activeClass="active"
                    className="border text-sm md:text-base font-medium relative border-neutral-200 text-primary  px-4 py-2 rounded-full cursor-pointer">
                    <span>Contacto</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-secondary to-transparent  h-px" />
                </Link>
            </motion.div>
        </AnimatePresence >
    );
};
