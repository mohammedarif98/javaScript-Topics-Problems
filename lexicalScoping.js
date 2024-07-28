

let x =10;

function outerfunc(){
    let y = 20;
    console.log(`outer funtion ${x} ${y}`);

    function innerfunc(){
        let z = 30;
        console.log(`inner funtion ${x} ${y} ${z}`);
    }
    innerfunc()
}

outerfunc()