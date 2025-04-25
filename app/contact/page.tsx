import { ContactContent } from "@/components/contact-content";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}
