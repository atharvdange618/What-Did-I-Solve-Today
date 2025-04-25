import { ArchiveContent } from "@/components/archive-content";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ArchiveContent />
      </main>
      <Footer />
    </div>
  );
}
