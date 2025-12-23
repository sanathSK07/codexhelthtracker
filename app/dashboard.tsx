import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen } from '@/components/Screen';
import { SummaryCard } from '@/components/SummaryCard';
import { SectionHeader } from '@/components/SectionHeader';
import { palette } from '@/theme/colors';
import { spacing } from '@/theme/layout';
import { useAppStore } from '@/store/useAppStore';
import { PillButton } from '@/components/PillButton';

const metricData = [
  { label: 'Glucose', value: '104 mg/dL', helper: '👏 Sweet spot!', icon: 'water' as const },
  { label: 'Blood Pressure', value: '118/76', helper: 'Cruising steady', icon: 'heart-pulse' as const },
  { label: 'Cholesterol', value: '165 mg/dL', helper: 'Stay on course', icon: 'shield-heart' as const },
  { label: 'Steps', value: '6,420', helper: 'Add a quick walk', icon: 'walk' as const },
  { label: 'Sleep', value: '7h 10m', helper: 'Power nap champ', icon: 'weather-night' as const },
  { label: 'Hydration', value: '68 oz', helper: 'Sip squad strong', icon: 'cup-water' as const }
];

export default function DashboardScreen() {
  const streak = useAppStore((state) => state.streak);
  const badges = useAppStore((state) => state.badges);

  return (
    <Screen>
      <SectionHeader title="Today" subtitle="No shame, only gains." />
      {metricData.map((metric) => (
        <SummaryCard key={metric.label} {...metric} />
      ))}

      <View style={styles.section}>
        <SectionHeader title="Streaks & badges" subtitle="Consistency gets the confetti." />
        <View style={styles.streakRow}>
          <Text style={styles.streakNumber}>{streak}</Text>
          <Text style={styles.streakLabel}>day streak</Text>
        </View>
        <View style={styles.badges}>
          {badges.map((badge) => (
            <View key={badge} style={styles.badgeChip}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          ))}
        </View>
        <PillButton label="Celebrate wins" onPress={() => {}} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: spacing.lg },
  streakRow: { flexDirection: 'row', alignItems: 'flex-end' },
  streakNumber: { color: palette.white, fontSize: 48, fontWeight: '800' },
  streakLabel: { color: palette.muted, marginLeft: spacing.sm, marginBottom: spacing.xs },
  badges: { flexDirection: 'row', flexWrap: 'wrap', marginTop: spacing.md, marginBottom: spacing.sm },
  badgeChip: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    backgroundColor: palette.card,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#1F2937',
    marginRight: spacing.sm,
    marginBottom: spacing.sm
  },
  badgeText: { color: palette.white, fontWeight: '600' }
});
