<script setup>
import { ref, reactive, computed, onMounted, nextTick } from "vue"

let questions = reactive([
  {
    id: 1,
    question: "سوال اول است",
    options: [
      { id: 1, text: "به دلیل تقاضای پایین در بازار" },
      { id: 2, text: "به عنوان دارایی کمیاب و ملموس" },
      { id: 3, text: "به دلیل نیاز کم به امنیت در نگهداری" },
      { id: 4, text: "به خاطر ارزش کمتر نسبت به طلا" },
    ],
  },
  {
    id: 2,
    question: "سوال دوم است",
    options: [
      { id: 1, text: "به دلیل تقاضای پایین در بازار" },
      { id: 2, text: "به عنوان دارایی کمیاب و ملموس" },
      { id: 3, text: "به دلیل نیاز کم به امنیت در نگهداری" },
      { id: 4, text: "به خاطر ارزش کمتر نسبت به طلا" },
    ],
  },
  {
    id: 3,
    question: "سوال سوم است",
    options: [
      { id: 1, text: "به دلیل تقاضای پایین در بازار" },
      { id: 2, text: "به عنوان دارایی کمیاب و ملموس" },
      { id: 3, text: "به دلیل نیاز کم به امنیت در نگهداری" },
      { id: 4, text: "به خاطر ارزش کمتر نسبت به طلا" },
    ],
  },
  {
    id: 4,
    question: "سوال چهارم است",
    options: [
      { id: 1, text: "به دلیل تقاضای پایین در بازار" },
      { id: 2, text: "به عنوان دارایی کمیاب و ملموس" },
      { id: 3, text: "به دلیل نیاز کم به امنیت در نگهداری" },
      { id: 4, text: "به خاطر ارزش کمتر نسبت به طلا" },
    ],
  },
  {
    id: 5,
    question: "سوال پنجم است",
    options: [
      { id: 1, text: "به دلیل تقاضای پایین در بازار" },
      { id: 2, text: "به عنوان دارایی کمیاب و ملموس" },
      { id: 3, text: "به دلیل نیاز کم به امنیت در نگهداری" },
      { id: 4, text: "به خاطر ارزش کمتر نسبت به طلا" },
    ],
  },
  {
    id: 6,
    question: "سوال ششم",
    options: [
      { id: 1, text: "به دلیل تقاضای پایین در بازار" },
      { id: 2, text: "به عنوان دارایی کمیاب و ملموس" },
      { id: 3, text: "به دلیل نیاز کم به امنیت در نگهداری" },
      { id: 4, text: "به خاطر ارزش کمتر نسبت به طلا" },
    ],
  },
  {
    id: 7,
    question: "سوال هفتم",
    options: [
      { id: 1, text: "به دلیل تقاضای پایین در بازار" },
      { id: 2, text: "به عنوان دارایی کمیاب و ملموس" },
      { id: 3, text: "به دلیل نیاز کم به امنیت در نگهداری" },
      { id: 4, text: "به خاطر ارزش کمتر نسبت به طلا" },
    ],
  },
  {
    id: 8,
    question: "سوال هشتم",
    options: [
      { id: 1, text: "به دلیل تقاضای پایین در بازار" },
      { id: 2, text: "به عنوان دارایی کمیاب و ملموس" },
      { id: 3, text: "به دلیل نیاز کم به امنیت در نگهداری" },
      { id: 4, text: "به خاطر ارزش کمتر نسبت به طلا" },
    ],
  },
  {
    id: 9,
    question: "سوال نهم است",
    options: [
      { id: 1, text: "به دلیل تقاضای پایین در بازار" },
      { id: 2, text: "به عنوان دارایی کمیاب و ملموس" },
      { id: 3, text: "به دلیل نیاز کم به امنیت در نگهداری" },
      { id: 4, text: "به خاطر ارزش کمتر نسبت به طلا" },
    ],
  },
  {
    id: 10,
    question: "سوال دهم است",
    options: [
      { id: 1, text: "به دلیل تقاضای پایین در بازار" },
      { id: 2, text: "به عنوان دارایی کمیاب و ملموس" },
      { id: 3, text: "به دلیل نیاز کم به امنیت در نگهداری" },
      { id: 4, text: "به خاطر ارزش کمتر نسبت به طلا" },
    ],
  },
  {
    id: 11,
    question: "سوال یازدهم است",
    options: [
      { id: 1, text: "به دلیل تقاضای پایین در بازار" },
      { id: 2, text: "به عنوان دارایی کمیاب و ملموس" },
      { id: 3, text: "به دلیل نیاز کم به امنیت در نگهداری" },
      { id: 4, text: "به خاطر ارزش کمتر نسبت به طلا" },
    ],
  },
  {
    id: 12,
    question: "سوال دوازدهم است",
    options: [
      { id: 1, text: "به دلیل تقاضای پایین در بازار" },
      { id: 2, text: "به عنوان دارایی کمیاب و ملموس" },
      { id: 3, text: "به دلیل نیاز کم به امنیت در نگهداری" },
      { id: 4, text: "به خاطر ارزش کمتر نسبت به طلا" },
    ],
  },
])

