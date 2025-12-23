import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Screen } from '@/components/Screen';
import { SectionHeader } from '@/components/SectionHeader';
import { palette } from '@/theme/colors';
import { spacing, radius } from '@/theme/layout';
import { typography } from '@/theme/typography';
import { useAppStore, Goal } from '@/store/useAppStore';

const goals: Goal[] = ['stable glucose', 'more energy', 'better sleep'];

export default function OnboardingScreen() {
  const onboarding = useAppStore((state) => state.onboarding);
  const setGoal = useAppStore((state) => state.setGoal);
  const toggleFlag = useAppStore((state) => state.toggleFlag);
  const setUnits = useAppStore((state) => state.setUnits);

  return (
    <Screen>
      <SectionHeader title="Onboarding" subtitle="Set your vibes so the AI coach knows how to hype you." />
      <Text style={styles.label}>Goal</Text>
      <View style={styles.chips}>
        {goals.map((goal) => {
          const active = onboarding.goal === goal;
          return (
            <Pressable key={goal} style={[styles.chip, active && styles.chipActive]} onPress={() => setGoal(goal)}>
              <Text style={[styles.chipText, active && styles.chipTextActive]}>{goal}</Text>
            </Pressable>
          );
        })}
      </View>

      <Text style={[styles.label, styles.topSpacing]}>Flags</Text>
      {Object.entries(onboarding.flags).map(([key, value]) => (
        <Pressable key={key} style={[styles.row, value && styles.rowActive]} onPress={() => toggleFlag(key as any)}>
          <Text style={styles.rowLabel}>{key}</Text>
          <Text style={styles.rowValue}>{value ? 'Yes' : 'No'}</Text>
        </Pressable>
      ))}

      <Text style={[styles.label, styles.topSpacing]}>Preferred units</Text>
      <View style={styles.row}>
        {(['mg/dL', 'mmol/L'] as const).map((unit) => (
          <Pressable
            key={unit}
            onPress={() => setUnits(unit)}
            style={[styles.unitChip, onboarding.units === unit && styles.chipActive]}
          >
            <Text style={[styles.chipText, onboarding.units === unit && styles.chipTextActive]}>{unit}</Text>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  label: {
    ...typography.label,
    color: palette.muted,
    textTransform: 'uppercase',
    marginBottom: spacing.xs
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm
  },
  chip: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: '#1F2937',
    backgroundColor: palette.card
  },
  chipActive: {
    borderColor: palette.secondary,
    backgroundColor: '#0E1B2F'
  },
  chipText: {
    ...typography.body,
    color: palette.white
  },
  chipTextActive: {
    color: palette.secondary,
    fontWeight: '700'
  },
  topSpacing: {
    marginTop: spacing.lg
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    backgroundColor: palette.card,
    borderWidth: 1,
    borderColor: '#1F2937',
    marginBottom: spacing.sm
  },
  rowActive: {
    borderColor: palette.secondary
  },
  rowLabel: {
    ...typography.body,
    color: palette.white
  },
  rowValue: {
    ...typography.body,
    color: palette.secondary
  },
  unitChip: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: '#1F2937',
    backgroundColor: palette.card,
    marginRight: spacing.sm
  }
});
