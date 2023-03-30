import { Search } from "@mui/icons-material";
import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

interface IToolbarProps {
    searchText?: string;
    showInputSearch?: boolean;
    changingSearchText?: (newText: string) => void;
    newTextButton?: string;
    showNewButton?: boolean;
    newOnClick?: () => void;
}

export const ToolbarDashboard: React.FC<IToolbarProps> = ({
    searchText = '',
    showInputSearch = false,
    changingSearchText,
    newTextButton = 'Search',
    showNewButton =true,
    newOnClick

}) => {

    const theme = useTheme();
    return (
        <Box
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            display='flex'
            gap={1}
            alignItems='center'
            component={Paper}
        >
            {showInputSearch && (
                <TextField
                    size='small'
                    value={searchText}
                    placeholder="Search an OFX..."
                    onChange={(e) => changingSearchText?.(e.target.value)
                    } />
            )}

            <Box
                flex={1}
                display='flex'
                justifyContent={'end'}>

                {showNewButton && (
                    <Button
                        variant='contained'
                        color='primary'
                        disableElevation
                        onClick={newOnClick}
                        endIcon={<Search></Search>}
                    > {newTextButton}
                    </Button>
                )}

            </Box>

        </Box>
    );
}