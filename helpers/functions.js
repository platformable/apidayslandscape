export const reduceThounsand=(total)=>{
 let result = total
 if(total.length>=4){

  result= `$${total /1000}K`

 }

  return result
}


export const reduceMillion=(total)=>{

    let result
    if(total.length>=7){

     result= `${(total / 1000000).toFixed(2)}M`

    }
 
     return result
   }