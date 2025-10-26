import { GraduationCap, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Background</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                I'm a motivated third-year Information Systems and Cyber Security student at Vilnius University
                with a strong foundation in networking, operating systems, and database management. My academic
                journey is complemented by hands-on experience in data management, quality control, and customer service.
              </p>
              <p className="text-slate-300 leading-relaxed">
                I'm passionate about leveraging my technical knowledge and communication skills to support clients,
                troubleshoot security issues, and contribute to building secure, resilient systems.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-cyan-400">Certifications</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-slate-200 font-semibold">Google Cybersecurity Professional Certificate</p>
                    <p className="text-slate-400 text-sm">Expected: October 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
                <h3 className="text-2xl font-bold text-emerald-400">Education</h3>
              </div>

              <div className="border-l-2 border-emerald-500/30 pl-4">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-1" />
                  <p className="text-sm text-emerald-400 font-mono">Vilnius University, Kaunas Faculty</p>
                </div>
                <h4 className="text-lg font-bold text-slate-200 mb-1">
                  Bachelor of Information Systems and Cyber Security
                </h4>
                <p className="text-slate-400 text-sm mb-3">September 2023 - Expected January 2027</p>
                <div className="space-y-1">
                  <p className="text-slate-300 text-sm"><span className="text-cyan-400">›</span> Networking</p>
                  <p className="text-slate-300 text-sm"><span className="text-cyan-400">›</span> Operating Systems</p>
                  <p className="text-slate-300 text-sm"><span className="text-cyan-400">›</span> Introduction to Databases</p>
                  <p className="text-slate-300 text-sm"><span className="text-cyan-400">›</span> Data Algorithms</p>
                  <p className="text-slate-300 text-sm"><span className="text-cyan-400">›</span> Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
