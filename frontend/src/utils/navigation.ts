import { createNavigationContainerRef } from '@react-navigation/native';

import { RootStackParamList } from '../../Navigation';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const reset = <T extends keyof RootStackParamList>(route: T) => {
  navigationRef.reset({ index: 0, routes: [{ name: route }] });
};
