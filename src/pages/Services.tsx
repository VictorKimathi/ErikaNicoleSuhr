import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Check } from 'lucide-react';
export function Services() {
  return <div className="pt-16">
      {/* Hero Section */}
      <Section fullWidth className="min-h-[50vh] flex items-center" bgColor="bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-medium leading-tight">
            My Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I combine warmth, detail, and utility to create content that
            empowers readers in their homes and daily lives.
          </p>
        </div>
      </Section>
      {/* What I Write */}
      <Section>
        <h2 className="text-3xl font-medium mb-12 text-center">What I Write</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        }, {
          title: 'Seasonal Features',
          description: 'Timely content that captures the essence of each season with relevant home and lifestyle ideas.',
          image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        }].map((service, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>)}
        </div>
      </Section>
      {/* My Process */}
      <Section bgColor="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium mb-12 text-center">My Process</h2>
          <div className="space-y-12">
            {[{
            step: '01',
            title: 'Research & Discovery',
            description: 'I start by thoroughly understanding your brand, audience, and objectives. This includes analyzing your existing content, competitor research, and identifying key opportunities.'
          }, {
            step: '02',
            title: 'Content Planning',
            description: "Based on the discovery phase, I develop a strategic content plan that aligns with your goals, whether it's driving engagement, boosting SEO, or establishing authority in your niche."
          }, {
            step: '03',
            title: 'Writing & Refinement',
            description: 'I craft compelling copy that combines warmth, detail, and utility. Each piece is carefully structured to engage readers and deliver value while maintaining your brand voice.'
          }, {
            step: '04',
            title: 'Delivery & Support',
            description: "I deliver polished content ready for publication, along with any necessary meta descriptions or supporting materials. I'm available for revisions to ensure you're completely satisfied."
          }].map((process, index) => <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-700 text-white flex items-center justify-center text-xl font-medium">
                  {process.step}
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </Section>
      {/* Specialties */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium mb-8 text-center">
            My Specialties
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[{
            title: 'Small Space Design',
            items: ['Organization solutions for compact homes', 'Multi-functional furniture guides', 'Visual tricks to maximize space', 'Budget-friendly small space makeovers']
          }, {
            title: 'Eco-Friendly Living',
            items: ['Sustainable product recommendations', 'Zero-waste home guides', 'Eco-conscious renovation tips', 'Green cleaning solutions']
          }, {
            title: 'DIY Projects',
            items: ['Beginner-friendly home improvements', 'Upcycling and furniture restoration', 'Seasonal craft tutorials', 'Budget decor transformations']
          }, {
            title: 'Lifestyle Content',
            items: ['Self-care routines for the home', 'Entertaining and hosting guides', 'Seasonal home refreshes', 'Work-from-home environment optimization']
          }].map((specialty, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-4">{specialty.title}</h3>
                <ul className="space-y-3">
                  {specialty.items.map((item, i) => <li key={i} className="flex items-start">
                      <Check size={18} className="text-teal-700 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </Section>
      {/* CTA Section */}
      <Section bgColor="bg-teal-700" className="text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-medium">
            Ready to elevate your content?
          </h2>
          <p className="text-lg text-white/80">
            Let's collaborate on content that resonates with your audience and
            brings your vision to life.
          </p>
          <Button to="/contact" variant="secondary" size="large" className="mt-4">
            Get in Touch
          </Button>
        </div>
      </Section>
    </div>;
}