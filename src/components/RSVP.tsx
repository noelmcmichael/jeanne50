import { useState } from 'react';

const RSVP = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('1');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/your_form_id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, guests: Number(guests), message }),
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="font-heading text-5xl font-bold mb-4 text-ocean-blue">Thank You!</h2>
          <p className="font-body text-dark-text text-xl">We've received your RSVP and can't wait to celebrate with you!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-5xl font-bold text-center mb-12 text-dark-text">RSVP</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto animate-fade-in-up">
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
            <label htmlFor="email" className="block font-body text-dark-text font-bold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <button type="submit" className="bg-ocean-blue hover:bg-opacity-80 text-white font-bold font-body py-3 px-8 rounded-lg transition-colors duration-300">
              Submit RSVP
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
