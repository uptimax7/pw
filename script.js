// var constraints = {
//     audio: true,
// };
// navigator.mediaDevices.getUserMedia(constraints).then(mediaStreamObj=>{
//     var video = document.querySelector('video');
//     if('srcObject' in video){
        
//     }

//     mediaRecoder = new MediaRecorder(mediaStreamObj);
//     fileReader = new FileReader();
//     chunks = [];    

//     document.querySelector('.start').addEventListener('click', evt =>{
//         mediaRecoder.start();
//         console.log(mediaRecoder.state);
//     });

//     document.querySelector('.stop').addEventListener('click', evt=>{
//         mediaRecoder.stop();
//         console.log(mediaRecoder.state);
//     });
//     mediaRecoder.ondataavailable = function(ev){ 
//         chunks.push(ev.data);
//         recorder = new Blob(chunks, {'type':"audio/mp3"});
//         audioSrc = window.URL.createObjectURL(recorder);
//         video.src = audioSrc;
//      };
//     mediaRecoder.onstop = ev=>{

//     }
// })

if('serviceWorker' in navigator){
     navigator.serviceWorker.register('sw.js').then(reg=>{
         console.log(reg);
     })
}

// var swready = await navigator.serviceWorker.ready;
// sub = swready.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerId: '11221'
// });