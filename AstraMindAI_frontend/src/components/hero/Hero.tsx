import { HeroContent } from './HeroContent'
import { HeroScrollIndicator } from './HeroScrollIndicator'
import { HeroVisualization } from './HeroVisualization'

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-[100px] sm:pt-[116px] lg:pb-20 lg:pt-[132px]">
      <div className="bg-hero-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-10 xl:gap-14">
          <HeroContent />
          <HeroVisualization />
        </div>
      </div>

      <HeroScrollIndicator />
    </section>
  )
}
