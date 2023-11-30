import { movies } from "../lib/data";

const MoviesGrid = () => {
  return (
    <section className="movie-section padding-top padding-bottom">
      <div className="container justify-content-center">
        <div className="col-lg-12 mb-50 mb-lg-0">
          <div className="row mb-10 justify-content-center">
            {movies.map((movie) => {
              if (movie.id !== "custom") {
                return (
                  <div className="col-sm-6 col-lg-3" key={movie.id}>
                    <div className="movie-grid">
                      <div className="movie-thumb c-thumb">
                        <a href={`/checkout?m=${movie.id}`}>
                          <img src={movie.image} alt={movie.title} />
                        </a>
                      </div>
                      {/* <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <a href={`/checkout/${movie.id}`}>{movie.title}</a>
                        </h5>
                        <ul className="movie-rating-percent">
                          <li>
                            <div className="thumb">
                              <img src="/images/movie/tomato.png" alt="movie" />
                            </div>
                            <span className="content">{movie.tomato}</span>
                          </li>
                          <li>
                            <div className="thumb">
                              <img src="/images/movie/cake.png" alt="movie" />
                            </div>
                            <span className="content">{movie.cake}</span>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                );
              }
              return <></>;
            })}
          </div>
          <div className="text-center">
            <a href="/checkout?m=custom" className="custom-button">
              Request Your Own Movie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesGrid;
