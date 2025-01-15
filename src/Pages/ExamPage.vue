<script setup>
import {ref, reactive, computed, onMounted, nextTick} from "vue"
import {useInterval} from '@vueuse/core'
import Toast from 'primevue/toast'
import {useToast} from 'primevue/usetoast'
import BaseDialog from "@/components/BaseDialog.vue"

const toast = useToast()

let questions = reactive([
  {
    id: 1,
    question: "سوال اول است",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 2,
    question: "سوال دوم است",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 3,
    question: "سوال سوم است",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 4,
    question: "سوال چهارم است",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 5,
    question: "سوال پنجم است",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 6,
    question: "سوال ششم",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 7,
    question: "سوال هفتم",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 8,
    question: "سوال هشتم",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 9,
    question: "سوال نهم است",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 10,
    question: "سوال دهم است",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 11,
    question: "سوال یازدهم است",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
  {
    id: 12,
    question: "سوال دوازدهم است",
    options: [
      {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
      {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
      {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
      {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'}
    ]
  },
])



function shuffleArray(originalArray) {
  const arrayCopy = [...originalArray]
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[randomIndex]] = [arrayCopy[randomIndex], arrayCopy[i]]
  }
  return arrayCopy
}

// Shuffle all the questions
questions = shuffleArray(questions)

// Shuffle answers
questions.forEach( ( q ) =>
{
    q.options = shuffleArray( JSON.parse( JSON.stringify( q.options ) ) )
} )

const currentQuestionId = ref(questions[0].id)
const questionCounter = ref(1)
const currentAnswerId = ref(null)
let savedAnswers = ref([])
const indicator = ref()
const mobileIndicator = ref()
const timer = ref(1800)
const confirmDialog = ref(false)

let boxes
let mobileBoxes

function goToNextQuestion() {
  if (questionCounter.value + 1 > questions.length) return

  saveAnswer()
  setAnswersListOnCookie()
  setAnswerOnIndicator()
  currentAnswerId.value = null

  questionCounter.value++
  currentQuestionId.value = questions[questionCounter.value - 1].id

  setCurrentClassOnIndicatorBox()

  findAnswer()
  scrollToNextIndicator()
}

function goToPreviousQuestion() {
  if (questionCounter.value === 1) return

  saveAnswer()
  setAnswersListOnCookie()
  setAnswerOnIndicator()
  currentAnswerId.value = null

  questionCounter.value--
  currentQuestionId.value = questions[questionCounter.value - 1].id

  setCurrentClassOnIndicatorBox()

  findAnswer()
  scrollToPreviousIndicator()
}

function saveAnswer() {
  // Check if answer exists
  const answerIndex = savedAnswers.value.findIndex((a) => a.questionId === currentQuestionId.value)
  if (answerIndex >= 0) {
    savedAnswers.value[answerIndex].answerId = currentAnswerId.value
  } else {
    savedAnswers.value.push({questionId: currentQuestionId.value, answerId: currentAnswerId.value})
  }
}

function findAnswer() {
  currentAnswerId.value =
      savedAnswers.value.find((answer) => answer.questionId === currentQuestionId.value)?.answerId ?? null
  // popAnswerFromSavedAnswers()
}

function selectAnswer(answerId) {
  currentAnswerId.value = answerId
}

function finishExam() {
  confirmDialog.value = false
  document.cookie = "answers=null; path=/;"
  savedAnswers.value.push({questionId: currentQuestionId.value, answerId: currentAnswerId.value})

  // Convert savedAnswers to object form
  const data = {}
  for (const answer of savedAnswers.value) {
    data[answer.questionId] = answer.answerId
  }
  console.log(data)
}

function setAnswerOnIndicator() {
  const index = questionCounter.value - 1
  boxes[index].classList.remove('indicator__box--current')
  mobileBoxes[index].classList.remove('indicator__box--current')
  if (currentAnswerId.value) {
    boxes[index].classList.add('indicator__box--answered')
    mobileBoxes[index].classList.add('indicator__box--answered')
    boxes[index].classList.remove('indicator__box--not-answered')
    mobileBoxes[index].classList.remove('indicator__box--not-answered')
  } else {
    boxes[index].classList.remove('indicator__box--answered')
    mobileBoxes[index].classList.remove('indicator__box--answered')
    boxes[index].classList.add('indicator__box--not-answered')
    mobileBoxes[index].classList.add('indicator__box--not-answered')
  }
}

function setCurrentClassOnIndicatorBox() {
  indicator.value.querySelectorAll('.indicator__box')[questionCounter.value - 1].classList.add('indicator__box--current')
  mobileIndicator.value.querySelectorAll('.indicator__box')[questionCounter.value - 1].classList.add('indicator__box--current')
}

function setAnswersListOnCookie() {
  const date = new Date()
  date.setTime(date.getTime() + timer.value * 1000)
  // save only answered questions in saved answers:
  const notNullAnswers = savedAnswers.value.filter((a) => a.answerId)
  document.cookie = `answers=${JSON.stringify(notNullAnswers)}; expires=${date.toUTCString()}`
}

function getAnswersListFromCookie() {
  const cookies = document.cookie.split('; ')
  for (const cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.split('=')
    if (cookieKey === 'answers' && cookieValue) {
      return JSON.parse(cookieValue)
    }
  }
  return []
}

function jumpToQuestion(index, container) {
  let clickedEl
  if (container === 'mobile') {
    clickedEl = mobileIndicator.value.querySelectorAll('.indicator__box')[index]
  } else {
    clickedEl = indicator.value.querySelectorAll('.indicator__box')[index]
  }
  if (!clickedEl.classList.contains('indicator__box--answered') && !clickedEl.classList.contains('indicator__box--not-answered')) return

  saveAnswer()
  setAnswersListOnCookie()
  setAnswerOnIndicator()
  currentAnswerId.value = null

  questionCounter.value = index + 1
  setCurrentClassOnIndicatorBox()
  currentQuestionId.value = questions[index].id
  findAnswer()
}

function scrollToNextIndicator() {
  const nextIndicatorRect =
      Array.from(indicator.value.querySelectorAll('.indicator__box'))[questionCounter.value - 1].getBoundingClientRect()
  const indicatorRect = indicator.value.getBoundingClientRect()

  if (nextIndicatorRect.bottom > indicatorRect.bottom) {
    indicator.value.scrollTo({
      top: indicator.value.scrollTop + (nextIndicatorRect.height + 30),
      behavior: 'smooth'
    })
  }

  // For mobile
  const mobileNextIndicatorRect =
      Array.from(mobileIndicator.value.querySelectorAll('.indicator__box'))[questionCounter.value - 1].getBoundingClientRect()
  const mobileIndicatorRect = mobileIndicator.value.getBoundingClientRect()

  if (mobileNextIndicatorRect.right > mobileIndicatorRect.right) {
    mobileIndicator.value.scrollTo({
      left: mobileIndicator.value.scrollLeft + (mobileNextIndicatorRect.width + 30),
      behavior: 'smooth'
    })
  }
}

function scrollToPreviousIndicator() {
  const prevIndicatorRect =
      Array.from(indicator.value.querySelectorAll('.indicator__box'))[questionCounter.value - 1].getBoundingClientRect()
  const indicatorRect = indicator.value.getBoundingClientRect()

  if (prevIndicatorRect.top < indicatorRect.top) {
    indicator.value.scrollTo({
      top: indicator.value.scrollTop - (prevIndicatorRect.height + 30),
      behavior: 'smooth'
    })
  }

  // For mobile
  const mobilePrevIndicatorRect =
      Array.from(mobileIndicator.value.querySelectorAll('.indicator__box'))[questionCounter.value - 1].getBoundingClientRect()
  const mobileIndicatorRect = mobileIndicator.value.getBoundingClientRect()

  if (mobilePrevIndicatorRect.left < mobileIndicatorRect.left) {
    mobileIndicator.value.scrollTo({
      left: mobileIndicator.value.scrollLeft - (mobilePrevIndicatorRect.width + 30),
      behavior: 'smooth'
    })
  }
}

function handleTimer() {
  const {pause} = useInterval(1000, {
    callback() {
      timer.value--
      if (timer.value === 0) {
        // Close the exam if timer has ended, for now just pausing the timer
        pause()
        finishExam()
      }
    },
    controls: true
  })
}

function openConfirmDialog() {
  if (!currentAnswerId.value) {
    toast.add({
      summary: 'لطفا سوال پایانی را نیز پاسخ دهید.',
      severity: 'warn',
      life: 3000,
    })
    return
  }
  confirmDialog.value = true
}

const timerLabel = computed(() => {
  const minute = Math.trunc(timer.value / 60)
  const second = timer.value % 60
  return `${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`
})

const currentQuestion = computed(() =>
    questions.find(q => q.id === currentQuestionId.value)
)

const shouldFinishButtonOpen = computed(() => {
  const inLastQuestionAndAnswered =
      questionCounter.value === questions.length &&
      savedAnswers.value.every((a) => a.answerId) &&
      currentAnswerId.value &&
      savedAnswers.value.length + 1 === questions.length
  const allQuestionsAnswered =
      savedAnswers.value.every((a) => a.answerId) &&
      savedAnswers.value.length === questions.length
  return inLastQuestionAndAnswered || allQuestionsAnswered
})

function initializeBoxes() {
  // Set success color on indicators which their question answered
  savedAnswers.value.forEach((answer) => {
    const i = questions.findIndex(q => q.id === answer.questionId)
    boxes[i].classList.add('indicator__box--answered')
    mobileBoxes[i].classList.add('indicator__box--answered')
  })
  // Set current class on first box
  boxes[0].classList.add('indicator__box--current')
  mobileBoxes[0].classList.add('indicator__box--current')
}

onMounted(async () => {
  handleTimer()
  savedAnswers.value = getAnswersListFromCookie() ?? []
  // Set savedAnswers on indicator boxes:
  await nextTick()
  // Initializing boxes values
  boxes = indicator.value.querySelectorAll('.indicator__box')
  mobileBoxes = mobileIndicator.value.querySelectorAll('.indicator__box')
  initializeBoxes()
  // Check if the first question has answer
  const firstQuestionAnswerId = savedAnswers.value.find((a) => a.questionId === currentQuestionId.value)?.answerId
  if (firstQuestionAnswerId) {
    currentAnswerId.value = firstQuestionAnswerId
  }
})

</script>

<template>
  <div class="page">
    <base-dialog v-model="confirmDialog" :class="['dialog__padding--1']">
      <p>آیا از پایان آزمون خود مطمئن هستید؟</p>
      <div class="dialog__controls">
        <button class="dialog__controls--close" @click="confirmDialog = false">خیر</button>
        <!-- Shah Mohammadi should set a function for submit here -->
        <button class="dialog__controls--submit" @click="finishExam">پایان آزمون</button>
      </div>
    </base-dialog>
    <Toast/>
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
          <span class="header__text">زمان باقی مانده آزمون: {{ timerLabel }}</span>
        </div>
      </header>
      <div class="mobile-user-info">
        <div class="mobile-user-info__box">
          <div class="sidebar__little-box">نام و نام خانوادگی</div>
          <div class="sidebar__big-box">محمد رحمانی</div>
        </div>
        <div class="mobile-user-info__box">
          <div class="sidebar__little-box">کد کلاسی</div>
          <div class="sidebar__big-box">۵۷۶</div>
        </div>
        <div class="mobile-user-info__box">
          <div class="sidebar__little-box">کد دانشجویی</div>
          <div class="sidebar__big-box">۱۲۳۴۵۶۷۸۹۰</div>
        </div>
      </div>
      <div class="questions">
        <div class="question">
          <div class="question__buttons">
            <button class="next-button" v-if="questionCounter < questions.length" @click="goToNextQuestion">
              <i class="fa-solid fa-caret-right"></i>
              <span>سوال بعد</span>
            </button>
            <button class="prev-button" v-if="questionCounter > 1" @click="goToPreviousQuestion">
              <span>سوال قبل</span>
              <i class="fa-solid fa-caret-left"></i>
            </button>
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
          <button class="finish-button" :class="{'finish-button--open': shouldFinishButtonOpen}"
                  @click="openConfirmDialog">
            <img src="@/assets/images/padlock.png" alt="lock" class="finish-button__icon"
                 v-if="!shouldFinishButtonOpen">
            <span class="finish-button__text">ثبت نهایی آزمون</span>
          </button>
        </div>
        <div class="indicator" ref="indicator">
          <div v-for="(q, i) in questions" class="indicator__box" @click="jumpToQuestion(i, 'desktop')">{{
              i + 1
            }}
          </div>
        </div>
      </div>
      <div class="mobile-indicator" ref="mobileIndicator">
        <div v-for="(q, i) in questions" class="indicator__box"
             @click="jumpToQuestion(i, 'mobile')"
        >{{ i + 1 }}
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
@use "@/assets/scss/exam";
</style>
