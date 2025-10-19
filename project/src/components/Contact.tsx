import { Mail, Phone, Send, Shield } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
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

        <div className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:kimchigarira13@gmail.com"
              className="group flex items-center gap-4 p-6 bg-slate-800/50 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Email</p>
                <p className="text-slate-200 font-semibold">kimchigarira13@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+37068329019"
              className="group flex items-center gap-4 p-6 bg-slate-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Phone</p>
                <p className="text-slate-200 font-semibold">+370 68329019</p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg">
              <Shield className="w-5 h-5 text-emerald-400" />
              <p className="text-slate-300">
                <span className="text-emerald-400 font-semibold">Available for opportunities</span> in cybersecurity and technical support
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-slate-500">
            <Shield className="w-4 h-4" />
            <p className="text-sm">
              Built with security in mind | Kimberly Gamuchirai Chigarira
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
