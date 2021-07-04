<template>
    <div class="info__card_item">
        <span :style="{ color: color }">
            {{ value }}
        </span>
        <label>
            {{ label }}
        </label>
    </div>
</template>

<script>
export default {

  props: ['value', 'label', 'color']

}
</script>
