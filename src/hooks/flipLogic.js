import { useState, useEffect } from "react";

const useFlipLogic = ({ cards, actions: { flipCard, matchCards } }) => {
  const [blockFlipping, setBlockFlipping] = useState(false);

  useEffect(() => {
    let timer;

    const flippedUnMatchedCards = cards.filter(c => c.flipped && !c.matched);
    if (flippedUnMatchedCards.length === 2) {
      setBlockFlipping(true);

      if (flippedUnMatchedCards[0].number === flippedUnMatchedCards[1].number) {
        timer = setTimeout(
          () => matchCards({ ids: flippedUnMatchedCards.map(c => c.id) }),
          400
        );
      } else {
        timer = setTimeout(
          () => flippedUnMatchedCards.forEach(c => flipCard({ id: c.id })),
          800
        );
      }
    } else if (flippedUnMatchedCards.length === 0) {
      setBlockFlipping(false);
    }

    return () => clearTimeout(timer);
  }, [cards, flipCard, matchCards]);

  return [{ blockFlipping }];
};

export default useFlipLogic;
