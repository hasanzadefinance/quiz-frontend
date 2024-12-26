<script setup>
import {ref, reactive, computed, onMounted} from "vue"

const questions = reactive([
  {
    id: 1,
    question: "به نظر شما چرا قیمت مرغ همزمان با قیمت گوشت و ماشین پراید بالا می رود؟",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 2,
    question: "این چه هندیه که درست کردی واقعا آیا این مطلب درست است که شما در مورد آن صحبت می کنید؟",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 3,
    question: "آقای شاه محمدی این چه کار سخیفی است که انجام می دهید؟",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 4,
    question: "به نظر شما چرا قیمت مرغ همزمان با قیمت گوشت و ماشین پراید بالا می رود؟",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 5,
    question: "این چه هندیه که درست کردی واقعا آیا این مطلب درست است که شما در مورد آن صحبت می کنید؟",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 6,
    question: "آقای شاه محمدی این چه کار سخیفی است که انجام می دهید؟",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 7,
    question: "به نظر شما چرا قیمت مرغ همزمان با قیمت گوشت و ماشین پراید بالا می رود؟",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 8,
    question: "این چه هندیه که درست کردی واقعا آیا این مطلب درست است که شما در مورد آن صحبت می کنید؟",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 9,
    question: "آقای شاه محمدی این چه کار سخیفی است که انجام می دهید؟",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 10,
    question: "به نظر شما چرا قیمت مرغ همزمان با قیمت گوشت و ماشین پراید بالا می رود؟",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 11,
    question: "این چه هندیه که درست کردی واقعا آیا این مطلب درست است که شما در مورد آن صحبت می کنید؟",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 12,
    question: "آقای شاه محمدی این چه کار سخیفی است که انجام می دهید؟",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
])

const currentQuestionId = ref(1)
const questionCounter = ref(1)
const currentAnswerId = ref(null)
const savedAnswers = reactive([])
const indicator = ref()

function goToNextQuestion() {
  if (currentQuestionId.value >= questions.length) return

  saveAnswer()
  setAnswerOnIndicator()
  currentAnswerId.value = null

  currentQuestionId.value++
  questionCounter.value++

  setCurrentClassOnIndicatorBox()

  findAnswer()
  scrollToNextIndicator()
}

function goToPreviousQuestion() {
  if (currentQuestionId.value <= 1) return

  saveAnswer()
  setAnswerOnIndicator()
  currentAnswerId.value = null

  currentQuestionId.value--
  questionCounter.value--

  setCurrentClassOnIndicatorBox()

  findAnswer()
  scrollToPreviousIndicator()
}

function saveAnswer() {
  savedAnswers.push({questionId: currentQuestionId.value, answerId: currentAnswerId.value})
}

function findAnswer() {
  currentAnswerId.value = savedAnswers.find((answer) => answer.questionId === currentQuestionId.value)?.answerId ?? null
  popAnswerFromSavedAnswers()
}

function popAnswerFromSavedAnswers() {
  const index = savedAnswers.findIndex((answer) => answer.questionId === currentQuestionId.value)
  if (index > -1) {
    savedAnswers.splice(index, 1)
  }
}

function selectAnswer(answerId) {
  currentAnswerId.value = answerId
}

function finishExam() {
  // Check if user can finish
  if (questionCounter.value !== questions.length) return

  savedAnswers.push({questionId: currentQuestionId.value, answerId: currentAnswerId.value})
  console.log(savedAnswers)
}

function setAnswerOnIndicator() {
  const index = questionCounter.value - 1
  const boxes = document.querySelectorAll('.indicator__box')
  if (currentAnswerId.value) {
    boxes[index].classList.remove('indicator__box--current')

    boxes[index].classList.add('indicator__box--answered')
    boxes[index].classList.remove('indicator__box--not-answered')
  } else {
    boxes[index].classList.remove('indicator__box--current')

    boxes[index].classList.remove('indicator__box--answered')
    boxes[index].classList.add('indicator__box--not-answered')
  }
}

function setCurrentClassOnIndicatorBox() {
  document.querySelectorAll('.indicator__box')[questionCounter.value - 1].classList.add('indicator__box--current')
}

function jumpToQuestion(index) {
  // Check if the jump is not logical
  const el = document.querySelectorAll('.indicator__box')[index]
  if (!el.classList.contains('indicator__box--answered') && !el.classList.contains('indicator__box--not-answered')) return

  saveAnswer()
  setAnswerOnIndicator()
  currentAnswerId.value = null

  questionCounter.value = index + 1
  setCurrentClassOnIndicatorBox()
  currentQuestionId.value = questions[index].id
  findAnswer()
}

function scrollToNextIndicator() {
  const nextIndicator = Array.from(document.querySelectorAll('.indicator__box'))[questionCounter.value - 1]
  const nextIndicatorRect = nextIndicator.getBoundingClientRect()
  const indicatorRect = indicator.value.getBoundingClientRect()

  if (nextIndicatorRect.bottom > indicatorRect.bottom) {
    indicator.value.scrollTo({
      top: indicator.value.scrollTop + (nextIndicatorRect.height + 30),
      behavior: 'smooth'
    })
  }
}

function scrollToPreviousIndicator() {
  const prevIndicator = Array.from(document.querySelectorAll('.indicator__box'))[questionCounter.value - 1]
  const prevIndicatorRect = prevIndicator.getBoundingClientRect()
  const indicatorRect = indicator.value.getBoundingClientRect()

  if (prevIndicatorRect.top < indicatorRect.top) {
    indicator.value.scrollTo({
      top: indicator.value.scrollTop - (prevIndicatorRect.height + 30),
      behavior: 'smooth'
    })
  }
}


const currentQuestion = computed(() =>
    questions.find(q => q.id === currentQuestionId.value)
)

onMounted(async () => {
  document.querySelector('.indicator__box').classList.add('indicator__box--current')
})

</script>

<template>
  <div class="page">
    <div class="sidebar">
      <img src="@/assets/images/logo.png" alt="logo" class="sidebar__logo">
      <div class="line mt-6"></div>
      <h2 class="sidebar__title">پنل دانشجویی</h2>
      <div class="sidebar__user">
        <img src="@/assets/images/default_user.png" alt="user" class="sidebar__user-image">
      </div>
      <div class="user-info">
        <div class="sidebar__little-box">نام و نام خانوادگی</div>
        <div class="sidebar__big-box">محمد رحمانی</div>
        <div class="sidebar__little-box">کد کلاسی</div>
        <div class="sidebar__big-box">۵۷۶</div>
        <div class="sidebar__little-box">کد دانشجویی</div>
        <div class="sidebar__big-box">۱۲۳۴۵۶۷۸۹۰</div>
      </div>
    </div>
    <div class="main">
      <header class="header">
        <div class="header__item">
          <img src="../assets/images/header_cap_icon.svg" alt="header cap" class="header__icon">
          <span class="header__text">نام دوره: ارز دیجیتال</span>
        </div>
        <div class="header__item">
          <img src="../assets/images/speed_meter_icon.svg" alt="header cap" class="header__icon">
          <span class="header__text">سطح: پیشرفته</span>
        </div>
        <div class="header__item">
          <img src="../assets/images/calendar_icon.svg" alt="header cap" class="header__icon">
          <span class="header__text">جلسه ۱۲</span>
        </div>
        <div class="header__item">
          <img src="../assets/images/user_icon.svg" alt="header cap" class="header__icon">
          <span class="header__text">نام استاد: محمد حسن زاده</span>
        </div>
        <div class="header__item">
          <img src="../assets/images/clock_icon.svg" alt="header cap" class="header__icon">
          <span class="header__text">زمان باقی مانده آزمون: ۲۳:۱۰</span>
        </div>
      </header>
      <div class="questions">
        <div class="question">
          <div class="question__buttons">
            <button class="next-button" v-if="questionCounter < questions.length" @click="goToNextQuestion"><- سوال
              بعد
            </button>
            <button class="prev-button" v-if="questionCounter > 1" @click="goToPreviousQuestion"> سوال قبل -></button>
          </div>
          <h3 class="question__question">سوال {{ questionCounter }}</h3>
          <span
              class="mt-4">{{ currentQuestion.question }}</span>
          <ul class="question__answers-list mt-8">
            <li class="question__answer"
                v-for="(answer, index) in currentQuestion.options" @click="selectAnswer(answer.id)"
                :class="{'question__answer--selected': currentAnswerId === answer.id}"
            >
              <span class="question__answer__number">{{ index + 1 }}</span>
              <span class="question__answer__text">{{ answer.text }}</span>
            </li>
          </ul>
          <button class="finish-button" :class="{'finish-button--open': questionCounter === questions.length}"
                  @click="finishExam">
            <img src="@/assets/images/padlock.png" alt="lock" class="finish-button__icon"
                 v-if="questionCounter !== questions.length">
            <span class="finish-button__text">ثبت نهایی آزمون</span>
          </button>
        </div>
        <div class="indicator" ref="indicator">
          <div v-for="(q, i) in questions" class="indicator__box" @click="jumpToQuestion(i)">{{ i + 1 }}</div>
        </div>
      </div>
      <div class="footer">
        <div class="guide">
          <div class="guide__box guide__box--success inline-block"></div>
          <span>سوالات پاسخ داده شده</span>
          <div class="guide__box guide__box--danger inline-block"></div>
          <span>سوالات پاسخ داده نشده</span>
          <div class="guide__box guide__box--active inline-block"></div>
          <span>سوال فعال</span>
        </div>
        <div class="number-of-questions">تعداد کل سوالات : {{ questions.length }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  padding: 1.5rem;
  min-height: 100vh;
  background-color: var(--page-background-color);
  display: flex;
  gap: 1.5rem;
  align-items: stretch;
  font-size: 1.2rem;
  color: var(--text-color);
}

.sidebar {
  width: 18%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: var(--box-background-color) url(../assets/images/sidebar_background.jpg) no-repeat;
  background-position: 50% 10%;
  background-size: cover;
  border: 3px solid var(--box-border-color);
  border-radius: 1.5rem;

  @media only screen and (max-width: 1200px) {
    display: none;
  }

  &__logo {
    width: 8rem;
  }

  &__title {
    font-size: 1.6rem;
    color: var(--color-primary);
    margin-top: 2rem;
    font-weight: bold;
  }

  &__user {
    margin-top: 1.5rem;
    border-radius: 50%;
    padding: .2rem;
    border: 2px dashed var(--color-primary);
  }

  &__user-image {
    width: 7rem;
    height: 7rem;
  }

  &__little-box {
    font-size: .8rem;
    background-color: var(--color-primary);
    color: white;
    padding: .3rem .7rem .1rem;
    border-radius: .75rem .75rem 0 0;
    margin-top: 1rem;
  }

  &__big-box {
    border-radius: .75rem;
    padding: .6rem;
    background-color: var(--color-secondary);
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
  }
}

.main {
  width: 82%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
}

.line {
  border-top: 3px solid var(--box-border-color);
  width: 100%;
}

.user-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -3rem;
}

