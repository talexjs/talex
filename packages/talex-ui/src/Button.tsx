import { defineComponent } from 'vue';
import type { PropType } from 'vue';
export default defineComponent({
  name: 'Button',
  props: { id: { type: Number as PropType<Number> } },
  emits: [],
  setup(props, ctx) {
    return () => {
      return <div class=''></div>;
    };
  }
});