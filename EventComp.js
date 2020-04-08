import React from 'react';
import { render } from '@testing-library/react';
import {Button,Table,Form,Container,Row,Col,Modal} from 'react-bootstrap';
import { connect } from "react-redux";

class EventComp extends React.Component{
    render() {
        return(
            <React.Fragment>

                <Container fluid="lg"><br/>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                        <Button label="Show"  variant="outline-primary" onClick={() => { this.props.handleShow(); this.props.handleEventID();}}>Add New Event</Button>
                           <Modal show={this.props.visible} onHide={this.props.handleHide}>
                              <Modal.Header closeButton>
                                 <Modal.Title>Add New Event</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              <Form >
                              <Form.Group controlId="formEventName">
                                    <Form.Label>Event ID  :  </Form.Label>
                                    <Form.Control  name="ID" value={this.props.uniqueID} 
                                    onChange={this.props.handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formEventName">
                                    <Form.Label>Event Name  :  </Form.Label>
                                    <Form.Control type="text" name="Name" value={this.props.EventObject.Name} placeholder="Enter Event Name" 
                                    onChange={this.props.handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formEventCreatedBy">
                                        <Form.Label>Created By  :  </Form.Label>
                                        <Form.Control type="text" name="CreatedBy" value={this.props.EventObject.CreatedBy} placeholder="Enter  Name" 
                                        onChange={this.props.handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formEventDate">
                                        <Form.Label>Date  : </Form.Label>
                                        <Form.Control type="date"value={this.props.EventObject.Date}  name="Date"
                                        onChange={this.props.handleChange}/>
                                    </Form.Group>
                                    </Form>
                                  
                                  </Modal.Body>
                              <Modal.Footer>
                                 <Button variant="primary" onClick={this.props.handleSubmit} >Save</Button>
                                 <Button variant="secondary" onClick={this.props.handleHide}>Close </Button>
                            </Modal.Footer>
                           </Modal>
                
                        </Col>
                    </Row><br/>
                    <Row>
                        
                    <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>Event ID</th>
                            <th>Event Name</th>
                            <th>Created by</th>
                            <th>Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.history.map(el => (
                        <tr
                         key={el.id}>
                            <td>{el.EventObject.id}</td>
                            <td>{el.EventObject.Name}</td>
                            <td>{el.EventObject.CreatedBy}</td>
                            <td>{el.EventObject.Date}</td>
                            <td>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" 
                                        onClick={() => { this.props.handleShow(); this.props.handleShowEdit();}}
                                        />
                                    </Form.Group>
                               </Form>
                            </td> 
                            <td>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check onClick={() => this.props.onDelEntry(el.id)} type="checkbox" label="" />
                                    </Form.Group>
                               </Form>
                            </td> 
                        </tr>
                         ))}
                    </tbody>
                </Table>
                    </Row>

                
               
                </Container>

            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
            visible:state.visible,
            uniqueID:state.uniqueID,
            EventObject:{
                ID:state.EventObject.ID,
                Name:state.EventObject.Name,
                Date:state.EventObject.Date
            },
      history: state.history
    };
  };
  
  const mapDispachToProps = dispatch => {
    return {
      handleSubmit: () => dispatch({ type: "SAVE", payload:"1" }),
      handleShow: () => dispatch({ type: "SHOW_POPUP", payload:"1" }),
      handleHide: () => dispatch({ type: "HIDE_POPUP", payload:"1"}),
      handleChange : (e) => dispatch({ type: "FORM_INSIDE", payload:e }),
      onDelEntry: (id) => dispatch({ type: "DEL_EVENT", id: id}),
      handleEventID : () => dispatch({ type: "UNIQUE_ID", payload:"1"}),
      handleShowEdit : () => dispatch({ type: "EDIT", payload:"1"})
    };
  };
  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(EventComp);


