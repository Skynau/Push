import axios from "axios";

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

export { getProperties };
