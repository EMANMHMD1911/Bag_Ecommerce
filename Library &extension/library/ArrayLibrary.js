export function Ascending_order(array){
    for (var i=0;i<array.length;i++ ){
        for(var j=i;j<array.length;j++){
            if (array[i]>array[j]){
                var temp=array[i]
                array[i]=array[j]
                array[j]=temp
            }

        }
    }
    return array
}

export function Descending_order(array){
    for (var i=0;i<array.length;i++ ){
        for(var j=i;j<array.length;j++){
            if (array[i]<array[j]){
                var temp=array[i]
                array[i]=array[j]
                array[j]=temp
            }

        }
    }
    return array
}

export function Print_array(array){
    for (var i=0;i<array.length;i++ ){
       console.log(array[i])
    }
}

export function Find_Findex(array,element){
    for (var i=0;i<array.length;i++ ){
       if(array[i]==element){
        return i;
       }
    }
    return -1
}

export function Find_Lindex(array,element){
    for (var i=array.length-1;i>=0;i-- ){
       if(array[i]==element){
           return i;
       }
    }
    return -1
}

export function insertelement(array,element,index){
    var arr=[]
    
    for (var i=0,j=0;i<=array.length;i++ ,j++){
         if (i==index){
            arr[i]=element
            i++
         }
         arr[i]=array[j]

     }
     return arr
}

export function deleteelement(array,index){
    
    for (var i=index;i<array.length;i++ )
       {
            array[i]=array[i+1]
       }
    array.length--
    return array
}



