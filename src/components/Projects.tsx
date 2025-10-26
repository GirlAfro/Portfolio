import { Wifi, Server, Router, Smartphone, CheckCircle, Download } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Network Troubleshooting - Teltonika',
      description: 'A systematic network infrastructure troubleshooting exercise involving multiple network segments, routing issues, DHCP misconfigurations, and wireless connectivity problems.',
      technologies: ['Cisco Packet Tracer', 'Network Routing', 'DHCP Configuration', 'Wireless Networking', 'MAC Address Filtering'],
      features: [
        'Resolved inter-switch communication failures between S2 and S3 networks',
        'Fixed static routing misconfigurations on Router R2',
        'Corrected DHCP server configuration deficiencies',
        'Resolved cell tower connectivity issues for iPhone 14',
        'Fixed wireless router MAC address filtering problems',
        'Restored full HTTP server accessibility across all network segments'
      ],
      challenges: [
        'Multiple network segments with interconnected routing issues',
        'DHCP server configuration preventing proper IP assignment',
        'Static vs dynamic IP configuration conflicts',
        'Wireless access control restrictions blocking legitimate devices'
      ],
      outcomes: [
        '100% network connectivity restoration across all segments',
        'Successful HTTP server access from all devices',
        'Eliminated packet loss and routing errors',
        'Implemented proper network security controls'
      ],
      color: 'blue',
      icon: Wifi,
      period: 'October 2024',
      downloadUrl: '/network-troubleshooting-report.html',
      downloadName: 'Network Troubleshooting Report'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Hands-on network infrastructure projects demonstrating systematic troubleshooting and problem-solving skills
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => {
            const IconComponent = project.icon;
            return (
              <div
                key={idx}
                className="group bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-blue-500/10 rounded-lg">
                        <IconComponent className="w-8 h-8 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h3>
                        <p className="text-slate-400 mb-4">{project.description}</p>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-slate-500">{project.period}</span>
                          {project.downloadUrl && (
                            <a
                              href={project.downloadUrl}
                              download={project.downloadName}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 rounded-lg text-blue-400 text-sm font-medium transition-all duration-300"
                            >
                              <Download className="w-4 h-4" />
                              Download Report
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-200 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
                      <Router className="w-5 h-5 text-orange-400" />
                      Challenges Resolved
                    </h4>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, challengeIdx) => (
                        <li key={challengeIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                          <span className="text-slate-300 text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-slate-800/30 rounded-lg border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
                    <Server className="w-5 h-5 text-green-400" />
                    Project Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, outcomeIdx) => (
                      <li key={outcomeIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                        <span className="text-slate-300 text-sm">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
