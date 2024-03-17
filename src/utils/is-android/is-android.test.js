import { Platform } from 'react-native';
import { isAndroid } from './is-android';

describe('isAndroid', () => {
  it('should return true if Platform.OS is "android"', () => {
    Platform.OS = 'android';
    expect(isAndroid()).toBe(true);
  });

  it('should return false if Platform.OS is not "android"', () => {
    Platform.OS = 'ios';
    expect(isAndroid()).toBe(false);
  });
});
