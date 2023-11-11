
    var allProducts = document.querySelectorAll(".products li")
    var div1 = document.querySelector("#div1")
    var div2 = document.querySelector(".div2")
    var btn1 = document.querySelector("#showPrice")
    var totalPrice = 0

    allProducts.forEach(function (item) {
        item.onclick = function (){
            totalPrice +=  +(item.getAttribute("price"))
            div1.innerHTML += item.textContent + " "
          
            div1.style.width="200px"
            div1.style.height="150px"
            div1.style.backgroundColor="#fbefcc"

            if (div1.innerHTML != ""){
                btn1.style.display = "block"
                btn1.style.width = "200px"
                btn1.style.height = "45px"
                btn1.style.backgroundColor = "blue"
                btn1.style.color = "white"
                btn1.style.fontSize = "23px"
                btn1.style.margin="5px 0"
                div2.style.display="block"
                div2.style.width="600px"
                div2.style.width="150px"

                div2.style.backgroundColor = "#F7F7F7"
                div2.style.border= "2px solid  blue"
                div2.style.padding="20px"


            }

   
        }
    })

    btn1.onclick = function (){
        div2.innerHTML=totalPrice
    }




 