const quizData = [
    {
        question: "Что писал Саня 9 декабря 2021 в 7 вечера?",
        a: "Заходи в дс",
        b: "Жди ментов",
        c: "Иди нахуй",
        d: "Ёптабля",
        correct: "b"
    },
    {
        question: "Третье достижение из заметок",
        a: "Понять отсылку",
        b: "Прогнать комара из комнаты",
        c: "Хорошие выкрутасы",
        d: "Вспомнить о достижениях ебать",
        correct: "d"
    },  
    {
        question: "Топовая фраза Александра",
        a: "КАК ОБЫЧНО",
        b: "оки доки ё",
        c: "бубубу с бебебе",
        d: "почемушто",
        correct: "a"
    }, 
    {
        question: "Что образуется в результате второй реакици синтеза холестерина?",
        a: "Бета-гидрокси-бета-метилглутарил",
        b: "протеинконвертаза субтилизин/кексин 9 типа",
        c: "сквален",
        d: "яна ты ебанулась, отстань",
        correct: "a"
    }, 
    {
        question: "Ник Саши в ВК?",
        a: "p33lsru0yn13l1ms",
        b: "v1p3p30w0t3w4m3kuf4k1fu4n1mw4ngu",
        c: "v1p3p30w0t3w4m3kuf4k7nhu1gdu56tdu",
        d: "v1p3p30w0t3w4m3kuf",
        correct: "b"
    }, 
    {
        question: "Лучшее животное",
        a: "Котик",
        b: "Собачка",
        c: "Капибара",
        d: "Яна",
        correct: "a"
    }, 
    {
        question: "Продолжи цитату: Как хуй во рту мешает дать тебе...",
        a: "Пизды",
        b: "Смоук",
        c: "Бабл",
        d: "Это законченная фраза",
        correct: "c"
    }, 
    {
        question: "Как правильно зовут Викторию Серову?",
        a: "Вика-пиво",
        b: "Хмельнушка",
        c: "Бочонок",
        d: "Прекрасная женщина in the world",
        correct: "d"
    }, 
    {
        question: "Кто живёт в Рыбинске?",
        a: "Сатанисты",
        b: "Насильники",
        c: "Лучшие люди",
        d: "Путин",
        correct: "a"
    }, 
    {
        question: "Какого цвета были слова RTX и тортик на торте?",
        a: "Чёрного",
        b: "Красного",
        c: "Розового",
        d: "Белого",
        correct: "b"
    }
];

const quiz = document.getElementById("quiz"); //весь квиз
const answerEls = document.querySelectorAll(".answer"); // все инпуты
const questionEl = document.getElementById("question"); //заголовок квиза
const a_text = document.getElementById("a_text"); //вариант ответа
const b_text = document.getElementById("b_text"); //вариант ответа
const c_text = document.getElementById("c_text"); //вариант ответа
const d_text = document.getElementById("d_text"); //вариант ответа
const submitBtn = document.getElementById("submit"); //дальше
const loadingProgress = document.getElementById("loading-bar-progress"); //прогресс

let currentQuiz = 0;
let score = 0;

loadingQuiz();

function loadingQuiz() {
    deselectAnswer();
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

function deselectAnswer() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;

}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        loadingProgress.style.width = `${(currentQuiz* 100) / quizData.length}%`;

        if (currentQuiz < quizData.length){
            loadingQuiz();
        } else {
            quiz.innerHTML = `<h2 class="quiz-title"> у тебя ${score}/${quizData.length} вопросов правильно </h2>
            <button onclick="location.reload()">ебануть еще раз?</button>
            `;
        }
    }
});