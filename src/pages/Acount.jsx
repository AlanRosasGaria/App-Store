import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';


function FormDisabledExample() {
    return (
        <Form>
            <fieldset disabled>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Ingresa tu nombre completo</Form.Label>
                    <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Ingresa un numero telefonico o correo electronico</Form.Label>
                    <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Ingresa una contraseña</Form.Label>
                    <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                </Form.Group>
                <Dropdown.Divider />
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Ingresa tu municipio</Form.Label>
                    <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Ingresa tu ciudad</Form.Label>
                    <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Ingresa tu código postal</Form.Label>
                    <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="disabledFieldsetCheck"
                        label="Can't check this"
                    />
                </Form.Group>
                <Button type="submit">Agregar datos</Button>
            </fieldset>
        </Form>
    );
}

export default FormDisabledExample;
