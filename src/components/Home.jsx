import Hero from "../components/Hero";
import SecretMessage from "../components/SecretMessage";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-fuchsia-600 via-purple-700 to-indigo-900 animate-gradient"></div>

      <Hero />
      <SecretMessage />
    </main>
  );
}
