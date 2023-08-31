const initState={
    items:[],
    addItems:[],
    total:0
}
const cartReducer=(state=initState,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                total:state.total+addItems
            }
            case 'REMOVE_CART':
                return{
                    ...state,
                total:state.total-addItems

                }
                default:
                    return state
    }

}
export default cartReducer