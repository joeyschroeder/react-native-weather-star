import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

export class AnimationSpin extends Component {
  static propTypes = {
    animate: PropTypes.bool,
    children: PropTypes.node,
    delay: PropTypes.number,
    duration: PropTypes.number,
    easing: PropTypes.func,
    loop: PropTypes.bool,
    style: PropTypes.object,
    useNativeDriver: PropTypes.bool,
  };

  static defaultProps = {
    animate: true,
    children: null,
    delay: 0,
    duration: 1000,
    easing: Easing.linear,
    loop: false,
    style: undefined,
    useNativeDriver: true,
  };

  constructor(props) {
    super(props);
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  componentDidUpdate() {
    this.animate();
  }

  animate() {
    const { animate, delay, duration, easing, loop, useNativeDriver } = this.props;

    if (animate) {
      this.animation.setValue(0);

      const config = {
        delay,
        duration,
        easing,
        toValue: 1,
        useNativeDriver,
      };

      if (loop) {
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
