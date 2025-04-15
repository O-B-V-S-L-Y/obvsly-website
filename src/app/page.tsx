import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
// Import is kept but component won't be rendered
import Products from '@/components/Products';
import Team from '@/components/Team';
import Vision from '@/components/Vision';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* Products component removed temporarily */}
      <Team />
      <Vision />
      <Footer />
    </main>
  );
}
