import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-16 px-4 max-w-3xl mx-auto min-h-screen text-center">
          <h1 className="text-2xl font-mono font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4 md:px-8 max-w-3xl mx-auto min-h-screen">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <Badge className="gradient-bg text-primary-foreground text-xs">{post.category}</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {post.date}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold font-mono mb-4">{post.title}</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono text-primary/70 bg-primary/10 px-2 py-0.5 rounded">{tag}</span>
            ))}
          </div>

          <article className="prose-blog">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetail;
