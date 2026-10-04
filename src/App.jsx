import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import WhyMe from "./components/WhyMe";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="app"
    >
      <div className="ambient-light" aria-hidden="true" />
      <div className="lightning-flash" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Services />
        <Pricing />
        <Portfolio />
        <Process />
        <WhyMe />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </motion.div>
  );
}

export default App;
