import axios from 'axios';

export const axiosWithAuth = (id) => {
    const token = localStorage.getItem('userToken');
    return axios.create({
        headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
            id: id,
        }
    });
};