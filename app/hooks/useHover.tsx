/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useEffect, useState } from "react";

export default function useHover3d(ref:any, { x = 0, y = 0, z = 0 }) {
    const [coords, setCoords] = useState<any>({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState<any>(false);

    const handleMouseMove = (e:any) => {
        const { offsetWidth: width, offsetHeight: height } = ref.current;
        const { clientX, clientY } = e;

        const x = (clientX - width / 2) / width;
        const y = (clientY - height / 2) / height;

        setCoords({ x, y });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        const { current } = ref;

        current.addEventListener("mousemove", handleMouseMove);
        current.addEventListener("mouseenter", handleMouseEnter);
        current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            current.removeEventListener("mousemove", handleMouseMove);
            current.removeEventListener("mouseenter", handleMouseEnter);
            current.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [ref]);

    const { x: xCoord, y: yCoord } = coords;

    const xTransform = isHovering ? xCoord * x : 0;
    const yTransform = isHovering ? yCoord * y : 0;
    const zTransform = isHovering ? z : 0;

    const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`;
    const transition = isHovering ? "none" : "transition-all duration-500 ease";

    return { transform, transition };
}