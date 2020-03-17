import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NewComponent from "pages/New";

import store from "__mocks__/store";

describe("Given <NewComponent />", () => {
  let component;
  let Page;

  beforeAll(() => {
    Page = props => (
      <Provider store={store}>
        <MemoryRouter>
          <NewComponent {...props} />
        </MemoryRouter>
      </Provider>
    );
  });

  describe("When it initializes", () => {
    beforeEach(() => {
      const { container } = render(<Page />);
      component = container;
    });

    it("Then should match the snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
