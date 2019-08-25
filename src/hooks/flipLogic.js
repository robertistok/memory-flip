import { useState, useEffect } from "react";

const useFlipLogic = ({
  cards,
  actions: { flipCard, matchCards, resetState }
}) => {
  const [blockFlipping, setBlockFlipping] = useState(false);

  useEffect(() => {
    let timer;

    const unMatchedCards = cards.filter(c => !c.matched);
    const flippedUnMatchedCards = unMatchedCards.filter(
      c => c.flipped && !c.matched
    );
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

    if (unMatchedCards.length === 0) {
      alert("You won!");
      resetState();
    }

    return () => clearTimeout(timer);
  }, [cards, flipCard, matchCards, resetState]);

  return [{ blockFlipping }];
};

export default useFlipLogic;
