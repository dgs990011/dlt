import { apps } from './data/apps';
import { banners } from './data/config';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import AppGrid from './components/AppGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans" style={{ background: '#fff9f0' }}>
      <Header />
      <HeroBanner banners={banners} />
      <main className="max-w-5xl mx-auto px-4 py-8" style={{ background: 'linear-gradient(180deg, #fff9f0 0%, #fff3e0 100%)' }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold text-gray-800">全部应用</h2>
          <span className="text-xs text-gray-400">{apps.length} 款</span>
        </div>
        <AppGrid apps={apps} />
      </main>
      <Footer />
    </div>
  );
}
