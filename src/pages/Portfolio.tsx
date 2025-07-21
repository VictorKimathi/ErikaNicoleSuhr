import React, { useState, memo } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { ArrowRight, ExternalLink } from 'lucide-react';
export function Portfolio() {
  const categories = ['All', 'Long-form Articles', 'Product Roundups', 'DIY Guides', 'Seasonal Features'];
  const [activeCategory, setActiveCategory] = useState('All');
  const portfolioItems = [{
    title: 'What Happens If You Over-Rotate Your Vegetable Crops',
    type: 'Gardening and Soil Health',
    description: 'Crop rotation is widely regarded as one of the most effective strategies for maintaining a healthy vegetable garden. By moving crops between different areas each season, gardeners can disrupt pest and disease cycles, prevent nutrient depletion, and promote long-term soil vitality. ',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    href: 'What_Happens_If_You_Over.pdf'
  }, {
    title: '5 Clever Places in Your Home to Hide Water Leak Alarms',
    type: 'Home Maintenance Guide',
    description: 'Water damage doesn’t always begin with a burst pipe. It often starts with a slow, silent drip behind a wall, under an appliance, or beneath a sink, only becoming obvious once the damage is done. Water leak alarms can catch these issues early, but to be effective, the sensor needs to sit close to potential leak sources, yet remain protected from interference.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    href: '5_Clever_Places_in_Your_Home.pdf'
  }, {
    title: 'What Happens If You Don’t Ventilate Your Attic Properly',
    type: 'Home Improvement & Energy Efficiency',
    description: 'Attic ventilation plays a key role in maintaining a safe and efficient home, yet it’s often overlooked. Proper airflow regulates temperature, controls moisture, and prevents long-term damage to insulation, roofing, and structural materials. Without it, heat and humidity can build up, leading to mold growth, wood rot, and higher energy costs.',
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    href: 'What_Happens_If_You_Don.pdf'
  }
  }];
  const filteredItems = activeCategory === 'All' ? portfolioItems : portfolioItems.filter(item => item.type === activeCategory);
  return <div className="pt-16">
      {/* Hero Section */}
      <Section fullWidth className="min-h-[50vh] flex items-center" bgColor="bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-medium leading-tight">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my work across various home and lifestyle topics,
            showcasing my ability to create engaging and useful content.
          </p>
        </div>
      </Section>
      {/* Portfolio Filter */}
      <Section>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => <button key={category} className={`px-4 py-2 rounded-full transition-colors ${activeCategory === category ? 'bg-teal-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setActiveCategory(category)}>
              {category}
            </button>)}
        </div>
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-56 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500">
                  {item.client} • {item.type}
                </span>
                <h3 className="text-xl font-medium mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a href="https://erikasuhrwrites.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-700 font-medium hover:text-teal-800 transition-colors">
                  Read Article <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>)}
        </div>
      </Section>
      {/* CTA Section */}
      <Section bgColor="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-medium">
            Interested in working together?
          </h2>
          <p className="text-lg text-gray-600">
            I'm always open to new projects and collaborations. Let's create
            content that resonates with your audience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button to="/contact">Contact Me</Button>
            <Button href="https://erikasuhrwrites.com" variant="outline" className="flex items-center">
              Visit My Blog <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </Section>
    </div>;
}
