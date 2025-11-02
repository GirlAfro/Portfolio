import { GraduationCap, Award, Calendar, Target } from 'lucide-react';

const CurrentFocus = () => {
  return (
    <section id="current-focus" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Current Focus
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="group bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Bachelor's Degree</h3>
            </div>
            <p className="text-base text-emerald-400 font-semibold mb-3">Information Systems & Cybersecurity</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Target className="w-3 h-3 text-emerald-400" />
                <span>Vilnius University, Kaunas Faculty</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-3 h-3 text-emerald-400" />
                <span>In Progress</span>
              </div>
            </div>
          </div>

          <div className="group bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Professional Certificate</h3>
            </div>
            <p className="text-base text-cyan-400 font-semibold mb-3">Google Cybersecurity Certificate</p>
            <div className="space-y-2 text-sm mb-3">
              <div className="flex items-center gap-2 text-slate-300">
                <Target className="w-3 h-3 text-cyan-400" />
                <span>Google Professional Program</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-3 h-3 text-cyan-400" />
                <span>Expected Completion: November 2025</span>
              </div>
            </div>
            <div className="pt-3 border-t border-cyan-500/20">
              <p className="text-xs text-slate-400">
                <span className="font-semibold text-cyan-400">Topics: </span>
                Introduction to Python, Splunk, Chronicle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