const correctAnswers = reactive({
  1: 1,
  2: 2,
  3: 1,
  4: 4,
  5: 4,
  6: 2,
  7: 1,
  8: 2,
  9: 3,
  10: 3,
  11: 4,
  12: 2,
})

const userAnswers = reactive({
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 1,
  6: 2,
  7: 3,
  8: 4,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
})

const currentQuestionId = ref(questions[0].id)
const questionCounter = ref(1)
const indicator = ref()
const mobileIndicator = ref()

let boxes
let mobileBoxes

function setStyleOnAnswer(answerId) {
  if (correctAnswers[currentQuestionId.value] === answerId) {
    return ["question__answer--correct"]
  } else if (
    correctAnswers[currentQuestionId.value] !==
      userAnswers[currentQuestionId.value] &&
    userAnswers[currentQuestionId.value] === answerId
  )
    return ["question__answer--wrong"]
  else return []
}

function goToNextQuestion() {
  if (questionCounter.value + 1 > questions.length) return
  questionCounter.value++
  currentQuestionId.value = questions[questionCounter.value - 1].id
  scrollToNextIndicator()
}

function goToPreviousQuestion() {
  if (questionCounter.value === 1) return
  questionCounter.value--
  currentQuestionId.value = questions[questionCounter.value - 1].id
  scrollToPreviousIndicator()
}

function jumpToQuestion(questionId, boxIndex) {
  questionCounter.value = boxIndex + 1
  currentQuestionId.value = questionId
}

function scrollToNextIndicator() {
  const nextIndicatorRect = Array.from(
    indicator.value.querySelectorAll(".indicator__box")
  )[questionCounter.value - 1].getBoundingClientRect()
  const indicatorRect = indicator.value.getBoundingClientRect()

  if (nextIndicatorRect.bottom > indicatorRect.bottom) {
    indicator.value.scrollTo({
      top: indicator.value.scrollTop + (nextIndicatorRect.height + 30),
      behavior: "smooth",
    })
  }

  // For mobile
  const mobileNextIndicatorRect = Array.from(
    mobileIndicator.value.querySelectorAll(".indicator__box")
  )[questionCounter.value - 1].getBoundingClientRect()
  const mobileIndicatorRect = mobileIndicator.value.getBoundingClientRect()

  if (mobileNextIndicatorRect.right > mobileIndicatorRect.right) {
    mobileIndicator.value.scrollTo({
      left:
        mobileIndicator.value.scrollLeft + (mobileNextIndicatorRect.width + 30),
      behavior: "smooth",
    })
  }
}

function scrollToPreviousIndicator() {
  const prevIndicatorRect = Array.from(
    indicator.value.querySelectorAll(".indicator__box")
  )[questionCounter.value - 1].getBoundingClientRect()
  const indicatorRect = indicator.value.getBoundingClientRect()

  if (prevIndicatorRect.top < indicatorRect.top) {
    indicator.value.scrollTo({
      top: indicator.value.scrollTop - (prevIndicatorRect.height + 30),
      behavior: "smooth",
    })
  }

  // For mobile
  const mobilePrevIndicatorRect = Array.from(
    mobileIndicator.value.querySelectorAll(".indicator__box")
  )[questionCounter.value - 1].getBoundingClientRect()
  const mobileIndicatorRect = mobileIndicator.value.getBoundingClientRect()

  if (mobilePrevIndicatorRect.left < mobileIndicatorRect.left) {
    mobileIndicator.value.scrollTo({
      left:
        mobileIndicator.value.scrollLeft - (mobilePrevIndicatorRect.width + 30),
      behavior: "smooth",
    })
  }
}

