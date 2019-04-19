let a =[];
for (let i = 0;i<100;i++){
    a[i] = Math.floor(Math.random()*101);
}
let arr ='';
for (let i = 0,j=1;i<a.length && j<=10;i++,j++){
    arr+=a[i]+' ';
    if (j===10) {
        arr+='</br>';
        j=1
    }
}document.getElementById('number').innerHTML = arr;

function maxinum_value(arr,value) {
    let max = arr[0];
    for (let i =0;i<arr.length;i++) {
        if (max<arr[i]){
            max = a[i];
        }
    }
    document.write('gia tri max la ' + max)
}
document.write("<br/>");
maxinum_value(a);

function mininum_value(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (min>arr[i]){
            min = a[i];
        }
    }
    document.write(" gia tri min la " + min);
}
mininum_value(a);