import { ClipboardMinus, Code, Home, User } from "lucide-react";

export const navItems = [
    {
        name: "Incio",
        href:"home",
        icon: (
            <Home className="h-4 w-4 fill-white hover:fill-secondary"  />
        ),
    },
    {
        name: "Proyectos",
        href:"projects",
        icon: (
            <User className="h-4 w-4 fill-white hover:fill-secondary"  />
        ),
    },
    {
        name: "Acerca de mi",
        href:"about",
        icon: (
            <Code className="h-4 w-4 fill-white hover:fill-secondary"  />
        ),
    },
    {
        name: "Blog",
        href:"blog",
        icon: (
            <ClipboardMinus className="h-4 w-4 fill-white hover:fill-secondary"  />
        ),
    },
];