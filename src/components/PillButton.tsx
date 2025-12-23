import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { palette, gradients } from '@/theme/colors';
import { spacing, radius } from '@/theme/layout';
import { typography } from '@/theme/typography';

export type PillButtonProps = {
  label: string;
  onPress: () => void;
  ghost?: boolean;
};

export const PillButton: React.FC<PillButtonProps> = ({ label, onPress, ghost = false }) => {
  if (ghost) {
    return (
      <Pressable onPress={onPress} style={[styles.button, styles.ghost]}>
        <Text style={styles.ghostLabel}>{label}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} style={styles.shadow}>
      <LinearGradient colors={gradients.hero} style={styles.button}>
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.xl,
    alignItems: 'center'
  },
  shadow: {
    shadowColor: palette.primary,
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 }
  },
  label: {
    ...typography.subheading,
    color: palette.white
  },
  ghost: {
    borderWidth: 1,
    borderColor: '#1F2937',
    backgroundColor: palette.card
  },
  ghostLabel: {
    ...typography.body,
    color: palette.white
  }
});
