// const willGetYouADog = new Promise((resolve, reject) => {
// 	const rand = Math.random();
// 	if (rand < 0.5){
// 		resolve();
	
// 	} else {
// 		reject();
// 	}
// });

// willGetYouADog.then(() => {
// 	console.log("Yay, we get a dog!");

// }).catch(() => {
// 	console.log("No, we don't get a dog!");

// });

// const makeDogPromise = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const rand = Math.random();
// 		if (rand < 0.5){
// 			resolve();
		
// 		} else {
// 			reject();
// 		}}, 5000);
		
// 	});
// };

// makeDogPromise.then(() => {
// 	console.log("Yay, we get a dog!");

// }).catch(() => {
// 	console.log("No, we don't get a dog!");

// });

const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random();
		if (rand < 0.3){
			reject({status: 404});
		} else {
			const pages = {
				'/users': [{id: 1, username: 'Bobo'}, 
									 {id: 2, username: 'Bibby'}],
				'/about': 'This is the about page!'
			};
			const data = pages[url];
			resolve({status: 200, data});
		}
		}, 500);		
	});
};

fakeRequest('/users').then((res) => {
	console.log("request worked!");
	console.log(res.status, res.data);
}).catch((res) => {
	console.log(res.status);
	console.log("request failed!");
});