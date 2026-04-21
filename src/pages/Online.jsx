import React, { useState, useEffect } from "react";
import {
  FaUserTie,
  FaBook,
  FaLaptop,
  FaUsers,
  FaGlobe,
  FaIndustry,
  FaCheckCircle,
  FaRocket,
  FaLightbulb,
  FaGraduationCap,
  FaHandshake,
  FaChartLine,
  FaClock,
  FaMobileAlt,
  FaRupeeSign,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";
import imgLeft from "../assets/images/incube.jpg";

const HeaderSection = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-24">
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

    <div className="relative z-10 container mx-auto px-6 text-center">
      <div className="inline-flex items-center space-x-2 text-cyan-400 mb-4">
        <FaRocket className="text-xl" />
        <span className="text-sm font-semibold tracking-wider">
          DIGITAL INCUBATION PROGRAM
        </span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        IncubeNation
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          Online
        </span>
      </h1>
      <div className="flex justify-center mb-6">
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
      </div>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Empowering founders anytime, anywhere with world-class digital
        incubation, live mentoring, and outcome-driven learning.
      </p>
      <p className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
        From idea validation to investor-ready pitching, IncubeNation Online
        gives you a structured path to launch and scale your startup — fully
        remote, fully guided.
      </p>
    </div>
  </div>
);

const Breadcrumbs = () => (
  <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 py-4">
    <div className="container mx-auto px-6">
      <div className="flex items-center space-x-3 text-sm text-gray-600">
        <a
          href="/"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Home
        </a>
        <span className="text-gray-400">/</span>
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
          IncubeNation Online
        </span>
      </div>
    </div>
  </nav>
);

const MainContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={imgLeft}
                  alt="IncubeNation Online Digital Platform"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            {/* Small Info Badge */}
            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center space-x-4 border border-gray-100">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <FaChartLine className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Founder Success Focused
                </p>
                <p className="text-sm text-gray-800">
                  Structured playbooks, real-world mentors & measurable progress.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-3 text-blue-600">
              <FaGraduationCap className="text-xl" />
              <span className="text-sm font-semibold tracking-wider uppercase">
                DIGITAL-FIRST INCUBATION
              </span>
            </div>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Empowering Founders
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Anytime, Anywhere
              </span>
            </h2>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                IncubeNation Online is our digital-first program designed to
                make high-quality startup mentoring and entrepreneurship
                education accessible to founders across India and beyond — no
                matter where you are based.
              </p>
              <p>
                The program bridges the gap between structured learning and
                real-world execution. You don&apos;t just watch videos — you
                apply frameworks, get feedback from mentors, and track your
                progress from idea to traction.
              </p>
              <p>
                Whether you&apos;re a first-time founder, a student with an
                idea, or a working professional transitioning into startups,
                IncubeNation Online gives you a clear, step-by-step journey.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Curated curriculum crafted for early-stage founders",
                "Live mentoring sessions with seasoned entrepreneurs and domain experts",
                "On-demand resources including case studies, canvases, and playbooks",
                "Structured implementation sprints with weekly milestones",
                "Certification collaborations with leading institutions and industry bodies",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FaCheckCircle className="text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you&apos;re validating your first idea or preparing your
              pitch deck for investors, IncubeNation Online gives you the
              flexibility of learning remotely while giving you access to the
              same networks, mentorship, and growth frameworks as our in-person
              programs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Virtual One-on-One Mentorship",
      description:
        "Personalized guidance from industry experts and successful entrepreneurs tailored to your specific needs and stage.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaBook className="text-3xl" />,
      title: "Resource Library Access",
      description:
        "Comprehensive library of templates, pitch decks, financial models, canvases, and tools for every stage of growth.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaLaptop className="text-3xl" />,
      title: "Live Workshops & Webinars",
      description:
        "Interactive sessions with industry leaders covering fundraising, go-to-market, branding, operations, and more.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Global Networking",
      description:
        "Connect with founders, investors, and experts from around the world through curated digital communities and events.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Remote-First Experience",
      description:
        "A complete incubation experience accessible from anywhere, designed for busy founders who need flexibility.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FaIndustry className="text-3xl" />,
      title: "Industry Expert Access",
      description:
        "Direct access to professionals driving innovation across technology, D2C, services, and creative sectors.",
      gradient: "from-teal-500 to-blue-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 mb-4">
            <FaLightbulb className="text-xl" />
            <span className="text-sm font-semibold tracking-wider">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Complete
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Digital Incubation Experience
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Designed for the modern entrepreneur who demands flexibility without
            compromising on quality, accountability, or real outcomes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, gradient, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

    <div className="relative z-10">
      <div
        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${gradient} text-white mb-6`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
        {title}
      </h3>

      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

/* NEW: How It Works Section (more elaborated content) */
const HowItWorksSection = () => {
  const steps = [
    {
      title: "1. Onboarding & Goal Setting",
      text: "Tell us about your idea, stage, and goals. We help you define clear 90-day outcomes and a custom learning path.",
    },
    {
      title: "2. Learn, Apply & Get Feedback",
      text: "Access modules, attend live sessions, and implement tasks weekly. Mentors review your work and share feedback.",
    },
    {
      title: "3. Validate, Launch & Grow",
      text: "Validate your idea with real users, refine your model, build your pitch, and get support to launch or scale.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How IncubeNation Online Works
          </h2>
          <p className="text-lg text-gray-700">
            We don&apos;t just teach theory. We combine structured learning with
            guided implementation so you can see tangible movement in your
            startup within weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-md border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Step {index + 1}
                </span>
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* NEW: Pricing / Subscription Section */
const PricingSection = () => {
  const plans = [
    {
      name: "Launch Plan",
      highlight: "Best for first-time founders",
      price: "₹5,000",
      afterTrial: "per month after 3-month free period",
      features: [
        "Access to full digital curriculum",
        "Monthly group mentoring calls",
        "Access to founder community",
        "Standard templates & tools",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Scale Plan",
      highlight: "For teams ready to grow faster",
      price: "₹7,000",
      afterTrial: "per month after 3-month free period",
      features: [
        "Everything in Launch Plan",
        "Fortnightly 1:1 mentor reviews",
        "Pitch deck & financial model review",
        "Warm introductions (where relevant)",
        "Priority WhatsApp support",
      ],
      popular: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 text-cyan-400 mb-3">
            <FaRupeeSign className="text-lg" />
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase">
              SIMPLE, FOUNDER-FRIENDLY PRICING
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Start Free. Pay Only When You See Value.
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Your first{" "}
            <span className="font-semibold text-cyan-400">3 months are 100% free</span>. 
            Explore the platform, attend live sessions, and experience the 
            value. Continue only if IncubeNation Online is truly helping you.
          </p>
        </div>

        {/* Trial Highlight */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white/5 border border-cyan-500/40 rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <FaClock className="text-2xl" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-cyan-300 font-semibold">
                  3-MONTH FREE ACCESS
                </p>
                <p className="text-sm md:text-base text-gray-100">
                  No upfront payment. No hidden charges. Use the full platform, 
                  then decide your subscription plan.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-cyan-300 text-sm md:text-base">
              <FaArrowRight />
              <span>Upgrade to Launch or Scale anytime</span>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl p-[2px] ${
                plan.popular
                  ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                  : "bg-white/10"
              }`}
            >
              <div className="h-full bg-slate-950/90 rounded-3xl p-8 flex flex-col">
                {plan.popular && (
                  <span className="inline-flex items-center self-start px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-cyan-300 mb-6">
                  {plan.highlight}
                </p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-300">
                    /month after trial
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-6">
                  {plan.afterTrial}
                </p>

                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <FaCheck className="mt-1 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/9035514809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-2xl hover:shadow-cyan-500/30"
                      : "bg-white text-slate-900 hover:bg-gray-100"
                  }`}
                >
                  Start Free & Talk to Us
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs md:text-sm text-gray-400 max-w-3xl mx-auto">
          Note: All prices are indicative and applicable per startup/founder
          cohort. Custom pricing is available for institutions, colleges, and
          corporate innovation programs.
        </p>
      </div>
    </section>
  );
};

const ProgramShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
            <FaHandshake className="text-xl" />
            <span className="text-sm font-semibold tracking-wider">
              READY TO START YOUR JOURNEY?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Talk to an Expert?
            </span>
          </h2>

          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let us guide you through your startup journey. Connect with one of
            our mentors on WhatsApp, understand the program structure and
            pricing, and see how IncubeNation Online can fit your goals. Your{" "}
            <span className="font-semibold text-blue-700">
              first 3 months are free
            </span>{" "}
            — so the only investment you make initially is your time and
            commitment.
          </p>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: FaClock,
                text: "Flexible Scheduling",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: FaMobileAlt,
                text: "Any Device Access",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: FaChartLine,
                text: "Proven Results",
                color: "from-green-500 to-teal-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} text-white mb-4`}
                >
                  <item.icon className="text-xl" />
                </div>
                <p className="font-semibold text-gray-900">{item.text}</p>
              </div>
            ))}
          </div>

          <motion.a
            href="https://wa.me/9035514809"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-semibold text-lg text-white transition-all duration-300 hover:shadow-2xl inline-block"
          >
            Talk to Expert on WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const Online = () => {
  return (
    <div className="font-sans antialiased overflow-hidden">
      <HeaderSection />
      <Breadcrumbs />
      <MainContent />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <ProgramShowcase />
    </div>
  );
};

export default Online;
