import ReactSelect from 'react-select';
import IconOption from './IconOption';

/*
Custom react-select Select component with Option component which has check mark icon indicating the chosen option in dropdown menu.
Attributes:
name – name that connects the Select component with HTML label element's htmlFor attribute (recommended for accessibility reasons)
placeholder – placeholder text in Select component (required)
onChange – event handler for change events (required)
options – options in Select component (dropdown menu), list of value-label pairs inside objects (required):
    { value: '...', label: '...' }, { value: '...', label: '...' }, ...
[...options] is for creating new options array for each Select component with the same content
*/
export default function GenericSelect({
    name,
    placeholder,
    options,
    defaultValue = '',
    onChange = () => {}
}) {
    return (
        <ReactSelect
            name={name}
            placeholder={placeholder}
            options={[...options]}
            defaultValue={defaultValue}
            onChange={onChange}
            components={{ Option: IconOption }}
        />
    );
}
