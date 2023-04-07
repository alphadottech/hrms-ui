import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
// import { Form, FormGroup, Label, Col, Input, Button, ButtonToolbar, ButtonGroup } from 'reactstrap';
import { Form, FormGroup, Label, Col, Input, Button, ButtonToolbar, ButtonGroup } from 'reactstrap'
import './Hrmscss/App.css'


export default function UpdateExp() {
    let Navigate = useNavigate();
    const [id, setId] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [paymentMode, setPaymentMode] = useState('');
    const [paidBy, setPaidBy] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [gst, setGst] = useState('');
    const [comments, setComments] = useState('');

    useEffect(() => {
        setId(localStorage.getItem('ID', id));
        setPaymentDate(localStorage.getItem('Payment_Date', paymentDate));
        setPaymentMode(localStorage.getItem('Payment_Mode', paymentMode));
        setPaidBy(localStorage.getItem('Paid_By', paidBy));
        setCreatedBy(localStorage.getItem('Created_By', createdBy));
        setAmount(localStorage.getItem('Amount', amount));
        setDescription(localStorage.getItem('Description', description));
        setCategory(localStorage.getItem('Category', category));
        setGst(localStorage.getItem('GST', gst));
        setComments(localStorage.getItem('Comments', comments));
    }, [amount, category, comments, createdBy, description, gst, id, paidBy, paymentDate, paymentMode]);

    function cancelExpense() {
        Navigate('/GetExpense')
    }

    function updateExpense(e) {
        e.preventDefault()
        axios.put(`/expenseManagement/updateExpense/${id}`, {
            paymentDate,
            paymentMode,
            paidBy,
            createdBy,
            amount,
            description,
            category,
            gst,
            comments
        }).then((response) => {
            alert(response.data);
            cancelExpense();
        }).catch((error) => { console.error(error.response.data) })
    }

    return (
        <div>
            <Form style={{ textAlign: "center", marginTop: "15px" }}>
                <FormGroup row>
                    <Label sm={2}>Payment_Date</Label>
                    <Col sm={5}>
                        <Input type='date' Label='Payment_Date' placeholder='Payment Date' value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Payment_Mode</Label>
                    <Col sm={5}>
                        <Input type='text' name='paymentMode' Label='Payment_Mode' placeholder='Payment Mode' value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Paid_By</Label>
                    <Col sm={5}>
                        <Input type='text' name='paidBy' Label='Paid_By' placeholder='Paid By' value={paidBy} onChange={(e) => setPaidBy(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Created_By</Label>
                    <Col sm={5}>
                        <Input type='text' name='createdBy' Label='Created_By' placeholder='Created_By' value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Amount</Label>
                    <Col sm={5}>
                        <Input type='number' name='amount' Label='Amount' placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Description</Label>
                    <Col sm={5}>
                        <Input type='text' name='description' Label='Description' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Category</Label>
                    <Col sm={5}>
                        <Input type='text' name='category' Label='Category' placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2} for="gstSelect">GST</Label>
                    <Col sm={5}>
                        <Input id="gstSelect" name="gst" type="select" value={gst} onChange={(e) => setGst(e.target.value)}  >
                            <option>true</option>
                            <option>false</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Comments</Label>
                    <Col sm={5}>
                        <Input type='text' name='comments' Label='Comments' placeholder='Comments' value={comments} onChange={(e) => setComments(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ offset: 2, size: 10 }}>
                        <ButtonToolbar>
                            <ButtonGroup className="me-2">
                                <Button type='submit' color='primary' onClick={updateExpense} outline>Submit</Button>
                            </ButtonGroup>
                            <ButtonGroup className="me-2">
                                <Button type='submit' color='warning' outline onClick={cancelExpense}>Cancel</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}