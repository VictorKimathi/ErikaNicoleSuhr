import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
export function Home() {
  return <div className="pt-16">
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
              <Button to="/portfolio" size="large">
                View My Portfolio
              </Button>
              <Button to="/contact" variant="outline" size="large">
                Let's Collaborate
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <img src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Stylish home interior with natural light" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>
      {/* About Preview Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-medium">My Approach</h2>
          <p className="text-lg text-gray-600">
            My work combines warmth, detail, and utility. Whether I'm writing
            how-to guides on organizing small kitchens or seasonal features on
            thrifted holiday decor, I write to help readers feel empowered in
            their homes.
          </p>
          <Button to="/about" variant="outline" className="mt-4">
            More About Me
          </Button>
        </div>
      </Section>
      {/* Services Preview */}
      <Section bgColor="bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">
          What I Write
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
          title: 'Long-form Articles',
          description: 'In-depth pieces that explore home design concepts, lifestyle trends, and practical living solutions.',
          image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        }, {
          title: 'Product Roundups',
          description: 'Curated collections of home goods and lifestyle products with thoughtful commentary and recommendations.',
          image: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        }, {
          title: 'DIY & How-to Guides',
          description: 'Step-by-step instructions and creative ideas to help readers improve their spaces and daily routines.',
          image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        }].map((service, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            </div>)}
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
          {[{
          title: 'Small Space Organization Guide',
          client: 'HomeHatch',
          type: 'Long-form Article',
          image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        }, {
          title: 'Sustainable Kitchen Essentials',
          client: 'RemodelRevive',
          type: 'Product Roundup',
          image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        }].map((item, index) => <div key={index} className="group relative overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8">
                <span className="text-white/80 text-sm">
                  {item.client} • {item.type}
                </span>
                <h3 className="text-white text-2xl font-medium mt-2">
                  {item.title}
                </h3>
                <a href="https://erikasuhrwrites.com" target="_blank" rel="noopener noreferrer" className="mt-4 text-white font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>)}
        </div>
      </Section>
      {/* CTA Section */}
      <Section bgColor="bg-teal-700" className="text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-medium">
            Ready to tell your story?
          </h2>
          <p className="text-lg text-white/80">
            Let's collaborate on content that resonates with your audience and
            brings your vision to life.
          </p>
          <Button href="https://erikasuhrwrites.com" variant="secondary" size="large" className="mt-4">
            View My Portfolio
          </Button>
        </div>
      </Section>
    </div>;
}