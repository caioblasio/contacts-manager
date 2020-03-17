import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Container as ContactListContainer } from "containers/ContactList";

import store from "__mocks__/store";
import { data } from "__mocks__/api";

describe("Given <ContactListContainer />", () => {
  let defaultProps;
  let component;
  let Container;

  defaultProps = {
    data
  };

  beforeAll(() => {
    Container = props => (
      <Provider store={store}>
        <MemoryRouter>
          <ContactListContainer {...defaultProps} {...props} />
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