.header {
  padding: .5rem;
  color: white;
  background-color: var(--color-primary);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  &__item {
    display: flex;
    align-items: center;
  }

  &__icon {
    margin-left: .5rem;
    width: 2rem;
    //Hex code of this color : #B7E1FF
    filter: invert(86%) sepia(12%) saturate(3000%) hue-rotate(180deg) brightness(100%) contrast(100%);
  }
}

.questions {
  display: flex;
  gap: 1.5rem;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.footer {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.guide, .number-of-questions {
  background-color: var(--color-gray-1);
  padding: .5rem 2rem;
  border-radius: 1rem;
}

.guide {
  display: flex;
  align-items: center;

  div {
    display: inline-block;
  }

  span:not(:last-child) {
    margin-left: 1rem;
  }

  &__box {
    width: 1.75rem;
    height: 1.75rem;
    margin-left: .5rem;
    border-radius: .5rem;

    &--success {
      background-color: var(--color-success);
    }

    &--danger {
      background-color: var(--color-danger);
    }

    &--active {
      background-color: var(--color-primary);
    }
  }
}

.indicator {
  border: 3px solid var(--box-border-color);
  background-color: var(--box-background-color);
  border-radius: 1rem;
  padding: .5rem .5rem;
  max-height: 37rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &__box {
    width: 3rem;
    height: 3rem;
    background-color: var(--color-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.75rem;
    border-radius: .5rem;
    color: var(--color-primary);
    cursor: pointer;
    transition: all .2s ease;

    &--not-answered {
      background-color: var(--color-danger);
      color: #75514F;
    }

    &--answered {
      background-color: var(--color-success);
      color: #2D584A;
    }

    &--current {
      background-color: var(--color-primary);
      color: white;
    }

    &:not(:last-child) {
      margin-bottom: .75rem;
    }
  }
}

.next-button, .prev-button {
  padding: .5rem .75rem;
  background-color: var(--color-secondary);
  border-radius: .5rem;
  font-size: 1rem;
}

.prev-button {
  background-color: var(--color-gray-1);
}

.question {
  border: 3px solid var(--box-border-color);
  background-color: var(--box-background-color);
  border-radius: 1.5rem;
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  &__buttons {
    display: flex;
    align-self: flex-end;
    gap: 1rem;
  }

  &__question {
    font-weight: bold;
    color: var(--color-primary);
    font-size: 1.5rem;
  }

  &__answer {
    display: flex;
    align-items: center;
    padding: .5rem .5rem .5rem 4rem;
    border-radius: .5rem;
    background-color: var(--color-secondary);
    cursor: pointer;
    transition: all .2s ease-out;

    &--selected {
      background-color: var(--color-primary);
      color: white;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    &__number {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      border-radius: .5rem;
      justify-content: center;
      align-items: center;
      background-color: white;
      color: var(--color-primary);
      margin-left: 1rem;
    }

    &__text {
      font-size: 1.1rem;
    }
  }
}

.finish-button {
  padding: .75rem 1rem;
  background-color: var(--color-gray-2);
  display: flex;
  margin-top: 2rem;
  border-radius: 1rem;
  font-size: 1rem;
  align-items: center;
  cursor: default;

  &--open {
    background-color: var(--color-success);
    cursor: pointer;
  }

  &__icon {
    margin-left: .5rem;
    width: 1.5rem;
  }
}

</style>