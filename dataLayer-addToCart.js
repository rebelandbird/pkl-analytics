// Measure adding a product to a shopping cart by using an 'add' actionFieldObject
// and a list of productFieldObjects.
dataLayer.push({
	'event': 'addToCart',
	'ecommerce': {
		'currencyCode': 'SEK',
		'add': {                                // 'add' actionFieldObject measures.
			'products': [{                        //  adding a product to a shopping cart.
				'name': 'Lotten',
				'price': '165',											// update if price changes
				'category': 'Ticket',
				'quantity': INTEGER
			}]
		}
	}
});