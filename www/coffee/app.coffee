require 'nlr-web'

onDeviceReady = ->
  $('#fb-link').on 'click', (event) ->
    event.preventDefault()
    window.open('https://facebook.com/nlreminder', '_system', 'location=yes')
  $('#github-link').on 'click', (event) ->
    event.preventDefault()
    window.open('https://github.com/nimaai/nlr-app', '_system', 'location=yes')

document.addEventListener('deviceready', onDeviceReady, false)
