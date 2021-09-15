var identity = 1;
var sum = [0,0,0];

function addLikes(num){
    identity = num;
    var addLike = document.querySelector("#likes"+identity);
    sum[num]++;
    console.log(addLike);
    if (sum[num] < 2){
        addLike.innerText = sum[num] + " Like";
    }else{
        addLike.innerText = sum[num] + " Likes";
    }
    
    console.log(identity);
    console.log(num);
}
