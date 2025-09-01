import { useEffect, useState } from "react";
import  Card  from "../components/Card";
import { useFetch } from "../hooks/usefetch";

export const Movielist = ({title, apiPath }) => {
    const {data: movies} = useFetch(apiPath);
    useEffect(() => { document.title = title; });
    return <div>
        <main className="container">
            <h5 className="text-danger py-2 border-bottom">{title}</h5>
            
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2 ">
              {movies.map((movie)=> {
                return <Card key={movie.id} movie={movie}
                 />
              })}
            
            </div>
        </main>

    </div>;
};

