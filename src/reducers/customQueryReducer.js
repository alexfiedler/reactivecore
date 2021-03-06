import { SET_CUSTOM_QUERY, REMOVE_COMPONENT } from '../constants';

export default function customQueryReducer(state = {}, action) {
	if (action.type === SET_CUSTOM_QUERY) {
		return {
			...state,
			[action.component]: action.query,
		};
	} else if (action.type === REMOVE_COMPONENT) {
		const { [action.component]: del, ...obj } = state;
		return obj;
	}

	return state;
}
