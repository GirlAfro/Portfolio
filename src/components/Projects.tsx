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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Projects & Reports
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-2 text-emerald-400 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{project.period}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>

              <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {project.downloadUrl && (
                <a
                  href={project.downloadUrl}
                  download={project.downloadName}
                  className="inline-flex items-center gap-2 text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors mt-auto"
                >
                  View Report
                  <span>→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;