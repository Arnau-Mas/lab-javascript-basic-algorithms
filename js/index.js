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
    console.log("Iteration3: Loops");
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
    let hacker1Modified = '';
    let hacker2Reverse = [];

    if(hacker1){
        for(let i=0; i<hacker1.length; i++){
            hacker1Modified += `${hacker1[i].toUpperCase()} `; 
        }

        console.log(hacker1Modified);
    }

    if(hacker2){
        for(let i=hacker2.length; i>0; i--){
            hacker2Reverse += hacker2[i-1];
        }
        console.log(hacker2Reverse);
    }

    if(hacker1 && hacker2){
        if(hacker1<hacker2){
            console.log('The driver\'s name goes first.')
        }else if(hacker1>hacker2){
            console.log('Yo, the navigator goes first definitely.')
        }else if(hacker1===hacker2){
            console.log('What?! You both have the same name?')
        }else{
            console.log('Ups, something wrone');
        }
    }

//BONUS 1
    let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus sem sed ante viverra auctor. Sed semper mauris in sapien maximus sollicitudin. Aliquam erat volutpat. Aenean quis imperdiet erat. Sed feugiat, ex quis mollis molestie, nisl odio pellentesque mauris, quis porttitor ligula quam sit amet turpis. Curabitur at lacinia est. Vivamus blandit iaculis lacus, ac tincidunt felis bibendum mollis. Donec eu erat est. Vivamus egestas est nisi, ut venenatis arcu rhoncus mattis. Phasellus sollicitudin tincidunt diam, ut dignissim neque accumsan non. Sed tellus orci, consequat vel viverra iaculis, dapibus eu ipsum. Proin ullamcorper orci purus, non vehicula arcu tempus ut. Morbi ullamcorper, mauris vel faucibus tristique, libero massa pellentesque elit, sit amet rutrum sapien orci vel augue. Maecenas maximus auctor consequat. Fusce condimentum eu arcu vitae dignissim. Suspendisse vel justo non tortor interdum congue. Aliquam dapibus, nisl nec tempor tristique, nibh ante euismod libero, ut blandit odio nulla eget nunc. Proin posuere aliquam tellus et eleifend. Duis ornare mi et odio condimentum, vitae facilisis ligula condimentum. Aenean ex justo, mattis quis sollicitudin sit amet, elementum sit amet dui. Pellentesque vitae risus quis tellus blandit egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras iaculis sollicitudin velit, vestibulum dictum risus. Quisque sollicitudin est in est efficitur dignissim. Sed sit amet vehicula mauris. Pellentesque elit orci, lobortis sit amet ultrices a, condimentum a est. Sed posuere, orci id gravida ullamcorper, lectus turpis feugiat magna, vehicula eleifend nisl ex nec elit. Aenean elit ante, tristique nec magna eget, pretium iaculis tortor. Maecenas risus ligula, lobortis a vulputate a, ullamcorper non erat. Suspendisse non euismod ante. Nulla facilisi. Phasellus mattis vulputate tortor sed euismod. Quisque massa libero, gravida eget metus sed, aliquet blandit lorem. Suspendisse id pulvinar neque, vel tempus mauris. In hac habitasse platea dictumst. Integer venenatis ligula eget nibh semper, vitae varius nisl mollis. Etiam lacinia tellus felis, vitae auctor sapien eleifend efficitur. Maecenas mauris justo, rutrum non vulputate sed, consectetur non turpis.'

    let accountant = 1; //el valor inicial es uno porque la palabra final no la tendrá en cuenta ya que no acaba en un espacio.
    for(let i=0; i<paragraph.length; i++){
        if(paragraph[i]==' '){
            accountant++;
        }
    }
    console.log("Number of words: ", accountant);