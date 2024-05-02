/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {Card,CardHeader,CardBody,CardTitle,Table,Row,Col,Button} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader style={{display:'flex'}}>
                <CardTitle tag="h4">Admins Table</CardTitle>
                <Button type="button" style={{marginLeft:'71%'}}><a href="" style={{textDecoration:'none'}}>+ Add</a></Button>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Email</th>
                      <th>Admin Type</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jasin-Jaz</td>
                      <td>Image</td>
                      <td>Sharjah@gmail.com</td>
                      <td>Sales Admin</td>
                      <td><a href="" style={{textDecoration:'none'}}><i className="fa-solid fa-pen"/></a></td>
                      <td><a href="" style={{textDecoration:'none'}}><i className="fa-solid fa-trash"/></a></td>
                      <td><a href="" style={{textDecoration:'none'}}><i className="fa-solid fa-eye"/></a></td>
                    </tr>                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default Tables;
