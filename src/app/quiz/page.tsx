import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Do I Need to File? Free Tax Quiz",
  description:
    "Answer quick questions to find out your tax filing requirements. Free, instant results.",
  alternates: {
    canonical: "/quiz",
  },
};

export default function QuizPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Tax Filing Quiz</h1>
          <p className="text-gray-500 mb-8">Coming soon. In the meantime, check out our guides and tools.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/guides" className="bg-navy text-white px-6 py-3 rounded-xl font-medium hover:bg-navy-light transition-colors">
              Browse Guides
            </Link>
            <Link href="/tools/quick-tax-check" className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              Quick Tax Check
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
