import App from './App.svelte'
import './styles/global.css'
import './styles/variables.css'
import './styles/tables.css'

const app = new App({
  target: document.body,
  props: {
    // name: 'world',
  },
})

export default app
