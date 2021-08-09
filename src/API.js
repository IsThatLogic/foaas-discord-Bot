const Axios = require('axios');

module.exports = class API
{
	/**
	*@method
	*@name foaasRequestFrom
	*@param {string} fuck
	*@param {string} target
	*@param {string} author
	*/
	async foaasRequestTarget(fuck, target, author)
	{
		let response = await Axios.get(`https://www.foaas.com/${fuck}/${target}/${author}`);
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
	*@param {string} author
	*/
	async foaasRequest(fuck, author)
	{
		let response = await Axios.get(`https://www.foaas.com/${fuck}/${author}`);
		let res = [
			response.data.message,
			response.data.subtitle
		]
		return res;
	}
}