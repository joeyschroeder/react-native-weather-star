import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { DigitalValue } from 'components/digital-value/digital-value';

const getUpdatedValue = (value) => {
  if (!value) return '';

  const firstChar = value.charAt(0);
  const restOfValue = value.slice(1);

  return restOfValue + firstChar;
};

export function DigitalValueMarquee(props) {
  const { value, ...other } = props;

  // eslint-disable-next-line react/jsx-props-no-spreading
  if (!value) return <DigitalValue {...other} />;
  const [marqueeValue, setMarqueeValue] = useState(`${value} || `);

  useEffect(() => {
    const timerInterval = setInterval(() => setMarqueeValue(getUpdatedValue(marqueeValue)), 500);
    return () => clearInterval(timerInterval);
  });

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DigitalValue value={marqueeValue} {...other} />;
}

DigitalValueMarquee.propTypes = {
  value: PropTypes.string,
};

DigitalValueMarquee.defaultProps = {
  value: undefined,
};
