showFact1=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=animal";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("animal"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact2=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=career";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("career"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact3=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=celebrity";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("celebrity"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact4=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=dev";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("dev"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact5=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=explicit";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("explicit"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact6=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=fashion";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("fashion"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact7=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=food";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("food"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact8=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=history";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("history"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact9=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=money";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("money"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact10=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=movie";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("movie"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact11=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=music";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("music"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact12=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=political";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("political"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact13=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=religion";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("religion"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact14=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=science";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("science"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact15=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=sport";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("sport"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}
showFact16=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random?category=travel";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
            console.WriteLine(GetJokeFromCategory("travel"))
            console.WriteLine(JokeFromSearch("ninja"));
        })
}

