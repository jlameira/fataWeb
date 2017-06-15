const normalizePhone = (value, previousValue) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 2) {
      return onlyNums + '-'
    }
    if (onlyNums.length === 6) {
      return onlyNums.slice(0, 1) + '-' + onlyNums.slice(1) + '-'
    }
  }
  if (onlyNums.length <= 2) {
    return onlyNums
  }
  if (onlyNums.length <= 7) {
    return onlyNums.slice(0, 1) + '-' + onlyNums.slice(1)
  }
  return onlyNums.slice(0, 2) + '-' + onlyNums.slice(2, 7) + '-' + onlyNums.slice(7, 11)
}

export default normalizePhone