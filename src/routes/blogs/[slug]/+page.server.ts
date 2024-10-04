import type { PageLoad } from './$types';
import { GITHUB_TOKEN } from '$env/static/private';

export const load: PageLoad = async ({ params, fetch, setHeaders }) => {
	const variables = { number: parseInt(params.slug) };

	const query = `query GetDiscussion($number: Int!) {
		repository(name: "Gaurav-Blogs", owner: "TheGauravsahu") {
		  discussion(number: $number) {
			bodyHTML
			title
			createdAt
            updatedAt
			 author {
                login
                avatarUrl
                url
            }
		  }
		}
	  }`;
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});

	try {
		const res = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${GITHUB_TOKEN}`
			},
			body: JSON.stringify({
				query,
				variables
			})
		});
		const {
			data: {
				repository: { discussion }
			}
		} = await res.json();
		console.log(discussion);
		return discussion;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
