import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiEye, FiLinkedin, FiPlay } from 'react-icons/fi';

const projectMarquee = [
  'Gopisarvepalli',
  'Ganesh Mandadi',
  'Peppty',
  'ChatHub',
  'SFO',
  'Japam',
  'QR Connect',
  'Brindavan Chits',
  'AlienTrade',
  'FruitBox',
  'Smart Hospitals',
  'BeyondX POS',
];

const courseMindMap01 = [
  {
    title: 'Core Idea',
    points: [
      'Result-Oriented Program',
      'Goal: Build -> Deliver -> Earn',
      'Focus: First income using AI tools',
      'Approach: Client First -> Build Later',
    ],
  },
  {
    title: 'Problem (Why This Exists)',
    points: [
      'Typical path: Learn -> Practice -> Search for clients',
      'Unable to find clients',
      'Loss of confidence',
      'Forgetting what was learned',
      'No real earning outcome',
    ],
  },
  {
    title: 'Solution (Our Approach)',
    points: [
      'Reverse process: Get Client First',
      'Then Build -> Then Deliver',
      'Immediate real-world application',
      'Learning and earning simultaneously',
    ],
  },
  {
    title: 'Client Concept (Critical)',
    points: [
      'Bring your OWN CLIENT',
      'Sources: Friends, Relatives, Local businesses, Online businesses',
      'Client belongs to participant (not the program)',
      'Payment goes directly to participant',
      'No client charge by program, no commission',
    ],
  },
  {
    title: 'Roles and Responsibility',
    points: [
      'Our role: Guide workflow, teach tools, support delivery',
      'Participant role: Bring client, gather requirement, build, deliver, collect payment',
    ],
  },
  {
    title: 'Program Structure (3 Days)',
    points: [
      'Day 1: Intro, client discussion, website idea, project scope',
      'Day 2: Live demo, tool setup, full workflow',
      'Day 3: Independent build, deploy live, delivery-ready output',
    ],
  },
  {
    title: 'If No Client',
    points: [
      'Option 1: Share/get client from participants (commission-based)',
      'Option 2: Build own website as portfolio',
      'Outcome: Use portfolio to attract future clients',
    ],
  },
  {
    title: 'Tools Covered',
    points: ['Cursor', 'Git', 'MongoDB', 'Vercel'],
  },
  {
    title: 'Learning Type',
    points: ['Industry-standard workflow', 'Real development process', 'Not shortcut-based learning'],
  },
  {
    title: 'Not Included',
    points: ['AI image generation', 'AI reels/videos', 'Entertainment tools', 'Surface-level tutorials'],
  },
  {
    title: 'Pricing and Requirements',
    points: [
      'Actual Value: Rs.15000',
      'First Batch Offer: Rs.5000',
      'Laptop + internet, mobile phone, email ID',
      'Basic English understanding',
      'Cursor subscription (~$20/month, self-paid)',
    ],
  },
  {
    title: 'Transparency and Outcome',
    points: [
      'No hidden upsells',
      'No bait pricing',
      'Direct access to main program',
      'Final outcome: Build real website, deliver to real client, earn first income, gain confidence',
      'Target audience: Serious, action-oriented learners',
      'Call to action: Limited seats - Join / DM to enroll',
    ],
  },
];

