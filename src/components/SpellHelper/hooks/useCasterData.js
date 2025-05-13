import { useState, useEffect } from 'react';

export const useCasterData = (casterData) => {
  const [arcana, setArcana] = useState({});
  const [path, setPath] = useState('');
  const [gnosis, setGnosis] = useState(1);
  const [mana, setMana] = useState(0);
  const [willpower, setWillpower] = useState(1);
  const [primaryArcanum, setPrimaryArcanum] = useState('');
  const [primaryArcanumDots, setPrimaryArcanumDots] = useState(1);

  useEffect(() => {
    if (casterData) {
      // Extract basic information using the top-level properties
      setPath(casterData.info?.Path || '');
      setGnosis(casterData.gnosis || 1); // Changed from attributes?.gnosis
      setMana(casterData.mana || 0);     // Changed from attributes?.mana
      // Assuming willpower is stored as an array in `willpowerBoxes`
      setWillpower(
        casterData.willpowerBoxes ? casterData.willpowerBoxes.length : 1
      );

      // Process Arcana data remains unchanged
      const extractedArcana = casterData.arcana || {};
      setArcana(extractedArcana);

      // Determine primary arcanum by sorting arcana dots
      const sortedArcana = Object.entries(extractedArcana).sort(
        ([, aDots], [, bDots]) => bDots - aDots
      );

      const primary = sortedArcana.length > 0 ? sortedArcana[0] : null;
      if (primary) {
        setPrimaryArcanum(primary[0]);
        setPrimaryArcanumDots(primary[1]);
      }
    }
  }, [casterData]);

  return {
    arcana,
    path,
    gnosis,
    mana,
    willpower,
    primaryArcanum,
    primaryArcanumDots,
    isRulingArcana: (rulingArcanum) => {
      const pathRulingArcana = {
        Acanthus: ['Time', 'Fate'],
        Mastigos: ['Mind', 'Space'],
        Moros: ['Death', 'Matter'],
        Obrimos: ['Forces', 'Prime'],
        Thyrsus: ['Life', 'Spirit']
      }[path] || [];
      return pathRulingArcana.includes(rulingArcanum);
    },
    hasArcana: (arcanum, dots = 1) => {
      return (arcana[arcanum] || 0) >= dots;
    }
  };
};