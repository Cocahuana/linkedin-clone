export const TESTING_TEXT = "TESTING_TEXT";

export default function getTestingText () {
    return async function ( dispatch ) {
        try
        {
            return dispatch( {
                type: TESTING_TEXT,
                payload: "Estoy funcionando anashe",
            } );
        } catch ( error )
        {
            console.log( error );
        }
    };
}