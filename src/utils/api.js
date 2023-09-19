export const apiConfig = {
  baseUrl: `https://it.acceleratorpracticum.ru/api/v1`,
  events: `/events/`,
  edit: `/users-events/`,
  topics: `/topics/`,
  tags: `/tags/`,
  sities: `/sities/`,
  userEvents: `/users-events/`,
  search: `/events/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

class Api {
  constructor({
    baseUrl,
    events,
    edit,
    topics,
    tags,
    sities,
    userEvents,
    headers,
    search,
  }) {
    this._baseUrl = baseUrl;
    this._eventsEndpoint = events;
    this._editEventsEndpoint = edit;
    this._topicsEndpoint = topics;
    this._tagsEndpoint = tags;
    this._sitiesEndpoint = sities;
    this._userEvents = userEvents;
    this._headers = headers;
    this._searchEndpoint = search;
  }

  _makeUrl(endpoint) {
    return `${this._baseUrl}${endpoint}`;
  }

  _handleResponse(res) {
    if (!res.ok) {
      throw new Response("", {
        status: res.status,
        statusText: res.statusText,
      });
    }
    return res.json();
  }

  _getHeaders() {
    const token = localStorage.getItem("jwt");
    return {
      ...this._headers,
      Authorization: `Token ${token}`,
    };
  }

  getEvents() {
    const options = {
      method: "GET",
      headers: this._headers,
    };
    return fetch(this._makeUrl(this._eventsEndpoint), options).then(
      this._handleResponse
    );
  }

  getSelectedEvent(id) {
    const options = {
      method: "GET",
      headers: this._headers,
    };
    return fetch(this._makeUrl(this._eventsEndpoint) + `${id}/`, options).then(
      this._handleResponse
    );
  }

  getTopics() {
    const options = {
      method: "GET",
    };
    return fetch(this._makeUrl(this._topicsEndpoint), options).then(
      this._handleResponse
    );
  }

  getTags() {
    const options = {
      method: "GET",
    };
    return fetch(this._makeUrl(this._tagsEndpoint), options).then(
      this._handleResponse
    );
  }

  getSities() {
    const options = {
      method: "GET",
    };
    return fetch(this._makeUrl(this._sitiesEndpoint), options).then(
      this._handleResponse
    );
  }

  searchRequest(request) {
    const options = {
      method: "GET",
    };
    return fetch(
      this._makeUrl(this._searchEndpoint) + `${request}`,
      options
    ).then(this._handleResponse);
  }
}

export const apiEvents = new Api(apiConfig);
