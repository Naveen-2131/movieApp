import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useFetch } from "../hooks/usefetch";
import { useSearchParams } from "react-router-dom";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  useEffect(() => {
    document.title = `Search result for ${queryTerm}`;
  });

  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom">{movies.length == 0 ? `No Result found for ${queryTerm}` : `Result for ${queryTerm}`}</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2 ">
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie}
          />
        })}

      </div></main>
  )
} 