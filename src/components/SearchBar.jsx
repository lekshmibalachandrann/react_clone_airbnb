import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ placeholder, onSearch }) => (
  <Form className="d-flex" onSubmit={onSearch}>
    <FormControl
      type="search"
      placeholder={placeholder || 'Search'}
      className="me-2"
      aria-label="Search"
    />
    <Button variant="outline-success" type="submit">Search</Button>
  </Form>
);

export default SearchBar;
