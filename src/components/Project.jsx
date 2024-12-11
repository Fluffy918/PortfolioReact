import Project1img from '../assets/Project1.png'
import Project2img from '../assets/Project2.png'
import Project3img from '../assets/Project3.png'
import Project4img from '../assets/Project4.png'


function Project() {
    return (
        <>
            <div className='bg-indigo-800 m-20 max-w-full'>
                <div className='grid justify-items-center m-10'>
                    <h1 className='text-3xl text-white mt-10'>Projects</h1>
                </div>

                <div>
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <div className='max-w-md mx-auto bg-white rounded-x1 shadow-md overflow-hidden md:max-w-2x1 hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        Projet React 1
                                    </div>
                                    <a href="#">Plus</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div>
                                    <img src={Project1img} alt="Project 1" width={150} height={150} />
                                </div>
                            </div>
                        </div>
                        <div className='max-w-md mx-auto bg-white rounded-x1 shadow-md overflow-hidden md:max-w-2x1 hover:animate-pulse'>
                            <div className='md:flex'>
                                <div>
                                    <img src={Project2img} alt="Project 2" width={150} height={150} />
                                </div>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        Projet React 2
                                    </div>
                                    <a href="#">Plus</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    <hr />
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <div className='max-w-md mx-auto bg-white rounded-x1 shadow-md overflow-hidden md:max-w-2x1 hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        Projet React 3
                                    </div>
                                    <a href="#">Plus</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div>
                                    <img src={Project3img} alt="Project 1" width={150} height={150} />
                                </div>
                            </div>
                        </div>
                        <div className='max-w-md mx-auto bg-white rounded-x1 shadow-md overflow-hidden md:max-w-2x1 hover:animate-pulse'>
                            <div className='md:flex'>
                                <div>
                                    <img src={Project4img} alt="Project 2" width={150} height={150} />
                                </div>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        Projet React 4
                                    </div>
                                    <a href="#">Plus</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
        
    )
}

export default Project


