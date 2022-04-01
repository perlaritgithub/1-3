let array=[3,4,6,2,3,645,2,3,6,83,23,13];
function binarysearch(arr,value){
   let high = arr.length-1;
   let low=0;
   let mid=0;
   while(low<=high){
       mid=Math.floor((high+low)/2)
       if(arr[mid] == value){

        return arr[mid];

        
       }
       else if(value>arr[mid]){
           low=mid+1;
       }else{
           high=mid-1;
       }
   }
   return -1;
}
let sorted = array.sort(function(a,b){return a-b});
console.log(sorted);
let wasItFound=binarysearch(sorted,83);
console.log(wasItFound);