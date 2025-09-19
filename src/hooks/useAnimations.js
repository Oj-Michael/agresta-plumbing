import { useEffect } from 'react';

export const useAnimations = () => {
  useEffect(() => {
    console.log('Modern Framer Motion animations initialized');
  }, []);
};