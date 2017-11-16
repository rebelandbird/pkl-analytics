// Send transaction data with a pageview if available
// when the page loads. Otherwise, use an event when the transaction
// data becomes available.
dataLayer.push({
	'ecommerce': {
		'purchase': {
			'actionField': {
				'id': transactionId,                  	// Transaction ID. Required for purchases and refunds.
				'affiliation': 'postkodlotteriet.se',
				'revenue': NUMBER,                     	// Total transaction value (incl. tax and shipping)
				'shipping': '0'
			},
			'products': [{														// List of productFieldObjects.
				'name': 'Lotten',												// Name or ID is required.
				'id': 'ticket-subscription-001',
				'price': '160',													// update if price changes
				'category': 'Ticket',
				'quantity': INTEGER											// Optional fields may be omitted or set to empty string.
			}]
		}
	}
});