import axios from 'axios';

export const getUser = async () => {
	try {
		return await axios.get('/api/user');
	} catch(err) {
		console.log('It did return an err');
		return err;
	}
};