function binbCreator(){
    const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    const vowels = ['a','e','i','o','u'];
    let binWord='binb'+vowels[Math.floor(Math.random()*vowels.length)];
    while(binWord.length<=8){
        binWord+=(Math.random()<0.5 ? consonants[Math.floor(Math.random()*consonants.length)] : vowels[Math.floor(Math.random()*vowels.length)]);
    }
    return binWord;
}
async function enviarScript(){
    let main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`)

    if(!textarea) throw new Error("Não há uma conversa aberta")
    const intervalId = setInterval(()=>{
        let bin = binbCreator();
        textarea.focus();
        document.execCommand('insertText', false, bin);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
    
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);
    },500);
    setTimeout(()=>{
        clearInterval(intervalId);
    },300000);
}
enviarScript();