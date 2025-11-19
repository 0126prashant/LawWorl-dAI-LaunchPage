import { Globe } from "@/components/ui/globe";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-black flex flex-col items-center justify-start overflow-hidden">

      {/* Heading - large, white, bold */}
      <h1 className="relative z-20 mt-24 text-5xl md:text-7xl lg:text-8xl text-white text-center font-sans font-bold tracking-tight px-4">
         Launching soon
      </h1>

      {/* Subtext - gray, larger, multi-line */}
      <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-base md:text-lg text-center relative z-20 px-4 leading-relaxed">
      {/* “AI-powered legal advice, automation, and compliance — all at LawWorld.ai. */}
      {/* Chat with database, judgment research, drafting, case management, smart steno, commentary, and translation — all powered by LawWorld.ai. */}
      Chat about any legal query, perform judgment research, drafting, smart steno, commentary, and translation — all AI-powered, with case management built right into LawWorld.ai.
      </p>

      {/* Email Form */}
      <div className="relative z-20 mt-8 w-full max-w-2xl px-4">
  <div className="flex flex-col sm:flex-row items-center gap-4">
    
    <Input
      type="email"
      placeholder="Enter your email"
      className="
        flex-1 
        text-base md:text-lg 
        bg-transparent 
        border-gray-700 
        text-white 
        placeholder:text-gray-500 
        focus:border-gray-500
      "
    />

    <button
      className="
        w-full sm:w-auto
        inline-flex items-center justify-center 
        whitespace-nowrap rounded-md
        px-8 py-3 
        text-sm font-medium text-white 
        bg-neutral-800 hover:bg-neutral-700
        border border-neutral-700
        transition
        focus-visible:outline-none 
        focus-visible:ring-2 focus-visible:ring-neutral-600 
        focus-visible:ring-offset-2 focus-visible:ring-offset-black
      "
    >
      Notify Me
    </button>

  </div>
</div>


      {/* Globe anchored to bottom; translate-y-1/2 keeps exactly the top half visible; width 80% */}
      <Globe className="translate-y-1/2 !max-w-none w-[80vw]" />

      {/* Background beams behind content */}
      <BackgroundBeams className="opacity-60 z-0" />

      {/* Radial dark fade for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.85))]" />
    </div>
  );
}
