import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { totalPages } from '../api/api';

const Pagination = ({page, setPage}) => {

    const onPrevious = () => {
        setPage(page - 1);
    }

    const onNext = () => {
        setPage(page + 1);
    }

    return (
        <div className='pagination__buttons'>
            <ButtonGroup>
                {
                    page !== 1 ? <Button variant='outline-dark' onClick={onPrevious}>Previous</Button> : <></>
                }
                {
                    page !== totalPages ? <Button variant='outline-dark' onClick={onNext}>Next</Button> : <></> 
                }
            </ButtonGroup>
        </div>
    )
}

export default Pagination;