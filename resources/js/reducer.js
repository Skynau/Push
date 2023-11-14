export default function reducer(state, action) {
    switch (action.type) {
        case "APARTMENT_TOGGLE":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.apartment
                    ? (newState.filterOptions.apartment = false)
                    : (newState.filterOptions.apartment = true);
                console.log(newState);
                return newState;
            }
            break;
        case "HOUSE_TOGGLE":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.house
                    ? (newState.filterOptions.house = false)
                    : (newState.filterOptions.house = true);
                console.log(newState);
                return newState;
            }
            break;
        case "1kk_TOGGLE":
            if (state) {
                const newState = { ...state };
                newState.filterOptions["1kk"]
                    ? (newState.filterOptions["1kk"] = false)
                    : (newState.filterOptions["1kk"] = true);
                console.log(newState);
                return newState;
            }
            break;

        case "1plus1_TOGGLE":
            if (state) {
                const newState = { ...state };
                newState.filterOptions["1+1"]
                    ? (newState.filterOptions["1+1"] = false)
                    : (newState.filterOptions["1+1"] = true);
                console.log(newState);
                return newState;
            }
            break;

        case "2kk_TOGGLE":
            if (state) {
                const newState = { ...state };
                newState.filterOptions["2kk"]
                    ? (newState.filterOptions["2kk"] = false)
                    : (newState.filterOptions["2kk"] = true);
                console.log(newState);
                return newState;
            }
            break;

        case "2plus1_TOGGLE":
            if (state) {
                const newState = { ...state };
                newState.filterOptions["2+1"]
                    ? (newState.filterOptions["2+1"] = false)
                    : (newState.filterOptions["2+1"] = true);
                console.log(newState);
                return newState;
            }
            break;

        case "3kk_TOGGLE":
            if (state) {
                const newState = { ...state };
                newState.filterOptions["3kk"]
                    ? (newState.filterOptions["3kk"] = false)
                    : (newState.filterOptions["3kk"] = true);
                console.log(newState);
                return newState;
            }
            break;

        case "3plus1_TOGGLE":
            if (state) {
                const newState = { ...state };
                newState.filterOptions["3+1"]
                    ? (newState.filterOptions["3+1"] = false)
                    : (newState.filterOptions["3+1"] = true);
                console.log(newState);
                return newState;
            }
            break;

        case "4kk_TOGGLE":
            if (state) {
                const newState = { ...state };
                newState.filterOptions["4kk"]
                    ? (newState.filterOptions["4kk"] = false)
                    : (newState.filterOptions["4kk"] = true);
                console.log(newState);
                return newState;
            }
            break;
        case "bigger_TOGGLE":
            if (state) {
                const newState = { ...state };
                newState.filterOptions["bigger"]
                    ? (newState.filterOptions["bigger"] = false)
                    : (newState.filterOptions["bigger"] = true);
                console.log(newState);
                return newState;
            }
            break;
        case "BUDGET_FROM":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.amountFrom = action.payload;
                console.log(newState);
                return newState;
            }
            break;
        case "BUDGET_TO":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.amountTo = action.payload;
                console.log(newState);
                return newState;
            }
            break;
        case "DROPDOWN":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.searchFieldValue = action.payload;
                console.log(newState);
                return newState;
            }
            break;
        case "SEARCH_QUERY":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.searchFieldValue = action.payload;
                console.log(newState);
                return newState;
            }
            break;
        case "SIZE_FROM":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.sizeFrom = action.payload;
                console.log(newState);
                return newState;
            }
            break;
        case "SIZE_TO":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.sizeTo = action.payload;
                console.log(newState);
                return newState;
            }
            break;
        case "FURNISHED_TOGGLE":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.furnished
                    ? (newState.filterOptions.furnished = false)
                    : (newState.filterOptions.furnished = true);
                console.log(newState);
                return newState;
            }
            break;

        case "UNFURNISHED_TOGGLE":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.unfurnished
                    ? (newState.filterOptions.unfurnished = false)
                    : (newState.filterOptions.unfurnished = true);
                console.log(newState);
                return newState;
            }
            break;
        case "PARTIALY_TOGGLE":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.partialyFurnished
                    ? (newState.filterOptions.partialyFurnished = false)
                    : (newState.filterOptions.partialyFurnished = true);
                console.log(newState);
                return newState;
            }
            break;

        case "BALCONY":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.balconyOrTerrace
                    ? (newState.filterOptions.balconyOrTerrace = false)
                    : (newState.filterOptions.balconyOrTerrace = true);
                console.log(newState);
                return newState;
            }
            break;

        case "WHEELCHAIR":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.wheelchairAccessible
                    ? (newState.filterOptions.wheelchairAccessible = false)
                    : (newState.filterOptions.wheelchairAccessible = true);
                console.log(newState);
                return newState;
            }
            break;

        case "BASEMENT":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.basement
                    ? (newState.filterOptions.basement = false)
                    : (newState.filterOptions.basement = true);
                console.log(newState);
                return newState;
            }
            break;
        case "PARKING":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.privateParking
                    ? (newState.filterOptions.privateParking = false)
                    : (newState.filterOptions.privateParking = true);
                console.log(newState);
                return newState;
            }
            break;

        case "GARDEN":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.garden
                    ? (newState.filterOptions.garden = false)
                    : (newState.filterOptions.garden = true);
                console.log(newState);
                return newState;
            }
            break;

        case "PETS":
            if (state) {
                const newState = { ...state };
                newState.filterOptions.petsWelcome
                    ? (newState.filterOptions.petsWelcome = false)
                    : (newState.filterOptions.petsWelcome = true);
                console.log(newState);
                return newState;
            }
            break;
        default:
            return state;
    }
}
