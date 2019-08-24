import { useReducer } from "react";
import nanoid from "nanoid";

import { generateUniqueNumbersArray } from "../utils/generate";

const getInitialState = ({ rowsCount, columnsCount }) => {
  const randomNumbers = generateUniqueNumbersArray();

  return [...Array(rowsCount * columnsCount)]
    .map((c, index) => ({
      id: nanoid(),
      flipped: false,
      matched: false,
      number: randomNumbers[Math.floor(index / 2)]
    }))
    .sort(() => Math.random() - 0.5);
};

const useCardsState = ({ rowsCount, columnsCount }) => {
  const initialState = getInitialState({ rowsCount, columnsCount });

  const reducer = (state, action) => {
    switch (action.type) {
      case "FLIP_CARD":
        return state.map(c =>
          c.id === action.payload.id ? { ...c, flipped: !c.flipped } : c
        );
      case "MATCH_CARDS":
        return state.map(c =>
          action.payload.ids.includes(c.id) ? { ...c, matched: true } : c
        );
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const flipCard = payload => {
    dispatch({ type: "FLIP_CARD", payload });
  };

  const matchCards = payload => {
    dispatch({ type: "MATCH_CARDS", payload });
  };

  return [state, { flipCard, matchCards }];
};

export default useCardsState;
