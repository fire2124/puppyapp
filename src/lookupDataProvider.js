import React, { Component } from "react";
import lookupTablesService from "./services/lookupTablesService";

const LookupDataContext = React.createContext();
class LookupDataProvider extends Component {
    state = {
        lookupData: null
    }

    render() {
        return (
            <LookupDataContext.Provider value={{
                lookupData: this.state.lookupData,
                loadLookupData: async () => {
                    const data = await lookupTablesService.getAllLookupData();
                    this.setState({
                        lookupData: data.data
                    });
                }
            }}>
                {this.props.children}
            </LookupDataContext.Provider>
        )
    }
}

export { LookupDataProvider, LookupDataContext };