import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const AnimatedDiv = animated.div;

const Card = ({ disabled, id, number, flipped, flipCard, matched }) => {
  const { transform, opacity } = useSpring({
    opacity: matched || flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const handleClick = () => (!matched && !disabled ? flipCard({ id }) : null);

  return (
    <Root disabled={disabled} matched={matched} onClick={handleClick}>
      <BackCard
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      />
      <FrontCard
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      >
        {number}
      </FrontCard>
    </Root>
  );
};

Card.propTypes = {
  disabled: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.number,
  flipped: PropTypes.bool.isRequired,
  flipCard: PropTypes.func.isRequired,
  matched: PropTypes.bool.isRequired
};

const Root = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ matched }) => (matched ? 0.3 : "initial")};
  margin: 10px;

  @media screen and (max-width: 672px) {
    width: 75px;
    height: 75px;
  }

  @media screen and (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`;

const BaseCard = styled(AnimatedDiv)`
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
  color: #ffffff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FrontCard = styled(BaseCard)`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const BackCard = styled(BaseCard)`
  background-color: ${({ theme }) => theme.colors.brand};
`;

export default Card;
