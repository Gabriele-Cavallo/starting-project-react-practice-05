import { useState } from 'react';
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text){
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handDeleteTask(id){
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      };
    });
  }

  function handleSelectProject(id){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  function handleCreateProject(){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

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

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  
  let content = <SelectedProject tasks={projectState.tasks} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handDeleteTask} project={selectedProject} />

  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  }else if (projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onCreateProject={handleCreateProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onSelectProjectId={projectState.selectedProjectId} onSelectProject={handleSelectProject} onCreateProject={handleCreateProject} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
