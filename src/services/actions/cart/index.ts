export const TESTING_TEXT = "TESTING_TEXT";

export default function getTestingText(): any {
	return async function (dispatch: any) {
		try {
			return dispatch({
				type: TESTING_TEXT,
				payload: "Estoy funcionando anashe",
			});
		} catch (error) {
			console.log(error);
		}
	};
}
