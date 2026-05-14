import React, { useState } from "react";
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
  Calendar,
  ChevronDown,
  Youtube,
  Image as ImageIcon,
  Video,
  FilePlus,
  ExternalLink,
  Trash2,
  Plus,
  File,
  BookOpen,
  Scroll,
  FileCheck,
  Maximize2,
  X
} from "lucide-react";

const galleryImages = [
  {
    url: "https://postagestamps.gov.in/Uploads/2024/Stamp%20Sarangdhar.jpg",
    title: "Commemorative Stamp - Sarangdhar Das",
    description: "Issued in 2024 to honor the legacy of Sarangdhar Das."
  },
  {
    url: "https://postagestamps.gov.in/Uploads/2024/FDC%20Sarangdhar.jpg",
    title: "First Day Cover - Sarangdhar Das",
    description: "Official First Day Cover with special cancellation from Dhenkanal."
  },
  {
    url: "https://picsum.photos/seed/philately1/800/1000",
    title: "Heritage Collection",
    description: "Exploring the rich postal heritage of India through stamps."
  },
  {
    url: "https://picsum.photos/seed/philately2/800/1000",
    title: "Special Cancellations",
    description: "Unique postmarks and cancellations from various postal circles."
  },
  {
    url: "https://picsum.photos/seed/philately3/800/1000",
    title: "Rare Stamps",
    description: "A showcase of rare and limited edition commemorative stamps."
  },
  {
    url: "https://picsum.photos/seed/philately4/800/1000",
    title: "Postal History",
    description: "Documents and artifacts tracing the evolution of India Post."
  }
];

const cards = [
  {
    title: "Philately Report",
    description: "Access comprehensive annual reports and statistical data on philatelic activities.",
    icon: FileText,
    vibrantBg: "bg-blue-600",
    iconClass: "text-blue-600",
    link: "#"
  },
  {
    title: "Dhai Akhar",
    description: "National level letter writing competition to promote the art of letter writing.",
    icon: Mail,
    vibrantBg: "bg-teal-500",
    iconClass: "text-teal-500",
    link: "#"
  },
  {
    title: "Deen Dayal SPARSH Yojana",
    description: "Scholarship for Promotion of Aptitude & Research in Stamps as a Hobby.",
    icon: Award,
    vibrantBg: "bg-red-500",
    iconClass: "text-red-500",
    link: "#"
  },
  {
    title: "UPU Letter Writing Competition",
    description: "International competition organized by UPU for young people worldwide.",
    icon: PenTool,
    vibrantBg: "bg-purple-500",
    iconClass: "text-purple-500",
    link: "#"
  },
  {
    title: "Postage Stamp Dash Board",
    description: "Explore the collection of commemorative and definitive postage stamps of India.",
    icon: Stamp,
    vibrantBg: "bg-orange-500",
    iconClass: "text-orange-500",
    link: "https://stampinventorydkl.vercel.app/"
  },
  {
    title: "Documents and Forms",
    description: "Download essential philatelic forms, applications, and official documents.",
    icon: FileCheck,
    vibrantBg: "bg-amber-500",
    iconClass: "text-amber-500",
    link: "#"
  },
  {
    title: "PO Orders/ Rules",
    description: "Access Post Office orders, rules, and guidelines related to philately.",
    icon: Scroll,
    vibrantBg: "bg-emerald-500",
    iconClass: "text-emerald-500",
    link: "#"
  },
  {
    title: "Photo Gallery",
    description: "View our collection of philatelic photos, stamps, and first day covers.",
    icon: ImageIcon,
    vibrantBg: "bg-rose-500",
    iconClass: "text-rose-500",
    link: "#"
  },
  {
    title: "Philately Club Details",
    description: "Find information about local philately clubs and community gatherings.",
    icon: Users,
    vibrantBg: "bg-indigo-600",
    iconClass: "text-indigo-600",
    link: "https://docs.google.com/spreadsheets/d/1JeBXI8qf6d79ODMjv7240BzvaTCwwEGFJw7wMGP8dIo/edit?usp=drivesdk"
  },
  {
    title: "Philately Deposit Account Details",
    description: "Manage your PDA for hassle-free collection of new stamps and special covers.",
    icon: CreditCard,
    vibrantBg: "bg-cyan-600",
    iconClass: "text-cyan-600",
    link: "https://docs.google.com/spreadsheets/d/1oBhZsmrEQudtnLwi6dacm1N_gdhA2AS6dbUEZ2C1190/edit?usp=drivesdk"
  },
  {
    title: "Philately Videos",
    description: "Watch informative videos and tutorials on the art of stamp collecting and heritage.",
    icon: Youtube,
    vibrantBg: "bg-red-600",
    iconClass: "text-red-600",
    link: "#"
  }
];

