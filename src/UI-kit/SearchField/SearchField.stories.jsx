import {SearchField} from "./SearchField";

export default {
  title: 'Components/SearchFieldGroup',
  parameters: {
    componentSubtitle: 'Components > SearchField and MobileSearch',
  },
};

const StoryWrapper = ({ children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '650px',
      padding: '2em',
    }}
  >
    {children}
  </div>
);

/** Применимость: Pages > DesktopResolution */
export const DesktopSearch = () => {
  return (
    <StoryWrapper>
      <SearchField />
    </StoryWrapper>
  );
};
