import Link from 'next/link';
import { teamData } from '@/data/teamData';
import HeroBanner from '@/components/HeroBanner'; // 1. Import komponen baru

export default function TeamPage() {
  return (
    <>
      {/* 2. Tambahkan Hero Banner di atas */}
      <HeroBanner 
        title="Tim Profesional Kami"
        subtitle="Kekuatan di Balik Inovasi"
        // Kita pakai gambar placeholder 'team'
        imageUrl="https://images.unsplash.com/photo-1523961131990-5EA7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNzEyN3wwfDF8c2VhcmNofDE3fHx0ZWFtfGVufDB8fHx8MTcyOTM5ODg2NHww&ixlib=rb-4.0.3&q=80&w=1600"
      />

      {/* 3. Konten kartu tim kita bungkus dalam 'section' */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamData.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
                (Foto)
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold mb-1 text-gray-900">{member.name}</h2>
                <p className="text-blue-600 font-medium mb-4">{member.title}</p>
                <Link
                  href={`/team/${member.slug}`}
                  className="inline-block bg-blue-600 text-white font-semibold py-2 px-5 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Lihat Profil
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}