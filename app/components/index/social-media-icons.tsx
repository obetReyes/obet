/* eslint-disable @typescript-eslint/no-explicit-any */
import FramerMagnetic from '../framer-magnetic';
import { motion } from 'framer-motion';
import { Github, Book, Facebook } from 'lucide-react';

import { Link } from "react-router-dom";

export const SocialMediaIcons = () => {
    const staggerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i:any) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
            },
        }),
    }

    return (
        <div className="flex gap-8 max-w-4xl mx-auto pb-2">
            {socialMediaLinks.map((link, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    variants={staggerVariants}
                    initial="hidden"
                    animate="visible">
                    <FramerMagnetic>
                        <Link to={link.url} target='_blank' rel="noreferrer">
                            {link.iconComponent}
                        </Link>
                    </FramerMagnetic>
                </motion.div>
            ))}
        </div>
    )
}

const socialMediaLinks = [
    {
        url: 'https://github.com/obetReyes',
        iconComponent:      <Github  size={25} />
   
    },
    {
        url: 'https://www.facebook.com/profile.php?id=61554012882608',
        iconComponent:  <Facebook size={25}  />   
    },
    {
        url: 'https://obetreyes.substack.com/',
        iconComponent:<Book />
    },
];