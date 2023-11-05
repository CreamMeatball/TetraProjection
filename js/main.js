var vertex = [[-1,-1,-1,-1,-1,-1,-1,-1], [-1,-1,-1,-1,-1,-1,-1,-1], [-1,-1,-1,-1,-1,-1,-1,-1]]

var order = 0;

var sequence = 1;

var sequenceList = [];

var player1 = "player1";
var player2 = "player2";

function playerSetting() {
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;

    const colorOrder = document.getElementById("colorOrder");
    if (sequence%2 == 1) {
        colorOrder.innerHTML = String("선 (" + player1 + ")");
    }
    else if (sequence%2 == 0) {
        colorOrder.innerHTML = String("후 (" + player2 + ")");
    }
}

function button_click(id) {
    const button = document.getElementById(id);
    const viewOrder = document.getElementById("viewOrder");
    const colorOrder = document.getElementById("colorOrder");

    indexTemp = id.substr(6,3);
    index0 = parseInt(indexTemp.substr(0,1));
    index1 = parseInt(indexTemp.substr(2,1));
    console.log("index0 : ", index0, " index1 : ", index1);

    if (vertex[index0-1][index1-1] == -1) {
        playerSetting();

        button.innerHTML = sequence;
        button.style.color = "white";
        sequence += 1;

        sequenceList.push([index0, index1]);
        console.log("sequenceList : ", sequenceList);

        if (order == 0) {
            button.style.backgroundColor = "red";
            
            order = 1;
            colorOrder.innerHTML = String("후 (" + player2 + ")");
            colorOrder.style.color = "blue";
            vertex[index0 -1][index1 -1] = 0;
        }
        else if (order == 1) {
            button.style.backgroundColor = "blue";
            
            order = 0;
            colorOrder.innerHTML = String("선 (" + player1 + ")");
            colorOrder.style.color = "red";
            vertex[index0 -1][index1 -1] = 1;
        }
        colors();
        win();
    }
    else {
        alert("중복됐습니다.")
    }

    
}

function undo() {
    if (sequence == 1) return

    vertex[sequenceList[sequence-2][0]-1][sequenceList[sequence-2][1]-1] = -1;
    let buttonIndex = String("button" + sequenceList[sequence-2][0] + "_" + sequenceList[sequence-2][1]);
    const button = document.getElementById(buttonIndex);
    button.style.backgroundColor = "rgb(240, 240, 240)";
    button.innerHTML = "";
    if (order == 0) { order = 1; } else if ( order = 0 ) { order = 0; }

    const viewOrder = document.getElementById("viewOrder");
    const colorOrder = document.getElementById("colorOrder");
    if (order == 0) {
        colorOrder.innerHTML = String("선 (" + player1 + ")");
        colorOrder.style.color = "red";
    }
    else if (order == 1) {
        colorOrder.innerHTML = String("후 (" + player2 + ")");
        colorOrder.style.color = "blue";
    }



    sequenceList.pop();
    sequence -= 1;

    console.log("sequence :", sequence);

    colorsClear();
    colors();
}

