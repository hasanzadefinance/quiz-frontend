<script setup>

</script>

<template>
  <div class="page">
    <img src="@/assets/images/design_image_index_page.png" alt="" class="design-image">
    <div class="quiz">
      <div class="quiz__title">
        <img src="@/assets/images/logo_colored.png" alt="hasanzadeh logo" class="logo">
        <h1 class="quiz__title__text">سامانه آزمون آکادمی حسن زاده</h1>
      </div>
      <div class="quiz__rules">
        <span class="quiz__rules__title">شرایط و قوانین شرکت در آزمون</span>
        <ol class="quiz__rules__list">
          <li class="quiz__rules__rule">این قانون توسط احسان عاشوری ساخته و پرداخته شده است. این یک قانون الکی است.</li>
          <li class="quiz__rules__rule">این قانون توسط علی شاه محمدی ساخته شده است.</li>
        </ol>
      </div>
      <div class="quiz__controls">
        <button class="begin-exam-button">شروع آزمون</button>
        <div class="quiz__time">
          <img src="@/assets/images/clock.png" alt="clock icon" class="quiz__time__icon">
          <span class="quiz__time__text">مدت آزمون: 10 دقیقه</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  min-height: 100vh;
  position: relative;
  background: url(@/assets/images/index_page_background.jpg);
  background-size: cover;
}

.design-image {
  position: fixed;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  width: 50rem;
  height: 31rem;
  object-fit: fill;
}

.quiz {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 4rem;
  right: 3rem;
  padding: 1.5rem;
  background-color: transparent;
  backdrop-filter: blur(2px);
  border-radius: 2rem;
  border: 4px solid white;
  box-shadow: rgba(17, 12, 46, 0.15) 0 48px 100px 0;
  gap: 1rem;
  max-width: 36rem;

  @media only screen and (max-width: 950px) {
    bottom: auto;
    right: auto;
    top : 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    background-color: #F1F4FD;
    backdrop-filter: none;
    max-width: 33rem;

  }

  &__title {
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;

    &__text {
      font-size: 1.75rem;
      color: #171264;
      font-weight: 700;
      @media only screen and (max-width: 950px) {
        font-size: 1.65rem;
      }
    }
  }

  &__time {
    display: flex;
    gap: .35rem;
    background-color: #C6D8FE;
    padding: .85rem 1rem;
    border-radius: .75rem;
    width: 50%;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 950px) {
      font-size: 1rem;
    }
    &__icon {
      width: 2rem;
    }
  }

  &__rules {
    background-color: white;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #B9CBF2;
    border-radius: .75rem;
    gap: 1.5rem;

    &__title {
      font-size: 1.35rem;
      color: #171264;
      font-weight: 700;
    }

    &__rule {
      font-size: 1.1rem;
      font-weight: 600;
      color: #5E605F;
      position: relative;
      padding-right: 1.5rem;

      &::before {
        content: '';
        position: absolute;
        right: 0;
        top: 21%;
        transform: translateY(-50%);
        width: .65rem;
        height: .65rem;
        border-radius: 50%;
        background-color: #5146EA;
      }
    }

    &__list {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      text-align: justify;
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
  }
}

.begin-exam-button {
  width: 50%;
  text-align: center;
  padding: .85rem .5rem;
  border-radius: .75rem;
  background-color: #9DF2DF;
  color: #171264;
  @media only screen and (max-width: 950px) {
    font-size: 1rem;
  }
}

.logo {
  width: 4rem;
  height: 4.5rem;
  @media only screen and (max-width: 950px) {
    width: 3.5rem;
    height: 3.8rem;

  }
}
</style>