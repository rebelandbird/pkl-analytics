// Send transaction data with a pageview if available
// when the page loads. Otherwise, use an event when the transaction
// data becomes available.
dataLayer.push({
	'ecommerce': {
		'currencyCode': 'SEK',
		'purchase': {
			'actionField': {
				'id': transactionId,                  	// Transaction ID. Required for purchases and refunds.
				'affiliation': 'postkodlotteriet.se',
				'revenue': NUMBER,                     	// (string) Total transaction value (incl. tax and shipping)
			},
			'products': [{														// List of productFieldObjects.
				'name': 'Lotten',												// 'name' or 'id' (SKU) is required.
				'price': '165',													// update if price changes
				'category': 'Ticket',
				'quantity': INTEGER											// Optional fields may be omitted or set to empty string.
			}]
		}
	}
});