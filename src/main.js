var scroll = new ScrollWatcher();
const textEl = document.querySelector('.fsy-short-about')
const metricsContainer = document.querySelector('.fsy-about-metrics')
const shortAbout = ['Lifestyle Vlogger', 'Vlog bout travel', 'vlog bout new life / University', 'zaurus unsigned model']

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
 }
  
async function typeSentence(sentence, delay = 100) {
const letters = sentence.split("");
let i = 0;

while (i < letters.length) {
    await waitForMs(delay);
    textEl.append(letters[i])
    i++
}
return;
}
  
async function deleteText() {
    const sentence = textEl.innerText;
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        textEl.innerText = letters.join("");
    }
}
  
async function writeText(array) {
    let i = 0;
    while(true) {       
        await typeSentence(array[i]);
        await waitForMs(1500);
        await deleteText();
        await waitForMs(500);
    i++
    if(i >= array.length) {i = 0;}
    }
}

writeText(shortAbout)
/**counting animation for values */
scroll
  .watch(".fsy-about-metrics")
  .on("enter", function(evt) {    
    function counter(id, start, end, duration) {
        let obj = document.querySelector(id),        
         current = start,
         range = end - start,
         increment = end > start ? 1 : -1,
         step = Math.abs(Math.floor(duration / range)),
         timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if (current == end) {
           clearInterval(timer);
          }
         }, step);
       } 
    counter(".fsy-metrics-subscribers", 0, 100, 3000);
    counter(".fsy-metrics-videos", 0, 8, 3000);
    counter(".fsy-metrics-engagements", 0, 45, 3000);
  })

function sendMail(name, mail, subject, body) {
    const link = "mailto:heyferanmi@gmail.com"
             + `?cc=${mail}`
             + `&subject= + ${encodeURIComponent(`${subject}`)}`
             + "&body=" + encodeURIComponent(`Hi my name is ${name}, <br /> <br /> ${body}`)
    ;
    
    window.location.href = link;
}
document.querySelector('#fsy-form').addEventListener('submit', e => {
    e.preventDefault()
    let name = document.querySelector('#contact-name').value;
    let mail = document.querySelector('#contact-mail').value;
    let subject = document.querySelector('#contact-subject').value;
    let message = document.querySelector('#contact-message').value;
    sendMail(name, mail, subject, message)
})