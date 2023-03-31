var scores;

function OpeningCeremony(Race100M, LongJump, HighJump, AwardCeremony){
    setTimeout(function() {
        console.log("Let the games begin");
    }, 1000);
    scores = {red: 0, blue: 0, green: 0, yellow: 0};
    Race100M(scores, LongJump, HighJump, AwardCeremony);
}

function Race100M(scores, LongJump, HighJump, AwardCeremony){
    setTimeout(function(){
        var redSeconds= Math.floor(Math.random() * 6) + 10;
        var blueSeconds= Math.floor(Math.random() * 6) + 10;
        var greenSeconds= Math.floor(Math.random() * 6) + 10;
        var yellowSeconds= Math.floor(Math.random() * 6) + 10;

        var score = [
            { Seconds : redSeconds, color: "red"},
            { Seconds : blueSeconds, color: "blue" },
            { Seconds : greenSeconds, color: "green" },
            { Seconds : yellowSeconds, color: "yellow"}
        ]

        console.log('Current score', scores);

        score.sort(function(a,b){
            return a-b;
        })

        scores[score[0].color] = 50;
        scores[score[1].color] = 25;

        console.log("Updated scores:", scores);

        LongJump(scores, HighJump, AwardCeremony);
    },3000)
}

function LongJump(scores, HighJump, AwardCeremony){
    setTimeout(function(){
        var colors = ['red', 'blue', 'green', 'yellow'];
        var index = Math.floor(Math.random() * 4);
        var selectedColor = colors[index];
        console.log('Current score', scores);
        scores[selectedColor] = scores[selectedColor] + 150;
        console.log("Updated scores:", scores);
        HighJump(scores, AwardCeremony);
    },2000);
}

function HighJump(scores, AwardCeremony){
    var colors = ['red', 'blue', 'green', 'yellow'];
    console.log('Current score', scores);
    var color = prompt("Enter winner color:").trim(); //trim will get rid of the unwanted spaces.
    if(color && colors.includes(color)) scores[color] += 100; //color condition if null or empty return false.
    else console.log ("Event was cancelled");
    console.log("Updated scores:", scores);
    AwardCeremony(scores);
}

function AwardCeremony(scores){
    //{red : 120, blue : 100, green : 90, yello : 130}
    var scoresArray = [
        {scores : scores.red , color: "Red"},
        {scores : scores.blue , color: "Blue"},
        {scores : scores.green , color: "Green"},
        {scores : scores.yellow , color: "Yellow"}
    ];

    scoresArray.sort(function(a,b){ return b-a});

    console.log(`${scoresArray[0].color} came first ${scoresArray[0].score}`);
    console.log(`${scoresArray[1].color} came second ${scoresArray[1].score}`);
    console.log(`${scoresArray[2].color} came third ${scoresArray[2].score}`);
}


OpeningCeremony(Race100M, LongJump, HighJump, AwardCeremony);