import './styles/global.css';
import './lib/dayjs';

import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';

navigator.serviceWorker.register('service-worker.js');

// import { Habit } from "./components/Habit";


// Local notifications
// window.Notification.requestPermission(permission => {
//   if (permission === 'granted') {
//     console.log('Permission granted for notifications');
//     new window.Notification("Habits", {
//       body: "You have a new notification",
//       icon: "https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg"
//     })
//   }
  
// })


export function App() {

  // function sendNotification() {
  //   window.Notification.requestPermission(permission => {
  //       if (permission === 'granted') {
  //         console.log('Permission granted for notifications');
  //         new window.Notification("Habits", {
  //           body: "You have a new notification",
  //           icon: "https://cdn-icons-png.flaticon.com/512/6700/6700461.png"
  //         })
  //       }
        
  //     })
  // }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
        {/* <button onClick={sendNotification}>Send Notification</button> */}
        <Header />
        <SummaryTable />
        
      </div>
    </div>

  )
}