const currentQuestion = computed(() =>
  questions.find((q) => q.id === currentQuestionId.value)
)

onMounted(async () => {
  await nextTick()
  boxes = indicator.value.querySelectorAll(".indicator__box")
  mobileBoxes = mobileIndicator.value.querySelectorAll(".indicator__box")
})
</script>

<template>
  <div class="page">
    <div class="sidebar">
      <img src="@/assets/images/logo.png" alt="logo" class="sidebar__logo" />
      <div class="line mt-6"></div>
      <h2 class="sidebar__title">پنل دانشجویی</h2>
      <div class="sidebar__user">
        <img
          src="@/assets/images/default_user.png"
          alt="user"
          class="sidebar__user-image"
        />
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
          <img
            src="../assets/images/header_cap_icon.svg"
            alt="header cap"
            class="header__icon"
          />
          <span class="header__text">نام دوره: ارز دیجیتال</span>
        </div>
        <div class="header__item">
          <img
            src="../assets/images/speed_meter_icon.svg"
            alt="header cap"
            class="header__icon"
          />
          <span class="header__text">سطح: پیشرفته</span>
        </div>
        <div class="header__item">
          <img
            src="../assets/images/calendar_icon.svg"
            alt="header cap"
            class="header__icon"
          />
          <span class="header__text">جلسه ۱۲</span>
        </div>
        <div class="header__item">
          <img
            src="../assets/images/user_icon.svg"
            alt="header cap"
            class="header__icon"
          />
          <span class="header__text">نام استاد: محمد حسن زاده</span>
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
            <button
              class="next-button"
              v-if="questionCounter < questions.length"
              @click="goToNextQuestion"
            >
              <i class="fa-solid fa-caret-right"></i>
              <span>سوال بعد</span>
            </button>
            <button
              class="prev-button"
              v-if="questionCounter > 1"
              @click="goToPreviousQuestion"
            >
              <span>سوال قبل</span>
              <i class="fa-solid fa-caret-left"></i>
            </button>
          </div>
          <h3 class="question__question">سوال {{ questionCounter }}</h3>
          <span class="mt-4">{{ currentQuestion.question }}</span>
          <ul class="question__answers-list mt-8">
            <li
              class="question__answer"
              v-for="(answer, index) in currentQuestion.options"
              :class="setStyleOnAnswer(answer.id)"
            >
              <span class="question__answer__number">{{ index + 1 }}</span>
              <span class="question__answer__text">{{ answer.text }}</span>
            </li>
          </ul>
        </div>
        <div class="indicator" ref="indicator">
          <div
            v-for="(q, i) in questions"
            class="indicator__box"
            @click="jumpToQuestion(q.id, i)"
            :class="{
              'indicator__box--answered':
                correctAnswers[q.id] === userAnswers[q.id],
              'indicator__box--not-answered':
                correctAnswers[q.id] !== userAnswers[q.id],
              'indicator__box--current': currentQuestionId === q.id,
            }"
          >
            {{ i + 1 }}
          </div>
        </div>
      </div>
      <div class="mobile-indicator" ref="mobileIndicator">
        <div
          v-for="(q, i) in questions"
          class="indicator__box"
          @click="jumpToQuestion(q.id, i)"
          :class="{
            'indicator__box--answered':
              correctAnswers[q.id] === userAnswers[q.id],
            'indicator__box--not-answered':
              correctAnswers[q.id] !== userAnswers[q.id],
            'indicator__box--current': currentQuestionId === q.id,
          }"
        >
          {{ i + 1 }}
        </div>
      </div>
      <div class="footer">
        <div class="guide">
          <div class="guide__box guide__box--success inline-block"></div>
          <span>پاسخ های درست</span>
          <div class="guide__box guide__box--danger inline-block"></div>
          <span>پاسخ های نادرست</span>
          <div class="guide__box guide__box--active inline-block"></div>
          <span>سوال جاری</span>
        </div>
        <div class="number-of-questions">
          تعداد کل سوالات : {{ questions.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/exam";
.question {
    &__answer {
        cursor: default;
    }
}
</style>
