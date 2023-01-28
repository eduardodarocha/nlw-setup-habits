import './src/lib/dayjs';
// import { StatusBar } from 'react-native';
import { StatusBar, Button } from 'react-native'; //Button para testar as notificações
import { useEffect } from 'react';
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

import * as Notifications from 'expo-notifications';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [ fontsLoaded ] = useFonts({ 
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_800ExtraBold 
  });

  // async function scheduleNotification() {
  //   const trigger = new Date(Date.now());
  //   trigger.setMinutes(trigger.getMinutes() + 1);
  //   await Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: 'Olá Usuário 🤩',
  //       body: 'Você praticou seus hábitos hoje? 🤔',
  //     },
  //     trigger
  //   });
  // }

  async function schedulePushNotification() {
    const schedule = await Notifications.getAllScheduledNotificationsAsync();
    console.log("Agendadas: ", schedule);

    if (schedule.length > 0) {
      await Notifications.cancelAllScheduledNotificationsAsync();
    }

    const trigger = new Date(Date.now());
    trigger.setHours(trigger.getHours() + 5);
    trigger.setSeconds(0);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Olá, Usuário! 😀",
        body: "Você praticou seus hábitos hoje?🤔"
      },
      trigger
    });
  }

  useEffect(() => {
    schedulePushNotification();
  }, []);

  // Mostrar todas as notificações agendadas
  async function getScheduleNotification() {
    const schedules = await Notifications.getAllScheduledNotificationsAsync();
    console.log(schedules);
  }

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <>
    {/* // <Button title="Notificar" onPress={scheduleNotification} />
    // //Botão para mostrar todas as notificações agendadas
    // <Button title="Agendadas" onPress={getScheduleNotification} /> */}
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {/* //Retirar o translucent para testar as notificações */}
      {/* <StatusBar barStyle="light-content" backgroundColor="transparent" />  */}
    </>
  );
}