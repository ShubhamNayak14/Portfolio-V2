
'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ClickSound() {
  const [isMuted, setIsMuted] = useState(false);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof Audio !== 'undefined') {
      clickAudioRef.current = new Audio('/sounds/tick.mp3');
      clickAudioRef.current.volume = 0.4; // Adjust volume
    }

    const handleClick = () => {
      const clickAudio = clickAudioRef.current;
      if (clickAudio && !isMuted) {
        clickAudio.currentTime = 0;
        clickAudio.play().catch(() => {});
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [isMuted]); // rebinds when muted/unmuted

  return (
    <motion.button
      onClick={() => setIsMuted(prev => !prev)}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-md
                 hover:scale-105 transition-transform duration-300 bg-white/10
                 backdrop-blur-md dark:bg-black/20"
      whileTap={{ scale: 0.9 }}
      title={isMuted ? 'Unmute Click Sound' : 'Mute Click Sound'}
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6 text-gray-900 dark:text-white" />
      ) : (
        <Volume2 className="w-6 h-6 text-gray-900 dark:text-white" />
      )}
    </motion.button>
  );
}
