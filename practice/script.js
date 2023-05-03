alert('Добро пожаловать ! Наведитесь на серую стрелку , чтобы начать !')

//Переменные
let body = document.querySelector('body')

let play = document.querySelector('#play');
let about = document.querySelector('#about');
let settings = document.querySelector('#settings');
let bg = document.querySelector('#background')
let menu = document.querySelector('#menubar')

//Об игре
let infor = document.createElement('p')
body.appendChild(infor)
infor.classList.add('table')
infor.textContent = "Игра создана по мотивам игры Tiny Bunny , творения русских авторов для демонстрации своих навыков в JavaScript. Она небольшая , но в ней продемонстрированно самое необходимое. Адаптив представлен резиновым макетом т.к. игра рассчитана под ПК. Под телефон было решено не адаптировать , т.к. можно потерять драгоценное качество. "
infor.classList.add('hidden')
//Дополнение
let set = document.createElement('p')
body.appendChild(set)
set.classList.add('table')
set.textContent = "Надеюсь вам понравится игра :D p.s. Арты взяты из игры . Старался успеть перед экзаменами , чтобы вас порадовать ! Хорошего настроения !"
set.classList.add('hidden')

//События меню
about.addEventListener('click',()=>{
    infor.classList.toggle('hidden')
});

settings.addEventListener('click',()=>{
    set.classList.toggle('hidden')
});

play.addEventListener('click',()=>{
    menu.remove()
    //Переменные
    let i = -1 
    let t = -1
    let g = 0

    //Диалоги
    let dialogue = [
        "И вот я снова дома. Могу насладиться этой необъятной тишиной и спокойствием",
        "Сегодня в школе был по-настоящему радоcтный и особенный день .",
        "Хулиганы отстали от меня и я смог весь день провести с Полиной !", 
        "Но это было достаточно утомительно , хотя и приятно , нужно вздремнуть.",

        "И вот я уже снова направляюсь в нашу школу .",
        "Однако школа выглядит уже совсем по-другому, совсем не так как раньше .",
        "Она словно похорошела , преобразилась , изменилась за последние сутки.",
        "В любом случае я не могу насладиться этой красотой , мне пора бежать .",

        "На входе я встретил уже знакомых мне грубых хулиганов...",
        "Сегодня они очень спокойны , что странно .",
        "Они предложили мне прогуляться вместе с ними на сомнительное важное дело .",
        "Я лишь сказал , что подумаю и спешно побежал в класс .",

        "Уроки пролетели быстро , мне даже удалось поговорить с Полиной !",
        "От нее пахло еживикой и она выглядела как всегда восхитительно .",
        "Словом, она тоже предложила мне пойти с ней по делу . Что за странности ?",
        "В любом случае мне нужно выбрать с кем я пойду ."
    ]

    let ending1 = [
        "Я все же решил пойти с Полиной",
        "Мы пошли на поляну , где из снега слепили снеговика",
        "Мы долго веселились и хохотали . Это были незабываемые минуты в моей жизни .",
        "Как жаль , что это всего лишь сон..."
    ]

    let ending2 = [
        "Подумав , я отказал Полине в ее просьбе и решил пойти с мальчишками .",
        "Мы вышли на поляну , где стоял чей-то снеговик .",
        "Рома недолго думая сломал его... Как сломалось что-то внутри меня .",
        "Как хорошо , что это был лишь кошмар..."
    ]
    //Графика
    let images = [
        './images/1.png',
        './images/2.png',
        './images/3.png',
        './images/4.png'
    ]
    bg.remove()
    // Создаем фон
    let background = document.querySelector('#gamebackground')
    background.setAttribute('src', images[t])
    background.classList.add('background')
    background.classList.remove('hidden')
    body.appendChild(background)
    // Создаем диалоговое окно
    let dialoguebar = document.createElement('p')
    dialoguebar.textContent = "Кликните по серой области"
    dialoguebar.classList.add('dialoguebar')
    body.appendChild(dialoguebar)
    //functions
    //Game - игровой цикл 
    function Game(images,dialoguebar){
        //Кол-во тиков
        i ++
        dialoguebar.textContent = dialogue[i]
        //До выбора
        if (i+1 == dialogue.length && g === 0){
            //Кнопки
            background.classList.toggle('hidden')
            dialoguebar.classList.toggle('hidden')
            let Polina = document.createElement('button')
            let Roma = document.createElement('button')
            Polina.classList.add('buttonparent')
            Roma.classList.add('buttonchild')
            Polina.textContent = "Полина"
            Roma.textContent = "Рома"
            body.appendChild(Polina)
            body.appendChild(Roma)
            //Проверка нажатия
            Polina.addEventListener('click',()=>{
                Polina.classList.toggle('hidden')
                Roma.classList.toggle('hidden')
                dialogue = ending1
                i = -1
                g = 1
                background.classList.toggle('hidden')
                dialoguebar.classList.toggle('hidden')
            })
            Roma.addEventListener('click',()=>{
                Polina.classList.toggle('hidden')
                Roma.classList.toggle('hidden')
                dialogue = ending2
                i = -1
                g = 1
                background.classList.toggle('hidden')
                dialoguebar.classList.toggle('hidden')
            })
        }
        //Концовки
        if (i+1 ==ending1.length && g === 1){
            dialoguebar.classList.toggle('hidden')
            if(ending1 === dialogue){
                background.setAttribute('src' , './images/goodending.png')
            } else {
                background.setAttribute('src' , './images/badending.png')
            }
        }
        //Графика 
        if (i%4 === 0){
            //Проверка концовок
            if(ending1 === dialogue){
                images.push('./images/6.png')
            }
            if(ending2 === dialogue){
                images.push('./images/5.png')
            }
        //Алгоритм отображения
        t += 1
        background.setAttribute('src',images[t])
        }
    }
    //Проверка условий игры (кликов)
    background.addEventListener('click',()=>{
        Game(images,dialoguebar)
    })
    dialoguebar.addEventListener('click',()=>{
        Game(images,dialoguebar)
    })
});


