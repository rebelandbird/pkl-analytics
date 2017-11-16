// Measure adding a product to a shopping cart by using an 'add' actionFieldObject
// and a list of productFieldObjects.
dataLayer.push({
	'event': 'addToCart',
	'ecommerce': {
		'currencyCode': 'SEK',
		'add': {                                // 'add' actionFieldObject measures.
			'products': [{                        //  adding a product to a shopping cart.
				'name': 'Lotten',
				'id': 'ticket-subscription-001',
				'price': '160',											// update if price changes
				'category': 'Ticket',
				'quantity': INTEGER
			}]
		}
	}
});