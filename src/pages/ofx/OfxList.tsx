import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Icon, TableFooter, LinearProgress, Pagination, debounce } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Environment } from "../../shared/environment";
import { IOfxList, OfxService } from "../../shared/service/api";
import { BasicLayout } from "../../shared/layouts/BasicLayout";
import { SearchToolbar } from "../../shared/components";

export const OfxList: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [rows, setRows] = useState<IOfxList[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalCount, setTotalCount] = useState(0);


    const search = useMemo(() => {
        return searchParams.get('search') || '';
    }, [searchParams]);

    const page = useMemo(() => {
        return Number(searchParams.get('page') || '1');
    }, [searchParams]);


    useEffect(() => {
        setIsLoading(true);

        debounce(() => {
            OfxService.getAll(page, search)
                .then((result) => {
                    setIsLoading(false);

                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        console.log(result);

                        setTotalCount(result.totalCount);
                        setRows(result.data);
                    }
                });
        });
    }, [search, page]);

    const handleDelete = (id: number) => {
        if (confirm('This action will delete your file. Are you sure?')) {
            OfxService.deleteById(id)
                .then(result => {
                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        setRows(oldRows => [
                            ...oldRows.filter(oldRow => oldRow.id !== id),
                        ]);
                        alert('File deleted successfully!');
                    }
                });
        }
    };


    return (
        <BasicLayout
            title='Ofx List'
            toolbar={

                <SearchToolbar
                    showInputSearch
                    searchText={search}
                //newTextButton={text => setSearchParams({ search: text, page: '1' }, { replace: true })}
                />
            }
        >
            <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell width={100}>Actions</TableCell>
                            <TableCell>File Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <IconButton size="small" onClick={() => handleDelete(row.id)}>
                                        <Icon>delete</Icon>
                                    </IconButton>
                                </TableCell>
                                <TableCell>{row.nameFile}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    {totalCount === 0 && !isLoading && (
                        <caption>{Environment.EMPTY_LIST}</caption>
                    )}

                    <TableFooter>
                        {isLoading && (
                            <TableRow>
                                <TableCell colSpan={3}>
                                    <LinearProgress variant='indeterminate' />
                                </TableCell>
                            </TableRow>
                        )}
                        {(totalCount > 0 && totalCount > Environment.MAX_ROW) && (
                            <TableRow>
                                <TableCell colSpan={3}>
                                    <Pagination
                                        page={page}
                                        count={Math.ceil(totalCount / Environment.MAX_ROW)}
                                        onChange={(_, newPage) => setSearchParams({ search, page: newPage.toString() }, { replace: true })}
                                    />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableFooter>
                </Table>
            </TableContainer>
        </BasicLayout>
    );
};