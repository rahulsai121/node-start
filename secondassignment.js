const add=(a,b)=>{
    return a+b;
}

console.log(add(2,5));


const student={
    name:'Rajesh',
    age:34,
    greet(){
        console.log('hi, I am '+this.name+'my age '+this.age)
    }
}

student.greet();