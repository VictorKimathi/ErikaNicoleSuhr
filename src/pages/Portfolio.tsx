import React, { useState, memo } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { ArrowRight, ExternalLink } from 'lucide-react';
export function Portfolio() {
  const categories = ['All', 'Long-form Articles', 'Product Roundups', 'DIY Guides', 'Seasonal Features'];
  const [activeCategory, setActiveCategory] = useState('All');
  const portfolioItems = [{
    title: 'Small Space Organization Guide',
    client: 'HomeHatch',
    type: 'Long-form Articles',
    description: 'A comprehensive guide to maximizing storage and functionality in apartments under 800 square feet.',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: 'Sustainable Kitchen Essentials',
    client: 'RemodelRevive',
    type: 'Product Roundups',
    description: 'A curated collection of eco-friendly kitchen tools and appliances for the environmentally conscious home cook.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: 'DIY Entryway Makeover',
    client: 'DailyNest',
    type: 'DIY Guides',
    description: 'A step-by-step guide to transforming your entryway into a functional and welcoming space on a budget.',
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: 'Fall Home Refresh Ideas',
    client: 'Cozy & Clever Media',
    type: 'Seasonal Features',
    description: 'Seasonal tips for bringing warmth and autumn charm into your home without a complete redesign.',
    image: 'https://images.unsplash.com/photo-1508995476428-43d70c3d0042?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: 'Indoor Plant Care for Beginners',
    client: 'HomeHatch',
    type: 'Long-form Articles',
    description: 'An extensive guide to selecting, caring for, and displaying indoor plants for plant novices.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: 'Budget-Friendly Bathroom Updates',
    client: 'RemodelRevive',
    type: 'DIY Guides',
    description: 'Simple and affordable DIY projects to refresh your bathroom without a full renovation.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: 'Winter Bedding Essentials',
    client: 'DailyNest',
    type: 'Product Roundups',
    description: 'A selection of cozy, high-quality bedding products to create a warm and inviting winter bedroom.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: 'Holiday Entertaining Guide',
    client: 'Cozy & Clever Media',
    type: 'Seasonal Features',
    description: 'Tips and ideas for hosting memorable holiday gatherings in spaces of all sizes.',
    image: 'https://images.unsplash.com/photo-1482275548304-a58859dc31b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
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