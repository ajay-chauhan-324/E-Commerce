

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : 
    localStorage.getItem("CART")?JSON.parse(localStorage.getItem("CART")) : []
    
      
    
};

const cartSlice = createSlice({
    name : "cart",
    initialState,

    reducers : {
        addToCart : (state,reqData)=>{
                  let {cartObj} = reqData.payload;
                  state.items = [ cartObj , ...state.items ]
                  localStorage.setItem("CART",JSON.stringify(state.items))
        },
          removeToCart : (state,reqData)=>{
              const {id} = reqData.payload;
              state.items = state.items.filter((obj)=>obj.id !=id)
               localStorage.setItem("CART",JSON.stringify(state.items))
        },
       
          changeToCart : (state,reqData)=>{
              const {id,finalQty} = reqData.payload;
              state.items = state.items.filter((obj)=>
                
                {
                  if(obj.id==id){
                    obj['qty']=finalQty
                  }
                  return obj
                }
            )
            localStorage.setItem("CART",JSON.stringify(state.items))
        },
    },
});


export const { addToCart , removeToCart , changeToCart} = cartSlice.actions;

export default cartSlice.reducer;