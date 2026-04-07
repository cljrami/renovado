import React from 'react';
import { Profile } from '../types';
import { Video, CheckCircle2, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface ProfileCardProps {
  profile: Profile;
  onClick: (profile: Profile) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onClick }) => {
  const isPlatino = profile.type === 'PLATINO';
  const isOro = profile.type === 'ORO';

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative group cursor-pointer"
      onClick={() => onClick(profile)}
    >
      <div className={`relative aspect-[2/3] overflow-hidden rounded-sm border ${
        isPlatino ? 'border-blue-500/50' : isOro ? 'border-yellow-500/50' : 'border-gray-700'
      }`}>
        <img 
          src={profile.imageUrl} 
          alt={profile.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {profile.hasVideo && (
            <div className="bg-black/60 p-1 rounded">
              <Video size={14} className="text-white" />
            </div>
          )}
        </div>

        <div className="absolute top-2 right-2">
          {isOro && (
            <div className="bg-yellow-500 p-1 rounded">
              <CheckCircle2 size={14} className="text-black" />
            </div>
          )}
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-white font-bold text-sm uppercase">{profile.name}</span>
            {profile.isVerified && <CheckCircle2 size={12} className="text-blue-400" />}
          </div>
          <div className="text-[10px] text-gray-300 uppercase font-medium">
            {profile.location}, {profile.age} AÑOS
          </div>
        </div>
        
        {/* Hover Heart Icon (like in the image) */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
           <Heart size={18} className="text-white fill-white/20" />
        </div>
      </div>
      
      {/* Type Label */}
      {isPlatino && (
        <div className="absolute -top-2 -left-2 bg-blue-600 text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-lg">
          Platino
        </div>
      )}
    </motion.div>
  );
};
