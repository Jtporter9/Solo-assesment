import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function table({ results, activeRep, setActiveRep }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead style={{ backgroundColor: "rgba(0,0,0,0.05)" }}>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell>PARTY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map(
            ({ district, link, name, office, party, phone, state }, i) => (
              <TableRow
                hover
                onClick={() =>
                  setActiveRep({
                    district,
                    link,
                    name,
                    office,
                    party,
                    phone,
                    state,
                  })
                }
                key={i}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                  backgroundColor: `${activeRep.name === name ? 'rgba(0,0,0,0.05)' : ''}`,
                }}
              >
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell>
                  {party} ({state})
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
