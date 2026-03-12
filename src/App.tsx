/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Clock, Star, Coffee, Utensils, Droplet, GlassWater, Leaf, Menu as MenuIcon, X, Wallet, Instagram } from 'lucide-react';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const menuData = [
  {
    category: "COFFEE",
    icon: <Coffee className="text-stone-800 mr-3" size={28} />,
    subcategories: [
      {
        name: "Manual Brew / Filter",
        items: [
          { name: "V60 (Local)", price: "18" },
          { name: "V60 (Seasonal)", price: "25" },
          { name: "Vietnam Drip", price: "15" },
        ]
      },
      {
        name: "Espresso Based",
        items: [
          { name: "Americano / Long Black", price: "18" },
          { name: "Double Espresso", price: "15" },
          { name: "Piccolo", price: "18" },
          { name: "Cappuccino", price: "20" },
          { name: "Cafe Latte", price: "20" },
          { name: "Flat White", price: "20" },
          { name: "Mochaccino", price: "23" },
          { name: "Affogato", price: "20" },
          { name: "Vanilla Latte", price: "23" },
          { name: "Caramel Latte", price: "23" },
          { name: "Hazelnut Latte", price: "23" },
          { name: "Salted Caramel Latte", price: "23" },
          { name: "Irish Latte", price: "23" },
          { name: "Roasted Hazelnut Latte", price: "23" },
          { name: "Extra Shot Espresso", price: "5" },
        ]
      },
      {
        name: "Signature Coffee",
        items: [
          { name: "Es Kopi Susu Nakulo", price: "18" },
          { name: "Es Kopi Susu Sadewa", price: "18" },
          { name: "Es Kopi Susu Arjuna", price: "20" },
          { name: "Es Kopi Susu Bima", price: "20" },
          { name: "Es Kopi Susu Yudhistira", price: "20" },
          { name: "Coffee Lemonade", price: "20" },
        ]
      },
      {
        name: "Bottled Coffee (250ml)",
        items: [
          { name: "Classic Americano / Black Coffee", price: "18" },
          { name: "Kopi Susu Nakulo / Sadewa", price: "20" },
        ]
      }
    ]
  },
  {
    category: "NON-COFFEE",
    icon: <GlassWater className="text-stone-800 mr-3" size={28} />,
    subcategories: [
      {
        name: "Sweet Drink",
        items: [
          { name: "Chocolate", price: "20" },
          { name: "Matcha", price: "20" },
          { name: "Taro", price: "20" },
          { name: "Red Velvet", price: "20" },
          { name: "Signature Choco Caramel", price: "23" },
          { name: "Signature Choco Hazelnut", price: "23" },
          { name: "Cookies & Cream", price: "23" },
        ]
      },
      {
        name: "Milk Based Drink",
        items: [
          { name: "Fresh Milk", price: "15" },
          { name: "Vanilla Milk", price: "18" },
          { name: "Caramel Milk", price: "18" },
          { name: "Hazelnut Milk", price: "18" },
        ]
      },
      {
        name: "Tea Based",
        items: [
          { name: "Original Tea", price: "10" },
          { name: "Lemon Tea", price: "15" },
          { name: "Lychee Tea", price: "18" },
          { name: "Peach Tea", price: "18" },
          { name: "Strawberry Tea", price: "18" },
        ]
      }
    ]
  },
  {
    category: "FOOD ITEMS",
    icon: <Utensils className="text-stone-800 mr-3" size={28} />,
    subcategories: [
      {
        name: "Snacks",
        items: [
          { name: "French Fries", price: "15" },
          { name: "Potato Wedges", price: "18" },
          { name: "Cireng", price: "15" },
          { name: "Fried Cassava (Singkong Goreng)", price: "15" },
          { name: "Fried Banana (Pisang Goreng)", price: "15" },
          { name: "Mendoan", price: "15" },
          { name: "Tahu Walik", price: "18" },
          { name: "Chicken Wings", price: "23" },
          { name: "Platter (Mix Snacks)", price: "25" },
        ]
      },
      {
        name: "Heavy Meals (Makanan Berat)",
        items: [
          { name: "Nasi Gila", price: "20" },
          { name: "Nasi Ayam Sambal Matah", price: "23" },
          { name: "Nasi Ayam Geprek", price: "23" },
          { name: "Nasi Ayam Teriyaki", price: "23" },
          { name: "Nasi Goreng Nakulo", price: "23" },
          { name: "Nasi Goreng Spesial", price: "25" },
          { name: "Indomie (Goreng/Kuah) Single", price: "10" },
          { name: "Indomie (Goreng/Kuah) Double", price: "15" },
          { name: "Extra Topping (Egg/Cheese/etc)", price: "3-5" },
        ]
      }
    ]
  }
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Text Reveal
    gsap.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.2
    });

    // Hero Parallax
    gsap.to('.hero-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Menu Parallax
    gsap.to('.menu-bg', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '#menu',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // About Reveal
    gsap.from('.about-element', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
      }
    });

    // Menu Category Headers Reveal
    gsap.utils.toArray('.menu-category-header').forEach((header: any) => {
      gsap.from(header, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
        }
      });
    });

    // Menu Subcategory Blocks Reveal
    gsap.utils.toArray('.menu-sub-block').forEach((block: any) => {
      gsap.from(block.querySelector('h4'), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 85%',
        }
      });
    });

    // Individual Menu Items Scale-Up & Fade-In
    gsap.utils.toArray('.menu-item').forEach((item: any) => {
      gsap.from(item, {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 95%', // Triggers right as the item enters the viewport
        }
      });
    });
  }, { scope: container });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div ref={container} className="min-h-screen bg-[#fdfbf7] text-stone-800 font-sans selection:bg-stone-200">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-stone-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo('home')}>
              <h1 className="font-serif text-2xl font-bold tracking-widest text-stone-900">KULA'AN</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Menu', 'Reviews', 'Location'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-sm font-medium text-stone-600 hover:text-stone-900 uppercase tracking-widest transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-stone-600 hover:text-stone-900"
              >
                {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#fdfbf7] border-b border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Menu', 'Reviews', 'Location'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 uppercase tracking-widest"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 h-[120%] -top-[10%] hero-bg">
          <img 
            src="https://picsum.photos/seed/coffee-shop-nature/1920/1080" 
            alt="Kula'an Coffee Shop" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <p className="hero-text text-stone-200 uppercase tracking-[0.3em] text-sm md:text-base mb-4">Welcome to</p>
          <h1 className="hero-text font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-6 font-bold tracking-tight">KULA'AN</h1>
          <p className="hero-text text-stone-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            A modern, minimal, and cozy coffee shop surrounded by nature.
          </p>
          <button 
            onClick={() => scrollTo('location')}
            className="hero-text bg-white text-stone-900 px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-stone-100 transition-colors"
          >
            Visit Us
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#fdfbf7]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Leaf className="about-element mx-auto text-stone-400 mb-6" size={32} />
          <h2 className="about-element font-serif text-4xl md:text-5xl text-stone-900 mb-10">Nature-Inspired Comfort</h2>
          <div className="space-y-6 text-lg md:text-xl text-stone-600 font-light leading-relaxed">
            <p className="about-element">"Suasana nyaman banget, di tengah komplek dan rindang sekali banyak pohon-pohon."</p>
            <p className="about-element">"Kesannya asri, sejuk, minimalis, dengan konsep tempat/rumah huni."</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 relative overflow-hidden bg-stone-100">
        {/* Menu Parallax Background */}
        <div className="absolute inset-0 z-0 h-[130%] -top-[15%] menu-bg pointer-events-none">
          <img 
            src="https://picsum.photos/seed/coffee-beans-texture/1920/1080?blur=2" 
            alt="Menu Background" 
            className="w-full h-full object-cover opacity-[0.08] mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 menu-category-header">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Our Menu</h2>
            <p className="text-stone-500 uppercase tracking-widest text-sm">Crafted with passion</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {menuData.map((section, idx) => (
              <div key={idx} className="space-y-12">
                <div className="flex items-center mb-8 border-b-2 border-stone-800 pb-4 menu-category-header">
                  {section.icon}
                  <h3 className="font-serif text-3xl text-stone-900 font-bold">{section.category}</h3>
                </div>
                
                <div className="space-y-10">
                  {section.subcategories.map((sub, subIdx) => (
                    <div key={subIdx} className="menu-sub-block">
                      <h4 className="text-xl font-serif text-stone-800 mb-4 font-semibold">{sub.name}</h4>
                      <ul className="space-y-3">
                        {sub.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex justify-between items-baseline group cursor-default menu-item">
                            <span className="text-stone-700 font-medium group-hover:text-stone-900 group-hover:translate-x-1 transition-all duration-300">{item.name}</span>
                            <div className="flex-grow border-b border-dotted border-stone-300 mx-4 group-hover:border-stone-500 transition-colors"></div>
                            <span className="text-stone-900 font-medium">{item.price}K</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-4 space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="text-amber-500 fill-amber-500" size={24} />
              ))}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">4.7 Stars</h2>
            <p className="text-stone-500 uppercase tracking-widest text-sm">Based on 179 Google Reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Tadi aku pesan Kopi Kulaan, kopi susu gula aren kalau gak salah ini.",
              "Suasana nyaman banget, di tengah komplek dan rindang sekali banyak pohon-pohon.",
              "Kesannya asri, sejuk, minimalis, dengan konsep tempat/rumah huni."
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 relative">
                <div className="text-6xl text-stone-200 font-serif absolute top-4 left-6">"</div>
                <p className="text-stone-600 relative z-10 mt-6 italic leading-relaxed">
                  {review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-24 bg-stone-900 text-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-12">Visit Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="text-stone-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-sm">Address</h4>
                    <p className="leading-relaxed">
                      Jl. Kolonel Sugiono No.64, Kandangan Bar.,<br />
                      Kec. Kandangan, Kabupaten Hulu Sungai Selatan,<br />
                      Kalimantan Selatan 71213
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-stone-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-sm">Phone</h4>
                    <p>0853-4979-8800</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-stone-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-sm">Hours</h4>
                    <p>Open until 04:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Wallet className="text-stone-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-sm">Price Range</h4>
                    <p>Rp 25.000–50.000 per person</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Instagram className="text-stone-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-sm">Instagram</h4>
                    <a href="https://www.instagram.com/kula.an" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      @kula.an
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] lg:h-auto rounded-3xl overflow-hidden relative group">
              <a href="https://www.instagram.com/kula.an" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img 
                  src="https://picsum.photos/seed/cafe-exterior/800/800" 
                  alt="Cafe Exterior" 
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex items-center text-white space-x-2">
                    <Instagram size={24} />
                    <span className="font-medium tracking-wide">View on Instagram</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24 bg-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl text-stone-900 mb-2">On The Gram</h2>
              <p className="text-stone-500 uppercase tracking-widest text-sm">Follow our daily brew</p>
            </div>
            <a 
              href="https://www.instagram.com/kula.an" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-stone-900 font-medium hover:text-stone-600 transition-colors border-b border-stone-900 pb-1"
            >
              <Instagram size={20} />
              <span>@kula.an</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "coffee-pour", "cafe-interior", "latte-art", "coffee-beans"
            ].map((seed, idx) => (
              <a 
                key={idx} 
                href="https://www.instagram.com/kula.an" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group rounded-xl"
              >
                <img 
                  src={`https://picsum.photos/seed/${seed}/600/600`} 
                  alt={`Instagram post ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors flex items-center justify-center">
                  <Instagram className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} KULA'AN Coffee Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
