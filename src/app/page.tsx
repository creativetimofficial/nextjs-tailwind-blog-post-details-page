// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Content from "./content";
import Comments from "./comments";
import BlogPosts from "./blog-posts";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Comments />
      <BlogPosts />
      <Footer />
    </>
  );
}
