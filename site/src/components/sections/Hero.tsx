import { NeonButton } from '@/components/ui/NeonButton';
import { GlitchText } from '@/components/ui/GlitchText';
import { TerminalCursor } from '@/components/ui/TerminalCursor';

export function Hero() {
  return (
    <section className="px-8 pt-16 pb-20">
      <div className="grid gap-12 lg:grid-cols-[55%_45%]">
        {/* Left: 3D placeholder (Plan 3 swaps this with <CRTScene/>) */}
        <div className="aspect-[4/3] border border-amber-dim/40 bg-gradient-to-br from-amber-bg to-black/80 flex items-center justify-center">
          <div className="text-center text-amber-dim">
            <div className="font-mono text-xs uppercase tracking-widest">
              [ 3D CRT — Plan 3 ]
            </div>
            <div className="mt-2 text-amber-primary/40">▢</div>
          </div>
        </div>

        {/* Right: copy + CTAs */}
        <div className="flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-widest text-amber-dim">
            [ ccwatch v1.0.1 ]
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[1.05] sm:text-6xl">
            <GlitchText>watch the meter,</GlitchText>
            <br />
            <GlitchText>not the bill</GlitchText>
            <TerminalCursor className="ml-2" />
          </h1>
          <p className="mt-6 max-w-md text-amber-cream/90">
            Fast cost &amp; quota statusline for Claude Code. Cached transcript scanning. Zero deps.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <NeonButton
              onClick={() => navigator.clipboard.writeText('npx @terzigolu/ccwatch')}
            >
              <span className="text-amber-primary">$</span>
              <span>npx @terzigolu/ccwatch</span>
            </NeonButton>
            <NeonButton
              variant="ghost"
              onClick={() => window.open('https://github.com/terzigolu/ccwatch', '_blank')}
            >
              View on GitHub →
            </NeonButton>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-amber-dim">
            <span>~80ms warm render</span>
            <span>·</span>
            <span>1163 LOC compiled</span>
            <span>·</span>
            <span>0 runtime deps</span>
          </div>
        </div>
      </div>
    </section>
  );
}
