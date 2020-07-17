
/*------------feetToMile-------------*/

function feetToMile(feet){
    var feetToMile = feet / 5280;
    return feetToMile;
}
var result = feetToMile(144);
console.log("FeetToMile : "+result);

/*-----------woodCalculator--------*/

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount= table  * 3;
    var bedCount = bed * 5;
    var totalCount=chairCount+tableCount+bedCount;
    return totalCount;
}
    var woodResult=woodCalculator(5, 6, 10);
    console.log("Chair Table Bed use to wood : "+woodResult);

/*----------brickCalculator------------*/

function brickCalculator(floor){
        var brick=0;
        var firstFloor=15*1000;
        var secondFloor=12*1000;
        var lastFloor=10*1000;
        if(floor>20){
            floor=floor-20;
            brick=floor*lastFloor;
            brick=brick+10*secondFloor;
            brick=brick+10*firstFloor;
        }else if(floor>10){
            floor=floor-10;
            brick=floor*secondFloor;
            brick=brick+(10*firstFloor);
        }else{
            brick=brick+(floor*firstFloor);
     }
        return brick;
}
    var result=brickCalculator(5);
    console.log("Total Building use Brick:"+result);
    
    
/*--------------tinyFriend---------------*/

function tinyFriend(nameFriends){
     var biggestName=nameFriends[0].length;
     var lowerName=nameFriends[0].length;
     var max=null;
     var min=null;
     for (var i = 0; i < nameFriends.length; i++) {
         if(biggestName<=nameFriends[i].length){
             biggestName=nameFriends[i].length;
             max=nameFriends[i];
         }
         if(lowerName>=nameFriends[i].length){
             lowerName=nameFriends[i].length;
             min=nameFriends[i];
         }
     }
    return min;
}
  var resultNames=tinyFriend(['Saiful-Islam','Mahi','Suvo-Akon','Tuhin-khan-Nirob','Sadia','Sufia']);
  console.log("This is friends Name:"+resultNames);



