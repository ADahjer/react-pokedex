import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const onChange = (e) => {
        setSearch(e.target.value);
    }
    const onClick = () => {
        navigate(`/pokemon/${search}`);
    }

    return (
        <div className='ms-auto'>
            <InputGroup onChange={onChange}>
                <Form.Control
                placeholder="Search pokemon"
                aria-label="Search pokemon"
                aria-describedby="search-button"
                />
                <Button variant="outline-light" id="search-button" onClick={onClick}>Search</Button>
            </InputGroup>
        </div>
    )

}

export default SearchBar;