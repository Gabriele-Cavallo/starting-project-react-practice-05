import ProjectsSidebar from './components/ProjectsSidebar';
function App() {
  function handleClick(){
    alert('ciao da App');
  };
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <ProjectsSidebar onClick={handleClick} />
    </>
  );
}

export default App;
