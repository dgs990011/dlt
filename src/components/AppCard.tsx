import type { AppItem } from '../types';
import { badgeColors } from '../data/config';

export default function AppCard({ app }: { app: AppItem }) {
  return (
    <a
      href={app.linkUrl}
      className="group flex flex-col items-center text-center"
    >
      <div className="w-full rounded-xl border border-gray-200/80 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)] group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] group-hover:border-gray-300 transition-all duration-300 overflow-hidden">
        <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
          <img
            src={app.imageUrl}
            alt={app.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {app.badge && (
            <span
              className={`absolute top-1 left-1 ${badgeColors[app.badge] ?? 'bg-gray-700'} text-white text-[7px] font-bold px-1.5 py-0.5 rounded-md shadow-sm`}
            >
              {app.badge}
            </span>
          )}
        </div>
        <div className="px-1.5 py-1.5 border-t border-gray-100">
          <p className="text-[10px] font-semibold text-gray-800 leading-tight break-words">
            {app.name}
          </p>
          {app.tagline && (
            <p className="text-[8px] text-gray-400 leading-tight mt-0.5">
              {app.tagline}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}
