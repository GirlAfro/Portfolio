import { Shield, Terminal, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 opacity-90"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 grid-background opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8 animate-float">
          <div className="relative">
            <Shield className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
            <Terminal className="w-12 h-12 text-cyan-400 absolute -bottom-2 -right-2" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
            Kimberly Gamuchirai Chigarira
          </span>
        </h1>

        <div className="mb-8 space-y-2">
          <p className="text-xl sm:text-2xl text-slate-300 font-light">
            Information Systems & Cyber Security Student
          </p>
          <p className="text-lg text-emerald-400 font-mono">
            Vilnius University, Kaunas Faculty
          </p>
        </div>

        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-12 leading-relaxed">
          Passionate about network security, data protection, and building secure systems.
          Currently pursuing a Bachelor's degree while gaining hands-on experience in cybersecurity fundamentals.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50"
          >
            Get In Touch
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#about"
            className="px-8 py-4 border-2 border-emerald-500/50 hover:border-emerald-500 text-emerald-400 font-semibold rounded-lg transition-all duration-300 hover:bg-emerald-500/10"
          >
            Learn More
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-emerald-400 opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
