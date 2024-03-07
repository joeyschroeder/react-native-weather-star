import PropTypes from 'prop-types';
import React from 'react';
import { Section } from '../section/section';
import { DateTime } from '../date-time/date-time';
import { scaledValue } from '../../utils/scaled-value/scaled-value';

export function DateTimeSection(props) {
  const { blink, color, label, style, value } = props;

  return (
    <Section label={label} style={style}>
      <DateTime value={value} color={color} blink={blink} size={scaledValue(122)} />
    </Section>
  );
}

DateTimeSection.propTypes = {
  blink: PropTypes.bool,
  color: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
};

DateTimeSection.defaultProps = {
  blink: undefined,
  color: undefined,
  label: undefined,
  style: undefined,
  value: undefined,
};
