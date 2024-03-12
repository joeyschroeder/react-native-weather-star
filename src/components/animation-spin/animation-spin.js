import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

export class AnimationSpin extends Component {
  static propTypes = {
    children: PropTypes.node,
    delay: PropTypes.number,
    duration: PropTypes.number,
    easing: PropTypes.func,
    isAnimating: PropTypes.bool,
    isLooping: PropTypes.bool,
    isUsingNativeDriver: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    children: null,
    delay: 0,
    duration: 1000,
    easing: Easing.linear,
    isAnimating: true,
    isLooping: false,
    isUsingNativeDriver: true,
    style: undefined,
  };

  constructor(props) {
    super(props);
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  shouldComponentUpdate(nextProps) {
    const { isAnimating } = this.props;
    return isAnimating !== nextProps.isAnimating;
  }

  componentDidUpdate() {
    this.animate();
  }

  animate() {
    const { delay, duration, easing, isAnimating, isLooping, isUsingNativeDriver } = this.props;

    if (isAnimating) {
      this.animation.setValue(0);

      const config = {
        delay,
        duration,
        easing,
        toValue: 1,
        useNativeDriver: isUsingNativeDriver,
      };

      if (isLooping) {
        Animated.loop(Animated.timing(this.animation, config)).start();
      } else {
        Animated.timing(this.animation, config).start();
      }
    } else {
      Animated.timing(this.animation).reset();
      Animated.timing(this.animation).stop();
    }
  }

  render() {
    const { children, style } = this.props;

    if (!children) return null;

    const rotate = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const containerStyle = [style, { transform: [{ rotate }] }];

    return <Animated.View style={containerStyle}>{children}</Animated.View>;
  }
}
