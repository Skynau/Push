export default function reducer(state, action) {
    if (!state) {
        return state;
    }
    const newState = { ...state };
    const toggleFilter = (filterKey) => {
        // Toggle the boolean value of the specified filterKey in the filterOptions object
        newState.filterOptions[filterKey] = !newState.filterOptions[filterKey];
    };

    switch (action.type) {
        case "APARTMENT_TOGGLE":
        case "HOUSE_TOGGLE":
        case "1kk_TOGGLE":
        case "1plus1_TOGGLE":
        case "2kk_TOGGLE":
        case "2plus1_TOGGLE":
        case "3kk_TOGGLE":
        case "3plus1_TOGGLE":
        case "4kk_TOGGLE":
        case "bigger_TOGGLE":
        case "FURNISHED_TOGGLE":
        case "UNFURNISHED_TOGGLE":
        case "PARTIALY_TOGGLE":
        case "BALCONY":
        case "WHEELCHAIR":
        case "BASEMENT":
        case "PARKING":
        case "GARDEN":
        case "PETS":
            toggleFilter(action.type.replace("_TOGGLE", "").toLowerCase());
            break;

        case "BUDGET_FROM":
            newState.filterOptions.amountFrom = action.payload;
            break;

        case "BUDGET_TO":
            newState.filterOptions.amountTo = action.payload;
            break;

        case "TOGGLE_MODAL":
            newState.showPropertyDetail = !newState.showPropertyDetail;
            break;

        case "SEARCH_QUERY":
            console.log(action);
            newState.filterOptions.searchFieldValue = action.payload;
            break;

        case "SIZE_FROM":
            newState.filterOptions.sizeFrom = action.payload;
            break;

        case "SIZE_TO":
            newState.filterOptions.sizeTo = action.payload;
            break;
        case "datePicker":
            newState.filterOptions.datePicker = action.payload;
            break;

        default:
            return state;
    }

    console.log(newState);
    return newState;
}
