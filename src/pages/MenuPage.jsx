import React, { useState } from 'react';
import { Utensils, Sparkles, ChefHat, Flame, Coffee, Check, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function MenuPage({ onNavigate, onOpenBooking, onOpenCustomMenu }) {
  const [activeTab, setActiveTab] = useState('hyderabadi');

  const menuCategories = {
    hyderabadi: {
      id: 'hyderabadi',
      title: 'Hyderabadi Specialities',
      tagline: 'Rich Heritage. Bold Aromas. Unforgettable Taste.',
      desc: 'Celebrate Hyderabad through dishes inspired by its legendary royal food traditions.',
      sections: [
        {
          heading: 'Signature Rice & Biryani',
          items: [
            'Zafrani Mutton Dum Biryani (Aged Basmati, Tender Mutton, Pure Saffron)',
            'Special Chicken Dum Biryani (Original Hyderabadi Degh Preparation)',
            'Vegetable Dum Biryani with Saffron & Crispy Brown Onions',
            'Bagara Rice with Traditional Dalcha',
            'Kashmiri Pulao with Roasted Cashews & Raisins'
          ]
        },
        {
          heading: 'Hyderabadi Royal Starters',
          items: [
            'Chicken Majestic (Signature Spiced Strips with Mint & Curry Leaves)',
            'Mutton Seekh Kebab (Slow Grilled with Charred Herbs)',
            'Fish Apollo (Boneless Tender Fish with Curry Leaf Tempering)',
            'Tala Hua Gosht (Crispy Hyderabadi Spiced Meat)',
            'Paneer Tikka Angara with Mint Chutney'
          ]
        },
        {
          heading: 'Authentic Curries & Gravies',
          items: [
            'Dum Ka Murgh (Slow-Cooked Cashew Poppy Seed Gravy)',
            'Mutton Rogan Josh Kashmiri Style',
            'Murgh Musallam Feast Preparation',
            'Paneer Butter Masala (Rich Velvety Tomato Cream)',
            'Nizami Handi Vegetable Medley'
          ]
        },
        {
          heading: 'Traditional Accompaniments & Breads',
          items: [
            'Authentic Mirchi Ka Salan (Slow-Roasted Peanut Sesame Gravy)',
            'Dahi Ki Chutney (Whipped Spiced Mint Curd with Pomegranate)',
            'Freshly Made Rumali Roti',
            'Butter Tandoori Naan & Garlic Naan',
            'Heritage Onion Laccha Salad with Green Chillies'
          ]
        },
        {
          heading: 'Signature Hyderabadi Desserts',
          items: [
            'Shahi Double Ka Meetha (Pure Desi Ghee & Roasted Pistachios)',
            'Qubani Ka Meetha with Fresh Malai Cream & Vanilla Ice Cream',
            'Badam Kheer / Traditional Zafrani Phirni in Clay Pots',
            'Kaddu Ka Kheer with Saffron Flakes',
            'Special Sweet Paan Counter'
          ]
        }
      ]
    },
    southIndian: {
      id: 'southIndian',
      title: 'South Indian Flavours',
      tagline: 'Traditional Comfort, Beautifully Served.',
      desc: "Explore comforting and familiar flavours inspired by Southern India's rich culinary traditions.",
      sections: [
        {
          heading: 'Live Tiffin & Breakfast Selections',
          items: [
            'Ghee Thatte Idli with Gunpowder Podi',
            'Medu Vada with Crispy Golden Crust',
            'Live Dosa Station (Plain, Ghee Roast, Masala, Onion Rava, Paneer Dosa)',
            'Mysore Masala Dosa with Red Chilli Garlic Chutney',
            'Upma / Pongal with Cashews & Pure Ghee'
          ]
        },
        {
          heading: 'Traditional Rice Varieties',
          items: [
            'Bisi Bele Bath with Traditional Potato Crisps',
            'Temple Style Tamarind Puliyodharai Rice',
            'Tempered Creamy Curd Rice with Mustard & Pomegranate',
            'Lemon Rice with Crunchy Peanuts & Curry Leaves'
          ]
        },
        {
          heading: 'Sambar, Rasam & Curries',
          items: [
            'Authentic Drumstick & Shallot Sambar',
            'Tomato Pepper Rasam (Digestive Warm Broth)',
            'Avial (Traditional Kerala Coconut Vegetable Stew)',
            'Gutthi Vankaya Curry (Stuffed Brinjal Andhra Style)',
            'Poriyal / Vepudu Seasonal Vegetable Dry Fry'
          ]
        },
        {
          heading: 'Accompaniments & Chutneys',
          items: [
            'Fresh Coconut Chutney',
            'Spicy Tomato Garlic Chutney',
            'Allam Ginger Chutney',
            'Appalam / Papad Assortment'
          ]
        },
        {
          heading: 'Traditional Sweets',
          items: [
            'Melt-in-Mouth Mysore Pak',
            'Semiya Payasam with Cardamom & Ghee',
            'Boorelu (Traditional Festive Sweet)',
            'Filter Coffee Live Counter'
          ]
        }
      ]
    },
    northIndian: {
      id: 'northIndian',
      title: 'North Indian Favourites',
      tagline: 'Classic Flavours for Every Celebration.',
      desc: 'Hearty tandoori grills, velvety gravies, artisanal breads, and royal sweets.',
      sections: [
        {
          heading: 'Tandoor & Starters',
          items: [
            'Paneer Malai Tikka with Charred Bell Peppers',
            'Tandoori Murgh (Traditional Red Marinade)',
            'Murgh Malai Kebab with Cream & Saffron',
            'Dahi Ke Kebab with Fresh Coriander Mint Dip',
            'Crispy Amritsari Fish Pakora'
          ]
        },
        {
          heading: 'Rich Curries & Dal',
          items: [
            'Dal Makhani (Overnight Simmered Black Lentils with Butter)',
            'Butter Chicken Delicacy (Classic Delhi Recipe)',
            'Paneer Lababdar with Roasted Spices',
            'Pindi Chole Rawalpindi Style',
            'Kadai Gosht with Fresh Ground Coriander'
          ]
        },
        {
          heading: 'Artisanal Breads & Rice',
          items: [
            'Butter Tandoori Naan & Garlic Coriander Naan',
            'Lachha Paratha with Desi Ghee',
            'Stuffed Amritsari Kulcha',
            'Jeera Rice with Fried Brown Crisps',
            'Peas & Corn Pulao'
          ]
        },
        {
          heading: 'Classic North Indian Sweets',
          items: [
            'Hot Gulab Jamun with Rich Rabdi',
            'Chilled Angoori Rasmalai with Saffron Milk',
            'Moong Dal Halwa with Almond Slivers',
            'Kulfi Falooda with Rose Syrup'
          ]
        }
      ]
    },
    contemporary: {
      id: 'contemporary',
      title: 'Contemporary Cuisine',
      tagline: 'Traditional Roots. Modern Possibilities.',
      desc: 'For celebrations that call for innovative global palettes and live interactive culinary stations.',
      sections: [
        {
          heading: 'Soups & Gourmet Salads',
          items: [
            'Cream of Tomato & Basil with Garlic Croutons',
            'Sweet Corn Vegetable / Chicken Soup',
            'Mediterranean Greek Salad with Feta & Olives',
            'Crisp Caesar Salad with Herb Dressing'
          ]
        },
        {
          heading: 'Indo-Chinese Delights',
          items: [
            'Crispy Chilli Baby Corn / Chilli Paneer',
            'Veg Manchurian in Rich Coriander Garlic Sauce',
            'Chicken 65 & Schezwan Chilli Chicken',
            'Hakka Noodles & Wok Tossed Fried Rice'
          ]
        },
        {
          heading: 'Continental & Live Stations',
          items: [
            'Live Pasta Station (Penne, Fusilli with Arrabbiata, Alfredo & Pesto)',
            'Cheesy Garlic Breadsticks & Bruschetta',
            'Mini Sliders & Canapés Platter',
            'Live Chaat & Dahi Puri Counter',
            'Live Dim Sum & Momo Station'
          ]
        },
        {
          heading: 'Beverages & Mocktail Bar',
          items: [
            'Blue Lagoon Citrus Cooler',
            'Fresh Mint Virgin Mojito',
            'Shahi Zafrani Sharbat with Basil Seeds',
            'Seasonal Fruit Punch & Cold Brews'
          ]
        }
      ]
    }
  };

  const currentMenu = menuCategories[activeTab];

  return (
    <div className="min-h-screen bg-[#080706] text-[#FDFBF7] flex flex-col pt-24 sm:pt-28">
      
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-8 lg:px-12 border-b border-[#8C6D37]/30 text-center sm:text-left">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{ backgroundImage: "url('assets/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080706] via-[#080706]/95 to-[#080706]/70 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-[#8C6D37]/40 bg-[#D4AF37]/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A947]" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#E5A947]">
              OUR CULINARY REPERTOIRE
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-3">
            The Taste of Hyderabad
          </h1>
          <p className="font-serif italic text-[#E5A947] text-xl sm:text-2xl mb-4">
            Authentic Flavours. Timeless Traditions.
          </p>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            Hyderabad has a culinary heritage unlike any other, and we are proud to bring that spirit to your celebrations. Inspired by the city's diverse food culture, our menus bring together the richness of <strong className="text-white">Hyderabadi, Telangana, South Indian, North Indian, and contemporary cuisines</strong>, thoughtfully curated to match your occasion and guests.
          </p>
        </div>
      </section>

      {/* Cuisine Selector Tabs */}
      <section className="bg-[#0E0C0A] border-b border-[#8C6D37]/30 sticky top-16 sm:top-20 z-30 backdrop-blur-md px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-3">
          <button
            onClick={() => setActiveTab('hyderabadi')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
              activeTab === 'hyderabadi'
                ? 'bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black shadow-lg'
                : 'text-neutral-300 hover:text-[#E5A947] hover:bg-white/5'
            }`}
          >
            Hyderabadi Specialities
          </button>

          <button
            onClick={() => setActiveTab('southIndian')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
              activeTab === 'southIndian'
                ? 'bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black shadow-lg'
                : 'text-neutral-300 hover:text-[#E5A947] hover:bg-white/5'
            }`}
          >
            South Indian Flavours
          </button>

          <button
            onClick={() => setActiveTab('northIndian')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
              activeTab === 'northIndian'
                ? 'bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black shadow-lg'
                : 'text-neutral-300 hover:text-[#E5A947] hover:bg-white/5'
            }`}
          >
            North Indian Favourites
          </button>

          <button
            onClick={() => setActiveTab('contemporary')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
              activeTab === 'contemporary'
                ? 'bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black shadow-lg'
                : 'text-neutral-300 hover:text-[#E5A947] hover:bg-white/5'
            }`}
          >
            Contemporary Cuisine
          </button>
        </div>
      </section>

      {/* Active Tab Menu Content */}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full flex-1">
        
        <div className="mb-10 text-center sm:text-left border-b border-[#8C6D37]/20 pb-6">
          <span className="text-xs uppercase tracking-widest text-[#E5A947] font-semibold">Catering Selections</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">{currentMenu.title}</h2>
          <p className="font-serif italic text-[#E5A947] text-lg mt-0.5">{currentMenu.tagline}</p>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-2xl">{currentMenu.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentMenu.sections.map((sec, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#120F0D] border border-[#8C6D37]/30 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#8C6D37]/20">
                  <ChefHat className="w-4 h-4 text-[#E5A947]" />
                  <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                    {sec.heading}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {sec.items.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-neutral-300 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5A947] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 p-8 rounded-2xl bg-[#14120F] border border-[#8C6D37]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
              Want a customized menu tailored for your guests?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">
              Mix and match across Hyderabadi, North Indian, and continental courses with personalized budget estimation.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('custom')}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black font-semibold text-xs tracking-wider uppercase shadow-lg hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>CREATE YOUR MENU</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

    </div>
  );
}
