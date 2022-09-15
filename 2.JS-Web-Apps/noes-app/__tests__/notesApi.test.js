const Api = require('../src/notesApi');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('API class', () => {
  it('calls fetch and loads data mock', () => {

    const api = new Api();

    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));

    api.loadData((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("Some value");
      expect(returnedDataFromApi.id).toBe(123);
    });
  });

  // it('calls fetch and loads data REAL', () => {

  //   const api = new Api();

  //   api.loadData((returnedDataFromApi) => {
  //     expect(returnedDataFromApi[0]).toBe("This note is coming from the server");

  //   });
  // });

//   describe('#createNote', () => {
//     it('POST request on fetch with a new note', () => {
//       const api = new Api();

//       api.createNote('Testing')
//       api.loadData((response) => {
//         console.log(response)
//         expect(response).toBe("Testing");
//       })
//     });
// })
})