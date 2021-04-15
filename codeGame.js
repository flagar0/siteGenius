var seq;
var resp="";
var taman;
var testes=0;
var atv=false;
const diff= [1500, 1000,800,600,450]
var pts=0;
var score=0;

function Rodar(){
    if(atv==false){
    document.getElementById('corpo').style.cssText= 'background-color: #121212'
    resp="";
    testes=0;
    seq ="";
    pts=0;
        for(i=0;i<4;i++){
            seq = seq +getRandom(1,5).toString();
        }
        
        Leia(seq);
        atv=true;
    }
}
    
async function Leia(comb){
    document.getElementById('texto').innerHTML='Pts: '+pts;
    var pts1;
    if(pts>4){
        pts1=4;
    }else{
        pts1=pts;
    }
    taman = comb.length;
    for(i=0;i<taman;i++){
        switch(comb.substring(i,(i+1))){
            case "1":
                await sleep(500);  
                document.getElementById('azul').style.cssText= 'background-color: #87CEEB';
                document.getElementById('adAzul').play();
                await sleep(diff[pts1]);
                document.getElementById('azul').style.cssText= 'background-color: #0000FF';
                          
            break;
            case "2":
                await sleep(500);   
                document.getElementById('ama').style.cssText= 'background-color: #F0E68C';
                document.getElementById('adAma').play();
                await sleep(diff[pts1]);
                document.getElementById('ama').style.cssText= 'background-color: #FFFF00';
                
            break;
            case "3":
                await sleep(500); 
                document.getElementById('red').style.cssText= 'background-color: #F08080';
                document.getElementById('adRed').play();
                await sleep(diff[pts1]);
                document.getElementById('red').style.cssText= 'background-color: #FF0000';
                  
            break;
            case "4":
                await sleep(500);   
                document.getElementById('verd').style.cssText= 'background-color: #32CD32';
                document.getElementById('adVerd').play();
                await sleep(diff[pts1]);
                document.getElementById('verd').style.cssText= 'background-color: #008000';
                
            break;
        }
    }
    atv=false;
}

function addAzul(){
    if(atv==false){
    document.getElementById('adAzul').play();
    resp = resp+'1';
    testes++;
    if(testes==taman){
        atv=true;
        Verifique();
    }
}
}

function addAma(){
    if(atv==false){
        document.getElementById('adAma').play();
        resp = resp+'2';
        testes++;
        if(testes==taman){
            atv=true;
            Verifique();
        }
    }
}

function addRed(){
    if(atv==false){
        document.getElementById('adRed').play();
        resp = resp+'3';
        testes++;
        if(testes==taman){
            atv=true;
            Verifique();
        }
    }
}

function addVerd(){
    if(atv==false){
        document.getElementById('adVerd').play();
        resp = resp+'4';
        testes++;
        if(testes==taman){
            atv=true;
            Verifique();
        }
    }
}

async function Verifique(){
    if(resp==seq){
        document.getElementById('corpo').style.cssText= 'background-color: green'
        await sleep(1000);
        pts++;
        Gerar();
    }else{
        document.getElementById('corpo').style.cssText= 'background-color: red'
        document.cookie = "pontos="+pts;
        atv=false;
        if(pts>score){
        score=pts;
        document.getElementById('score').innerHTML = 'Max-Score: '+score;
        }
    }
}

function Gerar(){
    document.getElementById('corpo').style.cssText= 'background-color: #121212'
    seq = seq +getRandom(1,5).toString();
    resp="";
    testes=0;
    Leia(seq);
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function Pontos(){
    if(document.cookie != ""){
        var h = document.cookie
        var l1 = h.indexOf('pontos=');
        var taman = h.length;
        
        score = h.substring((l1+7),taman);
        document.getElementById('score').innerHTML = 'Max-Score: '+score;
    }
  }