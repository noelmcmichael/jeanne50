const memories = [
  {
    author: 'A loving friend',
    message: 'Happy 50th, Jeanne! Can\'t wait to celebrate with you in paradise. Your friendship is a treasure, and I\'m so excited to make more amazing memories together. Here\'s to you!',
  },
  {
    author: 'A dear colleague',
    message: 'Wishing you the happiest of birthdays, Jeanne! Your energy and passion are infectious. May this milestone be everything you\'ve dreamed of and more. See you on the beach!',
  },
  {
    author: 'A cherished family member',
    message: 'To an incredible woman on her 50th birthday, may your celebration be as bright and beautiful as you are. Thank you for being a constant source of joy and inspiration. All my love!',
  },
];

const Memories = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-dark-text">Share a Memory</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <p className="font-body text-dark-text italic">"{memory.message}"</p>
              <p className="font-body text-ocean-blue font-semibold mt-4 text-right">- {memory.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memories;