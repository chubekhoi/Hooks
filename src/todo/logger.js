
function logger(reducer) {


    return function (prevState,action) {
        console.group(action.type);
        console.log('prev State :',prevState);
        console.log('Action :',action);

        const newState = reducer(prevState,action)
        console.log('next State :',newState);

        console.groupEnd();
        
        return newState
    }
}

export default logger;