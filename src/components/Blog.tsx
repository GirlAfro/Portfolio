import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Network Security",
      excerpt:
        "Explore the fundamentals of network security, including firewalls, VPNs, and intrusion detection systems.",
      date: "March 10, 2025",
      category: "Cybersecurity",
      color: "emerald",
    },
    {
      id: 2,
      title: "Understanding Cryptography Basics",
      excerpt:
        "A beginner-friendly guide to encryption, decryption, and how cryptography protects your data.",
      date: "March 8, 2025",
      category: "Security",
      color: "cyan",
    },
    {
      id: 3,
      title: "Incident Response Best Practices",
      excerpt:
        "Learn how to respond effectively to security incidents and minimize damage from cyber attacks.",
      date: "March 5, 2025",
      category: "Cybersecurity",
      color: "emerald",
    },
    {
      id: 4,
      title: "Database Security & SQL Injection Prevention",
      excerpt:
        "Discover techniques to secure databases and protect against common SQL injection vulnerabilities.",
      date: "February 28, 2025",
      category: "Development",
      color: "cyan",
    },
    {
      id: 5,
      title: "Malware Analysis Fundamentals",
      excerpt:
        "Introduction to identifying, analyzing, and understanding malware behavior and threats.",
      date: "February 25, 2025",
      category: "Security",
      color: "emerald",
    },
    {
      id: 6,
      title: "Cloud Security: Protecting Your Infrastructure",
      excerpt:
        "Best practices for securing cloud environments and protecting your data in the cloud.",
      date: "February 20, 2025",
      category: "Cloud",
      color: "cyan",
    },
  ];

  return (
    <section
      id="blog"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-6"></div>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Sharing knowledge and insights on cybersecurity, network
            administration, and technology trends
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`group bg-slate-900/50 backdrop-blur-sm border border-${post.color}-500/20 rounded-xl p-6 hover:border-${post.color}-500/40 transition-all duration-300 flex flex-col hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 bg-${post.color}-500/10 rounded-full text-sm font-medium text-${post.color}-400`}
                >
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className={`inline-flex items-center gap-2 text-${post.color}-400 hover:text-${post.color}-300 transition-colors font-medium`}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
