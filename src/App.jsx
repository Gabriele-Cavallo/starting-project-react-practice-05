import { useState } from 'react';
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected.jsx';
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  function handleCreateProject(){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  let content;
  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} />;
  }else if (projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onCreateProject={handleCreateProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onCreateProject={handleCreateProject} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