const sparshCards = [
  {
    title: "SPARSH 2025-26",
    description: "Scholarship details and application process for the academic year 2025-26.",
    icon: Calendar,
    vibrantBg: "bg-red-500",
    iconClass: "text-red-500",
    link: "https://sparsh-2025.vercel.app/"
  },
  {
    title: "SPARSH 2026-27",
    description: "Upcoming scholarship schedule and guidelines for the academic year 2026-27.",
    icon: Calendar,
    vibrantBg: "bg-amber-500",
    iconClass: "text-amber-500",
    link: "#"
  }
];

const dhaiAkharLinks = [
  { title: "Notification by CO", url: "https://drive.google.com/file/d/1r8o0SPuoFXK3JBS-jzgDACMl2EBBF57M/view" },
  { title: "Notification by DO", url: "https://drive.google.com/file/d/1KxwEw4zDeuFi6tu4XT6hHdGnO-6sFuhw/view" },
  { title: "Notification by Directorate", url: "https://drive.google.com/file/d/18JbeOJUe4bSJpRfNWXVdKeRba1E8kguL/view" },
  { title: "SOP", url: "https://docs.google.com/document/d/1GPK_fwkG2wsOV4g4ShsZQzmibO2ZFfV6/edit" },
  { title: "Team Guide for School Activity", url: "https://docs.google.com/document/d/1-kv5FaKI_djZnJdYsaR5M-L84syQvYar/edit" },
  { title: "Participation Guide for Schools", url: "https://docs.google.com/document/d/1LQiRtAugk4zsnHQXLd5wD9awE3Lipu7O/edit" },
  { title: "Social Media Guidelines", url: "https://docs.google.com/document/d/1qVrkBMolJ3NBYdjgzjGj7VXrQLtEbEV9v6Gs5WsEoVY/edit?tab=t.0" },
  { title: "Directorate Link", url: "https://drive.google.com/drive/folders/1oAsk4ywFBFGyzL5wlqjxkARp1q9ptqWH" },
];

const philatelyVideos = [
  { title: "Video on Philately", url: "https://www.youtube.com/watch?v=xRqpJkO45mE&source_ve_path=OTY3MTQ&embeds_referring_euri=https%3A%2F%2Fsites.google.com%2F" },
  { title: "Philately Informative video", url: "https://www.youtube.com/watch?v=9KhBjRVSsw0" },
];

const documentFormsLinks = [
  { title: "Postage Stamp Web Site", url: "https://postagestamps.gov.in/" },
  { title: "My Stamp Order Form", url: "https://postagestamps.gov.in/Pdf/Mystamporderform.pdf" },
  { title: "Philately Deposit Account Opening Form", url: "https://postagestamps.gov.in/Pdf/Philately_Deposit_Account.pdf" },
  { title: "Deen Dayal SPARSH Yojana: 2023 PPT", url: "https://deendayalsparshyojana.edgeone.app/" },
  { title: "Previous Year Quiz: 2024", url: "https://drive.google.com/file/d/1_VvM2BYBcL8RzNYoCqETktMWp_iwKmML/view?usp=drive_link" },
  { title: "Philately Quiz: Youtube Video", url: "https://www.youtube.com/watch?v=jRCkxTvxskM" },
  { title: "Application for Philately Club", url: "https://drive.google.com/drive/folders/16hlRYHMKW7yocQ1oIDD0y1Pu1MOwQyL3?usp=drive_link" },
];

