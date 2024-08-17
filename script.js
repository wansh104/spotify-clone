console.log("Welcome to spotiffy");



let rewindButton=document.getElementById('rewind');
let songIndex=0;
let audioElement = new Audio('red/Vamp Anthem.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let currentSongIndex= 0;
let forwardButton = document.getElementById('forward');
let albumItems =Array.from(document.getElementsByClassName("album-item"));
let firenItem = Array.from(document.getElementsByClassName(" "))




let songs = [{songName:"Beno!", filepath:"red/Beno!.mp3",coverPath:"red-carti.png"},{songName:"Die4Guy", filepath:"red/Die4Guy.mp3",coverPath:"red-carti.png"},{songName:"F33l Lik3 Dyin", filepath:"red/F33l Lik3 Dyin.mp3",coverPath:"red-carti.png"},{songName:"Go2Damoon", filepath:"red/Go2Damoon.mp3",coverPath:"red-carti.png"},{songName:"ILoveUIHateU", filepath:"red/ILoveUIHateU.mp3",coverPath:"red-carti.png"},{songName:"Jump Out The House", filepath:"red/Jump Out The House.mp3",coverPath:"red-carti.png"},{songName:"M3tamorphosis", filepath:"red/M3tamorphosis.mp3",coverPath:"red-carti.png"},{songName:"New Tank", filepath:"red/New Tank.mp3",coverPath:"red-carti.png"},{songName:"Not Playing", filepath:"red/Not Playing.mp3",coverPath:"red-carti.png"},{songName:"Punk Monk", filepath:"red/Punk Monk.mp3",coverPath:"red-carti.png"},{songName:"Rockstar Made", filepath:"red/Rcokstar Made.mp3",coverPath:"red-carti.png"},{songName:"Sky", filepath:"red/Sky.mp3",coverPath:"red-carti.png"},{songName:"Stop Breathing", filepath:"red/Stop Breathing.mp3",coverPath:"red-carti.png"},{songName:"Vamp Anthem", filepath:"red/Vamp Anthem.mp3",coverPath:"red-carti.png"}]




let albumsArray=[{albumName:"Blonde",artist:"Frank Ocean" },{albumName:"In Rainbows",artist:"Radiohead" },{albumName:"Cry",artist:"CAS" },{albumName:"Circles",artist:"Mac Miller" },{albumName:"Graduation",artist:"Kanye West" },{albumName:"Currents",artist:"Tame Imapala" }
]

let friendsArray=[{friendName:"Blonde",listening:"Frank Ocean" ,listenAlbum:"Blonde"},{friendNameName:"In Rainbows",listening:"Radiohead",listenAlbum:"Blonde" },{friendName:"Cry",artist:"CAS",listenAlbum:"Blonde" },{friendName:"Circles",listening:"Mac Miller",listenAlbum:"Blonde" },{friendName:"Graduation",listening:"Kanye West" ,listenAlbum:"Blonde"},{friendName:"Currents",listening:"Tame Imapala" , listenAlbum:"Blonde" }
]






songItems.forEach((element, i)=>{
  console.log(element,i);
  
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

  
});
albumItems.forEach((element,i)=>{
  console.log(element,i)
  for(let j=0;j<albumItems.length;j++){
    element.getElementsByClassName("album-name")[0].innerText=albumsArray[i].albumName
    element.getElementsByClassName("artist")[0].innerHTML=albumsArray[i].artist
  }
});




masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime <=0){
    audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  }
  else{
    audioElement.pause();
  masterPlay.classList.remove('fa-pause-circle');
  masterPlay.classList.add('fa-play-circle');

  }
  

});
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
  console.log('timeUpdate');
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
  console.log(progress);
  myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
})

Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
  element.addEventListener('dblclick',(event)=>{
     songName=event.target.innerText;
     console.log('double lc')
     
   
    audioElement.src=`red/${songName}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    
    masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');



  })
})
Array.from(document.getElementsByClassName('Timestamp')).forEach((element)=>{
  element.addEventListener('dblclick',(event)=>{
     songName=event.target.innerText;
     
     
   
    audioElement.src=`red/${songName}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    
    masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');



  })
})
rewindButton.addEventListener('click', function() {
  audioElement.currentTime =0;
  audioElement.play(); 
});
forwardButton.addEventListener('click',()=>{
  currentSongIndex=(currentSongIndex+1)%songs.length;
  let nextSong=songs[currentSongIndex].songName;
  audioElement.src=`red/${nextSong }.mp3`;
  audioElement.currentTime=0;
  audioElement.play();
});


let searchBar=document.getElementById('searchBarContainer');

function search(){
  searchBar.style.display = "block";  // Change display to block on click
    // Optionally, focus the search input
    document.getElementById("searchBar").focus();
}

