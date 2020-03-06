import { websiteCheck } from './websiteCheck';
test('testing URL', () => {
    window.alert = () => {};  
    expect(websiteCheck('Hello World')).toBe(false);
    expect(websiteCheck('https://www.espn')).toBe(true);
    expect(websiteCheck('http://www.triblive.com')).toBe(true);
    expect(websiteCheck('www.google.com')).toBe(false);
})