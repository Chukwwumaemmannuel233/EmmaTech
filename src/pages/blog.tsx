import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  ArrowRight,
  Calendar,
  Mail,
  Search,
  Tag,
  UserRound,
} from "lucide-react";

type Post = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
};

const posts: Post[] = [
  {
    title: "How to Know When Your Business Needs Custom Software",
    excerpt:
      "A practical guide for teams replacing spreadsheets, manual tracking, or disconnected tools with a better workflow.",
    category: "Software",
    date: "2026-05-10",
    author: "EmmaTech Team",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    tags: ["Software", "Workflow", "Business Tools"],
  },
  {
    title: "Simple Website Improvements That Help Customers Trust You",
    excerpt:
      "Small design, content, speed, and contact-page improvements that make a service business website feel more reliable.",
    category: "Web Design",
    date: "2026-04-28",
    author: "Design Team",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    tags: ["UI/UX", "Trust", "Websites"],
  },
  {
    title: "What Managed IT Support Should Cover for a Growing Team",
    excerpt:
      "A plain-English breakdown of support, maintenance, troubleshooting, and planning for small and growing businesses.",
    category: "IT Support",
    date: "2026-04-14",
    author: "Support Team",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    tags: ["IT Support", "Maintenance", "Operations"],
  },
  {
    title: "SEO Basics Every Local Business Website Should Get Right",
    excerpt:
      "Clear page titles, service pages, local signals, useful content, and technical checks that help search engines understand you.",
    category: "SEO",
    date: "2026-03-30",
    author: "SEO Team",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=1200&q=80",
    tags: ["SEO", "Local Business", "Content"],
  },
  {
    title: "Planning a Digital Project Before You Ask for a Quote",
    excerpt:
      "The questions that help you get a better estimate, avoid confusion, and start your project with more confidence.",
    category: "Consulting",
    date: "2026-03-18",
    author: "Consulting Team",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    tags: ["Planning", "Quotes", "Strategy"],
  },
];

const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [email, setEmail] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        !normalizedQuery ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.tags.join(" ").toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Enter your email.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      toast.error("Enter a valid email.");
      return;
    }

    toast.success("Subscribed", {
      description: "Useful updates only.",
    });
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
          alt="EmmaTech blog and insights"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/90 to-teal-900/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
              Blog & Insights
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Practical technology notes for growing businesses
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Read simple, useful guidance on software, IT support, UI/UX, SEO,
              and planning better digital projects.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.35fr] gap-8 items-start">
            <div>
              <div className="bg-white border border-gray-100 p-4 mb-8 flex flex-col md:flex-row gap-3">
                <div className="flex-1 flex items-center gap-3 border border-gray-200 px-4 py-3">
                  <Search className="h-5 w-5 text-gray-400" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search insights"
                    className="w-full outline-none text-gray-900"
                  />
                </div>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-gray-200 px-4 py-3 bg-white text-gray-900 outline-none"
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    className="bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 mb-4">
                        <Tag className="h-4 w-4" />
                        {post.category}
                      </span>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-5">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-5">
                        <span className="inline-flex items-center gap-2">
                          <UserRound className="h-4 w-4" />
                          {post.author}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                      >
                        Ask about this
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-white border border-gray-100 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  About this blog
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We write for business owners and teams that want technology
                  explained clearly before they invest in a project.
                </p>
              </div>

              <div className="bg-gray-950 text-white p-6">
                <Mail className="h-8 w-8 text-blue-300 mb-4" />
                <h2 className="text-xl font-bold mb-3">Get useful updates</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  Occasional notes on software, websites, IT support, and SEO.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full px-4 py-3 bg-white text-gray-900 outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-3 font-semibold transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
