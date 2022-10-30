import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'

const SearchBar = ({className}) => {

    const [search, setSearch] = useState('');
    const onChange = (e) => {
        setSearch(e.target.value);
    }
    const onClick = () => {
        alert(search.toLowerCase());
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