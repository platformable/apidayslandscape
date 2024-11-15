export const reduceThounsand=(total)=>{
 let result = total
 if(total.length>=4){

  result= `$${total /1000}K`

 }

  return result
}


export const reduceMillion=(total)=>{

    let result
    if(Number(total.length)>=7){

     result= `${(Number(total) / 1000000).toFixed(2)}M`

    }

     return result
   }