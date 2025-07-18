import { ExternalLink, Anchor, Heart, Utensils, MapPin, Camera, Dumbbell } from 'lucide-react';

interface Resource {
  name: string;
  description: string;
  category: string;
  website: string;
  image: string;
  price?: string;
  highlights: string[];
}

const Resources = () => {
  const resources: Resource[] = [
    // Water Sports & Adventures
    {
      name: "Ocean Vibes Tours",
      description: "Native-owned watersports company offering the most comprehensive adventure experiences. Known for exceptional service and authentic local knowledge.",
      category: "Water Sports & Adventures",
      website: "https://oceanvibes.com/",
      image: "https://oceanvibes.com/wp-content/uploads/2019/09/para-cover-e1607135540662.jpg",
      price: "$75-150",
      highlights: ["Snorkeling tours", "Parasailing", "Sunset cruises", "Glow worm tours", "Stingray encounters"]
    },
    {
      name: "Island Vibes Tours",
      description: "Catamaran and yacht tours featuring the famous JoJo dolphin encounters. Consistently rated as the top choice for snorkeling and Half Moon Bay visits.",
      category: "Water Sports & Adventures",
      website: "https://islandvibestours.com/",
      image: "https://islandvibestours.com/wp-content/uploads/2023/06/E5F6BF09-2702-4FBE-AD6C-E0BE75113E3D_1_201_a-scaled-1-1200x633.webp",
      price: "$95-180",
      highlights: ["JoJo dolphin encounters", "Half Moon Bay tours", "Catamaran cruises", "Snorkeling equipment included", "Lunch & drinks provided"]
    },
    {
      name: "Aqua TCI",
      description: "Premier scuba diving operation consistently rated as the best dive operators in TCI. Small groups and expert guides for wall diving adventures.",
      category: "Water Sports & Adventures",  
      website: "https://aquatci.com/",
      image: "https://oceanvibes.com/wp-content/uploads/2019/09/Public-SS.jpg",
      price: "$85-200",
      highlights: ["Wall diving specialists", "Small group sizes", "PADI certification", "Whale watching", "Remote dive sites"]
    },
    {
      name: "Turks and Caicos Kiteboarding",
      description: "World-class kiteboarding instruction and equipment rental. Long Bay Beach provides perfect conditions for all skill levels.",
      category: "Water Sports & Adventures",
      website: "https://tcikiteboarding.com/",
      image: "https://oceanvibes.com/wp-content/uploads/2019/09/GW--e1568476861452.jpg",
      price: "$80-150",
      highlights: ["IKO certified instruction", "Equipment rental", "Long Bay location", "All skill levels", "Multi-day packages"]
    },

    // Fine Dining & Restaurants
    {
      name: "Coco Bistro",
      description: "Intimate fine dining restaurant set in a tropical palm grove. Renowned for romantic atmosphere and internationally-inspired Caribbean cuisine.",
      category: "Fine Dining & Restaurants",
      website: "https://cocobistro.tc/",
      image: "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/631eb7703b73d.jpg/1512x1512/fit/80/78b9d5e4dbd747f1f3fe67a195dc02c2.jpg",
      price: "$$$$",
      highlights: ["Romantic palm grove setting", "International Caribbean fusion", "Award-winning wine list", "Reservations essential", "Signature desserts"]
    },
    {
      name: "Infiniti Restaurant & Raw Bar",
      description: "Waterfront fine dining at Grace Bay Club with mesmerizing ocean views. Features the freshest seafood and innovative cuisine by award-winning chefs.",
      category: "Fine Dining & Restaurants",
      website: "https://gracebayresorts.com/",
      image: "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/631eb76cb5a3e.jpeg/1512x1512/fit/80/2134992a5e356b2949668cda5f142fd1.jpg",
      price: "$$$$",
      highlights: ["Oceanfront dining", "Fresh local seafood", "Grace Bay Club location", "Raw bar specialties", "Sunset dinner"]
    },
    {
      name: "Grace's Cottage",
      description: "Charming French-Caribbean restaurant featuring outdoor gazebo seating under starlit skies. Known for exceptional service and French-influenced menu.",
      category: "Fine Dining & Restaurants",
      website: "https://gracescottage.com/",
      image: "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/631eb76f4eaf1.jpg/1512x1512/fit/80/3ea15eb54c037001ab2ccfca71270357.jpg",
      price: "$$$",
      highlights: ["Gazebo dining", "French-Caribbean cuisine", "Starlit atmosphere", "Special dietary accommodations", "Caicos Bouillabaisse specialty"]
    },
    {
      name: "Da Conch Shack",
      description: "Iconic beachfront casual dining in colorful Blue Hills setting. Famous for cracked conch and authentic Caribbean atmosphere with local music.",
      category: "Fine Dining & Restaurants",
      website: "https://daconchshack.com/",
      image: "/turks/CONCHSHACKBAR-d7574ef065a94a2dafbaf084591576ce.jpg",
      price: "$$",
      highlights: ["Beachfront location", "Famous cracked conch", "Local live music", "Authentic Caribbean vibe", "Sunset views"]
    },

    // Golf & Recreation
    {
      name: "Royal Turks & Caicos Golf Club",
      description: "Caribbean's #1 rated golf course for 2024 by USA Today. Championship 18-hole course with target-style layout and stunning Grace Bay proximity.",
      category: "Golf & Recreation",
      website: "https://royalturksandcaicosgolf.com/",
      image: "https://royalturksandcaicosgolf.com/wp-content/uploads/2023/06/2023-Jadot-8.jpg",
      price: "$195-295",
      highlights: ["#1 Caribbean course", "18-hole championship", "GPS golf carts included", "Pro shop & restaurant", "4-hour pace guarantee"]
    },

    // Luxury Spas & Wellness
    {
      name: "Shambhala Spa at COMO Parrot Cay",
      description: "World-renowned wellness retreat on private island. Only organic-certified spa in the Caribbean offering transformative treatments and yoga programs.",
      category: "Luxury Spas & Wellness", 
      website: "https://comohotels.com/parrotcay",
      image: "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/631eb764ee3eb.jpg/1512x1512/fit/80/ad5af06803d5dbbf145c3c27a7e9658b.jpg",
      price: "$$$$",
      highlights: ["Private island location", "Organic certified treatments", "Yoga & meditation", "Wellness programming", "World-class reputation"]
    },
    {
      name: "The Ritz-Carlton Spa",
      description: "Full-service luxury spa on Grace Bay Beach offering world-class treatments with ocean views. Features signature island-inspired therapies.",
      category: "Luxury Spas & Wellness",
      website: "https://ritzcarlton.com/turks-caicos",
      image: "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/631eb77128852.jpg/1772x1180/fit/80/8cdfc61953adc72f942ddff4d1bb175f.jpg",
      price: "$$$-$$$$",
      highlights: ["Grace Bay Beach location", "Ocean view treatments", "Full-service spa", "Signature therapies", "Luxury resort setting"]
    },

    // Beaches & Hidden Gems
    {
      name: "Grace Bay Beach",
      description: "World's #1 beach consistently rated by TripAdvisor and travel experts. 12 miles of pristine white sand and turquoise waters protected by barrier reef.",
      category: "Beaches & Hidden Gems",
      website: "https://www.visittci.com/things-to-do/best-beaches",
      image: "/turks/grace-bay-beach-turks-caicos-islands.jpg",
      price: "Free",
      highlights: ["World's #1 beach", "12 miles of white sand", "Crystal clear waters", "Barrier reef protection", "Multiple access points"]
    },
    {
      name: "Taylor Bay",
      description: "Hidden gem beach perfect for families with incredibly shallow, warm waters. Secluded location near Chalk Sound with pristine natural beauty.",
      category: "Beaches & Hidden Gems",
      website: "https://www.visittci.com/things-to-do/best-beaches",
      image: "/turks/cover-bonfire-beach-long-bay-providenciales_1280x640.jpg",
      price: "Free",
      highlights: ["Hidden gem location", "Shallow warm waters", "Perfect for families", "Near Chalk Sound", "Bring your own amenities"]
    },
    {
      name: "Long Bay Beach",
      description: "Spectacular beach with shallow turquoise waters extending far offshore. Popular for kiteboarding and romantic walks with dramatic sky views.",
      category: "Beaches & Hidden Gems",
      website: "https://www.visittci.com/things-to-do/best-beaches",
      image: "/turks/style_traveler-1.jpg",
      price: "Free",
      highlights: ["Kiteboarding paradise", "Shallow waters", "Miles of sand", "Dramatic sunsets", "Less crowded"]
    },

    // Additional Resources
    {
      name: "Marine Room Restaurant",
      description: "Upscale beachfront dining with spectacular sunset views. Features fresh seafood and international cuisine in an elegant oceanfront setting.",
      category: "Fine Dining & Restaurants",
      website: "https://marineroom.tc/",
      image: "https://oceanvibes.com/wp-content/uploads/2015/01/kiss.jpg",
      price: "$$$",
      highlights: ["Sunset dinner views", "Fresh seafood", "Beachfront location", "Romantic atmosphere", "International cuisine"]
    },
    {
      name: "Half Moon Bay Island Hopping",
      description: "Visit the stunning uninhabited island between Caribbean and Atlantic. Perfect for iguana watching, pristine beaches, and unique geography.",
      category: "Water Sports & Adventures",
      website: "https://islandvibestours.com/",
      image: "https://oceanvibes.com/wp-content/uploads/2019/09/Private-sail-e1568477636260.jpg",
      price: "$95-150",
      highlights: ["Uninhabited island", "Rock iguana colony", "Two ocean meeting point", "Pristine beaches", "Photography opportunities"]
    },
    {
      name: "Seven Stars Resort Spa",
      description: "Luxury beachfront spa offering world-class treatments with Grace Bay Beach views. Features hot stone therapy and signature island treatments.",
      category: "Luxury Spas & Wellness",
      website: "https://www.sevenstarsgracebay.com/world-class-spa",
      image: "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/631eb77515248.jpg/1772x1180/fit/80/3360b62d8a037d6dcaea571939dd9014.jpg",
      price: "$$$",
      highlights: ["Beachfront spa", "Hot stone therapy", "Grace Bay views", "Signature treatments", "Luxury resort amenities"]
    }
  ];

  const categories = [
    "Water Sports & Adventures",
    "Fine Dining & Restaurants", 
    "Golf & Recreation",
    "Luxury Spas & Wellness",
    "Beaches & Hidden Gems"
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Water Sports & Adventures": return <Anchor className="w-6 h-6" />;
      case "Fine Dining & Restaurants": return <Utensils className="w-6 h-6" />;
      case "Golf & Recreation": return <Dumbbell className="w-6 h-6" />;
      case "Luxury Spas & Wellness": return <Heart className="w-6 h-6" />;
      case "Beaches & Hidden Gems": return <MapPin className="w-6 h-6" />;
      default: return <Camera className="w-6 h-6" />;
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-sand">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-text mb-6">
            Turks & Caicos
            <span className="block text-ocean-blue">Resources</span>
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the very best experiences Turks & Caicos has to offer. From world-class dining 
            and pristine beaches to thrilling adventures and luxury wellness, we've curated only 
            the highest-rated and most recommended resources for your perfect getaway.
          </p>
        </div>

        {categories.map((category) => {
          const categoryResources = resources.filter(resource => resource.category === category);
          if (categoryResources.length === 0) return null;

          return (
            <div key={category} className="mb-16">
              <div className="flex items-center mb-8">
                <div className="text-ocean-blue mr-3">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="font-heading text-3xl font-bold text-dark-text">
                  {category}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryResources.map((resource, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={resource.image} 
                        alt={resource.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {resource.price && (
                        <div className="absolute top-4 right-4 bg-ocean-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {resource.price}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-heading text-xl font-bold text-dark-text mb-3">
                        {resource.name}
                      </h4>
                      
                      <p className="font-body text-gray-600 mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-body font-semibold text-dark-text mb-2">Highlights:</h5>
                        <ul className="font-body text-sm text-gray-600 space-y-1">
                          {resource.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-ocean-blue mr-2">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <a 
                        href={resource.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-body font-semibold text-ocean-blue hover:text-sunset-gold transition-colors duration-300"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="bg-ocean-blue text-white rounded-lg p-8 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">
            Need More Recommendations?
          </h3>
          <p className="font-body text-lg mb-6">
            These are just our top picks! Turks & Caicos offers endless possibilities for adventure, 
            relaxation, and unforgettable experiences.
          </p>
          <p className="font-body text-md opacity-90">
            <strong>Pro Tip:</strong> Book activities and restaurant reservations well in advance, 
            especially during peak season (December-April).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resources;