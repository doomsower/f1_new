import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { AutoComplete } from './Autocomplete';

const useStyles = makeStyles({
    root: {
        background: 'white',
        border: 'none',
        '& .MuiDataGrid-colCellTitle': {
            fontWeight: 700,
            color: '#fff',
        },
        '& .MuiDataGrid-colCellWrapper': {
            background: '#31334a',
        },
        '& .MuiDataGrid-footer, .MuiTablePagination-root': {
            background: '#31334a',
            color: '#fff',
        },
    },
});

const columns: GridColDef[] = [
    {
        field: 'circuitName',
        headerName: 'Название трассы',
        type: 'string',
        flex: 1,
    },
    {
        field: 'locality',
        headerName: 'Место',
        type: 'string',
        flex: 1,
    },
    {
        field: 'country',
        headerName: 'Страна',
        type: 'string',
        flex: 1,
    },
];

type DataCircuitTable = {
    id: string;
    circuitName: string;
    locality: string;
    country: string;
};

export const CircuitTable: React.FC = () => {
    const [dataTable, setDataTable] = useState<DataCircuitTable[]>([]);

    useEffect(() => {
        fetchMyAPI().then((response) => {
            setDataTable(
                response.map((el) => {
                    return {
                        id: el.circuitId,
                        circuitName: el.circuitName,
                        locality: el.Location.locality,
                        country: el.Location.country,
                    };
                }),
            );
        });
    }, []);

    const classes = useStyles();

    async function fetchMyAPI(): Promise<any> {
        const response = await fetch('https://ergast.com/api/f1/circuits.json');
        const data = await response.json();
        return data.MRData.CircuitTable.Circuits;
    }

    return (
        <div>
            <AutoComplete curcuitName={dataTable.map((name) => name.circuitName)} />
            <div style={{ width: '50%' }}>
                <DataGrid
                    className={classes.root}
                    rows={dataTable}
                    columns={columns}
                    pageSize={10}
                    autoHeight
                    disableColumnMenu
                />
            </div>
        </div>
    );
};
