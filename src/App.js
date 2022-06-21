import React, { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import SearchDetails from "./components/searchDetails";
import Table from "./components/table";
import Details from "./components/details";

import axios from "axios";

import "./App.css";

function App() {
  const [searchType, setSearchType] = useState("");
  const [state, setState] = useState("");
  const [results, setResults] = useState([]);
  const [activeRep, setActiveRep] = useState({});
  const [error, setError] = useState("");


useEffect(() => {
  if (searchType !== '' && state !== '') {
      setActiveRep({});
      axios
      .get(
          `http://localhost:3001/${searchType.toLowerCase()}s/${state.toLocaleLowerCase()}`
      )
      .then(function (res) {
          // handle success
          setResults(res.data.results);
      })
      .catch(function (err) {
          // handle error
          setError(err.message);
          console.error(err);
      });
  }
}, [searchType, state])

  return (
    <Container maxWidth="l">
      <Typography
        variant="h1"
        fontSize={32}
        fontWeight={700}
        style={{ padding: "1rem 0" }}
        gutterBottom
        component="div"
      >
        Who's My Representative?
      </Typography>
      <SearchDetails
        searchType={searchType}
        setSearchType={setSearchType}
        state={state}
        setState={setState}
        setResults={setResults}
        setError={setError}
        setActiveRep={setActiveRep}
      />
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant="h2" fontSize={32} gutterBottom component="h2">
              List{results.length > 0 ? ` / ${searchType}s (${state})` : ""}
            </Typography>
            {error === "" ? (
              results.length > 0 ? (
                <Table results={results} activeRep={activeRep} setActiveRep={setActiveRep} />
              ) : (
                <h2>Please select from options above and click "SEARCH"</h2>
              )
            ) : (
              <h2>{error}</h2>
            )}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2" fontSize={32} gutterBottom component="h2">
              Info
            </Typography>
            {Object.keys(activeRep).length !== 0 ? (
              <Details activeRep={activeRep} />
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
