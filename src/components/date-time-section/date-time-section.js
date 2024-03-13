import PropTypes from 'prop-types';
import React from 'react';
import { Section } from 'components/section/section';
import { DateTime } from 'components/date-time/date-time';
import { scaledValue } from 'utils/scaled-value/scaled-value';

export function DateTimeSection(props) {
  const { color, isBlinking, label, style, value } = props;

  return (
    <Section label={label} style={style}>
      <DateTime color={color} isBlinking={isBlinking} size={scaledValue(122)} value={value} />
    </Section>
  );
}

DateTimeSection.propTypes = {
  color: PropTypes.string,
  isBlinking: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
};

DateTimeSection.defaultProps = {
  color: undefined,
  isBlinking: undefined,
  label: undefined,
  style: undefined,
  value: undefined,
};
