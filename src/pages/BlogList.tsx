import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, blogCategories, BlogCategory } from "@/data/blog";

const BlogList = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto min-h-screen">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-4xl font-bold font-mono mb-2">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-muted-foreground mb-8">Thoughts on AI, web development, QA, and research.</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-secondary/50"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {["All", ...blogCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as BlogCategory | "All")}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? "gradient-bg text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="block glass rounded-lg p-6 hover-glow transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary" className="text-xs font-mono">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="font-mono text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono text-primary/70 bg-primary/10 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                    <ArrowRight className="h-3 w-3 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">No posts found.</p>
            )}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default BlogList;
