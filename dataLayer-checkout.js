// Run for each step in checkout process, counting up 'step' in
// 'actionField' for each one. If the information is not sensitive,
// also provide a value for 'option' that represents what the user 
// chose in that step.
dataLayer.push({
	'event': 'checkout',
	'ecommerce': {
		'currencyCode': 'SEK',
		'checkout': {
			'actionField': {
				'step': INTEGER,
				'option': 'AG BankId'
			},
			'products': [{
				'name': 'Lotten',												// 'name or 'id' (SKU) is required.
				'price': '165',													// Update if price changes
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
			'actionField': {
				'step': INTEGER, 
				'option': 'AG Blankett'
			}
		}
	}
});
