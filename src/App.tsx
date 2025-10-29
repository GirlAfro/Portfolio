import { Shield, Mail, Phone, Code, Server, Lock, Terminal, Globe, Users, Award } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CurrentFocus from './components/CurrentFocus';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <CurrentFocus />
      <Contact />
    </div>
  );
}

export default App;
