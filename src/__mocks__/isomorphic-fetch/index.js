export const mockJson = jest.fn().mockReturnValue({});
const headers = {
  get: jest.fn(),
};

export default jest.fn().mockReturnValue({
  status: 200,
  statusText: 'OK',
  headers,
  json: mockJson,
});
