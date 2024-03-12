import { Animated, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { BORDER_RADIUS } from '../../constants/border-radius';
import { RadioSelectorOption } from '../radio-selector-option/radio-selector-option';
import { ANIMATION_EASING } from '../../constants/animation-easing';
import { ANIMATION_DURATION } from '../../constants/animation-duration';
import { COLORS } from '../../constants/colors';
import { BORDER_WIDTH } from '../../constants/border-width';

const styles = StyleSheet.create({
  activeIndicatorContainer: {
    alignSelf: 'stretch',
    bottom: 0,
    flexDirection: 'row',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 0,
  },
  container: {
    alignSelf: 'stretch',
    borderRadius: BORDER_RADIUS,
    borderWidth: BORDER_WIDTH,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
  },
});

export class RadioSelector extends Component {
  static propTypes = {
    activeColor: PropTypes.string,
    onToggle: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),
    style: PropTypes.object,
    textColor: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    activeColor: COLORS.DANGER,
    onToggle: () => {},
    options: [],
    style: undefined,
    textColor: undefined,
    value: '',
  };

  constructor(props) {
    super(props);
    const { options, value } = props;

    const initialAnimationValue = options.indexOf(value) || 0;
    this.animation = new Animated.Value(initialAnimationValue);
  }

  shouldComponentUpdate(nextProps) {
    const { activeColor, options, textColor, value } = this.props;

    return (
      activeColor !== nextProps.activeColor ||
      options !== nextProps.options ||
      textColor !== nextProps.textColor ||
      value !== nextProps.value
    );
  }

  componentDidUpdate() {
    this.animate();
  }

  getOptions() {
    const { activeColor, onToggle, options, textColor, value } = this.props;

    return options.map((option) => {
      const isActive = value === option;
      const onPress = () => onToggle(option);

      return (
        <RadioSelectorOption
          key={option}
          activeColor={activeColor}
          isActive={isActive}
          onPress={onPress}
          textColor={textColor}
          value={option}
        />
      );
    });
  }

  animate() {
    const { options, value } = this.props;

    Animated.timing(this.animation, {
      duration: ANIMATION_DURATION / 2,
      easing: ANIMATION_EASING,
      toValue: options.indexOf(value),
      useNativeDriver: false,
    }).start();
  }

  render() {
    const { activeColor, options, style } = this.props;

    const optionsLength = options.length;
    const optionsExist = Boolean(optionsLength);

    if (!optionsExist) return null;

    const flex = optionsExist ? 1 / optionsLength : 0;
    const interpolatedRange = flex * (optionsLength - 1);

    const beginSpacerFlex = this.animation.interpolate({
      inputRange: [0, optionsLength - 1],
      outputRange: [0, interpolatedRange],
    });

    const endSpacerFlex = this.animation.interpolate({
      inputRange: [0, optionsLength - 1],
      outputRange: [interpolatedRange, 0],
    });

    const containerStyle = [styles.container, style, { borderColor: activeColor }];
    const optionItems = this.getOptions();

    const activeIndicatorStyles = { backgroundColor: activeColor, flex };
    const beginSpacerStyles = { flex: beginSpacerFlex };
    const endSpacerStyles = { flex: endSpacerFlex };

    return (
      <View style={containerStyle}>
        {optionItems}
        <View style={styles.activeIndicatorContainer}>
          <Animated.View style={beginSpacerStyles} />
          <Animated.View pointerEvents="none" style={activeIndicatorStyles} />
          <Animated.View style={endSpacerStyles} />
        </View>
      </View>
    );
  }
}
