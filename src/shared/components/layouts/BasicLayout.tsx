import { Box, Icon, IconButton, Typography, useTheme } from "@mui/material";

interface IBasicLayoutProps {
    titulo: string;
    children?: React.ReactNode

}

export const BasicLayout: React.FC<IBasicLayoutProps> = ({ children, titulo }) => {

    const theme = useTheme();

    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>


            <Box padding={1} display='flex' alignItems='center' height={theme.spacing(12)} gap={1}>
                <Typography variant="h5">
                    {titulo}
                </Typography>
                
            </Box>

            <Box>
            <IconButton>
                    <Icon>
                        settings
                    </Icon>
                </IconButton>
            </Box>

            <Box>
                {children}
            </Box>

        </Box>
    );
}