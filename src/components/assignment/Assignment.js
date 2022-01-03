import React from "react";
import "./assignment.css";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import Assignment_pages from "./Assignmentpages";
import Sidebar from "./Sidebar";

const Assignment = () => {
  let { path } = useRouteMatch();
  return (
    <div className="d-flex">
      <Sidebar />
      <Switch>
        <div>
          <Route path={`${path}/:asign`}>
            <TestWhich />
          </Route>
        </div>
      </Switch>
    </div>
  );
};

const TestWhich = ({ txt }) => {
  let { asign } = useParams();
  return (
    <div>
      <h1 style={{ margin: "3rem" }}>
         
      <h3>
        
      <br/>
      Assignment - 1
      <br/><br/><br/>
                Encryption and Decryption using SSL/TLS certificate : <br/><br/>

                Install the openssl on your machine:<br/><br/>

                For Windows:<br/><br/>
                Download openssl for windows https://slproweb.com/products/Win32OpenSSL.html. Install the MSI.<br/><br/>

                For MAC:<br/>
                <br/>brew update<br/>
                brew install openssl<br/>
                echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile<br/>
                source ~/.bash_profile<br/><br/>

                Create SSL certificate using following command:<br/><br/>

                    openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:4096 -keyout private.key -out certificate.crt<br/><br/>

                    Extract the public key component from certificate using following command<br/><br/>

                    Command to extract pubkey from certificate<br/><br/>

                    openssl x509 -noout -pubkey -in certificate.crt -out pub.key<br/><br/>

                    Upload the public key to server “Upload Public Key” Button<br/><br/>

                    Server has generated the random no. in file and encrypted it with public key provided by you. Server has used following command to encrypt the file<br/><br/>

                    openssl rsautl -encrypt -in test.txt -pubin -inkey pub.key -out cipher.txt<br/><br/>

                    Encrypted file is sent to you through the mail. Download it and decrypt it using the following command<br/><br/>

                    openssl rsautl -decrypt -in cipher.txt -inkey private.key<br/><br/>

                    Paste the random no. in the following text box and validate the no.<br/><br/>

                You have successfully completed the assignment.<br/><br/>
    </h3>
      </h1>
    </div>
  );
};

export default Assignment;
