import React, { useRef, useState, useEffect } from 'react';
import { Pen, Eraser, RotateCcw, Trash2, Maximize2, Minimize2 } from 'lucide-react';

interface ScratchpadWorkspaceProps {
  watermarkText?: string;
  isCompact?: boolean;
}

export default function ScratchpadWorkspace({
  watermarkText = 'NURLATIF',
  isCompact = false
}: ScratchpadWorkspaceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  const [color, setColor] = useState<string>('#2563eb');
  const [lineWidth, setLineWidth] = useState<number>(3);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Resize canvas according to container
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const prevData = canvas.toDataURL();
      canvas.width = rect.width;
      canvas.height = Math.max(380, rect.height - 50);

      const ctx = canvas.getContext('2d');
      if (ctx && prevData) {
        const img = new Image();
        img.src = prevData;
        img.onload = () => {
          ctx.drawImage(img, 0, 0);
        };
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [isFullscreen]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Save history
    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      setHistory(prev => [...prev.slice(-10), imgData]);
    } catch {
      // ignore
    }

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = tool === 'eraser' ? 24 : lineWidth;
    ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : color;
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.closePath();
    setIsDrawing(false);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const lastState = history[history.length - 1];
    setHistory(prev => prev.slice(0, prev.length - 1));
    ctx.putImageData(lastState, 0, 0);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHistory([]);
  };

  return (
    <div
      className={`bg-white border border-slate-200/90 rounded-3xl shadow-sm overflow-hidden flex flex-col transition-all relative ${
        isFullscreen ? 'fixed inset-4 z-50 shadow-2xl' : 'w-full h-full min-h-[420px]'
      }`}
    >
      {/* Scratchpad Header Toolbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-50/90 border-b border-slate-100 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <Pen className="w-3.5 h-3.5 text-blue-600" />
            Lembar Coret-coret / Workspace
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 border border-blue-200">
            {watermarkText}
          </span>
        </div>

        {/* Tools */}
        <div className="flex items-center gap-1.5">
          {/* Pen / Eraser Mode */}
          <div className="flex bg-slate-200/70 p-0.5 rounded-xl">
            <button
              type="button"
              onClick={() => setTool('pen')}
              className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                tool === 'pen' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Pensil Coretan"
            >
              <Pen className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setTool('eraser')}
              className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                tool === 'eraser' ? 'bg-white text-red-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Penghapus"
            >
              <Eraser className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Color Palettes (Pen mode) */}
          {tool === 'pen' && (
            <div className="flex items-center gap-1 px-1">
              {[
                { name: 'Biru', hex: '#2563eb' },
                { name: 'Hitam', hex: '#0f172a' },
                { name: 'Merah', hex: '#dc2626' },
                { name: 'Hijau', hex: '#16a34a' }
              ].map(c => (
                <button
                  key={c.hex}
                  type="button"
                  onClick={() => setColor(c.hex)}
                  className={`w-5 h-5 rounded-full cursor-pointer transition-transform ${
                    color === c.hex ? 'ring-2 ring-blue-400 ring-offset-1 scale-110' : 'hover:scale-105 opacity-80'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={`Warna ${c.name}`}
                />
              ))}
            </div>
          )}

          {/* Line Width */}
          {tool === 'pen' && (
            <select
              value={lineWidth}
              onChange={e => setLineWidth(Number(e.target.value))}
              className="text-[11px] font-bold bg-white border border-slate-200 rounded-lg px-2 py-1 text-slate-700 cursor-pointer"
            >
              <option value={2}>Tipis</option>
              <option value={4}>Sedang</option>
              <option value={7}>Tebal</option>
            </select>
          )}

          {/* Undo & Clear */}
          <button
            type="button"
            onClick={handleUndo}
            disabled={history.length === 0}
            className="p-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-30 text-slate-600 transition-colors cursor-pointer disabled:cursor-not-allowed"
            title="Urungkan Coretan"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="p-1.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 transition-colors cursor-pointer"
            title="Bersihkan Lembar"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
            title="Perbesar Lembar Coretan"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Canvas Area with Watermark */}
      <div className="relative flex-1 bg-white cursor-crosshair overflow-hidden touch-none select-none min-h-[360px]">
        {/* NURLATIF Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span className="text-slate-300/50 font-black text-5xl sm:text-7xl lg:text-8xl tracking-[0.2em] uppercase transform -rotate-12 select-none font-mono">
            {watermarkText}
          </span>
        </div>

        {/* Grid pattern overlay (Grid berpetak halus) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />

        {/* HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="relative z-10 w-full h-full block"
        />
      </div>
    </div>
  );
}
