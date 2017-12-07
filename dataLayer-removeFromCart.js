// Measure the removal of a product from a shopping cart.
dataLayer.push({
	'event': 'removeFromCart',
	'ecommerce': {
		'currencyCode': 'SEK',
		'remove': {                               // 'remove' actionFieldObject measures.
			'products': [{                          //  removing a product to a shopping cart.
				'name': 'Lotten',
				'price': '165',											// update if price changes
				'category': 'Ticket',
				'quantity': INTEGER
			}]
		}
	}
});