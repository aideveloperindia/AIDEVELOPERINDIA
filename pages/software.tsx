import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiMessageCircle } from 'react-icons/fi';
import Layout from '../components/Layout';

const modelWebsites = [
  {
    serial: '01',
    title: 'School Website Model',
    websiteUrl: 'https://eschoolmodel.vercel.app/',
    idealFor: 'K-12 schools and academic institutions',
    features: ['Admissions-first UI', 'Notices and events', 'Parent enquiry capture', 'Mobile-first pages'],
  },
  {
    serial: '02',
    title: 'Hospital Website Model',
    websiteUrl: 'https://smarthospitals.vercel.app',
    idealFor: 'Hospitals, clinics, and multispeciality centers',
    features: ['Doctor and services pages', 'Appointment conversion flow', 'Call and WhatsApp actions', 'Trust-focused layout'],
  },
  {
    serial: '03',
    title: 'Restaurant Billing & Website Model',
    websiteUrl: 'https://restbilldemo-eta.vercel.app',
    idealFor: 'Restaurants, cafes, and cloud kitchens',
    features: ['Easy billing demo', 'Menu and ordering UX', 'Outlet-friendly flow', 'Fast deployment support'],
  },
];

const electionTools = [
  { name: 'Voter List PDF Cleaning Tool', sold: 'Sold 9 units' },
  { name: 'Voter List PDF Merge Tool', sold: 'Sold 10 units' },
  { name: 'Voter List Mega Search Tool', sold: 'Sold 1 unit' },
  { name: 'Voter Contact Tool', sold: 'Sold 1 unit' },
  { name: 'Campaign Management Software', sold: 'Newly added' },
];

const SoftwarePage = () => {
  return (
    <Layout
      title="Software Solutions - Aditya Nandagiri"
      description="Industry website models, Berum API bargaining software, and election desktop tools by Aditya Nandagiri."
    >
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="container-width">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">Software & Ready-Made Solutions</h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Choose industry-ready templates, deploy custom business software, and run election operations with offline desktop tools.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-secondary-900 mb-3">Industry Model Websites</h2>
          <p className="text-secondary-600 mb-10 max-w-3xl">
            Pick a proven industry layout and get a fully customized delivery for your brand in a fast implementation cycle.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {modelWebsites.map((item) => (
              <div key={item.serial} className="card p-6">
                <p className="text-sm font-semibold text-primary-700 mb-2">#{item.serial}</p>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">{item.title}</h3>
                <p className="text-secondary-600 mb-2">
                  <span className="font-semibold text-secondary-800">Ideal for:</span> {item.idealFor}
                </p>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature) => (
                    <li key={feature} className="text-secondary-600 flex items-start gap-2">
                      <FiCheckCircle className="text-primary-600 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                    View Sample
                  </a>
                  <Link href="/contact" className="btn-primary text-sm">
                    Get this for my business
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Berum API - Smart Bargaining for Higher Profit</h2>
          <p className="text-secondary-600 mb-10 max-w-4xl">
            Berum API adds structured bargaining to websites and apps. For businesses that negotiate on price, it can improve outcomes and target up to 10% better margin through rule-driven offer handling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6">
              <p className="text-xs font-semibold text-primary-700 mb-2">Step 1</p>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Customer Offer</h3>
              <p className="text-secondary-600">User clicks Make an Offer and submits a negotiable price point.</p>
            </div>
            <div className="card p-6">
              <p className="text-xs font-semibold text-primary-700 mb-2">Step 2</p>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Rule Evaluation</h3>
              <p className="text-secondary-600">Berum API validates offer against configurable pricing, threshold, and policy rules.</p>
            </div>
            <div className="card p-6">
              <p className="text-xs font-semibold text-primary-700 mb-2">Step 3</p>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Accept / Counter / Upsell</h3>
              <p className="text-secondary-600">System responds instantly, and your sales team can follow up with context.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/919505009699" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Talk about Berum API on WhatsApp
            </a>
            <a href="#" className="btn-secondary">View Implementation Examples</a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-secondary-900 mb-3">Elections & Voter Tools - Offline Desktop Suite</h2>
          <p className="text-secondary-600 mb-8 max-w-4xl">
            Best suited for upcoming GHMC elections and urban local body elections across India. All tools work offline on desktop or laptop systems.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Tools and Sales</h3>
              <div className="space-y-3">
                {electionTools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between bg-secondary-50 rounded-lg px-4 py-3">
                    <span className="text-secondary-800 font-medium">{tool.name}</span>
                    <span className="text-xs font-semibold bg-primary-100 text-primary-700 rounded-full px-3 py-1">{tool.sold}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Campaign Workflow</h3>
              <ul className="space-y-3 text-secondary-700">
                <li>1. Clean raw voter PDF data</li>
                <li>2. Merge constituency and booth-level files</li>
                <li>3. Run instant voter search and filtering</li>
                <li>4. Extract contact-ready segments</li>
                <li>5. Execute and monitor campaign tasks</li>
              </ul>
              <a
                href="https://wa.me/919505009699"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors"
              >
                <FiMessageCircle />
                WhatsApp for Demo & Pricing (GHMC / Urban Elections)
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SoftwarePage;
