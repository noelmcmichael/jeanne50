import { ExternalLink, Phone, Star, MapPin, Wifi, Car, Utensils, Waves } from 'lucide-react';

interface Hotel {
  id: string;
  name: string;
  category: string;
  description: string;
  website: string;
  phone: string;
  image: string;
  highlights: string[];
  priceRange?: string;
}

const Hotels = () => {
  const hotels: Hotel[] = [
    // Luxury Beachfront Resorts
    {
      id: 'grace-bay-club',
      category: 'luxury',
      name: 'Grace Bay Club',
      description: 'The original luxury all-suite resort on Grace Bay Beach, featuring an adults-only section, family-friendly villa suites, and ultra-luxe estate residences. All suites boast dramatic ocean views, and guests enjoy multiple restaurants (including the famed Infiniti Bar), pools, a spa, and personalized service.',
      website: 'https://gracebayclub.com',
      phone: '+1 (649) 946-5050',
      image: 'https://gracebayclub.gracebayresorts.com/wp-content/uploads/sites/2/2019/12/gbc-hero-room_hotel_gb_junior_suite-00.jpg',
      highlights: ['Adults-only section', 'Estate residences', 'Infiniti Restaurant', 'Beachfront pools', '30-year luxury heritage'],
      priceRange: '$$$$'
    },
    {
      id: 'seven-stars',
      category: 'luxury',
      name: 'Seven Stars Resort & Spa',
      description: 'A 5-star resort acclaimed for its full-service experience on the white sand beaches of Grace Bay. Suites range from junior to four-bedroom, all with marble bathrooms, full kitchens, and private terraces. Guests are greeted with rum punch and chilled towels, and pampered with beachside waiter service.',
      website: 'https://sevenstarsgracebay.com',
      phone: '+1 (649) 941-7777',
      image: 'https://www.sevenstarsgracebay.com/assets/images/home_map.png',
      highlights: ['Saltwater pools', 'Marble bathrooms', 'Full kitchens', 'Beachside service', 'World-class spa'],
      priceRange: '$$$$'
    },
    {
      id: 'ritz-carlton',
      category: 'luxury',
      name: 'The Ritz-Carlton, Turks & Caicos',
      description: 'Opened in 2021, this 12-story luxury resort brings the Ritz-Carlton brand\'s polished elegance to Grace Bay. It offers 147 ocean-view rooms and suites, five restaurants (including BLT Steak), an expansive spa, upscale adults-only and family pools with private cabanas, and the island\'s only casino.',
      website: 'https://ritzcarlton.com',
      phone: '+1 (649) 339-2222',
      image: 'https://cache.marriott.com/is/image/marriotts7prod/rz-plsrt-dji-0006-26918-38581:Feature-Hor?wid=1920&fit=constrain',
      highlights: ['Island\'s only casino', 'Five restaurants', 'BLT Steak', 'Adults-only pool', 'Club Lounge'],
      priceRange: '$$$$'
    },
    {
      id: 'the-palms',
      category: 'luxury',
      name: 'The Palms Turks & Caicos',
      description: 'An elegant 72-suite luxury resort with a classic Caribbean chic ambiance. The Palms offers spacious one- to three-bedroom suites steps from Grace Bay\'s powdery sand, plus world-class amenities like a 25,000 sq. ft. spa, infinity pool, swim-up bar, tennis, and fine dining.',
      website: 'https://thepalmstc.com',
      phone: '+1 (649) 946-8666',
      image: 'https://www.thepalmstc.com/wp-content/uploads/2019/06/palms-hero-image.jpg',
      highlights: ['25,000 sq ft spa', 'Infinity pool', 'Swim-up bar', 'Tennis court', 'Parallel23 restaurant'],
      priceRange: '$$$$'
    },
    {
      id: 'point-grace',
      category: 'luxury',
      name: 'Point Grace',
      description: 'A boutique Relais & Châteaux property known for its quiet, secluded luxury. It sits at the tip of Grace Bay with 28 luxe suites. Point Grace exudes old Caribbean charm and intimacy – it has a renowned Thalasso spa and the romantic Grace\'s Cottage restaurant on-site.',
      website: 'https://pointgrace.com',
      phone: '+1 (649) 946-5096',
      image: 'https://www.pointgrace.com/wp-content/uploads/2019/08/point-grace-suite-ocean-view.jpg',
      highlights: ['Relais & Châteaux', 'Thalasso spa', 'Grace\'s Cottage restaurant', 'Old Caribbean charm', 'Secluded location'],
      priceRange: '$$$$'
    },

    // All-Inclusive & Major Resorts
    {
      id: 'beaches-turks-caicos',
      category: 'all-inclusive',
      name: 'Beaches Turks & Caicos',
      description: 'The island\'s premier all-inclusive mega-resort, particularly famous for family vacations. Beaches encompasses four villages offering 750+ rooms/suites. It\'s unrivaled in amenities: 20+ restaurants and bars, a huge Pirates Island water park, six pools, kids\' camp, Xbox gaming lounge, and scuba diving included.',
      website: 'https://beaches.com',
      phone: '+1 (649) 946-8000',
      image: 'https://cdn.sandals.com/libs/ui/brands/assets/uploads/landscape_btc_3083d423ac.jpg',
      highlights: ['Pirates Island waterpark', '20+ restaurants', 'Four villages', 'Kids programs', 'All-inclusive'],
      priceRange: '$$$'
    },
    {
      id: 'club-med-turkoise',
      category: 'all-inclusive',
      name: 'Club Med Turkoise',
      description: 'An adults-only (18+) all-inclusive resort at the eastern tip of Grace Bay. This is a Club Med classic, known for a sociable, fun atmosphere. It has bungalow-style rooms, a beautiful beachfront infinity pool, multiple bars, and nightly entertainment with activities like sailing, snorkeling, tennis, and trapeze included.',
      website: 'https://clubmed.us/turkoise',
      phone: '+1 (649) 946-5500',
      image: 'https://www.clubmed.us/ccm/content/assets/Destinations/Resorts/TURKO/turko-bungalow-ext.jpg',
      highlights: ['Adults-only', 'Bungalow-style rooms', 'Trapeze lessons', 'Sailing included', 'Nightly entertainment'],
      priceRange: '$$$'
    },
    {
      id: 'alexandra-resort',
      category: 'all-inclusive',
      name: 'Alexandra Resort',
      description: 'A family-friendly all-inclusive resort centrally located on Grace Bay. It offers 120+ rooms/suites in a casual, lively environment. Features multiple dining options, a large free-form swimming pool with swim-up bar, non-motorized water sports, and exchange privileges with sister resorts.',
      website: 'https://alexandraresort.com',
      phone: '+1 (649) 946-5807',
      image: 'https://www.alexandraresort.com/wp-content/uploads/2019/06/alexandra-resort-pool.jpg',
      highlights: ['Family-friendly', 'Swim-up bar', 'Sister resort privileges', 'Central location', 'Multiple dining'],
      priceRange: '$$'
    },

    // Condo-Style Resorts
    {
      id: 'ocean-club-east',
      category: 'condo',
      name: 'Ocean Club Resort (East)',
      description: 'A popular condo resort on the far eastern end of Grace Bay, adjacent to the golf course. It has a classic Caribbean feel and is beloved by repeat visitors. Features condo suites with full kitchens, two pools, beach bar & grill, and the Opus fine-dining restaurant.',
      website: 'https://oceanclubresorts.com',
      phone: '+1 (649) 946-5880',
      image: 'https://www.oceanclubresorts.com/wp-content/uploads/2019/06/ocean-club-east-pool.jpg',
      highlights: ['Golf course adjacent', 'Full kitchens', 'Two pools', 'Opus restaurant', 'Classic Caribbean feel'],
      priceRange: '$$$'
    },
    {
      id: 'coral-gardens',
      category: 'condo',
      name: 'Coral Gardens on Grace Bay',
      description: 'An intimate condo resort directly fronting the best snorkeling spot on Grace Bay (the Coral Gardens reef). It\'s a small property with one- and two-bedroom condo units, a beachfront pool, and the Somewhere Cafe restaurant which is a local favorite for sunset drinks.',
      website: 'https://coralgardens.tc',
      phone: '+1 (800) 532-8536',
      image: 'https://www.coralgardens.tc/wp-content/uploads/2019/06/coral-gardens-snorkeling.jpg',
      highlights: ['Best snorkeling', 'Coral Gardens reef', 'Somewhere Cafe', 'Intimate setting', 'Beachfront pool'],
      priceRange: '$$'
    },

    // Boutique Hotels & Inns
    {
      id: 'sibonne-beach',
      category: 'boutique',
      name: 'Sibonné Beach Hotel',
      description: 'A charming beachfront inn with only 30 rooms, Sibonné is the oldest hotel on Grace Bay. Its appeal lies in its intimacy and value – you stay right on Grace Bay Beach for a fraction of the cost of larger resorts. Features a small pool, tropical courtyard, and the excellent Bay Bistro restaurant.',
      website: 'https://sibonne.com',
      phone: '+1 (649) 946-5547',
      image: 'https://www.sibonne.com/wp-content/uploads/2019/06/sibonne-beach-hotel.jpg',
      highlights: ['Oldest hotel on Grace Bay', 'Bay Bistro restaurant', 'Intimate setting', 'Great value', 'Tropical courtyard'],
      priceRange: '$'
    },
    {
      id: 'the-oasis',
      category: 'boutique',
      name: 'The Oasis at Grace Bay',
      description: 'A 36-unit boutique hotel tucked away on a residential lane just off Grace Bay Road. The Oasis lives up to its name with a tranquil garden setting and two lovely pools. While not directly on the beach, it provides free golf cart shuttle service to their designated beach access.',
      website: 'https://oasisgracebay.com',
      phone: '+1 (649) 941-8821',
      image: 'https://www.oasisgracebay.com/wp-content/uploads/2019/06/oasis-at-grace-bay-pool.jpg',
      highlights: ['Tranquil garden setting', 'Two pools', 'Golf cart shuttle', 'Quiet retreat', 'Great value'],
      priceRange: '$'
    },
    {
      id: 'the-tides',
      category: 'boutique',
      name: 'The Tides, Grace Bay',
      description: 'A new boutique hotel (opened in 2021) offering 20 modern suites just a 2-minute stroll from Grace Bay Beach. Features fresh contemporary design, full kitchens, washer/dryers, balconies, free continental breakfast, and a relaxed pool area with pergolas.',
      website: 'https://tidesgracebay.com',
      phone: '+1 (649) 941-8439',
      image: 'https://www.tidesgracebay.com/wp-content/uploads/2021/06/tides-grace-bay-exterior.jpg',
      highlights: ['Opened 2021', 'Contemporary design', 'Full kitchens', 'Free breakfast', 'Pool with pergolas'],
      priceRange: '$$'
    }
  ];

  const categories = [
    { 
      id: 'luxury', 
      title: 'Luxury Beachfront Resorts', 
      icon: <Star className="w-6 h-6" />,
      description: 'Ultra-luxury oceanfront resorts with world-class amenities'
    },
    { 
      id: 'all-inclusive', 
      title: 'All-Inclusive & Major Resorts', 
      icon: <Utensils className="w-6 h-6" />,
      description: 'Comprehensive resort experiences with meals and activities included'
    },
    { 
      id: 'condo', 
      title: 'Condo-Style Resorts & Villa Rentals', 
      icon: <Car className="w-6 h-6" />,
      description: 'Self-catering accommodations with home-like amenities'
    },
    { 
      id: 'boutique', 
      title: 'Boutique Hotels & Inns', 
      icon: <MapPin className="w-6 h-6" />,
      description: 'Intimate properties with personalized service and unique character'
    }
  ];

  const getHotelsByCategory = (categoryId: string) => {
    return hotels.filter(hotel => hotel.category === categoryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean-blue to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Grace Bay Hotels & Resorts
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover the perfect accommodation for Jeanne's 50th birthday celebration. 
            From ultra-luxury resorts to charming boutique hotels, Grace Bay offers 
            world-class hospitality on one of the world's most beautiful beaches.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {categories.map((category) => {
          const categoryHotels = getHotelsByCategory(category.id);
          
          return (
            <section key={category.id} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-ocean-blue text-white rounded-lg">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-dark-text mb-2">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Hotels Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryHotels.map((hotel) => (
                  <div 
                    key={hotel.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-48">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {hotel.priceRange && (
                        <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                          <span className="text-sm font-semibold text-dark-text">
                            {hotel.priceRange}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-dark-text mb-3">
                        {hotel.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {hotel.description}
                      </p>

                      {/* Highlights */}
                      {hotel.highlights.length > 0 && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {hotel.highlights.slice(0, 3).map((highlight, index) => (
                              <span 
                                key={index}
                                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                            {hotel.highlights.length > 3 && (
                              <span className="text-gray-500 text-xs">
                                +{hotel.highlights.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Contact Info */}
                      <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                        <a 
                          href={hotel.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-ocean-blue hover:text-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Visit Website</span>
                        </a>
                        
                        <a 
                          href={`tel:${hotel.phone}`}
                          className="flex items-center gap-2 text-gray-600 hover:text-dark-text transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">{hotel.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show message if no hotels in category yet */}
              {categoryHotels.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  Hotels in this category are being added...
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-sunset-gold to-amber-500 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
            Contact the hotels directly or work with a travel agent to secure the best rates 
            for your stay during Jeanne's celebration week.
          </p>
          <a 
            href="#rsvp" 
            className="inline-block bg-white text-sunset-gold px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            RSVP for the Celebration
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hotels;