const courseMindMap02 = [
  {
    title: 'Core Idea',
    points: [
      'Advanced Program (Next Level)',
      'Goal: Build -> Scale -> Automate -> Earn More',
      'Focus: From Website Builder -> Software Creator',
      'Approach: System Thinking + Real Development',
    ],
  },
  {
    title: 'Problem (Why This Exists)',
    points: [
      'After Course 0.1 or basic learning: builds only static/simple websites',
      'Unable to add dynamic features, admin panels, complex client requirements',
      'Limited earning potential, no scalability',
      'No automation -> manual work increases',
    ],
  },
  {
    title: 'Solution (Our Approach)',
    points: [
      'Move from website creation to software-level development',
      'Introduce: Backend systems, automation workflows, scalable architecture',
      'Focus on real-world client needs and advanced implementation',
    ],
  },
  {
    title: 'Transformation',
    points: [
      'Before: Basic website builder, limited features, small clients, low pricing',
      'After: Software/system builder, advanced features, bigger clients, higher income potential',
    ],
  },
  {
    title: 'Tools Covered',
    points: ['Google Console', 'Firebase', 'Railway', 'n8n (automation platform)'],
  },
  {
    title: 'What You Will Build',
    points: [
      'Dynamic websites',
      'Admin dashboards/panels',
      'Authentication systems (login/signup)',
      'Backend-connected applications',
      'Automation workflows',
      'End-to-end software solutions',
    ],
  },
  {
    title: 'Automation Capabilities (n8n)',
    points: [
      'Workflow automation',
      'Data flow between tools',
      'Task automation (reduce manual work)',
      'Client process automation',
    ],
  },
  {
    title: 'Learning Type',
    points: [
      'System design thinking',
      'Industry-standard practices',
      'Real development workflows',
      'Not tool-based shortcuts',
    ],
  },
  {
    title: 'Scalability Focus',
    points: [
      'Build reusable systems',
      'Handle multiple clients',
      'Deliver faster',
      'Increase pricing per project',
    ],
  },
  {
    title: 'Client Value Upgrade',
    points: [
      'With Course 0.1: Basic websites',
      'With Course 0.2: Full solutions - dashboards, automation, data-driven systems',
      'Higher value -> Higher payments',
    ],
  },
  {
    title: 'Pricing and Requirements',
    points: [
      'Actual Value: Rs.25000',
      'First Batch Offer: Rs.10000',
      'Completion of Course 0.1 (recommended) OR basic website development + tools/workflow',
      'Laptop + Internet, Email ID, Basic English understanding',
    ],
  },
  {
    title: 'What This Course Is Not',
    points: [
      'Not beginner-friendly basics',
      'Not AI entertainment tools',
      'Not shortcut-based learning',
      'Not theory-heavy',
    ],
  },
  {
    title: 'Transparency',
    points: [
      'No hidden upsells',
      'No fake pricing strategies',
      'Direct advanced program access',
    ],
  },
  {
    title: 'Relation to Course 0.1',
    points: [
      'Course 0.1: First client, first earning',
      'Course 0.2: Advanced systems, scaling income',
      'Both are independent programs',
      'Course 0.2 is NOT sold inside Course 0.1',
    ],
  },
  {
    title: 'Final Outcome',
    points: [
      'Build dynamic and scalable applications',
      'Deliver high-value client solutions',
      'Automate workflows',
      'Increase earning potential',
    ],
  },
  {
    title: 'Target Audience',
    points: [
      'Completed Course 0.1 OR already building websites',
      'Want to move to the next level',
      'Serious about long-term growth',
    ],
  },
  {
    title: 'Call to Action',
    points: ['Limited seats', 'Join / Contact to enroll'],
  },
];

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const [activeCourse, setActiveCourse] = useState<'0.1' | '0.2'>('0.1');
  const activeMindMap = activeCourse === '0.1' ? courseMindMap01 : courseMindMap02;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const FADE_MS = 500;
    let lastTime = 0;

    const tick = (now: number) => {
      if (!video.duration || Number.isNaN(video.duration)) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const current = video.currentTime;
      const duration = video.duration;
      const fadeSeconds = FADE_MS / 1000;
      let nextOpacity = 1;

      if (current <= fadeSeconds) {
        nextOpacity = Math.min(1, current / fadeSeconds);
      } else if (current >= duration - fadeSeconds) {
        nextOpacity = Math.max(0, (duration - current) / fadeSeconds);
      }

      if (now - lastTime > 16) {
        video.style.opacity = String(nextOpacity);
        lastTime = now;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    video.style.opacity = '0';
    video.muted = true;
    video.play().catch(() => undefined);
    rafRef.current = requestAnimationFrame(tick);

    const onEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => undefined);
      }, 100);
    };

    video.addEventListener('ended', onEnded);
    return () => {
      video.removeEventListener('ended', onEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Aditya Nandagiri - AI Developer India</title>
        <meta
          name="description"
          content="Aditya Nandagiri portfolio: delivered websites, software products, election tools, and innovation-led business solutions."
        />
      </Head>

      <div
        className="min-h-screen flex flex-col overflow-hidden"
        style={{ backgroundColor: 'hsl(var(--hero-bg))', color: 'hsl(var(--hero-foreground))' }}
      >
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
        />

        <div className="relative z-10 min-h-screen flex flex-col overflow-visible">
          <nav className="w-full py-5 px-8">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.png" alt="AI Developer India Logo" width={32} height={32} className="h-8 w-8 rounded-md object-cover" />
                <span className="text-sm sm:text-base font-semibold text-white/90">AI Developer India</span>
              </Link>

              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="text-white/90 hover:text-white transition-colors">About</Link>
                <Link href="/clients" className="text-white/90 hover:text-white transition-colors">Business (India)</Link>
                <Link href="/us-clients" className="text-white/90 hover:text-white transition-colors">Business (USA)</Link>
                <Link href="/innovations" className="text-white/90 hover:text-white transition-colors">Innovations</Link>
                <Link href="/media" className="text-white/90 hover:text-white transition-colors">Media</Link>
                <Link href="/spirituality" className="text-white/90 hover:text-white transition-colors">Spirituality</Link>
              </div>

              <Link href="/contact" className="hero-secondary-btn rounded-full px-4 py-2 text-sm">
                Contact
              </Link>
            </div>
            <div className="mt-[3px] h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </nav>

          <section className="flex-1 flex items-center justify-center relative px-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[984px] h-[527px] opacity-90 bg-gray-950 blur-[82px] pointer-events-none" />
            <div className="relative z-10 text-center">
              <h1
                className="font-normal leading-[1.02] tracking-[-0.024em] text-[72px] sm:text-[120px] md:text-[170px] lg:text-[220px]"
                style={{ fontFamily: "'General Sans', sans-serif" }}
              >
                <span>Aditya </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(to left, #6366f1, #a855f7, #fcd34d)' }}
                >
                  Nandagiri
                </span>
              </h1>
              <div className="text-base sm:text-lg md:text-xl leading-8 max-w-4xl mx-auto mt-[9px] opacity-90" style={{ color: 'hsl(var(--hero-sub))' }}>
                <div className="flex flex-wrap justify-center items-start gap-2 sm:gap-4">
                  <div className="text-center">
                    <span>"Recognized Innovator</span>
                    <div className="text-xs font-mono text-indigo-300 mt-1">(TGIC/KR/INN/2025/007)</div>
                  </div>
                  <span>|</span>
                  <div className="text-center">
                    <span>Ethical Hacker</span>
                    <div className="text-xs font-mono text-emerald-300 mt-1">(ECC36596056249)</div>
                  </div>
                  <span>|</span>
                  <span>Founder</span>
                  <span>|</span>
                  <span>AI Developer"</span>
                </div>
              </div>

              <p className="text-base sm:text-lg leading-8 max-w-3xl mx-auto mt-4 opacity-80" style={{ color: 'hsl(var(--hero-sub))' }}>
                <span className="hero-typing-line">
                  Honored 4 times as "Intinta Innovator" by the State Innovation Cell, Govt. of Telangana.
                </span>
              </p>

              <div className="mt-[25px] flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/innovations" className="hero-secondary-btn px-6 py-4 text-base inline-flex items-center gap-2">
                  <FiEye size={18} />
                  View My Work
                </Link>
                <Link href="/videos" className="hero-secondary-btn px-6 py-4 text-base inline-flex items-center gap-2">
                  <FiPlay size={18} />
                  Watch My Videos
                </Link>
                <a
                  href="https://www.linkedin.com/in/aditya-nanda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-secondary-btn px-6 py-4 text-base inline-flex items-center gap-2"
                >
                  <FiLinkedin size={18} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </section>

          <section className="pb-10 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <p className="text-white/50 text-sm">
                Relied on by brands
                <br />
                across the globe
              </p>
              <div className="overflow-hidden flex-1">
                <div className="animate-logo-marquee flex items-center gap-16 min-w-max">
                  {[...projectMarquee, ...projectMarquee].map((name, index) => (
                    <div key={`${name}-${index}`} className="flex items-center gap-3">
                      <div className="liquid-glass w-6 h-6 rounded-lg flex items-center justify-center text-xs font-semibold">
                        {name.charAt(0)}
                      </div>
                      <span className="text-base font-semibold text-white">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section
        className="text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: 'hsl(var(--hero-bg))' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <div className="absolute top-12 left-10 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-8 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
        <div className="container-width">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">AI Course Mind Map</h2>
            <p className="text-white/75 max-w-2xl mx-auto">
              Quick visual breakdown for at-a-glance understanding.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-full neo-dark-pressed p-1">
              <button
                onClick={() => setActiveCourse('0.1')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCourse === '0.1' ? 'neo-dark-chip text-white' : 'text-white/80 hover:bg-white/10'
                }`}
              >
                AI Course 0.1
              </button>
              <button
                onClick={() => setActiveCourse('0.2')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCourse === '0.2' ? 'neo-dark-chip text-white' : 'text-white/80 hover:bg-white/10'
                }`}
              >
                AI Course 0.2
              </button>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto z-10">
            <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-violet-300/40 via-indigo-300/80 to-violet-300/40 -translate-x-1/2" />

            <div className="mb-8 rounded-2xl neo-dark-panel p-5 text-center">
              <h3 className="text-2xl font-bold text-white">
                {activeCourse === '0.1' ? 'AI Course 0.1 - Full Mind Map' : 'AI Course 0.2 - Full Mind Map'}
              </h3>
              <p className="text-white/75 mt-2">
                {activeCourse === '0.1'
                  ? 'Goal: Build -> Deliver -> Earn (Client-first model)'
                  : 'Goal: Build -> Scale -> Automate -> Earn More (Website builder -> Software creator)'}
              </p>
            </div>

            <div className="space-y-1">
              {activeMindMap.map((section, idx) => {
                const left = idx % 2 === 0;
                const baseDelay = idx * 0.12;
                return (
                  <div key={`${activeCourse}-${section.title}`} className="relative pb-6">
                    {idx > 0 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.28, delay: baseDelay, ease: 'easeOut' }}
                        className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-10 w-px bg-indigo-300/70 origin-top"
                      />
                    )}

                    <motion.div
                      initial={{ scale: 0.3, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.22, delay: baseDelay + 0.2 }}
                      className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-10 h-3 w-3 rounded-full bg-indigo-300 shadow-[0_0_0_5px_rgba(99,102,241,0.35)]"
                    />

                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.24, delay: baseDelay + 0.26, ease: 'easeOut' }}
                      className={`hidden md:block absolute top-[2.85rem] h-px bg-indigo-300/70 ${
                        left ? 'right-1/2 w-12 origin-right' : 'left-1/2 w-12 origin-left'
                      }`}
                    />

                    <div className={`pt-6 pl-12 md:pl-0 ${left ? 'md:pr-12 md:mr-[50%]' : 'md:pl-12 md:ml-[50%]'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: left ? -24 : 24, y: 10 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.32, delay: baseDelay + 0.32 }}
                        className="relative rounded-xl neo-dark-panel p-4"
                      >
                        <span className="absolute top-2 right-3 text-[10px] text-cyan-200/90 animate-pulse">✦</span>
                        <span className="absolute bottom-2 left-3 text-[10px] text-fuchsia-200/90 animate-pulse">✦</span>
                        <h4 className="font-semibold text-white mb-2">{section.title}</h4>
                        <ul className="space-y-1.5 text-sm text-white/80">
                          {section.points.map((point) => (
                            <li key={point}>- {point}</li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;