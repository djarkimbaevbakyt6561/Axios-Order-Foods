import axios from "axios"
export const fetchRequest = async (urlPath, options = {}) => {
    try {
        const url = 'http://ec2-3-70-250-130.eu-central-1.compute.amazonaws.com:5500/api/v1'
        const requestOptions = {
            method: options.method || "get",
            url: `${url}${urlPath}`,
            headers: {
                "Content-Type": "application/json",
                UserID: "Bakyt",
            },
        }
        if (options.data) {
            requestOptions.data = JSON.stringify(options.data)
        }
        const response = await axios(requestOptions);
        return response.data
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}