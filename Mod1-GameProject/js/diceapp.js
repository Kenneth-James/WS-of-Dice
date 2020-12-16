//ONCE PAGE LOADS I ONLY WANT PLAYER TO HAVE ACCESS TO THE NEW GAME BUTTON 
//AND MAIN H TAG
//WAS GOING TO ADD A GIF OF "ASHY LARRY" FROM CHAPPELLE'S SHOW BUT IT LOOKED OUT OF PLACE *SIGH*

$("#story").hide();
$("p").hide();
$("img").hide();
$("form").hide();
$(".diceroll").hide();
$(".diceroll2").hide();
$("#newGameBtn").show();

//ONCE PLAYER CLICKS NEW GAME THIS FUNCTION RUNS HIDING THE NEW GAME BUTTON AND
//SHOWING THE STORY

function newCraps(){
    $("#story").show();
    $("p").show();
    $("form").show();
    $("#newGameBtn").hide();

}

//ONCE PLAYER ENTERS AMOUNT THEY WANT TO BET AND CLICK ON THE BET BUTTON
//THE STARTGAME FUNCTION RUNS
//DEFINETLY STRUGGLED/STRUGGLING WITH IMPLEMENTING BETTING FUNCTIONALITY


function startGame(){
   // alert(`Place Your Bet`);
   $("#story").hide();
   $("#image1").show();
   $("#image2").show();

    $("form").submit(function(e){
        e.preventDefault();
        $(".diceroll").show();
        $("#newGameBtn").hide();
    })
}

//AFTER BET IS PLACED AND BUTTON CLICKED THE firstRoll FUNCTION RUNS 
//DICE IMAGES ARE SELECTED AT RANDOM AND ADDED UP 
//AN IF STATEMENT RUNS (I TRIED TO USE || IN THE STATEMENT BUT THAT WAS BREAKING MY CODE)
//AFTER A TIP FROM ANGEL AND SEARCHING FOR ALTERNATIVES I FOUND OUT ABOUT SWITCH 

function firstRoll(){
    $(".diceroll2").hide();
    let round = '1';
    let randomNum1 = Math.floor(Math.random() * 6) + 1;
    let randomNum2 = Math.floor(Math.random() * 6) + 1;
    let firstRollTotal = randomNum1 + randomNum2;

    $(".diceroll").click(function() {
        $('#image1').attr("src", "./images/dice" + randomNum1 + ".png");
        $('#image2').attr("src", "./images/dice" + randomNum2 + ".png");
    })
                        //SWITCHHHHHHHHHHH
    if(round === '1'){
        switch(firstRollTotal){
//WAS STUCK HERE FOR A WHILE BECAUSE I HAD A HARD TIME FIGURING OUT WHY
//AN UNCOMMENTED .hide() .show() WOULD BREAKING THE RANDOM IMAGES PART OF THE CODE
            case 7:
            case 11:
                $(".diceroll").hide(); //when this gets uncommented janky things happen
                $("img").hide();
                $("form").hide();
                $("#newGameBtn").show();//when this gets uncommented janky things happen
                alert(`Got you a W`);
                break;
            
            case 2:
            case 3:
            case 12:
               $(".diceroll").hide(); //when this gets uncommented janky things happen
               $("img").hide();
               $("form").hide();
               $("#newGameBtn").show(); //when this gets uncommented janky things happen
               alert(`Hold the L`);
                break;
            
            default:
                $(".diceroll").hide(); //when this gets uncommented janky things happen
                $(".diceroll2").show(); //when this gets uncommented janky things happen
                alert(`Point Is ${firstRollTotal}`)
//HERE'S ME TYPING IN FRUSTRATION BELOW

                    //now i only get point is 8 and dice image doesnt change 4:12pm...ignore
                    //all i did was add the hide and show to the cases 4:12pm...ignore
        }
    }

}


//THE pointRoll() FUNCTION IS WHERE I REALIZED HOW IMPORTANT COMMENTS WERE...
//IT WORKED FINE FOR 2 DAYS AND THEN I DON'T KNOW WHAT I CHANGED BUT THE FUNCTIONALITY...
//STARTED ACTING STRANGE
function pointRoll(){
    $(".diceroll").hide();
     round = '2';
    let randomNum3 = Math.floor(Math.random() * 6) + 1;
    let randomNum4 = Math.floor(Math.random() * 6) + 1;
    let pointRollTotal = randomNum3 + randomNum4;

    $(".diceroll2").click(function() {
        $('#image1').attr("src", "./images/dice" + randomNum3 + ".png");
        $('#image2').attr("src", "./images/dice" + randomNum4 + ".png");
    })

    if(round === '2'){
        switch(pointRollTotal){
            case 7:
                $("#newGameBtn").show();
                $("p").hide();
                $("img").hide();
                $("form").hide();
                $(".diceroll2").hide();
              alert(`lose again`);
                break;
            
            case pointRollTotal:
               $("#newGameBtn").show();
               $("p").hide();
               $("img").hide();
               $("form").hide();
               $(".diceroll2").hide();
              alert(`win again`);
                break;

            default:
                alert(`Keep Rolling`);

                //why do i always win on the first click of pointRoll()??? 3:23pm
            
            
        }
    }



}



/*
IDK WHERE AND WHAT TO DO WITH THIS =(
//HOW DO I GET THE BET FUNCTION INVOLVED??


round = "1";
    let bank = 250;
    let theBet = $("#placeBetHere").val();

    if(theBet > bank){
        alert(`Can't bet what you don't have`);
    }else if(theBet === 0){
        alert(`Gotta put some money up`);
    }
*/

//got dice to roll...thats about it

//feels like I have all thats needed to make this work

//how do i make all this work together?????




//when i click roll button the first time images dont change 
//but it seems that the function still runs