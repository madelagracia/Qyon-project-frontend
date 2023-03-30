import { Save } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";

interface IBasicLayoutProps {
    title: string;
    toolbar?: React.ReactNode
    children?: React.ReactNode

}

export const BasicLayout: React.FC<IBasicLayoutProps> = ({ children, title, toolbar }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();

    return (
        <Box 
        height='100%' 
        display='flex' 
        flexDirection='column' 
        gap={1}>


            <Box 
            padding={1} 
            display='flex' 
            alignItems='center' 
            height={theme.spacing(12)} 
            gap={1}
            justifyContent='space-between'>

                <Typography
                    variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                    whiteSpace='nowrap'
                    overflow='hidden'
                    textOverflow='ellipsis'
                >
                    {title}
                </Typography>

                <IconButton>
                    <Icon>settings</Icon>
                </IconButton>

            </Box>

            <Box>
                {toolbar}
            </Box>

            <Box 
            flex={1} 
            overflow='auto'>
                {children}
            </Box>

        </Box>
    );
}