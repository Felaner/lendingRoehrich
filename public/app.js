function search() {
    let input = document.getElementById("search");
    let filter = input.value.toUpperCase();
    let resultBlock = document.querySelector('.navbar-result-block');
    let ul = document.getElementById("navbar-result-list");
    let li = ul.getElementsByTagName("li");

    let result = []
    // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
    for (let i = 0; i < li.length; i++) {
        if (input.value !== '') {
            let a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                resultBlock.style.display = "block"
                li[i].style.display = "";
                result.push(i)
            } else {
                if(i >= 0) {
                    result.splice(i,1);
                }
                li[i].style.display = "none";
            }
        } else {
            resultBlock.style.display = "none"
            li[i].style.display = "none";
        }
    }
    if (input.value !== '') {
        if (!result.length) {
            resultBlock.style.display = "block"
            ul.getElementsByTagName("p")[0].style.display = "block"
        } else {
            ul.getElementsByTagName("p")[0].style.display = "none"
        }
    } else {
        if (!result.length) {
            resultBlock.style.display = "none"
        }
    }

}

document.getElementById("search").addEventListener('keyup', search);