function logger(reducer) {
    return (function (PrevState,action) {
        console.group(action.type)
        console.log('Pre State:',PrevState);
        console.log(action);
        const nextStare = reducer(PrevState,action)
        console.log('Nexr State:',nextStare);
        console.groupEnd()
        return nextStare
    })
}
export default logger;