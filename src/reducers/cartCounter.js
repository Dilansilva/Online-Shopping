const cartCounter = (state = 0,action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            if(state > 0){//if the state is greater than 0
                return state - 1;
            }else {//if the state is equal to 0
                return 0;
            }
        default:
            return state;
    }
}