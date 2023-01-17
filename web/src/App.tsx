import './styles/global.css';

import { Habit } from "./components/Habit";

function App() {
  return (
      <div> 
<Habit completed={31} />
<Habit completed={18} />
<Habit completed={10} />
<Habit completed={22}/>
</div>
    
  )
}

export default App
