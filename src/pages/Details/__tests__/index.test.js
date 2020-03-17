import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, queryByText } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Details as DetailsComponent } from "pages/Details";

import store from "__mocks__/store";

describe("Given <DetailsComponent />", () => {
  let defaultProps;
  let component;
  let Page;

  defaultProps = {
    back: () => {}
  };

  beforeAll(() => {
    Page = props => (
      <Provider store={store}>
        <MemoryRouter>
          <DetailsComponent {...defaultProps} {...props} />
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

  describe("When clicks on back", () => {
    let back;
    beforeEach(() => {
      back = jest.fn();
      const { container } = render(<Page back={back} />);
      component = container;
    });

    it("Then should call the back function", () => {
      fireEvent.click(queryByText(component, "Back"));
      expect(back).toHaveBeenCalled();
    });
  });
});
