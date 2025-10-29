import { Shield, Terminal, Server, Code, Network, Users, Lightbulb, Target } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Network & Security',
      icon: Shield,
      color: 'emerald',
      skills: [
        'Networking Fundamentals',
        'Network Troubleshooting',
        'Network Monitoring Basics',
        'Cloud Networks Basics',
        'VPNs'
      ]
    },
    {
      category: 'Programming & Scripting',
      icon: Code,
      color: 'cyan',
      skills: [
        'C++ (Introductory)',
        'HTML',
        'CSS',
        'Bash Scripting'
      ]
    },
    {
      category: 'Security Tools',
      icon: Terminal,
      color: 'emerald',
      skills: [
        'Wireshark',
        'Nmap',
        'tcpdump',
        'Ping',
        'Microsoft Office Suite'
      ]
    },
    {
      category: 'Operating Systems',
      icon: Server,
      color: 'cyan',
      skills: [
        'Windows',
        'Linux'
      ]
    }
  ];

  const softSkills = [
    { name: 'Communication', icon: Users, color: 'emerald' },
    { name: 'Analytical Thinking', icon: Lightbulb, color: 'cyan' },
    { name: 'Adaptability', icon: Target, color: 'emerald' },
    { name: 'Team Player', icon: Users, color: 'cyan' },
    { name: 'Organization', icon: Server, color: 'emerald' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSkills.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className={`group bg-slate-900/50 backdrop-blur-sm border border-${category.color}-500/20 rounded-xl p-6 hover:border-${category.color}-500/40 transition-all duration-300 flex flex-col`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-${category.color}-500/10 rounded-lg group-hover:bg-${category.color}-500/20 transition-colors`}>
                    <Icon className={`w-5 h-5 text-${category.color}-400`} />
                  </div>
                  <h4 className={`text-lg font-bold text-${category.color}-400`}>{category.category}</h4>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 bg-${category.color}-400 rounded-full`}></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
