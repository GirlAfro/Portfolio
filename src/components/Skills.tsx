import { Wifi, Code, Shield, Terminal, Database, Globe } from 'lucide-react';

const Skills = () => {
  const projects = [
    {
      title: 'Network Troubleshooting (Teltonika Project)',
      icon: Wifi,
      color: 'emerald',
      description: 'Diagnosed and resolved routing and DHCP misconfigurations across subnetworks to restore full HTTP access and eliminate packet loss. Fixed Wi-Fi MAC filtering issues and mobile network connectivity in simulated Cisco environments.',
      skills: 'Static & dynamic routing, DHCP setup, LAN/WAN/VLAN configuration, wireless troubleshooting, packet diagnostics (ping, HTTP).'
    },
    {
      title: 'MATLAB — Parallel Anomaly Detection',
      icon: Code,
      color: 'cyan',
      description: 'Developed an anomaly detection system using a rolling z-score algorithm for grayscale image sequences. Leveraged parallel computing (parfor) to achieve ~2× faster processing while maintaining detection accuracy. Produced visualization and performance comparison reports.',
      skills: 'Parallel computation, image processing, performance benchmarking, MATLAB visualization.'
    },
    {
      title: 'Ethical Hacking & Cybersecurity Analysis',
      icon: Shield,
      color: 'emerald',
      description: 'Executed vulnerability assessments, memory forensics, and network intrusion investigations. Identified and exploited known vulnerabilities (vsftpd, ProFTPD, UnrealIRCd, Samba, Tomcat) in Metasploitable. Analyzed PCAPs for reverse shells and malware, and performed RAM forensics with Volatility to uncover compromised credentials and encryption keys.',
      skills: 'Vulnerability exploitation, forensics, network traffic analysis, malware investigation, threat mitigation.',
      tools: 'Tools: Nmap, Nessus, Metasploit, Wireshark, Volatility.'
    },
    {
      title: 'C# — OS & Security Utilities',
      icon: Terminal,
      color: 'cyan',
      description: 'Built a C# console application to monitor and log system processes, export current and top CPU-consuming processes to CSV, and detect/terminate Notepad instances interactively. Created a C# class library (DLL) to retrieve system information (CPU usage, memory, drives, computer name) and last 10 Application EventLog entries, callable from PowerShell scripts.',
      skills: 'C#, .NET, WMI, EventLog, PowerShell interop, CSV I/O, debugging, system monitoring.'
    },
    {
      title: 'Linux & Bash — Automation Scripts',
      icon: Terminal,
      color: 'emerald',
      description: 'Configured a Linux VM (VirtualBox + Ubuntu) and developed Bash scripts for automated record creation, permission management, and cleanup tasks. Scripts generated hourly timestamped files, updated permissions recursively, and cleaned directories with logged actions.',
      skills: 'Bash scripting, file system automation, permissions, VM setup, Linux administration.'
    },
    {
      title: 'Database Management & SQL for Security Analysis',
      icon: Database,
      color: 'cyan',
      description: 'Used SQL queries to extract, analyze, and filter key security data from organizational databases. Identified failed login attempts outside working hours, traced suspicious access by date and location, and optimized patch management by department and region.',
      skills: 'SQL querying, data analysis, access control, security event monitoring, database-driven decision support.'
    },
    {
      title: 'Web Development — HTML, CSS, and TypeScript',
      icon: Globe,
      color: 'emerald',
      description: 'Built and deployed a static website using HTML and CSS, gaining practical experience in front-end structure, layout design, and responsive styling. Expanded knowledge by learning TypeScript, to refine my personal portfolio website, integrating interactivity, reusable components, and clean code organization.',
      skills: 'HTML5, CSS3, TypeScript, Responsive Design, Git/GitHub, Visual Studio, Cypress testing (E2E).'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills & Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const isEmerald = project.color === 'emerald';
            return (
              <div
                key={idx}
                className={`group bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 flex flex-col ${
                  isEmerald
                    ? 'border border-emerald-500/20 hover:border-emerald-500/40'
                    : 'border border-cyan-500/20 hover:border-cyan-500/40'
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
                    isEmerald
                      ? 'bg-emerald-500/10 group-hover:bg-emerald-500/20'
                      : 'bg-cyan-500/10 group-hover:bg-cyan-500/20'
                  }`}>
                    <Icon className={`w-5 h-5 ${isEmerald ? 'text-emerald-400' : 'text-cyan-400'}`} />
                  </div>
                  <h3 className={`text-lg font-bold ${isEmerald ? 'text-emerald-400' : 'text-cyan-400'}`}>
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                {project.tools && (
                  <p className="text-slate-400 text-sm mb-2 italic">
                    {project.tools}
                  </p>
                )}

                <div className={`mt-auto pt-3 border-t ${
                  isEmerald ? 'border-emerald-500/20' : 'border-cyan-500/20'
                }`}>
                  <p className="text-slate-400 text-xs">
                    <span className={`font-semibold ${isEmerald ? 'text-emerald-400' : 'text-cyan-400'}`}>Skills: </span>
                    {project.skills}
                  </p>
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
