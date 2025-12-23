import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen } from '@/components/Screen';
import { SectionHeader } from '@/components/SectionHeader';
import { PillButton } from '@/components/PillButton';
import { palette } from '@/theme/colors';
import { spacing } from '@/theme/layout';
import { typography } from '@/theme/typography';

const aiPrediction = {
  items: ['Grilled chicken', 'Quinoa', 'Roasted veggies'],
  calories: 540,
  protein_g: 48,
  carbs_g: 52,
  fat_g: 14,
  confidence: 0.83,
  notes: 'Looks like a balanced plate. Add a glass of water and a walk after eating!'
};

export default function FoodSnapScreen() {
  return (
    <Screen>
      <SectionHeader title="Food Snap" subtitle="Shoot it, we’ll estimate it." />
      <View style={styles.preview}>
        <Text style={styles.previewText}>📸 Tap “Capture” or “Upload” to analyze a meal.</Text>
      </View>
      <View style={styles.actions}>
        <PillButton label="Capture" onPress={() => {}} />
        <PillButton label="Upload" onPress={() => {}} ghost />
      </View>
      <SectionHeader title="AI guess" subtitle="Editable before saving" />
      <View style={styles.card}>
        <Text style={styles.title}>Estimated plate</Text>
        {aiPrediction.items.map((item) => (
          <Text key={item} style={styles.item}>• {item}</Text>
        ))}
        <Text style={styles.macros}>
          {aiPrediction.calories} kcal · {aiPrediction.protein_g}g P · {aiPrediction.carbs_g}g C · {aiPrediction.fat_g}g F
        </Text>
        <Text style={styles.confidence}>Confidence: {(aiPrediction.confidence * 100).toFixed(0)}%</Text>
        <Text style={styles.notes}>{aiPrediction.notes}</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  preview: {
    backgroundColor: palette.card,
    padding: spacing.lg,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1F2937',
    marginBottom: spacing.md
  },
  previewText: {
    color: palette.muted,
    textAlign: 'center'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg
  },
  card: {
    backgroundColor: palette.card,
    padding: spacing.md,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#1F2937'
  },
  title: {
    ...typography.subheading,
    color: palette.white,
    marginBottom: spacing.sm
  },
  item: {
    ...typography.body,
    color: palette.white
  },
  macros: {
    ...typography.subheading,
    color: palette.secondary,
    marginTop: spacing.sm
  },
  confidence: {
    ...typography.label,
    color: palette.muted,
    marginTop: spacing.xs
  },
  notes: {
    ...typography.body,
    color: palette.white,
    marginTop: spacing.sm
  }
});
