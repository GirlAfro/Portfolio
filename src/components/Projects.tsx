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
      // Use a relative path so it works in previews and if the domain changes
      downloadUrl: '/network-troubleshooting-report.pdf',
      downloadName: 'network-troubleshooting-report.pdf',
      period: 'April 2025',
      outcomes: [
        '100% network connectivity restoration across all segments',
        'Successful HTTP server access from all devices',
        'Eliminated packet loss and routing errors',
        'Implemented proper network security controls'
      ],
    },

    // ...other projects
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Selected projects and reports demonstrating practical troubleshooting and security work.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-emerald-500/20 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-emerald-500/5 rounded-lg">
                <Wifi className="w-8 h-8 text-emerald-400" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>

                {project.outcomes && project.outcomes.length > 0 && (
                  <div className="mb-3">
                    <h4 className="text-sm text-emerald-300 font-semibold mb-1">Outcomes</h4>
                    <ul className="list-disc list-inside text-slate-400 text-sm">
                      {project.outcomes.map((o, i) => (
                        <li key={i}>{o}</li>
                      ))}
                    </ul>
                  </div>
                )}

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

                {project.features && project.features.length > 0 && (
                  <div className="mt-4 text-sm text-slate-400">
                    <h4 className="text-sm text-emerald-300 font-semibold mb-1">Key highlights</h4>
                    <ul className="list-disc list-inside">
                      {project.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;