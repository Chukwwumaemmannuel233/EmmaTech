// BlogPage.tsx
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PenSquare,
  Calendar,
  Tag as TagIcon,
  User,
  Search,
  ArrowRight,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string; // ISO
  category: string;
  tags: string[];
  image: string;
  slug: string;
};

const POSTS: Post[] = [
  // --- Core posts ---
  {
    id: 1,
    title: "Scaling React Apps: Lessons from Our Latest Release",
    excerpt:
      "A deep dive into our performance playbook—code-splitting, route-level caching, and smart bundle budgets.",
    author: "TechFlow Team",
    date: "2025-02-01",
    category: "Engineering",
    tags: ["React", "Performance", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    slug: "scaling-react-apps-lessons",
  },
  {
    id: 2,
    title: "2025 Security Best Practices You Should Adopt Now",
    excerpt:
      "From MFA everywhere to key rotation and zero-trust networking—what we actually implement in production.",
    author: "Security Team",
    date: "2025-01-20",
    category: "Security",
    tags: ["Security", "MFA", "Best Practices"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=1200&q=80",
    slug: "2025-security-best-practices",
  },
  {
    id: 3,
    title: "Design Systems That Scale: Our Tailwind Approach",
    excerpt:
      "How we use Tailwind tokens, components, and lint rules to keep design consistent across products.",
    author: "Design Team",
    date: "2025-01-12",
    category: "Design",
    tags: ["Tailwind", "Design System", "UI"],
    image:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1200&q=80",
    slug: "design-systems-that-scale",
  },
  {
    id: 4,
    title: "From Monolith to Services: Our Migration Story",
    excerpt:
      "The good, the messy, and the wins: observability, contracts, and CI/CD we wish we had sooner.",
    author: "Platform Team",
    date: "2024-12-10",
    category: "Architecture",
    tags: ["Microservices", "DevOps", "CI/CD"],
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
    slug: "from-monolith-to-services",
  },
  {
    id: 5,
    title: "Mobile Performance: RN + Native Modules Done Right",
    excerpt:
      "Bridging, profiling, and minimizing over-the-wire data—our checklist for buttery-smooth apps.",
    author: "Mobile Team",
    date: "2025-02-10",
    category: "Mobile",
    tags: ["React Native", "Performance", "Mobile"],
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    slug: "mobile-performance-rn-native-modules",
  },
  {
    id: 6,
    title: "Why TypeScript Wins in 2025",
    excerpt:
      "Type safety and DX matter more than ever. Here’s why we’re all-in on TS across frontend and backend.",
    author: "TechFlow Team",
    date: "2025-01-28",
    category: "Engineering",
    tags: ["TypeScript", "DX", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1200&q=80",
    slug: "why-typescript-wins-2025",
  },
  {
    id: 7,
    title: "Zero Trust Architecture in Practice",
    excerpt:
      "Beyond the buzzword: practical steps we took to enforce least privilege and continuous verification.",
    author: "Security Team",
    date: "2025-01-15",
    category: "Security",
    tags: ["Zero Trust", "Networking", "Security"],
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c44367d?auto=format&fit=crop&w=1200&q=80",
    slug: "zero-trust-architecture-practice",
  },
  {
    id: 8,
    title: "Accessibility as a Feature, Not an Afterthought",
    excerpt:
      "How we bake a11y into design reviews, code reviews, and automated checks.",
    author: "Design Team",
    date: "2025-01-05",
    category: "Design",
    tags: ["Accessibility", "UI", "Inclusive Design"],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    slug: "accessibility-as-a-feature",
  },
  {
    id: 9,
    title: "CI/CD Pipelines That Don’t Break the Bank",
    excerpt:
      "Optimizing build times, caching strategies, and cost monitoring in cloud-native pipelines.",
    author: "Platform Team",
    date: "2024-11-22",
    category: "Architecture",
    tags: ["CI/CD", "DevOps", "Automation"],
    image:
      "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=1200&q=80",
    slug: "cicd-pipelines-cost-optimized",
  },
  {
    id: 10,
    title: "Optimizing Mobile Animations for Performance",
    excerpt:
      "GPU offloading, batching, and frame budget management for smooth experiences.",
    author: "Mobile Team",
    date: "2025-02-15",
    category: "Mobile",
    tags: ["Mobile", "Animations", "Performance"],
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
    slug: "optimizing-mobile-animations",
  },
  // --- Extra posts to reflect broader tech focus & ensure 5 per page ---
  {
    id: 11,
    title: "Next.js 15 + RSC: Production Patterns",
    excerpt:
      "Streaming UI, partial hydration, and caching strategies for fast, resilient web apps.",
    author: "Web Team",
    date: "2025-02-12",
    category: "Web",
    tags: ["Next.js", "RSC", "Web"],
    image:
      "https://images.unsplash.com/photo-1516239322196-94b3f09eace0?auto=format&fit=crop&w=1200&q=80",
    slug: "nextjs15-rsc-production-patterns",
  },
  {
    id: 12,
    title: "Realtime Apps with WebSockets & SSE",
    excerpt:
      "Choosing the right transport and scaling presence, typing indicators, and live dashboards.",
    author: "Web Team",
    date: "2025-01-30",
    category: "Web",
    tags: ["WebSockets", "SSE", "Realtime"],
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
    slug: "realtime-apps-websockets-sse",
  },
  {
    id: 13,
    title: "Cloud Cost Guardrails: FinOps Basics",
    excerpt:
      "Budgets, alerts, and architectural guardrails that keep cloud bills predictable.",
    author: "Cloud Team",
    date: "2025-02-05",
    category: "Cloud",
    tags: ["FinOps", "Cloud", "AWS"],
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
    slug: "cloud-cost-guardrails-finops",
  },
  {
    id: 14,
    title: "LLM-Powered Search: RAG Without Tears",
    excerpt:
      "Indexing, chunking, and evaluation tips to ship reliable AI features in prod.",
    author: "AI Team",
    date: "2025-02-08",
    category: "AI/ML",
    tags: ["RAG", "Vector DB", "AI"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    slug: "llm-powered-search-rag",
  },
  {
    id: 15,
    title: "Data Contracts: Keeping Analytics Honest",
    excerpt:
      "Preventing silent schema drift with versioned, testable data interfaces.",
    author: "Data Team",
    date: "2025-01-18",
    category: "Data",
    tags: ["Data Engineering", "Contracts", "Quality"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    slug: "data-contracts-analytics-honest",
  },
];

// Build categories dynamically so the dropdown + sidebar stay in sync
const ALL_CATEGORIES = [
  "All",
  ...Array.from(new Set(POSTS.map((p) => p.category))),
];

export default function BlogPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [page, setPage] = useState(1);
  const perPage = 5; // five posts per page

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return POSTS.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !needle ||
        p.title.toLowerCase().includes(needle) ||
        p.excerpt.toLowerCase().includes(needle) ||
        p.tags.join(" ").toLowerCase().includes(needle) ||
        p.author.toLowerCase().includes(needle) ||
        p.category.toLowerCase().includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [q, category]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginatedPosts = filtered.slice((page - 1) * perPage, page * perPage);

  //     () =>
  //       [...POSTS]
  //         .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  //         .slice(0, 5),
  //     []
  //   );
  const popularTags = useMemo(
    () => Array.from(new Set(POSTS.flatMap((p) => p.tags))).slice(0, 15),
    []
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white py-24 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Blog & Insights
        </motion.h1>
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto"
        >
          Tutorials and notes from our teams building{" "}
          <span className="font-semibold">web</span>,{" "}
          <span className="font-semibold">mobile</span>,{" "}
          <span className="font-semibold">cloud</span>, and{" "}
          <span className="font-semibold">AI</span> products.
        </motion.p>

        {/* Search + Category */}
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="bg-white/10 backdrop-blur rounded-full px-4 py-2 flex items-center border border-white/20">
              <Search className="w-5 h-5 mr-2 opacity-90" />
              <input
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setPage(1);
                }}
                placeholder="Search posts, tags, authors…"
                className="bg-transparent outline-none w-full placeholder-white/80 text-white"
                aria-label="Search posts"
              />
            </div>
          </div>

          {/* Category dropdown — full-surface clickable + black background */}
          <div className="relative h-11">
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
              className="appearance-none absolute inset-0 w-full h-full rounded-full bg-black text-white border border-white/20 px-4 pr-10 cursor-pointer"
              aria-label="Filter by category"
            >
              {ALL_CATEGORIES.map((c) => (
                <option key={c} value={c} className="bg-black text-white">
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/80" />
          </div>
        </div>

        {/* Decorative */}
        <motion.img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80"
          alt="Blog hero"
          className="absolute -bottom-8 right-6 w-72 md:w-96 opacity-20 rounded-2xl hidden md:block"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Main content */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Posts list */}
        <div className="lg:col-span-8">
          {paginatedPosts.length === 0 && (
            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <p className="text-gray-600">No posts match your search yet.</p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-8">
            {paginatedPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition-shadow overflow-hidden"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-48 w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="p-5">
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-indigo-600">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mt-2 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
                    <span className="inline-flex items-center gap-1">
                      <User className="w-4 h-4" /> {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" />{" "}
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
                      >
                        <TagIcon className="w-3.5 h-3.5" /> {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all"
                    >
                      Read more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination (working, 5 per page) */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-full bg-white shadow hover:shadow-md text-gray-700 disabled:opacity-50"
              >
                <ChevronRight className="w-4 h-4 rotate-180 inline-block mr-1" />
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (num) => (
                  <button
                    key={num}
                    onClick={() => setPage(num)}
                    className={`px-4 py-2 rounded-full shadow hover:shadow-md ${
                      page === num
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {num}
                  </button>
                )
              )}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-full bg-white shadow hover:shadow-md text-gray-700 disabled:opacity-50"
              >
                Next <ChevronRight className="w-4 h-4 inline-block ml-1" />
              </button>
            </div>
          )}
        </div>

        {/* Sidebar (complete) */}
        <aside className="lg:col-span-4 space-y-8">
          {/* About */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <PenSquare className="w-5 h-5 text-indigo-600" />
              <h4 className="font-semibold text-gray-900">About this blog</h4>
            </div>
            <p className="text-gray-600">
              We’re a tech company building modern <strong>web</strong>,{" "}
              <strong>mobile</strong>, <strong>cloud</strong>, and{" "}
              <strong>AI</strong> products. Here we share practical tips,
              architecture notes, and design decisions from real projects.
            </p>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {ALL_CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setCategory(c);
                    setPage(1);
                  }}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    category === c
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="font-semibold text-gray-900 mb-3">Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter (added back) */}
          <div className="rounded-2xl p-6 bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white shadow">
            <h4 className="font-semibold mb-2">Get updates in your inbox</h4>
            <p className="opacity-90 text-sm">
              Monthly digest. No spam. Unsubscribe anytime.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed!");
              }}
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-full px-4 py-2 text-gray-900"
              />
              <button
                type="submit"
                className="rounded-full px-4 py-2 bg-white text-indigo-600 font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Featured image (added back) */}
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
            alt="Tech desk"
            className="rounded-2xl shadow"
            loading="lazy"
          />
        </aside>
      </section>

      {/* CTA footer */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Have a topic you’d like us to cover?
        </h2>
        <p className="opacity-90 mt-2 max-w-2xl mx-auto">
          We love writing about real-world problems. Tell us what you want to
          read next.
        </p>
        <Link
          to="/support"
          className="inline-block mt-6 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-colors"
        >
          Suggest a topic
        </Link>
      </section>
    </div>
  );
}
