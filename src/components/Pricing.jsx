import { useOnScreen } from '../hooks/useOnScreen.js';

const pricingTiers = [
  {
    category: 'Students (School)',
    price: 1300,
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    category: 'Students (PSG Institutions)',
    price: 1600,
    gradient: 'from-cyan-500 to-cyan-700',
  },
  {
    category: 'Students (Colleges in Coimbatore)',
    price: 2100,
    gradient: 'from-green-500 to-green-700',
  },
  {
    category: 'Students (In other cities)',
    price: 2200,
    gradient: 'from-purple-500 to-purple-700',
  },
];

function PricingCard({ tier, index }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`glass-hover rounded-2xl p-6 text-center transform transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tier.gradient} mb-4 mx-auto flex items-center justify-center`}>
        <span className="text-2xl font-bold text-white">₹</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{tier.category}</h3>
      <p className="text-gray-300 text-3xl font-bold mb-4">₹{tier.price}</p>
    </div>
  );
}

export default function Pricing() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="pricing" className="section">
      <div className="max-w-7xl mx-auto w-full">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Registration Fee
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.category} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
