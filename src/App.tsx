/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhoIsFred } from './components/WhoIsFred';
import { TurningPoint } from './components/TurningPoint';
import { Impact } from './components/Impact';
import { Testimonials } from './components/Testimonials';
import { Urgency } from './components/Urgency';
import { FinalCTA } from './components/FinalCTA';

import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF7F4] text-[#161616] font-sans flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <WhoIsFred />
        <TurningPoint />
        <Impact />
        <Testimonials />
        <Urgency />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
