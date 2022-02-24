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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel').forEach((el, index) => {
        let pr = el.querySelector('button.paginate-left');
        let pl = el.querySelector('button.paginate-right');
        let click = 0

        pr.addEventListener('click', function (el) {
            pr.disabled = true
            --click
            slide(-1);
            setTimeout(function (){
                pr.disabled = false
            }, 600)
        })
        pl.addEventListener('click', function (el) {
            pl.disabled = true
            ++click
            slide(1);
            setTimeout(function (){
                pl.disabled = false
            }, 600)
        })

        let indexSlide = 0,
            total = el.querySelectorAll('.carousel-item').length
        function slide(offset) {
            indexSlide = Math.min( Math.max( indexSlide + offset, 0 ), total - 1 );
            if (click > indexSlide) {
                el.querySelector( '.counter' ).innerHTML = ( 1 ) + ' / ' + total;
                indexSlide = 0
                click = 0
            } else if (click < 0) {
                el.querySelector( '.counter' ).innerHTML = ( total ) + ' / ' + total;
                indexSlide = total - 1
                click = total - 1
                console.log(click)
                console.log(indexSlide)
            } else {
                el.querySelector( '.counter' ).innerHTML = ( indexSlide + 1 ) + ' / ' + total;
            }
            // pr.setAttribute( 'data-state', indexSlide === 0 ? 'disabled' : '' );
            // pl.setAttribute( 'data-state', indexSlide === total - 1 ? 'disabled' : '' );
        }
        slide(0);
    })
})