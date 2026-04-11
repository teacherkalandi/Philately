import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, 
  Mail, 
  Award, 
  PenTool, 
  Users, 
  CreditCard, 
  ChevronRight,
  Stamp,
  ArrowLeft,
  Calendar
} from "lucide-react";

const cards = [
  {
    title: "Philately Report",
    description: "Access comprehensive annual reports and statistical data on philatelic activities.",
    icon: FileText,
    color: "text-post-red",
    link: "#"
  },
  {
    title: "Dhai Akhar",
    description: "National level letter writing competition to promote the art of letter writing.",
    icon: Mail,
    color: "text-post-red",
    link: "#"
  },
  {
    title: "Deen Dayal SPARSH Yojana",
    description: "Scholarship for Promotion of Aptitude & Research in Stamps as a Hobby.",
    icon: Award,
    color: "text-post-red",
    link: "#"
  },
  {
    title: "Universal Letter Writing Competition",
    description: "International competition organized by UPU for young people worldwide.",
    icon: PenTool,
    color: "text-post-red",
    link: "#"
  },
  {
    title: "Philately Club Details",
    description: "Find information about local philately clubs and community gatherings.",
    icon: Users,
    color: "text-post-red",
    link: "#"
  },
  {
    title: "Philately Deposit Account Details",
    description: "Manage your PDA for hassle-free collection of new stamps and special covers.",
    icon: CreditCard,
    color: "text-post-red",
    link: "#"
  }
];

const sparshCards = [
  {
    title: "SPARSH 2025-26",
    description: "Scholarship details and application process for the academic year 2025-26.",
    icon: Calendar,
    color: "text-post-red",
    link: "https://sparsh-2025.vercel.app/"
  },
  {
    title: "SPARSH 2026-27",
    description: "Upcoming scholarship schedule and guidelines for the academic year 2026-27.",
    icon: Calendar,
    color: "text-post-red",
    link: "#"
  }
];

