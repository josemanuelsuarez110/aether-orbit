import UniverseCanvas from '@/components/universe/UniverseCanvas'

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white selection:bg-blue-500/30">
      {/* 3D Universe Layer */}
      <div className="absolute inset-0 z-0">
        <UniverseCanvas />
      </div>

      {/* Interface Overlay */}
      <div className="absolute top-0 left-0 w-full p-8 z-10 pointer-events-none flex justify-between items-start">
        <div className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-light tracking-[0.2em] uppercase">AETHER / Orbit</h1>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-medium">Digital Project Architecture (3D Universe)</p>
          </div>
          
          <div className="flex items-center space-x-4 opacity-50">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[8px] uppercase tracking-widest font-bold">System Status: Spatial Link Established</span>
          </div>
        </div>

        <div className="text-right space-y-2">
          <p className="text-[8px] text-white/30 uppercase tracking-widest font-mono">Core: v1.0.0-SPATIAL</p>
          <div className="w-32 h-[1px] bg-white/10 ml-auto" />
        </div>
      </div>

      {/* Footer Navigation Hints */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center space-y-4">
        <p className="text-[9px] text-white/20 uppercase tracking-[0.4em]">
          Scroll to zoom &bull; Click to orbit &bull; Hover nodes for architecture
        </p>
      </div>

      {/* Decorative Corner Architecture */}
      <div className="absolute top-0 right-0 p-8 z-20 pointer-events-none flex flex-col items-end opacity-20">
        <div className="w-12 h-[1px] bg-white mb-1" />
        <div className="w-1 h-[1px] bg-white" />
      </div>
      <div className="absolute bottom-0 left-0 p-8 z-20 pointer-events-none flex flex-col items-start opacity-20">
        <div className="w-1 h-[1px] bg-white mb-1" />
        <div className="w-12 h-[1px] bg-white" />
      </div>
    </main>
  )
}
