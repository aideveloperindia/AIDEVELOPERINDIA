import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import Layout from '../components/Layout';

type Project = {
  id: number;
  title: string;
  description: string;
  websiteUrl: string;
  logoSrc: string;
  status: 'Live';
};

const Clients = () => {
  const projects: Project[] = [
    { id: 1, title: 'Gopikrishna Sarvepalli', description: 'Corporate trainer, executive and sales coach website with conversion-focused program and session flow.', websiteUrl: 'https://www.gopisarvepalli.com', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://www.gopisarvepalli.com', status: 'Live' },
    { id: 2, title: 'Coach Ganesh Mandadi', description: 'Relationship and life balance coaching platform with programs, books, testimonials, and WhatsApp engagement.', websiteUrl: 'https://www.ganeshmandadi.com', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://www.ganeshmandadi.com', status: 'Live' },
    { id: 3, title: 'Peppty Technologies', description: 'Corporate product ecosystem website presenting privacy-first apps, company narrative, and investor-facing trust.', websiteUrl: 'https://www.peppty.com', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://www.peppty.com', status: 'Live' },
    { id: 4, title: 'ChatHub App', description: 'Consumer social product landing with positioning for safe social communication and app discovery.', websiteUrl: 'https://chathubapp.com', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://chathubapp.com', status: 'Live' },
    { id: 5, title: 'Student Financial Olympiad', description: 'Education initiative site for school partnerships, curriculum, wealth labs, and olympiad participation.', websiteUrl: 'https://sfo-two.vercel.app', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://sfo-two.vercel.app', status: 'Live' },
    { id: 6, title: 'Japam', description: 'Spiritual product experience page built for a focused mantra-based digital journey.', websiteUrl: 'https://japam.digital', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://japam.digital', status: 'Live' },
    { id: 7, title: 'QR Connect', description: 'Dynamic QR business link hub with subscription model, branded profiles, and conversion-first onboarding.', websiteUrl: 'https://dynamicqrgen.vercel.app', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://dynamicqrgen.vercel.app', status: 'Live' },
    { id: 8, title: 'Brindavan Chits', description: 'Modernized chit fund web presence with schemes, branch information, updates, and trust-driven messaging.', websiteUrl: 'https://brindavanchitfundweb.vercel.app', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://brindavanchitfundweb.vercel.app', status: 'Live' },
    { id: 9, title: 'AI Developer India', description: 'Personal brand and innovation portfolio showcasing projects, media, and business offerings.', websiteUrl: 'https://aideveloperindia.store', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://aideveloperindia.store', status: 'Live' },
    { id: 10, title: 'Chikku & Chinnu', description: 'Interactive celebration microsite with quizzes, greeting cards, and playful engagement modules.', websiteUrl: 'https://chikkuchinnu.vercel.app', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://chikkuchinnu.vercel.app', status: 'Live' },
    { id: 11, title: 'Chaitra Varshini', description: 'Birthday microsite featuring friendship quiz, wish board, and interactive study and game widgets.', websiteUrl: 'https://www.chaitravarshini.quest', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://www.chaitravarshini.quest', status: 'Live' },
    { id: 12, title: 'Real Estate Sales CRM', description: 'Sales CRM interface for real estate workflows, lead tracking, and pipeline visibility.', websiteUrl: 'https://realestatecrms.vercel.app', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://realestatecrms.vercel.app', status: 'Live' },
    { id: 13, title: 'e-School Model', description: 'Admissions-focused school website model with notices, facilities highlights, and parent enquiry paths.', websiteUrl: 'https://eschoolmodel.vercel.app/', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://eschoolmodel.vercel.app/', status: 'Live' },
    { id: 14, title: 'AlienTrade', description: 'Cross-border ecommerce storefront for authentic Indian spices with subscriptions and product-led merchandising.', websiteUrl: 'https://alientrade.vercel.app', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://alientrade.vercel.app', status: 'Live' },
    { id: 15, title: 'FruitBox', description: 'Subscription fruit delivery website with weekly plans, direct messaging CTA, and launch-ready positioning.', websiteUrl: 'https://fruitboxcompany.vercel.app', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://fruitboxcompany.vercel.app', status: 'Live' },
    { id: 16, title: 'BeyondX POS Easy Billing', description: 'Restaurant billing and POS demo experience for quick order handling and outlet operations.', websiteUrl: 'https://restbilldemo-eta.vercel.app', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://restbilldemo-eta.vercel.app', status: 'Live' },
    { id: 17, title: 'Smart Hospitals', description: 'Hospital website model and digital operations suite for appointments, lead conversion, and trust.', websiteUrl: 'https://smarthospitals.vercel.app', logoSrc: 'https://www.google.com/s2/favicons?sz=128&domain_url=https://smarthospitals.vercel.app', status: 'Live' },
  ];

  return (
    <Layout
      title="Client Projects - Aditya Nandagiri"
      description="Explore delivered websites and products by Aditya Nandagiri across education, healthcare, commerce, social platforms, events, and enterprise workflows."
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Client Projects
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              17 delivered websites and digital products with real-world deployment across multiple industries in 2025-26.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <div className="h-44 bg-secondary-50 border-b border-secondary-100 p-6 relative flex items-center justify-center">
                  <div className="absolute top-4 right-4 inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    {project.status}
                  </div>
                  <img
                    src={project.logoSrc}
                    alt={`${project.title} logo`}
                    className="h-16 w-16 object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-secondary-500 mb-1">#{project.id}</p>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    {project.websiteUrl ? (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 text-sm"
                      >
                        <FiExternalLink size={16} />
                        Visit Website
                      </a>
                    ) : (
                      <div className="btn-secondary inline-flex items-center gap-2 text-sm opacity-50 cursor-not-allowed">
                        <FiExternalLink size={16} />
                        Link Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Delivery Areas
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From industry websites to automation products and offline election tooling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Industry Websites
              </h3>
              <p className="text-secondary-600">
                Schools, hospitals, restaurants, and domain-specific websites customized for conversion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                🤖
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Product Landing Pages
              </h3>
              <p className="text-secondary-600">
                High-clarity product pages for SaaS, apps, and service businesses with strong call-to-actions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                🌐
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                CRM and Automation
              </h3>
              <p className="text-secondary-600">
                Workflow tools for sales, lead tracking, communication, and campaign management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                🔒
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Election Tooling
              </h3>
              <p className="text-secondary-600">
                Offline desktop tools for voter data cleaning, merge, search, contact, and campaign operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                💡
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Berum API
              </h3>
              <p className="text-secondary-600">
                Bargaining software for businesses that can improve margin outcomes with structured negotiation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                🎨
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Fast Delivery
              </h3>
              <p className="text-secondary-600">
                Production-quality delivery with practical setup support, launch handover, and iteration cycles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Client testimonials and feedback coming soon
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="text-primary-600 text-4xl mb-4">"</div>
              <p className="text-secondary-600 italic mb-4">
                We focus on outcomes, not just UI delivery. Every project here was shipped for real users.
              </p>
              <div className="font-semibold text-secondary-900">
                - Client testimonial slot
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="text-primary-600 text-4xl mb-4">"</div>
              <p className="text-secondary-600 italic mb-4">
                More verified feedback and case studies are being added with each production release.
              </p>
              <div className="font-semibold text-secondary-900">
                - Delivery report slot
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let's discuss how I can help bring your vision to life with innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Start a Conversation
              </a>
              <a
                href="/software"
                className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Explore My Software Tools
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients; 