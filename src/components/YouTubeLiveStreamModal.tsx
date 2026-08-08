import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Maximize2, Minimize2, X, MessageSquare, MessageSquareOff, Send, Download, Calendar, Clock, Users, Radio, Play, Share2, CheckCircle2, ShieldCheck, ChevronRight, FileText, Tv, Eye, EyeOff } from 'lucide-react';

interface YouTubeLiveStreamModalProps {
  isOpen: boolean;
  onClose: () => void;
  userDisplayName?: string;
}

interface ChatMessage {
  id: string;
  sender: string;
  avatarColor: string;
  text: string;
  time: string;
  isMe?: boolean;
  badge?: string;
}

export default function YouTubeLiveStreamModal({
  isOpen,
  onClose,
  userDisplayName = 'Siswa'
}: YouTubeLiveStreamModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [activeStreamId, setActiveStreamId] = useState<string>('live_sat_sun');
  const [liveViewers, setLiveViewers] = useState(1428);
  const [chatInput, setChatInput] = useState('');
  
  // Live Chat state
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: 'Master Mentor Andi', avatarColor: 'bg-blue-600', text: 'Selamat datang teman-teman! Sesi Live Pembahasan Sabtu & Minggu dimulai. Siapkan buku catatan ya!', time: '19:00', badge: 'Tutor' },
    { id: '2', sender: 'Budi (Siswa SMA 1)', avatarColor: 'bg-emerald-600', text: 'Hadir kak! Soal matriks HOTS kemarin keluar di simulasi.', time: '19:02' },
    { id: '3', sender: 'Siti Rahma', avatarColor: 'bg-purple-600', text: 'Kak, mohon bahas trik cepat eliminasi Gauss buat Matematika Tingkat Lanjut!', time: '19:03' },
    { id: '4', sender: 'Master Mentor Andi', avatarColor: 'bg-blue-600', text: 'Siap Siti! Nanti di menit ke-20 kita bedah trik 10 detik pengerjaan soal Gauss.', time: '19:04', badge: 'Tutor' },
    { id: '5', sender: 'Rian Pratama', avatarColor: 'bg-amber-600', text: 'Mantap banget live streaming sabtu minggu ini, gampang difahami!', time: '19:05' },
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatContainerRef.current && isChatOpen) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isChatOpen]);

  // Simulate incoming live chat messages periodically
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      // Fluctuate viewer count slightly
      setLiveViewers((prev) => prev + Math.floor(Math.random() * 5) - 2);

      const randomSimulations = [
        { sender: 'Anisa Putri', text: 'Penjelasan trik cepatnya paham banget kak!', color: 'bg-pink-600' },
        { sender: 'Diki Chandra', text: 'Modul PDF Sabtu-Minggu udah bisa didownload kan?', color: 'bg-indigo-600' },
        { sender: 'Faris Farhan', text: 'Keren banget UI live streamnya gak usah keluar aplikasi!', color: 'bg-[#2563EB]' },
        { sender: 'Master Mentor Andi', text: 'Ayo teman-teman yang baru bergabung, catat rumus utamanya!', color: 'bg-blue-600', badge: 'Tutor' },
        { sender: 'Nabila Syifa', text: 'TKA Fisika minggu besok jam berapa kak?', color: 'bg-teal-600' }
      ];

      const pick = randomSimulations[Math.floor(Math.random() * randomSimulations.length)];
      const newMsg: ChatMessage = {
        id: Date.now().toString(),
        sender: pick.sender,
        avatarColor: pick.color,
        text: pick.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        badge: pick.badge
      };

      setMessages((prev) => [...prev.slice(-30), newMsg]);
    }, 12000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const myMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: userDisplayName,
      avatarColor: 'bg-[#2563EB]',
      text: chatInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setMessages((prev) => [...prev, myMsg]);
    setChatInput('');
  };

  // Video streams dictionary (using clean embed YouTube videos)
  const streamList = [
    {
      id: 'live_sat_sun',
      title: '🔴 Live Pembahasan Soal HOTS UTBK & TKA (Sabtu & Minggu)',
      embedUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&rel=0&modestbranding=1',
      mentor: 'Master Mentor Andi & Tim Dosen PTN',
      schedule: 'Setiap Sabtu & Minggu • 19:00 - 21:00 WIB',
      isLiveNow: true,
      description: 'Program Unggulan Eksklusif: Live streaming bedah soal HOTS, Penalaran Matematika, & TKA Akademik interaktif dengan sesi tanya-jawab real-time.'
    },
    {
      id: 'archive_sat_1',
      title: '📺 Rekaman Live Sabtu Lalu: Bedah Trik 10 Detik Soal Matriks & Polinomial',
      embedUrl: 'https://www.youtube.com/embed/5qap5aO4i9A?autoplay=0&rel=0',
      mentor: 'Master Mentor Andi',
      schedule: 'Rekaman Sabtu Kemarin (2 Jam Full)',
      isLiveNow: false,
      description: 'Pembahasan mendalam 20 soal HOTS Matriks & Polinomial TKA Matematika Tingkat Lanjut.'
    },
    {
      id: 'archive_sun_1',
      title: '📺 Rekaman Live Minggu Lalu: Strategi Skor IRT >700 Penalaran Matematika',
      embedUrl: 'https://www.youtube.com/embed/DWcJFNfaw9c?autoplay=0&rel=0',
      mentor: 'Tim Pembina UTBK',
      schedule: 'Rekaman Minggu Kemarin (1.5 Jam Full)',
      isLiveNow: false,
      description: 'Tips dan strategi menjawab cepat soal narasi panjang Penalaran Matematika UTBK/SNBT.'
    }
  ];

  const currentStream = streamList.find((s) => s.id === activeStreamId) || streamList[0];

  return (
    <div className={`fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-200 ${isFullscreen ? 'p-0' : 'p-2 sm:p-5'}`}>
      
      {/* Container Box */}
      <div className={`bg-slate-900 text-white w-full shadow-2xl flex flex-col overflow-hidden transition-all duration-300 border border-slate-800 ${
        isFullscreen 
          ? 'h-screen w-screen rounded-none border-none' 
          : 'max-w-7xl h-[94vh] rounded-3xl'
      }`}>
        
        {/* Top Navigation Bar */}
        <div className="px-4 sm:px-6 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="p-2 bg-red-600/20 text-red-500 rounded-xl border border-red-500/30 shrink-0 flex items-center gap-1.5 animate-pulse">
              <Radio className="w-4 h-4 text-red-500" />
              <span className="text-[10px] font-black uppercase tracking-wider hidden sm:inline">PROGRAM UNGGULAN</span>
            </div>
            <div className="truncate">
              <h3 className="font-extrabold text-sm sm:text-base text-white flex items-center gap-2 truncate">
                Live Stream Pembahasan Sabtu & Minggu
                <span className="text-[10px] bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-400/30 shrink-0 hidden md:inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Fitur Pembeda #1
                </span>
              </h3>
              <p className="text-xs text-slate-400 truncate hidden sm:block">
                Tonton siaran langsung tanpa keluar dari aplikasi TKA & UTBK
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Toggle Live Chat button */}
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border shadow-xs ${
                isChatOpen
                  ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                  : 'bg-blue-600 text-white border-blue-500 hover:bg-blue-500 shadow-blue-500/20'
              }`}
              title={isChatOpen ? 'Tutup Live Chat (Perlebar Layar Video)' : 'Buka Live Chat Interaktif'}
            >
              {isChatOpen ? (
                <>
                  <MessageSquareOff className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Sembunyikan Chat</span>
                </>
              ) : (
                <>
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span className="hidden sm:inline">Tampilkan Chat</span>
                </>
              )}
            </button>

            {/* Fullscreen toggle button */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border border-slate-700 shadow-xs"
              title={isFullscreen ? 'Keluar dari Mode Fullscreen' : 'Layar Penuh / Fullscreen In-App'}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-4 h-4 text-blue-400" />
                  <span className="hidden sm:inline">Keluar Layar Penuh</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4 text-blue-400" />
                  <span className="hidden sm:inline">Layar Penuh</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
              title="Tutup Player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content Area: Video Player + Sidebar Chat */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          
          {/* Left / Main Section: YouTube Video & Controls */}
          <div className="flex-1 flex flex-col bg-black overflow-y-auto">
            
            {/* Embedded YouTube Iframe Wrapper (Ultra wide in fullscreen or when chat closed) */}
            <div className={`relative w-full bg-black shrink-0 shadow-2xl group transition-all duration-300 ${
              isFullscreen
                ? isChatOpen
                  ? 'h-[50vh] sm:h-[65vh] lg:h-[72vh]'
                  : 'h-[60vh] sm:h-[75vh] lg:h-[84vh]'
                : isChatOpen
                  ? 'aspect-video max-h-[55vh]'
                  : 'aspect-video max-h-[68vh]'
            }`}>
              <iframe
                src={currentStream.embedUrl}
                title={currentStream.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              {/* Status Badge Overlay */}
              <div className="absolute top-3 left-3 pointer-events-none flex items-center gap-2 z-10">
                {currentStream.isLiveNow ? (
                  <span className="bg-red-600 text-white text-[11px] font-black px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md uppercase tracking-wider animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    LIVE STREAMING
                  </span>
                ) : (
                  <span className="bg-slate-800/90 text-slate-200 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-slate-700 shadow-md">
                    <Tv className="w-3.5 h-3.5 text-blue-400" />
                    REKAMAN LIVE
                  </span>
                )}

                <span className="bg-slate-900/80 backdrop-blur-md text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700/80 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  {liveViewers.toLocaleString()} Penonton
                </span>
              </div>

              {/* Quick Chat Toggle Overlay badge when chat is closed */}
              {!isChatOpen && (
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="absolute top-3 right-3 bg-slate-900/90 hover:bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-700 shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                  <span>Buka Live Chat ({messages.length})</span>
                </button>
              )}
            </div>

            {/* Quick Comment Bar when Live Chat is Closed */}
            {!isChatOpen && (
              <div className="bg-slate-950 p-3 border-b border-slate-800 flex items-center gap-3">
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setIsChatOpen(true)}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center gap-1.5 border border-slate-700"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Lihat Chat ({messages.length})</span>
                  </button>
                </div>

                <form onSubmit={handleSendMessage} className="flex-1 flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Tulis pertanyaan / komentar cepat untuk Live Stream..."
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={!chatInput.trim()}
                    className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold rounded-xl text-xs transition-all cursor-pointer flex items-center gap-1 shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Kirim</span>
                  </button>
                </form>
              </div>
            )}

            {/* Video Details & Stream Selection Tabs */}
            <div className="p-4 sm:p-6 space-y-5 bg-slate-900 flex-1 border-t border-slate-800">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{currentStream.schedule}</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {currentStream.title}
                  </h2>
                  <p className="text-xs text-slate-400">
                    Pengajar: <strong className="text-slate-200">{currentStream.mentor}</strong>
                  </p>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://drive.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Modul PDF</span>
                  </a>
                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border border-slate-700"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>{isFullscreen ? 'Kecilkan Layar' : 'Layar Penuh'}</span>
                  </button>
                </div>
              </div>

              {/* Streams selector list */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5 text-blue-400" /> Pilih Sesi Live Streaming / Arsip
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                  {streamList.map((st) => {
                    const isActive = st.id === activeStreamId;
                    return (
                      <button
                        key={st.id}
                        onClick={() => setActiveStreamId(st.id)}
                        className={`p-3 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between space-y-2 ${
                          isActive
                            ? 'bg-blue-950/60 border-blue-500/80 text-white ring-1 ring-blue-500/50 shadow-md'
                            : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 text-slate-300'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between gap-1">
                            {st.isLiveNow ? (
                              <span className="text-[9px] font-black bg-red-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                                🔴 Live Sekarang
                              </span>
                            ) : (
                              <span className="text-[9px] font-bold bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full">
                                Rekaman Live
                              </span>
                            )}
                            <span className="text-[10px] text-slate-400">{st.schedule.split('•')[0]}</span>
                          </div>
                          <h5 className="font-bold text-xs line-clamp-2 leading-tight">{st.title}</h5>
                        </div>
                        <p className="text-[10px] text-slate-400 line-clamp-1">{st.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Flagship program notice box */}
              <div className="bg-gradient-to-r from-blue-950/60 via-indigo-950/40 to-slate-900 border border-blue-800/40 rounded-2xl p-4 text-xs space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-extrabold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Program Unggulan Eksklusif Pembahasan Live Sabtu & Minggu</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  Setiap akhir pekan (Sabtu & Minggu jam 19:00 WIB), para pembina olimpiade dan tutor terbaik kami mengadakan <strong>Live Streaming Interaktif</strong>. Siswa bisa langsung bertanya di Live Chat, meminta pembahasan soal tersulit, dan mendownload lembar pembahasan PDF secara gratis!
                </p>
              </div>

            </div>
          </div>

          {/* Right Section: Interactive Live Chat Simulator (Collapsible) */}
          {isChatOpen && (
            <div className="w-full lg:w-80 sm:lg:w-96 bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col shrink-0 h-72 lg:h-auto animate-in slide-in-from-right duration-200">
              
              {/* Chat Header with Close Button */}
              <div className="p-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span className="font-bold text-xs text-white">Live Chat Interaktif</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-slate-800 text-emerald-400 font-extrabold px-2 py-0.5 rounded border border-slate-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Siswa Online
                  </span>
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all cursor-pointer"
                    title="Sembunyikan Live Chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Messages Body */}
              <div 
                ref={chatContainerRef}
                className="flex-1 p-3.5 overflow-y-auto space-y-3 font-sans text-xs"
              >
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex items-start gap-2.5 ${msg.isMe ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-7 h-7 rounded-full text-white font-bold text-[11px] flex items-center justify-center shrink-0 ${msg.avatarColor}`}>
                      {msg.sender.charAt(0)}
                    </div>

                    <div className={`space-y-1 max-w-[82%] ${msg.isMe ? 'text-right' : ''}`}>
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 flex-wrap">
                        <span className={`font-bold ${msg.isMe ? 'text-blue-400' : 'text-slate-200'}`}>
                          {msg.sender}
                        </span>
                        {msg.badge && (
                          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold px-1.5 py-0.2 rounded text-[9px]">
                            {msg.badge}
                          </span>
                        )}
                        <span className="text-[9px] text-slate-500">{msg.time}</span>
                      </div>

                      <div className={`p-2.5 rounded-2xl leading-relaxed text-xs break-words ${
                        msg.isMe
                          ? 'bg-blue-600 text-white rounded-tr-none'
                          : msg.badge === 'Tutor'
                            ? 'bg-amber-950/80 border border-amber-600/40 text-amber-100 rounded-tl-none font-medium'
                            : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input Form */}
              <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2 shrink-0">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Tanyakan ke Master Mentor..."
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={!chatInput.trim()}
                  className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>
          )}

        </div>

        {/* Footer info bar */}
        <div className="px-6 py-2.5 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>Penyiaran Langsung Resmi TKA & UTBK — Live In-App Mode ({isChatOpen ? 'Chat Terbuka' : 'Layar Lebar Cinema'})</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white font-bold text-xs cursor-pointer"
          >
            Tutup Live Player
          </button>
        </div>

      </div>
    </div>
  );
}