export default function App() {
  const [activeView, setActiveView] = useState<"main" | "sparsh" | "documents" | "gallery" | "dhai_akhar" | "videos" | "forms">("main");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<null | number>(null);
  const [documents, setDocuments] = useState([
    { id: '1', title: 'Philately Guide 2025', type: 'document', url: '#', date: '2025-04-10' },
    { id: '2', title: 'Stamp Collection Tutorial', type: 'youtube', url: 'https://youtube.com', date: '2025-04-09' },
    { id: '3', title: 'Exhibition Photo 01', type: 'photo', url: 'https://picsum.photos/seed/stamp/800/600', date: '2025-04-08' },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newDoc, setNewDoc] = useState({ title: '', type: 'document', url: '' });

  const currentCards = activeView === "main" ? cards : sparshCards;

  const addDocument = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDoc.title || !newDoc.url) return;
    const doc = {
      id: Date.now().toString(),
      ...newDoc,
      date: new Date().toISOString().split('T')[0]
    };
    setDocuments([doc, ...documents]);
    setNewDoc({ title: '', type: 'document', url: '' });
    setIsAddModalOpen(false);
  };

  const deleteDocument = (id: string) => {
    setDocuments(documents.filter(d => d.id !== id));
  };

  return (
    <div className="min-h-screen bg-white selection:bg-post-yellow selection:text-post-red">
      {/* Top Bar Accent */}
      <div className="bg-post-red h-1 w-full" />
      
      {/* Header */}
      <header className="border-b border-slate-200 py-4 px-4 md:px-6 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => setActiveView("main")}
          >
            {/* National Emblem */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="National Emblem" 
              className="h-10 md:h-12 w-auto"
              referrerPolicy="no-referrer"
            />
            
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center rounded-full shadow-md overflow-hidden border-2 border-post-red">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6rXlDr3gjOzsO9mrWzH3BIHgUS8ibUopZg&s" 
                alt="Philately Logo" 
                className="w-full h-full object-cover scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-post-red">Philately</h1>
              <p className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-ink/60 font-bold">Department of Posts</p>
            </div>
          </motion.div>
          
          <motion.nav 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6 md:gap-8 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-ink"
          >
            <button 
              onClick={() => setActiveView("main")}
              className="hover:text-post-red transition-colors border-b-2 border-transparent hover:border-post-red pb-1 uppercase cursor-pointer"
            >
              Home
            </button>
            <a href="#" className="hover:text-post-red transition-colors border-b-2 border-transparent hover:border-post-red pb-1">Exhibitions</a>
            
            {/* Other Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 hover:text-post-red transition-colors border-b-2 border-transparent hover:border-post-red pb-1 uppercase"
              >
                Other
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-4 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden py-2 z-[60]"
                  >
                    {[
                      { name: "Documents", action: () => setActiveView("documents") },
                      { name: "Consolidation", link: "https://stampinventorydkl.vercel.app/" },
                      { name: "Contact Details of Schools", link: "#" },
                      { name: "Philately Forms", link: "#" },
                      { name: "Archive", link: "#" }
                    ].map((item) => (
                      item.action ? (
                        <button
                          key={item.name}
                          onClick={() => {
                            item.action();
                            setIsDropdownOpen(false);
                          }}
                          className="w-full text-left block px-5 py-4 text-[10px] font-bold text-ink hover:bg-post-red hover:text-white transition-all border-b border-slate-50 last:border-0"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <a
                          key={item.name}
                          href={item.link}
                          className="block px-5 py-4 text-[10px] font-bold text-ink hover:bg-post-red hover:text-white transition-all border-b border-slate-50 last:border-0"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {item.name}
                        </a>
                      )
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* India Post Logo */}
            <div className="bg-slate-50 p-2 rounded-lg ml-2 border border-slate-200">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/3/32/India_Post.svg" 
                alt="India Post" 
                className="h-5 md:h-7 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.nav>
        </div>
      </header>

      {/* Hero Section */}
      {activeView !== "documents" && (
        <section className="relative bg-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8b0000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 flex flex-col items-center text-center relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-post-red/5 text-post-red px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-post-red/10"
              >
                <Stamp className="w-4 h-4" />
                Official Philately Portal
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-4xl md:text-8xl mb-6 md:mb-10 leading-[1.1] text-ink font-bold"
              >
                Preserving History, <br />
                <span className="text-post-red">One Stamp at a Time.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-2xl text-ink/70 max-w-2xl mx-auto leading-relaxed mb-12"
              >
                Explore the vibrant world of Indian philately. From commemorative stamps to 
                national competitions, discover our rich postal heritage.
              </motion.p>

              <div className="flex flex-wrap items-center justify-center gap-6">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-post-red text-white px-10 md:px-12 py-4 md:py-6 rounded-lg font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-red-900 transition-all shadow-xl shadow-post-red/20"
                >
                  Explore Collection
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white text-post-red border-2 border-post-red px-10 md:px-12 py-4 md:py-6 rounded-lg font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-post-red hover:text-white transition-all font-bold"
                >
                  Join Club
                </motion.button>
              </div>
            </div>
          </div>

          {/* Quick Links Bar (Banking Style) */}
          <div className="bg-slate-50 border-y border-slate-200 py-6">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap justify-center md:justify-between items-center gap-8">
              {[
                { label: "Stamp Inventory", icon: Stamp },
                { label: "Scholarships", icon: Award },
                { label: "Competitions", icon: PenTool },
                { label: "PDA Details", icon: CreditCard }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-ink/60 hover:text-post-red cursor-pointer transition-colors group">
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-24">
        {activeView === "documents" ? (
          /* Document Repository Section */
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <button 
                    onClick={() => setActiveView("main")}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors text-post-red"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink">Document Repository</h3>
                </div>
                <p className="text-ink/60 ml-12">Access and manage all philatelic resources in one place.</p>
              </div>
              <button 
                onClick={() => setIsAddModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-post-red text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-lg"
              >
                <Plus className="w-4 h-4" />
                Add Resource
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {documents.map((doc) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-post-red/30 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-xl ${
                        doc.type === 'youtube' ? 'bg-red-50 text-red-600' :
                        doc.type === 'photo' ? 'bg-blue-50 text-blue-600' :
                        doc.type === 'video' ? 'bg-purple-50 text-purple-600' :
                        'bg-emerald-50 text-emerald-600'
                      }`}>
                        {doc.type === 'youtube' && <Youtube className="w-6 h-6" />}
                        {doc.type === 'photo' && <ImageIcon className="w-6 h-6" />}
                        {doc.type === 'video' && <Video className="w-6 h-6" />}
                        {doc.type === 'document' && <FileText className="w-6 h-6" />}
                        {doc.type === 'form' && <FilePlus className="w-6 h-6" />}
                      </div>
                      <button 
                        onClick={() => deleteDocument(doc.id)}
                        className="text-slate-300 hover:text-red-500 transition-colors p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <h4 className="font-bold text-lg text-ink mb-2 line-clamp-1">{doc.title}</h4>
                    <p className="text-xs text-ink/40 uppercase tracking-widest font-bold mb-6">{doc.date}</p>
                    
                    <a 
                      href={doc.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-slate-50 rounded-xl text-ink font-bold text-xs uppercase tracking-widest group-hover:bg-post-red group-hover:text-white transition-all"
                    >
                      View Resource
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {documents.length === 0 && (
              <div className="text-center py-24 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                <File className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500 font-medium">No documents found. Start by adding one!</p>
              </div>
            )}
          </div>
        ) : activeView === "dhai_akhar" ? (
          /* Dhai Akhar Links View */
          <div>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <button 
                  onClick={() => setActiveView("main")}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-post-red"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-ink text-center">Dhai Akhar Resources</h3>
              </div>
              <p className="text-ink/60 max-w-2xl mx-auto">
                Essential documents, notifications, and guidelines for the Dhai Akhar Letter Writing Competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {dhaiAkharLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-5 rounded-xl bg-orange-500 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between border-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-white text-sm md:text-base">{link.title}</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>
        ) : activeView === "videos" ? (
          /* Philately Videos View */
          <div>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <button 
                  onClick={() => setActiveView("main")}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-post-red"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-ink text-center">Philately Videos</h3>
              </div>
              <p className="text-ink/60 max-w-2xl mx-auto">
                Watch informative video content about Indian philately, heritage, and tutorials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {philatelyVideos.map((video, index) => (
                <motion.a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-red-600 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-none"
                >
                  <div className="aspect-video w-full bg-white/10 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <Youtube className="w-16 h-16 text-white group-hover:scale-110 transition-all duration-500 z-10" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-xl text-white mb-2">{video.title}</h4>
                      <div className="flex items-center gap-2 text-[10px] font-black text-white/50 uppercase tracking-widest">
                        <Video className="w-3 h-3" />
                        YouTube Content
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-red-600 flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ) : activeView === "forms" ? (
          /* Documents and Forms View */
          <div>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <button 
                  onClick={() => setActiveView("main")}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-post-red"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-ink text-center">Documents & Forms</h3>
              </div>
              <p className="text-ink/60 max-w-2xl mx-auto">
                Access official application forms, educational resources, and useful philatelic links.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {documentFormsLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-5 rounded-xl bg-cyan-600 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between border-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white text-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-white text-sm md:text-base">{link.title}</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>
        ) : activeView === "gallery" ? (
          /* Photo Gallery View */
          <div>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <button 
                  onClick={() => setActiveView("main")}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-post-red"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-ink">Philatelic Gallery</h3>
              </div>
              <p className="text-ink/60 max-w-2xl mx-auto">
                A visual journey through the artistry and history of Indian postage stamps and postal artifacts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedGalleryImage(index)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-slate-50 flex items-center justify-center p-6">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-ink font-bold text-lg mb-1 group-hover:text-post-red transition-colors">{image.title}</h4>
                    <p className="text-ink/60 text-xs line-clamp-2 mb-4">{image.description}</p>
                    <div className="flex items-center gap-2 text-post-red text-[10px] font-bold uppercase tracking-widest">
                      <Maximize2 className="w-3 h-3" />
                      View Full Size
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* Cards Grid (Our Programs / SPARSH) */
          <div>
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
                      } else if (card.title === "Photo Gallery") {
                        e.preventDefault();
                        setActiveView("gallery");
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      } else if (card.title === "Dhai Akhar") {
                        e.preventDefault();
                        setActiveView("dhai_akhar");
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      } else if (card.title === "Philately Videos") {
                        e.preventDefault();
                        setActiveView("videos");
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      } else if (card.title === "Documents and Forms") {
                        e.preventDefault();
                        setActiveView("forms");
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }
                    }}
                    className={`group relative p-6 md:p-8 rounded-xl ${card.vibrantBg} shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center gap-6 h-full overflow-hidden border-none`}
                  >
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                    <card.icon className={`w-8 h-8 md:w-10 md:h-10 ${card.iconClass}`} />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1 flex items-center justify-between">
                      {card.title}
                      <ChevronRight className="w-5 h-5 text-white/50 group-hover:translate-x-1 transition-transform" />
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm line-clamp-2 leading-snug">
                      {card.description}
                    </p>
                  </div>
                </motion.a>
              ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedGalleryImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-10"
            onClick={() => setSelectedGalleryImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedGalleryImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedGalleryImage].url}
                alt={galleryImages[selectedGalleryImage].title}
                className="max-h-[70vh] w-auto rounded-lg shadow-2xl border-4 border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="mt-8 text-center text-white max-w-2xl">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                  {galleryImages[selectedGalleryImage].title}
                </h3>
                <p className="text-white/60 text-sm md:text-base">
                  {galleryImages[selectedGalleryImage].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Document Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden p-8"
            >
              <h3 className="font-serif text-2xl font-bold text-ink mb-6">Add New Resource</h3>
              <form onSubmit={addDocument} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-black text-ink/40 mb-2">Title</label>
                  <input 
                    type="text" 
                    value={newDoc.title}
                    onChange={(e) => setNewDoc({...newDoc, title: e.target.value})}
                    placeholder="e.g. Philately Form 2025"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-post-red outline-none transition-all font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-black text-ink/40 mb-2">Resource Type</label>
                  <select 
                    value={newDoc.type}
                    onChange={(e) => setNewDoc({...newDoc, type: e.target.value as any})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-post-red outline-none transition-all font-medium appearance-none bg-white"
                  >
                    <option value="document">Document / PDF</option>
                    <option value="form">Official Form</option>
                    <option value="youtube">YouTube Link</option>
                    <option value="photo">Photo / Image</option>
                    <option value="video">Video File</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-black text-ink/40 mb-2">URL / Link</label>
                  <input 
                    type="url" 
                    value={newDoc.url}
                    onChange={(e) => setNewDoc({...newDoc, url: e.target.value})}
                    placeholder="https://example.com/resource"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-post-red outline-none transition-all font-medium"
                    required
                  />
                </div>
                <div className="flex gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="flex-grow py-4 rounded-xl font-bold uppercase tracking-widest text-xs text-ink/40 hover:bg-slate-50 transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-grow bg-post-red text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-lg"
                  >
                    Add Resource
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
            <p className="text-xs md:text-sm opacity-80 leading-relaxed mb-1">
              Kalandi Charan Sahoo, OA,
            </p>
            <p className="text-xs md:text-sm opacity-80 leading-relaxed mb-3">
              Dhenkanal Postal Division
            </p>
            <p className="text-xs md:text-sm font-bold">Contact no. 824857xxxx</p>
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
