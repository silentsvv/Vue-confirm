import toast from './toast'
import alert from './alert'

var layer  = {};
var toastVm = null; 
var alertVm = null;

layer.install = function(Vue, options) {
  Vue.prototype.$toast = (content) => {
    if(!toastVm) {
      let toastTpl = Vue.extend(toast);
      toastVm = new toastTpl();
      let tpl = toastVm.$mount().$el;
      document.body.appendChild(tpl)
    }

    if(toastVm.show) {
      return false;
    }

    toastVm.show = true;

    setTimeout(function() {
      toastVm.show = false;
    }, 500)
  }

  Vue.prototype.$alert = (content) => {
    if(!alertVm) {
      let alertTpl = Vue.extend(alert);
      alertVm = new alertTpl();
      let tpl = alertVm.$mount().$el;
      document.body.appendChild(tpl);
    }

    alertVm.show = true;

    return new Promise((resolve, reject) => {
      let sure = alertVm.sure;

      alertVm.sure = () => {
        sure();
        resolve('close')
      }
    })
  }
}

export default layer;