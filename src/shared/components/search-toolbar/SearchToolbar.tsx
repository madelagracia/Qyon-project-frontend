import { Search } from "@mui/icons-material";
import { Box, Button, Paper, TextField, useTheme } from "@mui/material";
import { Environment } from "../../environment";

interface ISearchToolbarProps {
    searchText?: string;
    showInputSearch?: boolean;
    changingSearchText?: (newText: string) => void;
    newTextButton?: string;
    showNewButton?: boolean;
    newOnClick?: () => void;
}

export const SearchToolbar: React.FC<ISearchToolbarProps> = ({
    searchText = '',
    showInputSearch = false,
    changingSearchText,
    newTextButton = 'Search',
    showNewButton = true,
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
                    placeholder={Environment.SEARCH_INPUT}
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