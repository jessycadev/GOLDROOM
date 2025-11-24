import React, { useState } from "react";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { useGetQuartosQuery } from "state/api";

const Quarto = ({
    _id,
    idQuarto,
    alojamento,
    status,
    usuario

}) => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem",
            }}
        >
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color={theme.palette.secondary[700]}
                    gutterBottom
                >
                    {status}
                </Typography>
                <Typography variant="h5" component="div">
                    Número: {idQuarto}
                </Typography>
                <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
                    {alojamento}
                </Typography>

                <Typography variant="body2">Ocupante: {usuario[0].name} </Typography>
                <Typography variant="body2">Cargo: {usuario[0].occupation} </Typography>
                <Typography variant="body2">Escala: </Typography>
                <Typography variant="body2">Data Entrada: </Typography>
                <Typography variant="body2">Data Saída: </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="primary"
                    size="small"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    See More
                </Button>
            </CardActions>
            <Collapse
                in={isExpanded}
                timeout="auto"
                unmountOnExit
                sx={{
                    color: theme.palette.neutral[300],
                }}
            >
                <CardContent>
                    <Typography>id: {_id}</Typography>
                    <Typography>Supply Left: {status}</Typography>
                    <Typography>
                        Yearly Sales This Year:
                    </Typography>
                    <Typography>
                        Yearly Units Sold This Year:
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

const Quartos = () => {
    const { data, isLoading } = useGetQuartosQuery();
    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="BILL" subtitle="Alojamento" />
            {data || !isLoading ? (
                <Box
                    mt="20px"
                    display="grid"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    justifyContent="space-between"
                    rowGap="20px"
                    columnGap="1.33%"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                >
                    {data.map(
                        ({
                            _id,
                            idQuarto,
                            alojamento,
                            status,
                            usuario
                        }) => (
                            <Quarto
                                key={_id}
                                _id={_id}
                                idQuarto={idQuarto}
                                alojamento={alojamento}
                                status={status}
                                usuario={usuario}
                            />
                        )
                    )}
                </Box>
            ) : (
                <>Loading...</>
            )}
        </Box>
    );
};

export default Quartos;