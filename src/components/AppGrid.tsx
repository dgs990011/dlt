import type { AppItem } from '../types';
import AppCard from './AppCard';

export default function AppGrid({ apps }: { apps: AppItem[] }) {
  if (apps.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-gray-400">
        <p className="text-lg font-medium">没有找到匹配的应用</p>
        <p className="text-sm mt-1">试试其他关键词或分类</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-3">
      {apps.map((app, i) => (
        <div
          key={app.id}
          style={{ animationDelay: `${i * 40}ms`, animation: 'fadeIn 0.4s ease forwards', opacity: 0 }}
        >
          <AppCard app={app} />
        </div>
      ))}
    </div>
  );
}
