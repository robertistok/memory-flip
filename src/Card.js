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
  max-width: 100px;
  max-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ matched }) => (matched ? 0.5 : "initial")};
`;

const BaseCard = styled(AnimatedDiv)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  will-change: transform, opacity;
  color: #ffffff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FrontCard = styled(BaseCard)`
  background-color: orange;
`;

const BackCard = styled(BaseCard)`
  background-color: ${({ theme }) => theme.colors.brand};
`;

export default Card;
