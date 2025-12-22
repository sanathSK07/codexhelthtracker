import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen } from '@/components/Screen';
import { SectionHeader } from '@/components/SectionHeader';
import { HistoryItem } from '@/components/HistoryItem';
import { PillButton } from '@/components/PillButton';
import { palette } from '@/theme/colors';
import { spacing } from '@/theme/layout';

const history = [
  { title: 'Glucose', detail: '108 mg/dL (fasted)', time: 'Today · 8:15 AM' },
  { title: 'Blood Pressure', detail: '116/78 (left arm)', time: 'Today · 7:45 AM' },
  { title: 'Cholesterol', detail: 'Triglycerides check-in', time: 'Yesterday · 6:00 PM' }
];

export default function LoggingScreen() {
  return (
    <Screen>
      <SectionHeader title="Quick log" subtitle="Add today’s numbers and keep the streak alive." />
      <View style={styles.inputs}>
        <PillButton label="Add glucose" onPress={() => {}} />
        <PillButton label="Add BP" onPress={() => {}} />
        <PillButton label="Add cholesterol" onPress={() => {}} />
      </View>
      <SectionHeader title="Recent" subtitle="Your freshest entries" />
      {history.map((item) => (
        <HistoryItem key={item.time} {...item} />
      ))}
      <Text style={styles.helper}>Tip: log after meals to spot trends. No shame, only gains.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  inputs: {
    gap: spacing.sm,
    marginBottom: spacing.lg
  },
  helper: {
    color: palette.muted,
    marginTop: spacing.sm
  }
});
