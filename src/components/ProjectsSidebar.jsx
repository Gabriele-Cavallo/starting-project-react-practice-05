import { list } from 'postcss';
import Button from './Button.jsx';
export default function ProjectsSidebar({ onCreateProject, projects }){
    return (
        <>
            <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
                <Button onClick={onCreateProject} >+ Add Project</Button>
                <ul className='mt-8'>
                    {projects.map((project) => <li key={project.id}><button className='w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hove:text-stone-200 hover:bg-stone-800'>{project.title}</button></li>)}
                </ul>
            </aside>
        </>
    )
}