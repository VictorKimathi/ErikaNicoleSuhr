import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

export function Home() {
  const services = [
  {
    title: 'What Happens If You Over-Rotate Your Vegetable Crops',
    type: 'Gardening and Soil Health',
    description:
      'Crop rotation is widely regarded as one of the most effective strategies for maintaining a healthy vegetable garden...',
    image:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: 'What_Happens_If_You_Over.pdf',
  },
  {
    title: '5 Clever Places in Your Home to Hide Water Leak Alarms',
    type: 'Home Maintenance Guide',
    description:
      'Water damage doesn’t always begin with a burst pipe. It often starts with a slow, silent drip behind a wall...',
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: '5_Clever_Places_in_Your_Home.pdf',
  },
  {
    title: 'What Happens If You Don’t Ventilate Your Attic Properly',
    type: 'Home Improvement & Energy Efficiency',
    description:
      'Attic ventilation plays a key role in maintaining a safe and efficient home, yet it’s often overlooked...',
    image:
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: 'What_Happens_If_You_Don.pdf',
  },
];

  const portfolioItems = [
    {
      title: 'Small Space Organization Guide',
      client: 'HomeHatch',
      type: 'Long-form Article',
      image:
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Sustainable Kitchen Essentials',
      client: 'RemodelRevive',
      type: 'Product Roundup',
      image:
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section fullWidth className="min-h-[90vh] flex items-center" bgColor="bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-medium leading-tight">
              Building Stories That Live Where People Do
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              I'm a home and lifestyle copywriter with a deep love for cozy
              corners, clever storage, and the stories people tell through the
              spaces they shape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/portfolio" size="large">View My Portfolio</Button>
              <Button to="/contact" variant="outline" size="large">Let's Collaborate</Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Stylish home interior with natural light"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-medium">My Approach</h2>
          <p className="text-lg text-gray-600">
            My work combines warmth, detail, and utility. Whether I'm writing
            how-to guides on organizing small kitchens or seasonal features on
            thrifted holiday decor, I write to help readers feel empowered in
            their homes.
          </p>
          <Button to="/about" variant="outline" className="mt-4">More About Me</Button>
        </div>
      </Section>

      {/* Services Preview */}
      <Section bgColor="bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">What I Write</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button to="/services">Explore My Services</Button>
        </div>
      </Section>

      {/* Featured Portfolio */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium">Featured Work</h2>
          <Button to="/portfolio" variant="outline" className="mt-4 md:mt-0 flex items-center">
            View All Work <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8">
                <span className="text-white/80 text-sm">{item.client} • {item.type}</span>
                <h3 className="text-white text-2xl font-medium mt-2">{item.title}</h3>
                <a
                  href="https://erikasuhrwrites.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-white font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Read Article <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">What Clients Are Saying</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Hear directly from those I've worked with — creators, publishers, and outdoor brands who trust my voice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Testimonial
              text="An absolute pleasure to work with. Nicole turned complex outdoor topics into accessible, engaging reads our readers loved."
              img="https://randomuser.me/api/portraits/women/44.jpg"
              name="Samantha Green"
              title="Editor, TrailMarked Magazine"
            />
            {/* Testimonial 2 */}
            <Testimonial
              text="Her writing voice is warm and authentic, yet packed with useful insights. A perfect match for our sustainable living series."
              img="https://randomuser.me/api/portraits/men/36.jpg"
              name="Daniel Kim"
              title="Founder, EcoLiving Daily"
            />
            {/* Testimonial 3 */}
            <Testimonial
              text="Reliable, creative, and deeply knowledgeable. Nicole brought a fresh and informative tone to our gardening series."
              img="https://randomuser.me/api/portraits/women/55.jpg"
              name="Linda Chavez"
              title="Content Director, The Spruce"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section bgColor="bg-teal-700" className="text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-medium">Ready to tell your story?</h2>
          <p className="text-lg text-white/80">
            Let's collaborate on content that resonates with your audience and
            brings your vision to life.
          </p>
          <Button
            href="https://erikasuhrwrites.com"
            variant="secondary"
            size="large"
            className="mt-4"
          >
            View My Portfolio
          </Button>
        </div>
      </Section>
    </div>
  );
}

// Reusable testimonial component
function Testimonial({ text, img, name, title }) {
  return (
    <div className="bg-cream rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
      <p className="text-gray-800 italic mb-4">"{text}"</p>
      <div className="flex items-center">
        <img src={img} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-bold text-forest">{name}</p>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
}
