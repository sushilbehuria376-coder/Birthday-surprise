const photos = [
  "photo1.jpg.jpeg",
  "photo2.jpg.jpeg",
  "photo3.jpeg",
  "photo4.jpg.jpeg",
  "photo5.jpeg",
  "photo6.jpg.jpeg"
];

let current = 0;

const slide = document.getElementById("slide");
slide.src = photos[0];

function changePhoto() {
    current++;
    if (current >= photos.length) {
        current = 0;
    }
    slide.src = photos[current];
}

setInterval(changePhoto, 3000);

function showLetter() {
    document.getElementById("letter").style.display = "block";
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
}
// =============================
// Typewriter Effect
// =============================

const message =
"A little surprise made with lots of care 💜";

let index = 0;

function typeWriter(){

    if(index < message.length){

        document.getElementById("typing").innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,60);

    }

}

typeWriter();


// =============================
// Floating Hearts
// =============================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animationDuration=(5+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,250);
// Secret Code Unlock

function unlockGift(){

let code = document.getElementById("secretCode").value;


if(code === "17092006"){

document.getElementById("giftBox").style.display="block";

document.getElementById("wrongCode").innerHTML=
"🎉 Correct Code! Your Surprise Is Ready ❤️";

}

else{

document.getElementById("wrongCode").innerHTML=
"❌ Wrong Code, Try Again ❤️";

}

}



// Open Gift

function openGift(){

document.getElementById("giftBox").innerHTML="🎁✨";

setTimeout(()=>{

document.getElementById("giftMessage").style.display="block";

},500);


}
