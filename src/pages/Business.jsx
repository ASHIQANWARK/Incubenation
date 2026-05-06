import React from "react";
import { FaRocket, FaLightbulb, FaHandshake, FaChartLine, FaCogs, FaUsers, FaGamepad, FaBrain, FaLaptopCode, FaUserGraduate, FaStar, FaTrophy, FaCertificate, FaSmile, FaHeart, FaPuzzlePiece, FaPalette, FaMoneyBillWave, FaComments, FaVideo, FaCalendarAlt, FaGift, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const LittleFounders = () => {
  return (
    <div className="min-h-screen font-sans antialiased">
      <HeaderSection />
      <Breadcrumbs />
      <ComingSoonSection />
      <FunFactsMarquee />
      <FeaturesPreview />
      <WeeklyQuestSection />
      <TestimonialCards />
      <BadgeSystemPreview />
      <CTASection />
    </div>
  );
};

const HeaderSection = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-24">
    <div className="absolute inset-0 bg-white/40"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl"></div>
    
    {/* Cute floating emojis */}
    <div className="absolute top-20 left-10 text-4xl animate-bounce opacity-30">🚀</div>
    <div className="absolute bottom-20 right-10 text-5xl animate-pulse opacity-30">⭐</div>
    <div className="absolute top-40 right-20 text-3xl animate-spin-slow opacity-20">💡</div>
    
    <div className="relative z-10 container mx-auto px-6 text-center">
      <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur rounded-full px-4 py-2 mb-4 shadow-sm">
        <FaUserGraduate className="text-amber-600 text-sm" />
        <span className="text-sm font-semibold text-amber-700 tracking-wider">🌟 YOUNG MINDS • BIG DREAMS 🌟</span>
      </div>
      <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
        Little
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
          Founders
        </span>
      </h1>
      <div className="flex justify-center mb-6">
        <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
      </div>
      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        🧠 Empowering Future Entrepreneurs Ages 10-18 🧠
      </p>
      <p className="text-lg text-gray-600 mt-3">Train Your Mind • Build Your Empire • Make Friends • Have Fun!</p>
      
      {/* Quick stats row */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <div className="bg-white/50 backdrop-blur rounded-2xl px-5 py-2 flex items-center gap-2">
          <FaUsers className="text-amber-500" />
          <span className="font-semibold text-gray-700">500+ Young Founders</span>
        </div>
        <div className="bg-white/50 backdrop-blur rounded-2xl px-5 py-2 flex items-center gap-2">
          <FaTrophy className="text-amber-500" />
          <span className="font-semibold text-gray-700">12 Business Launched</span>
        </div>
        <div className="bg-white/50 backdrop-blur rounded-2xl px-5 py-2 flex items-center gap-2">
          <FaSmile className="text-amber-500" />
          <span className="font-semibold text-gray-700">98% Happy Parents</span>
        </div>
      </div>
    </div>
  </div>
);

const Breadcrumbs = () => (
  <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 py-3">
    <div className="container mx-auto px-6">
      <div className="flex items-center space-x-3 text-sm text-gray-600">
        <a href="/" className="hover:text-amber-600 transition-colors duration-300 flex items-center gap-1">
          🏠 Home
        </a>
        <span className="text-gray-400">/</span>
        <a href="/programs" className="hover:text-amber-600 transition-colors duration-300 flex items-center gap-1">
          🎮 Programs
        </a>
        <span className="text-gray-400">/</span>
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 flex items-center gap-1">
          ⭐ Little Founders
        </span>
      </div>
    </div>
  </nav>
);

const ComingSoonSection = () => (
  <section className="py-16 bg-gradient-to-br from-white to-amber-50/50">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-full mb-4 shadow-xl">
            <FaRocket className="text-4xl text-white" />
          </div>
        </motion.div>

        <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-4 py-1.5 mb-4">
          <FaLightbulb className="text-purple-900 text-sm" />
          <span className="text-sm font-semibold text-purple-900 tracking-wider">🎉 SPRING 2025 LAUNCH 🎉</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Where Young
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-900">
            Ideas Take Flight 🦋
          </span>
        </h2>
        
        <div className="flex justify-center mb-5">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-purple-900 rounded-full"></div>
        </div>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          🚀 We're building an epic adventure for the next generation of founders! 
          Through games, challenges, and real-world projects, kids aged 10-18 will learn 
          how to turn their passions into successful ventures.
        </p>

        <div className="max-w-md mx-auto mb-6">
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-amber-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-600 flex items-center gap-1">📊 Program Launch Progress</span>
              <span className="text-sm font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">82%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div 
                className="bg-gradient-to-r from-blue-900 to-purple-900 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "82%" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-3">⭐ Early registration opens March 2025 — be the first to know!</p>
          </div>
        </div>

        {/* Fun countdown teaser */}
        <div className="flex justify-center gap-4 text-center">
          <div className="bg-white rounded-xl px-4 py-2 shadow-sm">
            <div className="text-2xl font-bold text-amber-600">50</div>
            <div className="text-xs text-gray-500">Days</div>
          </div>
          <div className="bg-white rounded-xl px-4 py-2 shadow-sm">
            <div className="text-2xl font-bold text-amber-600">08</div>
            <div className="text-xs text-gray-500">Hours</div>
          </div>
          <div className="bg-white rounded-xl px-4 py-2 shadow-sm">
            <div className="text-2xl font-bold text-amber-600">42</div>
            <div className="text-xs text-gray-500">Mins</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FunFactsMarquee = () => {
  const facts = [
    "💡 Did you know? Kid entrepreneurs have started businesses as young as 7!",
    "🍋 The first lemonade stand was recorded in 1879!",
    "🦸‍♀️ 65% of kids want to start their own business someday!",
    "🎮 Playing strategy games helps build entrepreneur brain muscles!",
    "📝 Writing down ideas makes them 42% more likely to happen!",
  ];
  return (
    <div className="bg-gradient-to-r from-amber-200 to-orange-200 py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex gap-8">
        {facts.concat(facts).map((fact, i) => (
          <span key={i} className="text-sm font-medium text-amber-900 inline-block mx-4">
            {fact}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

const FeaturesPreview = () => {
  const features = [
    {
      icon: <FaGamepad className="text-3xl" />,
      title: "🎮 Founder's Playground",
      description: "Learn business basics through interactive games, simulations, and fun challenges that teach money smarts, teamwork, and creative thinking.",
      gradient: "from-amber-500 to-yellow-500",
      funFact: "🎲 Play our 'Pitch Perfect' board game inside!"
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "🧠 Mindset Bootcamp",
      description: "Develop resilience, problem-solving skills, and a growth mindset with daily mental workouts designed for young innovators.",
      gradient: "from-orange-500 to-red-500",
      funFact: "💪 Daily 5-minute brain warm-ups!"
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "💻 Idea to Impact Lab",
      description: "Turn your lemonade stand into a digital empire! Build websites, create brands, and launch mini-businesses with mentor guidance.",
      gradient: "from-blue-500 to-cyan-500",
      funFact: "🌐 Build your first website in 1 hour!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative">
      {/* Cute floating elements */}
      <div className="absolute top-10 left-5 text-2xl opacity-20">✨</div>
      <div className="absolute bottom-10 right-5 text-2xl opacity-20">⭐</div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 mb-4">
            <FaUserGraduate className="text-amber-300 text-sm" />
            <span className="text-sm font-semibold text-amber-200 tracking-wider">🎯 THE LITTLE FOUNDERS JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Train Like a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
              Future CEO 👑
            </span>
          </h2>
          <div className="flex justify-center mb-5">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">Three epic modules. One incredible journey. Your future starts here.</p>
          <p className="text-amber-300 text-sm mt-2">✨ No experience needed — just curiosity and a big dream! ✨</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500"
            >
              <div className="relative z-10 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-5 shadow-lg`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-200 leading-relaxed text-sm">
                  {feature.description}
                </p>

                <div className="mt-3 inline-block px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                  {feature.funFact}
                </div>
                
                <div className="mt-3 inline-block ml-2 px-3 py-1 bg-yellow-500/30 rounded-full text-xs text-white">
                  Ages 10-18
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-white/10 backdrop-blur rounded-full px-5 py-2 border border-white/20">
            <FaChartLine className="text-amber-300" />
            <span className="text-white font-medium text-sm">🔥 Weekly Challenges:</span>
            <span className="text-amber-200 text-sm">"Pitch Your Idea"</span>
            <span className="text-white text-sm">•</span>
            <span className="text-amber-200 text-sm">"Design a Logo"</span>
            <span className="text-white text-sm">•</span>
            <span className="text-amber-200 text-sm">"Solve a Real Problem"</span>
            <span className="text-white text-sm">•</span>
            <span className="text-amber-200 text-sm">"Make Your First Sale"</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WeeklyQuestSection = () => {
  const quests = [
    { day: "Monday", emoji: "🤔", quest: "Idea Hunt — Find 3 problems you can solve!", reward: "💡 +10 Creative Points" },
    { day: "Tuesday", emoji: "🎨", quest: "Brand Builder — Design your logo using paper or canva!", reward: "🎨 +15 Design Points" },
    { day: "Wednesday", emoji: "🗣️", quest: "Pitch Practice — Record a 30-second pitch to family!", reward: "🎤 +20 Confidence Points" },
    { day: "Thursday", emoji: "🧮", quest: "Money Math — Calculate costs & profits for your idea!", reward: "💰 +10 Money Smarts" },
    { day: "Friday", emoji: "🤝", quest: "Customer Chat — Ask 5 people what they think!", reward: "📊 +15 Feedback Points" },
    { day: "Weekend", emoji: "🏆", quest: "Mini-Launch — Sell or share your product with friends!", reward: "🏅 +50 Champion Points" },
  ];
  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-1.5 mb-3">
            <FaCalendarAlt className="text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">🗓️ YOUR WEEKLY QUEST BOARD 🗓️</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">7 Days to Founder Mode 🔥</h2>
          <p className="text-gray-600 mt-2">Complete quests, earn points, and unlock awesome badges!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quests.map((q, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="bg-white rounded-xl p-4 shadow-md border border-amber-100 flex items-start gap-3">
              <div className="text-3xl">{q.emoji}</div>
              <div>
                <h3 className="font-bold text-gray-800">{q.day}</h3>
                <p className="text-sm text-gray-600">{q.quest}</p>
                <p className="text-xs text-amber-600 mt-1">🏆 {q.reward}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">✨ Complete all 7 quests and get a SECRET BONUS BADGE! ✨</p>
      </div>
    </section>
  );
};

const TestimonialCards = () => {
  const testimonials = [
    { name: "Emma, 12", text: "I started my slime business after joining! I made $150 in my first month!", emoji: "🦄", role: "Slime CEO" },
    { name: "Jay, 14", text: "The mindset bootcamp helped me stop being scared of failing. Now I pitch my ideas everywhere!", emoji: "🎤", role: "Young Speaker" },
    { name: "Mom of Aria", text: "My daughter is so much more confident now. She even taught her class about budgeting!", emoji: "❤️", role: "Happy Parent" },
    { name: "Leo, 10", text: "I learned how to code my own website for my dog walking service. Woof woof! 🐶", emoji: "🐕", role: "Tech Founder" },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-1.5 mb-3">
            <FaHeart className="text-green-600" />
            <span className="text-sm font-semibold text-green-700">💬 REAL KIDS, REAL DREAMS 💬</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Little Founders Say</h2>
          <p className="text-gray-500 mt-2">(and their happy parents too!)</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 shadow-md border border-amber-100">
              <div className="text-4xl mb-2">{t.emoji}</div>
              <p className="text-gray-700 text-sm italic">"{t.text}"</p>
              <div className="mt-3">
                <p className="font-bold text-gray-800">{t.name}</p>
                <p className="text-xs text-amber-600">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BadgeSystemPreview = () => {
  const badges = [
    { name: "Idea Spark", icon: "💡", color: "bg-yellow-100", desc: "Share your first business idea" },
    { name: "Pitch Pro", icon: "🎤", color: "bg-purple-100", desc: "Present in front of 5+ people" },
    { name: "Money Master", icon: "💰", color: "bg-green-100", desc: "Make your first $10 profit" },
    { name: "Code Crusher", icon: "💻", color: "bg-blue-100", desc: "Build a simple website" },
    { name: "Team Captain", icon: "🤝", color: "bg-orange-100", desc: "Lead a group project" },
    { name: "Super Founder", icon: "🏆", color: "bg-red-100", desc: "Complete all 3 modules" },
  ];
  return (
    <section className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-1.5 mb-3">
          <FaTrophy className="text-amber-600" />
          <span className="text-sm font-semibold text-amber-700">🏅 EARN BADGES AS YOU GROW 🏅</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Your Founder Wall of Fame</h2>
        <p className="text-gray-700 mb-8">Every quest, every challenge, every win — get a badge!</p>
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((b, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className={`${b.color} rounded-2xl p-3 w-28 text-center shadow-md`}>
              <div className="text-3xl">{b.icon}</div>
              <p className="font-bold text-xs mt-1">{b.name}</p>
              <p className="text-[10px] text-gray-500">{b.desc}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-6">✨ Plus 20+ secret badges to discover! ✨</p>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-20 bg-gradient-to-br from-white to-amber-50/50">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-amber-100">
          <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-4 py-1.5 mb-4">
            <FaHandshake className="text-amber-600 text-sm" />
            <span className="text-sm font-semibold text-amber-700 tracking-wider">🎁 JOIN THE MOVEMENT 🎁</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Be a Little Founder
          </h2>
          
          <div className="flex justify-center mb-5">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            🚀 Get early access to our launch, <strong>FREE founder starter kit</strong>, and a chance to win a 
            mentorship session with real entrepreneurs!
          </p>
          
          <div className="bg-amber-50 rounded-xl p-4 mb-6 inline-block">
            <p className="text-sm text-amber-800">🎁 FREE STARTER KIT INCLUDES: Idea Journal PDF + Badge Stickers + Business Plan Template</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Get My Free Kit 🎁
              </motion.button>
            </div>
            <p className="text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
              <FaShieldAlt className="text-green-500" /> Parents welcome! We'll send program details and safety info first.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="text-center bg-white rounded-xl p-5 shadow-md border border-amber-100">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-2xl mb-3">
              <FaUsers className="text-2xl text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">👪 For Parents</h3>
            <p className="text-gray-600 text-sm">Safe, educational, and screen-time well spent. Weekly progress reports included.</p>
            <p className="text-amber-600 text-xs mt-2">📧 parents@littlefounders.com</p>
            <div className="mt-2 text-xs text-gray-400">🔒 COPPA compliant • No ads • Parent dashboard</div>
          </div>
          <div className="text-center bg-white rounded-xl p-5 shadow-md border border-amber-100">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-2xl mb-3">
              <FaRocket className="text-2xl text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">🚀 For Young Founders</h3>
            <p className="text-gray-600 text-sm">Get your founder badge, complete quests, and build your first real business!</p>
            <p className="text-orange-600 text-xs mt-2">⭐ Join the Discord (coming soon) • Weekly live events</p>
            <div className="mt-2 text-xs text-gray-400">🎮 Play • Learn • Earn • Repeat</div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">© 2025 Little Founders — Where every kid learns to build their dreams. 🌟</p>
        </div>
      </div>
    </div>
  </section>
);

export default LittleFounders;