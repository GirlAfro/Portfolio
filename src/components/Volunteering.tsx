import { Heart, MapPin, Calendar } from 'lucide-react';

const Volunteering = () => {
  const volunteering = [
    {
      organization: 'AISEC Global Organisation',
      location: 'Kaunas, Lithuania',
      period: 'September 2024 - Ongoing',
      activities: [
        'Connected students from abroad with professional internships in Lithuania',
        'Volunteered at local primary schools',
        'Organized social projects for cultural experience'
      ],
      color: 'emerald'
    },
    {
      organization: 'Lions International Club',
      location: 'Gweru, Zimbabwe',
      period: 'January 2017 - November 2019',
      activities: [
        'Worked with local orphanages to distribute and donate food and clothes',
        'Helped clean the backyards and surrounding areas of orphanage homes'
      ],
      color: 'cyan'
    }
  ];

  return (
    <section id="volunteering" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Volunteering
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Committed to giving back to communities and creating positive social impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteering.map((vol, idx) => (
            <div
              key={idx}
              className={`group bg-slate-900/50 backdrop-blur-sm border border-${vol.color}-500/20 rounded-xl p-8 hover:border-${vol.color}-500/40 transition-all duration-300 hover:transform hover:scale-105`}
            >
              <div className="flex items-start gap-3 mb-6">
                <div className={`p-3 bg-${vol.color}-500/10 rounded-lg`}>
                  <Heart className={`w-6 h-6 text-${vol.color}-400`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">{vol.organization}</h3>
                  <div className="flex flex-col gap-1 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{vol.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{vol.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {vol.activities.map((activity, actIdx) => (
                  <div key={actIdx} className="flex items-start gap-3">
                    <div className={`w-1.5 h-1.5 bg-${vol.color}-400 rounded-full mt-2`}></div>
                    <p className="text-slate-300 leading-relaxed">{activity}</p>
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

export default Volunteering;
