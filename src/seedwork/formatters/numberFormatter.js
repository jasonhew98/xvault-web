let currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function formatPrice(price) {
  return currency.format(price);
}

export { formatPrice }