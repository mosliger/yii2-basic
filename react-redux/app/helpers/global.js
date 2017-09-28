export const isEmpey = (value = '') => {
  switch (typeof value) {
    case 'object': {
      if (value === null) return true
      let count = 0
      for (const i in value) {
        if (i) count += 1
      }
      return count <= 0
    }
    case 'number': {
      return false
    }
    case 'function': {
      return true
    }
    case 'boolean': {
      if (value) return false
      return true
    }
    default:
      return value.length <= 0
  }
}
