import { useState } from "react";
import { Col,Row,Form,Button } from "react-bootstrap";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { addMail } from "../../store/MailAction";
import  './ComposeMail.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const ComposeMail = () =>{

    const dispatch = useDispatch()
    const inputMailRef =useRef()
    const inputSubjectRef = useRef()
    const [editorState , setEditorState] = useState(()=> EditorState.createEmpty() )
    const editorHandler=(editorState)=>{
        setEditorState(editorState)
     }
     const composeMailHandler=(event)=>{
        event.preventDefault();
       console.log("compose button clicked")
       const mailData = {
         from : localStorage.getItem('email'),
         to : inputMailRef.current.value,
         title : inputSubjectRef.current.value,
         message : editorState.getCurrentContent().getPlainText()
       }
       console.log(mailData)
       dispatch(addMail(mailData))
       inputMailRef.current.value=""
        inputSubjectRef.current.value=""
        setEditorState(null)
     }
    return(
        <div>
            <div style={{width:60+"%" , justifyContent:"center" , margin:"auto"} }>
      <Form   onSubmit={composeMailHandler} className="text-center mt-2 mr-3">
     
        <Row >
          <Col xs={1}>
            <Form.Label>To</Form.Label>
          </Col>
          <Col>
            <Form.Control ref={inputMailRef} type="email" placeholder="Enter email" />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Form.Control  ref={inputSubjectRef} type="text" placeholder="Subject" />
          </Col>
        </Row>
        <hr />
        <Row className="border-1 editor-class">
        <Editor 
            editorState={editorState}
            onEditorStateChange={editorHandler}
            />
        </Row>
        <Button variant="secondary" type="submit" className="mt-5">Send</Button> 
      </Form>
    </div>
        </div>
    );
}
export default ComposeMail;