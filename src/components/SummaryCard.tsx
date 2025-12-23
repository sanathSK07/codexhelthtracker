import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { palette } from '@/theme/colors';
import { spacing, radius } from '@/theme/layout';
import { typography } from '@/theme/typography';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type SummaryCardProps = {
  label: string;
  value: string;
  helper?: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  tone?: 'default' | 'success' | 'warning' | 'danger';
};

const toneMap = {
  default: palette.card,
  success: '#0A3B2D',
  warning: '#3A2E0A',
  danger: '#3B0F0F'
};

export const SummaryCard: React.FC<SummaryCardProps> = ({ label, value, helper, icon, tone = 'default' }) => {
  return (
    <LinearGradient
      colors={[palette.surface, toneMap[tone]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.row}>
        <View style={styles.iconWrap}>
          <MaterialCommunityIcons name={icon} size={22} color={palette.white} />
        </View>
        <View style={styles.meta}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{value}</Text>
          {helper ? <Text style={styles.helper}>{helper}</Text> : null}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: spacing.md,
    borderRadius: radius.lg,
    backgroundColor: palette.card,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#1F2937'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  meta: {
    marginLeft: spacing.md
  },
  label: {
    ...typography.label,
    color: palette.muted,
    textTransform: 'uppercase'
  },
  value: {
    ...typography.subheading,
    color: palette.white,
    marginTop: 2
  },
  helper: {
    ...typography.body,
    color: palette.muted,
    marginTop: 2
  }
});
