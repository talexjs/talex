import Button from './src/Button';
import type { App } from 'vue';
const components = [Button];
export function install(app: App) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
}
export default { install };
export { Button };
