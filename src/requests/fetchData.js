import axios from 'axios';

export const fetchData = async data => {
    try {
        const response = await axios.get(data);
        return response.data;
    } catch (error) {
        throw new Error('Something wont wrong');
    }
};