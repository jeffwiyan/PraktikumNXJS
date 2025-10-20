export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Selamat Datang di Inovatek Digital Solusi
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Kami adalah mitra tepercaya Anda dalam transformasi digital,
          menyediakan solusi software kustom, cloud, dan data analytics.
        </p>
        <a 
          href="/services" 
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Lihat Layanan Kami
        </a>
      </div>
    </div>
  );
}