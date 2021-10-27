function adduser(){
    player1name=document.getElementById("i1").value ;
    player2name=document.getElementById("i2").value;
    localStorage.setItem("player1",player1name);
    localStorage.setItem("player2",player2name);
    window.location="quiz_game_page.html";
}