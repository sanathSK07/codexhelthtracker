import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen } from '@/components/Screen';
import { SectionHeader } from '@/components/SectionHeader';
import { PillButton } from '@/components/PillButton';
import { palette } from '@/theme/colors';
import { spacing } from '@/theme/layout';
import { typography } from '@/theme/typography';

const messages = [
  {
    role: 'coach',
    text: 'Hey legend! Your glucose is steady. Celebrate with a 5-minute stretch?'
  },
  {
    role: 'user',
    text: 'Can do. Any snack ideas later?'
  },
  {
    role: 'coach',
    text: 'Greek yogurt + berries = protein + fiber. Hydrate and you’re golden. No shame, only gains.'
  }
];

export default function CoachScreen() {
  return (
    <Screen>
      <SectionHeader title="AI Coach" subtitle="Warm, witty, and never judgy." />
      <View style={styles.chat}>
        {messages.map((message, index) => (
          <View key={index} style={[styles.bubble, message.role === 'user' ? styles.user : styles.coach]}>
            <Text style={styles.text}>{message.text}</Text>
          </View>
        ))}
      </View>
      <PillButton label="Send high-five" onPress={() => {}} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  chat: {
    gap: spacing.sm,
    marginBottom: spacing.lg
  },
  bubble: {
    padding: spacing.md,
    borderRadius: 16,
    maxWidth: '88%',
    borderWidth: 1
  },
  coach: {
    backgroundColor: palette.card,
    borderColor: '#1F2937'
  },
  user: {
    backgroundColor: '#1D3A5F',
    borderColor: '#1A2E4A',
    alignSelf: 'flex-end'
  },
  text: {
    ...typography.body,
    color: palette.white
  }
});
