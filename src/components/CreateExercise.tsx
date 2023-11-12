import React, { useState } from 'react'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import '../index.css'


const CreateExercise = () => {

    const [ title, setTitle] = useState('');
    const [ complexity , setComplexity] = useState('');
    const [ textExercise , setTestExercise ] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        alert(textExercise )
        console.log(typeof(textExercise))
        



    }

    return (
        <div className='w-full h-screen'>
            <div className="bg-custom-light-grey py-3 px-4">
                <h1 className="font-bold text-2xl">
                    Create Exercise
                </h1>
            </div>

            <div className='flex flex-col mt-5 items-center justify-center h-3/4 w-3/4 m-auto shadow-lg shadow-custom-grey sm:max-w-[900px] bg-custom-light-grey'>
                {/* Content goes here */}

                <div className="flex h-1/5 w-3/4 mt-0 m-auto ">
                    {/* Left Sub-column */}
                    <div className="flex-1 p-4 ">
                        <div>
                            <label className="block mt-2 mb-3 px-1 text-3xl  font-bold text-custom-black">Title</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)}  type="email" name="email" id="email" className=" px-3 mb-4 shadow-lg shadow-gray-400 border border-custom-blue text-custom-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Add Title" />
                        </div>
                    </div>

                    {/* Right Sub-column */}
                    <div className="flex-1 p-4">
                        <div>
                            <label className="block mt-2 mb-3 px-1 text-3xl  font-bold text-custom-black">Complexity</label>
                            <select  className="form-select px-3 mb-4 shadow-lg shadow-gray-400 border border-custom-blue text-custom-black  
                            sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full 
                            p-2.5 bg-white" aria-label="Default select example" defaultValue="default"
                            value={complexity} onChange={(e) => setComplexity(e.target.value)}>
                                <option value="default" className='form-select bg-white text-custom-blue'> Select Complexity</option>
                                <option id="t1" value="Easy" className=' text-green-900 bg-green-100'>Easy</option>
                                <option id="t2" value="Medium" className='text-blue-500 bg-blue-100'>Medium</option>
                                <option id="t3" value="Hard" className='text-red-500 bg-red-100'>Hard</option>
                            </select>
                            

                        </div>
                    </div>
                </div>


                {/* Bottom Row with Single Column */}
                <div className="flex-1 p-4  h-1/2 w-3/4 m-auto">
                    <div>
                        <label className="block mt-2 mb-6 px-1 text-3xl  font-bold text-custom-black">Text</label>

                        <TextareaAutosize
                            className="w-full text-sm font-sans font-normal leading-5 px-6 py-2 rounded-lg shadow-lg shadow-gray-400 border border-custom-blue text-custom-black sm:text-sm focus:ring-primary-600 focus:border-primary-600 block
        focus-visible:outline-0 overflow-y-auto resize-none"
                            placeholder="Please enter your exercise" value={textExercise} onChange={(e) => setTestExercise(e.target.value)}
                            style={{ minHeight: '300px' }}
                        />

                    </div>
                </div>
                <button onClick={handleSubmit} className='w-1/5 justify-center  py-2 mb-10 bg-custom-blue hover:bg-blue-400 rounded-lg'>Submit</button>
            </div>

        </div>



    )
};

export default CreateExercise