(function(){
    window.onload = function(){
        // console.log("hi");

        let histButton = document.querySelector("#countButton");
        let typedText = document.querySelector("#textInput").value;



        histButton.addEventListener("click",function(){
            // console.log("the button");

            typedText = typedText.toLowerCase();
            // This changes all the letter to lower case.

            // scary stuffs
            typedText = typedText.replace(/[^a-z'\s]+/g, "");
            typedText = typedText.replace(/(\r\n|\n|\r)/gm, "");
            // This gets rid of all the characters except letters, spaces, and apostrophes.
            // We will learn more about how to use the replace function in an upcoming lesson.

            let letterCounts = {};
            let wordCounts = {};
            let splitToWords = typedText.split(" ");

            // console.log(typedText.length);
            // console.log(splitToWords.length);

            for(let iWords = 0; iWords < splitToWords.length; iWords++){
                // console.log('in loop');
                // for readability
                let word = splitToWords[iWords];
                if(word.length > 0){
                    if(word in wordCounts){
                        wordCounts[word] = wordCounts[word] + 1;
                    }
                    else{
                        wordCounts[word] = 1;
                    }

                    // hack to not get funcky things
                    //let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split('');

                    for(let iLetter = 1; iLetter < word.length; iLetter++){
                        // i thouhgt i was catching an odd char ... but it was just a
                        // single quote '
                        // if(word[iLetter] in alphabetArray){
                            //console.log(word + ":" + word[iLetter]);

                            if(word[iLetter] in letterCounts){
                                letterCounts[word[iLetter]] = letterCounts[word[iLetter]] + 1;
                            }
                            else{
                                letterCounts[word[iLetter]] = 1;
                            }
                        // }
                        // from the if(word[iLetter] in alphabetArray)
                    }
                }
            }

            for (let letter in letterCounts) {
                const span = document.createElement("span");
                const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
                span.appendChild(textContent);
                document.getElementById("lettersDiv").appendChild(span);
            }

            for (let word in wordCounts) {
                const span = document.createElement("span");
                const textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
                span.appendChild(textContent);
                document.getElementById("wordsDiv").appendChild(span);
            }

        });
    };
})();