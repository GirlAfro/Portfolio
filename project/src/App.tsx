import { Shield, Mail, Phone, Code, Server, Lock, Terminal, Globe, Users, Award } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
