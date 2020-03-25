const PASSWORD_RULES_REGEXES = {
  CHARS_AMOUNT: /.{8,}/i,
  NUMBERS: /\d+/i,
  LETTERS: /([A-Z]|[a-z])+/i,
  LOWERCASE_LETTERS: /([a-z])+/,
  UPPERCASE_LETTERS: /([A-Z])+/,
  SPECIAL_CHARS: /[$&+,:;=?@#|'<>.^*()%!\-_]+/i
}

export default PASSWORD_RULES_REGEXES
