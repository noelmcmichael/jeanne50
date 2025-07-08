import { ExternalLink, Phone, Star, MapPin, Car, Utensils } from 'lucide-react';

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
      description: 'A 5-star resort acclaimed for its full-service experience "on the white sand beaches of Grace Bay", offering everything from a world-class spa to gourmet dining. Suites range from junior to four-bedroom, all with marble bathrooms, full kitchens, and private terraces. Guests are greeted with rum punch and chilled towels, and pampered with beachside waiter service and myriad activities (water sports, kids\' club, etc.).',
      website: 'https://sevenstarsgracebay.com',
      phone: '+1 (649) 941-7777',
      image: 'https://www.sevenstarsgracebay.com/media/cache/88/5c/885c23de64beb2df46d50ba8e1c3b4b3.jpg',
      highlights: ['Saltwater pools', 'Marble bathrooms', 'Full kitchens', 'Beachside service', 'World-class spa'],
      priceRange: '$$$$'
    },
    {
      id: 'ritz-carlton',
      category: 'luxury',
      name: 'The Ritz-Carlton, Turks & Caicos',
      description: 'Opened in 2021, this is a 12-story luxury resort bringing the Ritz-Carlton brand\'s polished elegance to Grace Bay. Situated in the heart of Grace Bay, it offers 147 ocean-view rooms and suites, five restaurants (including BLT Steak), an expansive spa, upscale adults-only and family pools with private cabanas, the island\'s only casino, and Ritz Kids program. "Inspired by the natural splendor of Grace Bay," the resort blends modern luxury with the island\'s warm hospitality.',
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
      description: 'An elegant 72-suite luxury resort with a classic Caribbean chic ambiance. The Palms offers spacious one- to three-bedroom suites steps from Grace Bay\'s powdery sand, plus world-class amenities like a 25,000 sq. ft. spa, infinity pool, swim-up bar, tennis, and fine dining (Parallel23 restaurant). "Only steps from powder fine sands and azure waters," The Palms is consistently named among the top resorts in the region.',
      website: 'https://thepalmstc.com',
      phone: '+1 (649) 946-8666',
      image: 'https://thepalmstc.com/wp-content/uploads/2024/12/The-Palms-Beach-Setup-Aerial-shot_approved.jpg',
      highlights: ['25,000 sq ft spa', 'Infinity pool', 'Swim-up bar', 'Tennis court', 'Parallel23 restaurant'],
      priceRange: '$$$$'
    },
    {
      id: 'point-grace',
      category: 'luxury',
      name: 'Point Grace',
      description: 'A boutique Relais & Châteaux property known for its quiet, secluded luxury. It sits at the tip of Grace Bay (Grace\'s Point) with 28 luxe suites (oceanfront and poolside cottage style). Point Grace exudes old Caribbean charm and intimacy – it has a renowned Thalasso spa and the romantic Grace\'s Cottage restaurant on-site. It was a World Travel Awards "Caribbean\'s Leading Boutique Hotel" winner, prized for its serene atmosphere and attentive service.',
      website: 'https://pointgrace.com',
      phone: '+1 (649) 946-5096',
      image: 'https://cache.marriott.com/content/dam/marriott-renditions/PLSRT/plsrt-grace-beach-8762-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*',
      highlights: ['Relais & Châteaux', 'Thalasso spa', 'Grace\'s Cottage restaurant', 'Old Caribbean charm', 'Secluded location'],
      priceRange: '$$$$'
    },
    {
      id: 'wymara-resort',
      category: 'luxury',
      name: 'Wymara Resort & Villas',
      description: 'A sleek, modern boutique resort (formerly Gansevoort) located on the western end of Grace Bay Beach. Wymara features 91 contemporary island-inspired rooms and suites (all recently renovated with chic design) and a stunning pool scene: a 7,000 sq. ft. mosaic tiled pool with "floating" island pods. The resort boasts two signature restaurants (Indigo and Zest), a full-service spa and fitness center. In addition, Wymara offers seven exclusive oceanfront villas off-site (with private pools and over-water swim platforms) for those seeking ultra-private luxury.',
      website: 'https://wymararesortandvillas.com',
      phone: '+1 (649) 941-7555',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      highlights: ['7,000 sq ft mosaic pool', 'Floating island pods', 'Indigo & Zest restaurants', 'Off-site villas', 'Recently renovated'],
      priceRange: '$$$$'
    },
    {
      id: 'the-strand',
      category: 'luxury',
      name: 'The Strand',
      description: 'A stunning 47-acre gated compound featuring intentionally low-rise and angular design, with suites and villas that feel like sleek sand-toned "sand-castles" built into the limestone bluff. Interiors favour pale coral stone, teak, and retractable glass, so every space frames the turquoise Caicos Bank panorama. The absence of high-rise neighbours and the half-mile of private shoreline give the resort a quietly exclusive, residential atmosphere. Accommodations range from ~1,700 ft² Oceanfront Suites with plunge pools to 7,500 ft²+ Five-Bedroom Residences with daily butler service. All categories share automated blackout shades, Dyson hair tools, Miele/Liebherr appliances, and twice-daily housekeeping. The resort features DelMar restaurant with live-fire seafood and prime steaks, plus marina access with captain JD for exploring the Caicos Cays.',
      website: 'https://thestrandtci.com',
      phone: '+1 (649) 232-4222',
      image: 'https://i0.wp.com/thestrandtci.com/wp-content/uploads/2024/12/Strand-Exterior_-8.jpeg?w=2000&quality=89&ssl=1',
      highlights: ['47-acre gated compound', 'Half-mile private shoreline', 'Butler service available', 'DelMar restaurant', 'Private marina', 'Sustainability focused'],
      priceRange: '$$$$'
    },

    // All-Inclusive & Major Resorts
    {
      id: 'beaches-turks-caicos',
      category: 'all-inclusive',
      name: 'Beaches Turks & Caicos',
      description: 'The island\'s premier all-inclusive mega-resort, particularly famous for family vacations. Beaches encompasses four villages (Caribbean, Italian, French & Key West), offering a total of 750+ rooms/suites for various budgets. It\'s unrivaled in amenities: 20+ restaurants and bars, a huge Pirates Island water park (with slides and a lazy river), six pools and multiple swim-up bars, kids\' camp and teen activities, an Xbox gaming lounge, scuba diving and snorkeling trips included, and even a surf simulator. Despite its size, service is well-reviewed. If you want "a collection of activities and restaurants that simply isn\'t rivaled by any other resort," Beaches is it.',
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
      description: 'A adults-only (18+) all-inclusive resort at the eastern tip of Grace Bay. This is a Club Med classic, known for a sociable, fun atmosphere. It has bungalow-style rooms (recently updated), a beautiful beachfront infinity pool, multiple bars, and nightly entertainment. "Club Med Turkoise is the perfect adults-only destination for those looking for a fun-filled tropical get-away," set on a spectacular stretch of beach. Activities like sailing, snorkeling, tennis, trapeze, and scuba lessons are included, making it great value for active travelers.',
      website: 'https://clubmed.us/turkoise',
      phone: '+1 (649) 946-5500',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      highlights: ['Adults-only', 'Bungalow-style rooms', 'Trapeze lessons', 'Sailing included', 'Nightly entertainment'],
      priceRange: '$$$'
    },
    {
      id: 'alexandra-resort',
      category: 'all-inclusive',
      name: 'Alexandra Resort',
      description: 'A family-friendly all-inclusive resort centrally located on Grace Bay. It offers 120+ rooms/suites (studios to two-bedroom suites, many with kitchenettes) in a casual, lively environment. Alexandra features multiple dining options (buffet and à la carte restaurants plus beach bars), a large free-form swimming pool with swim-up bar, non-motorized water sports, and evening entertainment. It\'s part of the Turks & Caicos Collection group, which means guests can free shuttle and dine at sister resorts (Blue Haven and Beach House). "Alexandra Resort…invites you to enjoy the best resort value on world acclaimed Grace Bay Beach".',
      website: 'https://alexandraresort.com',
      phone: '+1 (649) 946-5807',
      image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      highlights: ['Family-friendly', 'Swim-up bar', 'Sister resort privileges', 'Central location', 'Multiple dining'],
      priceRange: '$$'
    },
    {
      id: 'beach-house',
      category: 'all-inclusive',
      name: 'Beach House',
      description: 'A boutique 21-suite all-inclusive that is adults-only (ages 18+). True to its name, Beach House has a quaint, beach-cottage vibe – each suite is bright and airy, with separate bedroom and living area. The resort sits on a quiet west Grace Bay plot and provides "pampering without pretense." Guests enjoy a beachfront pool, two restaurants (casual and upscale), beach service, and a level of serenity not found at larger all-inclusives. "The all-suite Beach House is one of the first authentically boutique resorts on Grace Bay Beach…welcomes couples" seeking a relaxed getaway. (This resort is also part of Turks & Caicos Collection, with exchange privileges.)',
      website: 'https://turksandcaicoscollection.com/beach-house',
      phone: '+1 (649) 941-8888',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      highlights: ['Adults-only boutique', '21 suites only', 'Beach-cottage vibe', 'Two restaurants', 'Sister resort privileges'],
      priceRange: '$$$'
    },

    // Condo-Style Resorts
    {
      id: 'ocean-club-east',
      category: 'condo',
      name: 'Ocean Club Resort (East)',
      description: 'A popular condo resort on the far eastern end of Grace Bay, adjacent to the golf course. It has a classic Caribbean feel and is beloved by repeat visitors. Accommodation is in condo suites (studio, 1-, 2- or 3-bedroom) with full kitchens and screened balconies. The resort spans a large beachfront with two pools, a beach bar & grill, and the Opus fine-dining restaurant. Guests have signing privileges at Ocean Club West, its sister resort, and a free shuttle runs between the two. Ocean Club\'s vibe is laid-back and family-friendly, with an onsite dive shop, tennis courts, and of course that gorgeous beach at your doorstep.',
      website: 'https://oceanclubresorts.com',
      phone: '+1 (649) 946-5880',
      image: 'https://www.oceanclubresorts.com/wp-content/uploads/2024/08/rsz_main_photo_OCE-1024x768.jpg',
      highlights: ['Golf course adjacent', 'Full kitchens', 'Two pools', 'Opus restaurant', 'Classic Caribbean feel'],
      priceRange: '$$$'
    },
    {
      id: 'ocean-club-west',
      category: 'condo',
      name: 'Ocean Club West',
      description: 'Located nearer the central Grace Bay area (walking distance to many restaurants), OCW is the sister property to Ocean Club. It offers similarly outfitted condo suites, but the grounds are more compact. The resort features a large free-form pool with a swim-up bar, a casual restaurant, and a fitness center. Many families enjoy staying here for the convenience; and they can also use facilities at Ocean Club East. Together, "whether you choose Ocean Club or Ocean Club West, you\'re in for an unforgettable experience" with the comforts of a condo and resort services combined.',
      website: 'https://oceanclubresorts.com',
      phone: '+1 (649) 946-5880',
      image: 'https://www.oceanclubresorts.com/wp-content/uploads/2024/08/rsz_main_photo_OCW-1024x768.jpg',
      highlights: ['Central location', 'Walking to restaurants', 'Sister resort privileges', 'Swim-up bar', 'Compact grounds'],
      priceRange: '$$$'
    },
    {
      id: 'coral-gardens',
      category: 'condo',
      name: 'Coral Gardens on Grace Bay',
      description: 'An intimate condo resort directly fronting the best snorkeling spot on Grace Bay (the Coral Gardens reef in Princess Alexandra Marine Park). It\'s a small property with one- and two-bedroom condo units, a beachfront pool, and the Somewhere Cafe restaurant which is a local favorite for sunset drinks. "Welcome to Coral Gardens, an intimate and luxurious resort located directly on a secluded stretch of Grace Bay…internationally renowned snorkeling right outside your door." This is a great choice for travelers who plan to snorkel daily – you can step right from your room to the reef.',
      website: 'https://coralgardens.tc',
      phone: '+1 (800) 532-8536',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      highlights: ['Best snorkeling', 'Coral Gardens reef', 'Somewhere Cafe', 'Intimate setting', 'Beachfront pool'],
      priceRange: '$$'
    },

    // Boutique Hotels & Inns
    {
      id: 'sibonne-beach',
      category: 'boutique',
      name: 'Sibonné Beach Hotel',
      description: 'A charming beachfront inn with only 30 rooms, Sibonné is the oldest hotel on Grace Bay (a 3-star property formerly known as "Le Deck" back in the 1980s). Its appeal lies in its intimacy and value – you stay right on Grace Bay Beach for a fraction of the cost of larger resorts. Rooms are simple but clean and many have garden or partial sea views. There\'s a small pool and lush tropical courtyard, and the excellent Bay Bistro restaurant on-site for beachfront dining. Sibonné offers a "casual, laid-back ambiance" beloved by longtime visitors.',
      website: 'https://sibonne.com',
      phone: '+1 (649) 946-5547',
      image: 'https://static.wixstatic.com/media/b613de_6ebfac2f0b9e480ea41715f081f11ed8~mv2.jpg/v1/fill/w_1500,h_942,al_c,q_85,enc_avif,quality_auto/b613de_6ebfac2f0b9e480ea41715f081f11ed8~mv2.jpg',
      highlights: ['Oldest hotel on Grace Bay', 'Bay Bistro restaurant', 'Intimate setting', 'Great value', 'Tropical courtyard'],
      priceRange: '$'
    },
    {
      id: 'the-oasis',
      category: 'boutique',
      name: 'The Oasis at Grace Bay',
      description: 'A 36-unit boutique hotel tucked away on a residential lane just off Grace Bay Road. The Oasis lives up to its name with a tranquil garden setting and two lovely pools. Suites are modern and stylish (studio, 1BR, and 2BR configurations) with contemporary decor and kitchenettes. While it\'s not directly on the beach, Oasis provides free golf cart shuttle service to their designated beach access in minutes. "Contemporary, modern design meets luxurious and affordable accommodations" here. It\'s a top pick for travelers seeking a quiet retreat at a good price point (plus friendly staff get many compliments).',
      website: 'https://oasisgracebay.com',
      phone: '+1 (649) 941-8821',
      image: 'https://oasisgracebay.com/wp-content/uploads/2023/01/example-5-1903x1269.jpg',
      highlights: ['Tranquil garden setting', 'Two pools', 'Golf cart shuttle', 'Quiet retreat', 'Great value'],
      priceRange: '$'
    },
    {
      id: 'the-tides',
      category: 'boutique',
      name: 'The Tides, Grace Bay',
      description: 'A new boutique hotel (opened in 2021) offering 20 modern suites just a 2-minute stroll from Grace Bay Beach. Accommodations include one-bedroom pool view suites (approx 830 sq ft) and larger two-bedroom suites, all with full kitchens, washer/dryers, and balconies. The design is fresh and contemporary – "the aesthetic is uncomplicated, light, and fresh…large sliding doors welcome in the ocean breeze". The hotel provides a free continental breakfast and has a relaxed pool area with pergolas. Its location on Princess Drive is quiet yet within easy walking distance to the shops and restaurants of Salt Mills Plaza and Regent Village.',
      website: 'https://tidesgracebay.com',
      phone: '+1 (649) 941-8439',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
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
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
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