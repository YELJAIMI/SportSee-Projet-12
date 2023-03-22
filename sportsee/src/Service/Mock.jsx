import { users, activity, average, performance } from "./mockData";

/**
 *
 * @param {Array} data - tableau d'objets d'informations utilisateurs
 * @param {String} userId - user id
 * @returns {Object} - objet des informations utilisateurs
 */

function filterMockData(data, userId) {
	const filteredResults = data.filter((elt) => elt.id === Number(userId)).shift();

	return filteredResults;
}

/**
 *
 * @param {Array} data - tableau d'objets d'informations utilisateurs
 * @param {String} userId - user id
 * @returns {Promise} - Promise object of user's info
 */
function getMockData(data, userId) {
	return new Promise((resolve) => {
		resolve(filterMockData(data, userId));
	});
}

/**
 * Class fetches data from mock API
 */
export default class MockService {
	/**
	 *
	 * @param {String} userId - user id
	 * @returns {Promise} Promise object represents user's infos
	 */
	static async getUserInfo(userId) {
		return getMockData(users, userId);
	}

	/**
	 *
	 * @param {String} userId - user id
	 * @returns {Promise} Promise object represents user's activity
	 */

	static async getUserActivity(userId) {
		return getMockData(activity, userId);
	}

	/**
	 *
	 * @param {String} userId - user id
	 * @returns {Promise} Promise object represents user's average session
	 */

	static async getUserAverageSession(userId) {
		return getMockData(average, userId);
	}

	/**
	 *
	 * @param {String} userId - user id
	 * @returns {Promise} Promise object represents user's performance
	 */

	static async getUserPerformance(userId) {
		return getMockData(performance, userId);
	}
}
