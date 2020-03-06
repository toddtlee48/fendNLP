//Test to see if the handleSubmit function is working properly. 
import { handleSubmit } from './formHandler'
test('Testing the function', () => {
    expect(handleSubmit).toBeInstanceOf(Function);
})