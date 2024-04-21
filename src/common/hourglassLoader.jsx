import { Hourglass } from "react-loader-spinner";
import BootstrapDialog from "./botstrapDialog";
import { DialogContent } from "@mui/material";

export default function HourglassLoader({open}) {

    return (
        <BootstrapDialog maxWidth="sm" open={open}>
            <DialogContent sx={{display:'flex', flexDirection: 'column'}}>
                <div style={{alignSelf: "center", padding: '2rem'}}>
                <Hourglass
                    visible={open}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#306cce', '#72a1ed']}
                />
                </div>
            </DialogContent>
        </BootstrapDialog>
    )
}