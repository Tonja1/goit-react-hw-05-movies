import PropTypes from 'prop-types';
import { InputStyled, SearchBtn } from './SearchFormStyled';
import { useState } from 'react';


export const SearchForm = ({ onSubmit }) => {
    const [search, setSearch] = useState('');

    const onInputChange = e => {
        setSearch(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ search });
        setSearch('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputStyled
                value={search}
                onChange={onInputChange}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movie"
                name="search"
            />
            <SearchBtn>Search</SearchBtn>
        </form>
    );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};