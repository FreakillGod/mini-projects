const reducer=(state,action)=>{
    if(action.type==='CLEAR_CART'){
        return {...state,cart:[]}
    }if(action.type==='REMOVE_ITEM'){
        return {...state,cart:state.cart.filter((cartItem)=>cartItem.id !== action.payload)}
    }
    if(action.type==='INCREASE'){
        let newCart=state.cart.map((item)=>{
            if(item.id===action.payload){
                return {...item,amount:item.amount+1}
            }
            return item;
        })
        return {...state,cart:newCart}
    }
    if(action.type==='DECREASE'){
        const newAmount=state.cart.map((item)=>{
            if(item.id===action.payload){
                return{...item,amount:item.amount-1}
            }
            return item;
        }).filter((item)=>item.amount > -1)

        return {...state,cart:newAmount}
    }if(action.type==='TOTAL'){
        let{total,amount}=state.cart.reduce((totalAmount,currentItem)=>{
            const{price,amount}=currentItem;

            let itemTotal=amount*price;

            totalAmount.total+=itemTotal;
            totalAmount.amount+=amount;

            return totalAmount;
        },{total:0,amount:0})
        total=parseFloat(total.toFixed(2))
        
        return{...state,total,amount}
    }
    if(action.type==='LOADING'){
        return{...state,loading:false}
    }if(action.type==='LOAD_ITEMS'){
        
        return{...state,cart:action.payload,loading:false}
    }if(action.type=='HANDLE_AMOUNT'){
        let alterAmount=state.cart.map((items)=>{
            if(items.id===action.payload.id){
                if(action.payload.type=='inc'){
                    return {...items,amount:items.amount+1}
                }
                if(action.payload.type=='dec'){
                    return {...items,amount:items.amount-1}
                }
            }return items;
        }).filter((item)=>item.amount > -1)


        return{...state,cart:alterAmount}
    }

    return state;

}

export default reducer