import axios from 'axios';

axios.defaults.baseURL = 'https://6436c2243e4d2b4a12daf574.mockapi.io';

export const addContactApi = (contact) => {
    return axios.post('/contacts', contact).then(({ data }) => {
        console.log(data);
        return data;
  });
};

export const getContactsApi = () => {
    return axios
        .get('/contacts')
        .then(({ data }) =>{
            return data;
        }
    );
};

export const removeContactApi = (id) => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
