import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { palette } from '@/theme/colors';
import { spacing, radius } from '@/theme/layout';
import { typography } from '@/theme/typography';

export type HistoryItemProps = {
  title: string;
  detail: string;
  time: string;
};

export const HistoryItem: React.FC<HistoryItemProps> = ({ title, detail, time }) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </View>
    <Text style={styles.time}>{time}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: palette.card,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: '#1F2937',
    marginBottom: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    ...typography.subheading,
    color: palette.white
  },
  detail: {
    ...typography.body,
    color: palette.muted,
    marginTop: 2
  },
  time: {
    ...typography.label,
    color: palette.muted
  }
});
