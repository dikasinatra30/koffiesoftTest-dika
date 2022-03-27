import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import qs from 'qs';
import "../../css/login.css";

class LoginCustom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            email: '',
            password: '',
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.postLogin();
    }

    postLogin() {
        const data = {
            'username': this.state.email,
            'password': this.state.password,
        };
        
        axios({
            method: 'post',
            responseType: 'json',
            url: `http://202.157.184.201:8000/login`,
            data: qs.stringify(data)
          })
           .then(response => {
                console.log('response >>', response);
                // alert('Success Login');
                window.location.href = "/dashboard";
           })
           .catch(error => {
               console.log('error', error.data);
        });
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
  
    render() {
      return (
        <div className="Login">

            <Card style={{ marginLeft: 200, marginRight: 200 }}>
                <Card.Header className="text-center">Sign In</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-12 my-1">
                                <Form.Group size="lg" controlId="email">
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
                                <Form.Group size="lg" controlId="password">
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
                                    Login
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

        </div>
      );
    }
  }

if (document.getElementById('loginCustom-react')) {
    ReactDOM.render(<LoginCustom />, document.getElementById('loginCustom-react'));
}
