# Code Animation Engine
Make boring explanation of code much entertaining by using code-animation.<br>

This is a very simple to use JavaScript library that can help you in code presentation.<br>

## Why Code Animation?
Whenever we are in a code presentation, typing the code live takes a lot of time, but it is boring to explain using a pre written code. So, this library is a combination of both, you divide your code into code snippets and they get typed live on the press of Right Arrow Key.
So, make boring presentations interesting using Code-Animation. It is not just a tool, it is power.<br>

## Installation
Use github CDN to add it in your project or you can download it and use it from there.

Add a `pre` tag with class of `code`.
This will have all of your prewritten code to type later on.
snippets are created using `!>` in the code.<br>
`!>` --> This denotes a pause in the typing animation.
Example:
```
<pre class="language-javascript code">

    // Your code here to be animated.

</pre>
```

Add another `pre` tag with and a `code` tag inside it with class `output` for the output of the animation.
```
<pre class="language-javascript">
    <code id="output"></code>
    <span class="cursor">|</span>
</pre>
```
You can add `<span class="cursor">|</span>` for a blinking cursor.

### It is not important to use `pre` in you code. Animation can be done otherwise as well.
```
// Animate code writeen in pre with class "code" on Click.
let codeanimation = new AnimateWrittenCode();
codeanimation.type_on_click();

// Animate Any String on Click.
var stringAnimation = new CodeAnimation("Code Animation is just Amazing!");
stringAnimation.type_on_click();

// Animate Any String on pageLoad.
var stringAnimation = new CodeAnimation("This will be typed as soon as the page loads.");
stringAnimation.type();

// Parameters for AnimateWrittenCode() and CodeAnimation()
// All parameters are optional

CodeAnimation(text, delay_pc, jsFile);
AnimateWrittenCode(delay_pc, syntax_script);

// delay_pc      ---> Delay Per Character (dafault=50) (in miliseconds)
// syntax_script ---> This is the Script file that checks for code syntax (default="prism.js")

// KeyMagic
F             --> Makes the animation Faster
S             --> Makes the animation Slower
Del           --> Deletes the last typed snippet
Right Arrow   --> Types the next Snippet
```

#### For more usage, CHECK THE CODE! It has everything that you need. (main.js)

Open index.html and press right arrow key to see code-animation in action.

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Code Animation</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://www.learningdrop.com" property="cc:attributionName" rel="cc:attributionURL">Shubham Gupta - TCH</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
