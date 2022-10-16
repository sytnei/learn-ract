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
        </div>


    );
}

export default Login;