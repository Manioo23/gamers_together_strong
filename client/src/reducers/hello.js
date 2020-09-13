import {
	ADD_HELLO,
	REMOVE_HELLO
} from '../actions/actionTypes';

const initialState = {
	helloCount: 1
};

export default function helloReducer(state = initialState, action) {
	switch (action.type) {
	case ADD_HELLO:
		return {
			...state, 
			helloCount: state.helloCount + 1
		};
	case REMOVE_HELLO:
		return {
			...state,
			helloCount: Math.max(state.helloCount - 1, 0)
		};
	default:
		return { ...state };
	}
}
