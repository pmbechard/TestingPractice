function capitalize(s) {
  if (typeof s === 'string') {
    return s.slice(0, 1).toUpperCase() + s.slice(1);
  }
  return '';
}

export { capitalize };
