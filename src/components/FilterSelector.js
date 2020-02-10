import React from "react";
import { Radio } from "antd";

class FilterSelector extends React.Component {
    render() {
        const { filter, onChange } = this.props
        return (
            <Radio.Group defaultValue={filter} onChange={onChange}>
                <Radio value="all">All</Radio>
                <Radio value="active">Active</Radio>
                <Radio value="completed">Completed</Radio>
            </Radio.Group>
        );
    };
};

export default FilterSelector;