import { GraduationCap, Award, Calendar, Target } from 'lucide-react';

const CurrentFocus = () => {
  return (
    <section id="current-focus" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Current Focus
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="group bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-500/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                <GraduationCap className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">Bachelor's Degree</h3>
                <p className="text-lg text-emerald-400 font-semibold">Information Systems & Cybersecurity</p>
              </div>
            </div>
            <div className="ml-16 space-y-3">
              <div className="flex items-center gap-2 text-slate-300">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>Vilnius University, Kaunas Faculty</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>In Progress</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Building a strong foundation in information systems architecture, cybersecurity principles, and secure system design.
              </p>
            </div>
          </div>

          <div className="group bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                <Award className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">Professional Certificate</h3>
                <p className="text-lg text-cyan-400 font-semibold">Google Cybersecurity Certificate</p>
              </div>
            </div>
            <div className="ml-16 space-y-3">
              <div className="flex items-center gap-2 text-slate-300">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Google Professional Program</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Expected Completion: November 2025</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Gaining industry-recognized skills in threat detection, incident response, security operations, and hands-on cybersecurity tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
