import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Pagination = ({page, setPage, totalPages, isLoading}) => {

    const onPrevious = () => {
        setPage(page - 1);
        isLoading(true);
    }

    const onNext = () => {
        setPage(page + 1);
        isLoading(true);
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