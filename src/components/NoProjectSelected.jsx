import projectImg from '../assets/no-projects.png';
import Button from './Button.jsx';
export default function NoProjectSelected({onCreateProject}){
    return (
        <div className='mt-24 text-center w-2/3'>
            <img className="w-16 h-16 object-contain mx-auto"  src={projectImg} alt="Board with pen" />
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
            <p className='mt-8'>
                <Button onClick={onCreateProject}>Create new Project</Button>
            </p>
        </div>
    )
}