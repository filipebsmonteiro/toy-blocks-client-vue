<template>
  <div class="block">
    <h6 class="block__title">{{ title }}</h6>
    <p class="block__description">{{ block.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'node',
  props: {
    block: {
      title: String,
      description: String
    }
  },
  computed: {
    title() {
      return String(this.block.title).padStart(3, '0')
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 4px;

  &__title{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 16px;
    /* identical to box height, or 160% */
    letter-spacing: 1.5px;
    text-transform: uppercase;

    /* Primary Color */
    color: #304FFE;
  }

  &__description{
    margin: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */
    letter-spacing: 0.25px;

    /* Dark Color */
    color: #263238;
  }
}
</style>