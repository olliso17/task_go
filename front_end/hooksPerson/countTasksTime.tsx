import AlertComponent from "@/components/ComponentsPhone/AlertComponent";
import { OutputTaskDto } from "@/services/dto/task_dto";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";



const useAllHandle = (task: OutputTaskDto) => {

    const timeTask = task.time_select.split(":")
    const min = timeTask[0]
    const [time, setTime] = useState(parseInt(min) * 60) // 5 minutos em segundos
    const [isActive, setIsActive] = useState(false)
  
    useEffect(() => {
      let intervalId: NodeJS.Timeout
  
      if (isActive && time > 0) {
        intervalId = setInterval(() => setTime(time - 1), 1000)
      } else if (isActive && time === 0) {
        setIsActive(false)
      }
  
      return () => clearInterval(intervalId)
    }, [isActive, time])
  
    const handleStart = () => {
      setIsActive(true)
    }
  
    const handlePause = () => {
      setIsActive(false)
    }
  
    const handleReset = () => {
      setIsActive(false)
      setTime(5 * 60)
    }
  
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    
    const allHandle = {
        handleStart, handlePause, handleReset, minutes, seconds
    }
    return allHandle
}


export { useAllHandle }