import {ADD_LIST,DELETE_LIST,TOGGLE, Edit_Todo, Edit_TEXT} from '../Actions/ActionTypes'
const initState=[]
const listReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_LIST:
            return state.concat({todo:action.payload,checked:false,edit:false})
            case DELETE_LIST:
            return state.filter((el,i)=>i!==action.payloadId)
            case TOGGLE:
                return state.map((el,i)=>{
                    if(i===action.payloadIndex){
                        return{...el,checked:!el.checked}
                    }
                else return {...el}
            })
            case Edit_Todo:
                return state.map((el,i)=>{
                     if(i===action.payloadId){
                         return{...el,todo:action.payload}
                     }
                })
                case Edit_TEXT:
                    return state.map((el,i)=>{
                        if(i===action.payload){return{...el,edit:!el.edit}}
                        else return{...el}
                    })
            default: return  state
        }
   
}
export default listReducer