
var signinComp = new Vue({
	el: '#signin',
	data: {
		unameVal: '',
		passwordVal: ''
	},
	methods: {
		test: function (event) {
			console.log(`uname: ${this.unameVal}, pwd: ${this.passwordVal}`);
			console.log("Password: ", this.passwordVal);
			return {a:123,b:'ddd'};
		}
	}
});
