import { GET_TAKES, GET_TAKE, DELETE_TAKE, ADD_TAKE } from '../actions/type';

const initialState = {
    takes: [],
    take: {},
    apiRedirect: false,
};

export default function (state = initialState, action) {


    switch (action.type) {
        case GET_TAKES:
            return {
                ...state,
                takes: action.payload.data,
                apiRedirect: action.payload.apiRedirect
            }
        case GET_TAKE:
            return {
                ...state,
                take: action.payload.data,
                apiRedirect: action.payload.apiRedirect
            }
        case ADD_TAKE:
            return {
                ...state,
                take: [...state.takes, action.payload.data],
                apiRedirect: action.payload.apiRedirect
            }
        case DELETE_TAKE:
            return {
                ...state,
                takes: state.takes.filter(take => take.id !== action.payload.data),
                apiRedirect: action.payload.apiRedirect
            }

        default:
            return state;
    }
}