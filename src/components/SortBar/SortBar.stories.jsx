import { SortBar } from "./SortBar";

export default {
    title: 'Components/SortBar',
    component: SortBar,
    parameters: {
        componentSubtitle: 'Components > SortBar',
        layout: 'centered',
    },
    args: {
        onSort: () => { }
    },
    argTypes: {
        onSort: {
            description: 'Handler function'
        }
    }
}
/** Применимость: Pages > FavoritesPage */

export const Basic = {}
