import { cloneElement, isValidElement } from 'react';

const MobileNavGroup = ({ label, items, currentPath, onSelect }) => (
  <div className="py-2">
    <div className="bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">
      <div className="px-4 py-2.5 bg-[#F0F4FF] border-b border-slate-200 flex items-center justify-between">
        <span className="font-['Sora'] text-xs font-bold uppercase tracking-[0.25em] text-[#111455]">
          {label}
        </span>
      </div>
      <div className="divide-y divide-slate-200">
        {items.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <button
              key={item.path}
              type="button"
              onClick={() => onSelect(item.path)}
              className={`w-full text-left flex items-center justify-between px-3.5 py-3 cursor-pointer group transition-colors duration-200 ${isActive ? 'bg-[#F0F4FF]/70' : 'hover:bg-slate-50'}`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-gradient-to-br from-[#E71E28] via-[#E71E28] to-[#B91018] flex items-center justify-center text-white shadow-[0_2px_8px_rgba(231,30,40,0.3)] shrink-0 transition-transform duration-200 group-hover:scale-105">
                  {isValidElement(item.icon)
                    ? cloneElement(item.icon, {
                        className: 'w-5 h-5 text-white',
                      })
                    : item.icon}
                </div>
                <span className="font-['Sora'] font-bold text-sm text-[#111455] truncate">{item.title}</span>
              </div>
              <svg
                className="w-5 h-5 text-[#E71E28] shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          );
        })}
      </div>
    </div>
  </div>
);

export default MobileNavGroup;
