import React from 'react';
import Inputs from '../Input';
import TitleList from '../Title';


const TaskAdd = () => (
  <div>
    <TitleList titleList='Task'/>
    <Inputs style="w-full p-2 flex flex-col justify-start" type='text' nameList='Title' defaultValue='Add Title Task' htmlFor='titleTask' id='titleTask'/>
    <Inputs style="w-full p-2 flex flex-col justify-start" type='text' nameList='Description' defaultValue='Add Description Task' htmlFor='descriptionTask' id='descriptionTask'/>
    <Inputs style="w-1/3 p-2 flex flex-row justify-between " type='checkbox' nameList='Priority' defaultValue='Add Description Task' htmlFor='descriptionTask' id='descriptionTask'/>

    {/* <fieldset className="w-1/3 p-2 flex flex-row justify-between">
                <label className="mb-3 text-sm mt-0" htmlFor="concludedTask">
                   Concluded
                </label>
                <input className="h-5 text-sm text-violet-400 focus:bg-violet-50" id="concludedTask" type="checkbox" />
            </fieldset> */}
    <fieldset className="w-2/3 p-2 flex flex-row justify-between">
      <label className="mb-3 text-sm mt-0" htmlFor="timeTask">
        Time
      </label>
      <input className="h-5 w-2/4 text-sm text-violet-400 focus:bg-violet-50" id="timeTask" type="time" />
    </fieldset>
    <div className='flex justify-end'>
        <button className='bg-violet-700 p-2 m-2 rounded-md'>
          <p className='text-white font-bold'>Save</p></button>
    </div>
  
 
  </div>


);

export default TaskAdd;