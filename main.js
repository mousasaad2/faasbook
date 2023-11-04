let btn = document.querySelector( ".check-promp .notice" )
let messages = document.querySelector( ".check-promp .messages" )
let hoverSmile = document.querySelector( ".hover-smile" )
let smile = document.querySelector( ".smile" )
let smileAll = document.querySelectorAll( ".smile p" )
let like = document.querySelector( ".like" )
let ars = document.querySelector( ".ars" )
let input = document.querySelector( ".messag3 input" )
let fil = document.querySelector( ".fa-file" )
let image = document.querySelector( ".fa-image" )
let messag2 = document.querySelector( ".messag2" )
let del = document.querySelector( ".del" )
let promp = document.querySelectorAll( ".promp" )
let delat = document.querySelectorAll( ".delat" )
let testing = document.querySelectorAll( ".testing" )
let messagShow = document.querySelector( ".messag" )
let testingNumber = 97
let mousa = 0

btn.addEventListener( 'click', () =>
{
    btn.style.color = "#3570f2"
    promp[ mousa ].classList.add( "addJs" )
    promp[ mousa ].classList.remove( "removeJs" )
    tt()
    lll()
} )

delat.forEach( ( de ) =>
{
    de.addEventListener( "click", ( e ) =>
    {
        e.currentTarget.parentElement.classList.remove( "addJs" )
        e.currentTarget.parentElement.classList.add( "removeJs" )
        btn.style.color = "black"
    } )
} )

function lll () 
{
    let gg = setInterval( () =>
    {
        promp[ mousa ].classList.add( "addJs" )
        promp[ mousa ].classList.remove( "removeJs" )
        mousa++
        if ( mousa >= promp.length )
        {
            mousa = 0
            clearInterval( gg )
        }
    }, 2000 )
}

function tt ()
{
    let kk = setInterval( function ()
    {
        testingNumber--
        testing.forEach( ( e ) => { e.style.width = `${ testingNumber }%` } )
        if ( testingNumber <= 0 )
        {
            testingNumber = 0
            promp.forEach( pro =>
            {
                pro.classList.remove( "addJs" )
                pro.classList.add( "removeJs" )
            } )
            clearInterval( kk )
            btn.style.color = "black"
        }
    }, 100 )
    testingNumber = 97
}

messages.addEventListener( "click", () =>
{
    messagShow.classList.toggle( "display" )
    if ( messagShow.classList.contains( "display" ) )
    {
        messages.style.color = "#3570f2"
        smile.classList.remove( "smile-js" )
    } else
    {
        messages.style.color = "black"
    }
} )

del.addEventListener( 'click', () =>
{
    messagShow.classList.remove( "display" )
    if ( messagShow.classList.contains( "display" ) )
    {
        messages.style.color = "#3570f2"
        smile.classList.remove( "smile-js" )
    } else
    {
        messages.style.color = "black"
    }
} )

hoverSmile.addEventListener( "click", () =>
{
    smile.classList.toggle( "smile-js" )
} )

function scrol ()
{
    messag2.scrollTop = messag2.scrollHeight
}

smileAll.forEach( ( sm ) =>
{
    sm.addEventListener( "click", () =>
    {
        input.value += sm.innerHTML;
    } )
} )

like.addEventListener( "click", () =>
{
    let div = document.createElement( "div" )
    div.appendChild( like.cloneNode() )
    messag2.appendChild( div )
    scrol()
    setTimeout( () =>
    {
        div.classList.add( "befor-after" )
    }, 1000 )
} )

ars.addEventListener( "click", () =>
{
    if ( input.value != "" )
    {
        let div = document.createElement( "div" )
        let text = document.createTextNode( input.value )
        div.appendChild( text )
        messag2.appendChild( div )
        input.value = ""
        scrol()
        setTimeout( () =>
        {
            div.classList.add( "befor-after" )
        }, 1000 )
    }
} )

fil.addEventListener( "click", ( e ) =>
{
    e.currentTarget.innerHTML = `<input type = 'file' class='file' id = 'file'/>`
} )

image.addEventListener( "click", ( e ) =>
{
    e.currentTarget.innerHTML = `<input type = 'file' class='file' id = 'image'/>`
} )