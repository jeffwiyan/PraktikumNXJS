import React from 'react';

const services = [
  {
    icon: "💻",
    title: "Web & Aplikasi Mobile Kustom",
    description: "Solusi perangkat lunak yang dirancang khusus untuk kebutuhan unik bisnis Anda."
  },
  {
    icon: "☁️",
    title: "Solusi Cloud & DevOps",
    description: "Optimalisasi infrastruktur cloud Anda untuk skalabilitas, keamanan, dan efisiensi."
  },
  {
    icon: "📊",
    title: "Data Science & BI",
    description: "Mengubah data mentah menjadi wawasan yang dapat ditindaklanjuti untuk pengambilan keputusan."
  },
  {
    icon: "💡",
    title: "Konsultasi Strategi TI",
    description: "Panduan ahli untuk menyelaraskan teknologi dengan tujuan bisnis jangka panjang Anda."
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Menciptakan pengalaman pengguna yang intuitif dan menarik secara visual."
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Layanan Kami
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">{service.title}</h2>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}