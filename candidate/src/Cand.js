import "./Cand.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useRef, useState } from "react";

const Cand = () => {
  // function to set voter's name.
  // Note: Other details such as voter id(i.e metamask id in this case) will be directly extracted.

  // function to add the voter to the pool(i.e decentralized database).

  // get the name of the voter from the input field.
  //const form = nameOfVoter.current;
  //let vname = form["name"].value;

  // process to add the voter to pool.
  // await contract.methods.addVoter(vname).send({ from: accounts[0] });

  return (
    <div>
      <div className="reg">
        <div className="inner">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Canditate Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Party Name</Form.Label>
              <Form.Control type="text" placeholder="Party name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Cand;
