import axios from "axios";
import {
    GET_USERS,
    DELETE_USER,
    GET_USER_DETAIL,
    GET_USER_BY_NAME
} from "./types"

import * as adapter from "./adapters";
import * as endpoint from "../endpoints"

export function getUsers () {
    return async function ( dispatch ) {
        try
        {
            const usersFromApi = await axios.get( endpoint.users );
            console.log( "Users from api:", usersFromApi );
            const formattedUsers = adapter.usersFromApi( usersFromApi.data );
            return dispatch( {
                type: GET_USERS,
                payload: formattedUsers,
            } );
        } catch ( error )
        {
            console.log( error );
        }
    };
}

export function deleteUserById ( id ) {
    return async function ( dispatch ) {
        try
        {
            const deletePerson = await axios.delete(
                endpoint.users + `/${ id }`
            );
            console.log( "User eliminated successfully" );
        } catch ( error )
        {
            console.log( error );
        }
    };
}
