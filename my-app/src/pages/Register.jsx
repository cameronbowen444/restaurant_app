import React, { useRef} from 'react';

import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const registerNameRef = useRef(null);
    const registerPasswordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <Helmet title={'Register'}>
                <CommonSection title={'Register'}/>
                <section>
                    <Container>
                        <Row>
                            <Col lg='12' md='12' sm="12" className='m-auto text-center'>
                                <form action="" className="form mb-5" onSubmit={handleSubmit}>
                                    <div className="form__group">
                                        <input 
                                            type="text" 
                                            placeholder='Enter your full name' 
                                            required
                                            ref={registerNameRef}
                                        />
                                    </div>
                                    <div className="form__group">
                                        <input 
                                            type="email" 
                                            placeholder='Enter your email' 
                                            required
                                            ref={registerNameRef}
                                        />
                                    </div>
                                    <div className="form__group">
                                        <input 
                                            type="password" 
                                            placeholder='Enter your password' 
                                            required
                                            ref={registerPasswordRef}
                                        />
                                    </div>
                                    <button className="addTOCart__btn signin">Login</button>
                                </form>
                                <Link to='/login'>Have an account? Login here</Link>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}

export default Register;