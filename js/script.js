        
        
        //Back to top button
        const myButton = document.getElementById("button");
        const display = document.querySelector("#button");

        //Function that removes display-button class when user scrolls down and adds when scrolls up
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myButton.classList.remove("display-button");
            } else {
                myButton.classList.add("display-button");
            }
        }
        

        //Invokes the above function
        window.onscroll = function() {scrollFunction()};
        
        //Function that brings user back to top
        function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }

        //Invokes the above function on button click
        myButton.addEventListener("click", topFunction);
        
