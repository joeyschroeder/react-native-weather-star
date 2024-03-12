import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';

export const getLocationForegroundPermissions = async () => {
  const response = await requestForegroundPermissionsAsync();
  const { granted } = response;

  if (!granted) throw new Error('Permission to access location was denied');

  return granted;
};

export const getLocation = async () => {
  const response = await getCurrentPositionAsync();
  const { coords } = response;

  return coords;
};
