import axios from "axios";

// API Call based on a 'url' passed as argument
const getProperties = async (url) => {
    try {
        const response = await axios.get(url);

        // Check if the request was successful (status code 2xx)
        if (response.status >= 200 && response.status < 300) {
            // Check if data is available
            if (response.data) {
                return response.data;
            } else {
                throw new Error("Response data is empty");
            }
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
    }
};

// Build url dynamically based on user's filtering options
const buildUrl = (filterOptions) => {
    const url = `/api/search?${Object.entries(filterOptions)
        .filter(([key, value]) => value) // only truthy values
        .map(([key, value]) => {
            // Format the date object to YYYY-MM-DD
            if (key === "datePicker") {
                const year = value.getFullYear().toString();
                const month = value.getMonth() + 1;
                const day = value.getDate().toString();
                const formattedDate = `${year}-${month}-${day}`;
                return `${encodeURIComponent(key)}=${encodeURIComponent(
                    formattedDate
                )}`;
            }
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`; // key=value biuld here
        })
        .join("&")}`;
    return url;
};

// Convert numbers in currency
function formatCurrency(amount) {
    return amount?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&.");
}

export { getProperties, buildUrl, formatCurrency };
