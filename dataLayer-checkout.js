// 
dataLayer.push({
	'event': 'checkout',
	'ecommerce': {
		'checkout': {
			'actionField': {'step': 1, 'option': 'AG BankId'},
			'products': [{
				'name': 'Lotten',												// Name or ID is required.
				'id': 'ticket-subscription-001',
				'price': '160',													// Update if price changes
				'category': 'Ticket',
				'quantity': INTEGER											
			}]
		}
  }
})

// Alternative way of adding information about the checkout
// Use this after sending the `'event': 'checkout'` (the above).
dataLayer.push({
	'event': 'checkoutOption',
	'ecommerce': {
		'checkout_option': {
			'actionField': {'step': 1, 'option': 'AG Blankett'}
		}
	}
});
