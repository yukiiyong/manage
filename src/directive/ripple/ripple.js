import './ripple.css'

export default {
  bind(el, binding) {
    el.addEventListener('click', e => {
      const customOpts = Object.assign({}, binding.value)
      const opts = Object.assign({
        target: el,
        type: 'hit',
        color: 'rgba(0,0,0,0.15)'
      },customOpts)
      const target = opts.target
      if(target) {
        target.style.position = 'relative'
        target.style.overflow = 'hidden'
        const rect = target.getBoundingClientRect()
        let $ripple = target.querySelector('.ripple')
        if(!$ripple) {
          $ripple = document.createElement('span')
          $ripple.className = 'waves-ripple'
          $ripple.style.width = $ripple.style.height = Math.max(rect.width, rect.height) + 'px'
          target.appendChild($ripple)
        } else {
          $ripple.className = 'waves-ripple'
        }
        console.log(document.documentElement.scrollTop)
        console.log(document.body.scrollTop)
        $ripple.style.left = (e.pageX - rect.left - $ripple.offsetWidth / 2) + 'px'
        $ripple.style.top = (e.pageY - rect.top - $ripple.offsetHeight / 2) + 'px'
        // $ripple.style.left = (e.pageX - rect.left - $ripple.offsetWidth / 2 - document.documentElement.scrollTop || document.body.scrollTop) + 'px'
        // $ripple.style.top = (e.pageY - rect.top - $ripple.offsetHeight / 2 - document.documentElement.scrollTop || document.body.scrollTop) + 'px'
        $ripple.style.backgroundColor = opts.color
        setTimeout(() => {
          target.removeChild($ripple)
        }, 750)
        return false
      }
    }, false)
  }
}