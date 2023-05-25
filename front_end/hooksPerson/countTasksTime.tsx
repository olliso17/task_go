import { OutputTaskDto } from "@/services/dto/task_dto";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";



const useAllHandle = (task: OutputTaskDto, setAlert: Dispatch<SetStateAction<JSX.Element>>) => {
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
      setAlert(<Alert key={task.id} status='success'>
        <AlertIcon />
        <Box>
          <AlertTitle>{task.title} sucess!</AlertTitle>
          <AlertDescription>
            Your completed task.
          </AlertDescription>
        </Box>
        {/* <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        /> */}
      </Alert>)
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
    setTime(parseInt(min) * 60)
  }

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const allHandle = {
    handleStart, handlePause, handleReset, minutes, seconds
  }
  return allHandle
}


export { useAllHandle }