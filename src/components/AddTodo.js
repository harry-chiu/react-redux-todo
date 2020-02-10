import React from "react";
import { Row, Col, Input, Button } from "antd";

class AddTodo extends React.Component {
    render() {
        return (
            <Row type="flex" gutter={[8, 8]}>
                <Col>
                    <Input onChange={this.props.getInputValue} placeholder="Type here" />
                </Col>
                <Col>
                    <Button onClick={this.props.addTodo}>Add</Button>
                </Col>
            </Row>
        );
    };
};

export default AddTodo;