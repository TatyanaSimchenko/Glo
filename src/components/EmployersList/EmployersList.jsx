import EmployersListItem from "../EmployersListItem/EmployersListItem";


import "./EmployersList.css";

const EmployersList = ({data, onDelete, onToggleProp}) => {
const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
        <EmployersListItem 
        key={id} 
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
        // onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
    )
})

    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    );
};

export default EmployersList;