export function capitalizeFirst(str) {
  return str.trim()[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function capitalizeFirstEach(str) {
  return str.replace(/-/g , ' ').trim().split(' ').map(capitalizeFirst).join(' ');
}