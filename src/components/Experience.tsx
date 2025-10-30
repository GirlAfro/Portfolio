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
        'Coordinated voting registration for over 3,000 delegates as part of a 9-member team, utilizing Excel for data entry, verification, and quality assurance',
        'Integrated Excel data seamlessly with Zebra CardStudio software to produce digital identification cards for delegates',
        'Identified and resolved data inconsistencies prior to card production, ensuring 100% accuracy in delegate credentials'
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
        'Executed comprehensive physical-to-digital inventory audit, verifying over 2,000 units of finished goods and ensuring data accuracy across systems',
        'Conducted quality control assessments to identify and tag obsolete stock for disposal, reducing waste and minimizing holding costs',
        'Performed systematic quality inspections of incoming materials and finished products to maintain compliance with company standards'
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

              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {exp.responsibilities[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
