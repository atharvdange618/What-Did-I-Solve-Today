import { AboutContent } from "@/components/about-content";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
