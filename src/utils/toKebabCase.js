import Debug from "debug";
const log = Debug('App:toKebabCaseContainer');
log.log = console.log.bind(console);

export function toKebabCase(str) {
  if (str) {
    return  str.toLowerCase().trim().replace(/ /g, '-');
  }

  log('"toKebabCase" function received a falsy argument. String expected.');
}