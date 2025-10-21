import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Capital30 Company',
      location: 'Cape Town, South Africa',
      role: 'Data Entry Specialist',
      period: 'December 2022 - September 2023',
      type: 'Part-time (70%)',
      responsibilities: [
        'Managed data entry tasks and maintained high accuracy and efficiency under tight deadlines',
        'Reviewed data for accuracy, identifying and correcting inconsistencies',
        'Managed the physical and digital filing systems to ensure documents are stored properly and can be retrieved easily'
      ],
      color: 'emerald'
    },
    {
      company: 'Javaprint Packaging',
      location: 'Johannesburg, South Africa',
      role: 'Quality Control Intern',
      period: 'December 2022 - September 2023',
      type: 'Part-time (10%) - Packaging Department',
      responsibilities: [
        'Performed quality checks and packaged products according to company standards',
        'Conducted regular inspections of incoming materials and finished products to ensure they meet quality standards',
        'Collected and analysed data related to the quality of packaging'
      ],
      color: 'cyan'
    },
    {
      company: 'Prestigious Apartments',
      location: 'Johannesburg, South Africa',
      role: 'Administration Assistant',
      period: 'December 2022 - September 2023',
      type: 'Part-time Contract (20%)',
      responsibilities: [
        'Provided customer service: answering calls, and welcoming visitors',
        'Handled incoming and outgoing correspondence, including emails, mail, packages, and faxes',
        'Assisted in collecting rent payments and processed them in the property management system'
      ],
      color: 'emerald'
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`group bg-slate-900/50 backdrop-blur-sm border border-${exp.color}-500/20 rounded-xl p-8 hover:border-${exp.color}-500/40 transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className={`p-2 bg-${exp.color}-500/10 rounded-lg mt-1`}>
                      <Briefcase className={`w-5 h-5 text-${exp.color}-400`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 mb-1">{exp.role}</h3>
                      <p className={`text-lg font-semibold text-${exp.color}-400 mb-2`}>{exp.company}</p>
                      <p className="text-sm text-slate-400 italic">{exp.type}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:text-right">
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="ml-14 space-y-3">
                {exp.responsibilities.map((resp, respIdx) => (
                  <div key={respIdx} className="flex items-start gap-3 group/item">
                    <div className={`w-1.5 h-1.5 bg-${exp.color}-400 rounded-full mt-2 group-hover/item:scale-150 transition-transform`}></div>
                    <p className="text-slate-300 leading-relaxed">{resp}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
