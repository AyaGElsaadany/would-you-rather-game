const logger = (store) => (next) => (action) => {
    console.group(action.type);
        console.log('the action is : ', action.type);
        const res= next(action);
        console.log('the state is : ', store.getState());
    console.groupEnd();

    return res;    
}

export default logger