/*
logger mostra quando uma ação é disparada e qual será o novo estado depois
que essa ação for disparada
*/

const logger = (store) => (next) => (action) =>{
    console.group(action.type)
        console.log('The action: ',action)
        const returnValue = next(action)
        console.log('The new state', store.getState())
    console.groupEnd()
    return returnValue
}

export default logger
