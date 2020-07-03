import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-final-form";

export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
    };
  }
  next = (values) =>
    this.setState((state) => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }));

  previous = () =>
    this.setState((state) => ({
      page: Math.max(state.page - 1, 0),
    }));

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = (values) => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        
      >
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit} >
            {activePage}
            <div className="flex flex-no-wrap mx-auto justify-end text-1xl" >
              {page > 0 && (
                <div className="text-orange font-semibold text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 border-2 border-orange">
                  <button type="button" onClick={this.previous}>
                    Späť
                  </button>
                </div>
              )}
              {!isLastPage && (
                <div className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4">
                <button
                  type="submit"
                  
                >
                  Ďalej
                </button>
                </div>
              )}
              {isLastPage && (
                <div className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4">
                  <button type="submit" disabled={submitting}>
                    Dokončiť
                  </button>
                </div>
              )}
            </div>
          </form>
        )}
      </Form>
    );
  }
}
