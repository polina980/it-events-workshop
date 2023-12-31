import { FilterBar } from "./FilterBar";

export default {
    title: 'Components/FilterBar',
    component: FilterBar,
    parameters: {
        componentSubtitle: 'Components > FilterBar',
        layout: 'centered',
      },
    args: {
        onFilter: () => {}
    },
    argTypes: {
        onFilter: {
            description: 'Handler function'
        }
    }
}
/** Применимость: Pages > FavoritesPage */

export const Basic = {}