export default function getParameterByName (name, url) {
  name = name.replace(/[\[\]]/g, '\\$&')
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)?')
  const results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return true
  return results[2]
}
