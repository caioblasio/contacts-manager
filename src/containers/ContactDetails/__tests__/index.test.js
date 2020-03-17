import React from "react";
import { Provider } from "react-redux";
import { render, queryByText } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Container as ContactDetailsContainer } from "containers/ContactDetails";

import store from "__mocks__/store";
import { data } from "__mocks__/api";

describe("Given <ContactDetailsContainer />", () => {
  let defaultProps;
  let component;
  let Container;

  defaultProps = {
    contact: data[0]
  };

  beforeAll(() => {
    Container = props => (
      <Provider store={store}>
        <MemoryRouter>
          <ContactDetailsContainer {...defaultProps} {...props} />
        </MemoryRouter>
      </Provider>
    );
  });

  describe("When it initializes", () => {
    beforeEach(() => {
      const { container } = render(<Container />);
      component = container;
    });

    it("Then should match the snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
