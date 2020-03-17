import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Container as NewContactContainer } from "containers/NewContact";

import store from "__mocks__/store";

describe("Given <NewContactsContainer />", () => {
  let defaultProps;
  let component;
  let Container;

  defaultProps = {
    addContact: () => {},
    routePush: () => {}
  };

  beforeAll(() => {
    Container = props => (
      <Provider store={store}>
        <MemoryRouter>
          <NewContactContainer {...defaultProps} {...props} />
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
