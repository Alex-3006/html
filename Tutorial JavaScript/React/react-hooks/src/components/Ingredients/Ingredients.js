// import React, { useState, useEffect, useCallback } from 'react';
import React, { useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal'
import Search from './Search';
import useHttp from '../../hooks/http';

const ingredientReducer = (currentIngredients, action) => {
	switch (action.type) {
		case 'SET':
			return action.ingredients;
		case 'ADD':
			return [...currentIngredients, action.ingredient];
		case 'DELETE':
			return currentIngredients.filter(ing => ing.id !== action.id);
		default:
			throw new Error('Should not get there');
	}
};

// const httpReducer = (curhttpState, action) => {
// 	switch (action.type) {
// 		case 'SEND':
// 			return { loading: true, error: null };
// 		case 'RESPONSE':
// 			return { ...curhttpState, loading: false };
// 		case 'ERROR':
// 			return { loading: true, error: action.errorMessage };
// 		case 'CLEAR':
// 			return { ...curhttpState, error: null };
// 		default:
// 			throw new Error('Should not be reached');
// 	}
// }

const Ingredients = () => {
	const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
	// const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null })
	// const [userIngredients, setUserIngredients] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState();
	const { isLoading, error, data, sendRequest, reqExtra, reqIdentifier, clear } = useHttp();

	// useEffect(() => {
	// 	console.log('RENDERING INGREDIENTS');
	// })
	useEffect(() => {
		if (!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
			dispatch({ type: 'DELETE', id: reqExtra })
		} else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
			dispatch({
				type: 'ADD',
				ingredient: { id: data.name, ...reqExtra }
			});
		}
		// console.log('RENDERING INGREDIENTS', userIngredients);
		// dispatch({ type: 'DELETE', id: reqExtra })
		// }, [userIngredients])
	}, [data, reqExtra, reqIdentifier, isLoading, error])

	const filteredIngredientsHandler = useCallback(filteredIngredients => {
		// setUserIngredients(filteredIngredients);
		dispatch({ type: 'SET', ingredients: filteredIngredients });
	}, []);

	const addIngredinetHandler = useCallback(ingredient => {
		sendRequest(
			'https://react-hooks-update-1873a-default-rtdb.firebaseio.com/ingredients.json',
			'POST',
			JSON.stringify(ingredient),
			ingredient,
			'ADD_INGREDIENT'
		)
		// // setIsLoading(true);
		// dispatchHttp({ type: 'SEND' });
		// fetch('https://react-hooks-update-1873a-default-rtdb.firebaseio.com/ingredients.json', {
		// 	method: 'POST',
		// 	body: JSON.stringify(ingredient),
		// 	headers: { 'Content-Type': 'application/json' }
		// }).then(response => {
		// 	// setIsLoading(false);
		// 	dispatchHttp({ type: 'RESPONSE' });
		// 	return response.json();
		// }).then(responseData => {
		// 	// setUserIngredients(prevIngredients => [
		// 	// 	...prevIngredients,
		// 	// 	// { id: Math.random().toString(), ...ingredient }
		// 	// 	{ id: responseData.name, ...ingredient }
		// 	// ]);
		// dispatch({
		// 	type: 'ADD',
		// 	ingredient: { id: responseData.name, ...ingredient }
		// });
		// });
	}, [sendRequest]);

	const removeIngredientHandler = useCallback(ingredientId => {
		// setIsLoading(true);
		// dispatchHttp({ type: 'SEND' });
		// fetch(`https://react-hooks-update-1873a-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, {
		// 	method: 'DELETE',
		// }).then(response => {
		// 	// setIsLoading(false);
		// 	dispatchHttp({ type: 'RESPONSE' });
		// 	// setUserIngredients(prevIngredients =>
		// 	// 	prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
		// 	// );
		// 	dispatch({ type: 'DELETE', id: ingredientId });
		// }).catch(error => {
		// 	// setError(error.message);
		// 	// setError('Something went wrong!');
		// 	// setIsLoading(false);
		// 	dispatchHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' });
		// });
		sendRequest(`https://react-hooks-update-1873a-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
			'DELETE',
			null,
			ingredientId,
			'REMOVE_INGREDIENT'
		);
		// }, []);
	}, [sendRequest]);

	// const clearError = () => {
	// 	// setError(null);
	// 	// dispatchHttp({ type: 'CLEAR' });
	// };

	const ingredientList = useMemo(() => {
		return (
			<IngredientList
				ingredients={userIngredients}
				onRemoveItem={removeIngredientHandler}
			/>
		);
	}, [userIngredients, removeIngredientHandler]);

	return (
		<div className="App">
			{error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
			{/* {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>} */}

			<IngredientForm
				onAddIngredient={addIngredinetHandler}
				loading={isLoading}
			// loading={httpState.loading}
			/>

			<section>
				<Search onLoadIngredients={filteredIngredientsHandler} />
				{/* <IngredientList
					ingredients={userIngredients}
					onRemoveItem={removeIngredientHandler}
				/> */}
				{ingredientList}
			</section>
		</div>
	);
}

export default Ingredients;
