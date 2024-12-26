<script setup>
import {ref} from "vue"

const answers = ref([
  {id: 1, text: 'به دلیل تقاضای پایین در بازار'},
  {id: 2, text: 'به عنوان دارایی کمیاب و ملموس'},
  {id: 3, text: 'به دلیل نیاز کم به امنیت در نگهداری'},
  {id: 4, text: 'به خاطر ارزش کمتر نسبت به طلا'},
])
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
        <div class="sidebar__little-box">کد کلاسی</div>
        <div class="sidebar__big-box">۵۷۶</div>
        <div class="sidebar__little-box">نام و نام خانوادگی</div>
        <div class="sidebar__big-box">محمد رحمانی</div>
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
          <button class="next-button">⭢ سوال بعد</button>
          <h3 class="question__question">سوال ۱</h3>
          <span
              class="mt-4">چرا نقره به عنوان یک گزینه مناسب برای سرمایه گذاری در بحران های اقتصادی شناخته می شود؟</span>
          <ul class="question__answers-list mt-8">
            <li class="question__answer"
                v-for="(answer, index) in answers">
              <span class="question__answer__number">{{ index }}</span>
              <span class="question__answer__text">{{ answer.text }}</span>
            </li>
          </ul>
          <button class="finish-button">
            <img src="@/assets/images/padlock.png" alt="lock" class="finish-button__icon">
            <span class="finish-button__text">ثبت نهایی آزمون</span>
          </button>
        </div>
        <div class="indicator">
          <div class="indicator__box" v-for="i in 15">{{ i }}</div>
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
        <div class="number-of-questions">تعداد کل سوالات : 15</div>
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

  &__logo {
    width: 8rem;
  }

  &__title {
    font-size: 1.3rem;
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
    font-size: .7rem;
    background-color: var(--color-primary);
    color: white;
    padding: .3rem .7rem .1rem;
    border-radius: .75rem .75rem 0 0;
    margin-top: 1rem;
  }

  &__big-box {
    border-radius: .75rem;
    padding: .4rem;
    background-color: var(--color-secondary);
    width: 100%;
    text-align: center;
    font-size: 1.1rem;
  }
}

.main {
  width: 82%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  flex-grow: 1;
  display: flex;
  gap: 1.5rem;
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
      background-color: #AEE9D5;
    }

    &--danger {
      background-color: #F5C1C3;
    }

    &--active {
      background-color: var(--color-primary);
    }
  }
}

.indicator {
  width: 4rem;
  border: 3px solid var(--box-border-color);
  background-color: var(--box-background-color);
  border-radius: 1rem;
  padding: .5rem 1rem;
  max-height: 39rem;
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
    padding: 1.5rem;
    border-radius: .5rem;
    color: var(--color-primary);

    &:not(:last-child) {
      margin-bottom: .75rem;
    }
  }
}

.next-button {
  align-self: flex-end;
  padding: .5rem .75rem;
  background-color: var(--color-secondary);
  border-radius: .5rem;
  font-size: 1rem;
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

  &__icon {
    margin-left: .5rem;
    width: 1.5rem;
  }
}
</style>