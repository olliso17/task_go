import { useAllHandle } from "@/hooksPerson/countTasksTime";
import { OutputTaskDto } from "@/services/dto/task_dto";
import { Heading, IconButton, Stack, ToastId } from "@chakra-ui/react";
import { useState } from "react";
import Lottie from "lottie-react";
import * as playAnimation from "public/play.json";
import * as pauseAnimation from "public/pause.json";
import * as resetAnimation from "public/reset.json";
import { useColorsPhone } from "@/hooksPerson/colorsPhone";

interface Props {
    task: OutputTaskDto

}

const ListTasksTimeweb = ({ task }: Props) => {
    const [alert, setAlert] = useState<ToastId | undefined>(undefined)
    const handleAll = useAllHandle(task, setAlert)
    const style = { whidth: 55, height: 55 };
    const styleReset = { whidth: 40, height: 40, };
    const [active, setActive] = useState(false);
    const allColors = useColorsPhone();

    return (
        <>
            <Heading size='xs' textTransform='uppercase'>
                {task.title}
            </Heading>

            <Stack spacing={4} align="center">
                <div>{handleAll.minutes.toString().padStart(2, '0')}:
                    {handleAll.seconds.toString().padStart(2, '0')}</div>
                <Stack direction="row" spacing={2}>
                    <IconButton type="submit" aria-label="" backgroundColor={allColors.bg} icon={active == false ? <Lottie style={style} animationData={playAnimation} onClick={handleAll.handleStart} /> : <Lottie style={style} animationData={pauseAnimation} onClick={handleAll.handlePause} />} onClick={e => { setActive(state => !state) }} />

                    <IconButton type="submit" aria-label="reset" backgroundColor={allColors.bg} icon={<Lottie style={styleReset} animationData={resetAnimation} onClick={handleAll.handleReset} />} onClick={e => { setActive(false) }} />

                </Stack>
            </Stack>

        </>
    )
}

export default ListTasksTimeweb;