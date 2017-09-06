var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateSalesTax(salesData, taxRates) {
  	var result = salesData.reduce(function (accumulator, entry) {
  	  accumulator[entry.name] = accumulator[entry.name] || createSalesEntry();
  	  // accumulator[entry.name].totalSales = accumulator[entry.name].totalSales || 0;
  	  // accumulator[entry.name].totalTaxes = accumulator[entry.name].totalTaxes || 0;
  	  var entrySales = sumSales(entry.sales);
  	  accumulator[entry.name].totalSales += entrySales;
  	  var entryTaxes = entrySales * taxRates[entry.province];
  	  accumulator[entry.name].totalTaxes += entryTaxes;
      return accumulator;
    }, {});
    return result;
} 	

function sumSales(sales) {
	return sales.reduce(function(prev, cur) {
    	return prev + cur;
    }, 0);
}

function createSalesEntry() {
	return {
		totalSales: 0, totalTaxes: 0
	};
}
  // 		totalSales = 0;
  // 		totalTaxes = 0;
  // 		if (result.hasOwnProperty(salesData[company]['name'])) {

  // 		} else {
  // 			result[salesData[company]['name']] = {};
		// 	for (var info in salesData[company]) {
		// 		if (info == 'sales') {
		// 			totalSales = sumSales(salesData[company][info]);
		// 			result[company['name']['totalSales']] = totalSales;
		// 		}
		// 	} 

		// }
		
  // 		for (var province in salesTaxRates) {
  // 			if (company['province'] == province) {
  // 				totalTaxes = salesTaxRates[province] * totalSales;
  // 				console.log(totalTaxes);
  // 			}
  		/*result[company['name']]['totalSales'] += totalSales;
  		result[company['name']]['totalTaxes'] += totalTaxes;
		*/
		// }
  	// } 	
  	// return result;




var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
