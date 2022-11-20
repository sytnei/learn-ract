import React from 'react';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Login({ setPassword, password, isLogged = false }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            navigate('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogged]);

    return (

        <div style={{
            display: 'block',
            width: 700,
            padding: 30
        }}>
            <h4>My password is {password}, {isLogged ? 'is isLogged' : 'is inisLogged'}</h4>
            <Form>
                <Form.Group>
                    <Form.Label>Enter your password:</Form.Label>
                    <Form.Control type="text"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        placeholder="Enter your password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Click here to submit form
                </Button>
            </Form>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>



        </div>


    );
}

export default Login;