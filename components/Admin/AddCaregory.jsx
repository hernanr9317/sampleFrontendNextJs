import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export const AddCategory = () => {
  const [category, setCategory] = useState('');

  const handleCategory = (e) => {
    e.preventDefault();
    console.log(category);
  };

  return (
    <Container style={{width: '350px'}}>
      <Form onSubmit={handleCategory}>
        <Form.Group className="mb-3" controlId="addCategory">
          <Form.Label>Agregar categoría</Form.Label>
          <Form.Control
            type="category"
            placeholder="Ingrese el nombre de la categoría"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Confirmar
        </Button>
      </Form>
    </Container>
  );
};
