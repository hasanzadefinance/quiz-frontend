<script setup>
import {ref, reactive, computed, onMounted} from "vue"
import {useInterval} from '@vueuse/core'

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
const mobileIndicator = ref()
const timer = ref(1800)

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
  const boxes = indicator.value.querySelectorAll('.indicator__box')
  const mobileBoxes = mobileIndicator.value.querySelectorAll('.indicator__box')
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

function jumpToQuestion(index, container) {
  let clickedEl
  if (container === 'mobile') {
    clickedEl = mobileIndicator.value.querySelectorAll('.indicator__box')[index]
  } else {
    clickedEl = indicator.value.querySelectorAll('.indicator__box')[index]
  }
  if (!clickedEl.classList.contains('indicator__box--answered') && !clickedEl.classList.contains('indicator__box--not-answered')) return

  saveAnswer()
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
        // Close the exam if timer has ended
        pause()
      }
    },
    controls: true
  })
}

const timerLabel = computed(() => {
  const minute = Math.trunc(timer.value / 60)
  const second = timer.value % 60
  return `${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`
})

const currentQuestion = computed(() =>
    questions.find(q => q.id === currentQuestionId.value)
)

onMounted(async () => {
  document.querySelector('.indicator__box').classList.add('indicator__box--current')
  mobileIndicator.value.querySelector('.indicator__box').classList.add('indicator__box--current')
  handleTimer()
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
          <button class="finish-button" :class="{'finish-button--open': questionCounter === questions.length}"
                  @click="finishExam">
            <img src="@/assets/images/padlock.png" alt="lock" class="finish-button__icon"
                 v-if="questionCounter !== questions.length">
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
@import "@/assets/scss/exam";
</style>