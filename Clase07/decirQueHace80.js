function metodo1 (arr,x,y){
    let ax;
    console.log(`el valor de ax al principio: ${ax}`);
    ax=arr[x];
    console.log (`el valor de arr[x]: ${arr[x]}`);
    arr[x] = arr[y];
    console.log (`el valor de arr[y]: ${arr[y]}`);
    arr[y] = ax;
    console.log(`el valor de ax: ${ax}`);
}

let arr = new Array(1,2,3,4,5);
metodo1(arr,1,5);
