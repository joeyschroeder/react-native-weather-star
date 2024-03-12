import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAsyncStorageItem = async (key) => {
  if (!key) throw new Error('Key is undefined.');

  const response = await AsyncStorage.getItem(key);
  if (!response) return undefined;
  return JSON.parse(response);
};

export const setAsyncStorageItem = (key = '', value = '') => {
  if (!key) throw new Error('Key is undefined.');
  if (!value) throw new Error('Value is undefined.');

  return AsyncStorage.setItem(key, JSON.stringify(value));
};
