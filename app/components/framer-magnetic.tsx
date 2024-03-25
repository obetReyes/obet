/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface Props{
    children:JSX.Element
}
const FramerMagnetic = ({ children }:Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e:any) => {
        const { clientY, clientX } = e;
        if(ref.current){
    
  const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        setPosition({ x: middleX, y: middleY })
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    };

    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div >
    )
}

export default FramerMagnetic