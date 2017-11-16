// Measure the removal of a product from a shopping cart.
dataLayer.push({
	'event': 'removeFromCart',
	'ecommerce': {
		'remove': {                               // 'remove' actionFieldObject measures.
			'products': [{                          //  removing a product to a shopping cart.
				'name': 'Lotten',
				'id': 'ticket-subscription-001',
				'price': NUMBER,											// update if price changes
				'category': 'Ticket',
				'quantity': INTEGER
			}]
		}
	}
});