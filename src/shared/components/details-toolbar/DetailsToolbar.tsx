import { Save, Send, Upload, UploadFile } from "@mui/icons-material";
import { Box, Button, Paper, useTheme } from "@mui/material"
import { Search } from "react-router-dom";

export const DetailsToolbar: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            display='flex'
            justifyContent={'space-between'}
            gap={1}
            alignItems='center'
            component={Paper}>

            <Button
                variant='outlined'
                color='primary'
                disableElevation
                startIcon={<UploadFile></UploadFile>}
            > UPLOAD
            </Button>

            <Button
                variant='contained'
                color='primary'
                disableElevation
                startIcon={<Save></Save>}
            > SAVE
            </Button>
        </Box>
    )
}