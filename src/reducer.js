export const initialState = {
    basket :[],
    user : null,
}

//selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //adding to basket
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //cloning the basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //
                newBasket.splice(index,1);
            } else {
                console.warn ('waringggggg');
            }

            return {...state,basket:newBasket,};
        default:
            return state;
    }
}

export default reducer;
