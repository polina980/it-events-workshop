/** @type { import('@storybook/react').Preview } */
import "../src/index.scss";
import {FiltersProvider, useFiltersContext} from "../src/utils/context/SearchFilterContext";
import {useFilter} from "../src/utils/hooks/useFilter";
import {MemoryRouter} from "react-router-dom";
import {EventsProvider} from "../src/utils/context/EventsContext";

function ProviderWrapper({ children }) {
  return (
      <MemoryRouter>
        <FiltersProvider>
          <EventsProvider>
            {children}
          </EventsProvider>
        </FiltersProvider>
      </MemoryRouter>
  );
}

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
        <ProviderWrapper>
          <Story />
        </ProviderWrapper>
    ),
  ]
};

export default preview;
