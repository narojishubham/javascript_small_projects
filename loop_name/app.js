class nameField{
    constructor (name){
const field= document.createElement('li')
        filed.textContent= name;
        const nameListHook =  document.querySelector('#name');
        nameListHook.appendChild(field);
    }
}
class NameGenerator{
    constructor(){
        const btn = document.querySelector('button');
        const names = ['max','MANU','Anna'];
        this.currentName =0;
        btn.addEventListener('click',this.addName);
    }
    addName(){
        const name = new nameField(this.names[this.currentName]);
        this.currentName++;
        if(this.currentName >= this.names.length){
            this.currentName = 0;
        }
    }
}
const get =new NameGenerator();