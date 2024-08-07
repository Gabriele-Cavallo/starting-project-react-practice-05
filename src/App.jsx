import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
function App() {
  function handleClick(){
    alert('ciao da App');
  };
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onClick={handleClick} />
      <NewProject />
    </main>
  );
}

export default App;
