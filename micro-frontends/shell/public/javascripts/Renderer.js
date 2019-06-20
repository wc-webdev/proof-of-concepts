((window) => {
  function AppShell(interop) {
    const loadModules = async () => {
      const response = await window.fetch('modules.json')

      if (!response) {
        return null
      }

      return response.json()
    }

    const createIframe = (m, config = {}) => {
      const {
        viewportPrefix = '',
        viewportClass = 'viewport',
      } = config
      const { name, rootDevUrl, } = m

      const placeholderElementId = `${viewportPrefix}${name}`
      const slot = window.document.getElementById(placeholderElementId)
      if (!slot) {
        return null
      }
      const slotParent = slot.parentElement
      if (!slotParent) {
        return null
      }
      const parent = window.document.createElement('div')
      parent.setAttribute('id', placeholderElementId)
      parent.style.position = 'relative'
      parent.classList.add(viewportClass)

      const iframe = window.document.createElement('iframe')
      const iframePermissions = [
        'allow-scripts',
        'allow-same-origin',
        'allow-forms',
        'allow-modals',
        'allow-popups',
      ]
      iframe.setAttribute('src', rootDevUrl)
      iframe.setAttribute('sandbox', iframePermissions.join(' '))
      iframe.style.border = '0'
      iframe.style.width = '100%'
      iframe.style.height = '100%'
      iframe.style.position = 'absolute'
      iframe.style.top = '0'
      iframe.style.left = '0'
      parent.appendChild(iframe)
      slotParent.insertBefore(parent, slot)
      slotParent.removeChild(slot)

      return iframe
    }

    this.mount = async (config = {}) => {
      const modules = await loadModules()
      modules.forEach(m => {
        interop.register(createIframe(m, config))
      })
    }
  }

  window.Renderer = AppShell
})(window)
