import { useEffect, useState } from 'react';
import { fetchMovie } from '../api';
import { useParams } from 'react-router-dom';
import { MovieDetails } from '../types/movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tomato from '../assets/rt-tomato.png'
import IMBD from '../assets/imdb.png'

const Details = () => {
    const { id } = useParams();

    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

    useEffect(() => {
        fetchMovie(parseInt(id as string))
            .then((detail) => {
                setMovieDetails(detail);
                console.log(detail);
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
            });
    }, [id]);

    return (
        <div className=" h-auto">
            <div className="background-wrapper h-screen">
                {movieDetails ? (
                    <div
                        className="text-white mx-auto movie-bg bg-no-repeat bg-cover bg-center h-full "
                        style={{
                            backgroundImage: `url(${movieDetails.background_image_original})`,
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div
                            className="overlay h-full"
                            style={{
                                background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3))',
                            }}
                        >
                            <div className='flex justify-center items-center '>


                                <div className="flex-wrap space-x-5  items-start flex justify-center pt-24  sm:gap-0 sm:px-5 ">
                                    <div className="movie-img flex  flex-col justify-between items-center space-y-2 w-full sm:w-max">
                                        <img
                                            className="border-4 border-white rounded max-w-full"
                                            src={movieDetails.medium_cover_image}
                                            alt={movieDetails?.background_image_original}
                                        />
                                        <button className="btn bg-green font-bold rounded w-full  p-3">Download</button>
                                        <button className="btn bg-watch font-bold rounded w-full p-3">Watch Now</button>
                                    </div>
                                    <div className="info flex flex-col justify-start items-start sm:w-ma">
                                        <h1 className="font-bold text-2xl ">{movieDetails.title}</h1>
                                        <h2 className="font-bold  pb-2">{movieDetails.year}</h2>
                                        <h2 className="font-bold">
                                            {movieDetails.genres.map((gen) => (
                                                <span className="pr-2" key={gen}>
                                                    {gen}
                                                </span>
                                            ))}
                                        </h2>
                                        <div className='flex space-x-2 pt-1'>Available in:
                                            {movieDetails.torrents.map((link, i) => (
                                                <button key={i} className=' ml-2 px-2 shadow-white rounded' style={{ border: '1px solid rgba(255,255,255,.16)' }}><a href={link.url}>{link.quality}.WEB</a></button>
                                            ))}

                                        </div>
                                        <div className='pt-3 '>
                                            <p className=" font-light pb-3 grid grid-cols-2 gap-x-4">
                                                <span className="pr-5">
                                                    <FavoriteIcon className="text-green" />
                                                </span>
                                                {movieDetails.like_count}
                                            </p>
                                            <p className='font-light pb-3 grid grid-cols-2  gap-x-4'>
                                                <span className="pr-5">
                                                    <img className='max-w-6 max-h-6' src={Tomato} alt="Rotten Tomato" />
                                                </span>
                                                {movieDetails.like_count}
                                            </p>
                                            <p className='font-light grid grid-cols-2 gap-x-4 '>
                                                <span className="pr-5">
                                                    <img className='max-w-6 max-h-6' src={IMBD} alt="Rotten Tomato" />
                                                </span>
                                                {movieDetails.like_count}
                                            </p>
                                        </div>
                                        <p className='max-w-sm pt-7 font-light'>
                                            {movieDetails.description_intro.length > 30 ? `${movieDetails.description_intro.substring(0, 400)}.....` : movieDetails.description_intro}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>Loading</h1>
                )}
            </div>
        </div>
    );
};

export default Details;
