import Head from "next/head";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function Results({ movies }) {
  console.log(movies);

  console.log(movies.title);

  return (
    <Layout>
      <Head />
      <div className="container">
        <h1>Results page</h1>

        {movies
          ? movies.map((movie, index) => {
              return (
                <div key={index} data-id={index}>
                  <h2>{movie.title}</h2>
                  <h4>{movie.original_title}</h4>
                  <p>{movie.description}</p>
                </div>
              );
            })
          : "loading..."}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let movies = [];

  try {
    const response = await axios.get(BASE_URL);
    console.log(response);
    movies = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      movies: movies,
    },
  };
}
