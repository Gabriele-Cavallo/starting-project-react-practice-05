import { useState } from 'react';
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected.jsx';
function App() {
  const [projectState, setprojectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  function handleCreateProject(){
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };
  let content;
  if(projectState.selectedProjectId === null){
    content = <NewProject />;
  }else if (projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onCreateProject={handleCreateProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onCreateProject={handleCreateProject} />
      {content}
    </main>
  );
}

export default App;
