import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppIcon } from '@/components/ui/app-icon';

export default function IndexScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 justify-center px-6 py-10">
        <View className="gap-6 rounded-3xl border border-slate-200 bg-white p-6">
          <View className="gap-2">
            <Text className="text-3xl font-semibold text-slate-900">Entrar</Text>
            <Text className="text-sm leading-6 text-slate-500">
              Base limpa do app com NativeWind configurado.
            </Text>
          </View>

          <View className="gap-4">
            <View className="gap-2">
              <Text className="text-sm font-medium text-slate-700">E-mail</Text>
              <TextInput
                autoCapitalize="none"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-base text-slate-900"
                keyboardType="email-address"
                onChangeText={setEmail}
                placeholder="voce@exemplo.com"
                placeholderTextColor="#94a3b8"
                value={email}
              />
            </View>

            <View className="gap-2">
              <Text className="text-sm font-medium text-slate-700">Senha</Text>
              <View className="flex-row items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4">
                <AppIcon color="#64748b" name="security" size={18} />
                <TextInput
                  className="flex-1 py-4 text-base text-slate-900"
                  onChangeText={setPassword}
                  placeholder="Digite sua senha"
                  placeholderTextColor="#94a3b8"
                  secureTextEntry
                  value={password}
                />
              </View>
            </View>

            <Pressable className="items-center rounded-2xl bg-brand-500 px-5 py-4">
              <Text className="text-base font-semibold text-white">Continuar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}