<template>
  <component
    :is="name"
    :class="computedClass"
  />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import ArrowDown from "../../assets/icons/arrow-down.svg";
import ArrowUp from "../../assets/icons/arrow-up.svg";

export default defineComponent({
    name: 'svg-icon',
    components: {
      ArrowDown,
      ArrowUp
    },
    props: {
      name: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const computedClass = computed(() => {
            let prefix = 'icons';
            let iconClass = `${prefix}-${props.name}`;

            return [prefix, iconClass].join(' ').trim();
        })

        return { computedClass }
    }
})
</script>
<style>
  svg {
    width: 30px;
    height: auto;
  }
</style>
