import React from 'react';
import Inputs from '../Input';
import TitleList from '../Title';
import { useState, useEffect } from 'react';
import axios from "axios";

const TaskAdd = () => {
  // const [loading, setloading] = useState(false)
  // const [task, settask] = useState([])

  // const fetchAllData = async () => {
  //   try {
  //     setloading(true)
  //     fetch('http://localhost:8080/task/create',
  //       {
  //         method: 'POST',
  //         body: JSON.stringify(task),
  //       })

  //       .then(response => response.json())    // passo extra
  //       .then(data => {
  //         console.log(data)
  //       })
  //       .catch(error => console.error(error));

  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setloading(false)
  //   }
  // }
  // useEffect(() => {
  //   fetchAllData()
  // }, [])

    return (

      <form action='/task/create' method='post'>
        <TitleList titleList='Task' />
        <Inputs style="w-full p-2 flex flex-col justify-start" type='text' nameList='Title' defaultValue='Add Title Task' htmlFor='titleTask' id='titleTask' />
        <Inputs style="w-full p-2 flex flex-col justify-start" type='text' nameList='Description' defaultValue='Add Description Task' htmlFor='descriptionTask' id='descriptionTask' />
        <div className='flex w-full justify-around'>
          <Inputs style="w-1/3 p-2 flex flex-row justify-between items-center" type='checkbox' nameList='Priority' defaultValue='Add Description Task' htmlFor='descriptionTask' id='descriptionTask' />
          <Inputs style="w-1/3 p-2 flex flex-row justify-between items-center" type='time' nameList='Time' defaultValue='Add Time Task' htmlFor='timeTask' id='timeTask' />
        </div>


        {/* <fieldset className="w-1/3 p-2 flex flex-row justify-between">
                <label className="mb-3 text-sm mt-0" htmlFor="concludedTask">
                   Concluded
                </label>
                <input className="h-5 text-sm text-violet-400 focus:bg-violet-50" id="concludedTask" type="checkbox" />
            </fieldset> */}
        <div className='flex justify-end'>
          <button className='bg-violet-700 p-2 m-2 rounded-md' type='submit'>
            <p className='text-white font-bold'>Save</p></button>
        </div>


      </form>


    )
};

export default TaskAdd;