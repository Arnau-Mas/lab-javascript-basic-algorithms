// Iteration 1: Names and Input
    console.log("Iteration 1: Names and Input");
    let hacker1 = prompt("Introduce the driver's name");
    if(hacker1){
        console.log(`The driver's name is ${hacker1}`);
    }else{
        console.log(`Seems that driver doesn't have a name or an error occurred`);
    }

    let hacker2 = prompt("Introduce the navigator's name");
    if(hacker2){
        console.log(`The navigator's name is ${hacker2}`);
    }else{
        console.log(`Seems that navigator doesn't have a name or an error occurred`);
    }    

// Iteration 2: Conditionals
    console.log("Iteration 2: Conditionals");
    if(hacker1 && hacker2){
        if(hacker1.length>hacker2.length){
            console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
        }else if(hacker1.length<hacker2.length){
            console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
        }else if(hacker1.length==hacker2.length){
            console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
        }else{
            console.log("Oops, some error occurred");
        }
    }

// Iteration 3: Loops
    for(let i=0; i<10; i++){
        console.log(i+1);
    }

    for(let i=20; i>9; i--){
        console.log(i);
    }

    for(let i=0; i<11; i++){
        if(i%3==0){
            console.log(i);
        }
    }

    console.log("Iteration3: Loops");
    if(hacker1){
        for(let i=0; i<hacker1.length; i++){
            console.log(hacker1[i].toUpperCase());
            console.log(" ");
        }
    }

    if(hacker2){
        for(let i=hacker2.length; i>0; i--){
            console.log(hacker2[i-1]);
        }
    }

    //el tercero no lo hago porque implica arrays y aún no los hemos dado.