export default function App() {
  const [activeView, setActiveView] = useState("main");

  const currentCards = activeView === "main" ? cards : sparshCards;

  return (
    <div className="min-h-screen bg-white selection:bg-post-yellow selection:text-post-red">
      {/* Top Bar Accent */}
      <div className="bg-post-yellow h-1 w-full" />
      
      {/* Header */}
      <header className="border-b border-post-yellow/20 py-3 md:py-4 px-4 md:px-6 bg-post-red sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 md:gap-4"
          >
            {/* National Emblem */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="National Emblem" 
              className="h-10 md:h-12 w-auto brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center rounded-full shadow-inner overflow-hidden border-2 border-post-yellow">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6rXlDr3gjOzsO9mrWzH3BIHgUS8ibUopZg&s" 
                alt="Philately Logo" 
                className="w-full h-full object-cover scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-post-yellow">Philately</h1>
              <p className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-white/80 font-bold">Department of Posts</p>
            </div>
          </motion.div>
          
          <motion.nav 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 md:gap-6 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white"
          >
            <a href="#" className="hover:text-post-yellow transition-colors border-b-2 border-transparent hover:border-post-yellow pb-1">Home</a>
            <a href="#" className="hover:text-post-yellow transition-colors border-b-2 border-transparent hover:border-post-yellow pb-1">Exhibitions</a>
            <a href="#" className="hover:text-post-yellow transition-colors border-b-2 border-transparent hover:border-post-yellow pb-1">Archive</a>
            <a href="#" className="hover:text-post-yellow transition-colors border-b-2 border-transparent hover:border-post-yellow pb-1">Contact</a>
            
            {/* India Post Logo */}
            <div className="bg-white p-1 md:p-1.5 rounded-sm ml-1 md:ml-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/3/32/India_Post.svg" 
                alt="India Post" 
                className="h-4 md:h-6 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-post-yellow/10 rounded-full -mr-24 md:-mr-32 -mt-24 md:-mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-post-red/5 rounded-full -ml-24 md:-ml-32 -mb-24 md:-mb-32 blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-post-red/10 text-post-red px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6"
          >
            Department of Posts
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-3xl md:text-7xl mb-4 md:mb-8 leading-tight text-ink"
          >
            Connecting Hearts, <br />
            <span className="text-post-red italic">Through Every Stamp.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-ink/70 max-w-2xl mx-auto leading-relaxed mb-6 md:mb-10"
          >
            Welcome to the official Philately portal. Discover the vibrant world of 
            Indian stamps, competitions, and our rich postal heritage.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-post-red text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/20"
          >
            Start Collecting
          </motion.button>
        </div>
      </section>

      {/* Cards Grid */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div className="flex items-center gap-2 md:gap-4 flex-grow">
            <div className="h-px bg-ink/10 flex-grow" />
            <h3 className="font-serif text-xl md:text-3xl font-bold text-ink whitespace-nowrap">
              {activeView === "main" ? "Our Programs" : "SPARSH Details"}
            </h3>
            <div className="h-px bg-ink/10 flex-grow" />
          </div>
          
          {activeView !== "main" && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setActiveView("main")}
              className="ml-4 md:ml-6 flex items-center gap-1 md:gap-2 text-post-red font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-post-red hover:text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full border-2 border-post-red transition-all"
            >
              <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
              Back
            </motion.button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {currentCards.map((card, index) => (
              <motion.a
                key={card.title}
                href={card.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                onClick={(e) => {
                  if (card.title === "Deen Dayal SPARSH Yojana") {
                    e.preventDefault();
                    setActiveView("sparsh");
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }
                }}
                className="group relative bg-white p-6 md:p-10 rounded-2xl border-2 border-post-red/20 shadow-sm hover:border-post-red hover:shadow-2xl hover:shadow-post-red/10 transition-all duration-500 flex flex-col h-full overflow-hidden"
              >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-post-yellow/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:bg-post-yellow/20 transition-colors duration-500" />
              
              <div className={`${card.color} mb-8 p-4 bg-slate-50 rounded-xl w-fit group-hover:bg-post-red group-hover:text-white transition-all duration-500`}>
                <card.icon className="w-8 h-8" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold mb-4 text-ink group-hover:text-post-red transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-ink/60 leading-relaxed mb-10 flex-grow text-sm">
                {card.description}
              </p>
              
              <div className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-post-red group-hover:gap-3 transition-all">
                {card.title === "Deen Dayal SPARSH Yojana" ? "View Details" : "Learn More"}
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-post-red text-white py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-post-yellow" />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="bg-post-yellow p-2 rounded-full">
                <Stamp className="text-post-red w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="font-serif text-2xl md:text-3xl font-bold">Philately</span>
            </div>
            <p className="opacity-80 text-xs md:text-sm leading-relaxed max-w-md mb-6 md:mb-8">
              The Department of Posts is committed to fostering the hobby of 
              philately as a medium of education and cultural preservation.
            </p>
            <div className="flex gap-3 md:gap-4">
              {/* Social placeholders */}
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-post-yellow hover:text-post-red transition-all cursor-pointer">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-current rounded-sm opacity-50" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-post-yellow mb-4 md:mb-6 font-black">Quick Links</h4>
            <ul className="space-y-2 md:space-y-4 text-xs md:text-sm font-medium">
              <li><a href="#" className="hover:text-post-yellow transition-colors">Philately Report</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Dhai Akhar</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">SPARSH Yojana</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Letter Writing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-post-yellow mb-4 md:mb-6 font-black">Contact Us</h4>
            <p className="text-xs md:text-sm opacity-80 leading-relaxed mb-3 md:mb-4">
              Dak Bhawan, Sansad Marg,<br />
              New Delhi - 110001
            </p>
            <p className="text-xs md:text-sm font-bold">Toll Free: 1800-266-6868</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
          <div className="text-center md:text-left">
            <div>&copy; {new Date().getFullYear()} Department of Posts, India.</div>
            <div className="mt-1 md:mt-2 text-post-yellow opacity-100 tracking-widest">
              Prepared by Kalandi Charan Sahoo, OA, DO, Dhenkanal Postal Division.
            </div>
          </div>
          <div className="flex gap-4 md:gap-8">
            <a href="#" className="hover:text-post-yellow">Privacy Policy</a>
            <a href="#" className="hover:text-post-yellow">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
