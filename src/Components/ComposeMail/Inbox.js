import React from 'react';
import { Container, Col , Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import MailData from '../Mail/MailData';
import { deleteMail } from '../../store/MailAction';
import { NavLink } from 'react-router-dom';
 
const InboxEmail = () => {
    const dispatch = useDispatch();
    const mails = useSelector((state)=>state.mail.mailData)
    const email = localStorage.getItem("email")
    const inboxMail = mails.filter(mail=>mail.to === email )
    console.log(mails);

    const deleteMailHandler=(mail)=>{
        dispatch(deleteMail(mail))
    }

    const mailItem = inboxMail.map(mail=>(
        <div><NavLink to={`/inbox/${mail.id}`}> <MailData key={mail.id} mail={mail} toorFrom='From' /></NavLink><Col xs={2}>
        <Button mail={mail} onClick={deleteMailHandler(mail)} variant="danger">Delete</Button>
      </Col></div>
    ));

  return (
    <Container className='mt-5'>
      <h1>inside inbox</h1>
    {mailItem}
    </Container>
  )
}

export default InboxEmail;