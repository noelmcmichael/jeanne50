const images = [
  '/turks/609c6f7d07c8954d023f110c_Escapes-Hero-scaled.jpeg',
  '/IMG_6552.JPG',
  '/turks/CIELO+-+Grace+Bay,+Turks+and+Caicos.jpeg',
  '/turks/CONCHSHACKBAR-d7574ef065a94a2dafbaf084591576ce.jpg',
  '/turks/OG_The-Ultimate-Turks-and-Caicos-Travel-Guide.jpg',
  '/turks/club-med-turkoise-5-an.jpg',
  '/turks/cover-bonfire-beach-long-bay-providenciales_1280x640.jpg',
  '/turks/grace-bay-beach-turks-caicos-islands.jpg',
  '/turks/header-turks-and-caicos-grace-bay-providenciales-TURKSCAICOSTG0621-ffd6b7161b5f4d0bb0bddd6a53e2695f.jpg',
  '/turks/style_traveler-1.jpg',
  '/turks/wymara-beach-bbq-bonfire-night_2048x1365.jpg',
  '/IMG_2245.JPG',
  '/IMG_3395.jpg',
  '/IMG_4515.JPG',
  '/IMG_4516.JPG',
  '/IMG_4517.JPG',
  '/IMG_4518.JPG',
  '/IMG_4529.JPG',
];

const Gallery = () => {
  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-5xl font-bold text-center mb-16 text-dark-text">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src={image} alt={`Jeanne's 50th birthday celebration image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;