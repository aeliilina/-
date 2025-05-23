import VideoBlock from "../../components/VideoBlock"
import {ExpandMore} from '@mui/icons-material'

import { useState } from "react"

export default function MainPage() {

    const [open,setOpen] = useState (false)

    const handleOpen= () => {
        setOpen(true)
    }
    const handleClose= () => {
        setOpen(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };



    return(
        <>
        <VideoBlock></VideoBlock>
        


        </>
        
    )

}

