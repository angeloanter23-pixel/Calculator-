import React, { useState } from 'react';
import { Rocket, Github, ExternalLink, Zap, Shield, Globe } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl tracking-tight">ViteReact</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Docs</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Community</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
              Build faster with <span className="text-blue-600">Vite, React & Tailwind</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              The ultimate starter template for modern web development. 
              Ship high-quality apps with zero configuration and maximum speed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all">
                <Zap className="w-5 h-5" /> Start Building
              </button>
              <button className="border border-slate-200 hover:bg-slate-100 text-slate-700 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all">
                <Github className="w-5 h-5" /> View Source
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[ 
                { icon: <Zap className="w-6 h-6" />, title: "Lightning Fast", desc: "Vite's HMR ensures a development experience that's instant and responsive." },
                { icon: <Shield className="w-6 h-6" />, title: "Type Safe", desc: "Built with TypeScript from the ground up for maximum reliability and scaling." },
                { icon: <Globe className="w-6 h-6" />, title: "Ready to Ship", desc: "Optimized production builds with Tailwind CSS for industry-standard performance." }
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Your App Project. Built with love and modern tech.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;