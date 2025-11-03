import React from 'react';
import { Zap, Eye, Flame, Shield, Skull } from 'lucide-react';

const AbilityCard = ({ icon: Icon, title, desc }) => (
  <div className="group relative rounded-xl border border-white/10 bg-white/5 p-4 text-zinc-200 hover:bg-white/10 transition">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20 ring-1 ring-red-600/30">
        <Icon className="text-red-400" size={18} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-zinc-100">{title}</h3>
        <p className="text-xs text-zinc-300/80 mt-0.5">{desc}</p>
      </div>
    </div>
  </div>
);

export default function GameplayShowcase() {
  return (
    <section id="how" className="relative py-14 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-100">Consume → Corrupt → Puppeteer → Spread</h2>
          <p className="mt-2 text-zinc-300 max-w-3xl">Hop bodies in one fluid streak. Maintain the chain to awaken monstrous forms. Miss the jump and collapse back to larva—terrified, starving.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AbilityCard icon={Eye} title="Latch & Burrow" desc="Leap, burrow into warm host-flesh. Feel their pulse become yours." />
          <AbilityCard icon={Zap} title="Puppet" desc="Hijack their nerves. Run, strike, and scream through borrowed lungs." />
          <AbilityCard icon={Flame} title="Chain Jump" desc="Burst out and arc to the next body. Keep it going to evolve." />
          <AbilityCard icon={Shield} title="Evolve Organs" desc="Grow teeth, tendrils, acid, spines—anatomy as weapon." />
          <AbilityCard icon={Skull} title="Infest Nests" desc="Seed eggs that hunt, wait, and whisper." />
          <AbilityCard icon={Eye} title="Parasitic Vision" desc="See heartbeats and weak spots through wet, red haze." />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-zinc-100 font-semibold">Chain-Infection Kill Runs</h3>
            <ul className="mt-3 list-disc list-inside text-zinc-300 text-sm space-y-1">
              <li>3-infect: claws burst</li>
              <li>5-infect: tendril dash</li>
              <li>10-infect: Apex Form (10s)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-zinc-100 font-semibold">Fails Hurt</h3>
            <ul className="mt-3 list-disc list-inside text-zinc-300 text-sm space-y-1">
              <li>Fire: instant purge</li>
              <li>UV: dissolves tissue</li>
              <li>Holy shrines: pain whispering</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-zinc-100 font-semibold">Viral Moments</h3>
            <ul className="mt-3 list-disc list-inside text-zinc-300 text-sm space-y-1">
              <li>Burst out mid-chase</li>
              <li>Corpse pile ambush</li>
              <li>Two parasites in one host</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
