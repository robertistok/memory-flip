import React from "react";
import styled from "styled-components";

import Card from "./Card";

import useFlipLogic from "./hooks/flipLogic";
import { useCardBoardStateValue } from "./CardBoardState";

const CardBoard = () => {
  const [cards, actions] = useCardBoardStateValue();
  const [{ blockFlipping }] = useFlipLogic();

  return (
    <Root>
      {cards.map(c => (
        <Card
          disabled={blockFlipping}
          key={c.id}
          flipCard={actions.flipCard}
          {...c}
        />
      ))}
    </Root>
  );
};

const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-directon: row;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
  justify-content: center;
  max-width: 600px;
`;

export default CardBoard;
