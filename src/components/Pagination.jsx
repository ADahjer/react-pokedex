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
                    page !== 1 ? <Button variant='outline-light' onClick={onPrevious}>Previous</Button> : <></>
                }
                {
                    page !== totalPages ? <Button variant='outline-light' onClick={onNext}>Next</Button> : <></> 
                }
            </ButtonGroup>
        </div>
    )
}

export default Pagination;