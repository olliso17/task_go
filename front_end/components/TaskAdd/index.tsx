import React from 'react';


const TaskAdd = () => (
  <div>
    <h1 className='text-center m-1'>Tasks</h1>
    <fieldset className="w-full p-2 flex flex-col justify-start">
      <label className="mb-3 text-sm mt-0" htmlFor="titleTask">
        Title
      </label>
      <input className="h-9 p-2 text-sm text-violet-400 focus:bg-violet-50" id="titleTask" defaultValue="Add Title Task" />
    </fieldset>
    <fieldset className="w-full p-2 flex flex-col justify-start">
      <label className="mb-3 text-sm mt-0" htmlFor="descriptionTask">
        Description
      </label>
      <input className="h-9 p-2 text-sm text-violet-400 focus:bg-violet-50" id="descriptionTask" defaultValue="Add Description Task" />
    </fieldset>
    <fieldset className="w-1/3 p-2 flex flex-row justify-between">
      <label className="mb-3 text-sm mt-0" htmlFor="priorityTask">
        Priority
      </label>
      <input className="h-5 text-sm text-violet-400 focus:bg-violet-50" id="priorityTask" type="checkbox" />
    </fieldset>
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

  </div>


);

export default TaskAdd;