import React from 'react'
import { useSelector } from 'react-redux';
import { Col, Button } from 'react-bootstrap';
import MailData from '../Mail/MailData';
import { useDispatch } from 'react-redux';
import { deleteMail } from '../../store/MailAction'

const SentEmail = () => {
    const dispatch = useDispatch()
    const deleteMailHandler = (mail) => {
        dispatch(deleteMail(mail))
    }
    const mails = useSelector((state) => state.mail.mailData)
    const email = localStorage.getItem("email")
    const sentMail = mails.filter(mail => mail.to !== email)

    const mailItem = sentMail.map(mail => (
        <div> <MailData key={mail.id} mail={mail} toorFrom='From' />
            {/* <Col xs={2}>
      <Button mail={mail} onClick={deleteMailHandler(mail)} variant="danger">Delete</Button>
    </Col> */}
        </div>
    ))

    return (
        <div>
            {mailItem}
        </div>

    )
}

export default SentEmail;