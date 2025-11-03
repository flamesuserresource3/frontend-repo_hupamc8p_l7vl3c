import React, { useEffect, useMemo, useState } from 'react';
import { Zap, Flame, Skull, RefreshCw } from 'lucide-react';

function ProgressBar({ value, max }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden ring-1 ring-white/10">
      <div
        className="h-full bg-gradient-to-r from-red-600 via-red-500 to-orange-400 transition-all"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function KillChainMeter() {
  const [chain, setChain] = useState(0);
  const [apex, setApex] = useState(false);
  const [timer, setTimer] = useState(0);

  const nextTier = useMemo(() => {
    if (chain < 3) return 3;
    if (chain < 5) return 5;
    if (chain < 10) return 10;
    return 10;
  }, [chain]);

  useEffect(() => {
    let interval;
    if (apex) {
      setTimer(10);
      interval = setInterval(() => {
        setTimer((t) => {
          if (t <= 1) {
            clearInterval(interval);
            setApex(false);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => interval && clearInterval(interval);
  }, [apex]);

  const handleInfect = () => {
    const next = chain + 1;
    setChain(next);
    if (next === 10) setApex(true);
  };

  const handleMiss = () => {
    setChain(0);
    setApex(false);
    setTimer(0);
  };

  return (
    <section id="play" className="relative py-14 px-6 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-100">Chain-Infection Meter</h2>
          <button
            onClick={handleMiss}
            className="inline-flex items-center gap-2 text-xs rounded-full bg-white/5 hover:bg-white/10 text-zinc-200 px-3 py-1 border border-white/10"
            aria-label="Reset chain"
          >
            <RefreshCw size={14} /> Reset
          </button>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-zinc-200">
              <Zap size={18} className="text-orange-400" />
              <span className="text-sm">Current Chain:</span>
              <span className="text-lg font-semibold text-zinc-100">{chain}</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleInfect}
                className="inline-flex items-center gap-2 rounded-full bg-red-600/90 hover:bg-red-600 text-white px-4 py-2 text-sm"
              >
                Infect
              </button>
              <button
                onClick={handleMiss}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-100 px-4 py-2 text-sm border border-white/10"
              >
                Miss Chain
              </button>
            </div>
          </div>

          <div className="mt-4">
            <ProgressBar value={chain} max={10} />
            <div className="mt-2 text-xs text-zinc-400 flex items-center justify-between">
              <span>Next threshold: {nextTier}</span>
              <span>10 = Apex Form</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className={`rounded-lg p-3 border ${chain >= 3 ? 'bg-red-600/20 border-red-600/40' : 'bg-white/5 border-white/10'} `}>
              <div className="flex items-center gap-2 text-zinc-100">
                <Skull size={16} />
                <span className="font-medium">3-infect</span>
              </div>
              <p className="mt-1 text-zinc-300">Claws burst</p>
            </div>
            <div className={`rounded-lg p-3 border ${chain >= 5 ? 'bg-red-600/20 border-red-600/40' : 'bg-white/5 border-white/10'} `}>
              <div className="flex items-center gap-2 text-zinc-100">
                <Zap size={16} />
                <span className="font-medium">5-infect</span>
              </div>
              <p className="mt-1 text-zinc-300">Tendril dash</p>
            </div>
            <div className={`rounded-lg p-3 border ${apex ? 'bg-orange-500/20 border-orange-400/40' : 'bg-white/5 border-white/10'} `}>
              <div className="flex items-center gap-2 text-zinc-100">
                <Flame size={16} />
                <span className="font-medium">10-infect</span>
              </div>
              <p className="mt-1 text-zinc-300">Apex Form {apex ? `— ${timer}s` : ''}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
