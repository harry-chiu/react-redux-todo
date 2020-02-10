import React from "react";
import { Row, Col, Card } from "antd";
import { connect } from "react-redux";

import AddTodo from "./AddTodo";
import FilterSelector from "./FilterSelector";
import TodosList from "./TodosList";
import { inputActions, todoActions } from "../actions";

const { getInputValue } = inputActions;
const { addTodo, toggleTodo, selectFilter } = todoActions;

class App extends React.Component {

    filterTodos = (todos, filter) => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter(todo => !todo.completed);
            case "completed":
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        };
    };

    render() {
        return (
            <Card
                title={
                    <Row gutter={[8, 8]}>
                        <Col>
                            <AddTodo
                                getInputValue={this.props.getInputValue}
                                addTodo={this.props.addTodo}
                            />
                        </Col>
                        <Col>
                            <FilterSelector
                                filter={this.props.todoReducer.filter}
                                onChange={this.props.selectFilter}
                            />
                        </Col>
                    </Row>
                }
            >
                <TodosList
                    toggleTodo={this.props.toggleTodo}
                    data={this.filterTodos(this.props.todoReducer.todos, this.props.todoReducer.filter)}
                />
            </Card>
        );
    };
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, {
    getInputValue,
    addTodo,
    toggleTodo,
    selectFilter
})(App);