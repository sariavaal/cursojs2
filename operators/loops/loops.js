//print 0 to 4
for (let count=0; count <5; count++){
    console.log(count);
}
let names = ["jhon", "peter", "Anorio", "pichulina"];
for (let i=0; i<names.length; i++){
    console.log(names[i]);
}
console.log("***********")
names.forEach(function test(n){
    console.log(n);
});
for (n of names){
console.log(n);
}
//iterate over an object
let student= {
    name: "Peter",
    rollNo: 567,
    age: 23
};
for(key in student){
    console.log("key is " + key+ "value is" +student[key] );
}
//while loop
let c = 0;
while(c<5){
    console.log(c);
    c++;
}
//do while
let i = 0;
do{
    console.log(i);
    i++;
}while(i<5);