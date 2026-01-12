import { useOnScreen } from '../hooks/useOnScreen';

const secretariat = {
  secGen: [
    { name: 'Aditya DP', position: 'Secretary General', avatar: 'AD' },
    { name: 'Shri Nithya B', position: 'Secretary General', avatar: 'SN' },
  ],
  depSecGen: [
    { name: 'Alok Suresh', position: 'Deputy Secretary General', avatar: 'AS' },
  ],
  director: [
    { name: 'Sree Vandhana R', position: 'Director General', avatar: 'SV' },
  ],
  heads: [
    { name: 'Aadhi Pranesh', position: 'Head of LO', avatar: 'AP' },
    { name: 'Swatika Subramanian', position: 'Head of Equity', avatar: 'SS' },
  ],
  charge: [
    { name: 'Ohm Pranav DV', position: 'Charge D\' Affairs', avatar: 'OP' },
  ],
  conveners: [
    { name: 'Kirthi Maheswaran', position: 'Conveners', avatar: 'KM' },
    { name: 'Aadhish Narayan', position: 'Conveners', avatar: 'AN' },
  ],
};

const facultyAdvisors = [
  { name: 'Dr. Radhika K P', department: 'Department of Humanities', position: 'Assistant Professor (Sr. Gr.)', avatar: 'RK' },
  { name: 'Dr. Bhuvaneshwari D', department: 'Department of Humanities', position: 'Assistant Professor (Sr. Gr.)', avatar: 'BD' },
];

const provisions = [
  { title: 'Conference Kits', icon: '📋' },
  { title: 'Lunch', icon: '🍽️' },
  { title: 'Refreshments', icon: '☕' },
  { title: 'Certificates', icon: '🏆' },
];

function PersonCard({ person, index, delay = 0 }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`glass-hover rounded-2xl p-6 text-center transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${(delay + index * 100)}ms` }}
    >
      {/* Avatar */}
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-blue to-purple-600 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{person.avatar}</span>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>

      {/* Position/Department */}
      <p className="text-accent-gold text-sm">
        {person.position || person.department}
      </p>
    </div>
  );
}

export default function About() {
  const [titleRef, titleVisible] = useOnScreen({ threshold: 0.1 });
  const [provisionsRef, provisionsVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="about" className="section">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-5xl md:text-6xl font-display font-bold">
            About Us
          </h2>
        </div>

        {/* Secretariat Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-center mb-12 text-white">
            Secretariat
          </h3>
          <div className="flex flex-col items-center gap-8">
            {/* Secretary General */}
            <div className="flex flex-wrap justify-center gap-8">
              {secretariat.secGen.map((member, index) => (
                <PersonCard key={member.name} person={member} index={index} />
              ))}
            </div>
            {/* Deputy Secretary General */}
            <div className="flex flex-wrap justify-center gap-8">
              {secretariat.depSecGen.map((member, index) => (
                <PersonCard key={member.name} person={member} index={index} />
              ))}
            </div>
            {/* Director General */}
            <div className="flex flex-wrap justify-center gap-8">
              {secretariat.director.map((member, index) => (
                <PersonCard key={member.name} person={member} index={index} />
              ))}
            </div>
            {/* Heads & Charge D'Affairs */}
            <div className="flex flex-wrap justify-center gap-8">
              {secretariat.heads.map((member, index) => (
                <PersonCard key={member.name} person={member} index={index} />
              ))}
              {secretariat.charge.map((member, index) => (
                <PersonCard key={member.name} person={member} index={index} />
              ))}
            </div>
            {/* Conveners */}
            <div className="flex flex-wrap justify-center gap-8">
              {secretariat.conveners.map((member, index) => (
                <PersonCard key={member.name} person={member} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Faculty Advisors Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-center mb-8 text-white">
            Faculty Advisors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {facultyAdvisors.map((advisor, index) => (
              <PersonCard key={advisor.name} person={advisor} index={index} delay={200} />
            ))}
          </div>
        </div>

        {/* What We Provide Section */}
        <div ref={provisionsRef} className={`transition-all duration-700 ${provisionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h3 className="text-3xl font-display font-bold text-center mb-8 text-white">
            What We Provide
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {provisions.map((item, index) => (
              <div
                key={item.title}
                className="glass-hover rounded-2xl p-6 text-center transform transition-all duration-500 w-40"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-white font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
