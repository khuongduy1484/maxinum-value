let a =[];
for (let i = 0;i<100;i++){
    a[i] = Math.floor(Math.random()*100);
}
document.write(a);
function maxinum_value(arr,value) {
    let max = [0];
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
    let min = [0];
    for (let i = 0; i < arr.length; i++){
        if (min>arr[i]){
            min = a[i];
        }
    }
    document.write(" gia tri min la " + min);
}
mininum_value(a);