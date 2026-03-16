import { useState } from "react";
import { Send, Shield, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mnjggjkd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm currently seeking opportunities to leverage my technical knowledge and communication skills.
            Let's connect!
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 md:p-12">
          {status === "success" ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-200 mb-2">Message Sent!</h3>
              <p className="text-slate-400 mb-6">Thanks for reaching out. I'll get back to you soon.</p>
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-lg hover:bg-emerald-500/30 transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-slate-800/60 border border-slate-700 focus:border-emerald-500/60 text-slate-200 placeholder-slate-500 rounded-lg px-4 py-3 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-slate-800/60 border border-slate-700 focus:border-emerald-500/60 text-slate-200 placeholder-slate-500 rounded-lg px-4 py-3 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-slate-800/60 border border-slate-700 focus:border-emerald-500/60 text-slate-200 placeholder-slate-500 rounded-lg px-4 py-3 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full bg-slate-800/60 border border-slate-700 focus:border-emerald-500/60 text-slate-200 placeholder-slate-500 rounded-lg px-4 py-3 outline-none transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-900 font-bold rounded-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-slate-500">
            <Shield className="w-4 h-4" />
            <p className="text-sm">Built with security in mind | Kimberly Gamuchirai Chigarira</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
