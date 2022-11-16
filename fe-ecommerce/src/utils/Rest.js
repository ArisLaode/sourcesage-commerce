import axios from 'axios';

const config = {
    headers: {
        'Accept': '*',
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
    }
}

const Rest = {

    async get(url) {
		let response = await axios.get(url);
		return response.data;
    },

    async post(url, data) {
		let response = await axios.post(url, data, config);
		return response.data;
    },

}


export default Rest;