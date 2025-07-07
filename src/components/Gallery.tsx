const images = [
  '/IMG_0544.JPG',
  '/IMG_1944.jpg',
  '/IMG_1948.jpg',
  '/IMG_2245.JPG',
  '/IMG_3395.jpg',
  '/IMG_4473.jpg',
  '/IMG_4515.JPG',
  '/IMG_4516.JPG',
  '/IMG_4517.JPG',
  '/IMG_4518.JPG',
  '/IMG_4529.JPG',
  '/IMG_5564.jpg',
  '/IMG_6552.JPG',
  '/IMG_6973.jpg',
  '/IMG_8697.JPG',
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