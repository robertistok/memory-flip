import React from "react";
import styled from "styled-components";

import Card from "./Card";

import useCardsState from "./state/cards";
import useFlipLogic from "./hooks/flipLogic";

const ROWS_COUNT = 4;
const COLUMNS_COUNT = 5;

const CardBoard = () => {
  const [cards, actions] = useCardsState({
    rowsCount: ROWS_COUNT,
    columnsCount: COLUMNS_COUNT
  });
  const [{ blockFlipping }] = useFlipLogic({ cards, actions });

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