function win() {
    // player1 = this.player1; <-- alert 안에 넣으려 했는데 안 됨.
    if ((vertex[0][0]==0)&&(vertex[0][1]==0)&&(vertex[0][2]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[0][0]==1)&&(vertex[0][1]==1)&&(vertex[0][2]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
    if ((vertex[0][2]==0)&&(vertex[0][3]==0)&&(vertex[0][4]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[0][2]==1)&&(vertex[0][3]==1)&&(vertex[0][4]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
    if ((vertex[0][4]==0)&&(vertex[0][5]==0)&&(vertex[0][6]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[0][4]==1)&&(vertex[0][5]==1)&&(vertex[0][6]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
    if ((vertex[0][6]==0)&&(vertex[0][7]==0)&&(vertex[0][8]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[0][6]==1)&&(vertex[0][7]==1)&&(vertex[0][8]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }

    if ((vertex[1][0]==0)&&(vertex[1][1]==0)&&(vertex[1][2]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[1][0]==1)&&(vertex[1][1]==1)&&(vertex[1][2]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
    if ((vertex[1][2]==0)&&(vertex[1][3]==0)&&(vertex[1][4]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[1][2]==1)&&(vertex[1][3]==1)&&(vertex[1][4]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
    if ((vertex[1][4]==0)&&(vertex[1][5]==0)&&(vertex[1][6]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[1][4]==1)&&(vertex[1][5]==1)&&(vertex[1][6]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
    if ((vertex[1][6]==0)&&(vertex[1][7]==0)&&(vertex[1][8]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[1][6]==1)&&(vertex[1][7]==1)&&(vertex[1][8]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
    
    if ((vertex[2][0]==0)&&(vertex[2][1]==0)&&(vertex[2][2]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[2][0]==1)&&(vertex[2][1]==1)&&(vertex[2][2]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
    if ((vertex[2][2]==0)&&(vertex[2][3]==0)&&(vertex[2][4]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[2][2]==1)&&(vertex[2][3]==1)&&(vertex[2][4]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
    if ((vertex[2][4]==0)&&(vertex[2][5]==0)&&(vertex[2][6]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[2][4]==1)&&(vertex[2][5]==1)&&(vertex[2][6]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
    if ((vertex[2][6]==0)&&(vertex[2][7]==0)&&(vertex[2][8]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[2][6]==1)&&(vertex[2][7]==1)&&(vertex[2][8]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }

    if ((vertex[0][1]==0)&&(vertex[1][1]==0)&&(vertex[2][1]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[0][1]==1)&&(vertex[1][1]==1)&&(vertex[2][1]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
    if ((vertex[0][3]==0)&&(vertex[1][3]==0)&&(vertex[2][3]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[0][3]==1)&&(vertex[1][3]==1)&&(vertex[2][3]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
    if ((vertex[0][5]==0)&&(vertex[1][5]==0)&&(vertex[2][5]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[0][5]==1)&&(vertex[1][5]==1)&&(vertex[2][5]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
    if ((vertex[0][7]==0)&&(vertex[1][7]==0)&&(vertex[2][7]==0)) { alert(String("선 플레이어(RED)가 승리하셨습니다.")); } if ((vertex[0][7]==1)&&(vertex[1][7]==1)&&(vertex[2][7]==1)) { alert(String("후 플레이어(BLUE)가 승리하셨습니다.")); }
}

function colorsClear() {
    const direction = ['XLeft', 'XRight', 'YFront', 'YBack'];
    const direction2 = ['ZUp', 'ZDown'];

    for (var i=1; i<=9; i++) {
        for (var direct of direction) {
            var button = document.getElementById(String("button"+direct+"_"+i));
            button.style.backgroundColor = "rgb(240, 240, 240)";
        }
    }

    for (var i=1; i<=8; i++) {
        for (var direct of direction2) {
            var button = document.getElementById(String("button"+direct+"_"+i));
            button.style.backgroundColor = "rgb(240, 240, 240)";
        }
    }
}

function colors() {
    colorXLeft();
    colorXRight();
    colorYFront();
    colorYBack();
    colorZUp();
    colorZDown();
}

function colorXLeft() {
    const buttonXLeft_1 = document.getElementById("buttonXLeft_1");
    const buttonXLeft_2 = document.getElementById("buttonXLeft_2");
    const buttonXLeft_3 = document.getElementById("buttonXLeft_3");
    const buttonXLeft_4 = document.getElementById("buttonXLeft_4");
    const buttonXLeft_5 = document.getElementById("buttonXLeft_5");
    const buttonXLeft_6 = document.getElementById("buttonXLeft_6");
    const buttonXLeft_7 = document.getElementById("buttonXLeft_7");
    const buttonXLeft_8 = document.getElementById("buttonXLeft_8");
    const buttonXLeft_9 = document.getElementById("buttonXLeft_9");

    // 1
    if (vertex[0][2] == 0) { buttonXLeft_1.style.backgroundColor = "red"; } else if (vertex[0][2] == 1) { buttonXLeft_1.style.backgroundColor = "blue"; }
    if (vertex[0][1] == 0) { buttonXLeft_1.style.backgroundColor = "red"; } else if (vertex[0][1] == 1) { buttonXLeft_1.style.backgroundColor = "blue"; }
    if (vertex[0][0] == 0) { buttonXLeft_1.style.backgroundColor = "red"; } else if (vertex[0][0] == 1) { buttonXLeft_1.style.backgroundColor = "blue"; }

    // 2
    if (vertex[0][3] == 0) { buttonXLeft_2.style.backgroundColor = "red"; } else if (vertex[0][3] == 1) { buttonXLeft_2.style.backgroundColor = "blue"; }
    if (vertex[0][7] == 0) { buttonXLeft_2.style.backgroundColor = "red"; } else if (vertex[0][7] == 1) { buttonXLeft_2.style.backgroundColor = "blue"; }

    // 3
    if (vertex[0][4] == 0) { buttonXLeft_3.style.backgroundColor = "red"; } else if (vertex[0][4] == 1) { buttonXLeft_3.style.backgroundColor = "blue"; }
    if (vertex[0][5] == 0) { buttonXLeft_3.style.backgroundColor = "red"; } else if (vertex[0][5] == 1) { buttonXLeft_3.style.backgroundColor = "blue"; }
    if (vertex[0][6] == 0) { buttonXLeft_3.style.backgroundColor = "red"; } else if (vertex[0][6] == 1) { buttonXLeft_3.style.backgroundColor = "blue"; }

    // 4
    if (vertex[1][4] == 0) { buttonXLeft_4.style.backgroundColor = "red"; } else if (vertex[1][4] == 1) { buttonXLeft_4.style.backgroundColor = "blue"; }
    if (vertex[1][5] == 0) { buttonXLeft_4.style.backgroundColor = "red"; } else if (vertex[1][5] == 1) { buttonXLeft_4.style.backgroundColor = "blue"; }
    if (vertex[1][6] == 0) { buttonXLeft_4.style.backgroundColor = "red"; } else if (vertex[1][6] == 1) { buttonXLeft_4.style.backgroundColor = "blue"; }

    // 5
    if (vertex[2][4] == 0) { buttonXLeft_5.style.backgroundColor = "red"; } else if (vertex[2][4] == 1) { buttonXLeft_5.style.backgroundColor = "blue"; }
    if (vertex[2][5] == 0) { buttonXLeft_5.style.backgroundColor = "red"; } else if (vertex[2][5] == 1) { buttonXLeft_5.style.backgroundColor = "blue"; }
    if (vertex[2][6] == 0) { buttonXLeft_5.style.backgroundColor = "red"; } else if (vertex[2][6] == 1) { buttonXLeft_5.style.backgroundColor = "blue"; }

    // 6
    if (vertex[2][3] == 0) { buttonXLeft_6.style.backgroundColor = "red"; } else if (vertex[2][3] == 1) { buttonXLeft_6.style.backgroundColor = "blue"; }
    if (vertex[2][7] == 0) { buttonXLeft_6.style.backgroundColor = "red"; } else if (vertex[2][7] == 1) { buttonXLeft_6.style.backgroundColor = "blue"; }

    // 7
    if (vertex[2][2] == 0) { buttonXLeft_7.style.backgroundColor = "red"; } else if (vertex[2][2] == 1) { buttonXLeft_7.style.backgroundColor = "blue"; }
    if (vertex[2][1] == 0) { buttonXLeft_7.style.backgroundColor = "red"; } else if (vertex[2][1] == 1) { buttonXLeft_7.style.backgroundColor = "blue"; }
    if (vertex[2][0] == 0) { buttonXLeft_7.style.backgroundColor = "red"; } else if (vertex[2][0] == 1) { buttonXLeft_7.style.backgroundColor = "blue"; }

    // 8
    if (vertex[1][2] == 0) { buttonXLeft_8.style.backgroundColor = "red"; } else if (vertex[1][2] == 1) { buttonXLeft_8.style.backgroundColor = "blue"; }
    if (vertex[1][1] == 0) { buttonXLeft_8.style.backgroundColor = "red"; } else if (vertex[1][1] == 1) { buttonXLeft_8.style.backgroundColor = "blue"; }
    if (vertex[1][0] == 0) { buttonXLeft_8.style.backgroundColor = "red"; } else if (vertex[1][0] == 1) { buttonXLeft_8.style.backgroundColor = "blue"; }

    // 9
    if (vertex[1][3] == 0) { buttonXLeft_9.style.backgroundColor = "red"; } else if (vertex[1][3] == 1) { buttonXLeft_9.style.backgroundColor = "blue"; }
    if (vertex[1][7] == 0) { buttonXLeft_9.style.backgroundColor = "red"; } else if (vertex[1][7] == 1) { buttonXLeft_9.style.backgroundColor = "blue"; }
}

function colorXRight() {
    const buttonXRight_1 = document.getElementById("buttonXRight_1");
    const buttonXRight_2 = document.getElementById("buttonXRight_2");
    const buttonXRight_3 = document.getElementById("buttonXRight_3");
    const buttonXRight_4 = document.getElementById("buttonXRight_4");
    const buttonXRight_5 = document.getElementById("buttonXRight_5");
    const buttonXRight_6 = document.getElementById("buttonXRight_6");
    const buttonXRight_7 = document.getElementById("buttonXRight_7");
    const buttonXRight_8 = document.getElementById("buttonXRight_8");
    const buttonXRight_9 = document.getElementById("buttonXRight_9");

    // 1
    if (vertex[0][6] == 0) { buttonXRight_1.style.backgroundColor = "red"; } else if (vertex[0][6] == 1) { buttonXRight_1.style.backgroundColor = "blue"; }
    if (vertex[0][5] == 0) { buttonXRight_1.style.backgroundColor = "red"; } else if (vertex[0][5] == 1) { buttonXRight_1.style.backgroundColor = "blue"; }
    if (vertex[0][4] == 0) { buttonXRight_1.style.backgroundColor = "red"; } else if (vertex[0][4] == 1) { buttonXRight_1.style.backgroundColor = "blue"; }

    // 2
    if (vertex[0][7] == 0) { buttonXRight_2.style.backgroundColor = "red"; } else if (vertex[0][7] == 1) { buttonXRight_2.style.backgroundColor = "blue"; }
    if (vertex[0][3] == 0) { buttonXRight_2.style.backgroundColor = "red"; } else if (vertex[0][3] == 1) { buttonXRight_2.style.backgroundColor = "blue"; }

    // 3
    if (vertex[0][0] == 0) { buttonXRight_3.style.backgroundColor = "red"; } else if (vertex[0][0] == 1) { buttonXRight_3.style.backgroundColor = "blue"; }
    if (vertex[0][1] == 0) { buttonXRight_3.style.backgroundColor = "red"; } else if (vertex[0][1] == 1) { buttonXRight_3.style.backgroundColor = "blue"; }
    if (vertex[0][2] == 0) { buttonXRight_3.style.backgroundColor = "red"; } else if (vertex[0][2] == 1) { buttonXRight_3.style.backgroundColor = "blue"; }

    // 4
    if (vertex[1][0] == 0) { buttonXRight_4.style.backgroundColor = "red"; } else if (vertex[1][0] == 1) { buttonXRight_4.style.backgroundColor = "blue"; }
    if (vertex[1][1] == 0) { buttonXRight_4.style.backgroundColor = "red"; } else if (vertex[1][1] == 1) { buttonXRight_4.style.backgroundColor = "blue"; }
    if (vertex[1][2] == 0) { buttonXRight_4.style.backgroundColor = "red"; } else if (vertex[1][2] == 1) { buttonXRight_4.style.backgroundColor = "blue"; }

    // 5
    if (vertex[2][0] == 0) { buttonXRight_5.style.backgroundColor = "red"; } else if (vertex[2][0] == 1) { buttonXRight_5.style.backgroundColor = "blue"; }
    if (vertex[2][1] == 0) { buttonXRight_5.style.backgroundColor = "red"; } else if (vertex[2][1] == 1) { buttonXRight_5.style.backgroundColor = "blue"; }
    if (vertex[2][2] == 0) { buttonXRight_5.style.backgroundColor = "red"; } else if (vertex[2][2] == 1) { buttonXRight_5.style.backgroundColor = "blue"; }

    // 6
    if (vertex[2][7] == 0) { buttonXRight_6.style.backgroundColor = "red"; } else if (vertex[2][7] == 1) { buttonXRight_6.style.backgroundColor = "blue"; }
    if (vertex[2][3] == 0) { buttonXRight_6.style.backgroundColor = "red"; } else if (vertex[2][3] == 1) { buttonXRight_6.style.backgroundColor = "blue"; }

    // 7
    if (vertex[2][6] == 0) { buttonXRight_7.style.backgroundColor = "red"; } else if (vertex[2][6] == 1) { buttonXRight_7.style.backgroundColor = "blue"; }
    if (vertex[2][5] == 0) { buttonXRight_7.style.backgroundColor = "red"; } else if (vertex[2][5] == 1) { buttonXRight_7.style.backgroundColor = "blue"; }
    if (vertex[2][4] == 0) { buttonXRight_7.style.backgroundColor = "red"; } else if (vertex[2][4] == 1) { buttonXRight_7.style.backgroundColor = "blue"; }

    // 8
    if (vertex[1][6] == 0) { buttonXRight_8.style.backgroundColor = "red"; } else if (vertex[1][6] == 1) { buttonXRight_8.style.backgroundColor = "blue"; }
    if (vertex[1][5] == 0) { buttonXRight_8.style.backgroundColor = "red"; } else if (vertex[1][5] == 1) { buttonXRight_8.style.backgroundColor = "blue"; }
    if (vertex[1][4] == 0) { buttonXRight_8.style.backgroundColor = "red"; } else if (vertex[1][4] == 1) { buttonXRight_8.style.backgroundColor = "blue"; }

    // 9
    if (vertex[1][7] == 0) { buttonXRight_9.style.backgroundColor = "red"; } else if (vertex[1][7] == 1) { buttonXRight_9.style.backgroundColor = "blue"; }
    if (vertex[1][3] == 0) { buttonXRight_9.style.backgroundColor = "red"; } else if (vertex[1][3] == 1) { buttonXRight_9.style.backgroundColor = "blue"; }
}

function colorYFront() {
    const buttonYFront_1 = document.getElementById("buttonYFront_1");
    const buttonYFront_2 = document.getElementById("buttonYFront_2");
    const buttonYFront_3 = document.getElementById("buttonYFront_3");
    const buttonYFront_4 = document.getElementById("buttonYFront_4");
    const buttonYFront_5 = document.getElementById("buttonYFront_5");
    const buttonYFront_6 = document.getElementById("buttonYFront_6");
    const buttonYFront_7 = document.getElementById("buttonYFront_7");
    const buttonYFront_8 = document.getElementById("buttonYFront_8");
    const buttonYFront_9 = document.getElementById("buttonYFront_9");

    // 1
    if (vertex[0][0] == 0) { buttonYFront_1.style.backgroundColor = "red"; } else if (vertex[0][0] == 1) { buttonYFront_1.style.backgroundColor = "blue"; }
    if (vertex[0][7] == 0) { buttonYFront_1.style.backgroundColor = "red"; } else if (vertex[0][7] == 1) { buttonYFront_1.style.backgroundColor = "blue"; }
    if (vertex[0][6] == 0) { buttonYFront_1.style.backgroundColor = "red"; } else if (vertex[0][6] == 1) { buttonYFront_1.style.backgroundColor = "blue"; }

    // 2
    if (vertex[0][1] == 0) { buttonYFront_2.style.backgroundColor = "red"; } else if (vertex[0][1] == 1) { buttonYFront_2.style.backgroundColor = "blue"; }
    if (vertex[0][5] == 0) { buttonYFront_2.style.backgroundColor = "red"; } else if (vertex[0][5] == 1) { buttonYFront_2.style.backgroundColor = "blue"; }

    // 3
    if (vertex[0][2] == 0) { buttonYFront_3.style.backgroundColor = "red"; } else if (vertex[0][2] == 1) { buttonYFront_3.style.backgroundColor = "blue"; }
    if (vertex[0][3] == 0) { buttonYFront_3.style.backgroundColor = "red"; } else if (vertex[0][3] == 1) { buttonYFront_3.style.backgroundColor = "blue"; }
    if (vertex[0][4] == 0) { buttonYFront_3.style.backgroundColor = "red"; } else if (vertex[0][4] == 1) { buttonYFront_3.style.backgroundColor = "blue"; }

    // 4
    if (vertex[1][2] == 0) { buttonYFront_4.style.backgroundColor = "red"; } else if (vertex[1][2] == 1) { buttonYFront_4.style.backgroundColor = "blue"; }
    if (vertex[1][3] == 0) { buttonYFront_4.style.backgroundColor = "red"; } else if (vertex[1][3] == 1) { buttonYFront_4.style.backgroundColor = "blue"; }
    if (vertex[1][4] == 0) { buttonYFront_4.style.backgroundColor = "red"; } else if (vertex[1][4] == 1) { buttonYFront_4.style.backgroundColor = "blue"; }

    // 5
    if (vertex[2][2] == 0) { buttonYFront_5.style.backgroundColor = "red"; } else if (vertex[2][2] == 1) { buttonYFront_5.style.backgroundColor = "blue"; }
    if (vertex[2][3] == 0) { buttonYFront_5.style.backgroundColor = "red"; } else if (vertex[2][3] == 1) { buttonYFront_5.style.backgroundColor = "blue"; }
    if (vertex[2][4] == 0) { buttonYFront_5.style.backgroundColor = "red"; } else if (vertex[2][4] == 1) { buttonYFront_5.style.backgroundColor = "blue"; }

    // 6
    if (vertex[2][1] == 0) { buttonYFront_6.style.backgroundColor = "red"; } else if (vertex[2][1] == 1) { buttonYFront_6.style.backgroundColor = "blue"; }
    if (vertex[2][5] == 0) { buttonYFront_6.style.backgroundColor = "red"; } else if (vertex[2][5] == 1) { buttonYFront_6.style.backgroundColor = "blue"; }

    // 7
    if (vertex[2][0] == 0) { buttonYFront_7.style.backgroundColor = "red"; } else if (vertex[2][0] == 1) { buttonYFront_7.style.backgroundColor = "blue"; }
    if (vertex[2][7] == 0) { buttonYFront_7.style.backgroundColor = "red"; } else if (vertex[2][7] == 1) { buttonYFront_7.style.backgroundColor = "blue"; }
    if (vertex[2][6] == 0) { buttonYFront_7.style.backgroundColor = "red"; } else if (vertex[2][6] == 1) { buttonYFront_7.style.backgroundColor = "blue"; }

    // 8
    if (vertex[1][0] == 0) { buttonYFront_8.style.backgroundColor = "red"; } else if (vertex[1][0] == 1) { buttonYFront_8.style.backgroundColor = "blue"; }
    if (vertex[1][7] == 0) { buttonYFront_8.style.backgroundColor = "red"; } else if (vertex[1][7] == 1) { buttonYFront_8.style.backgroundColor = "blue"; }
    if (vertex[1][6] == 0) { buttonYFront_8.style.backgroundColor = "red"; } else if (vertex[1][6] == 1) { buttonYFront_8.style.backgroundColor = "blue"; }

    // 9
    if (vertex[1][1] == 0) { buttonYFront_9.style.backgroundColor = "red"; } else if (vertex[1][1] == 1) { buttonYFront_9.style.backgroundColor = "blue"; }
    if (vertex[1][5] == 0) { buttonYFront_9.style.backgroundColor = "red"; } else if (vertex[1][5] == 1) { buttonYFront_9.style.backgroundColor = "blue"; }
}

function colorYBack() {
    const buttonYBack_1 = document.getElementById("buttonYBack_1");
    const buttonYBack_2 = document.getElementById("buttonYBack_2");
    const buttonYBack_3 = document.getElementById("buttonYBack_3");
    const buttonYBack_4 = document.getElementById("buttonYBack_4");
    const buttonYBack_5 = document.getElementById("buttonYBack_5");
    const buttonYBack_6 = document.getElementById("buttonYBack_6");
    const buttonYBack_7 = document.getElementById("buttonYBack_7");
    const buttonYBack_8 = document.getElementById("buttonYBack_8");
    const buttonYBack_9 = document.getElementById("buttonYBack_9");

    // 1
    if (vertex[0][4] == 0) { buttonYBack_1.style.backgroundColor = "red"; } else if (vertex[0][4] == 1) { buttonYBack_1.style.backgroundColor = "blue"; }
    if (vertex[0][3] == 0) { buttonYBack_1.style.backgroundColor = "red"; } else if (vertex[0][3] == 1) { buttonYBack_1.style.backgroundColor = "blue"; }
    if (vertex[0][2] == 0) { buttonYBack_1.style.backgroundColor = "red"; } else if (vertex[0][2] == 1) { buttonYBack_1.style.backgroundColor = "blue"; }

    // 2
    if (vertex[0][5] == 0) { buttonYBack_2.style.backgroundColor = "red"; } else if (vertex[0][5] == 1) { buttonYBack_2.style.backgroundColor = "blue"; }
    if (vertex[0][1] == 0) { buttonYBack_2.style.backgroundColor = "red"; } else if (vertex[0][1] == 1) { buttonYBack_2.style.backgroundColor = "blue"; }

    // 3
    if (vertex[0][6] == 0) { buttonYBack_3.style.backgroundColor = "red"; } else if (vertex[0][6] == 1) { buttonYBack_3.style.backgroundColor = "blue"; }
    if (vertex[0][7] == 0) { buttonYBack_3.style.backgroundColor = "red"; } else if (vertex[0][7] == 1) { buttonYBack_3.style.backgroundColor = "blue"; }
    if (vertex[0][0] == 0) { buttonYBack_3.style.backgroundColor = "red"; } else if (vertex[0][0] == 1) { buttonYBack_3.style.backgroundColor = "blue"; }

    // 4
    if (vertex[1][6] == 0) { buttonYBack_4.style.backgroundColor = "red"; } else if (vertex[1][6] == 1) { buttonYBack_4.style.backgroundColor = "blue"; }
    if (vertex[1][7] == 0) { buttonYBack_4.style.backgroundColor = "red"; } else if (vertex[1][7] == 1) { buttonYBack_4.style.backgroundColor = "blue"; }
    if (vertex[1][0] == 0) { buttonYBack_4.style.backgroundColor = "red"; } else if (vertex[1][0] == 1) { buttonYBack_4.style.backgroundColor = "blue"; }

    // 5
    if (vertex[2][6] == 0) { buttonYBack_5.style.backgroundColor = "red"; } else if (vertex[2][6] == 1) { buttonYBack_5.style.backgroundColor = "blue"; }
    if (vertex[2][7] == 0) { buttonYBack_5.style.backgroundColor = "red"; } else if (vertex[2][7] == 1) { buttonYBack_5.style.backgroundColor = "blue"; }
    if (vertex[2][0] == 0) { buttonYBack_5.style.backgroundColor = "red"; } else if (vertex[2][0] == 1) { buttonYBack_5.style.backgroundColor = "blue"; }

    // 6
    if (vertex[2][5] == 0) { buttonYBack_6.style.backgroundColor = "red"; } else if (vertex[2][5] == 1) { buttonYBack_6.style.backgroundColor = "blue"; }
    if (vertex[2][1] == 0) { buttonYBack_6.style.backgroundColor = "red"; } else if (vertex[2][1] == 1) { buttonYBack_6.style.backgroundColor = "blue"; }

    // 7
    if (vertex[2][4] == 0) { buttonYBack_7.style.backgroundColor = "red"; } else if (vertex[2][4] == 1) { buttonYBack_7.style.backgroundColor = "blue"; }
    if (vertex[2][3] == 0) { buttonYBack_7.style.backgroundColor = "red"; } else if (vertex[2][3] == 1) { buttonYBack_7.style.backgroundColor = "blue"; }
    if (vertex[2][2] == 0) { buttonYBack_7.style.backgroundColor = "red"; } else if (vertex[2][2] == 1) { buttonYBack_7.style.backgroundColor = "blue"; }

    // 8
    if (vertex[1][4] == 0) { buttonYBack_8.style.backgroundColor = "red"; } else if (vertex[1][4] == 1) { buttonYBack_8.style.backgroundColor = "blue"; }
    if (vertex[1][3] == 0) { buttonYBack_8.style.backgroundColor = "red"; } else if (vertex[1][3] == 1) { buttonYBack_8.style.backgroundColor = "blue"; }
    if (vertex[1][2] == 0) { buttonYBack_8.style.backgroundColor = "red"; } else if (vertex[1][2] == 1) { buttonYBack_8.style.backgroundColor = "blue"; }

    // 9
    if (vertex[1][5] == 0) { buttonYBack_9.style.backgroundColor = "red"; } else if (vertex[1][5] == 1) { buttonYBack_9.style.backgroundColor = "blue"; }
    if (vertex[1][1] == 0) { buttonYBack_9.style.backgroundColor = "red"; } else if (vertex[1][1] == 1) { buttonYBack_9.style.backgroundColor = "blue"; }
}

function colorZUp() {
    const buttonZUp_1 = document.getElementById("buttonZUp_1");
    const buttonZUp_2 = document.getElementById("buttonZUp_2");
    const buttonZUp_3 = document.getElementById("buttonZUp_3");
    const buttonZUp_4 = document.getElementById("buttonZUp_4");
    const buttonZUp_5 = document.getElementById("buttonZUp_5");
    const buttonZUp_6 = document.getElementById("buttonZUp_6");
    const buttonZUp_7 = document.getElementById("buttonZUp_7");
    const buttonZUp_8 = document.getElementById("buttonZUp_8");

    // 1
    if (vertex[2][0] == 0) { buttonZUp_1.style.backgroundColor = "red"; } else if (vertex[2][0] == 1) { buttonZUp_1.style.backgroundColor = "blue"; }
    if (vertex[1][0] == 0) { buttonZUp_1.style.backgroundColor = "red"; } else if (vertex[1][0] == 1) { buttonZUp_1.style.backgroundColor = "blue"; }
    if (vertex[0][0] == 0) { buttonZUp_1.style.backgroundColor = "red"; } else if (vertex[0][0] == 1) { buttonZUp_1.style.backgroundColor = "blue"; }

    // 2
    if (vertex[2][1] == 0) { buttonZUp_2.style.backgroundColor = "red"; } else if (vertex[2][1] == 1) { buttonZUp_2.style.backgroundColor = "blue"; }
    if (vertex[1][1] == 0) { buttonZUp_2.style.backgroundColor = "red"; } else if (vertex[1][1] == 1) { buttonZUp_2.style.backgroundColor = "blue"; }
    if (vertex[0][1] == 0) { buttonZUp_2.style.backgroundColor = "red"; } else if (vertex[0][1] == 1) { buttonZUp_2.style.backgroundColor = "blue"; }

    // 3
    if (vertex[2][2] == 0) { buttonZUp_3.style.backgroundColor = "red"; } else if (vertex[2][2] == 1) { buttonZUp_3.style.backgroundColor = "blue"; }
    if (vertex[1][2] == 0) { buttonZUp_3.style.backgroundColor = "red"; } else if (vertex[1][2] == 1) { buttonZUp_3.style.backgroundColor = "blue"; }
    if (vertex[0][2] == 0) { buttonZUp_3.style.backgroundColor = "red"; } else if (vertex[0][2] == 1) { buttonZUp_3.style.backgroundColor = "blue"; }

    // 4
    if (vertex[2][3] == 0) { buttonZUp_4.style.backgroundColor = "red"; } else if (vertex[2][3] == 1) { buttonZUp_4.style.backgroundColor = "blue"; }
    if (vertex[1][3] == 0) { buttonZUp_4.style.backgroundColor = "red"; } else if (vertex[1][3] == 1) { buttonZUp_4.style.backgroundColor = "blue"; }
    if (vertex[0][3] == 0) { buttonZUp_4.style.backgroundColor = "red"; } else if (vertex[0][3] == 1) { buttonZUp_4.style.backgroundColor = "blue"; }

    // 5
    if (vertex[2][4] == 0) { buttonZUp_5.style.backgroundColor = "red"; } else if (vertex[2][4] == 1) { buttonZUp_5.style.backgroundColor = "blue"; }
    if (vertex[1][4] == 0) { buttonZUp_5.style.backgroundColor = "red"; } else if (vertex[1][4] == 1) { buttonZUp_5.style.backgroundColor = "blue"; }
    if (vertex[0][4] == 0) { buttonZUp_5.style.backgroundColor = "red"; } else if (vertex[0][4] == 1) { buttonZUp_5.style.backgroundColor = "blue"; }

    // 6
    if (vertex[2][5] == 0) { buttonZUp_6.style.backgroundColor = "red"; } else if (vertex[2][5] == 1) { buttonZUp_6.style.backgroundColor = "blue"; }
    if (vertex[1][5] == 0) { buttonZUp_6.style.backgroundColor = "red"; } else if (vertex[1][5] == 1) { buttonZUp_6.style.backgroundColor = "blue"; }
    if (vertex[0][5] == 0) { buttonZUp_6.style.backgroundColor = "red"; } else if (vertex[0][5] == 1) { buttonZUp_6.style.backgroundColor = "blue"; }

    // 7
    if (vertex[2][6] == 0) { buttonZUp_7.style.backgroundColor = "red"; } else if (vertex[2][6] == 1) { buttonZUp_7.style.backgroundColor = "blue"; }
    if (vertex[1][6] == 0) { buttonZUp_7.style.backgroundColor = "red"; } else if (vertex[1][6] == 1) { buttonZUp_7.style.backgroundColor = "blue"; }
    if (vertex[0][6] == 0) { buttonZUp_7.style.backgroundColor = "red"; } else if (vertex[0][6] == 1) { buttonZUp_7.style.backgroundColor = "blue"; }

    // 8
    if (vertex[2][7] == 0) { buttonZUp_8.style.backgroundColor = "red"; } else if (vertex[2][7] == 1) { buttonZUp_8.style.backgroundColor = "blue"; }
    if (vertex[1][7] == 0) { buttonZUp_8.style.backgroundColor = "red"; } else if (vertex[1][7] == 1) { buttonZUp_8.style.backgroundColor = "blue"; }
    if (vertex[0][7] == 0) { buttonZUp_8.style.backgroundColor = "red"; } else if (vertex[0][7] == 1) { buttonZUp_8.style.backgroundColor = "blue"; }
}

function colorZDown() {
    const buttonZDown_1 = document.getElementById("buttonZDown_1");
    const buttonZDown_2 = document.getElementById("buttonZDown_2");
    const buttonZDown_3 = document.getElementById("buttonZDown_3");
    const buttonZDown_4 = document.getElementById("buttonZDown_4");
    const buttonZDown_5 = document.getElementById("buttonZDown_5");
    const buttonZDown_6 = document.getElementById("buttonZDown_6");
    const buttonZDown_7 = document.getElementById("buttonZDown_7");
    const buttonZDown_8 = document.getElementById("buttonZDown_8");

    // 1
    if (vertex[0][2] == 0) { buttonZDown_1.style.backgroundColor = "red"; } else if (vertex[0][2] == 1) { buttonZDown_1.style.backgroundColor = "blue"; }
    if (vertex[1][2] == 0) { buttonZDown_1.style.backgroundColor = "red"; } else if (vertex[1][2] == 1) { buttonZDown_1.style.backgroundColor = "blue"; }
    if (vertex[2][2] == 0) { buttonZDown_1.style.backgroundColor = "red"; } else if (vertex[2][2] == 1) { buttonZDown_1.style.backgroundColor = "blue"; }

    // 2
    if (vertex[0][1] == 0) { buttonZDown_2.style.backgroundColor = "red"; } else if (vertex[0][1] == 1) { buttonZDown_2.style.backgroundColor = "blue"; }
    if (vertex[1][1] == 0) { buttonZDown_2.style.backgroundColor = "red"; } else if (vertex[1][1] == 1) { buttonZDown_2.style.backgroundColor = "blue"; }
    if (vertex[2][1] == 0) { buttonZDown_2.style.backgroundColor = "red"; } else if (vertex[2][1] == 1) { buttonZDown_2.style.backgroundColor = "blue"; }

    // 3
    if (vertex[0][0] == 0) { buttonZDown_3.style.backgroundColor = "red"; } else if (vertex[0][0] == 1) { buttonZDown_3.style.backgroundColor = "blue"; }
    if (vertex[1][0] == 0) { buttonZDown_3.style.backgroundColor = "red"; } else if (vertex[1][0] == 1) { buttonZDown_3.style.backgroundColor = "blue"; }
    if (vertex[2][0] == 0) { buttonZDown_3.style.backgroundColor = "red"; } else if (vertex[2][0] == 1) { buttonZDown_3.style.backgroundColor = "blue"; }

    // 4
    if (vertex[0][7] == 0) { buttonZDown_4.style.backgroundColor = "red"; } else if (vertex[0][7] == 1) { buttonZDown_4.style.backgroundColor = "blue"; }
    if (vertex[1][7] == 0) { buttonZDown_4.style.backgroundColor = "red"; } else if (vertex[1][7] == 1) { buttonZDown_4.style.backgroundColor = "blue"; }
    if (vertex[2][7] == 0) { buttonZDown_4.style.backgroundColor = "red"; } else if (vertex[2][7] == 1) { buttonZDown_4.style.backgroundColor = "blue"; }

    // 5
    if (vertex[0][6] == 0) { buttonZDown_5.style.backgroundColor = "red"; } else if (vertex[0][6] == 1) { buttonZDown_5.style.backgroundColor = "blue"; }
    if (vertex[1][6] == 0) { buttonZDown_5.style.backgroundColor = "red"; } else if (vertex[1][6] == 1) { buttonZDown_5.style.backgroundColor = "blue"; }
    if (vertex[2][6] == 0) { buttonZDown_5.style.backgroundColor = "red"; } else if (vertex[2][6] == 1) { buttonZDown_5.style.backgroundColor = "blue"; }

    // 6
    if (vertex[0][5] == 0) { buttonZDown_6.style.backgroundColor = "red"; } else if (vertex[0][5] == 1) { buttonZDown_6.style.backgroundColor = "blue"; }
    if (vertex[1][5] == 0) { buttonZDown_6.style.backgroundColor = "red"; } else if (vertex[1][5] == 1) { buttonZDown_6.style.backgroundColor = "blue"; }
    if (vertex[2][5] == 0) { buttonZDown_6.style.backgroundColor = "red"; } else if (vertex[2][5] == 1) { buttonZDown_6.style.backgroundColor = "blue"; }

    // 7
    if (vertex[0][4] == 0) { buttonZDown_7.style.backgroundColor = "red"; } else if (vertex[0][4] == 1) { buttonZDown_7.style.backgroundColor = "blue"; }
    if (vertex[1][4] == 0) { buttonZDown_7.style.backgroundColor = "red"; } else if (vertex[1][4] == 1) { buttonZDown_7.style.backgroundColor = "blue"; }
    if (vertex[2][4] == 0) { buttonZDown_7.style.backgroundColor = "red"; } else if (vertex[2][4] == 1) { buttonZDown_7.style.backgroundColor = "blue"; }

    // 8
    if (vertex[0][3] == 0) { buttonZDown_8.style.backgroundColor = "red"; } else if (vertex[0][3] == 1) { buttonZDown_8.style.backgroundColor = "blue"; }
    if (vertex[1][3] == 0) { buttonZDown_8.style.backgroundColor = "red"; } else if (vertex[1][3] == 1) { buttonZDown_8.style.backgroundColor = "blue"; }
    if (vertex[2][3] == 0) { buttonZDown_8.style.backgroundColor = "red"; } else if (vertex[2][3] == 1) { buttonZDown_8.style.backgroundColor = "blue"; }
}