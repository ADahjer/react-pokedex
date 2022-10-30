import React from 'react'
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

const Navigation = () => {
    //const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png';
    const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png';
    const navVariant = 'dark';

    return (
        <div>
            <Navbar bg={navVariant} variant={navVariant}>
                <Container>
                    <Stack direction='horizontal' className='w-100'>
                        <Navbar.Brand>
                            <img 
                                src={logoUrl}
                                alt='Logo'
                                width={60}
                                height={60}
                            />
                            React-Pokedex
                        </Navbar.Brand>
                        <SearchBar className='ms-auto' />
                    </Stack>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;