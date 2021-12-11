import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";

const initialState = {
    list: [],
    favourites: [],
    showFav: false
}

export function movies(state = initialState, action) {
    // if (action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list: action.movies
    //     };
    // }
    // return state;
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            };
        case ADD_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const fliteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            )
            return {
                ...state,
                favourites: fliteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFav: action.val
            }
        default:
            return state;
    }
}
const initialSearchState = {
    result: {}
}
export function search(state = initialSearchState, action) {
    return state;
}

const initialRootState = {
    movies: initialState,
    search: initialSearchState
}
// export default function rootReducer(state = initialRootState, action) {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }
export default combineReducers(
    {
        movies, //used shorthand here 
        search
    }
)