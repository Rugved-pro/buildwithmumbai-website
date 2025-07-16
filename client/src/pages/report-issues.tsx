import Navigation from "@/components/navigation";
import ComplaintSection from "@/components/complaint-section";
import Footer from "@/components/footer";

export default function ReportIssues() {
  return (
    <div className="min-h-screen page-enter">
      <Navigation />
      <div className="pt-16 slide-up">
        <ComplaintSection />
      </div>
      <Footer />
    </div>
  );
}
