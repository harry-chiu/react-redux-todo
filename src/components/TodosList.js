import React from "react";
import { Row, Col, List, Card, Icon } from "antd";

class TodosList extends React.Component {

    isCompleted = (completed) => {
        return completed ? "completed" : null;
    };

    renderTodo = (item) => {
        const { id, text, completed } = item;
        return (
            <Col>
                <Card>
                    <Row className={this.isCompleted(completed)} type="flex" gutter={[8, 8]}>
                        <Col>
                            <Icon
                                onClick={() => this.props.toggleTodo(id)}
                                className={this.isCompleted(completed)}
                                type="check"
                            />
                        </Col>
                        <Col>
                            #{id}
                        </Col>
                        <Col>
                            {text}
                        </Col>
                    </Row>
                </Card>
            </Col>
        );
    };

    render() {
        const { data } = this.props;

        return (
            <Row gutter={[8, 8]}>
                <List
                    dataSource={data}
                    renderItem={this.renderTodo}
                />
            </Row>
        );
    };
};

export default TodosList;