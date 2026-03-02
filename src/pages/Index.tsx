import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/ProfileSection";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationSection";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => (
  <>
    <Navbar />
    <main>
      <ProfileSection />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <SupportSection />
    </main>
    <Footer />
    <ChatBot />
  </>
);

export default Index;
