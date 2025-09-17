
import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
export function About() {
  return <div className="pt-16">
      {/* Hero Section */}
      <Section fullWidth className="min-h-[60vh] flex items-center" bgColor="bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              I'm a home and lifestyle copywriter with a deep love for cozy
              corners, clever storage, and the stories people tell through the
              spaces they shape.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img src="./Erika_Portfolio.jfif" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>
      {/* Professional Journey */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium mb-8">My Professional Journey</h2>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Freelance Contributor</h3>
              <p className="text-gray-600">
                HomeHatch, RemodelRevive, DailyNest — Remote | 2021–Present
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                <li>
                  Wrote long-form articles, product roundups, and seasonal
                  lifestyle features
                </li>
                <li>
                  Specialized in small space design, eco-friendly living, and
                  DIY hacks
                </li>
                <li>
                  Published over 80 bylined pieces with consistent editor
                  approval and reader engagement
                </li>
                <li>
                  Adapted tone to match platform—whether conversational, expert,
                  or SEO-focused
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Lifestyle Content Writer</h3>
              <p className="text-gray-600">
                Cozy & Clever Media — Charlotte, NC | 2018–2021
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                <li>
                  Produced weekly blog content for lifestyle brand focused on
                  home decor and wellness
                </li>
                <li>
                  Collaborated with photographers and product teams to align
                  copy with visuals
                </li>
                <li>
                  Researched industry trends and user habits to guide content
                  themes
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Marketing Assistant</h3>
              <p className="text-gray-600">
                NestWorks Realty Group — Charlotte, NC | 2014–2018
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                <li>
                  Created client-focused home descriptions and community
                  features for listings
                </li>
                <li>
                  Managed blog and newsletter content strategy for homebuyers
                </li>
                <li>
                  Designed seasonal print materials and guided brand voice
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      {/* Education & Tools */}
      <Section bgColor="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium mb-8">Education & Tools</h2>
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Education</h3>
            <p className="text-gray-700">
              B.A. in English | University of North Carolina at Greensboro |
              Graduated 2013
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Tools I Use</h3>
            <div className="flex flex-wrap gap-3">
              {['WordPress', 'Canva', 'Trello', 'Yoast', 'Notion', 'Hemingway Editor', 'Google Suite'].map(tool => <span key={tool} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700">
                  {tool}
                </span>)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['SEO writing', 'Seasonal content planning', 'Tone-matching', 'Visual-first writing'].map(skill => <span key={skill} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700">
                  {skill}
                </span>)}
            </div>
          </div>
        </div>
      </Section>
      {/* CTA Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-medium">Let's Work Together</h2>
          <p className="text-lg text-gray-600">
            Interested in collaborating? I'd love to help bring your vision to
            life through engaging, empowering content.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button to="/contact">Contact Me</Button>
            <Button to="/portfolio" variant="outline">
              View My Portfolio
            </Button>
          </div>
        </div>
      </Section>
    </div>;
}
