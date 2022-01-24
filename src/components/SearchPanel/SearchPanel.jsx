import { Component } from "react/cjs/react.production.min";

import "./SearchPanel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

   render() {
    return (
        <div>
            <input type="text"
                className="form-control search-input"
                placeholder="Search staff" 
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        </div>
    )
   }
}

export default SearchPanel;