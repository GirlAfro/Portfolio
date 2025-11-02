import { Briefcase, MapPin, Calendar, Clock } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Capital30 Company',
      location: 'Cape Town, South Africa',
      role: 'Data Entry Intern',
      period: 'June - September 2023',
      type: 'Temporary Intern',
      responsibilities: [
        'Coordinated voting registration for 3,000+ delegates using Excel for data entry, verification, and quality assurance.',
        'Integrated Excel data with Zebra CardStudio software to produce digital identification cards.',
        'Identified and resolved data inconsistencies prior to card production, ensuring 100% accuracy.',
        'Core Skills & Tools: Excel, Zebra CardStudio, Data Entry, Quality Assurance.'
      ],
      color: 'emerald'
    },
    {
      company: 'Javaprint Packaging',
      location: 'Johannesburg, South Africa',
      role: 'Quality Control Intern',
      period: 'April - May 2023',
      type: 'Temporary Intern',
      responsibilities: [
        'Performed quality inspections on 25–30 print batches daily across UV and Mark Andy printing machines.',
        'Verified color registration, lamination accuracy using Tube Scan Systems and Karlville Film Rewinders.',
        'Analyzed defect data with Excel and Power BI, contributing to 8% reduction in rework.',
        'Core Skills & Tools: MPS 8 Colour UV Press, Mark Andy P5, Excel, Power BI, JAVATRACK QMS, ISO 9001.'
      ],
      color: 'cyan'
    },
    {
      company: 'Prestigious Apartments',
      location: 'Johannesburg, South Africa',
      role: 'Receptionist',
      period: 'December 2022 - February 2023',
      type: 'Temporary Contract',
      responsibilities: [
        'Managed front desk operations for Airbnb accommodating up to 25 guests, handling bookings across multiple platforms.',
        'Processed payments, recorded transactions, and managed utility expenses with budget tracking.',
        'Welcomed guests, resolved inquiries and on-site issues as sole on-site point of contact.',
        'Core Skills & Tools: Guest Relations, Payment Management, Booking Coordination, Record Keeping.'
      ],
      color: 'emerald'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 text-emerald-400 text-sm mb-2">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>

              <div className="flex items-center gap-2 text-cyan-400 text-xs mb-3">
                <Clock className="w-3 h-3" />
                <span className="font-semibold">{exp.type}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-1">{exp.role}</h3>

              <p className="text-base font-semibold text-emerald-400 mb-1">{exp.company}</p>

              <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                <MapPin className="w-3 h-3" />
                <span>{exp.location}</span>
              </div>

              <div className="text-slate-400 text-sm leading-relaxed space-y-2">
                {exp.responsibilities.map((resp, respIdx) => (
                  <p key={respIdx}>{resp}</p>
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
