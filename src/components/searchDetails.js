import React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { states } from "../helpers/states";

export default function searchDetails({
  searchType,
  setSearchType,
  state,
  setState,
}) {

  return (
    <Box className="search-details-row">
      <FormControl
        style={{ margin: "0 1rem" }}
        variant="standard"
        sx={{ m: 1, minWidth: 150 }}
      >
        <InputLabel id="demo-simple-select-standard-label">
          Representation
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          label="Age"
        >
          <MenuItem value={"Representative"}>Representative</MenuItem>
          <MenuItem value={"Senator"}>Senator</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        style={{ margin: "0 1rem" }}
        variant="standard"
        sx={{ m: 1, minWidth: 150 }}
      >
        <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={state}
          onChange={(e) => setState(e.target.value)}
          label="Age"
        >
          {states.map((state, i) => (
            <MenuItem key={i} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
