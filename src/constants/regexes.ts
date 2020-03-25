export default {
  EMAIL_REGEX: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  PHONE_BODY_REGEX: /\d{6,13}$/i,
  IBAN: /^[A-Z]{2}(?:[ ]?[0-9]|[A-Z]|\s){15,34}$/,
  AMOUNT_REGEX: /^\d+(\.\d{0,2})?$/,
  ACCOUNT_NUMBER: /^.{1,34}$/,
  GIIN_NUMBER: /^.{16}$/,
  URL: /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/
}
