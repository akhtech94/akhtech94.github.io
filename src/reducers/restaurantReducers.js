import {RESTAURANT_LIST_FAIL,
        RESTAURANT_LIST_SUCCESS,
        RESTAURANT_LIST_REQUEST
    } from '../constants/restaurantConstants'

    export const restaurantListReducer = ( states = { restaurants: [] }, actions ) => {
            switch(actions.type){
                    case RESTAURANT_LIST_SUCCESS:
                        return { restaurants : actions.payload}
                    case RESTAURANT_LIST_FAIL:
                        return { restaurants : actions.payload}
                    default : return states
            }
            

    }