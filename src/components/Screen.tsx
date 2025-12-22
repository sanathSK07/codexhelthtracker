import React from 'react';
import { ScrollView, StyleSheet, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { palette, gradients } from '@/theme/colors';
import { spacing } from '@/theme/layout';
import { LinearGradient } from 'expo-linear-gradient';

export type ScreenProps = ViewProps & {
  children: React.ReactNode;
  padded?: boolean;
};

export const Screen: React.FC<ScreenProps> = ({ children, padded = true, style, ...rest }) => {
  return (
    <LinearGradient colors={gradients.hero} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={[styles.container, padded && styles.padded, style]}
          showsVerticalScrollIndicator={false}
          {...rest}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safeArea: { flex: 1 },
  container: {
    flexGrow: 1,
    backgroundColor: palette.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden'
  },
  padded: {
    padding: spacing.lg
  }
});
