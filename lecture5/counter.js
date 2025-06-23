// javascript
if(!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}

        function count(){
            let counter =localStorage.getItem('counter');
            counter++;
            document.querySelector('h1').innerHTML = counter;
            localStorage.setItem('counter', counter);

            // if (counter % 10 === 0){
            //     alert(`count is now ${counter}`);
            // }
        }
        // This is the same as saying document.querySelector('h1').innerHTML = counter;
        // But this is a little bit more readable, and it also allows us to do some other things.
        // So if I want to say, for example, I want to put the value of counter inside of a string, I can do that.
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelector('button').onclick = count;
            document.querySelector('h1').innerHTML = localStorage.getItem('counter');
            // setInterval(count,1000);
            // This is the same as saying document.querySelector('button').onclick = count;
        });
        

        // This script:

// Starts counting at 0.
// Increases the count each time the button is clicked.
// Updates the number on the screen (inside the <h1>).
// Shows an alert every 10 clicks.
// Waits for the HTML to load before trying to connect the button click to the function.