import { useOnScreen } from '../hooks/useOnScreen.js';
import unscLogo from '../assets/committes/unsc.png';
import aippmLogo from '../assets/committes/aippm.png';
import disecLogo from '../assets/committes/disec.png';
import ecosocLogo from '../assets/committes/ecosoc.png';
import ipLogo from '../assets/committes/ip.png';
import uncopuosLogo from '../assets/committes/uncopuos.png';
import unhrcLogo from '../assets/committes/unhrc.png';
import whaLogo from '../assets/committes/wha.png';
import loksabhaLogo from '../assets/committes/loksabha.png';
import { i } from 'motion/react-client';

const committees = [
  {
    id: 1,
    abbr: 'UNSC',
    name: 'United Nations Security Council',
    gradient: 'from-blue-500 to-blue-700',
    logo: unscLogo,
  },
  {
    id: 2,
    abbr: 'WHA',
    name: 'World Health Assembly',
    gradient: 'from-green-500 to-green-700',
    logo: whaLogo,
  },
  {
    id: 3,
    abbr: 'UNHRC',
    name: 'United Nations Human Rights Council',
    gradient: 'from-purple-500 to-purple-700',
    logo: unhrcLogo,
  },
  {
    id: 4,
    abbr: 'ECOSOC',
    name: 'Economic and Social Council',
    gradient: 'from-orange-500 to-orange-700',
    logo: ecosocLogo,
  },
  {
    id: 5,
    abbr: 'DISEC',
    name: 'Disarmament and International Security Committee',
    gradient: 'from-red-500 to-red-700',
    logo: disecLogo,
  },
  {
    id: 6,
    abbr: 'UNCOPUOS',
    name: 'United Nations Committee on the Peaceful Uses of Outer Space',
    gradient: 'from-yellow-500 to-yellow-700',
    logo: uncopuosLogo,
  },
  {
    id: 7,
    abbr: 'LS',
    name: 'Lok Sabha',
    gradient: 'from-pink-500 to-pink-700',
    logo: loksabhaLogo,
  },
  {
    id: 8,
    abbr: 'AIPPM',
    name: 'All India Political Parties Meet',
    gradient: 'from-pink-500 to-pink-700',
    logo: aippmLogo,
  },
  {
    id: 9,
    abbr: 'IP',
    name: 'International Press',
    gradient: 'from-cyan-500 to-cyan-700',
    logo: ipLogo,
  },
];

function CommitteeCard({ committee, index }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`glass-hover card-tilt rounded-2xl p-6 transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient Icon */}
      {committee.logo ? (
        <img src={committee.logo}
          alt={`${committee.abbr} Logo`}
          className="w-16 h-16 rounded-full mb-4" />
      ) : (
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${committee.gradient} mb-4 flex items-center justify-center`}>
          <span className="text-2xl font-bold text-white">{committee.abbr[0]}</span>
        </div>
      )}

      {/* Committee Name */}
      <h3 className="text-xl font-bold mb-2 text-white">{committee.abbr}</h3>
      <p className="text-gray-300 text-sm mb-4">{committee.name}</p>
    </div>
  );
}

export default function Committees() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="committees" className="section bg-secondary-bg/30">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Our Committees
          </h2>
          <div className="glass inline-block rounded-full px-6 py-3 mt-4">
            <p className="text-accent-gold font-semibold">
              Conference Theme: Bridging Divides: Unity in Diversity
            </p>
          </div>
        </div>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {committees.map((committee, index) => (
            <CommitteeCard key={committee.id} committee={committee} index={index} />
          ))}
        </div>

        {/* Register CTA */}
        <div className="text-center">
          <a
            href="http://linktr.ee/ylgcmun2026"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-gold text-primary-bg px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg inline-block"
          >
            Register for Your Committee
          </a>
        </div>
      </div>
    </section>
  );
}
