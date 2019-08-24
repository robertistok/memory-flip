import React from "react";
import styled from "styled-components";

import Card from "./Card";

import useCardsState from "./state/cards";
import useFlipLogic from "./hooks/flipLogic";

const ROWS_COUNT = 3;
const COLUMNS_COUNT = 4;

const CardBoard = () => {
  const [cards, actions] = useCardsState({
    rowsCount: ROWS_COUNT,
    columnsCount: COLUMNS_COUNT
  });
  const [{ blockFlipping }] = useFlipLogic({ cards, actions });

  return (
    <Root rows={ROWS_COUNT} columns={COLUMNS_COUNT}>
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
  margin: auto;
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100%;
  max-height: 400px;
  max-width: 500px;
  grid-template: ${({ columns, rows }) =>
    `repeat(${rows}, ${100 / rows}%) / repeat(${columns}, ${100 / columns}%)`};
`;

export default CardBoard;
