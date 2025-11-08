import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
    gridDensitySelector,
    Toolbar,
    ExportCsv,
    ColumnsPanelTrigger,
    ToolbarButton,
    DataGrid,
    ExportPrint,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PrintIcon from '@mui/icons-material/Print';

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
    return (
        <Toolbar>
            <FlexBetween width="100%">
                <FlexBetween>
                    <ColumnsPanelTrigger />
                    <gridDensitySelector />
                    <ExportCsv render={<ToolbarButton />}>
                        <FileDownloadIcon fontSize="small" />
                    </ExportCsv>
                    <ExportPrint render={<ToolbarButton />}>
                        <PrintIcon fontSize="small" />
                    </ExportPrint>
                </FlexBetween>
                <TextField
                    label="Search..."
                    sx={{ mb: "0.5rem", width: "15rem" }}
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    variant="standard"
                    slotProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => {
                                        setSearch(searchInput);
                                        setSearchInput("");
                                    }}
                                >
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </FlexBetween>
        </Toolbar>
    );
};

export default DataGridCustomToolbar;

