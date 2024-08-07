import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import { useState } from 'react';
function App() {
  const [isVisible, setIsVisible] = useState(false);
  function handleClick(){
    setIsVisible((prevState) => !prevState);
  };
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onClick={handleClick} />
      {isVisible ? <NewProject /> : <NoProjectSelected onClick={handleClick} />}
    </main>
  );
}

export default App;
