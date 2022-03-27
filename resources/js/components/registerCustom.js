import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Select from 'react-select';
import axios from 'axios';
import "../../css/login.css";

class RegisterCustom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            hp: "",
            firstname: "",
            lastname: "",
            grup: "member",
            role: "",
            tgl_lahir: "2022-03-27",
            jenis_kelamin: 1,
            password: "",
            referral_code: "",
            handleShowModal: false,
        };
  
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
        event.preventDefault();
        this.postRegist();
    }

    postRegist() {
        const user = {
            email: this.state.email,
            hp: this.state.hp,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            grup: this.state.grup,
            role: this.state.role,
            tgl_lahir: this.state.tgl_lahir,
            jenis_kelamin: 1,
            password: this.state.password,
            referral_code: this.state.referral_code
        };
        
        axios({
            method: 'post',
            responseType: 'json',
            url: `http://202.157.184.201:8000/users`,
            data: user
          })
           .then(response => {
                console.log('response >>', response);
                this.setState({ handleShowModal: true })
           })
           .catch(error => {
               console.log('error', error.data);
        });
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleCloseModal() {
        this.setState({ handleShowModal: false })
    }
  
    render() {

        const genre_options = [
            { value: '1', label: 'Laki - Laki' },
            { value: '2', label: 'Perempuan' },
        ]

      return (
        <div className="Login">
            <Card style={{ marginLeft: 200, marginRight: 200 }}>
                <Card.Header className="text-center">Sign Up</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-12 my-1">
                                <Form.Group size="md" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        type="email"
                                        value={this.state.email}
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                    />
                                </Form.Group>
                            </div>

                            <div className="col-12 my-1">
                                <Form.Group size="md">
                                    <Form.Label>Handphone</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        type="text"
                                        value={this.state.hp}
                                        onChange={(e) => this.setState({ hp: e.target.value })}
                                    />
                                </Form.Group>
                            </div>

                            <div className="col-6 my-1">
                                <Form.Group size="md">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        type="text"
                                        value={this.state.firstname}
                                        onChange={(e) => this.setState({ firstname: e.target.value })}
                                    />
                                </Form.Group>
                            </div>

                            <div className="col-6 my-1">
                                <Form.Group size="md">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        type="text"
                                        value={this.state.lastname}
                                        onChange={(e) => this.setState({ lastname: e.target.value })}
                                    />
                                </Form.Group>
                            </div>

                            <div className="col-12 my-1">
                                <Form.Group size="md" controlId="password">
                                    <Form.Label>Tanggal Lahir</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        type="date"
                                        value={this.state.tgl_lahir}
                                        onChange={(e) => this.setState({ tgl_lahir: e.target.value })}
                                    />
                                </Form.Group>
                            </div>

                            <div className="col-12 my-1">
                                <Form.Group size="md" controlId="password">
                                    <Form.Label>Jenis Kelamin</Form.Label>
                                    <Select options={genre_options} onChange={(e) => {this.setState({ jenis_kelamin: e.value })} } />
                                </Form.Group>
                            </div>

                            <div className="col-12 my-1">
                                <Form.Group size="md" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={this.state.password}
                                        onChange={(e) => this.setState({ password: e.target.value })}
                                    />
                                </Form.Group>
                            </div>

                            <div className="col-12 my-1">
                                <Button className="block" size="md" type="submit" disabled={!this.validateForm()}>
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            <Modal show={this.state.handleShowModal} onHide={() => this.handleCloseModal()}>
                <Modal.Header closeButton>
                    <Modal.Title>Success Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-12 my-1">
                            <Form.Group size="md" controlId="email">
                                <Form.Label>Email : </Form.Label>
                                <Form.Label>{ this.state.email ?? '-' }</Form.Label>
                            </Form.Group>
                        </div>

                        <div className="col-12 my-1">
                            <Form.Group size="md">
                                <Form.Label>Handphone : </Form.Label>
                                <Form.Label>{ this.state.hp ?? '-' }</Form.Label>
                            </Form.Group>
                        </div>

                        <div className="col-6 my-1">
                            <Form.Group size="md">
                                <Form.Label>First Name : </Form.Label>
                                <Form.Label>{ this.state.firstname ?? '-' }</Form.Label>
                            </Form.Group>
                        </div>

                        <div className="col-6 my-1">
                            <Form.Group size="md">
                                <Form.Label>Last Name : </Form.Label>
                                <Form.Label>{ this.state.lastname ?? '-' }</Form.Label>
                            </Form.Group>
                        </div>

                        <div className="col-12 my-1">
                            <Form.Group size="md" controlId="password">
                                <Form.Label>Tanggal Lahir : </Form.Label>
                                <Form.Label>{ this.state.tgl_lahir ?? '-' }</Form.Label>
                            </Form.Group>
                        </div>

                        <div className="col-12 my-1">
                            <Form.Group size="md" controlId="password">
                                <Form.Label>Jenis Kelamin : </Form.Label>
                                <Form.Label>{ this.state.jenis_kelamin ?? '-' }</Form.Label>
                            </Form.Group>
                        </div>

                        <div className="col-12 my-1">
                            <Form.Group size="md" controlId="password">
                                <Form.Label>Password : </Form.Label>
                                <Form.Label>{ this.state.password ?? '-' }</Form.Label>
                            </Form.Group>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleCloseModal()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
      );
    }
  }

if (document.getElementById('registerCustom-react')) {
    ReactDOM.render(<RegisterCustom />, document.getElementById('registerCustom-react'));
}
