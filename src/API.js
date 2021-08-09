const Axios = require('axios');

module.exports = class API
{
	/**
	*@method
	*@name foaasRequestFrom
	*@param {string} fuck
	*@param {string} target
	*/
	async foaasRequestTarget(fuck, target)
	{
		let response = await Axios.get(`https://www.foaas.com/${fuck}/${target}/buffer`);
		//Why am I sending subtitle if I'm not going to use it?
		//Fuck you thats why!
		let res = [
			response.data.message,
			response.data.subtitle
		]
		return res;
	}

	/**
	*@method
	*@name foaasRequest
	*@param {string} fuck
	*/
	async foaasRequest(fuck, author)
	{
		let response = await Axios.get(`https://www.foaas.com/${fuck}/buffer`);
		let res = [
			response.data.message,
			response.data.subtitle
		]
		return res;
	}
}