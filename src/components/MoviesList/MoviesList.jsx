import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import { Item } from "./MoviesListStyled";

export const MoviesList = ({ movies }) => {
    const location = useLocation();

    return movies.map(({ id, title, name }) => (
        <Item key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
                {title || name}
            </Link>
        </Item>
    ));
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            name: PropTypes.string,
        })
    ).isRequired,
};