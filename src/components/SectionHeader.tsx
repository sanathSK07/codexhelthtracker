import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { typography } from '@/theme/typography';
import { palette } from '@/theme/colors';
import { spacing } from '@/theme/layout';

export const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <View style={styles.wrap}>
    <Text style={styles.title}>{title}</Text>
    {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  wrap: {
    marginBottom: spacing.sm
  },
  title: {
    ...typography.subheading,
    color: palette.white
  },
  subtitle: {
    ...typography.body,
    color: palette.muted,
    marginTop: 2
  }
});
