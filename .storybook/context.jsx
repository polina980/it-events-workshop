import {useFiltersContext} from "../src/utils/context/SearchFilterContext";
import {useFilter} from "../src/utils/hooks/useFilter";

export function useStoryContext() {
    const context = useFiltersContext();
    const filter = useFilter(context);

    return { ...context, ...filter };
}