const contextState = {
    filterOptions: {
        apartment: false,
        house: false,
        "1kk": false,
        "1plus1": false,
        "2kk": false,
        "2plus1": false,
        "3kk": false,
        "3plus1": false,
        "4kk": false,
        bigger: false,
        amountFrom: null,
        amountTo: null,
        searchFieldValue: "",
        sizeFrom: null,
        sizeTo: null,
        furnished: false,
        partialy: false,
        unfurnished: false,
        balcony: false,
        wheelchair: false,
        basement: false,
        parking: false,
        garden: false,
        pets: false,
        datePicker: null,
    },

    showPropertyDetail: null,
    showEditForm: false,
    fetchOnResultsPage: false,
    markers: [],
    center: null,
    zoom: null,
    activePin: null
    // markersMultiple: []
};

export default contextState;
