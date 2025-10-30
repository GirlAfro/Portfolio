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
        'Coordinated voting registration for over 3,000 delegates as part of a 9-member team, utilizing Excel for data entry, verification, and quality assurance.',
        'Integrated Excel data seamlessly with Zebra CardStudio software to produce digital identification cards for delegates.',
        'Identified and resolved data inconsistencies prior to card production, ensuring 100% accuracy in delegate credentials.'
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
        'Performed quality inspections on 25–30 print batches daily using MPS 8 Colour UV and Mark Andy P5 printing machines.',
        'Verified color registration, lamination, and adhesion accuracy with Tube Scan Inspection Systems and Karlville Film Rewinders.',
        'Logged test data in JAVATRACK QMS for ISO 9001 compliance.',
        'Utilized Excel and Power BI for defect analysis and reporting, contributing to an 8% reduction in rework through process calibration and operator feedback.',
        'Equipment & Software: MPS 8 Colour UV Press, Mark Andy P5 & 2200 G Series, Karlville Rewinder, Tube Scan Systems, JAVATRACK QMS, Excel, Power BI.'
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
        'Managed day-to-day front desk operations for an Airbnb accommodating up to 25 guests.',
        'Oversaw bookings across multiple platforms, handled cash and bank payments, and recorded all transactions accurately.',
        'Processed monthly utility expenses (electricity and water) and maintained budget records.',
        'Welcomed guests, addressed inquiries, and resolved on-site issues to ensure a smooth stay.',
        'Acted as the sole on-site point of contact, reporting directly to the owner and maintaining full operational responsibility during their absence.',
        'Key Skills: Guest Relations, Payment Management, Booking Coordination, Conflict Resolution, Record Keeping.'
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
              <div className="flex items-center gap-2 text-emerald-400 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-2">{exp.role}</h3>

              <p className="text-base font-semibold text-emerald-400 mb-1">{exp.company}</p>

              <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                <MapPin className="w-3 h-3" />
                <span>{exp.location}</span>
              </div>

              <ul className="text-slate-400 text-sm mb-4 leading-relaxed list-disc ml-5">
                {exp.responsibilities.map((resp, respIdx) => (
                  <li key={respIdx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;