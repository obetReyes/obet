import type { MetaFunction } from "@remix-run/node";
import Contact from "~/components/index/contact";
import Hero from "~/components/index/Hero";
import About from "~/components/index/about";
import { BlogLinks } from "~/components/index/blog-links";
import Projects from "~/components/index/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
 <>
 <Hero/>
 <Projects/>
      <About/>
    <BlogLinks/>
    <Contact/>
 </>
      

  );
}
