import React from 'react';
import { Profile } from '../types';
import { ACTIVITIES } from '../constants';
import { MessageSquare, Clock, MapPin } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="space-y-8">
      <div className="bg-[#1a1a1a] rounded-sm border border-gray-800 overflow-hidden">
        <div className="bg-[#222] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider">Ultima Actividad</h3>
        </div>
        <div className="divide-y divide-gray-800">
          {ACTIVITIES.map((activity) => (
            <div key={activity.id} className="p-4 hover:bg-[#222] transition-colors cursor-pointer group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-red-500 font-bold text-xs uppercase">{activity.profileName}</span>
                <span className="text-[10px] text-gray-500">{activity.time}</span>
              </div>
              <p className="text-gray-300 text-xs italic leading-relaxed mb-2 group-hover:text-white transition-colors">
                "{activity.comment}"
              </p>
              <div className="flex items-center gap-1 text-[10px] text-gray-500">
                <MapPin size={10} />
                <span>{activity.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-600 hover:bg-red-700 transition-colors rounded-sm p-4 text-center cursor-pointer">
        <h4 className="text-white font-bold uppercase text-sm">Ir a Videos de Pago</h4>
      </div>
    </aside>
  );
};
