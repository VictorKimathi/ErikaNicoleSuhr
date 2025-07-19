import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
export function Contact() {
  return <div className="pt-16">
      {/* Hero Section */}
      <Section fullWidth className="min-h-[40vh] flex items-center" bgColor="bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-medium leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'd love to hear about your project and discuss how I can help bring
            your vision to life.
          </p>
        </div>
      </Section>
      {/* Contact Form and Info */}
      <Section>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-medium">Contact Information</h2>
            <p className="text-gray-600">
              Feel free to reach out through any of the following channels. I
              typically respond within 24-48 hours.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-teal-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <a href="mailto:erikasuhr57@gmail.com" className="text-gray-600 hover:text-teal-700 transition-colors">
                    erikasuhr57@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-teal-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <a href="tel:+12064558574" className="text-gray-600 hover:text-teal-700 transition-colors">
                    (206) 455-8574
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-teal-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">Address</h3>
                  <address className="text-gray-600 not-italic">
                    9011 Long Pickett Ct
                    <br />
                    Huntersville, NC 28078
                  </address>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <h3 className="text-lg font-medium mb-4">Connect Online</h3>
              <a href="https://erikasuhrwrites.com" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
                Visit My Portfolio
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-sm rounded-lg">
            <h2 className="text-2xl font-medium mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50 rounded-md" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50 rounded-md" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-3 border border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50 rounded-md" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50 rounded-md" required></textarea>
              </div>
              <Button type="submit" size="large" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Section>
      {/* FAQ Section */}
      <Section bgColor="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[{
            question: 'What types of projects do you typically work on?',
            answer: 'I specialize in home and lifestyle content including long-form articles, product roundups, DIY guides, and seasonal features. My expertise covers small space design, eco-friendly living, organization, and practical home solutions.'
          }, {
            question: 'What is your turnaround time for projects?',
            answer: "Turnaround times vary depending on project scope and my current workload. For standard articles (1000-1500 words), I typically deliver within 5-7 business days. For larger projects, I'll provide a custom timeline during our initial consultation."
          }, {
            question: 'Do you offer ongoing content creation services?',
            answer: 'Yes! I work with many clients on a recurring basis, creating weekly or monthly content for their platforms. I offer package rates for ongoing collaborations and am happy to discuss a schedule that works for your needs.'
          }, {
            question: 'What information do you need to get started?',
            answer: "To provide the most accurate quote and timeline, I'll need to know your project goals, target audience, desired word count, any specific research requirements, and your preferred tone/style. A brief call or detailed email is usually sufficient to get started."
          }].map((faq, index) => <div key={index}>
                <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>)}
          </div>
        </div>
      </Section>
    </div>;
}