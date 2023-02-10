import { components } from 'react-select';

export default function IconOption(props) {
    const { Option } = components;

    return (
        <Option {...props}>
            {props.isSelected ? (
                <div>
                    <i className="bi bi-check"></i>
                    <span>{props.data.label}</span>
                </div>
            ) : (
                <div>
                    <div id="noCheckMark"></div>
                    <span>{props.data.label}</span>
                </div>
            )}
        </Option>
    );
}
