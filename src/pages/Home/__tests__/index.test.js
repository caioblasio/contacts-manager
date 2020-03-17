import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import HomeComponent from "pages/Home";

import store from "__mocks__/store";

describe("Given <HomeComponent />", () => {
  let component;
  let Page;

  beforeAll(() => {
    Page = props => (
      <Provider store={store}>
        <MemoryRouter>
          <HomeComponent {...props} />
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
