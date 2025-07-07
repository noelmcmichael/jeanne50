import { useState } from 'react';

const RSVP = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('1');
  const [message, setMessage] = useState('');

  const handleRsvpClick = () => {
    const subject = "RSVP for Jeanne's 50th Birthday";
    const body = `Hi!

Name: ${name}
Number of Guests: ${guests}
Message: ${message}

We are excited to celebrate with you!`;
    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-5xl font-bold text-center mb-12 text-dark-text">RSVP</h2>
        <div className="max-w-xl mx-auto animate-fade-in-up">
          <div className="mb-6">
            <label htmlFor="name" className="block font-body text-dark-text font-bold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 font-body border-2 border-sand rounded-lg focus:outline-none focus:border-ocean-blue"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="guests" className="block font-body text-dark-text font-bold mb-2">Number of Guests</label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              className="w-full px-4 py-3 font-body border-2 border-sand rounded-lg focus:outline-none focus:border-ocean-blue"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block font-body text-dark-text font-bold mb-2">Message (optional)</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 font-body border-2 border-sand rounded-lg focus:outline-none focus:border-ocean-blue"
              rows={4}
            ></textarea>
          </div>
          <div className="text-center">
            <button onClick={handleRsvpClick} className="bg-ocean-blue hover:bg-opacity-80 text-white font-bold font-body py-3 px-8 rounded-lg transition-colors duration-300">
              RSVP via Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
