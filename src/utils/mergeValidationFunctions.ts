type ValidationResult = boolean | string

// eslint-disable-next-line
type ValidationFunc = (value: any) => ValidationResult

const mergeValidationFunctions = (
  ...functions: ValidationFunc[]
): ValidationFunc => (value): ValidationResult => {
  const foundErrorFunc = functions.find((func): boolean => {
    const validationResult = func(value)

    return validationResult === false || typeof validationResult === 'string'
  })

  if (!foundErrorFunc) return false

  return foundErrorFunc(value)
}

export default mergeValidationFunctions
