function Find(target, array)
{   var isExist=false;
    for(var i=0,lenx=array.length;i<lenx&&!isExist;i++){
        var end =array[0].length - 1;
        var start = 0;
        while (start<=end){
            var mid = parseInt(start+(end-start)/2);
            if(target==array[i][mid]){
                isExist=true;
                break;
            }else if(target>array[i][mid]){
                start   = mid+1;
            }else{
                end     = mid-1;
            }
        }
    }
    return isExist
}
// Find(10,[[1,2,3,4,5,6,10,12],[2,3,4,5,6,7,9,11],[3,4,5,6,7,8,12,16]])

