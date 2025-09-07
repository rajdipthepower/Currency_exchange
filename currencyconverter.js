const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
image1 = document.getElementById("image1");
image2 = document.getElementById("image2");
sel = document.getElementsByClassName("options");
text1 = document.getElementById("amount1");
text2 = document.getElementById("amount2");

let flag = 0;
let f,t;
let c = 0;
for(let j of sel){
    for(let i in countryNames){
        let opt = document.createElement("option");
        opt.innerText = i;
        opt.value = countryNames[i];
        if(c==0 && i==="India"){
            opt.selected = true;
            image1.src = `https://flagsapi.com/${opt.value}/shiny/64.png`;
            f = opt.value;
        }
        if(c==1 && i==="United States"){
            opt.selected = true;
            image2.src = `https://flagsapi.com/${opt.value}/shiny/64.png`;
            t = opt.value;
        }
        j.appendChild(opt);
    }
    c++;
}
exchangeamount(f,t);

/*We cannot write console.log(rate) outside cause rate value is assigned when promised resolved sent by asynchronous function but 
console.log(rate) is synchronous so it executes first when rate is still undefined. */

for(let i of sel){
    i.addEventListener("change",(evt)=>{
        if(evt.target.id==='f'){
            image1.src = `https://flagsapi.com/${evt.target.value}/shiny/64.png`;
            f = evt.target.value;
        }
        if(evt.target.id==='t'){
            image2.src = `https://flagsapi.com/${evt.target.value}/shiny/64.png`;
            t = evt.target.value;
        }
        exchangeamount(f,t);
    /*event is occuring on the select element not options , hence event.target contains all options of select,
    we use event.target.selectedIndex or event.target.options[event.target.selectedIndex]*/
    })
}

async function exchangeamount(f,t){
    for(let i in countryList){
        if(countryList[i]===f){
            try{
            console.log("Fetching Data...");
            fth = await fetch(URL+i.toLowerCase()+".json");
            if(!fth.ok){
                throw new Error(`Status ${fth.status}`);
            }
            data = await fth.json();
            for(let j in countryList){
                if(countryList[j]===t){
                    // console.log(data[i.toLowerCase()][j.toLowerCase()]);
                    document.getElementById("output").innerText = `1 ${i} = ${data[i.toLowerCase()][j.toLowerCase()]} ${j}`;
                    console.log(`Fetch Successful ${fth.status}`);
                    return data[i.toLowerCase()][j.toLowerCase()]; //return statement acting like break
                    // break; 
                }
            }
        }catch(err){console.log(err.message);}
        break; //outer loop stops iterating once country f is found
    }
}
}

function checkValid(e){
    if(e.key>='0' && e.key<='9'){
                document.getElementById("second").innerText = "";
                document.getElementById("first").innerText = "";
                return true;
            }
            //This line text1.value.indexOf('.')==-1 checks that initially no '.' was present or not,-1 means nothing was present
            else if(e.key=='.' && txt1.value.indexOf('.')==-1){

                return true;
            }
            else if(e.key=='Delete' || e.key=='Backspace' || e.key=='ArrowRight' || e.key=='ArrowLeft'){
                document.getElementById("second").innerText = "";
                document.getElementById("first").innerText = "";
                return true;
            }
            else{
                if(e.target == text1){
                    document.getElementById("first").innerText = "Invalid Input!!";
                }
                else{
                    document.getElementById("second").innerText = "Invalid Input!!";
                }   
            }
            e.preventDefault();
}

text1.addEventListener("keydown",(e)=>checkValid(e));
text2.addEventListener("keydown",(e)=>checkValid(e));
text1.addEventListener("input",(e)=>{inputValue(e)});
text2.addEventListener("input",(e)=>{inputValue(e)});

function inputValue(e){
        if(e.target == text1){
            exchangeamount(f,t).then((res)=>{
                text2.value = res * e.target.value;
                if(e.target.value.length>30){
                    e.target.value = NaN;
                    document.getElementById("first").innerText = "Please Enter a valid amount!!";
                }
            })
        }
        else{
            exchangeamount(f,t).then((res)=>{
                text1.value = res * e.target.value;
                if(e.target.value.length>30){
                    e.target.value = NaN;
                    document.getElementById("second").innerText = "Please Enter a valid amount!!";
                    flag = 1;
                }
            })
        }
}

inter = document.getElementById("interchange");
inter.addEventListener("click",()=>{
    inter.classList.toggle('buttonclass');
    let temp = image1.src;
    image1.src = image2.src;
    image2.src = temp;

    [sel.item(0).value ,sel.item(1).value] = [sel.item(1).value,sel.item(0).value]

    //we need to change only the value and innerText will automatically change.
    
    // [sel.item(0).options[sel.item(0).selectedIndex].innerText,sel.item(0).value,sel.item(1).options[sel.item(1).selectedIndex].innerText,sel.item(1).value] = [sel.item(1).options[sel.item(1).selectedIndex].innerText,sel.item(1).value,sel.item(0).options[sel.item(0).selectedIndex].innerText,sel.item(0).value];

    /*This logic can't be used coz changing value of selected element might not immeditaely update innerText of selected option. */

    if(flag == 0){
     k = t ;
     t = f;
     f = k;
     exchangeamount(f,t);
     let temporary = text1.value;
     text1.value = text2.value;
     text2.value = temporary;
    }
    else{
     exchangeamount(f,t);   
     let temporary = text1.value;
     text1.value = text2.value;
     text2.value = temporary;
    }
})