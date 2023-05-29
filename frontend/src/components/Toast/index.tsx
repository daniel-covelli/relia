import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Close } from 'assets/svgs';
import { magicModal } from 'react-native-magic-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import global from 'styles';
import styles from './styles';

interface IAlertToast {
  title?: string;
  description?: string;
  timeout?: number;
}

const defaultMargin = global.margin.margin as number;

export const ALERT_TOAST_DURATION_MS = 5 * 1000; // 2 seconds

const CLOSE_ICON_SIZE = 16;

const Toast: React.FC<IAlertToast> = ({
  title,
  description,
  timeout = ALERT_TOAST_DURATION_MS,
}) => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const hideTimeout = setTimeout(() => {
      magicModal.hide();
    }, timeout);
    return () => clearTimeout(hideTimeout);
  }, [timeout]);

  return (
    <View style={[styles.container, { marginTop: insets.top + defaultMargin }]}>
      <View>
        <Text style={styles.title}>{title ?? 'Something went wrong'}</Text>
        <Text style={styles.description}>
          {description ?? 'Please try again'}
        </Text>
      </View>
      <TouchableOpacity
        accessibilityRole="button"
        activeOpacity={0.8}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        onPress={magicModal.hide}>
        <Close
          width={CLOSE_ICON_SIZE}
          height={CLOSE_ICON_SIZE}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export const show = ({ title, description, timeout }: IAlertToast = {}) => {
  return magicModal.show(
    () => <Toast title={title} description={description} timeout={timeout} />,
    {
      swipeDirection: 'up',
      animationIn: 'slideInDown',
      animationOut: 'slideOutUp',
      style: { justifyContent: 'flex-start' },
      hasBackdrop: false,
      useNativeDriver: true,
      coverScreen: false,
    },
  );
};

export default Toast;
