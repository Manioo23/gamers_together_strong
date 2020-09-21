/** ActionCreators boilerplate file 
 * There you can put all your functions that return only actions for dispatch
 * ADD_HELLO as well as REMOVE_HELLO are only for scketch purpose 
 */

import {
	ADD_HELLO,
	REMOVE_HELLO
} from './actionTypes';

export function addHello() {
	return {
		type: ADD_HELLO
	};
}

export function removeHello() {
	return {
		type: REMOVE_HELLO
	};
}