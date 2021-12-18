import 'normalize.css';
import 'sakura.css';
import drawUi from './view/redrawUi.js';
import '../public/todo.css';

drawUi();

if (module.hot) {
  module.hot.accept();
}
