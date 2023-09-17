import { DescriptionTabs } from "./DescriptionTabs";

export default {
    title: 'Components/DescriptionTabs',
    component: DescriptionTabs,
    parameters: {
        componentSubtitle: 'Components > DescriptionTabs',
        layout: 'centered',
      },
    args: {
        selectedEvent: {
            description: "DevOops — конференция от JUG Ru Group, посвященная практикам DevOps. Она объединяет специалистов по разработке и эксплуатации, чтобы в итоге все могли релизить чаще, а чинить быстрее и надежнее.",
            program: "Смотреть на сайте организатора",
            organizer: "Яндекс, Google, Amazon",
            partners: "VK"
        }
    },
    argTypes: {
        selectedEvent: {
            description: 'SelectedEvent is Event from API'
        }
    }
}

/** Применимость: Components > EventDescription */
export const Basic = {}