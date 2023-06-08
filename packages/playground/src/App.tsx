import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { Repl } from '@vue/repl'
import '@vue/repl/style.css'
export default defineComponent({
  name: 'App',
  props: { id: { type: Number as PropType<Number> } },
  emits: [],
  setup(props, ctx) {
    return () => {
      return <Repl />;
    };
  }
});