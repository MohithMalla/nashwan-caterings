import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MessageSquare, ArrowRight, Check } from 'lucide-react';
import Footer from '../components/Footer';

export default function MenuPage({ initialCategory, onNavigate, onOpenBooking, onOpenCustomMenu }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read category and package from URL query params (defaults to 'veg' and 'simple')
  const categoryParam = searchParams.get('category');
  const packageParam = searchParams.get('package');

  const activeCategory = categoryParam === 'non-veg' 
    ? 'non-veg' 
    : (initialCategory === 'non-veg' ? 'non-veg' : 'veg');

  const activePackage = packageParam || (activeCategory === 'non-veg' ? 'standard' : 'simple');

  const handleCategorySwitch = (category) => {
    setSearchParams({
      category,
      package: category === 'non-veg' ? 'standard' : 'simple'
    });
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handlePackageSelect = (pkgId) => {
    setSearchParams({
      category: activeCategory,
      package: pkgId
    });
  };

  const menuData = {
    veg: {
      title: 'Vegetarian Menus',
      packages: {
        simple: {
          id: 'simple',
          name: 'Simple Veg Menu',
          minOrder: '50 pax',
          servingStaff: 'Provided',
          customization: 'Available',
          sections: [
            {
              title: 'Snacks (any One)',
              items: ['Cut Mirchi', 'Mirchi Bajji', 'Alu Bajji']
            },
            {
              title: 'Veg Curries (any One)',
              items: ['Alu Kurma', 'Gutti Vankaya', 'Gutti Dondakaya', 'Mixed Veg Curry']
            },
            {
              title: 'Veg Flavoured Rice (any One)',
              items: ['Veg Palao', 'Veg Dum Biryani', 'Veg Biryani', 'Bagara Rice', 'Pulihora']
            },
            {
              title: 'Rice Accomplishments (any Three)',
              items: ['Dal', 'Sambar/Rasam', 'Powders with Ghee']
            },
            {
              title: 'Sweets (any One)',
              items: ['Kaddu Ka Kheer', 'Kala Jamun', 'Double Ka Meeta', 'Gulab Jamun']
            },
            {
              title: 'Common Items (any Seven)',
              items: ['White Rice', 'Papad/Fryarms', 'Raitha', 'Curd', 'Pickles', 'Cucumber Salad', 'Water']
            }
          ]
        },
        regular: {
          id: 'regular',
          name: 'Regular Veg Menu',
          minOrder: '100 pax',
          servingStaff: 'Provided',
          customization: 'Available',
          sections: [
            {
              title: 'Indian Breads (any One)',
              items: ['Rumali Roti', 'Poori', 'Chapati', 'Pulka']
            },
            {
              title: 'Veg Curries (any Two)',
              items: ['Chana Masala', 'Paneer Butter Masala', 'Alu Kurma', 'Kadai Paneer', 'Gutti Vankaya Massala']
            },
            {
              title: 'Veg Flavoured Rice (any One)',
              items: ['Veg Palao', 'Veg Biryani', 'Bagara Rice', 'Veg Dum Biryani', 'Pulihora']
            },
            {
              title: 'Rice Accomplishments (any Two)',
              items: ['Dal', 'Sambar/Rasam']
            },
            {
              title: 'Desserts (any Two)',
              items: ['Sweet', 'Ice Cream']
            },
            {
              title: 'Common Items (any Seven)',
              items: ['White Rice', 'Plain Papads', 'Curd', 'Raitha', 'Pickles', 'Cucumber Salad', 'Water']
            }
          ]
        },
        standard: {
          id: 'standard',
          name: 'Standard Veg Menu',
          minOrder: '50 pax',
          servingStaff: 'Provided',
          customization: 'Available',
          sections: [
            {
              title: 'Salad (any One)',
              items: ['Green Salad', 'Sprouted Salad', 'Chana Salad', 'Boiled Green Gram', 'Boiled Peanut', 'Cucumber Salad']
            },
            {
              title: 'Snacks (any One)',
              items: ['Aratikaya Bajji', 'Alu Bajji', 'Corn Wada', 'Corn Samosa', 'Dahi Wada', 'Alu Bonda', 'Mirchi Bajji', 'French Fries', 'Alu Tikki', 'Veg Nuggets', 'Veg Cutlet', 'Cut Mirchi']
            },
            {
              title: 'Veg Curries (any Two)',
              items: [
                'Beans Panjab Curry', 'Chana Masala', 'Methi Chaman', 'Green Peas Curry',
                'Bagara Baingan', 'Paneer Butter Masala', 'Tomato Phool Makhani', 'Mixed Veg Curry',
                'Alu Kurma', 'Chole Aloo', 'Baby Corn Palak', 'Malai Methi Paneer',
                'Baby Corn Mutter Curry', 'Sweet Corn Curry', 'Veg Kofta', 'Stuffed Tomato Curry',
                'Kadai Paneer', 'Achary Paneer', 'Paneer Jalfrezi', 'Paneer Rajma', 'Paneer Do Pyaza'
              ]
            },
            {
              title: 'Veg Fry (any Two)',
              items: ['Bendi Fry', 'Capsicum Pakodi', 'Mixed Veg Fry', 'Gobi Pakoda', 'Brinjal Pakoda', 'Cabbage Pakoda', 'Palak Pakodi']
            },
            {
              title: 'Dal (any One)',
              items: ['Palak Dal', 'Tomato Pappu', 'Mango Pappu', 'Tadka Dal', 'Thotakura Pappu', 'Dal Fry', 'Dal Makhani']
            },
            {
              title: 'Indian Breads (any One)',
              items: ['Rumali Roti', 'Pulka', 'Chapati', 'Poori', 'Palak Poori']
            },
            {
              title: 'Veg Flavoured Rice (any One)',
              items: ['Veg Biryani', 'Veg Fried Rice', 'Mutter Panner Pulao', 'Corn Kaju Palao', 'Veg Dum Biryani', 'Bagara Rice', 'Green Peas Palao', 'Jeera Rice']
            },
            {
              title: 'Semi Liquids (any One)',
              items: ['Drumstick Sambar', 'Madras Sambar', 'Ulava Charu', 'Pappu Charu', 'Tomato Rasam', 'Pepper Rasam', 'Kobbari Charu']
            },
            {
              title: 'Papads (any One)',
              items: ['Plain Papad', 'Masala Papad', 'Rice Appadam']
            },
            {
              title: 'Raitha (any One)',
              items: ['Onion Carrot Raitha', 'Plain Raitha', 'Boondhi Raitha', 'Tadkha Raitha', 'Kela Raitha', 'Grape Raitha', 'Pineapple Raitha']
            },
            {
              title: 'Sweets (any Two)',
              items: ['Finger Jamun', 'Kaddu Ka Kheer', 'Badusha', 'Kala Jamun', 'Laddu', 'Besin Chekki', 'Double Ka Meeta', 'Gazar Ka Halwa', 'Milk Mysore Pak', 'Carrot Halwa', 'Gulab Jamun', 'Angur Jamun']
            },
            {
              title: 'Desserts (any One)',
              items: ['Venilla Ice Cream', 'Tutty Fruity', 'Mango Ice Cream', 'Fruit Salad with Custard', 'Butter Scotch Ice Cream', 'Strawberry Ice Cream', 'Raw Fruits']
            },
            {
              title: 'Common Items (any Five)',
              items: ['Fryums', 'Water', 'White Rice', 'Curd']
            }
          ]
        },
        gold: {
          id: 'gold',
          name: 'Gold Veg Menu',
          minOrder: '150 pax',
          servingStaff: 'Provided',
          customization: 'Available',
          sections: [
            {
              title: 'Welcome Drink (any One)',
              items: ['Grape Juice', 'Mosambi Juice', 'Orange Juice', 'Sugarcane Juice', 'Mango Juice', 'Water Melon Juice', 'Fresh Lime Juice', 'Jaljeera', 'Sweet Lassi', 'ButterMilk', 'Badam Milk', 'Fruit Punch', 'Assorted Soft Drinks']
            },
            {
              title: 'Veg Soups (any One)',
              items: ['Veg Mancho Soup', 'Hot and Sour Soup', 'Green Peas Shorba', 'Sweet Corn Soup', 'Tomato Soup']
            },
            {
              title: 'Salad (any One)',
              items: ['Green Salad', 'Sprouted Salad', 'Chana Salad', 'Boiled Green Gram', 'Boiled Peanut', 'Cucumber Salad']
            },
            {
              title: 'Veg Starters (any One)',
              items: ['Pesara Punugulu', 'Veg Bullets', 'Veg Manchuriya', 'Veg Nuggets', 'Veg Lollypops', 'Veg Fingers', 'Veg Spring Rolls', 'Shangai Rolls', 'Corn Rolls', 'Corn Samosa', 'Chilly Baby Corn', 'Paneer Tikka', 'Chilly Paneer', 'Paneer Lollypops', 'Gobi 65', 'Chilly Gobi']
            },
            {
              title: 'Snacks (any One)',
              items: ['Veg Cutlet', 'Veg Nuggets', 'Veg Lollypops', 'Corn Wada', 'Corn Samosa', 'Bread Pakoda', 'Dahi Wada', 'Minapa Wada', 'Pesara Wada', 'Veg Bonda', 'Alu Bonda', 'Mirchi Bajji', 'Aratikaya Bajji', 'French Fries', 'Palak Pakoda', 'Methi Pakoda', 'Alu Tikki', 'Banana Chips', 'Alu Chips', 'Moongdal Mini Samosa', 'Kothimira Wada', 'Kara Boondi', 'Cut Mirchi', 'Capsicum Pakodi', 'Gobi Pakoda', 'Cabbage Pakoda', 'Brinjal Pakoda']
            },
            {
              title: 'Veg Curries (any Two)',
              items: [
                'Chole Aloo', 'Chana Masala', 'Aratikaya Curry', 'Navarathan Kurma', 'Tomato Phool Makhani',
                'Methi Chaman', 'Kaju Mullakada', 'Green Peas Curry', 'Kadai Paneer', 'Malai Methi Paneer',
                'Paneer Butter Masala', 'Paneer Jalfrezi', 'Paneer Rajma', 'Paneer Do Pyaza', 'Alu Paneer Capsicum',
                'Alu Palak', 'Alu Kurma', 'Alu Tomato', 'Alu Gobi Tomato', 'Stuffed Tomato Curry',
                'Kadai Veg', 'Mixed Veg Curry', 'Veg Kofta', 'Veg Do Pyaza', 'Bagara Baingan',
                'Mushroom Masala', 'Baby Onion Curry', 'Baby Corn Palak', 'Baby Corn Mutter Curry', 'Sweet Corn Curry'
              ]
            },
            {
              title: 'Veg Fry (any Two)',
              items: ['Bendi Fry', 'Dondakai Fry', 'Jeera Alu', 'Beans Poriyal', 'Aratikai Fry', 'Mixed Veg Fry', 'Vankaya Kobbari Karam', 'Vankaya Allam Pachimirchi', 'Chana Coconut Fry', 'Kakarakaya Fry', 'Totakura Chana Fry', 'Chenna Beans Poriyal']
            },
            {
              title: 'Dal (any One)',
              items: ['Palak Dal', 'Tomato Pappu', 'Dosakaya Pappu', 'Gangaveli Pappu', 'Lemon Pappu', 'Mango Pappu', 'Mudda Pappu', 'Yellow Dal', 'Tadka Dal', 'Thotakura Pappu', 'Dal Fry', 'Dal Makhani']
            },
            {
              title: 'Indian Breads (any One)',
              items: ['Rumali Roti', 'Pulka', 'Chapati', 'Poori', 'Palak Poori', 'Baby Naan', 'Butter Naan', 'Plain Naan', 'Aloo Parata', 'Lacha Paratha', 'Palak Paratha', 'Paneer Kulcha', 'Plain Kulcha', 'Masala Kulcha']
            },
            {
              title: 'Veg Flavoured Rice (any One)',
              items: ['Steam Rice', 'Veg Biryani', 'Veg Dum Biryani', 'Veg Fried Rice', 'Bagara Rice', 'Pulihora', 'Mutter Panner Pulao', 'Corn Kaju Palao', 'Green Peas Palao', 'Jeera Rice', 'Bisibella Bath', 'Coconut Fried Rice', 'Gobi Rice', 'Veg Palao', 'Ulavacharu Biryani', 'Vangi Bath', 'Mushroom Biryani', 'Bread Panner Palao']
            },
            {
              title: 'Semi Liquids (any One)',
              items: ['Majjiga Pulusu', 'Drumstick Sambar', 'Kaddu Sambar', 'Madras Sambar', 'Ulava Charu', 'Pappu Charu', 'Pachi Pulusu', 'Tomato Rasam', 'Zeera Rasam', 'Pepper Rasam', 'Kobbari Charu', 'Beetroot Rasam']
            },
            {
              title: 'Pickles (any Two)',
              items: ['Dondakaya Pachadi', 'Mango Pickle', 'Pandu Mirapakai', 'Dosavakai', 'Lemon Pickle', 'Usarikai Pickle', 'Kothimir Pachadi', 'Goongura Pachadi', 'Tomata Pachadi', 'Beerakaya', 'Allam Pachadi', 'Pudina Pachadi', 'Green Chilly Chutney', 'Red Chilly Chutney']
            },
            {
              title: 'Papads (any One)',
              items: ['Plain Papad', 'Masala Papad', 'Rice Appadam', 'Fryums']
            },
            {
              title: 'Raitha (any One)',
              items: ['Onion Carrot Raitha', 'Plain Raitha', 'Boondhi Raitha', 'Tadkha Raitha', 'Alu Raitha', 'Kela Raitha', 'Mukati Perugu', 'Mango Raitha', 'Grape Raitha', 'Pineapple Raitha']
            },
            {
              title: 'Sweets (any Two)',
              items: ['Bobbatlu', 'Poornalu', 'Kaddu Ka Kheer', 'Badusha', 'Kala Jamun', 'Kova Puri', 'Finger Jamun', 'Laddu', 'Besin Chekki', 'Double Ka Meeta', 'Gazar Ka Halwa', 'Moomg Dal Halwa', 'Milk Mysore Pak', 'Carrot Halwa', 'Ravva Laddu', 'Gulab Jamun', 'Kurbani Ka Meeta', 'Angur Jamun', 'Semiya Payasam']
            },
            {
              title: 'Desserts (any One)',
              items: ['Raw Fruits', 'Venilla Ice Cream', 'Tutty Fruity', 'Mango Ice Cream', 'Black Current Ice Cream', 'Venilla With Kaju', 'Fruit Salad with Custard', 'Kulfi', 'Butter Scotch Ice Cream', 'Strawberry Ice Cream']
            },
            {
              title: 'Pan (any One)',
              items: ['Sweet Pan', 'Calcutta Pan', 'Sada Pan', 'Jarda Pan']
            },
            {
              title: 'Common Items (any Six)',
              items: ['White Rice', 'Curd', 'Plain Papads', 'Powders', 'Water', 'Ghee']
            }
          ]
        }
      }
    },
    'non-veg': {
      title: 'Non-Vegetarian Menus',
      packages: {
        standard: {
          id: 'standard',
          name: 'Standard Non-Veg Menu',
          minOrder: '100 pax',
          servingStaff: 'Provided',
          customization: 'Available',
          sections: [
            {
              title: 'Snacks (any One)',
              items: ['Dahi Wada', 'Aratikaya Bajji', 'Alu Bajji', 'Alu Bonda', 'French Fries', 'Mirchi Bajji', 'Cut Mirchi']
            },
            {
              title: 'Non Veg Curries (any One)',
              items: ['Methi Chicken', 'Kadai Chicken', 'Chicken Masala', 'Butter Chicken', 'Dum Ka Chicken']
            },
            {
              title: 'Veg Curries (any One)',
              items: ['Chole Aloo', 'Green Peas Curry', 'Kadai Paneer', 'Paneer Do Pyaza', 'Alu Kurma', 'Chana Masala', 'Navarathan Kurma', 'Bagara Baingan', 'Paneer Butter Masala', 'Mixed Veg Curry', 'Alu Gobi Tomato', 'Alu Tomato', 'Kadai Veg']
            },
            {
              title: 'Indian Breads (any One)',
              items: ['Pulka', 'Chapati', 'Poori', 'Rumali Roti']
            },
            {
              title: 'Non Veg Flavoured Rice (any One)',
              items: ['Chicken Dum Biryani', 'Mutton Dum Biryani']
            },
            {
              title: 'Veg Flavoured Rice (any One)',
              items: ['Veg Dum Biryani', 'Veg Biryani', 'Veg Fried Rice', 'Bagara Rice', 'Green Peas Palao', 'Jeera Rice', 'Veg Palao', 'Pulihora']
            },
            {
              title: 'Dal (any One)',
              items: ['Palak Dal', 'Tomato Pappu', 'Gangaveli Pappu', 'Mango Pappu']
            },
            {
              title: 'Veg Fry (any One)',
              items: ['Bendi Fry', 'Dondakai Fry', 'Aratikai Fry', 'Mixed Veg Fry', 'Totakura Chana Fry', 'Gobi Pakoda', 'Vankaya Kobbari Karam', 'Brinjal Pakoda']
            },
            {
              title: 'Sweets (any One)',
              items: ['Kaddu Ka Kheer', 'Kala Jamun', 'Laddu', 'Besin Chekki', 'Double Ka Meeta', 'Gazar Ka Halwa', 'Moomg Dal Halwa', 'Ravva Laddu', 'Gulab Jamun', 'Angur Jamun']
            },
            {
              title: 'Desserts (any One)',
              items: ['Venilla Ice Cream', 'Butter Scotch Ice Cream', 'Fruit Salad with Custard', 'Strawberry Ice Cream', 'Raw Fruits']
            },
            {
              title: 'Common Items (any Eight)',
              items: ['Fryums', 'White Rice', 'Curd', 'Sambar/Rasam', 'Raitha', 'Pickles', 'Water', 'Cucumber Salad']
            }
          ]
        },
        gold: {
          id: 'gold',
          name: 'Gold Non-Veg Menu',
          minOrder: '150 pax',
          servingStaff: 'Provided',
          customization: 'Available',
          sections: [
            {
              title: 'Welcome Drink (any two)',
              items: ['Mango Blossom', 'Leechi Milk Shake', 'Strawberry Milkshake', 'Assorted Soft Drinks', 'Orange Juice', 'Guava Juice', 'Water Melon Juice', 'ButterMilk', 'Badam Milk', 'Fruit Punch']
            },
            {
              title: 'Veg Soups (any Two)',
              items: ['Sweet Corn Soup', 'Veg Mancho Soup', 'Hot and Sour Soup', 'Tomato Soup']
            },
            {
              title: 'Salad (any Two)',
              items: ['Sprouted Salad', 'Green Salad', 'Russian Salad']
            },
            {
              title: 'Non Veg Starters (any Three)',
              items: [
                'Chicken Manchuriya', 'Roasted Chicken', 'Chicken Lollypops', 'Ginger Chicken',
                'Chicken Tangdi Kabab', 'Murg Malai Kabab', 'Chilli Chicken', 'Chicken Tikka',
                'Chicken Spring Rolls', 'Chicken Tikka Masala', 'Mutton 65', 'Masala Egg',
                'Chicken Whiskey Wings', 'Keema Samosa', 'Mutton Kabab', 'Mutton Cutlets',
                'Meet Balls', 'Mutton Rolls', 'Cheese Chicken Balls', 'Egg 65', 'Garlic Checken Wings'
              ]
            },
            {
              title: 'Veg Starters (any Two)',
              items: [
                'Veg Paneer Bullets', 'Veg Spring Rolls', 'Veg Manchuriya', 'Veg Nuggets',
                'Veg Lollypops', 'Veg Fingers', 'Crispy Baby Corn', 'Corn Rolls',
                'Corn Samosa', 'Chilly Baby Corn', 'Paneer Tikka', 'Chilly Paneer',
                'Paneer Lollypops', 'Bread Pakoda', 'Dahi Wada', 'Minapa Wada',
                'Pesara Wada', 'Veg Bonda', 'Aratikaya Bajji', 'Alu Bajji',
                'Alu Bonda', 'Kachori', 'French Fries', 'Mirchi Bajji',
                'Palak Pakoda', 'Methi Pakoda', 'Cut Mirchi', 'Alu Tikki',
                'Banana Chips', 'Alu Chips', 'Moongdal Mini Samosa', 'Kothimira Wada',
                'Kara Boondi', 'Capsicum Pakodi', 'Gobi Pakoda', 'Brinjal Pakoda', 'Cabbage Pakoda'
              ]
            },
            {
              title: 'Non Veg Curries (any Two)',
              items: [
                'Pepper Mutton Curry', 'Ginger Mutton', 'Gongoora Mutton', 'Dum Ka Mutton Curry',
                'Kadai Mutton', 'Kheema Mutton Curry', 'Methi Chicken', 'Kadai Chicken',
                'Chicken Masala', 'Gongoora Chicken', 'Dum Ka Chicken', 'Ginger Chicken'
              ]
            },
            {
              title: 'Veg Curries (any Two)',
              items: [
                'Chana Masala', 'Green Peas Curry', 'Kadai Paneer', 'Paneer Do Pyaza',
                'Alu Kurma', 'Navarathan Kurma', 'Bagara Baingan', 'Paneer Butter Masala',
                'Mixed Veg Curry', 'Alu Gobi Tomato', 'Alu Tomato', 'Kadai Veg'
              ]
            },
            {
              title: 'Indian Breads (any Two)',
              items: ['Pulka', 'Butter Naan', 'Poori', 'Rumali Roti']
            },
            {
              title: 'Non Veg Flavoured Rice (any One)',
              items: ['Chicken Dum Biryani', 'Mutton Dum Biryani']
            },
            {
              title: 'Veg Flavoured Rice (any One)',
              items: ['Veg Dum Biryani', 'Veg Biryani', 'Veg Fried Rice', 'Bagara Rice', 'Green Peas Palao', 'Jeera Rice', 'Veg Palao', 'Pulihora']
            },
            {
              title: 'Veg Fry (any One)',
              items: ['Bendi Fry', 'Alu Fry', 'Totakura Chana Fry', 'Gobi Pakoda', 'Vankaya Kobbari Karam', 'Brinjal Pakoda']
            },
            {
              title: 'Sweets (any Four)',
              items: ['Kaddu Ka Kheer', 'Kala Jamun', 'Tawa Sweet', 'Besin Chekki', 'Double Ka Meeta', 'Gazar Ka Halwa', 'Moomg Dal Halwa', 'Rasmalai', 'Gulab Jamun', 'Angur Jamun']
            },
            {
              title: 'Desserts (any One)',
              items: ['Venilla Ice Cream', 'Butter Scotch Ice Cream', 'Fruit Salad with Custard', 'Strawberry Ice Cream', 'Raw Fruits']
            },
            {
              title: 'Common Items (any Eight)',
              items: ['Fryums', 'White Rice', 'Curd', 'Sambar/Rasam', 'Raitha', 'Pickles', 'Water', 'Cucumber Salad']
            }
          ]
        }
      }
    }
  };

  const currentCategoryData = menuData[activeCategory] || menuData.veg;
  const packageList = Object.values(currentCategoryData.packages);
  const currentPackage = currentCategoryData.packages[activePackage] || packageList[0];

  const handleWhatsAppInquiry = (pkg) => {
    const targetPackage = pkg || currentPackage;
    const message = `Hi Nashwan Catering, I'm interested in the "${targetPackage.name}" package. Could you please share more details and pricing?`;
    window.open(`https://wa.me/919949390829?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#01142B] text-[#FDFBF7] flex flex-col pt-24 sm:pt-28 font-sans selection:bg-[#ECC870]/30">
      
      {/* Top Banner / Breadcrumb Heading - Royal Blue Gradient */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#011022] via-[#01142B] to-[#021B3A] border-b border-[#ECC870]/20 text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat opacity-20 pointer-events-none"
          style={{ backgroundImage: "url('assets/hero-bg.jpg')", backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#011227]/90 via-[#01142B]/95 to-[#01142B] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="font-montserrat text-xs sm:text-[13px] font-medium tracking-[0.25em] uppercase text-[#ECC870] block mb-2">
            OUR CURATED MENUS & PACKAGES
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-3">
            The Taste of Hyderabad
          </h1>
          <p className="font-lato text-neutral-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            Select from our chef-crafted packages or customize individual dishes tailored for your grand celebration.
          </p>
        </div>
      </section>

      {/* Main Content Area - Midnight Navy Backdrop */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 py-10 sm:py-14 flex-1">
        
        {/* Category Switcher Tabs (Zero Scrollbars - Clean Centered Royal Blue Pill) */}
        <div className="flex flex-col items-center justify-center mb-10 sm:mb-12">
          <span className="font-montserrat text-[11px] sm:text-xs font-medium uppercase tracking-[0.22em] text-[#ECC870]/80 mb-3 block">
            CLICK TO SWITCH CATEGORY
          </span>
          <div className="inline-flex p-1.5 rounded-full bg-[#021630] border border-[#ECC870]/30 shadow-xl">
            <button
              onClick={() => handleCategorySwitch('veg')}
              className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-montserrat font-medium uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'veg'
                  ? 'bg-[#ECC870] text-[#01142B] font-semibold shadow-md'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Vegetarian Menus
            </button>
            <button
              onClick={() => handleCategorySwitch('non-veg')}
              className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-montserrat font-medium uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'non-veg'
                  ? 'bg-[#C53030] text-white font-semibold shadow-md'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Non-Vegetarian Menus
            </button>
          </div>
        </div>

        {/* Two-Column Layout: Left Sidebar + Right Main Package Display */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          
          {/* LEFT SIDEBAR: SELECT PACKAGE - Deep Navy Glass Card */}
          <aside className="w-full lg:w-72 xl:w-80 shrink-0">
            <div className="bg-[#021B3A]/90 border border-[#ECC870]/30 rounded-2xl p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.45)] sticky top-28 backdrop-blur-md">
              
              <div className="mb-5 pb-4 border-b border-[#ECC870]/20">
                <h3 className="font-cormorant text-lg sm:text-xl font-medium tracking-wide text-[#ECC870] uppercase">
                  Select Package
                </h3>
                <p className="font-montserrat text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-neutral-400 mt-1">
                  Click a package to view details
                </p>
              </div>

              {/* Package List Buttons */}
              <div className="space-y-2.5 mb-6">
                {packageList.map((pkg) => {
                  const isActive = currentPackage.id === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => handlePackageSelect(pkg.id)}
                      className={`group flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all border ${
                        isActive
                          ? 'border-[#ECC870] bg-[#ECC870]/15 shadow-[0_0_20px_rgba(236,200,112,0.2)] text-[#ECC870]'
                          : 'border-[#ECC870]/20 bg-[#06244C]/60 hover:border-[#ECC870]/50 hover:bg-[#082E60] text-neutral-200 hover:text-white'
                      }`}
                    >
                      <span className={`font-montserrat text-xs uppercase tracking-wider font-medium ${
                        isActive ? 'text-[#ECC870] font-semibold' : ''
                      }`}>
                        {pkg.name}
                      </span>
                      
                      {/* WhatsApp Mini Icon */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppInquiry(pkg);
                        }}
                        title={`Inquire about ${pkg.name} on WhatsApp`}
                        className="p-1.5 rounded-full text-neutral-400 hover:text-[#25D366] transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 stroke-[1.8]" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Custom Menu Builder Link */}
              <div className="pt-4 border-t border-[#ECC870]/20">
                <p className="font-lato text-xs text-neutral-400 mb-2">
                  Want to mix and match individual items?
                </p>
                <button
                  onClick={() => {
                    if (onOpenCustomMenu) onOpenCustomMenu();
                    else if (onNavigate) onNavigate('custom');
                  }}
                  className="inline-flex items-center gap-2 font-montserrat text-xs font-medium uppercase tracking-wider text-[#ECC870] hover:text-[#F7DF94] group transition-colors"
                >
                  <span>Custom Menu Builder</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </aside>

          {/* RIGHT MAIN PANEL: ACTIVE PACKAGE DETAILS & DISH CATEGORIES */}
          <main className="flex-1 w-full min-w-0">
            
            {/* Package Title Banner & Metadata - Royal Blue Glass */}
            <div className="bg-[#021B3A]/95 border border-[#ECC870]/35 rounded-2xl p-6 sm:p-8 mb-6 shadow-2xl backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-white mb-2">
                  {currentPackage.name}
                </h2>
                
                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm font-lato text-neutral-200 font-normal">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870]" />
                    <strong className="text-white">Min Order:</strong> {currentPackage.minOrder}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870]" />
                    <strong className="text-white">Food Serving Staff:</strong> {currentPackage.servingStaff}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870]" />
                    <strong className="text-white">Menu Customization:</strong> {currentPackage.customization}
                  </span>
                </div>
              </div>

              {/* Top-Right WhatsApp Booking Button */}
              <button
                onClick={() => handleWhatsAppInquiry(currentPackage)}
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#ECC870] hover:bg-[#F7DF94] text-[#01142B] font-montserrat font-medium text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(236,200,112,0.3)] transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>BOOK / ENQUIRE</span>
              </button>
            </div>

            {/* Dish Sections Grid (2 Columns) - Royal Blue Cards with Gold Accents */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {currentPackage.sections.map((section, idx) => (
                <div
                  key={idx}
                  className="bg-[#021B3A]/85 border border-[#ECC870]/25 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-[#ECC870]/50 hover:bg-[#03234B]/95 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Section Title */}
                    <h3 className="font-cormorant text-lg sm:text-xl font-medium text-[#ECC870] pb-2.5 border-b border-[#ECC870]/20 mb-4 flex items-center justify-between">
                      <span>{section.title}</span>
                      <span className="text-[11px] font-montserrat text-neutral-400 font-normal">
                        {section.items.length} options
                      </span>
                    </h3>

                    {/* Dish Items List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm font-lato text-neutral-100">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#ECC870] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Inquire Card - Deep Royal Blue Banner */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#011227] via-[#021F43] to-[#01142B] border border-[#ECC870]/35 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-2xl">
              <div>
                <h4 className="font-cormorant text-2xl font-medium text-white mb-1">
                  Ready to book {currentPackage.name}?
                </h4>
                <p className="font-lato text-xs sm:text-sm text-neutral-300 font-normal">
                  Our catering managers will customize portions, live counters, and banquet setup to your exact guest count.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <button
                  onClick={() => handleWhatsAppInquiry(currentPackage)}
                  className="px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-montserrat font-medium text-xs uppercase tracking-wider shadow-md flex items-center gap-2 hover:scale-[1.02] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    if (onOpenCustomMenu) onOpenCustomMenu();
                    else if (onNavigate) onNavigate('custom');
                  }}
                  className="px-6 py-3 rounded-lg border border-[#ECC870] text-[#ECC870] hover:bg-[#ECC870]/10 font-montserrat font-medium text-xs uppercase tracking-wider transition-colors"
                >
                  Custom Builder
                </button>
              </div>
            </div>

          </main>

        </div>

      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} onOpenBooking={onOpenBooking} />
    </div>
  );
}
