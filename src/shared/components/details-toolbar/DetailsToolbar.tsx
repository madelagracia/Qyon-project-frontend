import { Save, Send, Upload, UploadFile } from "@mui/icons-material";
import { Box, Button, Paper, Skeleton, Typography, useTheme } from "@mui/material"
import { Search } from "react-router-dom";

interface IDetailsToolbarProps {
    uploadOnClick?: () => void;
    saveOnClick?: () => void;
    showLoadingButton?: boolean;
    showButton?: boolean;

}

export const DetailsToolbar: React.FC<IDetailsToolbarProps> = ({
    uploadOnClick,
    saveOnClick,
    showLoadingButton = false,
    showButton = true
}) => {
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

            {showLoadingButton && (
                <Skeleton width={110} height={60} />
            )}

            {(showButton && !showLoadingButton) && (
                <Button
                    variant='outlined'
                    color='secondary'
                    onClick={uploadOnClick}
                    disableElevation
                    startIcon={<UploadFile></UploadFile>}
                >
                    <Typography
                        variant='button'
                        whiteSpace='nowrap'
                        textOverflow='ellipsis'
                        overflow='hidden'
                    >
                        UPLOAD
                    </Typography>
                </Button>

            )}

            {showLoadingButton && (
                <Skeleton width={90} height={60} />
            )}

            {(showButton && !showLoadingButton) && (
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={saveOnClick}
                    disableElevation
                    startIcon={<Save></Save>}
                >
                    
                    <Typography
                        variant='button'
                        whiteSpace='nowrap'
                        textOverflow='ellipsis'
                        overflow='hidden'
                    > SAVE
                    </Typography>
                    
                </Button>
            )}
        </Box>
    )
}