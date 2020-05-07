/*
This code is written by Shubham Gupta (https://github.com/ShubhamGupta-tch).
It is available to use under a Creative Commons Attribution-NonCommercial 4.0 International License.

Using the code for personal or teaching purpose is allowed.
You can use it in any of your projects as long as you attribute Shubham Gupta for use of Code Animation.
Using Code Animation for any Commercial purposes is Prohibited unless with special permission from the Author.\

And Enjoy making boring code presentation interesting.
Good Luck!
*/

function print(string) {
    console.log(string);
}

function random(min, max) {
    //both are inclusive.
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChar(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

class CodeAnimation {
    constructor(text, speed = 50, jsFile = "prism.js") {
        this.speed = speed;
        this.i = 0;
        this.text = text;
        this.output = document.getElementById("output");
        this.jsFile = jsFile;
        // this.natural = true;
        // this.wrong_char = 3
    }

    type() {
        if (this.i < this.text.length) {
            let char = this.text.charAt(this.i);
            this.output.innerHTML += char;

            // if(this.natural){
            //     let natural_wrong_char = ""
            //     for(let x = 0; x<this.wrong_char; x++){
            //         let r = randomChar(this.wrong_char);
            //         this.output.innerHTML += r;
            //         natural_wrong_char += r
            //     }

            //     delete_last(natural_wrong_char);

            // }

            if (char === " ") {
                this.loadJsFile();
            }

            this.i++;
            setTimeout(this.type.bind(this), random(this.speed-10, this.speed+10));
        }
    }

    completed() {
        return this.i === this.text.length;
    }

    type_on_click() {
        document.addEventListener("keydown", (e) => {
            if (e.keyCode === 39) {
                this.type();
            }
        });
    }

    loadJsFile() {
        let jsElm = document.createElement("script");
        jsElm.type = "application/javascript";
        // make the script element load file
        jsElm.src = this.jsFile;
        // finally insert the element to the body element in order to load the script
        document.body.appendChild(jsElm);
    }
}

let typing_list = [];
class ListGenerator {
    constructor(list) {
        this.list = list;
        this.previous_value = 0;
        this.counter = 0;
    }

    next() {
        if (this.previous_value === this.list.length - 1) {
            return null;
        }
        this.previous_value = this.counter;
        this.counter++;
        return this.list[this.previous_value];
    }
}

let to_type = new ListGenerator(typing_list);
let done_typing = [];
// let code_type = new CodeAnimation("I am here and this is my place.", 50);
// code_type.type();

// document.querySelector("pre.code").textContent

function typeAll(delay_pc=50, syntax_script='prism.js') { // delay_pc -> delay per character.
    // let all_text = document.querySelector("pre.code").children;
    let all_text = document
        .querySelectorAll("pre.code")[0]
        .textContent.split("!>");
    for (let i = 0; i < all_text.length; i++) {
        let code = all_text[i] + " ";
        typing_list.push(new CodeAnimation(code, speed=delay_pc, jsFile=syntax_script));
    }
}

let code_typer;
let delete_time = 30;


// var some = new CodeAnimation('def something(): ');
// some.type_on_click();

class AnimateWrittenCode{
    constructor(delay_pc=50, syntax_script='prism.js'){
        this.delay_pc = delay_pc;
        this.syntax_script = syntax_script;
    }


    type_on_click(){
        typeAll(this.delay_pc, this.syntax_script);
    }
}


let output_code = document.getElementById("output");
async function delete_last(text) {
    for (let i = 0; i < text.length; i++) {
        output_code.textContent = output_code.textContent.slice(
            0,
            output_code.textContent.length - 1
        );
        await sleep(delete_time);
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function type(){
    code_typer = to_type.next();
    done_typing.push(code_typer.text);
    code_typer.type();
    scroll();
}

let slow_by = 20;
let fast_by = 20;

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 39) { // Right Arrow Key
        type();
    }

    if (e.keyCode === 46) { // Delete Key
        delete_last(done_typing.pop());
        code_typer.loadJsFile();
    }

    if (e.keyCode === 83) { // S --> Slow
        code_typer.speed += slow_by;
    }

    if (e.keyCode === 70) { // F --> Fast
        code_typer.speed -= fast_by;
    }
});

let autoscroll;
let scroll_amount = 50;
function scroll() {
    window.scrollBy(0, 1);
    autoscroll = setTimeout(scroll, scroll_amount);
}

document.addEventListener("wheel", (event) => {
    clearTimeout(autoscroll);
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 38) { // Up arrow key
        clearTimeout(autoscroll);
    }
});
