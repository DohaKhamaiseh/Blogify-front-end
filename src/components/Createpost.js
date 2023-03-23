import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Createpost() {

    return (
        <Card>
            <Card.Body>
                <Form>
                    <FloatingLabel controlId="floatingTextarea2" label="Create a post">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />

                    </FloatingLabel >
                </Form>
                <hr />
                <ButtonGroup aria-label="Basic example">
                    <Form.Control
                        as="textarea"
                        placeholder="Attach picture URL"
                        style={{ height: '20px' }}
                    />
                    <Button variant="secondary">Post</Button>
                </ButtonGroup>
            </Card.Body>
        </Card >
    )
}