function generateQuote() {
    let quoteIndex = Math.floor(Math.random()*quotes.length);
    var current_quote = quotes[quoteIndex];
    document.getElementById('quote').innerHTML = current_quote;

}
var quotes = ["Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action.",
         "Life is a difficult game. You can win it only by retaining your birthright to be a person",
         "The best brains of the nation may be found on the last benches of the classroom.",
         "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
         "Man needs difficulties in life because they are necessary to enjoy success.",
         "ou see, God helps only people who work hard. That principle is very clear.",
         "Be active! Take on responsibility! Work for the things you believe in. If you do not, you are surrendering your fate to others.",

       ]

function addQuote(){
    var addQuote1 = document.getElementById("newQuote").value;
    quotes.push(addQuote1);

    if(document.getElementById("newQuote").value===""){
       alert("Pleae enter an quote");
    }
    else
    {
        alert("quote added successfully");
    }
    document.getElementById("newQuote").value="";
}