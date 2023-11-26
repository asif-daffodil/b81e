const hasanVai = {
    naam : "Md Hasanuzzaman",
    age : 21,
    job : "Multi-job",
    children : function(n){
        return `${this.naam} has ${n} children`;
    },
    childrenName : ["Niloy","Faria","Nusrat"],
    childrenAge : {
        niloy: 17,
        faria: 13,
        nusrat: 7
    }
}

console.log(hasanVai.children(3));
console.log(hasanVai.childrenName[0]);
console.log(hasanVai.childrenAge.faria);
const hasanVaiStr = JSON.stringify(hasanVai); // convert object to string
console.log(hasanVaiStr);
console.log(JSON.parse(hasanVaiStr));