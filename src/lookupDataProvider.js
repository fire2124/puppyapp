import React, { Component } from "react";
import lookupTablesService from "./services/lookupTablesService";

const LookupDataContext = React.createContext();
class LookupDataProvider extends Component {
    state = {
        lookupData: null
    }

    async componentDidMount() {
        const data = await lookupTablesService.getAllLookupData();
        this.setState({lookupData: data.data});
    }
    render() {
        return (
            <LookupDataContext.Provider value={this.state}>	
                {this.props.children}
            </LookupDataContext.Provider>
        )
    }
}
export { LookupDataProvider, LookupDataContext };