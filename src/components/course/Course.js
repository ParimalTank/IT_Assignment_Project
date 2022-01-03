import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../course/course.css";

const Course = () => {
  const history = useHistory()
    return (
        <Card className="coursedetail" style={{ width: "18rem" }}>
          <Card.Img variant="top" width="276px" height="180px" src="https://media.istockphoto.com/photos/internet-cyber-security-picture-id463383675?k=20&m=463383675&s=170667a&w=0&h=AHL1Wfj0t_7muWzqgYYcXvbgets-jSWQB12wgU5kLCA=" />
          <Card.Body>
            <Card.Title>CRNS</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button onClick={() => history.push('/assignment')} variant="primary">Enter</Button>
          </Card.Body>
        </Card>
      
     
        
        
    )
}

export default Course